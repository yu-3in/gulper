# Gulper
gulp.jsで作られたタスク管理フレームワークです。

### 特徴
#### 1. 用意されているタスクが豊富
Gulperはデフォルトで多くのモジュールを用意しており、それらを組み合わせることで様々なタスクを作ることができます。例えば、「Sassのコンパイル監視」や「FTPアップロード」などがあります。

[- タスク一覧](#タスク)

### 2. 拡張性が高い
Gulperでは独自のコマンドルールを設けています。これによって、処理内容に合わせて階層構造を構成するだけで簡単にタスクを作成できます。詳しくは[拡張方法](#拡張方法)をご覧ください。

### 3. 起動速度が速い
通常、gulpfile.js単体でタスクを作成する場合、全てのパッケージ（すなわち必要のないパッケージも含む）を実行時にロードしてしまいます。
タスクの個数が少ない場合はまだ大きな問題とはなりませんが、タスクを増やしていくと簡単な処理でも起動に多くの時間がかかってしまいます。
これはとてもストレスフルなことです。

ここでGulperの登場です。Gulperでは必要なパッケージのみをロードします。
これによって、起動速度はタスクの個数に依存せず、非常にストレスフリーな開発を体験することができます。

## github

質問や要望、バグ報告などは全てgithubよりお願い致します。

https://github.com/yuuumbk/gulper

## クイックスタート
以下のコマンドをコピーしお好きなディレクトリで実行してください。
($記号以降がコマンドです)
ブラウザが起動しWelcome to Gulper!と表示されたら成功です。

※gulperディレクトリが作成されます。

```
$ git clone https://github.com/yuuumbk/gulper.git && cd gulper && npm run start && gulp
```

## インストール
### 前提
nodeとnpmが使える必要があります。以下のコマンドを実行し、それぞれバージョンが表示されればインストールされています。

```
$ node -v
v14.16.0
$ npm -v
7.16.0
```

### 作業ディレクトリの作成
初めにターミナルを開きます。作業ディレクトリを作成したいディレクトリに移動したら、お好みの名前で作業ディレクトリを作成しその中へ移動しましょう。
なお、今回では`gulper`という名前のディレクトリで作業していきます。

```
$ mkdir gulper
$ cd gulper
```
※以下のコマンドは全て、gulperディレクトリで実行してください。

### ファイルのダウンロードまたは作成

#### gitを使える方
gitを使える方は、以下のコマンドのいずれかを実行して必要ファイル一式をダウンロードしてください。<font color="Red">末尾のコロンを忘れると余分なディレクトリが作成されてしまう</font>ので注意してください。

```config
$ git clone git@github.com:yuuumbk/gulper.git .
#または
$ git clone https://github.com/yuuumbk/gulper.git .
```

#### それ以外の方
##### githubからzipをダウンロード
[こちら](https://github.com/yuuumbk/gulper)のgithubにアクセスして、緑色の`Code`ボタンをクリックしてください。
次に、`Download ZIP`からzipをダウンロードします。
ダウンロードされたら展開し、展開されたフォルダを[作業ディレクトリの作成](#作業ディレクトリの作成)で作成した作業ディレクトリのある場所へ移動させます。
そして、先ほど作成した作業ディレクトリを削除し、代わりに今移動してきたフォルダを作業ディレクトリと同じ名前へリネームします。


### npmパッケージのインストール
npmパッケージをインストールし、設定ファイルを生成します。

```
$ npm run start
```

これにて、環境構築は完了です！試しに、以下のコマンドを実行してみましょう。

ブラウザが起動してWelcome to Gulper!と表示されていれば成功です。おめでとうございます。


```
$ gulp
```

この状態で`src`ディレクトリに`html`ファイルや`sass`ファイルを作成すると最適化されたものが`dist`ディレクトリ配下に生成されます。

停止する際は、`Ctrl+C`を押してください。

## 使い方
簡単な使い方を紹介します。

### 1. srcディレクトリを編集
srcディレクトリを以下の構成で作成してください。このディレクトリは実際に作業をする作業ディレクトリとなります。
なお、この構成は変更できます。変更する場合は[設定](#設定)を参照してください。

```config
.
└── src
    ├── assets # # HTMLファイル以外
    │   ├── css/ # CSSファイル
    │   ├── img/ # 画像
    │   ├── js/ # JavaScriptファイル
    │   └── sass/ # Sassファイル
    ├── ejs/ # ejsファイル
    ├── pug/ #　Pugファイル
    └── index.html #　HTMLファイルはsrcディレクトリ直下
```

### 2. 設定
設定については`config/gulp.json`で一元管理されています。[設定](#設定)を参考に設定してください。
特にFTP関係のタスクを実行場合は必ず設定を行なってください。

### 3. タスク実行
最後にタスクを実行するためのコマンドを実行します。基本的には以下に挙げられたもののみで問題ありません。
「Sassコンパイルだけしたい」等の細かいタスクに関しては、[コマンド](#コマンド)を参照してください。

#### `gulp` または `gulp default`
コーディングを監視し、ブラウザでライブ表示します。以下で紹介している`gulp clean`と`gulp watch`の機能を併せ持ちます。
自動で最適化し、ライブ確認をしたい場合はこちらがおすすめです。

#### `gulp watch`
コーディングを監視します。
ブラウザでのライブ表示をさせず、リアルタイムで最適化したという場合はこちらがおすすめです。

#### `gulp watch:browser`
コーディングを監視し、ブラウザでライブ表示します。上の`gulp`との違いは、distディレクトリを初期化するかどうかです。
`gulp watch`系コマンドは基本この初期化を伴いません。

#### `gulp build`
srcディレクトリの内容を最適化したものをdsitディレクトリへ反映させます。
リアルタイムではなく、手動で最適化したい場合はこちらがおすすめです。

#### `gulp clean`
distディレクトリのsrcディレクトリの内容で初期化します。

srcディレクトリのファイルを削除してもdistディレクトリには反映されないため、納品前にはこのタスクを実行することを推奨しています。

なお、画像数が多い場合は処理に時間がかかるため、その場合は次のコマンドをおすすめします。

####`gulp clean:exc:img`
`clean except images`の意です。
画像以外のファイルを初期化します。

#### `gulp clean:prod`
`clean production`の意です。
圧縮などの納品用に最適化をしたものをdistディレクトリに格納します。

## ディレクトリ構成
デフォルトの構成は以下のようになっています。

```
.
├── dist
│   ├── assets
│   │   ├── css/
│   │   └── js/
│   └── index.html
├── src
│   ├── assets
│   │   ├── css/
│   │   ├── img/
│   │   ├── js/
│   │   └── sass/
│   ├── ejs/
│   ├── pug/
│   └── index.html
├── gulpfile.js/
├── config
│   ├── gulp.example.json
│   └── gulp.json
├── package-lock.json
├── package.json
├── .gitignore
├── LICENSE
└── README.md

```

gulpfile.jsディレクトリの中身は以下から見ることができます。

<details>
<summary>gulpfile.jsディレクトリ</summary><div>

```
.
└── gulpfile.js
    ├── lib
    │   ├── getFormattedDate.js
    │   ├── getModule.js
    │   └── getTask.js
    ├── index.js
    ├── modules
    │   ├── browser
    │   │   ├── init.js
    │   │   └── reload.js
    │   ├── build
    │   │   ├── css.js
    │   │   ├── ejs.js
    │   │   ├── html.js
    │   │   ├── img.js
    │   │   ├── js.js
    │   │   ├── pug.js
    │   │   ├── sass.js
    │   │   └── sitemap.js
    │   ├── css
    │   │   ├── expand.js
    │   │   └── min.js
    │   ├── del
    │   │   ├── css.js
    │   │   ├── html.js
    │   │   ├── img.js
    │   │   ├── js.js
    │   │   └── map.js
    │   ├── ftp
    │   │   └── index.js
    │   ├── html
    │   ├── img
    │   ├── js
    │   │   ├── bundle.js
    │   │   ├── expand.js
    │   │   └── min.js
    │   ├── pug
    │   ├── sass
    │   │   ├── compact.js
    │   │   ├── expand.js
    │   │   ├── min.js
    │   │   └── nest.js
    │   └── watch
    │       ├── css.js
    │       ├── ejs.js
    │       ├── ftp.js
    │       ├── html.js
    │       ├── img.js
    │       ├── js.js
    │       ├── pug.js
    │       ├── reload
    │       │   ├── css.js
    │       │   ├── dest.js
    │       │   ├── ejs.js
    │       │   ├── ftp.js
    │       │   ├── html.js
    │       │   ├── img.js
    │       │   ├── js.js
    │       │   ├── pug.js
    │       │   └── sass.js
    │       └── sass.js
    └── tasks
        ├── browser
        │   ├── index.js
        │   └── reload.js
        ├── build
        │   ├── css.js
        │   ├── ejs.js
        │   ├── html.js
        │   ├── img.js
        │   ├── index.js
        │   ├── js.js
        │   ├── pug.js
        │   ├── sass.js
        │   └── sitemap.js
        ├── clean
        │   ├── css.js
        │   ├── ejs.js
        │   ├── exc
        │   │   └── img.js
        │   ├── html.js
        │   ├── img.js
        │   ├── index.js
        │   ├── js.js
        │   ├── prod.js
        │   ├── pug.js
        │   └── sass.js
        ├── css
        │   ├── expand.js
        │   └── min.js
        ├── default
        │   └── index.js
        ├── del
        │   ├── css.js
        │   ├── html.js
        │   ├── img.js
        │   ├── index.js
        │   ├── js.js
        │   └── map.js
        ├── ftp
        │   └── index.js
        ├── html
        ├── img
        ├── js
        │   ├── bundle.js
        │   ├── expand.js
        │   └── min.js
        ├── sass
        │   ├── compact.js
        │   ├── expand.js
        │   ├── min.js
        │   └── nest.js
        └── watch
            ├── browser
            │   ├── css.js
            │   ├── dest.js
            │   ├── ejs.js
            │   ├── ftp.js
            │   ├── html.js
            │   ├── img.js
            │   ├── index.js
            │   ├── js.js
            │   ├── pug.js
            │   └── sass.js
            ├── css.js
            ├── dest.js
            ├── ejs.js
            ├── ftp.js
            ├── html.js
            ├── img.js
            ├── index.js
            ├── js.js
            ├── pug.js
            └── sass.js
```
</div></details>

---

大まかな流れは、srcディレクトリでコーディングし、distディレクトリに処理後のファイルをビルドするという形です。


distディレクトリは納品・配布用としてそのまま使うことができます。
![Gulper.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1142160/29ac5b69-1695-ebeb-660a-718a449b482c.png)

### src/
HTMLファイルやSassファイルなどを置いて開発するディレクトリです。`gulp watch`などの監視タスクを実行することで、この中で変更した内容が自動的に最適化され、distディレクトリに反映されます。

### dist/
`src`内のファイルを最適化されたものが格納されます。納品・配布用としてそのまま使うことができます。

基本的にこのディレクトリは直接編集するべきではありません。思わぬ誤作動を生み、ファイルが削除されてしまう可能性があります。

### gulpfile.js/
Gulperのvendorフォルダです。

|名前|役割|
|:-:|:-:|
|index.js|コマンドで指定されたタスクに関連する処理のみを実行します。関連しないファイルは読み込まれないため、起動速度がモジュール数に依存しません。|
|modules/|全てのモジュールが格納されています。モジュールを拡張する際はこちらで作業してください。|
|tasks/|全てのタスクが格納されています。タスクを拡張する際はこちらで作業してください。|

[- モジュールとは](#モジュールとは)
[- タスクとは](#タスクとは)


### config/
設定関連のフォルダです。ディレクトリ構成やFTPホストなどの全ての設定をこちらで行います。詳しくは[設定](#設定)を参照ください。

## コマンド
### コマンド記法
コマンド記法は以下の2種類です。

## モジュール
### モジュールとは
モジュールとは処理単位のことです。プラグインなどを用いて独自の処理を定義します。
例としては「Sassをコンパイルする」や「ファイルを圧縮する」などが挙げられます。

これらのモジュールは全て`gulpfile.js/modules/`ディレクトリに格納されています。

### 一覧
カラムの`モジュール名`は全て`gulpfile.js/modules/`からのパスとなっています。これは、[Gulperのコマンドルール](#コマンド記法)に則っています。

#### ビルド系
| モジュール名 | 処理内容 |
|:-:|:-:|
| build/html  | HTMLファイルをdistファイルへ出力します。  |
| build/pug  |  Pugファイルをコンパイルしてdistディレクトリへ出力します。 |
|  build/ejs | ejsファイルをコンパイルしてdistディレクトリへ出力します。  |
|  build/css | CSSファイルを設定に応じて__通常__・__圧縮__のどちらかの形式でdistファイルへ出力します。  |
| build/sass  |  SASSファイルを設定に応じて__通常__・__圧縮__・__ネスト__・__コンパクト__のいずれかの形式でコンパイルしdistディレクトリへ出力します。 |
| build/js  |  JavaScriptファイルを設定に応じて__通常__・__圧縮__のどちらかの形式でdistファイルへ出力します。 |
| build/img |  画像ファイルを圧縮し、distファイルへ出力します。 |
|  build/sitemap | サイトマップを生成し、distファイルへ出力します。  |

#### ウォッチ系
__監視＋ビルド系__の処理が主となります。
ウォッチリロード系は、変更時にブラウザリロードが自動で行われるため、ブラウザでのライブ表示タスクで重宝されます。

| モジュール名 | 処理内容 |
|:-:|:-:|
|  watch/html |  HTMLファイルを監視し、リアルタイムでdistディレクトリへ反映します。 |
|  watch/pug | Pugファイルを監視し、リアルタイムでdistディレクトリへ反映します。  |
| watch/ejs  | ejsファイルを監視し、リアルタイムでdistディレクトリへ反映します。 |
|  watch/css | CSSファイルを監視し、リアルタイムでdistディレクトリへ反映します。  |
|  watch/sass |  Sassファイルを監視し、リアルタイムでdistディレクトリへ反映します。 |
|  watch/js |  JavaScriptファイルを監視し、リアルタイムでdistディレクトリへ反映します。|
|  watch/img |  画像ファイルを監視し、リアルタイムでdistディレクトリへ反映します。 |
| watch/ftp  |  srcディレクトリ下の全てのファイルを監視し、FTPアップロードを自動で行います。 |
| watch/reload/html  | `watch/html`に加え、ブラウザリロードを行います。  |
| watch/reload/pug  |  `watch/pug`に加え、ブラウザリロードを行います。 |
| watch/reload/ejs  | `watch/ejs`に加え、ブラウザリロードを行います。  |
| watch/reload/css  |  `watch/css`に加え、ブラウザリロードを行います。 |
| watch/reload/sass  | `watch/sass`に加え、ブラウザリロードを行います。  |
| watch/reload/js  | `watch/js`に加え、ブラウザリロードを行います。  |
| watch/reload/img | `watch/img`に加え、ブラウザリロードを行います。  |
| watch/reload/ftp  | `watch/ftp`に加え、ブラウザリロードを行います。  |
| watch/reload/dest  | distディレクトリの変更を監視し、ブラウザリロードを行います。  |

####デリート系
distディレクトリ下の対象ファイルを削除します。

| モジュール名 | 処理内容 |
|:-:|:-:|
|  del/html |  HTMLファイルを削除します。 |
| del/css  | CSSファイルを削除します。  |
| del/js  | JavaScriptファイルを削除します。  |
| del/img  |  画像ファイルを削除します。 |
|  del/map |  CSS・JavaScript・サイトのマップファイルを削除します。 |

#### 　その他
| モジュール名 | 処理内容 |
|:-:|:-:|
| browser/init  | ブラウザを初期化し、新しく立ち上げます。  |
|  browser/reload | ブラウザをリロードします。  |
| css/expand  |  CSSファイルを通常形式でdistディレクトリへ出力します。 |
|  css/min |  CSSファイルを圧縮形式でdistディレクトリへ出力します。 |
|  sass/expand| Sassファイルを通常形式でdistディレクトリへ出力します。  |
|  sass/min | Sassファイルを圧縮形式でdistディレクトリへ出力します。  |
|  sass/nest | Sassファイルをネスト形式でdistディレクトリへ出力します。  |
|  sass/compact | Sassファイルをコンパクト形式でdistディレクトリへ出力します。  |
|  js/expand| JavaScriptファイルを通常形式でdistディレクトリへ出力します。  |
|  js/min | JavaScriptファイルを圧縮形式でdistディレクトリへ出力します。  |
| js/bundle  |  複数のJavaScriptファイルを一つにまとめたバンドルファイルをdistディレクトリへ出力します。 |
|  ftp/index |  FTPアップロードを行います。 |

## タスク
### タスクとは
タスクとは、モジュールを組み合わせた一連の処理のことです。組み合わせによって様々なタスクを作ることができます。
また、タスク名はそのままコマンドとして実行することができます。詳しくは[コマンド](#コマンド)を参照してください。
さらに、タスクを用いてタスクを作ることも可能です。詳しくは[拡張方法](#拡張方法)を参照してください。

####モジュールとの違い
モジュールは処理単位であり、それ自体がタスクとして扱われるわけではありません。仮にタスクがモジュール単体を使用し、処理内容がモジュールと全く同じ場合でも、実際に実行されるのはタスクとしての処理であり、モジュールはその処理の部品の一つに過ぎません。

数学的に表すと、`モジュール ⊂ タスク`となります。

モジュールはタスクで用いられて初めて威力を発揮するのです。

### 一覧
カラムの`タスク名`は全て`gulpfile.js/tasks/`からのパスとなっています。これは、[Gulperのコマンドルール](#コマンド記法)に則っています。

#### デフォルト
| タスク名 | 処理内容 |
|:-:|:-:|
| gulp  | コーディングを監視し、ブラウザでライブ表示します。以下で紹介している`gulp clean`と`gulp watch`の機能を併せ持ちます。  |
| gulp default  |   同上|

#### ビルド系
| タスク名 | 処理内容 |
|:-:|:-:|
| build/index  | 以下の全てのファイルをdistディレクトリへ出力します。  |
| build/html  | HTMLファイルをdistディレクトリへ出力します。  |
| build/pug  |  Pugファイルをコンパイルしてdistディレクトリへ出力します。 |
|  build/ejs | ejsファイルをコンパイルしてdistディレクトリへ出力します。  |
|  build/css | CSSファイルを設定に応じて__通常__・__圧縮__のどちらかの形式でdistファイルへ出力します。  |
| build/sass  |  SASSファイルを設定に応じて__通常__・__圧縮__・__ネスト__・__コンパクト__のいずれかの形式でコンパイルしdistディレクトリへ出力します。 |
| build/js  |  JavaScriptファイルを設定に応じて__通常__・__圧縮__のどちらかの形式でdistファイルへ出力します。 |
| build/img |  画像ファイルを圧縮し、distファイルへ出力します。 |
|  build/sitemap | サイトマップを生成し、distファイルへ出力します。  |

#### ウォッチ系
ウォッチブラウザ系は、ブラウザをライブ表示することで、リアルタイムで変更を確認できます。
一方で通常のウォッチ系ではブラウザを起動しないため、軽量で作業をすることができます。

| タスク名 | 処理内容 |
|:-:|:-:|
|  watch/index |   以下の全てのファイルを監視し、リアルタイムでdistディレクトリへ反映します。 |
|  watch/html |  HTMLファイルを監視し、リアルタイムでdistディレクトリへ反映します。 |
|  watch/pug | Pugファイルを監視し、リアルタイムでdistディレクトリへ反映します。  |
| watch/ejs  | ejsファイルを監視し、リアルタイムでdistディレクトリへ反映します。 |
|  watch/css | CSSファイルを監視し、リアルタイムでdistディレクトリへ反映します。  |
|  watch/sass |  Sassファイルを監視し、リアルタイムでdistディレクトリへ反映します。 |
|  watch/js |  JavaScriptファイルを監視し、リアルタイムでdistディレクトリへ反映します。|
|  watch/img |  画像ファイルを監視し、リアルタイムでdistディレクトリへ反映します。 |
| watch/ftp  |  srcディレクトリ下の全てのファイルを監視し、FTPアップロードを自動で行います。 |
| watch/dest  | distディレクトリを監視し、リアルタイムでdistディレクトリへ反映します。  |
| watch/browser/html  | HTMLファイルを監視し、ブラウザでライブ表示します。  |
| watch/browser/pug  |  Pugファイルを監視し、ブラウザでライブ表示します。 |
| watch/browser/ejs  | ejsファイルを監視し、ブラウザでライブ表示します。  |
| watch/browser/css  |  CSSファイルを監視し、ブラウザでライブ表示します。 |
| watch/browser/sass  | Sassファイルを監視し、ブラウザでライブ表示します。  |
| watch/browser/js  |JavaScriptファイルを監視し、ブラウザでライブ表示します。 |
| watch/browser/img | 画像ファイルを監視し、ブラウザでライブ表示します。  |
| watch/browser/ftp  |`watch/ftp`に加え、ブラウザでライブ表示します。  |
| watch/browser/dest  | distディレクトリを監視し、ブラウザでライブ表示します。  |

####デリート系
distディレクトリ下の対象ファイルを削除します。

| タスク名 | 処理内容 |
|:-:|:-:|
|  del/index |  以下の全てのファイルを削除します。 |
|  del/html |  HTMLファイルを削除します。 |
| del/css  | CSSファイルを削除します。  |
| del/js  | JavaScriptファイルを削除します。  |
| del/img  |  画像ファイルを削除します。 |
|  del/map |  CSS・JavaScript・サイトのマップファイルを削除します。 |

#### クリーン系
distディレクトリのファイルをsrcディレクトリの内容で初期化・再構成します。
srcディレクトリのファイルを削除しただけでは、distディレクトリのファイルは自動的に削除されないため、納品前にこのタスクを使用することをおすすめします。

| タスク名 | 処理内容 |
|:-:|:-:|
| clean/index  | 以下の全てのファイルを再構成します。  |
| clean/html  | HTMLファイルを再構成します。  |
| clean/pug  | Pugファイルを再構成します。  |
| clean/ejs  | ejsファイルを再構成します。  |
| clean/css  | CSSファイルを再構成します。  |
| clean/sass  | Sassファイルを再構成します。  |
| clean/js  | JavaScriptファイルを再構成します。  |
| clean/img  | 画像ファイルを再構成します。  |
| clean/prod  | CSS・JavaScriptファイルを納品用に圧縮し、全てのファイルを再構成します。  |
| clean/exc/img  | 画像ファイルを除くすべてのファイルを再構成します。  |

#### その他
| モジュール名 | 処理内容 |
|:-:|:-:|
| browser/init  | ブラウザを初期化し、新しく立ち上げます。  |
|  browser/reload | ブラウザをリロードします。  |
| css/expand  |  CSSファイルを通常形式でdistディレクトリへ出力します。 |
|  css/min |  CSSファイルを圧縮形式でdistディレクトリへ出力します。 |
|  sass/expand| Sassファイルを通常形式でdistディレクトリへ出力します。  |
|  sass/min | Sassファイルを圧縮形式でdistディレクトリへ出力します。  |
|  sass/nest | Sassファイルをネスト形式でdistディレクトリへ出力します。  |
|  sass/compact | Sassファイルをコンパクト形式でdistディレクトリへ出力します。  |
|  js/expand| JavaScriptファイルを通常形式でdistディレクトリへ出力します。  |
|  js/min | JavaScriptファイルを圧縮形式でdistディレクトリへ出力します。  |
| js/bundle  |  複数のJavaScriptファイルを一つにまとめたバンドルファイルをdistディレクトリへ出力します。 |
|  ftp/index |  FTPアップロードを行います。 |



## 設定

```python
{
  "paths": {
    "root": "./dist", # destディレクトリのルート
    "siteUrl": "https://example.com", # サイトURL（サイトマップタスクで必須）
    "html": { # HTML
      "src": "./src/**/*.{html,htm}", #監視対象ファイル
      "dest": "./dist", # 出力先ディレクトリ
      "index": "index.html" #　インデックスファイル
    },
    "pug": { #Pug
      "src": "./src/pug/**/*.pug", # 監視対象ファイル
      "dest": "./dist" # 出力先ディレクトリ
    },
    "ejs": { #ejs
      "src": "./src/ejs/**/*.ejs", # 監視対象ファイル
      "srcBuild": [ # 実際に出力するファイル
        "./src/ejs/**/*.ejs",
        "!./src/ejs/**/_*.ejs" # "_"から始まるファイルは出力しない
      ],
      "dest": "./dist" #　出力先ディレクトリ
    },
    "sass": {
      "src": "./src/assets/sass/**/*.scss", # 監視対象ファイル
      "dest": { # 出力先ディレクトリ
        "expand": "./dist/assets/css", # 通常ファイル
        "compress": "./dist/assets/css", # 圧縮ファイル
        "nest": "./dist/assets/css", # ネストファイル
        "compact": "./dist/assets/css"　# コンパクトファイル
      }
    },
    "css": {
      "src": "./src/assets/css/**/*.css", # 監視対象ファイル
      "dest": { # 出力先ディレクトリ
        "expand": "./dist/assets/css", # 通常ファイル
        "compress": "./dist/assets/css" # 圧縮ファイル
      }
    },
    "js": {
      "src": "./src/assets/js/**/*.js", # 監視対象ファイル
      "dest": {　# 出力先ディレクトリ
        "expand": "./dist/assets/js", # 通常ファイル
        "compress": "./dist/assets/js" # 圧縮ファイル
      }
    },
    "img": {
      "src": "./src/assets/img/**/*.{jpg,JPG,jpeg,JPEG,png,PNG,gif,GIF,svg,SVG}", # 監視対象ファイル
      "dest": "./dist/assets/img" # 出力先ディレクトリ
    },
    "browser": {
      "src": "./src/**", # 監視対象ファイル
      "dest": "./dist/**" # 出力先ディレクトリ
    },
    "delMap": [　# 削除対象マップファイル
      "./dist/**/*.css.map",
      "./dist/**/*.js.map",
      "./dist/sitemap.xml"
    ]
  },
  "ftp": {
    "host": "FTP_HOST", # サーバーホスト名
    "user": "", # サーバーユーザー名
    "password": "", # サーバーパスワード
    "remoteRoot": "/public_html", # サーバールートディレクトリ
    "localRoot": "./dist", # ローカルルートディレクトリ（destディレクトリ）
    "include": [ # 対象ファイル
      "*"
    ],
    "exclude": [ # 除外ファイル
      "*.css.map",
      "*.scripts.map"
    ],
    "deleteRemote": false, # アップロードの都度サーバーのファイルを削除するかどうか
    "forcePasv": true, # パッシブモードを強制する
    "sftp": false, # SFTPまたはFTP
    "debounceDelay": 10000 # アップロード間隔
  },
  "overrideBrowserslist": [ # CSSオートプレフィックス
    "last 2 versions",
    "> 2%"
  ],
  "pug": {
    "pretty": true # コンパイル時に改行とインデントを挿入する。
  },
  "ejs": {
    "ext": ".html" # 出力ファイル拡張子
  },
  "sass": {
    "outputStyle": { # 出力スタイル
      "expand": false, # 通常
      "compress": true, # 圧縮
      "nest": false, # ネスト
      "compact": false # コンパクト
    }
  },
  "css": {
    "outputStyle": { # 出力スタイル
      "expand": false, # 通常
      "compress": true # 圧縮
    }
  },
  "js": {
    "outputStyle": { # 出力スタイル
      "expand": false, # 通常
      "compress": true # 圧縮
    },
    "bundle": {
      "name": "bundle.js", # バンドルファイル名
      "src": [ # バンドル対象ファイル
        "./dist/assets/js/**/*.js"
      ],
      "dest": "./dist/assets/js" # 出力先ディレクトリ
    }
  },
  "propertySort": "smacss", # CSSプロパティソート: samcss, alphabetically, concentric-css
  "sourcemaps": { # ソースマップ拡張子
    "sass": ".",
    "css": ".",
    "js": "."
  },
  "suffix": {
    "ejs": ".html",
    "sass": {
      "expand": "", # 通常
      "compress": ".min", # 圧縮
      "nest": "", # ネスト
      "compact": "" # コンパクト
    },
    "css": {
      "expand": "", # 通常
      "compress": ".min" # 圧縮
    },
    "js": {
      "expand": "", # 通常
      "compress": ".min" # 圧縮
    }
  },
  "map": { # バップファイルを生成するかどうか
    "sass": true,
    "css": true,
    "js": true
  },
  "imagemin": {
    "pngquant": { # PNG
      "quality": { # 圧縮度
        "min": 0.6,
        "max": 0.8
      },
      "mozjpeg": { # JPG
        "quality": 80 # 圧縮度
      }
    }
  },
  "browser": {
    "port": 3000, # ブラウザポート
    "reloadThrottle": 3000, # リロード間隔
    "reloadOnRestart": true
  }
}

```


## 拡張方法
現在製作中です。今しばらくお待ちください。
