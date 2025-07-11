# hk-sample

## サイトURL
https://hk-project.com/hannan-kawaii/

## 開発環境の立ち上げ

1. `app`フォルダに移動します。
    ```bash
    cd app
    ```

2. 初回のみ、パッケージをインストールします。
    ```bash
    npm install
    ```

3. 開発環境を起動します。ターミナルに表示されるURL（例: http://localhost:5173/）をブラウザで開いてください。
    ```bash
    npm run dev
    ```

## 納品時の手順

1. 過去バージョンの削除
    ```bash
    rm -rf dist
    ```

2. 最新バージョンの作成
    ```bash
    npm run build
    ```

3. `app/dist`フォルダに本番用ファイルが生成されるので、そちらをサーバーにアップロードしてください。

## 開発環境の構成

- HTMLは`hbs`（Handlebars）を使用しています。
- CSSは`scss`（Sass）を使用しています。

## app/vite.config.mjsについて

`vite.config.mjs`では、以下の情報を管理しています。

- SEO情報
- 画像のバージョン（versionを上げてキャッシュを更新します）
- tweets（Twitter投稿のURL）

### tweetsの追加方法

1. Twitter投稿の右上にある3点アイコンをクリックし、「Embed Post」を選択します。
2. 別タブで開いたページで「Embedded Post」を押下し、「Copy Code」をクリックします。
3. 生成されたコード内の、`https://twitter.com/h_kawaiiproject`から始まる`href`のURL部分をコピーします。
    - 例: `https://twitter.com/h_kawaiiproject/status/1932422504410177778?ref_src=twsrc%5Etfw`

```html
<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">📢【公式HPついに公開！】<br>『はんなんkawaiiプロジェクト』参加の<br>✨クリエイター<br>✨ご当地キャラ/企業<br>✨VTuber<br>を公開中！販売グッズも続々追加中❗<br><br>公式HPはこちら▼<br>🔗 <a href="https://t.co/JhjwbbQgIS">https://t.co/JhjwbbQgIS</a><a href="https://twitter.com/hashtag/%E3%81%AF%E3%82%93%E3%81%AA%E3%82%93kawaii?src=hash&amp;ref_src=twsrc%5Etfw">#はんなんkawaii</a> <a href="https://twitter.com/hashtag/%E4%BD%9C%E5%AE%B6%E7%B4%B9%E4%BB%8B?src=hash&amp;ref_src=twsrc%5Etfw">#作家紹介</a> <a href="https://twitter.com/hashtag/%E3%82%B0%E3%83%83%E3%82%BA%E6%83%85%E5%A0%B1?src=hash&amp;ref_src=twsrc%5Etfw">#グッズ情報</a> <a href="https://t.co/f8V239c4SG">pic.twitter.com/f8V239c4SG</a></p>&mdash; はんなんKawaiiプロジェクト (@h_kawaiiproject) <a href="https://twitter.com/h_kawaiiproject/status/1932422504410177778?ref_src=twsrc%5Etfw">June 10, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
```

4. `vite.config.mjs`の`tweets`配列に、コピーしたURLを`""`で囲み、最後に`,`を付けて追加してください。
    - 例: `"https://twitter.com/h_kawaiiproject/status/1932392297980944832?ref_src=twsrc%5Etfw",`

5. 投稿を削除したい場合は、該当の行を削除するだけで問題ありません。

---

ご不明点があれば、プロジェクト管理者までご連絡ください。
