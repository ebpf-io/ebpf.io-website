---
title: eBPF Documentation
ogTitle: What is eBPF? An Introduction and Deep Dive into the eBPF Technology
ogDescription: A detailed step by step introduction to the eBPF technology with lots of references for further reading.
ogKeywords: ebpf, bpf, xdp, introduction, tutorial, what is, deep dive, documentation
---

## eBPF란?

eBPF는 운영 체제 커널과 같은 특별한 권한이 있는 환경에서 샌드박스 프로그램을 실행시킬 수 있는 리눅스 커널의 기술에서 기원한 혁신적인 기술입니다. 이는 커널 소스 코드를 바꾸거나 커널 모듈을 로드하지 않고도 기존 커널의 기능을 안전하고 효율적으로 확장시키는 것에 사용됩니다.

오랫동안 운영 체제는 전체 시스템을 관측하고 제어할 수 있는 커널의 특별한 권한 능력 덕분에 관측 가능성, 보안 및 네트워킹 기능을 구현할 수 있는 이상적인 공간이었습니다. 동시에, 운영 체제 커널은 안정성과 보안에 중요한 역할을 하기에 빠르게 진화하기는 어렵다는 문제점을 가졌습니다. 따라서, 운영 체제 수준의 기능은 운영 체제 외부에서 기능을 구현하는 것 보다는 상대적으로 더디게 발전했습니다.

![개요](overview.png)

eBPF는 이러한 현상을 근본적으로 바꿀 수 있었습니다. 샌드박스 프로그램을 운영체제 내부에서 실행할 수 있게 되면서, 애플리케이션 개발자들은 eBPF 프로그램을 통해 런타임에서 기존의 운영 체제에 추가적인 기능을 추가할 수 있게 되었습니다. 이후, 운영 체제는 JIT 컴파일러와 검증 엔진의 도움을 통해서 추가된 프로그램들이 안전하고 효율적으로 동작할 수 있도록 보장합니다. 이는 차세대 네트워킹, 관측 가능성 그리고 보안 기능들과 같은 다양한 사용 시나리오를 포함하는 수많은 eBPF 기반의 프로젝트들이 등장할 수 있는 발판이 되었습니다.

오늘날 eBPF는 고성능 네트워킹, 데이터 센터 및 클라우드 네이티브 환경에서의 로드 밸런싱, 적은 성능 저하를 가지는 관측 가능성 확보, 개발자들을 위한 애플리케이션 추적 지원, 성능 문제 해결을 위한 정보 제공, 컨테이너 런타임 보안 강화 등의 매우 다양하게 사용되고 있습니다. 뿐만 아니라, 무한한 가능성을 가지고 있으며 eBPF가 만들어내는 혁신은 아직도 초기 단계입니다.

### eBPF.io는 무엇일까요?

eBPF.io는 모든 eBPF의 주제에 대해 배우고 협력할 수 있는 모두를 위한 공간입니다. eBPF는 공개 커뮤니티이며 모든 사람들이 참여하고 정보를 공유할 수 있습니다. 여러분이 eBPF의 첫 소개 자료를 읽고 싶으시거나, 아니면 추가적인 자료를 확인하고 싶거나, 처음으로 주요 eBPF 프로젝트에 처음으로 기여하고 싶다면 eBPF.io가 여러분을 도와줄 수 있습니다.

### eBPF와 BPF는 무엇을 의미하나요?

BPF는 원래 ‘Berkeley Packet Filter’를 의미했지만, 이제 eBPF (extended BPF)가 패킷 필터링 이상의 다양한 작업을 할 수 있기에, 해당 약어는 더이상 의미가 없습니다. eBPF는 이제 특정한 의미를 가지는 것이 아닌, 독립적인 용어로 간주되고 있습니다. 리눅스 소스 코드와, 특정 도구 및 문서에서는 아직도 BPF라는 용어가 있으며, BPF 및 eBPF는 일반적으로 서로 바꿔서 사용해도 큰 문제가 없습니다. 때때로, 원래의 BPF는 eBPF와 구분을 위해서 cBPF (classic BPF) 라고 불리기도 합니다.

### 꿀벌 이름이 무엇인가요?

