---
title: eBPF 文檔
ogTitle: 什麼是 eBPF ?  An Introduction and Deep Dive into the eBPF Technology
ogDescription: A detailed step by step introduction to the eBPF technology with lots of references for further reading.
ogKeywords: ebpf, bpf, xdp, introduction, tutorial, what is, deep dive, documentation
---

## 什麼是 eBPF ?

eBPF 是一項革命性的技術，起源於 Linux 核心，可以在特權上下文（例如作業系統核心）中運行沙盒程式。 它用於安全有效地擴展核心的功能，而無需更改核心原始碼或載入核心模組。

從歷史上看，由於核心具有監督和控制整個系統的特權，作業系統一直是實現可觀察性、安全性和網路功能的理想場所。同時，由於作業系統核心的中心地位和對穩定性與安全性的高要求，作業系統核心很難快速迭代發展。 因此，與在作業系統之外實現的功能相比，作業系統層級的創新速度在傳統上較低。

![Overview](overview.png)

eBPF 從根本上改變了這個公式。 透過允許在作業系統內運行沙盒程序，應用程式開發人員可以運行 eBPF 程式以便在執行時期向作業系統添加額外的功能。 然後，作業系統借助即時編譯器和驗證引擎，確保與本機編譯一樣的安全性和執行效率。這引發了一波基於 eBPF 的項目熱潮，涵蓋廣泛的用例，包括下一代網路、可觀察性和安全功能等領域。

如今，eBPF 被廣泛用於驅動各種用例：在現代資料中心和雲端原生環境中提供高效能網路和負載平衡，以低開銷提取細粒度的安全可觀察性資料，幫助應用程式開發人員追蹤應用程式，為效能故障排除、預防性的應用程式和容器執行時期安全實施等方面的提供洞察等等。 可能性是無限的，eBPF 開啟的創新才剛剛開始。

### 什麼是eBPF.io ？

eBPF.io學習eBPF和就eBPF這個主題協作的地方。 eBPF是一個開放的社群，每個人都可以參與和分享。 無論您是想閱讀 eBPF 的初步介紹、查找進一步的閱讀材料，還是邁出成為大型 eBPF 項目貢獻者的第一步，eBPF.io 都將一路為您提供幫助。

### eBPF 和 BPF 分別代表什麼 ？

BPF 最初代表伯克利資料包過濾器(Berkeley Packet Filter)，但是因為現在 eBPF（擴展 BPF）可以做的不僅僅是資料包過濾，所以這個縮寫詞不再有意義。 eBPF 現在被認為是一個獨立的術語，不代表任何東西。 在 Linux 原始碼中，術語 BPF 仍然存在，並且在工具和文件中，術語 BPF 和 eBPF 通常可以互換使用。 最初的BPF有時被稱為cBPF（classic BPF，經典BPF）以區別於eBPF。

### 標誌上的蜜蜂叫什麼名字 ？

