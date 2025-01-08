---
title: eBPF ドキュメント
ogTitle: eBPF とは？eBPF への入門と探求
ogDescription: eBPF のステップごとの詳しい紹介と多くの参考資料
ogKeywords: ebpf, bpf, xdp, introduction, tutorial, what is, deep dive, documentation
---

## eBPFとは？

eBPFはLinuxカーネルに起源を持つ革新的な技術で、オペレーティングシステムにおけるカーネルのような特権を要する環境の中で、サンドボックス化されたプログラムを実行できます。eBPFはカーネルのソースコードの改変や、カーネルモジュールのロードを必要とせずに、安全かつ効率的なカーネルの機能拡張に利用されています。

歴史的に、オペレーティングシステムはカーネルの特権によるシステム全体を観測・制御できる能力のおかげで、オブザーバビリティやセキュリティ、ネットワーキング機能を実装するのに理想的な場所でした。同時に、オペレーティングシステムのカーネルは、その基幹的な役割や安定性、セキュリティに対する高い要求のせいで進化が困難です。そのため、これまでオペレーティングシステムレベルの技術革新のペースは、オペレーティングシステムの外で実装される機能と比較して低いとされてきました。

![概要](overview.png)

eBPF はこの常識を根本的に覆します。オペレーティングシステムの内部でサンドボックス化されたプログラムが実行できるため、アプリケーション開発者は eBPF プログラムを実行して、実行中のオペレーティングシステムに機能を追加できます。そして、オペレーティングシステムは JIT（Just-In-Time）コンパイラと検証器によって安全性とネイティブにコンパイルされたかのような実行効率を保証します。このことが次世代ネットワーキングやオブザーバビリティ、セキュリティなどの様々な分野でeBPFを活用したプロジェクトの台頭を促してきました。

今日、eBPFは様々な用途で利用されています。例として、現代的なデータセンタやクラウドネイティブな環境における高効率なネットワーキングや負荷分散、低負荷できめ細かいセキュリティ観測データの取得、アプリケーション開発者に対してトレースの補助、パフォーマンス改善のための情報の提供、攻撃を未然に防ぐアプリケーションやコンテナランタイムのセキュリティの強化などがあります。eBPF の可能性は無限大で、eBPF によってもたらされるイノベーションはまだ始まったばかりです。

### eBPF.io とは？

eBPF.io は eBPF を学習したり、eBPF を協力して発展させていくすべての人々のための場です。eBPF は開かれたコミュニティで、すべての人々がコミュニティに参加・協力できます。あなたが eBPF に入門したいとき、さらに詳しい資料を見つけたいとき、あるいは主要な eBPF プロジェクトに貢献する最初の一歩を踏み出したいとき、eBPF.io はその道のりをサポートしてくれます。

### eBPF や BPF とはなんの略？

BPF は元々は Berkeley Packet Filter の略称です。しかし、今では eBPF（extended BPF）はパケットフィルターより多くのことができるようになり、頭文字以上の意味を持つようになりました。現在 eBPF は略称ではなくひとつの単語として認識されています。Linux のソースコード上では BPF という用語が残っており、ツール・ドキュメント内では一般的に BPFと eBPF は同義の単語として用いられています。元来の BPF は eBPF と区別するために cBPF（classic BPF）と呼ばれることもあります。

### この蜂（bee）の名前は？

