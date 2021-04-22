---
title: GatsbyからNext.jsにブログを移行した件について
date: 2021-04-22
---

# Next.jsの方が自由になれた気がする。

タイトルのとおり、GatsbyからNext.jsにブログを移行しました。
また、ブログの記事をマークダウンで管理しているのですが、ついでmdxから普通のmdに切り替えました。

GatsbyからNext.jsに2日で乗り替えました。
これは気持ちの問題ですが、エンジニアとしては設定ファイルを2時間いじるより10時間コードを書かされた方がストレスが少ないのではないでしょうか。
少なくとも僕はそうです。

また、GatsbyはGatsby特有の覚えなきゃいけないことがあって、汎用的なフロントエンドの知識が身につくかと言われると怪しいなと感じましたが、Next.jsはほぼほぼプレーンなReactと似たような書き心地ですし、少なくともチュートリアルのブログ作り程度ではReactから逸脱していると感じませんでした。


## なぜmdxからmdに切り替えたか

これは気持ちの問題じゃなくてかなり悩みましたが、mdを使うことにしました。
mdxの何をメリットに感じてデメリットに感じたのかを僕なりに書いてみます。

### mdxのメリット

- コンポーネントをそのまま使えるのでJavaScriptについて勉強した内容をそのままブログに反映できる。

例えば、以下のような内容をmdxファイルに直接書くことができます。

```javascript: material-ui.mdx
// # Material UIは凄い (実際はコメントアウトする必要ないです。)
import Button from '@material-ui/core/Button';

<Button variant="outlined" color="primary">
    Primary
</Button>
<Button variant="contained" color="secondary">
    Secondary
</Button>
```

そうすると、ブログの中でMaterial UIのボタンが実際に表示されるんです。
凄いですよね。

### mdxのデメリット

- Reactありきの技術なのでReactが時代遅れになったときに過去のブログを簡単に移行できない。
    - 現に僕がGatsbyで書いた記事は引越しできませんでした。と言っても1回しか書いていなかったので損はほとんどないですが。

技術ブログはちょっとした名刺がわりになるのかなと思っているので過去のブログを引き継げない可能性はできるだけ減らしておきたいですよね。



## 初めての投稿なので色々タグを試してみる

デザインとか作り直したかったのと、mdxとmdでほとんど使うライブラリ違うので
パーツもほとんど書き直しました。

- [みんな大好きexample.com](http://example.com/)
- # Heading1
- ## Heading2
- ## Heading3

```javascript: myfile.js
console.log("hoge");

import React from 'react';

export const MyComponent = () => {
    return (
        <h1>
            Hello World!
        </h1>
    )
}
```

- `console.log("Hello World!")`