꿀벌 그림은 eBPF를 위한 공식 로고이며, Vadim Shchekoldin가 만들었습니다. [첫 eBPF Summit](https://ebpf.io/summit-2020.html)에서 투표를 진행하였고, 꿀벌의 이름을 eBee로 이름 짓기로 했습니다. (로고 사용에 대한 자세한 내용은 Linux Foundation [브랜드 가이드라인](https://linuxfoundation.org/brand-guidelines/)을 참고해주세요)

## eBPF에 대한 소개

다음 장은 eBPF에 대한 간단한 소개입니다. eBPF에 대해 더 자세히 알고 싶다면, [eBPF & XDP 참조 가이드](https://cilium.readthedocs.io/en/stable/bpf/)를 확인해주세요. 여러분이 eBPF 프로그램을 개발하려는 개발자이거나, eBPF를 사용하는 솔루션을 사용하는 것에 관심이 있다면, 기본적인 개념과 아키텍처를 이해하는 것이 도움이 될 것입니다.

### 훅 개요

eBPF 프로그램은 이벤트 기반으로 동작하고, 커널 또는 애플리케이션이 특정 훅 지점을 지나갈 때 실행됩니다. 사전의 정의된 훅들은 시스템 콜, 함수 진입 및 종료, 커널 tracepoint, 네트워크 이벤트 등 여러 가지가 포함됩니다.

![시스콜 훅](syscall-hook.png)

특정한 목적에 필요한 사전에 정의된 훅이 없다면, 새로운 커널 프로브(kprobe) 또는 유저 프로브(uprobe)를 생성해서 커널 또는 유저 애플리케이션의 거의 모든 임의의 위치에 eBPF 프로그램을 부착할 수 있습니다.

![훅 개요](hook-overview.png)

### eBPF 프로그램은 어떻게 작성되나요?

많은 경우에, eBPF는 직접적으로 사용되기 보다는, [Cilium](https://ebpf.io/projects/#cilium), [bcc](https://ebpf.io/projects/#bcc), 및 [bpftrace](https://ebpf.io/projects/#bpftrace)와 같이 eBPF에 대한 추상화를 제공하는 프로젝트를 사용하여 간접적으로 사용됩니다. 이러한 프로젝트들은 사용자의 의도에 따라 eBPF 프로그램을 자동으로 구현하는 기능을 제공합니다.

![Clang](clang.png)

만일, 고수준의 추상화를 사용할 수 없는 경우, eBPF 프로그램은 직접 작성되어야합니다. 리눅스 커널은 eBPF 프로그램이 바이트 코드 형식으로 로드 되는 것을 예상합니다. 물론, 바이트 코드를 사람이 직접 작성할 수도 있지만, [LLVM](https://llvm.org/)같은 컴파일러 도구들을 사용하여, C와 비슷한 코드를 eBPF 바이트 코드로 컴파일 하는 것이 개발 환경에서 흔하게 사용되고 있습니다.

### 로더 및 검증 아키텍처

특정 훅이 확인되면, eBPF 프로그램은 bpf 시스템 콜을 통해서 리눅스 커널 내부로 로드될 수 있습니다. 이러한 절차는 일반적으로 시스템에서 사용 가능한 eBPF 라이브러리 중 하나를 사용하여 진행됩니다. 다음 섹션에서는 사용 가능한 개발 툴체인에 대한 설명을 다룹니다.

![Go](go.png)

프로그램이 리눅스 커널에 로드 되면, 실제로 요청된 훅에 연결되기 전 두 가지의 절차를 사전에 진행하게 됩니다.

### 검증

검증 단계는 eBPF 프로그램이 동작하기에 안전한지를 검증합니다. 이 단계에서는 eBPF 프로그램이 여러 요구사항을 만족하는지를 검증하는데, 예시는 다음과 같습니다:

![로더](loader.png)

- eBPF 프로그램을 로드하는 프로세스는 특별한 권한이 필요합니다. 특권이 필요없는 eBPF를 허용하지 않는 한, 특별한 권한을 가진 프로세스들만 eBPF 프로그램을 로드할 수 있습니다.
- eBPF 프로그램은 크래시가 나거나 시스템에 악영향을 끼치지 않습니다.
- eBPF 프로그램은 항상 종료해야합니다 (즉, 프로그램이 무한 루프를 돌거나, 추가 처리를 기다릴 수 없습니다.)

### JIT 컴파일

Just-in-Time (JIT) 컴파일 단계는 프로그램의 실행 시간을 최적화 하기 위해서, 프로그램의 일반화된 바이트 코드를 특정 머신에서 동작하는 명령어 집합으로 변환합니다. 이를 통해서 eBPF 프로그램은 사전에 컴파일 된 커널 코드 또는 로드 된 커널 모듈과 비슷하게 효율적으로 동작할 수 있습니다.

### 맵

eBPF 프로그램의 중요한 측면 중 하나는 수집된 정보를 공유하고 상태를 저장하는 능력입니다. 이를 위해서, eBPF 프로그램은 eBPF 맵의 개념을 사용해서 수 많은 자료 구조를 지원하는 데이터를 저장하거나 저장된 정보를 찾아올 수 있습니다. eBPF 맵은 eBPF 프로그램 뿐만 아니라 시스템 콜을 사용하면 유저 공간에서의 애플리케이션에서도 접근할 수 있습니다.

![맵 구조](map-architecture.png)

다음은 다양한 자료 구조를 지원하는 eBPF 맵 유형의 일부 목록입니다. 뿐만 아니라, 추가적으로 하나의 CPU 코어 또는 모든 CPU 코어를 걸쳐서 사용되는 다양한 맵의 종류를 사용할 수도 있습니다.

- 해시 테이블, 배열
- LRU (Least Recently Used)
- 링 버퍼
- 스택 추적
- LPM (Longest Prefix Match)
- ...

### 헬퍼 함수 호출

eBPF 프로그램은 임의의 커널 함수를 호출할 수는 없습니다. 만일 이를 허용한다면, eBPF 프로그램은 특정 커널 버전에서만 사용할 수 있게 될 것이므로 프로그램의 호환성을 복잡하게 만들 것입니다. 대신, eBPF 프로그램은 커널에 의해 제공되는 잘 알려지고 안정적인 API 인 커널 함수를 호출할 수 있습니다.

![헬퍼 함수](helper.png)

사용 가능한 헬퍼 함수 호출은 지속적으로 늘어나고 있습니다. 현재 사용 가능한 헬퍼 함수의 예시는 다음과 같습니다:

- 랜덤 숫자 생성하기
- 현재 시간 및 날짜 가져오기
- eBPF 맵 접근하기
- 프로세스/cgroup 컨텍스트 가져오기
- 네트워크 패킷 및 전달 로직 조작하기

### 꼬리 재귀(Tail call) 및 함수 호출

eBPF 프로그램은 꼬리 재귀(tail call)의 개념과 함수 호출을 사용할 수 있습니다. 함수 호출은 eBPF 프로그램 내에서 함수를 정의하거나 호출하는 기능을 의미합니다. 꼬리 재귀 호출은 다른 eBPF 프로그램을 실행하거나, 현재 실행 컨텍스트를 변경할 수 있도록 하는 기능을 제공합니다. 이 방식은 execve() 시스템 콜이 일반적인 프로세스에서 동작하는 방식과 유사합니다.

![꼬리 재귀](tailcall.png)

### eBPF 안전성

_큰 힘에는 반드시 큰 책임이 따릅니다._

eBPF는 굉장히 강력한 기술이며, 현재 많은 소프트웨어 인프라 구성 요소의 핵심에서 동작하고 있습니다. eBPF는 리눅스 커널에 포함되는 것으로 여겨지기 때문에, eBPF 개발 과정에서 안전은 최우선으로 고려되는 항목이였습니다. 이를 만족하고자, eBPF 안전은 여러 계층을 통해서 보장됩니다.

#### 특별한 권한 요구

eBPF를 특별한 권한이 없어도 실행할 수 있도록 설정하지 않는 한, 리눅스 커널에 eBPF 프로그램을 로드하려는 모든 프로세스는 특별한 권한을 가진 모드(root)에서 실행되거나, CAP_BPF 권한을 필요로 합니다. 이를 통해서, 신뢰할 수 없는 프로그램이 eBPF 프로그램을 로드할 수 없음을 의미합니다.

만일 특별한 권한 없이도 eBPF를 실행할 수 있도록 설정했다면, 특별한 권한이 없는 프로세스도 eBPF 프로그램을 로드할 수 있긴 하지만, 이는 커널의 제한적인 기능과 제한적인 접근 권한을 갖게 됩니다.

#### 검증 도구

만일 어떠한 프로세스가 eBPF 프로그램을 로드할 수 있다고 해도, 모든 eBPF 프로그램은 여전히 eBPF 검증 도구를 거쳐가야합니다. eBPF 검증 도구는 그 프로그램의 안전성을 보장합니다. 이는 다음의 예시와 같습니다:

- eBPF 프로그램은 항상 정상 종료되는지에 대해 검증됩니다, 예를 들어 eBPF 프로그램이 루프를 방해하거나(block) 무한 루프에 빠져서는 안됩니다. eBPF 프로그램은 일명 ‘제한된 루프’를 포함할 수 있으나 이는 검증 도구가 해당 루프가 종료 조건을 가지거나, 참이 되는 것이 보장 되었을 때만 허용됩니다.
- eBPF 프로그램은 초기화되지 않은 변수를 사용하거나, 메모리 영역을 벗어난 메모리에 접근해서는 안됩니다.
- eBPF 프로그램은 시스템에서 요구되는 크기를 만족해야합니다. 임의로 큰 eBPF 프로그램을 로드하는 것은 불가능합니다.
- eBPF 프로그램은 유한한 복잡성을 가져야 합니다. 검증 도구는 모든 가능한 실행 경로를 파악하며 프로그램이 설정된 최대 복잡성을 초과하지 않는지에 대해 분석합니다.

검증 도구는 프로그램이 실행되기에 안전한지에 대해 확인하는 도구로, 해당 eBPF 프로그램이 어떠한 행위를 하는지에 대해 검사하는 도구는 아닙니다.

#### 경화

검증이 성공적으로 마쳐지면, eBPF 프로그램은 경화(hardening) 단계를 통해서 해당 eBPF 프로그램이 특별한 권한이 있는 프로세스 또는 그렇지 않은 프로세스에서 로드 되었는지를 확인합니다. 이는 다음의 절차와 같습니다:

- **프로그램 실행 보호**: eBPF 프로그램을 저장하고 있는 커널 내부의 메모리는 보호되며 읽기 전용으로 생성됩니다. 커널 버그 및 악의적인 조작과 같은 어떠한 이유에서라도, eBPF 프로그램이 변조되는 시도를 받는다면, 커널은 손상/변조된 eBPF 프로그램을 실행하지 않고 크래시하게 됩니다.
- **Spectre 취약점에 대한 대처**: 추측과 같은 단계에서 CPU는 분기를 잘못 예측하여 사이드 채널 공격을 통하여 관측 가능한 부작용(side effect)를 남길 수 있습니다. 몇 가지 예시로는, eBPF 프로그램은 일시적인 명령어를 통하여 제어된 영역에 접근하는 것을 메모리 마스킹을 통하여 해결합니다. 또한 검증 도구는 해당 프로그램에서 접근 가능한 실행 경로들을 추적하고, JIT 컴파일러는 꼬리 재귀가 직접적인 함수 호출로 변경될 수 없을 시 Retpoline을 생성합니다.
- **상수 가리기**: 코드에 존재하는 모든 상수는 JIT 스프레이 공격을 방지하기 위해서 가려집니다. 이는 공격자가 커널 버그를 악용하여 eBPF 프로그램의 메모리 영역에 침입하여 상수로 위장한 채로 침투한 악성 코드를 실행하는 것을 방지합니다.

#### 추상화된 런타임 컨텍스트

eBPF 프로그램은 임의의 커널 메모리에 직접 접근할 수 없습니다. eBPF 프로그램의 컨텍스트 밖에 존재하는 데이터 또는 자료구조를 접근하기 위해서는 eBPF 헬퍼 함수들을 사용해서만 접근할 수 있습니다. 이를 통해서 일관성 있는 데이터 접근과 해당 eBPF 프로그램이 접근 가능한 데이터만 접근할 수 있도록 보장합니다. 예를 들어, 만일 특정 자료 구조의 데이터를 변경하는 것이 안전하다고 보장 되었을 때만 eBPF 프로그램이 해당 데이터를 변경할 수 있도록 허용됩니다. 즉, 아무 eBPF 프로그램이나 커널 내부의 자료 구조를 임의로 수정할 수 없습니다.

## 왜 eBPF를 사용하나요?

### 프로그래밍 가능성의 힘

유사한 예시를 통해서 살펴봅시다. GeoCities를 기억하시나요? 20년 전, 웹사이트는 거의 정적 마크업 언어(HTML)로 작성이 되었습니다. 즉, 웹 페이지는 어떤 애플리케이션(브라우저)가 화면에 표시할 수 있는 하나의 문서였습니다. 오늘날의 웹 페이지를 보면, 웹 페이지는 완전히 새로운 애플리케이션이 되었으며, 기존에 프로그래밍 언어로 컴파일이 되었던 애플리케이션의 대부분을 대체했습니다. 이러한 진화가 가능했던 이유가 무엇일까요?

![그림](geocities.png)

간단한 대답은, JavaScript의 도입으로 생겨난 프로그래밍 가능성 덕분입니다. 이는 브라우저가 사실상 하나의 독립적인 운영체제 만큼 동작할 수 있는 엄청난 혁명을 가져왔습니다.

이러한 혁명이 일어난 이유가 무엇일까요? 프로그래머는 더이상 특정 브라우저 버전을 사용하는 사용자들에게 제한되지 않게 되었습니다. 새로운 HTML 태그가 필요하다고 표준 기관들을 설득하는 대신에, 브라우저에서 실행되는 애플리케이션의 필수적인 구성 요소를 분리하게 되어서 혁신의 속도가 빨라졌습니다. 물론, HTML이 시간이 지나며 발전하고, 이러한 혁신에서 HTML이 기여한 부분도 있긴 하지만, HTML만 사용하였다면 이는 충분하지 않았을 것입니다.

이러한 예시를 통해서 eBPF에 적용하기 전에, JavaScript가 도입되며 생겨난 몇개의 주요한 측면에 대해 살펴보겠습니다:

- **안전성**: 신뢰할 수 없는 코드가 사용자의 브라우저에서 실행됩니다. 이는 JavaScript 프로그램을 샌드박스화 하고 그리고 브라우저 데이터에 접근하는 방식을 추상화하는 것으로 해결되었습니다.
- **지속적 배포**: 브라우저의 버전을 새로 배포하지 않아도 프로그램 로직이 발전할 수 있어야 합니다. 이는 임의의 프로그램 로직을 지원할 수 있게하는 적당한 수저 저수준의 구성 요소를 제공함으로써 해결되었습니다.
- **성능**: 최소한의 오버헤드를 가지고 프로그밍 가능성을 제공해야 합니다. 이는 Just-in-Time(JIT) 컴파일러의 도입으로 해결되었습니다. 이와 같이, 정확히 똑같이 상응하는 내용이 eBPF에도 같은 이유를 가지고 존재합니다.

### eBPF가 리눅스 커널에 미치는 영향

eBPF로 다시 돌아가봅시다. eBPF가 리눅스 커널에 미치는 프로그래밍 가능성의 영향을 이해하기 위해서는, 리눅스 커널의 고수준 아키텍쳐와 커널이 애플리케이션 및 하드웨어 사이에서 어떻게 상호작용하는지에 대해 이해해야 합니다.

![커널 구조](kernel-arch.png)

리눅스 커널의 주요 목적은 하드웨어 또는 가상 하드웨어의 추상화를 제공하고 일관성 있는 API (시스템 콜)를 제공하여 애플리케이션들이 실행되며 자원을 공유하는 것에 있습니다. 이를 달성하기 위해서, 커널의 여러 서브 시스템과 계층은 이러한 커널의 책임을 분산하도록 유지되고 있습니다. 각 서브 시스템은 일반적으로 사용자의 다양한 요구를 고려할 수 있도록 어느정도 설정 가능하도록 설계되었습니다. 만일 원하는 동작이 설정만으로는 불가능한 경우, 커널을 변경하는 것이 전통적으로 택해지는 방법이였으며, 이는 주로 2가지의 옵션으로 이뤄집니다:

<CardsList>

<CardItem title="네이티브한 지원">

1. 커널 소스 코드를 변경하고, 리눅스 커널 커뮤니티에 해당 변경점이 필요하다고 설득합니다.
2. 몇 년간 기다려서 새로운 커널 버전이 사용 가능하게 될 때까지 기다립니다.

</CardItem>

<CardItem title="커널 모듈">

1. 커널 모듈을 작성합니다.
2. 매 커널의 릴리즈가 커널 모듈을 사용 불가능하게 할 수 있기 때문에, 지속적으로 커널 모듈을 수정합니다.
3. 보안 경계선이 없기 때문에 여러분의 리눅스 커널을 손상시킬 수 있는 것을 감수해야 합니다.

</CardItem>

</CardsList>

eBPF를 사용하면, 커널 소스 코드를 변경하거나 커널 모듈을 로드하지 않아도, 리눅스 커널의 특정 행동을 재프로그래밍할 수 있는 새로운 옵션이 생깁니다. 여러 측면에서, 이는 JavaScript 및 다른 스크립트 언어들이 기존에 변경이 어렵거나 많은 비용이 발생했던 시스템의 혁신을 시작했던 것과 매우 비슷합니다.

## 개발 도구들

eBPF의 프로그램의 개발 및 관리를 지원하기 위해 여러 개발 도구들이 존재합니다. 이러한 도구들은 모두 사용자들의 서로 다른 요구사항을 해결합니다:

#### bcc

BCC는 사용자가 파이썬 프로그램에다가 eBPF 프로그램을 포함하여 작성할 수 있도록 하는 프레임워크입니다. 이 프레임워크는 주로 eBPF 프로그램을 통해 통계 정보를 수집하거나, 이벤트를 생성한 후 유저 공간에서 이러한 데이터를 수집하여 사람이 읽을 수 있는 형식으로 보여주는 애플리케이션 또는 시스템 프로파일링/추적 프로그램에서 주로 사용됩니다. 작성된 파이썬 프로그램은 eBPF 바이트 코드를 생성하여 커널에 자동으로 로드합니다.

![bcc](bcc.png)

#### bpftrace

bpftrace는 리눅스 eBPF를 위한 고수준의 추적 언어이며 상대적으로 최근의 리눅스 커널(4.x) 에서 사용할 수 있습니다. bpftrace는 LLVM을 사용하여 스크립트를 eBPF 바이트코드로 컴파일하고, BCC를 사용하여 리눅스 eBPF 서브 시스템 뿐만 아니라 kprobe, uprobe, tracepoint와 같은 기존의 커널 추적 기능과 상호작용하는 기능을 제공합니다. bpftrace 언어는 awk와 C와 같은 기능과 DTrace 및 SystemTap과 같은 기존의 추적 도구에서 영감을 받았습니다.

![bpftrace](bpftrace.png)

#### eBPF Go 라이브러리

eBPF Go 라이브러리는 eBPF 바이트 코드를 생성하고 eBPF 프로그램을 로드 및 관리하는 절차를 모듈화한 범용 eBPF 라이브러리입니다. eBPF 프로그램은 일반적으로 고수준의 프로그래밍 언어를 통하여 작성되고, clang/LLVM 컴파일러를 사용해서 eBPF 바이트 코드를 컴파일됩니다.

![Go](go.png)

#### libbpf C/C++ 라이브러리

libbpf 라이브러리는 C/C++에서 동작하는 범용 eBPF 라이브러리로, clang/LLVM 컴파일러에서 생성된 eBPF 오브젝트 파일을 커널로 로드하고, 애플리케이션에서 사용하기 쉽도록 BPF 시스템 콜을 추상화 하는 기능을 모듈화하여 제공하는 라이브러리입니다.

![Libbpf](libbpf.png)

## 더 많이 알아보기

eBPF에 대해서 더 많이 알아보고 싶다면, 다음의 추가 자료를 참고해주세요:

### Documentation

- [BPF & XDP Reference Guide](https://cilium.readthedocs.io/en/stable/bpf/), Cilium Documentation, Aug 2020
- [BPF Documentation](https://www.kernel.org/doc/html/latest/bpf/index.html), BPF Documentation in the Linux Kernel
- [BPF Design Q&A](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/bpf/bpf_design_QA.rst), FAQ for kernel-related eBPF questions

### Tutorials

- [Learn eBPF Tracing: Tutorial and Examples](http://www.brendangregg.com/blog/2019-01-01/learn-ebpf-tracing.html), Brendan Gregg's Blog, Jan 2019
- [XDP Hands-On Tutorials](https://github.com/xdp-project/xdp-tutorial), Various authors, 2019
- [BCC, libbpf and BPF CO-RE Tutorials](https://facebookmicrosites.github.io/bpf/blog/), Facebook's BPF Blog, 2020

### Talks

#### Generic

- [eBPF and Kubernetes: Little Helper Minions for Scaling Microservices](https://www.youtube.com/watch?v=99jUcLt3rSk) ([Slides](https://kccnceu20.sched.com/event/ZemQ/ebpf-and-kubernetes-little-helper-minions-for-scaling-microservices-daniel-borkmann-cilium)), Daniel Borkmann, KubeCon EU, Aug 2020
- [eBPF - Rethinking the Linux Kernel](https://www.infoq.com/presentations/facebook-google-bpf-linux-kernel/) ([Slides](https://docs.google.com/presentation/d/1AcB4x7JCWET0ysDr0gsX-EIdQSTyBtmi6OAW7bE0jm0)), Thomas Graf, QCon London, April 2020
- [BPF as a revolutionary technology for the container landscape](https://www.youtube.com/watch?v=U3PdyHlrG1o&t=7) ([Slides](https://fosdem.org/2020/schedule/event/containers_bpf/attachments/slides/4122/export/events/attachments/containers_bpf/slides/4122/BPF_as_a_revolutionary_technology_for_the_container_landscape.pdf)), Daniel Borkmann, FOSDEM, Feb 2020
- [BPF at Facebook](https://www.youtube.com/watch?v=ZYBXZFKPS28), Alexei Starovoitov, Performance Summit, Dec 2019
- [BPF: A New Type of Software](https://youtu.be/7pmXdG8-7WU?t=8) ([Slides](https://www.slideshare.net/brendangregg/um2019-bpf-a-new-type-of-software)), Brendan Gregg, Ubuntu Masters, Oct 2019
- [The ubiquity but also the necessity of eBPF as a technology](https://www.youtube.com/watch?v=mFxs3VXABPU), David S. Miller, Kernel Recipes, Oct 2019

#### Deep Dives

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

### Books

- [Learning eBPF](https://isovalent.com/books/learning-ebpf/?utm_source=website-ebpf&utm_medium=referral&utm_campaign=partner), Liz Rice, O'Reilly, 2023
- [Security Observability with eBPF](https://isovalent.com/books/ebpf-security/?utm_source=website-ebpf&utm_medium=referral&utm_campaign=partner), Natália Réka Ivánkó and Jed Salazar, O'Reilly, 2022
- [What is eBPF?](https://isovalent.com/books/ebpf/?utm_source=website-ebpf&utm_medium=referral&utm_campaign=partner), Liz Rice, O'Reilly, 2022
- [Systems Performance: Enterprise and the Cloud, 2nd Edition](http://www.brendangregg.com/systems-performance-2nd-edition-book.html), Brendan Gregg, Addison-Wesley Professional Computing Series, 2020
- [BPF Performance Tools](http://www.brendangregg.com/bpf-performance-tools-book.html), Brendan Gregg, Addison-Wesley Professional Computing Series, Dec 2019
- [Linux Observability with BPF](https://www.oreilly.com/library/view/linux-observability-with/9781492050193/), David Calavera, Lorenzo Fontana, O'Reilly, Nov 2019

### Articles & Blogs

- [BPF for security - and chaos - in Kubernetes](https://lwn.net/Articles/790684/), Sean Kerner, LWN, Jun 2019
- [Linux Technology for the New Year: eBPF](https://thenewstack.io/linux-technology-for-the-new-year-ebpf/), Joab Jackson, Dec 2018
- [A thorough introduction to eBPF](https://lwn.net/Articles/740157/), Matt Fleming, LWN, Dec 2017
- [Cilium, BPF and XDP](https://opensource.googleblog.com/2016/11/cilium-networking-and-security.html), Google Open Source Blog, Nov 2016
- [Archive of various articles on BPF](https://lwn.net/Kernel/Index/#Berkeley_Packet_Filter), LWN, since Apr 2011
- [Various articles on BPF by Cloudflare](https://blog.cloudflare.com/tag/ebpf/), Cloudflare, since March 2018
- [Various articles on BPF by Facebook](https://facebookmicrosites.github.io/bpf/blog/), Facebook, since August 2018
