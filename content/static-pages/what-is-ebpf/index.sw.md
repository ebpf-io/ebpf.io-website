---
title: eBPF Documentation
ogTitle: What is eBPF? An Introduction and Deep Dive into the eBPF Technology
ogDescription: A detailed step by step introduction to the eBPF technology with lots of references for further reading.
ogKeywords: ebpf, bpf, xdp, introduction, tutorial, what is, deep dive, documentation
---

## Ni nini eBPF?

eBPF ni teknolojia ya mapinduzi yenye asili katika kiini cha Linux ambayo inaweza kutekeleza programu zilizoko ndani ya “Sandbox” katika muktadha wa hali ya juu kama kiini cha mfumo wa uendeshaji. Hutumiwa kwa usalama na ufanisi kuongeza uwezo wa kiini bila kuhitaji kubadilisha kodi cha chanzo(source code) cha kiini au kupakia moduli za kiini.

Kihistoria, mfumo wa uendeshaji umekuwa mahali pa kutekeleza ufuatiliaji, usalama, na utendaji wa mtandao kutokana na uwezo wa kiini wa kuangalia na kudhibiti mfumo mzima. Wakati huo huo, kiini cha mfumo wa uendeshaji ni ngumu kukuza kutokana na jukumu lake kuu na mahitaji makubwa ya utulivu na usalama. Kwa hivyo, kiwango cha ubunifu katika kiwango cha mfumo wa uendeshaji kimekuwa cha chini ikilinganishwa na utendaji uliotekelezwa nje ya mfumo wa uendeshaji.

![Muhtasari](overview.png)

eBPF inabadilisha kabisa mseto huu, kwa kuruhusu kutekeleza programu za eBPF ndani ya mfumo wa uendeshaji, waendelezaji wa programu wanaweza kutumia programu za eBPF kuongeza uwezo wa mfumo wa uendeshaji wakati wa muda wa uendeshaji. Mfumo wa uendeshaji basi unahakikisha usalama na ufanisi wa utekelezaji kama vile imekusanywa kwa kutumia msaada wa kompileri ya Just-In-Time (JIT) na injini ya uhakiki(verification engine). Hii imesababisha wimbi la miradi yanayotegemea eBPF inayofunika anuwai ya matumizi, ikiwa ni pamoja na mtandao wa kizazi kijacho, ufuatiliaji, na utendaji wa usalama.

Leo hii, eBPF hutumiwa kwa kiasi kikubwa kusukuma anuwai ya matumizi: Kutoa mtandao wa utendaji ambayo ni bora na usambazaji wa mzigo(load balancing) katika vituo vya data za kisasa na mazingira ya wingu la asili(cloud native environments), kutoa data ya ufuatiliaji wa usalama wa kina kwa gharama ya chini, kusaidia waendelezaji wa programu kufuatilia programu, kutoa ufahamu kwa kutatua utendaji, utekelezaji wa usalama wa programu na vifurushi vya kontena, na mengi zaidi. Fursa ni za kutokuwa na kikomo, na ubunifu ambao eBPF inawezesha unaanza tu.

### Ni nini eBPF.io?

eBPF.io ni mahali pa kujifunza na kushirikiana kuhusu mada ya eBPF kwa kila mtu. eBPF ni jamii wazi na kila mtu anaweza kushiriki na kushiriki. Iwe unataka kusoma ufafanuzi wa kwanza wa eBPF, kutafuta vifaa vya kusoma zaidi, au kuanza kuchangia katika miradi kubwa ya eBPF, eBPF.io itakusaidia njiani.

### eBPF na BPF vina maana gani?

Awali, BPF ilisimama kwa Berkeley Packet Filter, lakini sasa kwamba eBPF (extended BPF) inaweza kufanya mengi zaidi ya kuchuja pakiti, kifupi hicho hakifanyi tena maana. eBPF sasa inachukuliwa kuwa neno la pekee ambalo halimaanishi kitu chochote. Katika kanuni za chanzo za Linux, neno BPF linabaki, na katika zana na nyaraka, maneno BPF na eBPF kwa ujumla hutumiwa kwa kubadilishana. BPF ya awali mara nyingine huitwa cBPF (classic BPF) ili kutofautisha na eBPF.

### Jina la nyuki ni nini?

