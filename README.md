# MiAuth Test With Next.js

Misskey の認証テストです、これは Typescript を使用しています。

## 使い方

1. .env.local の設定をします
2. コンソールを開き、「pnpm i」を実行します
3. 「pnpm i」が完了したら、「pnpm build」を実行します
4. 「pnpm build」が完了したら、「pnpm start」を実行します
5. ブラウザで「MiAuth Test のサーバーの URL」で設定した URL にアクセスします

## .env.local

```
BASE_URL=MiAuth TestのサーバーのURL(例: https://example.com)
NEXT_PUBLIC_API_URL=MisskeyのURL(例: https://m.c30.life)
API_SECRET=app/createで作成したApp Secret
```

## app/create の使い方

```
1: ロゴを押します
2: 「ツール」をホバーか押します
3: API Consoleを押します
4: 「EndPoint」の入力欄に「app/create」と入力します
5: 「Params (JSON or JSON5)」の入力欄に、補完がされていると思うので、
---
name: アプリケーションの名前
description: アプリケーションの説明
permission: アプリケーションに使用する権限（Array([]<-これです)型）
callbackUrl: 認証が完了したときにリダイレクトされるUrl（例: http://localhost:3000/api/auth/callback）(/api/auth/callbackは固定でお願いします。)
---
を設定します
6: Sendボタンを押します
7: 「Response」が出てくるので、その中の「Secret: 」の後のコピーします。
完了
```

![1](https://f.c30.life/18mt.png)
![2](https://f.c30.life/3oua.png)
![3](https://f.c30.life/zcrq.png)
