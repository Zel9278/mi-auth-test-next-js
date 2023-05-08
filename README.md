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
PERMISSON=miauthに使用する権限(例: write:notes,write:notifications)
ICON_URL=アイコンのURL(例: https://example.com/test.png)

```