這隻蜜蜂是 eBPF 的官方標誌，最初是由 Vadim Shchekoldin 設計的。 在第一屆 eBPF [峰會](https://ebpf.io/summit-2020.html)上進行了投票，並將這隻蜜蜂被命名為 eBee。 （有關徽標的可接受用途的詳細資訊，請參閱 Linux 基金會[品牌指南](https://linuxfoundation.org/brand-guidelines/)。）

## eBPF簡介

以下章節是 eBPF 的快速介紹。 如果您想了解有關 eBPF 的更多資訊，請參閱 [eBPF 和 XDP 參考指南](https://cilium.readthedocs.io/en/stable/bpf/)。 無論您是希望構建 eBPF 程式的開發人員，還是對使用 eBPF 的解決方案有興趣，了解這些基本概念和架構都會很有幫助。

### 勾點(hook)概覽

eBPF 程式是事件驅動的，當核心或應用程式通過某個掛鉤點時執行。 預定義的掛鉤包括系統呼叫、函式入口/出口、核心追蹤點、網路事件等。

![syscall-hook](syscall-hook.png)

如果預定義的勾點不能滿足特定的需求，則可以建立核心探針 (kprobe) 或使用者探針 (uprobe) 來將 eBPF 程式附加到核心或使用者應用程式中的幾乎任何位置。

![hook-overview](hook-overview.png)

### 如何編寫eBPF程式 ?

在很多情況下，eBPF 並不是直接使用的，而是透過像[Cilium](https://ebpf.io/projects/#cilium)、[bcc](https://ebpf.io/projects/#bcc) 或 [bpftrace](https://ebpf.io/projects/#bpftrace) 這樣的項目間接使用，這些項目提供了eBPF 之上的抽象，不需要直接編程式，而是提供指定基於意圖的定義的能力，然後用eBPF實作。

![Clang](clang.png)

如果不存在更高層級的抽象，則需要直接編寫程式。 Linux 核心期望 eBPF 程式以位元組碼的形式載入。 雖然直接編寫位元組碼當然是可能的，但更常見的開發實務是利用 [LLVM](https://llvm.org/) 等編譯器套件將虛擬 C 程式碼編譯為 eBPF 位元組碼。

### 載入器和驗證架構

當確定所需的勾點後，可以使用 bpf 系統呼叫將 eBPF 程式載入到 Linux 核心中。 這通常是使用一個可用的 eBPF 函式庫來完成的。 下一節將介紹一些可用的開發工具鏈。

![Go](go.png)

當程式載入到 Linux 核心時，它在被附加到所請求的勾點之前需要經過兩個步驟：

### 驗證

驗證步驟確保 eBPF 程式可以安全地運作。 它驗證程式是否滿足幾個條件，例如：

![Loader](loader.png)

- 載入 eBPF 程式的進程擁有所需的能力（特權）。 除非啟用非特權 eBPF，否則只有特權程序才能載入 eBPF 程式。
- 該程式不會崩潰或以其他方式損害系統。
- 程式一定會運行至結束（即程式不會永遠處於循環中，從而阻止進一步的處理）。

### 即時(JIT)編譯

即時 (JIT, Just-in-Time) 編譯步驟將程式的通用位元組碼轉換為機器特定的指令集，以優化程式的執行速度。 這使得 eBPF 程式的運作與本機編譯的核心程式碼或作為核心模組載入的程式碼一樣高效。

### 映射(maps)

eBPF 程式的一個重要方面是共享收集的資訊和儲存狀態的能力。 為此，eBPF 程式可以利用 eBPF 映射的概念來儲存和檢索各種資料結構中的資料。 eBPF 映射即可以從eBPF程式訪問，也可以透過系統呼叫從用戶空間中的應用程式訪問。

![Map architecture](map-architecture.png)

以下是支援的映射類型的不完整列表，以幫助您了解資料結構的多樣性。 對於各種映射類型，共享版本和per-CPU版本均可用。

- 雜湊表、陣列
- LRU (Least Recently Used) 演算法
- 環形緩衝區
- LPM (Longest Prefix match) 演算法
- ...

###　Helper 呼叫
eBPF 程式無法直接呼叫任意核心函式。 允許這樣做會將 eBPF 程式綁定到特定的核心版本，並使程式的相容性變得複雜。而對應的，eBPF 程式可以呼叫helper函式達到效果，一個由核心提供的眾所周知且穩定的 API。

![Helper](helper.png)

可用的helper呼叫集在不斷發展。 一些可呼叫helper的範例：

- 產生隨機數
- 取得當前時間和日期
- eBPF映射訪問
- 取得進程/cgroup 上下文
- 操縱網路封包和轉送邏輯

### 尾呼叫和函式呼叫

eBPF 程式可以透過尾呼叫和函式呼叫的概念來組合。 函式呼叫允許在 eBPF 程式內部定義和呼叫函數。 尾部呼叫可以呼叫並執行另一個 eBPF 程式並取代執行上下文，類似於execve() 系統呼叫對常規進程的的操作方式。

![Tail call](tailcall.png)

### eBPF 安全

_權力越大，責任也越大。_

eBPF 是一項極其強大的技術，現在運行在許多關鍵軟體基礎設施元件的核心位置。 在eBPF的開發過程中，當考慮將eBPF納入Linux核心中時，eBPF的安全性是最關鍵的方面。 eBPF 的安全性是透過幾個層面來確保的：

#### 所需權限

除非啟用非特權 eBPF，否則所有打算將 eBPF 程式載入到 Linux 核心中的進程都必須在特權模式（root）下運行，或需要授予 CAP_BPF 權限(capability)。 這意味著不受信任的程式無法載入 eBPF 程式。

如果啟用非特權 eBPF，非特權程式則可以載入某些 eBPF 程式，但功能集會減少，並且對核心的存取會受到限制。

#### 驗證器

如果一個進程被允許載一個eBPF程式，所有程式仍然需要通過eBPF驗證器。 eBPF驗證器保證了程式本身的安全。 這意味著，例如：

- 程式必須經過驗證以確保它們一定會運行至結束，例如 eBPF 程式永遠不會阻塞或永遠處於循環中。 eBPF 程式可能包含所謂的有界循環，但只有當驗證器可以確保循環包含一個保證為真的退出條件時，該程式才會被接受。
- 程式不得使用任何未初始化的變數或越界存取記憶體。
- 程式必須符合系統的大小要求。 不可能載入任意大的 eBPF 程式。
- 程式必須具有有限的複雜性。 驗證器將評估所有可能的執行路徑，並且必須能夠在配置的複雜性上限範圍內完成分析。

驗證器是一種安全工具，用於檢查程式是否可以安全運作。 它不是一個檢查程式正在做什麼的安全工具。

#### 加固

成功完成驗證後，eBPF 程式將根據程式是從特進程序還是非特權進程載入來執行一個加固過程。 該步驟包括：

- **程式執行保護**：保存 eBPF 程式的核心記憶體受到保護並變成唯讀。 如果出於任何原因，無論是核心錯誤還是惡意操縱，試圖修改 eBPF 程式，核心將會崩潰，而不是允許它繼續執行損壞/被操縱的程式。
- **緩解幽靈漏洞(Spectre)**：據推測，CPU 可能會錯誤預測分支並留下可觀察到的副作用，這些副作用可透過側通道(side channel)提取。 舉幾個例子：eBPF 程式屏蔽記憶體訪問，以便將臨時指令下的訪問重定向到受控區域，驗證器也遵循僅在推測執行(speculative execution)下可訪問的程式路徑，即時(JIT)編譯器在尾呼叫無法轉換為直接呼叫的情況下發出Retpoline 。
- **常量盲化(constant blinding)**：程式碼中的所有常數都是盲化的，以防止 JIT 噴射攻擊。 這可以防止攻擊者將可執行程式碼作為常數注入，在存在另一個核心錯誤的情況下，這可能會允許攻擊者跳轉到 eBPF 程式的記憶體部分來執行程式碼。

#### 抽象的運行時上下文

eBPF 程式無法直接存取任意核心記憶體。 對程式上下文之外的資料和資料結構的存取必須透過 eBPF helper來進行。 這保證了資料存取的一致性，並使任何此類存取受到 eBPF 程式的特權的約束，例如，在如果可以保證修改是安全的，則允許正在運行的eBPF程式修改某些資料結構的資料。 eBPF 程式不能隨意修改核心中的資料結構。

## 為什麼使用eBPF？

### 可程式性的力量

讓我們從一個類比開始。 你還記得GeoCities嗎？ 20 年前，網頁幾乎都是用靜態標記式語言 (HTML) 編寫的。 網頁基本上是一個文檔和一個能夠顯示它的應用程式（瀏覽器）。 看看今天的網頁，網頁已經成為成熟的應用程式，基於網路的技術已經取代了絕大多數用需要編譯的語言所編寫的應用程式。 是什麼促成了這種演變？

![Geocities](geocities.png)

簡而言之，就是透過引入 JavaScript 來實現可程式化。 它開啟了一場巨大的革命，導致瀏覽器演變成幾乎獨立的作業系統。

為什麼會發生這個演變？ 程式設計師不再受制於運行特定瀏覽器版本的使用者。提升必要構建塊的可用性，將底層瀏覽器的創新步伐與運行其上的應用程式脫鉤，而不是去說服標準機構需要一個新的 HTML 標籤。 這當然有點過於簡化這個過程了，因為 HTML 確實隨著時間的推移而發展並為這個演化的成功做出了貢獻，但 HTML 本身的發展還不夠。

在將這個範例應用於 eBPF 之前，讓我們先來看看在引入 JavaScript 的過程中幾個關鍵的方面：

- **安全性**：不受信任的程式碼在使用者的瀏覽器中運作。 這個問題是透過沙箱JavaScript 程式並抽象對瀏覽器資料的存取來解決的。
- **持續交付**：程式邏輯的演進必須在不需要不斷發布新的瀏覽器版本的情況下實現。 透過提供
適當的底層構建模塊來構建任意邏輯，解決了這個問題。
- **效能**：必須以最小的開銷提供可程式性。 這個問題透過引入即時 (JIT) 編譯器得到了解決。出於相同的原因，上述所有內容可以在 eBPF 中找到完全對應的內容。

### eBPF 對 Linux 核心的影響

現在讓我們回到 eBPF。 為了理解 eBPF 對 Linux 核心的可程式性影響，有必要對 Linux 核心的架構以及它如何與應用程式和硬體互動有一個高層次的了解。

![Kernel architecture](kernel-arch.png)

Linux核心的主要目的是硬體或虛擬硬體進行抽象，並提供一致的API（系統呼叫），允許應用程式運行和共享資源。 為了實現這一目標，核心維護了一組廣泛的子系統和層來分配這些職責。 每個子系統通常允許某種程度的配置來滿足使用者的不同需求。 如果無法配置所需的行為，則需要更改核心，從歷史上看，留下兩個選項：

<CardsList>

<CardItem title="原生支援">

1. 更改核心原始碼並使 Linux 核心相信這個改動是必要的。
2. 等待幾年後，新核心版本才能成為通用版本。

</CardItem>

<CardItem title="核心模組">

1. 編寫一個核心模組
2. 定期修復它，因為每個核心版本都可能會破壞它
3. 由於缺乏安全邊界而存在損壞 Linux 核心的風險

</CardItem>

</CardsList>

become difficult or expensive to change.
有了 eBPF，就有了一個新選項，它允許重新編程 Linux 核心的行為，而無需更改核心原始碼或載入核心模組。 在許多方面，這與 JavaScript 和其他腳本語言解鎖系統演變的方式非常相似，因為對這些系統進行變動的原有方式已經變得困難或昂貴。

## 開發工具鏈

現在已經有幾個開發工具鏈可以協助 eBPF 程式的開發和管理。 它們對應滿足用戶的不同需求：

#### bcc

BCC 是一個框架，使用戶能夠編寫 python 程式並將eBPF程式嵌入其中。 該框架主要針對應用程式和系統分析/追蹤的用例，其中 eBPF 程式用於收集統計資料或生成事件，而使用者空間中的對應程式則收集資料並以人類可讀的形式顯示資料。 運行python程式將產生eBPF字節碼並將其載入到核心中。

![bcc](bcc.png)

#### bpftrace 

bpftrace 是適用於 Linux eBPF 的高階追蹤語言，可在較新的 Linux 核心 (4.x) 中使用。 bpftrace 使用 LLVM 作為後端，將腳本編譯為 eBPF 位元組碼，並利用 BCC 與 Linux eBPF 子系統以及現有的 Linux 追蹤功能 (核心動態追蹤 (kprobes)、使用者級動態追蹤 (uprobes) 和追蹤點) 進行互動。 bpftrace 語言的靈感來源於 awk、C 和之前的跟蹤程式（例如 DTrace 和 SystemTap）。

![bpftrace](bpftrace.png)

#### eBPF Go 函式庫

eBPF Go 函式庫提供了一個通用的 eBPF 函式庫，它將獲取 eBPF 位元組碼的過程與 eBPF 程式的載入和管理進行了解耦。 eBPF 程式通常是透過編寫高級語言，然後使用 clang/LLVM 編譯器編譯為 eBPF 位元組碼來創建的。

![Go](go.png)

#### libbpf C/C++ 函式庫

libbpf 函式庫是一個基於 C/C++ 的通用 eBPF 函式庫，它可以幫助將 clang/LLVM 編譯器產生的 eBPF 目的檔載入解耦到核心中的這個過程，並透過為應用程式提供易於使用的函式庫 API 來抽象化與 BPF 系統呼叫的互動

![Libbpf](libbpf.png)

## 進一步閱讀

如果您想了解有關 eBPF 的更多資訊，請使用以下附加材料繼續閱讀：

### 相關文檔

- [BPF & XDP Reference Guide](https://cilium.readthedocs.io/en/stable/bpf/), Cilium Documentation, Aug 2020
- [BPF Documentation](https://www.kernel.org/doc/html/latest/bpf/index.html), BPF Documentation in the Linux Kernel
- [BPF Design Q&A](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/bpf/bpf_design_QA.rst), FAQ for kernel-related eBPF questions

### 教程

- [Learn eBPF Tracing: Tutorial and Examples](http://www.brendangregg.com/blog/2019-01-01/learn-ebpf-tracing.html), Brendan Gregg's Blog, Jan 2019
- [XDP Hands-On Tutorials](https://github.com/xdp-project/xdp-tutorial), Various authors, 2019
- [BCC, libbpf and BPF CO-RE Tutorials](https://facebookmicrosites.github.io/bpf/blog/), Facebook's BPF Blog, 2020

### 演講

#### 入門

- [eBPF and Kubernetes: Little Helper Minions for Scaling Microservices](https://www.youtube.com/watch?v=99jUcLt3rSk) ([Slides](https://kccnceu20.sched.com/event/ZemQ/ebpf-and-kubernetes-little-helper-minions-for-scaling-microservices-daniel-borkmann-cilium)), Daniel Borkmann, KubeCon EU, Aug 2020
- [eBPF - Rethinking the Linux Kernel](https://www.infoq.com/presentations/facebook-google-bpf-linux-kernel/) ([Slides](https://docs.google.com/presentation/d/1AcB4x7JCWET0ysDr0gsX-EIdQSTyBtmi6OAW7bE0jm0)), Thomas Graf, QCon London, April 2020
- [BPF as a revolutionary technology for the container landscape](https://www.youtube.com/watch?v=U3PdyHlrG1o&t=7) ([Slides](https://fosdem.org/2020/schedule/event/containers_bpf/attachments/slides/4122/export/events/attachments/containers_bpf/slides/4122/BPF_as_a_revolutionary_technology_for_the_container_landscape.pdf)), Daniel Borkmann, FOSDEM, Feb 2020
- [BPF at Facebook](https://www.youtube.com/watch?v=ZYBXZFKPS28), Alexei Starovoitov, Performance Summit, Dec 2019
- [BPF: A New Type of Software](https://youtu.be/7pmXdG8-7WU?t=8) ([Slides](https://www.slideshare.net/brendangregg/um2019-bpf-a-new-type-of-software)), Brendan Gregg, Ubuntu Masters, Oct 2019
- [The ubiquity but also the necessity of eBPF as a technology](https://www.youtube.com/watch?v=mFxs3VXABPU), David S. Miller, Kernel Recipes, Oct 2019

#### 深入研究

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

### 文章和部落格

- [BPF for security - and chaos - in Kubernetes](https://lwn.net/Articles/790684/), Sean Kerner, LWN, Jun 2019
- [Linux Technology for the New Year: eBPF](https://thenewstack.io/linux-technology-for-the-new-year-ebpf/), Joab Jackson, Dec 2018
- [A thorough introduction to eBPF](https://lwn.net/Articles/740157/), Matt Fleming, LWN, Dec 2017
- [Cilium, BPF and XDP](https://opensource.googleblog.com/2016/11/cilium-networking-and-security.html), Google Open Source Blog, Nov 2016
- [Archive of various articles on BPF](https://lwn.net/Kernel/Index/#Berkeley_Packet_Filter), LWN, since Apr 2011
- [Various articles on BPF by Cloudflare](https://blog.cloudflare.com/tag/ebpf/), Cloudflare, since March 2018
- [Various articles on BPF by Facebook](https://facebookmicrosites.github.io/bpf/blog/), Facebook, since August 2018