この蜂は eBPF の公式ロゴで、Vadim Shchekoldin によって生み出されました。[最初の eBPF Summit](https://ebpf.io/summit-2020.html) で投票があり、この蜂 は eBee という名前になりました。（[ロゴ](https://ebpf.foundation/wp-content/uploads/sites/9/2023/03/ebpf_logo_color_on_white-2.png)の利用については Linux Foundation [ブランドガイドラインを](https://ebpf.foundation/brand-guidelines/)参照してください。）

## eBPF への入門

この章では簡単に eBPF を紹介します。より詳細に eBPF について知りたい場合は [eBPF & XDP Reference Guide](https://cilium.readthedocs.io/en/stable/bpf/) を参照してください。eBPF プログラムを開発しようとしている、あるいは eBPF を利用した手法の活用に興味がある開発者にとって、基本的な概念やアーキテクチャを理解するのによい資料となっています。

### フックの概要

eBPF はイベント駆動のプログラムで、カーネルやアプリケーションが特定のフックポイントを通ったときに実行されます。システムコールや関数の入口と出口、カーネルトレースポイントやネットワークイベントなど、様々なフックポイントが予め定義されています。

![システムコールへのフック](syscall-hook.png)

ユースケースに対して適切な定義済みのフックが存在しないとき、kernel probe（kprobe）や user probe（uprobe）を作成して、カーネルやユーザープログラムの任意の場所にeBPFプログラムをアタッチできます。

![フックの概要](hook-overview.png)

### eBPFプログラムの書き方

多くの場合においてユーザは eBPF を直接利用せず、代わりに [Cilium](https://ebpf.io/projects/#cilium) や [bcc](https://ebpf.io/projects/#bcc)、[bpftrace](https://ebpf.io/projects/#bpftrace) といったプロジェクトを通して間接的に利用します。これらのプロジェクトでは eBPF を抽象化した機能を提供し、ユーザは直接 eBPF プログラムを書く代わりに、eBPF で実装された機能を目的ごとに利用できます。

![Clang](clang.png)

高レベルな抽象化が存在しない場合、ユーザは eBPF プログラムを直接書く必要があります。eBPF プログラムは通常バイトコードの形で Linux カーネルにロードされます。もちろんバイトコードを直接書けますが、一般的な開発手法としては、[LLVM](https://llvm.org/) のようなコンパイラを利用して擬似的なC言語のコードを eBPF バイトコードにコンパイルします。

### ローダと検証器のアーキテクチャ

対象のフック先を特定したら、eBPF プログラムを bpf システムコールによって Linux カーネルにロードします。これは通常 eBPF ライブラリによって実行されます。次の節では利用可能な開発ツールを紹介します。

![Go](go.png)

プログラムが Linux カーネル内にロードされると、対象のフックにアタッチされるまで次の2つのステップがあります。

### 検証

検証ステップでは eBPF プログラムが安全に実行できるかを確かめます。このステップでは以下のようにプログラムがいくつかの条件を満たしているかを検証します。

![ローダ](loader.png)

- eBPF プログラムをロードするプロセスは必要な権限（特権）を持っています。非特権 eBPF が有効でない限り、特権プロセスのみが eBPF プログラムをロードできます。
- eBPF プログラムはクラッシュしたりシステムに悪影響を及ぼしたりしません。
- プログラムは常に実行が完了します（つまり、プログラムは無限ループに陥って処理が実行し続けられることはありません）。

### JIT コンパイル

実行時（JIT）コンパイルはプログラムの実行速度を最適化するために、汎用的なバイトコードをマシン固有の命令セットに変換します。これにより eBPF プログラムはネイティブにコンパイルされたカーネルコードやカーネルモジュールと同等の実行速度になります。

### マップ

eBPF プログラムの重要な要素は、収集した情報を共有し、状態を保存する機能です。この目的のため、eBPF プログラムは eBPF マップの概念を活用して幅広いデータ構造を使ってデータを格納・取得します。eBPF マップは eBPF プログラムからだけでなく、システムコールを介してユーザ空間のアプリケーションからも参照できます。

![マップの構造](map-architecture.png)

以下のリストはデータ構造の多様性を知るために、サポートされてるマップタイプの一部を示したものです。各マップについて、CPU 間で共有されるものと CPU 毎に作成されるものの両方が利用できます。

- ハッシュテーブル、配列
- LRU (Least Recently Used)
- リングバッファ
- スタックトレース
- LPM (Longest Prefix match)
- ...

### ヘルパー関数

eBPF プログラムは任意のカーネル関数を呼び出せません。これを許可すると、eBPF プログラムが特定のカーネルバージョンに依存し、プログラムの互換性が複雑になります。その代わり、eBPF プログラムはカーネルが提供する、一般的で安定したAPIであるヘルパー関数を使って関数を呼び出せます。

![ヘルパー](helper.png)

利用可能なヘルパー関数は常に進化しています。利用可能なヘルパー関数の例：

- 乱数生成
- 現在日時の取得
- eBPF マップへのアクセス
- プロセス/cgroup コンテキストの取得
- ネットワークパケットと転送ロジックの操作

### 末尾呼び出しと関数呼び出し

eBPF プログラムは末尾呼び出しと関数呼び出しで構成できます。関数呼び出しは eBPF プログラム内で定義し、実行できます。末尾呼び出しは別の eBPF プログラムを呼び出して実行でき、通常のプロセスの execve() システムコールが操作するように、実行コンテキストを置換します。

![末尾呼び出し](tailcall.png)

### eBPFの安全性

_大いなる力には、大いなる責任が伴う。_

eBPF は信じられないほど強力な技術であり、今や多くの重要なソフトウェアインフラストラクチャの中核で使われています。eBPF の開発当時、eBPF を Linux カーネルに組み込むにあたって安全性は最も重要とされました。eBPF の安全性は次のいくつかの要素によって保証されます。

#### 特権の要求

非特権 eBPF が有効でない限り、eBPF プログラムを Linux カーネルにロードする全てのプロセスは特権モード（root）で実行されている、あるいは CAP_BPF 権限が必要です。これにより信頼されていないプログラムは eBPF プログラムをロードできません。

もし非特権 eBPF が有効であれば、非特権プロセスは機能を制限し、カーネルへのアクセスを制限した状態で eBPF プログラムをロードできます。

#### 検証器

プロセスが eBPF プログラムのロードを許可されても、全てのプログラムは eBPF 検証器を通過しなければなりません。 eBPF 検証器はプログラム自身の安全性を保証します。例として：

- プログラムは必ず実行が完了するか検証されます。例えば、eBPF プログラムが実行途中で停止しないかや、無限ループに陥らないかです。eBPF プログラムはループを含んでいる場合がありますが、検証器はループの終了条件が必ず真になることが保証されている場合のみ、そのようなプログラムを許可します。
- プログラムは初期化されていない変数を使ったり、境界外のメモリにアクセスしてはいけません。
- プログラムはシステムが要求するサイズ以内でなければなりません。つまり、任意の大きさのプログラムはロードできません。
- プログラムの複雑さは有限でなければいけません。検証器は全ての実行されうる命令パスを評価し、設定された複雑さの上限値の範囲内で解析を完了できなければいけません。

検証器はそのプログラムが安全に実行できるかを検証するツールで、プログラムが何をするかを調査するツールではありません。

#### 堅牢性

検証に成功した場合、eBPF プログラムはプログラムが特権または非特権プロセスからロードされたかに応じて堅牢化プロセスを通して実行されます。このプロセスの内容は次の通りです。

- **プログラムの実行時保護**：カーネル空間のメモリに保存された eBPF プログラムは保護され、読み取り専用として扱われます。カーネルのバグであれ、悪意のある操作であれ、eBPF プログラムが何らかの理由で変更されそうになると、カーネルはその破壊された、あるいは変更されたプログラムを実行する代わりにクラッシュします。
- **スペクター脆弱性に対する緩和策**：投機的実行が可能な CPU の使用においては、分岐の誤った予測や、サイドチャネルを通した動作状況の観測といった副作用をもたらします。例えば、eBPF プログラムは、投機的命令の実行下でのメモリアクセスを制御された領域にリダイレクトするために、メモリアクセスをマスクしたり、検証機が投機的実行でのみアクセス可能なプログラムパスも追跡したり、JIT コンパイラは末尾呼び出しを直接呼び出しに変換できない場合に Retpoline を発行したりします。
- **定数の隠蔽**：コード中の全ての定数は JIT スプレー攻撃を防ぐため隠蔽されます。これにより、攻撃者がコードを実行するために eBPF プログラムのメモリ区域にジャンプできるような別のカーネルバグが存在する場合に、攻撃者による実行可能なコードの定数への埋め込みを防ぎます。

#### ランタイムコンテキストの抽象化

eBPF プログラムは任意のカーネル空間のメモリに直接アクセスできません。プログラムのコンテキスト外にあるデータやデータ構造のアクセスには、 eBPF ヘルパー関数を介してアクセスしなければなりません。これにより一貫したデータアクセスが保証され、このようなアクセスは eBPF プログラムの特権の対象となります。例えば、実行中の eBPF プログラムはその変更が安全だと保証されれば、特定のデータ構造のデータを変更できます。eBPF プログラムはカーネル内のデータ構造を闇雲には変更できません。

## なぜ eBPF なのか？

### プログラムの表現力

まずはたとえ話から始めましょう。GeoCities を知っていますか？20 年前、ほとんど全ての Web ページは静的なマークアップ言語（HTML）で書かれていました。Web ページは基本的に、ある特定のアプリケーション（Web ブラウザ）で表示できるドキュメントでした。今日の Web ページを見ると、Web ページは成熟したアプリケーションとなり、Web 関連技術はコンパイルを必要とする言語で記述された多くのアプリケーションを置き換えてしまいました。何がこの進化を可能にしたのでしょうか？

![Geocities](geocities.png)

端的に言えば、JavaScript の登場によるプログラムの表現力の進化です。JavaScript はブラウザをほとんど独立したオペレーティングシステムへと進化させました。

どうしてこのような進化が起こったのでしょうか？プログラマはもはや特定のブラウザのバージョンに制限されなくなりました 。新しい HTML タグが必要だと標準化団体を説得する代わりに、必要な部品をプログラムできるようになり、ブラウザ上で動作するアプリケーションの開発ペースがブラウザ本体の開発ペースと切り離せるようになりました。もちろんこれは少し簡略化しすぎており、HTML は時と共に進化し成功に貢献しましたが、HTML そのものの進化だけでは不十分だったでしょう。

この例を eBPF に当てはめる前に、JavaScript を語る上で不可欠な概念をいくつか見てみましょう。

- **安全性**：信頼されていないコードがユーザのブラウザの中で実行されます。これは JavaScript プログラムをサンドボックス化して、ブラウザのデータへのアクセスを抽象化して解決しています。
- **継続的デリバリー**：プログラムロジックの進化は、定期的に更新される新しいブラウザのバージョンへの依存なしに可能でなければなりません。これは任意のロジックを構築するのに十分に低レベルな部品を提供して解決しています。
- **パフォーマンス**：プログラムの表現力は最小限のオーバーヘッドで提供されなければなりません。これはJust-in-Time（JIT）コンパイラの導入により解決しています。上記すべての概念は eBPF でも同様に見つけられます。

### eBPF の Linux カーネルへの影響

eBPF へと話を戻しましょう。eBPF が Linux カーネルをプログラムできることへの影響を理解するために、Linux カーネルのアーキテクチャや、アプリケーションとハードウェアがどう相互に連携しているかの大まかな理解が助けになります。

![カーネルのアーキテクチャ](kernel-arch.png)

Linuxカーネルの主な役割はハードウェアや仮想ハードウェアを抽象化して、アプリケーションが計算資源を利用・共有できる一貫した API（システムコール）の提供です。これを実現するために、幅広いサブシステムや領域に責任を分散して維持しています。それぞれのサブシステムは大抵の場合、ユーザーの需要に応じて設定可能です。もし、望む挙動が設定できない場合、カーネルの変更が必要となり、従来では2つの方法があります。

<CardsList>

<CardItem title="ネイティブサポート">

1. カーネルのソースコードを変更して、Linuxカーネルコミュニティにその変更の必要性を納得させる。
2. 新しいカーネルのバージョンが一般的に利用可能となるまで何年か待つ。

</CardItem>

<CardItem title="カーネルモジュール">

1. カーネルモジュールを書く。
2. 新しいカーネルがリリースされるたびに壊れる可能性があるため、定期的に修正が必要。
3. セキュリティ対応の不足により、利用しているLinuxカーネルが脆弱になるリスクがある。

</CardItem>

</CardsList>

eBPF はカーネルのコード変更やカーネルモジュールの導入なしに、Linuxカーネルの挙動をプログラムできる新しい手段です。これは様々な面で、JavaScript や他のスクリプト言語が、修正が難しいシステムに進化をもたらしたことと似ています。

## 開発ツールチェーン

eBPF プログラムの開発や管理を助ける様々な開発ツールチェーンが存在します。それらすべてのツールがユーザの様々な需要に応えています。

#### bcc

BCC はユーザが eBPF プログラムを内部に埋め込んだ Python プログラムを書けるようにするフレームワークです。このフレームワークは主にアプリケーションやシステムのプロファイリング・トレーシングへの活用を想定しています。eBPF プログラムでは統計情報の取得やイベントの生成をし、一方でユーザー空間ではデータを収集して人間が読める形で表示します。Python プログラムを実行すると eBPF のバイトコードが生成され、カーネルにロードされます。

![bcc](bcc.png)

#### bpftrace

bpftrace は Linux eBPF で利用可能なトレーシング用の高レベルな言語で、カーネルバージョン4.xから利用できます。bpftrace はスクリプトを eBPF のバイトコードにコンパイルするために、LLVM をバックエンドに利用しています。さらに、bpftrace は BCC を利用してLinux eBPF サブシステムやカーネルの動的なトレーシング（kprobe）やユーザ空間の動的なトレーシング（uprobe）、tracepoint などの既存の Linux のトレーシング機能と連携します。bpftrace で使われるスクリプト言語は awk や C 言語、DTrace や System Tap といった以前からあるトレーシングツールの影響を受けています。

![bpftrace](bpftrace.png)

#### eBPF Go ライブラリ

eBPF Go ライブラリは eBPF バイトコードの取得や、eBPF プログラムのロード・管理する機能を疎結合にする包括的な eBPF ライブラリです。eBPF プログラムは一般的に高レベル言語で記述され、clang/LLVM を利用して eBPF バイトコードにコンパイルされます。

![Go](go.png)

#### libbpf C/C++ ライブラリ

libbpf ライブラリは clang/LLVM から生成された eBPF オブジェクトファイルをカーネルにロードしたり、アプリケーションが利用可能なライブラリ API を提供して BPF システムコールを抽象化する C/C++ ベースの包括的な eBPF ライブラリです。

![Libbpf](libbpf.png)

## その他資料

さらにeBPFについて学びたい方は、以下の追加資料を読んでください。

### のドキュメント

- [BPF & XDP Reference Guide](https://cilium.readthedocs.io/en/stable/bpf/), Cilium Documentation, Aug 2020
- [BPF Documentation](https://www.kernel.org/doc/html/latest/bpf/index.html), BPF Documentation in the Linux Kernel
- [BPF Design Q&A](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/bpf/bpf_design_QA.rst), FAQ for kernel-related eBPF questions

### チュートリアル

- [Learn eBPF Tracing: Tutorial and Examples](http://www.brendangregg.com/blog/2019-01-01/learn-ebpf-tracing.html), Brendan Gregg's Blog, Jan 2019
- [XDP Hands-On Tutorials](https://github.com/xdp-project/xdp-tutorial), Various authors, 2019
- [BCC, libbpf and BPF CO-RE Tutorials](https://facebookmicrosites.github.io/bpf/blog/), Facebook's BPF Blog, 2020
- [eBPF Tutorial: Learning eBPF Step by Step with Examples](https://github.com/eunomia-bpf/bpf-developer-tutorial), Various authors, 2024

### 発表

#### 一般

- [eBPF and Kubernetes: Little Helper Minions for Scaling Microservices](https://www.youtube.com/watch?v=99jUcLt3rSk) ([Slides](https://kccnceu20.sched.com/event/ZemQ/ebpf-and-kubernetes-little-helper-minions-for-scaling-microservices-daniel-borkmann-cilium)), Daniel Borkmann, KubeCon EU, Aug 2020
- [eBPF - Rethinking the Linux Kernel](https://www.infoq.com/presentations/facebook-google-bpf-linux-kernel/) ([Slides](https://docs.google.com/presentation/d/1AcB4x7JCWET0ysDr0gsX-EIdQSTyBtmi6OAW7bE0jm0)), Thomas Graf, QCon London, April 2020
- [BPF as a revolutionary technology for the container landscape](https://www.youtube.com/watch?v=U3PdyHlrG1o&t=7) ([Slides](https://fosdem.org/2020/schedule/event/containers_bpf/attachments/slides/4122/export/events/attachments/containers_bpf/slides/4122/BPF_as_a_revolutionary_technology_for_the_container_landscape.pdf)), Daniel Borkmann, FOSDEM, Feb 2020
- [BPF at Facebook](https://www.youtube.com/watch?v=ZYBXZFKPS28), Alexei Starovoitov, Performance Summit, Dec 2019
- [BPF: A New Type of Software](https://youtu.be/7pmXdG8-7WU?t=8) ([Slides](https://www.slideshare.net/brendangregg/um2019-bpf-a-new-type-of-software)), Brendan Gregg, Ubuntu Masters, Oct 2019
- [The ubiquity but also the necessity of eBPF as a technology](https://www.youtube.com/watch?v=mFxs3VXABPU), David S. Miller, Kernel Recipes, Oct 2019

#### 探求

- [BPF and Spectre: Mitigating transient execution attacks](https://www.youtube.com/watch?v=6N30Yp5f9c4) ([Slides](https://ebpf.io/summit-2021-slides/eBPF_Summit_2021-Keynote-Daniel_Borkmann-BPF_and_Spectre.pdf))
  , Daniel Borkmann, eBPF Summit, Aug 2021
- [BPF Internals](https://www.usenix.org/conference/lisa21/presentation/gregg-bpf) ([Slides](https://www.usenix.org/system/files/lisa21_slides_gregg_bpf.pdf)), Brendan Gregg, USENIX LISA, Jun 2021

#### Cilium

- [Advanced BPF Kernel Features for the Container Age](https://www.youtube.com/watch?v=PJY-rN1EsVw) ([Slides](https://fosdem.org/2021/schedule/event/containers_ebpf_kernel/attachments/slides/4358/export/events/attachments/containers_ebpf_kernel/slides/4358/Advanced_BPF_Kernel_Features_for_the_Container_Age_FOSDEM.pdf)), Daniel Borkmann, FOSDEM, Feb 2021
- [Kubernetes Service Load-Balancing at Scale with BPF & XDP](https://www.youtube.com/watch?v=UkvxPyIJAko&t=21s) ([Slides](https://linuxplumbersconf.org/event/7/contributions/674/attachments/568/1002/plumbers_2020_cilium_load_balancer.pdf)), Daniel Borkmann & Martynas Pumputis, Linux Plumbers, Aug 2020
- [Liberating Kubernetes from kube-proxy and iptables](https://www.youtube.com/watch?v=bIRwSIwNHC0) ([Slides](https://docs.google.com/presentation/d/1cZJ-pcwB9WG88wzhDm2jxQY4Sh8adYg0-N3qWQ8593I/edit#slide=id.g7055f48ba8_0_0)), Martynas Pumputis, KubeCon US 2019
- [Understanding and Troubleshooting the eBPF Datapath in Cilium](https://www.youtube.com/watch?v=Kmm8Hl57WDU) ([Slides](https://static.sched.com/hosted_files/kccncna19/20/eBPF%20and%20the%20Cilium%20Datapath.pdf)), Nathan Sweet, KubeCon US 2019
- [Transparent Chaos Testing with Envoy, Cilium and BPF](https://www.youtube.com/watch?v=gPvl2NDIWzY) ([Slides](https://static.sched.com/hosted_files/kccnceu19/54/Chaos%20Testing%20with%20Envoy%2C%20Cilium%20and%20eBPF.pdf)), Thomas Graf, KubeCon EU 2019
- [Cilium - Bringing the BPF Revolution to Kubernetes Networking and Security](https://www.youtube.com/watch?v=QmmId1QEE5k) ([Slides](https://www.slideshare.net/ThomasGraf5/cilium-bringing-the-bpf-revolution-to-kubernetes-networking-and-security)), Thomas Graf, All Systems Go!, Berlin, Sep 2018
- [How to Make Linux Microservice-Aware with eBPF](https://www.youtube.com/watch?v=_Iq1xxNZOAo) ([Slides](https://www.slideshare.net/InfoQ/how-to-make-linux-microserviceaware-with-cilium-and-ebpf)), Thomas Graf, QCon San Francisco, 2018
- [Accelerating Envoy with the Linux Kernel](https://www.youtube.com/watch?v=ER9eIXL2_14), Thomas Graf, KubeCon EU 2018
- [Cilium - Network and Application Security with BPF and XDP](https://www.youtube.com/watch?v=ilKlmTDdFgk) ([Slides](https://www.slideshare.net/ThomasGraf5/dockercon-2017-cilium-network-and-application-security-with-bpf-and-xdp)), Thomas Graf, DockerCon Austin, Apr 2017

#### Hubble

- [Hubble - eBPF Based Observability for Kubernetes](https://static.sched.com/hosted_files/kccnceu20/1b/Aug19-Hubble-eBPF_Based_Observability_for_Kubernetes_Sebastian_Wicki.pdf), Sebastian Wicki, KubeCon EU, Aug 2020

### 書籍

- [Learning eBPF](https://isovalent.com/books/learning-ebpf/?utm_source=website-ebpf&utm_medium=referral&utm_campaign=partner), Liz Rice, O'Reilly, 2023
- [Security Observability with eBPF](https://isovalent.com/books/ebpf-security/?utm_source=website-ebpf&utm_medium=referral&utm_campaign=partner), Natália Réka Ivánkó and Jed Salazar, O'Reilly, 2022
- [What is eBPF?](https://isovalent.com/books/ebpf/?utm_source=website-ebpf&utm_medium=referral&utm_campaign=partner), Liz Rice, O'Reilly, 2022
- [Systems Performance: Enterprise and the Cloud, 2nd Edition](http://www.brendangregg.com/systems-performance-2nd-edition-book.html), Brendan Gregg, Addison-Wesley Professional Computing Series, 2020
- [BPF Performance Tools](http://www.brendangregg.com/bpf-performance-tools-book.html), Brendan Gregg, Addison-Wesley Professional Computing Series, Dec 2019
- [Linux Observability with BPF](https://www.oreilly.com/library/view/linux-observability-with/9781492050193/), David Calavera, Lorenzo Fontana, O'Reilly, Nov 2019

### 記事とブログ

- [BPF for security - and chaos - in Kubernetes](https://lwn.net/Articles/790684/), Sean Kerner, LWN, Jun 2019
- [Linux Technology for the New Year: eBPF](https://thenewstack.io/linux-technology-for-the-new-year-ebpf/), Joab Jackson, Dec 2018
- [A thorough introduction to eBPF](https://lwn.net/Articles/740157/), Matt Fleming, LWN, Dec 2017
- [Cilium, BPF and XDP](https://opensource.googleblog.com/2016/11/cilium-networking-and-security.html), Google Open Source Blog, Nov 2016
- [Archive of various articles on BPF](https://lwn.net/Kernel/Index/#Berkeley_Packet_Filter), LWN, since Apr 2011
- [Various articles on BPF by Cloudflare](https://blog.cloudflare.com/tag/ebpf/), Cloudflare, since March 2018
- [Various articles on BPF by Facebook](https://facebookmicrosites.github.io/bpf/blog/), Facebook, since August 2018