Nyuki ni nembo rasmi ya eBPF na awali iliundwa na Vadim Shchekoldin. Katika Mkutano wa [kwanza wa eBPF kulikuwa](https://ebpf.io/summit-2020.html) na kura iliyopigwa na nyuki akapewa jina la eBee. (Kwa maelezo kuhusu matumizi sahihi ya nembo, tafadhali angalia [Mwongozo wa Nembo](https://linuxfoundation.org/brand-guidelines/) ya Linux Foundation.)

## Utangulizi wa Ufahamu wa eBPF

Vitabu vifuatavyo ni ufafanuzi wa haraka kuhusu eBPF. Ikiwa ungependa kujifunza zaidi kuhusu eBPF, tazama [Mwongozo wa Marejeleo wa eBPF & XDP](https://cilium.readthedocs.io/en/stable/bpf/). Iwe wewe ni mwendelezaji anayetaka kujenga programu ya eBPF, au una nia ya kutumia suluhisho linalotumia eBPF, ni muhimu kuelewa dhana za msingi na muundo.

### Muhtasari wa Kigingi

Programu za eBPF ni zinazosukumwa na tukio na hufanya kazi wakati kiini au maombi yanapopita kwenye hatua fulani ya Kigingi. Kigingi uliowekwa tayari ni pamoja na wito wa mfumo, kuingia/kutoka kwa kazi, vituo vya kufuatilia vya kiini, matukio ya mtandao, na mengine mengi.

![Kigingi wa Wito wa Mfumo](syscall-hook.png)

Ikiwa hakuna Kigingi uliowekwa tayari kwa mahitaji fulani, ni inawezekana kuunda kizuizi cha kiini (kprobe) au kizuizi cha mtumiaji (uprobe) ili kuambatisha programu za eBPF karibu mahali popote katika kiini au maombi ya mtumiaji.

![Maelezo ya Kigingi](hook-overview.png)

### Programu za eBPF zinaweza kuandikwa vipi?

Katika mazingira mengi, eBPF haikutumiwi moja kwa moja bali kwa njia isiyo moja kwa moja kupitia miradi kama [Cilium](https://ebpf.io/projects/#cilium), [bcc](https://ebpf.io/projects/#bcc), au [bpftrace](https://ebpf.io/projects/#bpftrace) ambayo hutoa kuficha juu ya eBPF na hazihitaji kuandika programu moja kwa moja lakini badala yake hutoa uwezo wa kutaja ufafanuzi wa kusudi ambao kisha hutekelezwa kwa kutumia eBPF.

![Clang](clang.png)

Ikiwa hakuna kuficha kwa kiwango ya juu inapatikana, programu lazima ziandikwe moja kwa moja. Kiini cha Linux kinatarajia programu za eBPF kuwa zimepakia kwa mfumo wa kanuni. Ingawa ni wazi kuwa inawezekana kuandika bytecode moja kwa moja, mazoea ya maendeleo yanayokubalika zaidi ni kutumia suite ya mtaalamu kama [LLVM](https://llvm.org/) kuandika kanuni ya pseudo-C kuwa bytecode ya eBPF.

### Mjenzi & Muundo wa Uthibitishaji

Baada ya Kigingi uliotakikana kutambuliwa, programu ya eBPF inaweza kupakia kwenye kiini cha Linux kwa kutumia wito wa mfumo wa bpf. Kwa kawaida hii hufanywa kwa kutumia moja ya maktaba za eBPF zilizopo. Sehemu inayofuata inatoa ufafanuzi wa vifaa vya maendeleo vinavyopatikana.

![Go](go.png)

Wakati programu inapakia kwenye kiini cha Linux, inapita kupitia hatua mbili kabla ya kuambatishwa kwenye Kigingi uliotakiwa:

### Uthibitishaji

Hatua ya uthibitishaji inahakikisha kuwa programu ya eBPF inaweza kutumika kwa usalama. Inathibitisha kuwa programu inakidhi hali kadhaa, kwa mfano:

![Mjenzi](loader.png)

- Mchakato unaopakia programu ya eBPF unamiliki uwezo unaohitajika (mamlaka). Isipokuwa eBPF isiyo na mamlaka inaruhusiwa, michakato iliyopewa mamlaka tu inaweza kupakia programu za eBPF.
- Programu haiharibu au kudhuru mfumo kwa njia yoyote.
- Programu inaendeshwa kila wakati hadi mwisho (yaani, programu haikai kwenye mzunguko milele, ikizuia usindikaji zaidi).

### Ukusanyaji kwa kupitia JIT Kompileri

Hatua ya Kuchapisha moja kwa moja (JIT) inabadilisha bytecode ya kawaida ya programu kuwa seti ya maagizo ya kompyuta ya kifaa ili kuongeza kasi ya utekelezaji wa programu. Hii inafanya programu za eBPF kukimbia kwa ufanisi kama kanuni ya kiini iliyopakwa kama kanuni au kanuni iliyopakiwa kama moduli ya kiini.

### Ramani

Kitu muhimu cha programu za eBPF ni uwezo wa kushiriki habari zilizokusanywa na kuhifadhi hali. Kwa kusudi hili, programu za eBPF zinaweza kutumia dhana ya ramani za eBPF kuweka na kufikia data katika seti kubwa ya miundo ya data. Ramani za eBPF zinaweza kupatikana kutoka programu za eBPF pamoja na kutoka kwa programu katika nafasi ya mtumiaji kupitia wito wa mfumo.

![Muundo wa Ramani](map-architecture.png)

Hapa kuna orodha isiyo kamili ya aina za ramani zilizoungwa mkono ili kutoa uelewa wa aina tofauti za miundo ya data. Kwa aina tofauti za ramani, kuna pia toleo la pamoja na toleo la kila CPU.

- Hash Tables, Majedwali
- LRU (Mara ya Mwisho Kutumika)
- Mfuko wa Mzunguko
- Kufuatilia Mfuko wa Mstari
- LPM (Ufanani wa Prefix wa Muda mrefu)
- ...

### Wito wa Msaada

Programu za eBPF haziwezi kuita kazi za kiini zisizo na kipimo. Kuruhusu hii ingeifanya programu za eBPF zifungwe kwa mabadiliko fulani la kiini na ingefanya ugumu wa utangamano wa programu. Badala yake, programu za eBPF zinaweza kufanya wito wa kazi za msaada, API inayojulikana na thabiti inayotolewa na kiini.

![Wito wa Msaada](helper.png)

Kundi la wito wa msaada uliopo linaendelea kubadilika. Mifano ya wito wa msaada uliopo:

- Kuzalisha nambari za nasibu
- Pata wakati na tarehe ya sasa
- Kufikia ramani za eBPF
- Pata muktadha wa mchakato/kikundi
- Badilisha pakiti za mtandao na mantiki ya kuhamisha

### Kumbukumbu ya mkia & Wito wa Kazi(Function Call)

Programu za eBPF zinaweza kuunganishwa na dhana ya kumbukumbu ya mkia na wito wa kazi. Wito wa kazi unaruhusu kutaja na kuita kazi ndani ya programu ya eBPF. Wito wa mkia unaweza kuita na kutekeleza programu nyingine ya eBPF na kubadilisha muktadha wa utekelezaji, kama vile jinsi wito wa mfumo wa execve() unavyofanya kazi kwa mchakato wa kawaida.

![Kumbukumbu ya mkia](tailcall.png)

### Usalama wa eBPF

_Kwa nguvu kubwa lazima kuwe na jukumu kubwa pia._

eBPF ni teknolojia yenye nguvu sana na sasa inaendeshwa katika moyo wa sehemu nyingi muhimu za miundombinu ya programu. Wakati wa maendeleo ya eBPF, usalama wa eBPF ulikuwa jambo muhimu zaidi wakati eBPF ilipokuwa inachunguzwa kuingizwa katika kiini cha Linux. Usalama wa eBPF unahakikishwa kupitia safu kadhaa:

#### Mamlaka Inayohitajika

Isipokuwa eBPF isiyo na mamlaka inaruhusiwa, michakato yote inayotaka kupakia programu za eBPF kwenye kiini cha Linux lazima iwe inaendeshwa katika hali ya mamlaka (root) au inahitaji uwezo wa CAP_BPF. Hii inamaanisha kuwa programu zisizoaminika haziwezi kupakia programu za eBPF.

Ikiwa eBPF isiyo na mamlaka inaruhusiwa, michakato isiyo na mamlaka inaweza kupakia programu za eBPF fulani kulingana na seti iliyopunguzwa ya utendaji na ufikiaji mdogo kwa kiini.

#### Thibitishaji

Ikiwa mchakato unaruhusiwa kupakia programu ya eBPF, programu zote bado zinapitia thibitishaji wa eBPF. Thibitishaji wa eBPF unahakikisha usalama wa programu yenyewe. Hii inamaanisha, kwa mfano:

- Programu zinathibitishwa kuhakikisha kuwa zinakimbia kila wakati hadi mwisho, kwa mfano, programu ya eBPF kamwe haiwezi kuzuia au kukaa kwenye mzunguko milele. Programu za eBPF zinaweza kuwa na anuwai ya mizunguko ya kikomo lakini programu inakubaliwa tu ikiwa thibitishaji unaweza kuhakikisha kuwa mzunguko una kipengele cha kutokea ambacho kinalazimika kuwa kweli.
- Programu hazipaswi kutumia viendelezi vilivyo na thamani isiyojulikana(uninitialized variables) au kufikia kumbukumbu nje ya mipaka.
- Programu lazima iwe ndani ya mahitaji ya ukubwa wa mfumo. Haiwezekani kupakia programu za eBPF za ukubwa usio na kikomo.
- Programu inapaswa kuwa na utata uliopunguzwa. Thibitishaji utahakiki njia zote za utekelezaji zinazowezekana na lazima iweze kukamilisha uchambuzi ndani ya mipaka ya kikomo cha utata wa juu uliowekwa.

Thibitishaji umekusudiwa kama chombo cha usalama, kuhakikisha kuwa programu ni salama kutekelezwa. Si chombo cha usalama kinachosaili kile programu zinafanya.

#### Uimarishaji

Baada ya kukamilika kwa mafanikio ya uthibitishaji, programu ya eBPF inapitia mchakato wa uimarishaji kulingana na ikiwa programu inapakiwa kutoka kwa mchakato mwenye mamlaka au asiye na mamlaka. Hatua hii ni pamoja na:

- **Ulinzi wa Utekelezaji wa Programu**: Kumbukumbu ya kiini inayoshikilia programu ya eBPF inalindwa na kuifanya kuwa ya kusoma tu. Ikiwa kwa sababu yoyote, iwe ni kasoro ya kiini au udanganyifu mbaya, programu ya eBPF inajaribu kubadilishwa, kiini kitageuka kuvurugika badala ya kuruhusu kuendelea kutekelezwa kwa programu iliyoharibika/inayodanganywa.
- **Kupunguza Dhidi ya Spectre**: Kwa kutumia CPU zinazohusika na spekula, zinaweza kutofautisha matawi na kufanya athari za upande zinazoweza kutoa kupitia kituo cha upande. Kuorodhesha mifano kadhaa: programu za eBPF zinavuta upatikanaji wa kumbukumbu ili kuielekeza chini ya maagizo ya muda mfupi kwa maeneo yaliyoongozwa, thibitishaji pia unafuata njia za programu zinazoweza kufikiwa tu chini ya utekelezaji wa utabiri, na mchakato wa kuchapisha moja kwa moja unatoa Retpolines ikiwa wito wa mkia hauwezi kubadilishwa kuwa wito wa moja kwa moja.
- **Blind ya Constant**: Vipimo vyote katika kanuni vimetiwa kipofu ili kuzuia mashambulizi ya Kompileri cha JIT. Hii inazuia wadukuzi kuingiza kanuni inayoweza kutekelezwa kama vipimo, ambavyo katika uwepo wa kasoro nyingine ya kiini, inaweza kuruhusu mshambuliaji kuruka kwenye sehemu ya kumbukumbu ya programu ya eBPF kutekeleza kanuni.

#### Muktadha wa Uendeshaji wa Kusimamishwa

Programu za eBPF haziwezi kufikia kumbukumbu ya kiini ya aina yoyote kwa moja kwa moja. Kupata data na miundo ya data ambayo iko nje ya muktadha wa programu lazima ifikiwe kupitia wito wa eBPF helpers. Hii inahakikisha ufikiaji thabiti wa data na kufanya ufikiaji wowote kuwa chini ya muktadha wa programu ya eBPF, kwa mfano, programu ya eBPF inayoruhusiwa inaweza kubadilisha data ya miundo fulani ya data ikiwa ubadilishaji unaweza kuhakikisha kuwa ni salama. Programu ya eBPF haiwezi kubadilisha miundo ya data kwa nasibu katika kiini.

## Kwa nini eBPF?

### Nguvu ya Uprogramu

Tuazime mfano. Je, unakumbuka GeoCities? Miaka 20 iliyopita, kurasa za wavuti zilikuwa karibu kabisa zimeandikwa kwa lugha ya alama ya tuli (HTML). Ukurasa wa wavuti ulikuwa kimsingi hati na programu (kivinjari) kinachoweza kuionyesha. Ukitazama kurasa za wavuti leo, kurasa za wavuti zimegeuka kuwa programu kamili na teknolojia inayotumika mtandaoni imebadilisha sehemu kubwa ya programu zilizoandikwa kwa lugha zinazohitaji kuhariri. Nini kilichowezesha mageuzi haya?

![Geocities](geocities.png)

Kwa ufupi huu ni uwezo wa kuunda programu na uanzishwaji wa JavaScript. Hii ilifungua mapinduzi makubwa ambayo yalisababisha vivinjari kuwa karibu na mifumo ya uendeshaji iliyotengwa.

Kwa nini mageuzi yalitokea? Waprogramu hawakuwa tena wamefungwa kwa watumiaji wanaotumia matoleo maalum ya kivinjari. Badala ya kuwashawishi vyombo vya kawaida vya viwango kwamba alama mpya ya HTML ilikuwa muhimu, upatikanaji wa vifaa vya ujenzi muhimu ulifunguliwa kutoka kwa mwendo wa ubunifu wa kivinjari cha msingi wa kujengwa juu yake. Hii ni rahisi kidogo kwani HTML ilibadilika kadri muda ulivyopita na kuchangia kwa mafanikio lakini mageuzi ya HTML yenyewe yangekuwa hayatoshi.

Kabla ya kuchukua mfano huu na kuutumia kwa eBPF, hebu tuzingatie mambo muhimu machache yaliyokuwa muhimu katika uanzishaji wa JavaScript:

- **Usalama**: Kanuni isiyoaminika inaendeshwa kwenye kivinjari cha mtumiaji. Hii ilipatikana kwa kufunga programu za JavaScript kwenye sanduku na kutoa upatikanaji wa data ya kivinjari kwa njia ya kusanyiko.
- **Utoaji wa Kila wakati**: Ukuaji wa mantiki ya programu lazima uwezekane bila kuhitaji daima kutoa matoleo mapya ya kivinjari. Hii ilipatikana kwa kutoa vifaa sahihi vya ujenzi wa kiwango cha chini vinavyotosha kujenga mantiki za kiholela.
- **Utendaji**: Uwezo wa kuunda programu lazima upatikane bila kubeba mzigo mkubwa. Hii ilipatikana kwa kuanzishwa kwa Kompileri cha Just-in-Time (JIT). Kwa kila moja ya mambo haya, marudio sahihi yanaweza kupatikana katika eBPF kwa sababu sawa.

### Athari ya eBPF kwa Kiini ya Linux

Sasa turudi kwa eBPF. Ili kuelewa athari ya uprogramu wa eBPF kwa kiini cha Linux, ni muhimu kuwa na uelewa wa kiwango cha juu cha usanifu wa kiini cha Linux na jinsi inavyoshirikiana na programu na vifaa.

![Usanifu wa Kernel](kernel-arch.png)

Lengo kuu la kiini cha Linux ni kusitiri vifaa au vifaa vya kawaida na kutoa API thabiti (wito wa mfumo) kuruhusu programu kuendesha na kushiriki rasilimali. Ili kufikia hili, seti kubwa ya mfumo na safu zinasimamiwa kugawa majukumu haya. Kila mfumo kwa kawaida hutoa kiwango fulani cha usanidi kuzingatia mahitaji tofauti ya watumiaji. Ikiwa tabia inayotakiwa haiwezi kusanidiwa, mabadiliko ya kiini yanahitajika, kihistoria, ikibaki chaguo mbili:

<CardsList>

<CardItem title="Msaada wa Asilia">

1. Badilisha msimbo wa chanzo cha kiini na kushawishi jamii ya kiini cha Linux kwamba mabadiliko ni muhimu.
2. Ngojea miaka kadhaa ili toleo jipya la kiini liwe la kawaida.

</CardItem>

<CardItem title="Moduli ya Kernel">

1. Andika moduli ya kiini
2. Sasisha mara kwa mara, kwani kila toleo la kiini linaweza kulivunja
3. Kuna hatari ya kuharibu kiini cha Linux chako kwa sababu ya ukosefu wa mipaka ya usalama.

</CardItem>

</CardsList>

Kwa eBPF, chaguo jipya linapatikana ambalo linaruhusu kubadilisha tabia ya kiini cha Linux bila kuhitaji mabadiliko kwenye msimbo wa chanzo cha kiini au kupakia moduli ya kiini. Kwa njia nyingi, hii ni sawa sana na jinsi JavaScript na lugha zingine za uandishi zilivyofungua ukuaji wa mifumo ambayo ilikuwa imekuwa ngumu au ghali kubadilisha.

## Vifaa vya Maendeleo

Kuna zana kadhaa za maendeleo zinazosaidia katika maendeleo na usimamizi wa programu za eBPF. Zote zinashughulikia mahitaji tofauti ya watumiaji:

#### bcc

BCC ni mfumo ambao unawezesha watumiaji kuandika programu za Python na programu za eBPF zilizoingizwa ndani yao. Mfumo huu kimsingi unalenga matumizi ambayo yanahusisha uchambuzi/uchunguzi wa programu na mfumo ambapo programu za eBPF hutumiwa kukusanya takwimu au kuzalisha matukio na mwenzake katika nafasi ya mtumiaji hukusanya data na kuionyesha kwa mfumo wa kibinadamu. Kukimbia programu ya Python kutazalisha bytecode ya eBPF na kuipakia kwenye kiini.

![bcc](bcc.png)

#### bpftrace

bpftrace ni lugha ya ufuatiliaji wa kiwango cha juu kwa eBPF ya Linux na inapatikana kwenye majukumu ya Linux (4.x) ya hivi karibuni. bpftrace hutumia LLVM kama injini ya nyuma kwa kutekeleza hati kwa bytecode ya eBPF na kutumia BCC kwa kuingiliana na mfumo wa eBPF wa Linux pamoja na uwezo wa ufuatiliaji wa Linux uliopo: ufuatiliaji wa kiwango cha msingi cha kernel (kprobes), ufuatiliaji wa kiwango cha mtumiaji (uprobes), na alama za ufuatiliaji. Lugha ya bpftrace inainspired na awk, C, na wafuatiliaji wa awali kama DTrace na SystemTap.

![bpftrace](bpftrace.png)

#### eBPF Go Library

Libreria ya eBPF Go hutoa maktaba ya eBPF ya jumla ambayo inatenganisha mchakato wa kufika kwa bytecode ya eBPF na kupakia na kusimamia programu za eBPF. Programu za eBPF kawaida huundwa kwa kuandika lugha ya kiwango cha juu na kisha kutumia compiler ya clang/LLVM kuichakata kuwa bytecode ya eBPF.

![Go](go.png)

#### libbpf C/C++ Library

Libbpf ni maktaba ya eBPF ya jumla iliyotokana na C/C++ ambayo husaidia kutoa kipakiaji cha faili za eBPF zilizotengenezwa na kompyuta ya clang/LLVM kwa kiini na kwa ujumla inatenganisha mwingiliano na wito wa mfumo wa BPF kwa kutoa kiolesura rahisi kutumia APIs za maktaba kwa programu.

![Libbpf](libbpf.png)

## Soma Zaidi

Ikiwa ungependa kujifunza zaidi kuhusu eBPF, endelea kusoma kutumia vifaa vifuatavyo vya ziada:

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

- [Learning eBPF](https://isovalent.com/learning-ebpf/), Liz Rice, O'Reilly, 2023
- [Security Observability with eBPF](https://isovalent.com/ebpf-security/), Natália Réka Ivánkó and Jed Salazar, O'Reilly, 2022
- [What is eBPF?](https://isovalent.com/ebpf/), Liz Rice, O'Reilly, 2022
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
