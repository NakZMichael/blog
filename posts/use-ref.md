---
title: React Hooksを使ってインスタンス変数のような物を実現する。
date: 2021-05-06
---

今回は

1. ちゃんと公式ドキュメントを読もう。
2. RxJSのSubscriptionってどうやってHookで扱えばいいんだっけ。

という話です。

まあ、公式ドキュメントを読みましょう。というのが題材なのでコードのサンプルを載せるだけ載せて詳しい解説は[公式ドキュメント](https://reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables)に任せるスタイルでいきます。

公式ドキュメントを読んでもよく分からないよというときにコードレシピだと思って読み返してみてください。

題材としては下の写真のようなストップウォッチを作ってみようと思います。

![ストップウォッチの完成図](/images/useRefScreenShot.png)

なんだかんだでクラスコンポーネントの方が自由度高くて書きやすいよなと思ってしまいました。
リソースの開放し忘れとか気付かなさそうで怖いですが。

# さっそくだがクラスコンポーネントで書いたコードを見てみる。

今回はこのクラスコンポーネントのコードと同じ挙動をHookで書いてみようという流れになります。

シチュエーションとしてはintervalをsubscribeしたりunsubscribeしたりしてストップウォッチを止めたり動かしたりするプログラムです。

まあ、`onClick`とか`componentWillUnmount`の中で`subscribe`したり`unsubscribe`してるのが見てわかると思います。

```typeScript
import React from 'react';
import {interval, Subscription} from 'rxjs';

type ClassComponentProps = {}
type ClassComponentState = {
    // 経過時間(s)
    timeSeconds:number
    // ストップウォッチが動いているかどうか
    isRunning:boolean
}

export class ClassComponent extends React.Component<ClassComponentProps, ClassComponentState> {
    // intervalのsubscription
    // 今回の話のメインになるインスタンス変数
    intervalPerSecondsSubscription?:Subscription

    constructor(props:ClassComponentProps) {
      super(props);
      this.state = {
        timeSeconds: 0,
        isRunning: false,
      };
    }

    onClick = () => {
      this.setState(
          {isRunning: !this.state.isRunning},
          // 実際にStateが更新された後にcallbackされる。
          ()=>{
            if (this.state.isRunning) {
              this.intervalPerSecondsSubscription = interval(1000).subscribe((x) => {
                this.setState({timeSeconds: this.state.timeSeconds + 1});
              });
            } else {
              this.intervalPerSecondsSubscription?.unsubscribe();
            }
          },
      );
    }

    componentWillUnmount = () => {
      this.intervalPerSecondsSubscription?.unsubscribe();
    }

    render = () => (
      <div>
        <h1>Class Component</h1>
        <h1>{this.state.timeSeconds} s</h1>
        <button onClick={this.onClick} >
          {this.state.isRunning ? 'Stop' : 'Start'}
        </button>
      </div>
    )
}

```

# Hooksを使ってみる。

みんなの大好きなHooksを使って同じコードを書いてみましょう。
そのためには`useRef`を使います。

正直、この`useRef`の使い方がいまいちわかっていなかったのですが、インスタンス変数のような物を関数コンポーネントの中で使いたい時はこれを使います。

詳しくは[公式ドキュメント](https://reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables)を読みましょう。

`useState`の返り値は`render`のたびに参照先が異なるのですが、`useRef`を使うとインスタンスの同一性が担保されます。

正し、参照先が変わらないので`useRef`の返り値を変更してもReactは変更を検知できません。きちんと使い分ける必要があります。

以下がサンプルコードです。

```TypeScript
import React, {useEffect, useRef, useState} from 'react';
import {interval, Subscription} from 'rxjs';

export const UseRefComponent = () => {
  const [timeSeconds, setTimeSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalPerSecondsSubscription = useRef<Subscription>();

  // componentWillUnmountの時の処理
  useEffect(() => () => intervalPerSecondsSubscription.current?.unsubscribe(), []);

  const onClick = (prevTimeSeconds:number, prevIsRunning:boolean) => {
    // isRunningとtimeSecondsはimmutableなので値をコピーしておいて
    // 新しい変数を更新する。
    let currentTimeSeconds = prevTimeSeconds;
    const currentIsRunning = !prevIsRunning;
    // useState()にはcallbackは定義できない。
    setIsRunning(currentIsRunning);
    if (currentIsRunning) {
      intervalPerSecondsSubscription.current = interval(1000).subscribe((x) => {
        currentTimeSeconds++;
        setTimeSeconds(currentTimeSeconds);
      });
    } else {
      intervalPerSecondsSubscription.current?.unsubscribe();
    }
  };

  return (
    <div>
      <h1>useRef Component</h1>
      <h1>{timeSeconds} s</h1>
      <button
        onClick={() => onClick(timeSeconds, isRunning)}
      >
        {isRunning ? 'Stop' : 'Start'}
      </button>
    </div>
  );
};

```

# Stateについて

今回の話とずれるのですが、クラスコンポーネントでは

```TypeScript
this.intervalPerSecondsSubscription = interval(1000).subscribe((x) => {
    this.setState({timeSeconds: this.state.timeSeconds + 1});
});
```

と書けば`setState`が実行されるたびに`this`の`state.timeSeconds`を毎回評価してくれるので正しく動くのですが、Hookを使った例だと

```TypeScript
intervalPerSecondsSubscription.current = interval(1000).subscribe((x) => {
    setTimeSeconds(timeSeconds + 1);
});
```

と書いてもsubscriptionを開始した時の`timeSeconds`の値を使い続けるので少し工夫する必要がありました。

正直、JavaScriptの`this`が謎の挙動をしなければクラスコンポーネントで十分幸せだったのではという気持ちになりました。

