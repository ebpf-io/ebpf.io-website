import videoItems from 'data/pages/home/video-data';
import caseStudiesData from 'data/shared/case-studies/case-studies-list';

const data = {
  en: {
    hero: {
      title:
        'Dynamically program the kernel for efficient networking, observability, tracing, and security',
      blackButtonTitle: 'Project Landscape',
      blackButtonUrl: '/applications',
      yellowButtonTitle: 'What is eBPF',
      yellowButtonUrl: '/what-is-ebpf',
      altImage: 'eBPF diagram',
      items: [
        'Programs are verified to safely execute',
        'Hook anywhere in the kernel to modify functionality',
        'JIT compiler for near native execution speed',
        'Add OS capabilities at runtime',
      ],
    },
    caseStudies: {
      title: 'Organizations in every industry use eBPF in production',
      linkText: 'More case studies',
      linkUrl: '/case-studies/',
      items: caseStudiesData.en.slice(0, 6),
    },
    whyEbpf: {
      title: 'Why eBPF?',
      linkTitle: 'What is eBPF',
      linkUrl: '/what-is-ebpf/',
      items: [
        {
          title: 'Performance',
          icon: 'performance',
          description:
            'eBPF drastically improves processing by being JIT compiled and running directly in the kernel.',
        },
        {
          title: 'Security',
          icon: 'security',
          description:
            'eBPF programs are verified to not crash the kernel and can only be modified by privileged users.',
        },
        {
          title: 'Flexibility',
          icon: 'flexibility',
          description:
            'Modify or add functionality and use cases to the kernel without having to restart or patch it.',
        },
      ],
    },
    testimonials: {
      items: [
        {
          logo: 'azure',
          logoWidth: 134,
          company: 'Microsoft Azure',
          review:
            'eBPF has resulted in a new generation of tooling that allows developers to easily diagnose problems, innovate quickly, and extend operating system functionality.',
          author: 'Mark Russinovich',
          role: 'Chief Technology Officer at Microsoft Azure, 2021',
        },
        {
          logo: 'google',
          logoWidth: 104,
          company: 'Google',
          review:
            'eBPF is the future of networking for the Linux kernel and Google is pleased to be part of the evolving standard it has created.',
          author: 'Chris DiBona',
          role: 'Director of Open Source at Google, 2021',
        },
        {
          logo: 'isovalent',
          logoWidth: 148,
          company: 'Isovalent',
          review:
            'Even though eBPF has already found its ways into the production stacks of countless enterprises, we are still at the beginning of the innovation curve that eBPF as a technology unlocks',
          author: 'Thomas Graf',
          role: 'Chief Technology Officer at Isovalent, 2021',
        },
        {
          logo: 'meta',
          logoWidth: 120,
          company: 'Meta',
          review:
            'For many years, eBPF has played a critical role in accelerating the kernel development. We’re excited to support the work of the eBPF community, enabling them to build the tools needed to power the next generation of Linux system development.',
          author: 'Chris Mason',
          role: 'Kernel Maintainer and Engineering Director at Facebook, 2021',
        },
        {
          logo: 'netflix',
          logoWidth: 109,
          company: 'Netflix',
          review:
            'eBPF is a new type of software that provides superpower capabilities, birthing an industry of networking, performance, and security technologies. Netflix has pioneered uses of eBPF for observability, providing insight into countless areas that were previously difficult or prohibitively expensive to instrument. eBPF has helped us lower application latency and find cost savings.',
          author: 'Brendan Gregg',
          role: 'Senior performance engineer at Netflix, 2021',
        },
      ],
    },
    features: {
      title: 'What’s possible with eBPF?',
      items: [
        {
          bgClassName: 'bg-secondary-yellow-light',
          image: 'networking',
          title: 'Networking',
          description:
            'Speed packet processing without leaving kernel space. Add additional protocol parsers and easily program any forwarding logic to meet changing requirements.',
        },
        {
          bgClassName: 'bg-secondary-green-light',
          image: 'observability',
          title: 'Observability',
          description:
            'Collection and in-kernel aggregation of custom metrics with generation of visibility events and data structures from a wide range of possible sources without having to export samples.',
        },
        {
          bgClassName: 'bg-secondary-blue-light',
          image: 'tracingAndProfiling',
          title: 'Tracing & Profiling',
          description:
            'Attach eBPF programs to trace points as well as kernel and user application probe points giving powerful introspection abilities and unique insights to troubleshoot system performance problems.',
        },
        {
          bgClassName: 'bg-secondary-red-light',
          image: 'security',
          title: 'Security',
          description:
            'Combine seeing and understanding all system calls with a packet and socket-level view of all networking to create security systems operating on more context with a better level of control.',
        },
      ],
    },
    videoGallery: {
      title: 'eBPF Community Talks',
      items: videoItems,
    },
  },
  'fr-fr': {
    hero: {
      title:
        'Programmation dynamique du noyau pour un trafic réseau, une observabilité, une trace et une sécurité efficaces',
      blackButtonTitle: 'Paysage du projet',
      blackButtonUrl: '/fr-fr/applications',
      yellowButtonTitle: 'Qu’est-ce qu’eBPF',
      yellowButtonUrl: '/fr-fr/what-is-ebpf',
      altImage: 'eBPF diagram',
      items: [
        'Vérification des programmes pour une exécution sécurisée',
        'Branchement n’importe où dans le noyau pour une modification des fonctionnalités',
        'Compilateur JIT pour une vitesse d’exécution quasi native',
        'Accès au fonctions bas niveau du système',
      ],
    },
    caseStudies: {
      title: 'Des entreprises de tous type d’industries utilisent eBPF en production',
      linkText: 'Plus d’études de cas',
      linkUrl: '/fr-fr/case-studies/',
      items: caseStudiesData['fr-fr'].slice(0, 6),
    },
    whyEbpf: {
      title: 'Pourquoi eBPF?',
      linkTitle: 'Qu’est ce qu’eBPF?',
      linkUrl: '/fr-fr/what-is-ebpf/',
      items: [
        {
          title: 'Performance',
          icon: 'performance',
          description:
            'eBPF accélère considérablement l’exécution en étant compilé JIT et en s’exécutant directement dans le noyau.',
        },
        {
          title: 'Sécurité',
          icon: 'security',
          description:
            'Les programmes eBPF sont vérifiés pour ne pas planter le noyau et ne peuvent être modifiés que par des utilisateurs privilégiés.',
        },
        {
          title: 'Flexibilité',
          icon: 'flexibility',
          description:
            'Modification ou ajout de fonctionnalités au noyau, sans le patcher ou le redémarrer.',
        },
      ],
    },
    testimonials: {
      items: [
        {
          logo: 'azure',
          logoWidth: 134,
          company: 'Microsoft Azure',
          review:
            'eBPF a donné naissance à une nouvelle génération d’outils permettant aux développeurs de diagnostiquer facilement les problèmes, d’innover rapidement et d’étendre les fonctionnalités du système d’exploitation.',
          author: 'Mark Russinovich',
          role: 'Chief Technology Officer at Microsoft Azure, 2021',
        },
        {
          logo: 'google',
          logoWidth: 104,
          company: 'Google',
          review:
            'eBPF est l’avenir de la mise en réseau pour le noyau Linux et Google est heureux de faire partie de l’évolution engendrée.',
          author: 'Chris DiBona',
          role: 'Director of Open Source at Google, 2021',
        },
        {
          logo: 'isovalent',
          logoWidth: 148,
          company: 'Isovalent',
          review:
            'Bien qu’eBPF ait déjà trouvé sa place dans les logiciels en production d’innombrables entreprises, l’innovation que représente eBPF, en tant que technologie, ne fait que débuter.',
          author: 'Thomas Graf',
          role: 'Chief Technology Officer at Isovalent, 2021',
        },
        {
          logo: 'meta',
          logoWidth: 120,
          company: 'Meta',
          review:
            'Pendant de nombreuses années, eBPF a joué un rôle essentiel dans l’accélération du développement du noyau. Nous sommes ravis de soutenir le travail de la communauté eBPF, en leur permettant de construire les outils nécessaires pour alimenter la prochaine génération du développement Linux.',
          author: 'Chris Mason',
          role: 'Kernel Maintainer and Engineering Director at Facebook, 2021',
        },
        {
          logo: 'netflix',
          logoWidth: 109,
          company: 'Netflix',
          review:
            'eBPF est une nouvelle façon de programmer qui offre des super-pouvoirs, donnant naissance à une gamme d’applications dans l’industrie du réseau, du suivi de performance et de la sécurité. Netflix a été le premier à utiliser eBPF pour l’observabilité, fournissant des informations dans de nombreux domaines qui étaient auparavant difficiles ou très coûteux à instrumenter. eBPF nous a aidé à réduire la latence des applications et à réduire les coûts.',
          author: 'Brendan Gregg',
          role: 'Senior performance engineer at Netflix, 2021',
        },
      ],
    },
    features: {
      title: 'Que peut-on faire avec eBPF?',
      items: [
        {
          bgClassName: 'bg-secondary-yellow-light',
          image: 'networking',
          title: 'Réseau',
          description:
            'Accélérer le traitement des paquets sans même quitter l’espace noyau. Ajouter des parseurs de protocole supplémentaires et programmer facilement n’importe quelle logique de routage pour répondre à des exigences sans cesse en évolution.',
        },
        {
          bgClassName: 'bg-secondary-green-light',
          image: 'observability',
          title: 'Observabilité',
          description:
            'Collecter et agréger des métriques personnalisées dans le noyau en générant des événements de visibilité et en accédant à des structures de données à partir d’un large éventail de sources possibles sans avoir à exporter des échantillons.',
        },
        {
          bgClassName: 'bg-secondary-blue-light',
          image: 'tracingAndProfiling',
          title: 'Traçabilité et profilage',
          description:
            'Attacher des programmes eBPF aux points de sonde au niveau kernel mais aussi de l’application utilisateur afin d’offrir de puissantes capacités d’introspection et des informations uniques pour résoudre les problèmes de performances du système.',
        },
        {
          bgClassName: 'bg-secondary-red-light',
          image: 'security',
          title: 'Sécurité',
          description:
            'Associer la visualisation et la compréhension de tous les appels système au niveau des paquets et des sockets de l’ensemble du réseau pour créer des solutions de sécurité fonctionnant sur un contexte plus large avec un meilleur niveau de contrôle.',
        },
      ],
    },
    videoGallery: {
      title: 'Présentations de la communauté eBPF',
      items: videoItems,
    },
  },
  'pt-br': {
    hero: {
      title:
        'Programar dinamicamente o kernel para networking eficiente, observabilidade, rastreamento e segurança',
      blackButtonTitle: 'Cenário do Projeto',
      blackButtonUrl: '/pt-br/applications',
      yellowButtonTitle: 'O que é o eBPF',
      yellowButtonUrl: '/pt-br/what-is-ebpf',
      altImage: 'eBPF diagram',
      items: [
        'Programas são verificados para execução segura',
        'Gancho em qualquer lugar no kernel para modificar a funcionalidade',
        'Compilador JIT para velocidade de execução quase nativa',
        'Adicionar capacidades do sistema operacional em tempo de execução',
      ],
    },
    caseStudies: {
      title: 'Organizações em todas as indústrias usam o eBPF em produção',
      linkText: 'Mais estudos de caso',
      linkUrl: '/pt-br/case-studies/',
      items: caseStudiesData['pt-br'].slice(0, 6),
    },
    whyEbpf: {
      title: 'Por que o eBPF?',
      linkTitle: 'O que é o eBPF?',
      linkUrl: '/pt-br/what-is-ebpf/',
      items: [
        {
          title: 'Desempenho',
          icon: 'performance',
          description:
            'O eBPF melhora drasticamente o processamento ao ser compilado JIT e executado diretamente no kernel.',
        },
        {
          title: 'Segurança',
          icon: 'security',
          description:
            'Programas eBPF são verificados para não causar falhas no kernel e só podem ser modificados por usuários privilegiados.',
        },
        {
          title: 'Flexibilidade',
          icon: 'flexibility',
          description:
            'Modificar ou adicionar funcionalidades e casos de uso ao kernel sem a necessidade de reiniciá-lo ou aplicar patches.',
        },
      ],
    },
    testimonials: {
      items: [
        {
          logo: 'azure',
          logoWidth: 134,
          company: 'Microsoft Azure',
          review:
            'O eBPF resultou em uma nova geração de ferramentas que permitem que os desenvolvedores diagnostiquem problemas com facilidade, inovem rapidamente e estendam a funcionalidade do sistema operacional.',
          author: 'Mark Russinovich',
          role: 'Chief Technology Officer at Microsoft Azure, 2021',
        },
        {
          logo: 'google',
          logoWidth: 104,
          company: 'Google',
          review:
            'O eBPF é o futuro da rede para o kernel Linux, e o Google tem o prazer de fazer parte do padrão em evolução que ele criou.',
          author: 'Chris DiBona',
          role: 'Director of Open Source at Google, 2021',
        },
        {
          logo: 'isovalent',
          logoWidth: 148,
          company: 'Isovalent',
          review:
            'Apesar de o eBPF já estar presente nas pilhas de produção de inúmeras empresas, ainda estamos no início da curva de inovação que a tecnologia eBPF desbloqueia.',
          author: 'Thomas Graf',
          role: 'Chief Technology Officer at Isovalent, 2021',
        },
        {
          logo: 'meta',
          logoWidth: 120,
          company: 'Meta',
          review:
            'Por muitos anos, o eBPF desempenhou um papel crítico no desenvolvimento do kernel. Estamos empolgados em apoiar o trabalho da comunidade do eBPF, permitindo que eles construam as ferramentas necessárias para impulsionar a próxima geração do desenvolvimento de sistemas Linux.',
          author: 'Chris Mason',
          role: 'Kernel Maintainer and Engineering Director at Facebook, 2021',
        },
        {
          logo: 'netflix',
          logoWidth: 109,
          company: 'Netflix',
          review:
            'O eBPF é um novo tipo de software que oferece capacidades de superpoder, dando origem a uma indústria de tecnologias de rede, desempenho e segurança. A Netflix tem sido pioneira no uso do eBPF para observabilidade, fornecendo insights em inúmeras áreas que anteriormente eram difíceis ou proibitivamente caras de serem instrumentadas. O eBPF nos ajudou a reduzir a latência do aplicativo e encontrar economia de custos.',
          author: 'Brendan Gregg',
          role: 'Senior performance engineer at Netflix, 2021',
        },
      ],
    },
    features: {
      title: 'O que é possível com o eBPF?',
      items: [
        {
          bgClassName: 'bg-secondary-yellow-light',
          image: 'networking',
          title: 'Rede',
          description:
            'Acelere o processamento de pacotes sem sair do espaço do kernel. Adicione analisadores de protocolo adicionais e programe facilmente qualquer lógica de encaminhamento para atender a requisitos em constante mudança.',
        },
        {
          bgClassName: 'bg-secondary-green-light',
          image: 'observability',
          title: 'Observabilidade',
          description:
            'Combine a visualização e compreensão de todas as chamadas do sistema com uma visão de nível de pacote e socket de toda a rede para criar sistemas de segurança que operam com mais contexto e um melhor nível de controle.',
        },
        {
          bgClassName: 'bg-secondary-blue-light',
          image: 'tracingAndProfiling',
          title: 'Rastreamento e Profiling',
          description:
            'Anexe programas eBPF a pontos de rastreamento, bem como pontos de sondagem de aplicativos do kernel e do usuário, oferecendo poderosas habilidades de introspecção e insights únicos para solucionar problemas de desempenho do sistema.',
        },
        {
          bgClassName: 'bg-secondary-red-light',
          image: 'security',
          title: 'Segurança',
          description:
            'Combine a visualização e compreensão de todas as chamadas do sistema com uma visão de nível de pacote e socket de toda a rede para criar sistemas de segurança que operam com mais contexto e um melhor nível de controle.',
        },
      ],
    },
    videoGallery: {
      title: 'Palestras da Comunidade do eBPF',
      items: videoItems,
    },
  },
  'it-it': {
    hero: {
      title:
        'Programma dinamicamente il kernel per networking efficiente, osservabilità, tracciamento e sicurezza',
      blackButtonTitle: 'Panorama dei Progetti',
      blackButtonUrl: '/it-it/applications',
      yellowButtonTitle: 'Cos’è eBPF',
      yellowButtonUrl: '/it-it/what-is-ebpf',
      altImage: 'eBPF diagram',
      items: [
        'I programmi sono verificati per essere eseguiti in sicurezza',
        'Agganciali ovunque nel kernel per modificarne la funzionalità',
        'Compilatore JIT per una velocità d'esecuzione quasi nativa',
        'Aggiungi funzionalità del sistema operativo in fase di esecuzione',
      ],
    },
    caseStudies: {
      title: 'Le organizzazioni di ogni settore usano eBPF in produzione',
      linkText: 'Altri casi di studio',
      linkUrl: '/it-it/case-studies/',
      items: caseStudiesData['it-it'].slice(0, 6),
    },
    whyEbpf: {
      title: 'Perché eBPF?',
      linkTitle: 'Cos’è eBPF',
      linkUrl: '/it-it/what-is-ebpf/',
      items: [
        {
          title: 'Prestazioni',
          icon: 'performance',
          description:
            'eBPF migliora drasticamente l’elaborazione essendo compilato JIT e all’esecuzione direttamente nel kernel.',
        },
        {
          title: 'Sicurezza',
          icon: 'security',
          description:
            'I programmi eBPF sono verificati per evitare il crash del kernel e possono essere modificati solo da utenti privilegiati.',
        },
        {
          title: 'Flessibilità',
          icon: 'flexibility',
          description:
            'Modificare o aggiungere una funzionalità e casi d’uso al kernel senza doverlo riavviare o applicare una patch.',
        },
      ],
    },
    testimonials: {
      items: [
        {
          logo: 'azure',
          logoWidth: 134,
          company: 'Microsoft Azure',
          review:
            'eBPF ha dato vita a una nuova generazione di strumenti che permettono agli sviluppatori di diagnosticare i problemi facilmente, innovare velocemente ed estendere le funzionalità del sistema operativo.',
          author: 'Mark Russinovich',
          role: 'Chief Technology Officer at Microsoft Azure, 2021',
        },
        {
          logo: 'google',
          logoWidth: 104,
          company: 'Google',
          review:
            'eBPF è il futuro del networking per il kernel Linux, e Google è lieta di essere parte degli standard in evoluzione che ha creato.',
          author: 'Chris DiBona',
          role: 'Director of Open Source at Google, 2021',
        },
        {
          logo: 'isovalent',
          logoWidth: 148,
          company: 'Isovalent',
          review:
            'Anche se eBPF è già entrato nello stack di produzione di innumerevoli aziende, siamo ancora all’inizio della curva di innovazione che eBPF come tecnologia consente di sfruttare.',
          author: 'Thomas Graf',
          role: 'Chief Technology Officer at Isovalent, 2021',
        },
        {
          logo: 'meta',
          logoWidth: 120,
          company: 'Meta',
          review:
            'Per molti anni, eBPF ha giocato un ruolo critico nell’accelerazione dello sviluppo del kernel. Siamo entusiasti di sostenere il lavoro della comunità eBPF, aiutandoli a costruire gli strumenti necessari per alimentare la futura generazione di sviluppo dei sistemi Linux.',
          author: 'Chris Mason',
          role: 'Kernel Maintainer and Engineering Director at Facebook, 2021',
        },
        {
          logo: 'netflix',
          logoWidth: 109,
          company: 'Netflix',
          review:
            'eBPF è un nuovo tipo di software che offre capacità superpotenti, dando vita a un settore di tecnologie di rete, prestazioni, e sicurezza. Netflix è stata pioniera nell’uso di eBPF per l’osservabilità, fornendo informazioni su innumerevoli aree che erano precedentemente difficili o proibitivamente costose da strumentare. eBPF ci ha aiutato a ridurre la latenza delle applicazioni e a risparmiare sui costi.',
          author: 'Brendan Gregg',
          role: 'Senior performance engineer at Netflix, 2021',
        },
      ],
    },
    features: {
      title: 'Cosa è possibile fare con eBPF?',
      items: [
        {
          bgClassName: 'bg-secondary-yellow-light',
          image: 'networking',
          title: 'Rete',
          description:
            'Elaborazione veloce dei pacchetti di rete senza lasciare lo spazio kernel. Aggiungere ulteriori parser di protocollo e programmare facilmente logiche di inoltro per soddisfare requisiti in continua evoluzione',
        },
        {
          bgClassName: 'bg-secondary-green-light',
          image: 'observability',
          title: 'Osservabilità',
          description:
            'Raccolta e aggregazione delle metriche personalizzate in-kernel con generazione di eventi di visibilità e strutture dati da un’ampia gamma di possibili fonti senza dover esportare campioni.',
        },
        {
          bgClassName: 'bg-secondary-blue-light',
          image: 'tracingAndProfiling',
          title: 'Tracciamento e Profilazione',
          description:
            'Collega i programmi eBPF ai punti di tracciamento e ai punti sonda del kernel e delle applicazioni utente, e sfrutta potenti capacità di introspezione e approfondimenti unici per la risoluzione dei problemi di prestazioni del sistema.',
        },
        {
          bgClassName: 'bg-secondary-red-light',
          image: 'security',
          title: 'Sicurezza',
          description:
            'Combina la visione e la comprensione di tutte le chiamate di sistema con una osservabilità a livello di pacchetto e di socket di tutto il networking per creare sistemi di sicurezza che operano in un contesto più ampio e con un migliore livello di controllo.',
        },
      ],
    },
    videoGallery: {
      title: 'Talks della community eBPF',
      items: videoItems,
    },
  },  
};

export default data;
