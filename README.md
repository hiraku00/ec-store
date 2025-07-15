# Vintage Shop EC サイト

ヴィンテージ古着屋向け EC サイト（Next.js + TypeScript + Tailwind CSS + Stripe 対応）

## 主な機能

- 商品一覧・詳細・カート・会員登録・管理ダッシュボード
- 特集バナー・Instagram フィード連携
- ブランド/カテゴリ/サイズ/状態/タグでの絞り込み・検索
- Stripe クレジット決済・コンビニ払い（モック）
- 管理画面からの商品管理・受注レポート
- レスポンシブなヴィンテージ調デザイン

---

## 推奨環境

- Node.js 18.x 以上
- npm 9.x 以上

---

## セットアップ手順

1. リポジトリをクローン

```sh
git clone <YOUR_REPO_URL>
cd vintage-shop
```

2. 依存パッケージをインストール

```sh
npm install
```

3. 環境変数ファイルを作成

```sh
cp .env.example .env.local
# 必要に応じて値を編集
```

4. サンプルデータでローカル開発サーバー起動

```sh
npm run dev
```

5. [http://localhost:3000](http://localhost:3000) で動作確認

---

## デプロイ（Vercel 推奨）

1. [Vercel](https://vercel.com/) で新規プロジェクト作成
2. GitHub リポジトリを連携
3. 環境変数を Vercel の管理画面で設定
4. デプロイボタンを押すだけで公開

Netlify 等でも同様にデプロイ可能です。

---

## 主要ディレクトリ構成

```
/vintage-shop
├── README.md
├── .env.example
├── package.json
├── next.config.js
├── tailwind.config.js
├── /public
│   └── /images
├── /src
│   ├── /pages
│   ├── /components
│   ├── /lib
│   ├── /styles
│   └── /data
```

---

## 環境変数例（.env.example 参照）

- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` : Stripe 公開キー
- `STRIPE_SECRET_KEY` : Stripe シークレットキー
- `INSTAGRAM_ACCESS_TOKEN` : Instagram API 用トークン

---

## 注意事項

- 本番運用時は.env.local や Stripe キー等の管理にご注意ください。
- サンプルデータ・画像は自由に差し替えてご利用ください。
- 管理画面は認証必須です。

---

## ライセンス

MIT
