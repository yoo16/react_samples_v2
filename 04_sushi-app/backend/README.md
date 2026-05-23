## Laravel インストール
composer コマンドでインストール

```bash
composer update
```

## DB設定
`.env` ファイルでDB接続設定をします。

```php
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=haru_sushi
DB_USERNAME=root
DB_PASSWORD=
```

## アプリケーションキー
アプリケーションキーを更新します。

```bash
php artisan key:generate
```

`.env` ファイルの `APP_KEY` が自動更新されます。

```bash
APP_KEY=xxxxxxx
```

## DBマイグレーション
データベースをマイグレートするコマンドを実行します。

```bash
php artisan migrate
```

YES を選択してMySQLにデータベースを作成します。

```bash
 Would you like to create it? ────────────────────────────────┐
 │ ● Yes / ○ No                                                 │
 └──────────────────────────────────────────────────────────────┘
```

成功すると以下のような `DONE` のコメントが表示されます。

```bash
  INFO  Running migrations.  

  0001_01_01_000000_create_users_table .......................................................................... 33.82ms DONE
  0001_01_01_000001_create_cache_table .......................................................................... 12.59ms DONE
  0001_01_01_000002_create_jobs_table ........................................................................... 22.82ms DONE
  2026_05_17_000100_create_sushi_domain_tables ................
```

## Laravelアプリ起動
アプリケーションサーバを起動します。 

``bash
php artisan serve
```

http://127.0.0.1:8000 にアクセスして確認します。