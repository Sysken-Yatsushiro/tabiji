# Tabiji

## 環境構築

1. Windowsユーザーの方は、WSLをインストールしてください。<https://learn.microsoft.com/ja-jp/windows/wsl/install>

2. WSLでVSCodeを使えるようにしてください。<https://learn.microsoft.com/ja-jp/windows/wsl/tutorials/wsl-vscode>

3. WSLにNode.jsをインストールしてください。<https://learn.microsoft.com/ja-jp/windows/dev-environment/javascript/nodejs-on-wsl>



## 前提知識

もちろん、ここの記事に書いてあることを全部理解しないと開発できないわけではありません。むしろ、こういうコマンドは「習うより慣れろ」です。

でも、いきなり何も知らないコマンドを自分のPCに打ち込むことに気持ち悪さを感じる方は、きっと少なくないと思います。

もしそうなったら、以下の記事より、自分がこれから使うツールについて知っていただき、少しでもその気持ち悪さを軽減していただけたらと思います。

### Gitについて

<https://kitsune.blog/git-summary>

### Node.jsについて

<https://qiita.com/non_cal/items/a8fee0b7ad96e67713eb>

### npmについて
<https://qiita.com/sugurutakahashi12345/items/3cc49926faeaf25d3051>

### cdコマンドについて
<https://eng-entrance.com/linux-command-cd>



## 貢献する

### アプリを動かす方法

1. WSL上にて、以下のコマンドを入力し、このリポジトリをクローンしてください。

    ```Shell
    git clone https://github.com/Sysken-Yatsushiro/tabiji.git
    ```

2. `cd tabiji`でそこに移動し、`npm install`を実行してください。

3. `npm start`でプログラムを実行してください。プログラムにバグがなければ、QRコードが出てきます。

4. お手元のスマートフォンに、[Expo Go](https://expo.dev/expo-go)というアプリをインストールしてください。

5. スマートフォンを、PCと同じネットワークに接続してください。つまり、同じWi-fiに接続するか、PCをスマホでテザリングしてください。

6. Expo Goのカメラから、手順3で出てきたQRコードを読み取ってください。するとアプリが動くはずです。