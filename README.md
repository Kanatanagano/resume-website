# resume-website

## アクティビティ図（ざっくり）
```mermaid
graph TD
    A[webサイトにアクセス] --> B[自己PR表示]
    B --> C[その下に自身のポートフォリオを表示]
    C --> D[JSONを使って自身のポートフォリオURLを表示]
    D --> E[を示すサイトを作っていく]

```

## 機能要件

- [ ] ウェブサイトが特定のサブドメイン（例：resume.example.org や portfolio.example.org）からアクセス可能である
- [ ] ホームページでは、あなた自身やサイトの他の各ページについて簡単に紹介がある
- [ ] これまでに作った全てのポートフォリオ・プロジェクトを一覧表示するページが存在する
- [ ] 専門職（ソフトウェアエンジニア）に関連したスキルや経験を表示するレジュメページがある
- [ ] 履歴書の PDF 版をダウンロードするためのリソースファイルが提供される
- [ ] サイトは HTTPS を介してアクセス可能である
- [ ] 全てのウェブページは、リンクとフッターを含むナビゲーションを備えた統一したレイアウトデザインに従う
- [ ] ウェブサーバは、パス URL スキームに基づいて全ての公開リソース（（ウェブページ、画像、動画、スタイルシート、スクリプトなど）を提供する
- [ ] JSONファイルを作って自身の製作物のサイトに飛べるようにする

## クラス図（ざっくり）

