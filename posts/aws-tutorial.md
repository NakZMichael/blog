---
title: AWSのLambdaを初めて使ってみた。
date: 2021-04-25
---

アルバイトでサーバーレスでできそうな案件を担当することになったのでLambdaを使うことになった。

前々から名前は聞いていたし何んとなくわかってるつもりになっていたのですが、どうにもなかなか勉強しづらいなと感じたのが第一印象です。

何がわかりづらいって**ドキュメントが読みづらい&&探しづらい**。
[DeepL](https://www.deepl.com/ja/translator)に翻訳させたのかというほど日本語の説明がわかりづらいし、頻繁にUIが変更されているのかチュートリアルで押せと言っているボタンがなかったりする。まあ、多少なら料金が発生しても構わないと思って勉強しているのだが、これで請求されたらやりきれない。。。

ドキュメントの探し辛さの原因は僕が悪かった部分もあって、[このサイト](https://aws.amazon.com/jp/getting-started/?e=gs2020&p=console/#Get_to_Know_the_AWS_Cloud)を見つける前にLambdaの始め方みたいなサイトを見ていたからなんだが。。。

勉強もしたことないのにIAMとか謎の単語がどんどん出てくる。。。
こういうのは習うより慣れろの方が書学者はとっつきやすいのでハンズオン形式から説明を初めて欲しいのだが、、、
とか思っていたら、先ほどのチュートリアルを見つけてすぐにLambdaとかDynamoDBとかを試すことができた。

# 学生はAWS Educationに登録しよう！！！！

前言撤回である。

めちゃくちゃ勉強しやすい。ハンズオン形式でめちゃくちゃわかりやすく勉強できる。

これ一般にも無料で公開したらAWS使う企業もっと増えるのでは、、、

一応、実習中に使えるリソースは制限されているのでちゃんと認証を挟めば悪用できない気がするんだが、、、

まあ、きっと企業勤めの人用のプログラムもあるんかな？？？

AWS Educationめちゃくちゃ勉強しやすいし、LambdaとDynamoDBを使って試しにこのブログに何かしら使ってみたくなった。訪問者の統計とかなら簡単に作れそうだしやってみようかな。

現在はVercelのクラウドから公開しているから少しめんどくさそうだが、、、

## boto3凄いね

バイト先の社員さんが先にLambdaのコードを書いていてくれていたので読むことになったが勉強前はまるで読めなかったが、一通り勉強した後はboto3凄いなと思った。

## DynamoDBについて

全然データベースを意識しないで書けるし、便利。

あと、ちゃんとデータベースとか外部APIとの通信を呼び出すときはちゃんと適切に抽象化することが大切なんだなと改めて実感した。
