import videoItems from 'data/pages/get-started/video-data';

const data = {
  pageUrls: {
    en: '/get-started/',
    'fr-fr': '/fr-fr/get-started/',
    pt: '/pt/get-started/',
    'pt-br': '/pt-br/get-started/',
    'it-it': '/it-it/get-started/',
    'zh-cn': '/zh-cn/get-started/',
    sw: '/sw/get-started/',
  },
  en: {
    hero: {
      title: 'Get Started with eBPF',
      items: [
        {
          image: 'lab',
          title: 'Try the Lab',
          description:
            'Borrowing the opensnoop example from Liz Rice’s report, this lab teaches you to handle an eBPF tool, watch it loading its components, and even add your own tracing into the source eBPF code.',
          cardColorClassName: 'bg-secondary-blue-1-light border-secondary-blue-1',
          dashedBorderClassName: 'border-secondary-blue-2',
          linkUrl: 'https://ebpf.io/labs/',
          linkTarget: '_blank',
        },
        {
          image: 'book',
          title: 'Read the Books',
          description:
            'Read the “What is eBPF?” and “Learning eBPF” O’Reilly Books by Liz Rice or BPF Performance Tools by Brendan Gregg to get started. Throughout the books, you will learn what eBPF and why it is so powerful, the capabilities it provides.',
          cardColorClassName: 'bg-secondary-green-1-light border-secondary-green-1',
          dashedBorderClassName: 'border-secondary-green-2',
          linkUrl: '#books',
          linkTarget: '_self',
        },
        {
          image: 'video',
          title: 'Watch the video',
          description:
            'Dive into the history of eBPF with this talk from John Fastabend. Starting in the “early days” of 2014, it covers the main projects, companies, and players that influenced the landscape of Linux networking at the time and how they enabled the creation of eBPF.',
          cardColorClassName: 'bg-secondary-red-1-light border-secondary-red-1',
          dashedBorderClassName: 'border-secondary-red-2',
          linkUrl: 'https://www.youtube.com/watch?v=sYxUOKi3Q00',
          linkTarget: '_blank',
        },
      ],
    },
    documentation: {
      title: 'Read the Documentation to learn more about eBPF',
      items: [
        {
          image: 'wikipedia',
          title: 'Wikipedia',
          description: 'Wikipedia article on eBPF',
          linkUrl: 'https://en.wikipedia.org/wiki/EBPF',
        },
        {
          image: 'stackoverflow',
          title: 'eBPF Stackoverflow',
          description: 'Ask questions and read answers',
          linkUrl: 'https://stackoverflow.com/questions/tagged/ebpf+or+bpf+or+xdp-bpf',
        },
        {
          image: 'reddit',
          title: 'eBPF community on Reddit',
          description: 'Discuss the eBPF kernel subsystem',
          linkUrl: 'https://www.reddit.com/r/eBPF/',
        },
        {
          image: 'cilium',
          title: 'BPF & XDP Reference Guide',
          description: 'Learn BPF internals and programming',
          linkUrl: 'https://cilium.readthedocs.io/en/stable/bpf/',
        },
        {
          image: 'kernel',
          title: 'BPF Documentation',
          description: 'BPF Documentation in the Linux Kernel',
          linkUrl: 'https://www.kernel.org/doc/html/latest/bpf/index.html',
        },
        {
          image: 'gitKernel',
          title: 'BPF Design Q&A',
          description: 'FAQ for kernel-related eBPF questions',
          linkUrl:
            'https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/bpf/bpf_design_QA.rst',
        },
      ],
    },
    subscriptionForm: {
      title: 'Subscribe',
      afterTitle: 'to bi-weekly eCHO News',
      description: 'Keep up on the latest news and information from the eBPF and Cilium',
      placeholder: 'Email address...',
      buttonTitle: 'Subscribe',
    },
    books: {
      title: 'Explore books on eBPF from the industry experts',
      linkTitle: 'Learn More',
    },
    tutorials: {
      title: 'Dig into the eBPF technology with tutorials from industry experts',
      linkTitle: 'More tutorials',
      items: [
        {
          title: 'eBPF Tracing Tutorials',
          description:
            'Learn how to use eBPF for tracing from just running bcc tools to developing with bpftrace and bcc.',
          linkUrl: 'http://www.brendangregg.com/blog/2019-01-01/learn-ebpf-tracing.html',
        },
        {
          title: 'XDP Tutorials',
          description:
            'Learn the basic steps needed to effectively write programs for the XDP from what it is to attaching multiple programs to one interface',
          linkUrl: 'https://github.com/xdp-project/xdp-tutorial',
        },
        {
          title: 'Compiler Explorer',
          description:
            'BPF support to run the compiler interactively in your web browser and explore the assembly',
          linkUrl: 'https://godbolt.org/',
        },
      ],
    },
    events: {
      title: 'Attend eBPF events to learn from industry experts',
      linkTitle: 'More events',
      linkUrl: '/events/',
    },
    videoGallery: {
      title: 'eBPF introductory videos',
      items: videoItems,
    },
    blog: {
      title: 'Learn more about eBPF in articles from the community',
      linkTitle: 'More articles',
      linkUrl: '/blog/',
    },
    contributors: {
      title: 'Meet some of our community members',
    },
  },
  'fr-fr': {
    hero: {
      title: 'Démarrer avec eBPF',
      items: [
        {
          image: 'lab',
          title: 'Essayez le Lab',
          description:
            'En empruntant l’exemple d’opensnoop de l’ouvrage de Liz Rice, ce lab vous apprend à gérer un outil eBPF, à l’observer lorsqu’il charge ses composants et même à ajouter votre propre traçage dans le code source eBPF.',
          cardColorClassName: 'bg-secondary-blue-1-light border-secondary-blue-1',
          dashedBorderClassName: 'border-secondary-blue-2',
          linkUrl: 'https://ebpf.io/labs/',
          linkTarget: '_blank',
        },
        {
          image: 'book',
          title: 'Lire les livres',
          description:
            'Lisez la section « What is eBPF ? » et  « Learning eBPF» O’Reilly Books de Liz Rice ou BPF Performance Tools de Brendan Gregg pour commencer. À travers ces ouvrages, vous apprendrez ce qu’est eBPF et pourquoi il est si puissant, étudiez les capacités qu’il offre.',
          cardColorClassName: 'bg-secondary-green-1-light border-secondary-green-1',
          dashedBorderClassName: 'border-secondary-green-2',
          linkUrl: '#books',
          linkTarget: '_self',
        },
        {
          image: 'video',
          title: 'Voir la vidéo',
          description:
            'Plongez dans l’histoire d’eBPF avec cette conférence de John Fastabend. À partir des « premiers pas » de 2014, il couvre les principaux projets, entreprises et acteurs qui ont influencé le paysage des réseaux Linux à l’époque et comment ils ont permis la création d’eBPF.',
          cardColorClassName: 'bg-secondary-red-1-light border-secondary-red-1',
          dashedBorderClassName: 'border-secondary-red-2',
          linkUrl: 'https://www.youtube.com/watch?v=sYxUOKi3Q00',
          linkTarget: '_blank',
        },
      ],
    },
    documentation: {
      title: 'Lire la documentation pour en savoir plus sur eBPF',
      items: [
        {
          image: 'wikipedia',
          title: 'Wikipédia',
          description: 'Article Wikipédia sur eBPF',
          linkUrl: 'https://en.wikipedia.org/wiki/EBPF',
        },
        {
          image: 'stackoverflow',
          title: 'eBPF Stackoverflow',
          description: 'Poser des questions et trouver des réponses',
          linkUrl: 'https://stackoverflow.com/questions/tagged/ebpf+or+bpf+or+xdp-bpf',
        },
        {
          image: 'reddit',
          title: 'Communauté eBPF sur Reddit',
          description: 'Échanger sur eBPF',
          linkUrl: 'https://www.reddit.com/r/eBPF/',
        },
        {
          image: 'cilium',
          title: 'Guide de référence BPF et XDP',
          description: 'Apprendre les rouages et la programmation BPF',
          linkUrl: 'https://cilium.readthedocs.io/en/stable/bpf/',
        },
        {
          image: 'kernel',
          title: 'Documentation BPF',
          description: 'Documentation BPF dans le noyau Linux',
          linkUrl: 'https://www.kernel.org/doc/html/latest/bpf/index.html',
        },
        {
          image: 'gitKernel',
          title: 'Questions et réponses sur la conception de BPF',
          description: 'FAQ pour les questions eBPF liées au noyau',
          linkUrl:
            'https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/bpf/bpf_design_QA.rst',
        },
      ],
    },
    subscriptionForm: {
      title: 'Abonnez-vous',
      afterTitle: 'aux nouvelles d’eCHO une fois toutes les deux semaines',
      description:
        'Tenez-vous au courant des dernières actualités et informations d’eBPF et de Cilium',
      placeholder: 'Adresse e-mail...',
      buttonTitle: 'S’abonner',
    },
    books: {
      title: 'Explorez les livres sur eBPF des experts de l’industrie',
      linkTitle: 'Apprendre encore plus',
    },
    tutorials: {
      title: 'Explorez la technologie eBPF avec des tutoriels par les experts',
      linkTitle: 'Plus de tutoriels',
      items: [
        {
          title: 'Tutoriels de traçage eBPF',
          description:
            'Apprenez à utiliser eBPF pour le traçage, de l’exécution d’outils bcc au développement avec bpftrace et bcc.',
          linkUrl: 'http://www.brendangregg.com/blog/2019-01-01/learn-ebpf-tracing.html',
        },
        {
          title: 'Tutoriels XDP',
          description:
            'Apprenez les étapes de base nécessaires pour écrire efficacement des programmes pour XDP, depuis les bases jusqu’à l’attache de plusieurs programmes sur une interface.',
          linkUrl: 'https://github.com/xdp-project/xdp-tutorial',
        },
        {
          title: 'Exploration du compilateur',
          description:
            'Compiler du code BPF de manière interactive dans votre navigateur web et explorer le code assembleur.',
          linkUrl: 'https://godbolt.org/',
        },
      ],
    },
    events: {
      title: 'Participez aux événements eBPF pour apprendre des experts du secteur',
      linkTitle: 'Plus d’événements',
      linkUrl: '/fr-fr/events/',
    },
    videoGallery: {
      title: 'Vidéos d’introduction eBPF',
      items: videoItems,
    },
    blog: {
      title: 'Apprenez-en davantage sur eBPF grâce aux articles de la communauté',
      linkTitle: 'Plus d’articles',
      linkUrl: '/blog/',
    },
    contributors: {
      title: 'Meet some of our community members',
    },
  },
  pt: {
    hero: {
      title: 'Começando com ebpf',
      items: [
        {
          image: 'lab',
          title: 'Experimente o laboratório',
          description:
            'Tomando emprestado o exemplo do opensnoop do relatório de Liz Rice, este laboratório ensina você a lidar com uma ferramenta eBPF, observá-la carregando os seus componentes e até mesmo adicionar o seu próprio rastreamento ao código-fonte do eBPF.',
          cardColorClassName: 'bg-secondary-blue-1-light border-secondary-blue-1',
          dashedBorderClassName: 'border-secondary-blue-2',
          linkUrl: 'https://ebpf.io/labs/',
          linkTarget: '_blank',
        },
        {
          image: 'book',
          title: 'Leia os livros',
          description:
            'Leia o artigo “O que é eBPF?” e “aprendizado eBPF” O’Reilly Books de Liz Rice ou BPF Performance ferramenta de Brendan Gregg para começar. Ao longo dos livros, você aprenderá o que é eBPF e por que ele é tão poderoso, os recursos que ele oferece.',
          cardColorClassName: 'bg-secondary-green-1-light border-secondary-green-1',
          dashedBorderClassName: 'border-secondary-green-2',
          linkUrl: '#books',
          linkTarget: '_self',
        },
        {
          image: 'video',
          title: 'Assista o vídeo',
          description:
            'Mergulhe na história do eBPF com esta palestra de John Fastabend. Começando nos “primeiros dias” de 2014, abrange os principais projetos, empresas e players que influenciaram o cenário das redes Linux da época e como eles possibilitaram a criação do eBPF.',
          cardColorClassName: 'bg-secondary-red-1-light border-secondary-red-1',
          dashedBorderClassName: 'border-secondary-red-2',
          linkUrl: 'https://www.youtube.com/watch?v=sYxUOKi3Q00',
          linkTarget: '_blank',
        },
      ],
    },
    documentation: {
      title: 'Leia a documentação para saber mais sobre o eBPF',
      items: [
        {
          image: 'wikipedia',
          title: 'Wikipédia',
          description: 'Artigo da Wikipédia sobre eBPF',
          linkUrl: 'https://en.wikipedia.org/wiki/EBPF',
        },
        {
          image: 'stackoverflow',
          title: 'Stackoverflow eBPF',
          description: 'Faça perguntas e leia as respostas',
          linkUrl: 'https://stackoverflow.com/questions/tagged/ebpf+or+bpf+or+xdp-bpf',
        },
        {
          image: 'reddit',
          title: 'Comunidade eBPF no Reddit',
          description: 'Discuta o subsistema do kernel',
          linkUrl: 'https://www.reddit.com/r/eBPF/',
        },
        {
          image: 'cilium',
          title: 'eBPF Guia de referência BPF e XDP',
          description: 'Aprenda os detalhes internos e a programação do BPF',
          linkUrl: 'https://cilium.readthedocs.io/en/stable/bpf/',
        },
        {
          image: 'kernel',
          title: 'Documentação BPF',
          description: 'Documentação BPF no Kernel Linux',
          linkUrl: 'https://www.kernel.org/doc/html/latest/bpf/index.html',
        },
        {
          image: 'gitKernel',
          title: 'Q&A design BPF',
          description: 'FAQ para kernel relacionadas perguntas',
          linkUrl:
            'https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/bpf/bpf_design_QA.rst',
        },
      ],
    },
    subscriptionForm: {
      title: 'Subscrever',
      afterTitle: 'o eCHO Notícias quinzenal',
      description: 'Fique por dentro das últimas notícias e informações do eBPF e Cilium',
      placeholder: 'Endereço de email...',
      buttonTitle: 'Se inscrever',
    },
    books: {
      title: 'Explore livros eBPF de especialistas do setor',
      linkTitle: 'Aprender mais',
    },
    tutorials: {
      title: 'Aprofunde-se na tecnologia eBPF com tutoriais de especialistas do setor',
      linkTitle: 'Mais tutoriais',
      items: [
        {
          title: 'Tutoriais de rastreamento eBPF',
          description:
            'Aprenda como usar o eBPF para rastreamento, desde a simples execução de ferramentas Bcc até o desenvolvimento com bpftrace e Bcc',
          linkUrl: 'http://www.brendangregg.com/blog/2019-01-01/learn-ebpf-tracing.html',
        },
        {
          title: 'Tutoriais XDP',
          description:
            'Aprenda as etapas básicas necessárias para escrever programas para o XDP de maneira eficaz, desde o que significa anexar vários programas a uma interface',
          linkUrl: 'https://github.com/xdp-project/xdp-tutorial',
        },
        {
          title: 'Explorador do compilador',
          description:
            'Suporte BPF para executar o compilador interativamente no seu navegador da web e explorar o assembly',
          linkUrl: 'https://godbolt.org/',
        },
      ],
    },
    events: {
      title: 'Participe de eventos do eBPF para aprender com especialistas da indústria',
      linkTitle: 'Mais eventos',
      linkUrl: '/pt/events/',
    },
    videoGallery: {
      title: 'Vídeos introdutórios do eBPF',
      items: videoItems,
    },
    blog: {
      title: 'Saiba mais sobre o eBPF em artigos da comunidade',
      linkTitle: 'Mais artigos',
      linkUrl: '/blog/',
    },
    contributors: {
      title: 'Meet some of our community members',
    },
  },
  'pt-br': {
    hero: {
      title: 'Comece com eBPF',
      items: [
        {
          image: 'lab',
          title: 'Experimente o laboratório',
          description:
            'Tomando emprestado o exemplo do opensnoop do relatório de Liz Rice, este laboratório ensina como manipular uma ferramenta eBPF, observá-la carregando seus componentes e até mesmo adicionar seu próprio rastreamento ao código-fonte eBPF.',
          cardColorClassName: 'bg-secondary-blue-1-light border-secondary-blue-1',
          dashedBorderClassName: 'border-secondary-blue-2',
          linkUrl: 'https://ebpf.io/labs/',
          linkTarget: '_blank',
        },
        {
          image: 'book',
          title: 'Leia os Livros',
          description:
            'Leia os livros "What is eBPF?" e "Learning eBPF" da O’Reilly, de Liz Rice, ou "BPF Performance Tools" de Brendan Gregg para começar. Ao longo dos livros, você aprenderá o que é eBPF e por que ele é tão poderoso, e as capacidades que ele oferece.',
          cardColorClassName: 'bg-secondary-green-1-light border-secondary-green-1',
          dashedBorderClassName: 'border-secondary-green-2',
          linkUrl: '#books',
          linkTarget: '_self',
        },
        {
          image: 'video',
          title: 'Assista ao vídeo',
          description:
            'Mergulhe na história do eBPF com essa palestra de John Fastabend. Começando nos "primeiros dias" de 2014, ela aborda os principais projetos, empresas e atores que influenciaram o cenário de redes do Linux na época e como eles possibilitaram a criação do eBPF.',
          cardColorClassName: 'bg-secondary-red-1-light border-secondary-red-1',
          dashedBorderClassName: 'border-secondary-red-2',
          linkUrl: 'https://www.youtube.com/watch?v=sYxUOKi3Q00',
          linkTarget: '_blank',
        },
      ],
    },
    documentation: {
      title: 'Leia a Documentação para aprender mais sobre eBPF',
      items: [
        {
          image: 'wikipedia',
          title: 'Wikipedia',
          description: 'Artigo da Wikipedia sobre eBPF',
          linkUrl: 'https://en.wikipedia.org/wiki/EBPF',
        },
        {
          image: 'stackoverflow',
          title: 'eBPF Stackoverflow',
          description: 'Faça perguntas e leia respostas',
          linkUrl: 'https://stackoverflow.com/questions/tagged/ebpf+or+bpf+or+xdp-bpf',
        },
        {
          image: 'reddit',
          title: 'Comunidade eBPF no Reddit',
          description: 'Discuta o subsistema do kernel eBPF',
          linkUrl: 'https://www.reddit.com/r/eBPF/',
        },
        {
          image: 'cilium',
          title: 'BPF & XDP Reference Guide',
          description: 'Aprenda sobre a parte interna do BPF e a programação',
          linkUrl: 'https://cilium.readthedocs.io/en/stable/bpf/',
        },
        {
          image: 'kernel',
          title: 'Documentação BPF',
          description: 'Documentação BPF no Kernel Linux',
          linkUrl: 'https://www.kernel.org/doc/html/latest/bpf/index.html',
        },
        {
          image: 'gitKernel',
          title: 'BPF Design Q&A',
          description: 'FAQ para perguntas relacionadas ao kernel eBPF',
          linkUrl:
            'https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/bpf/bpf_design_QA.rst',
        },
      ],
    },
    subscriptionForm: {
      title: 'Assine',
      afterTitle: 'as Notícias quinzenais do eCHO',
      description:
        'Mantenha-se atualizado sobre as últimas notícias e informações do eBPF e Cilium',
      placeholder: 'Endereço de email...',
      buttonTitle: 'Assine',
    },
    books: {
      title: 'Explore livros sobre eBPF dos especialistas do setor',
      linkTitle: 'Aprender mais',
    },
    tutorials: {
      title: 'Aprofunde-se na tecnologia eBPF com tutoriais de especialistas do setor',
      linkTitle: 'Mais tutoriais',
      items: [
        {
          title: 'Tutoriais de Rastreamento eBPF',
          description:
            'Aprenda a usar o eBPF para rastreamento, desde a execução de ferramentas bcc até o desenvolvimento com bpftrace e bcc',
          linkUrl: 'http://www.brendangregg.com/blog/2019-01-01/learn-ebpf-tracing.html',
        },
        {
          title: 'Tutoriais XDP',
          description:
            'Aprenda os passos básicos necessários para escrever programas eficazes para o XDP, desde o que é até a anexação de vários programas a uma interface',
          linkUrl: 'https://github.com/xdp-project/xdp-tutorial',
        },
        {
          title: 'Compiler Explorer',
          description:
            'Suporte BPF para executar o compilador interativamente no navegador e explorar o assembly',
          linkUrl: 'https://godbolt.org/',
        },
      ],
    },
    events: {
      title: 'Participe de eventos do eBPF para aprender com especialistas da indústria',
      linkTitle: 'Mais eventos',
      linkUrl: '/pt-br/events/',
    },
    videoGallery: {
      title: 'Vídeos introdutórios do eBPF',
      items: videoItems,
    },
    blog: {
      title: 'Saiba mais sobre o eBPF em artigos da comunidade',
      linkTitle: 'Mais artigos',
      linkUrl: '/blog/',
    },
    contributors: {
      title: 'Meet some of our community members',
    },
  },
  'it-it': {
    hero: {
      title: 'Per iniziare con eBPF',
      items: [
        {
          image: 'lab',
          title: 'Prova il Laboratorio',
          description:
            'Prendendo in prestito l’esempio opensnoop dal report di Liz Rice, questo laboratorio ti insegna a gestire un tool eBPF, osservarlo mentre carica i suoi componenti, e persino aggiungere i tuoi trace all’interno del codice eBPF.',
          cardColorClassName: 'bg-secondary-blue-1-light border-secondary-blue-1',
          dashedBorderClassName: 'border-secondary-blue-2',
          linkUrl:
            'https://play.instruqt.com/embed/isovalent/tracks/ebpf-getting-started?token=em_9nxLzhlV41gb3rKM&show_challenges=true',
          linkTarget: '_blank',
        },
        {
          image: 'book',
          title: 'Leggi i Libri',
          description:
            'Leggi i libri di Liz Rice editi da O’Reilly “What is eBPF?” e “Learning eBPF”, oppure “BPF Performance Tools” di Brendan Gregg per iniziare. Imparerai cos’è eBPF e perché è così potente, assieme alle possibilità che offre.',
          cardColorClassName: 'bg-secondary-green-1-light border-secondary-green-1',
          dashedBorderClassName: 'border-secondary-green-2',
          linkUrl: '#books',
          linkTarget: '_self',
        },
        {
          image: 'video',
          title: 'Guarda il video',
          description:
            'Tuffati nella storia di eBPF ascoltando questo talk di John Fastabend. A partire dai “primi giorni” del 2014, si estende sui progetti principali, sulle compagnie e su tutti coloro che hanno influenzato il panorama del networking di Linux del tempo e come hanno aperto la strada alla creazione di eBPF.',
          cardColorClassName: 'bg-secondary-red-1-light border-secondary-red-1',
          dashedBorderClassName: 'border-secondary-red-2',
          linkUrl: 'https://www.youtube.com/watch?v=sYxUOKi3Q00',
          linkTarget: '_blank',
        },
      ],
    },
    documentation: {
      title: 'Leggi la documentazione per imparare altro su eBPF',
      items: [
        {
          image: 'wikipedia',
          title: 'Wikipedia',
          description: 'Articoli Wikipedia su eBPF',
          linkUrl: 'https://en.wikipedia.org/wiki/EBPF',
        },
        {
          image: 'stackoverflow',
          title: 'eBPF Stackoverflow',
          description: 'Poni domande e leggi le risposte',
          linkUrl: 'https://stackoverflow.com/questions/tagged/ebpf+or+bpf+or+xdp-bpf',
        },
        {
          image: 'reddit',
          title: 'Community eBPF su Reddit',
          description: 'Discuti sul sottosistema eBPF del kernel',
          linkUrl: 'https://www.reddit.com/r/eBPF/',
        },
        {
          image: 'cilium',
          title: 'Guide di riferimento su BPF e XDP',
          description: 'Impara gli internals e la programmazione eBPF',
          linkUrl: 'https://cilium.readthedocs.io/en/stable/bpf/',
        },
        {
          image: 'kernel',
          title: 'Documentazione BPF',
          description: 'Documentazione BPF nel Kernel di Linux',
          linkUrl: 'https://www.kernel.org/doc/html/latest/bpf/index.html',
        },
        {
          image: 'gitKernel',
          title: 'Domande e risposte sulla progettazione BPF',
          description: 'FAQ su domande relative a eBPF nel kernel',
          linkUrl:
            'https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/bpf/bpf_design_QA.rst',
        },
      ],
    },
    subscriptionForm: {
      title: 'Sottoscrivi',
      afterTitle: 'la newsletter quindicinale eCHO News',
      description:
        'Tieniti aggiornato sulle ultime notizie e sulle informazioni inerenti eBPF e Cilium',
      placeholder: 'Indirizzo email...',
      buttonTitle: 'Sottoscrivi',
    },
    books: {
      title: 'Esplora i libri su eBPF dagli esperti del settore',
      linkTitle: 'Approfondisci',
    },
    tutorials: {
      title: 'Approfondisci la tecnologia eBPF tramite tutorial di esperti del settore.',
      linkTitle: 'Ulteriori tutorial',
      items: [
        {
          title: 'Tutorial per il Tracing eBPF',
          description:
            'Impara come usare eBPF per il tracing, dalla semplice esecuzione di tools bcc allo sviluppo con bpftrace e bcc.',
          linkUrl: 'http://www.brendangregg.com/blog/2019-01-01/learn-ebpf-tracing.html',
        },
        {
          title: 'Tutorial XDP',
          description:
            'Impara i passaggi di base necessari per scrivere programmi in modo efficace per l’XPD, dal collegamento di più programmi a un’unica interfaccia',
          linkUrl: 'https://github.com/xdp-project/xdp-tutorial',
        },
        {
          title: 'Compiler Explorer',
          description:
            'Supporto BPF per eseguire il compilatore interattivamente nel tuo browser web e esplorare l’assemblato',
          linkUrl: 'https://godbolt.org/',
        },
      ],
    },
    events: {
      title: 'Partecipa agli eventi eBPF per imparare dagli esperti del settore',
      linkTitle: 'Altri eventi',
      linkUrl: '/it-it/events/',
    },
    videoGallery: {
      title: 'Video introduttivi a eBPF',
      items: videoItems,
    },
    blog: {
      title: 'Maggiori informazioni su eBPF negli articoli dalla community',
      linkTitle: 'Altri articoli',
      linkUrl: '/blog/',
    },
    contributors: {
      title: 'Conosci alcuni membri della nostra community',
    },
  },
  'zh-cn': {
    hero: {
      title: '开始了解 eBPF',
      items: [
        {
          image: 'lab',
          title: '动手实验',
          description:
            '通过借用 Liz Rice 报告中的 opensnoop 示例, 本实验将会教你使用 eBPF 工具, 观察其组件的加载过程, 以及可以将您自己的追踪用例添加到 eBPF 源代码中。',
          cardColorClassName: 'bg-secondary-blue-1-light border-secondary-blue-1',
          dashedBorderClassName: 'border-secondary-blue-2',
          linkUrl: 'https://ebpf.io/labs/',
          linkTarget: '_blank',
        },
        {
          image: 'book',
          title: '阅读书籍',
          description:
            '阅读 Liz Rice 所著的 O’Reilly 书籍 《What is eBPF?》 和 《Learning eBPF》 或者 Brendan Gregg 所著的 《BPF Performance Tools》 进行入门了解。通过这些书籍, 您将了解什么是 eBPF, 为什么它如此强大, 以及它提供的能力。',
          cardColorClassName: 'bg-secondary-green-1-light border-secondary-green-1',
          dashedBorderClassName: 'border-secondary-green-2',
          linkUrl: '#books',
          linkTarget: '_self',
        },
        {
          image: 'video',
          title: '观看视频',
          description:
            '跟随 John Fastabend 的演讲来深入了解 eBPF 的历史。从2014年的”早期“开始, 它介绍了当时影响 Linux 网络领域的主要项目、公司和参与者，以及它们如何促成了 eBPF 的创建。',
          cardColorClassName: 'bg-secondary-red-1-light border-secondary-red-1',
          dashedBorderClassName: 'border-secondary-red-2',
          linkUrl: 'https://www.youtube.com/watch?v=sYxUOKi3Q00',
          linkTarget: '_blank',
        },
      ],
    },
    documentation: {
      title: '阅读以下文档，了解更多有关 eBPF 内容',
      items: [
        {
          image: 'wikipedia',
          title: 'Wikipedia',
          description: 'Wikipedia 中关于 eBPF 的文章',
          linkUrl: 'https://en.wikipedia.org/wiki/EBPF',
        },
        {
          image: 'stackoverflow',
          title: 'eBPF Stackoverflow',
          description: '提问问题，阅读回答',
          linkUrl: 'https://stackoverflow.com/questions/tagged/ebpf+or+bpf+or+xdp-bpf',
        },
        {
          image: 'reddit',
          title: 'eBPF 在 Reddit 的社区',
          description: '讨论 eBPF 内核子系统',
          linkUrl: 'https://www.reddit.com/r/eBPF/',
        },
        {
          image: 'cilium',
          title: 'BPF & XDP 参考指南',
          description: '学习了解 BPF 的内部原理和编程',
          linkUrl: 'https://cilium.readthedocs.io/en/stable/bpf/',
        },
        {
          image: 'kernel',
          title: 'BPF 文档',
          description: 'Linux 内核文档中的 BPF 部分',
          linkUrl: 'https://www.kernel.org/doc/html/latest/bpf/index.html',
        },
        {
          image: 'gitKernel',
          title: 'BPF 的设计答疑',
          description: 'eBPF 内核相关问题的 FAQ',
          linkUrl:
            'https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/bpf/bpf_design_QA.rst',
        },
      ],
    },
    subscriptionForm: {
      title: '订阅',
      afterTitle: 'eCHO 的双周新闻',
      description: '了解 eBPF 和 Cilium 的最新的资讯',
      placeholder: 'Email address...',
      buttonTitle: '订阅',
    },
    books: {
      title: '从行业专家所著的书里探索 eBPF',
      linkTitle: '了解更多',
    },
    tutorials: {
      title: '从行业专家的教程里深入了解 eBPF 技术',
      linkTitle: '更多教程',
      items: [
        {
          title: 'eBPF 追踪教程',
          description:
            '学习如何使用 eBPF 进行跟踪, 从运行 bcc 工具到使用 bpftrace 和 bcc 进行开发。',
          linkUrl: 'http://www.brendangregg.com/blog/2019-01-01/learn-ebpf-tracing.html',
        },
        {
          title: 'XDP 教程',
          description:
            '学习编写 XDP 程序的基本步骤，从了解 XDP 的概念到如何在一个接口上附加多个程序',
          linkUrl: 'https://github.com/xdp-project/xdp-tutorial',
        },
        {
          title: '编译器探索器',
          description: '支持在 web 浏览器中以交互方式运行 BPF 编译器并探索汇编代码',
          linkUrl: 'https://godbolt.org/',
        },
      ],
    },
    events: {
      title: '参加 eBPF 活动向行业专家了解更多信息',
      linkTitle: '更多活动',
      linkUrl: '/zh-cn/events/',
    },
    videoGallery: {
      title: 'eBPF 入门视频',
      items: videoItems,
    },
    blog: {
      title: '通过社区文章更多的了解 eBPF',
      linkTitle: '更多文章',
      linkUrl: '/blog/',
    },
    contributors: {
      title: '认识一些我们的社区成员',
    },
  },
  sw: {
    hero: {
      title: 'Kuanza na eBPF',
      items: [
        {
          image: 'lab',
          title: 'Jaribu Warsha',
          description:
            'Kwa kuchukua mfano wa opensnoop kutoka ripoti ya Liz Rice, warsha hii inakufundisha jinsi ya kutumia chombo cha eBPF, kuona jinsi kinavyopakia vipengee vyake, na hata kuongeza ufuatiliaji wako mwenyewe kwenye nambari chanzo ya eBPF.',
          cardColorClassName: 'bg-secondary-blue-1-light border-secondary-blue-1',
          dashedBorderClassName: 'border-secondary-blue-2',
          linkUrl: 'https://ebpf.io/labs/',
          linkTarget: '_blank',
        },
        {
          image: 'book',
          title: 'Soma Vitabu',
          description:
            'Soma vitabu vya "What is eBPF?" na "Learning eBPF" kutoka O’Reilly vilivyoandikwa na Liz Rice au "BPF Performance Tools" kutoka Brendan Gregg ili kuanza. Katika vitabu hivyo, utajifunza ni nini eBPF na kwa nini ni yenye nguvu, na uwezo wake.',
          cardColorClassName: 'bg-secondary-green-1-light border-secondary-green-1',
          dashedBorderClassName: 'border-secondary-green-2',
          linkUrl: '#books',
          linkTarget: '_self',
        },
        {
          image: 'video',
          title: 'Tazama Video',
          description:
            'Zama katika historia ya eBPF na mazungumzo haya kutoka kwa John Fastabend. Kuanzia "siku za mwanzo" za mwaka 2014, inajadili miradi kuu, makampuni, na wadau walioathiri mandhari ya mtandao wa Linux wakati huo na jinsi walivyowezesha uumbaji wa eBPF.',
          cardColorClassName: 'bg-secondary-red-1-light border-secondary-red-1',
          dashedBorderClassName: 'border-secondary-red-2',
          linkUrl: 'https://www.youtube.com/watch?v=sYxUOKi3Q00',
          linkTarget: '_blank',
        },
      ],
    },
    documentation: {
      title: 'Soma Nyaraka ili Kujifunza Zaidi Kuhusu eBPF',
      items: [
        {
          image: 'wikipedia',
          title: 'Wikipedia',
          description: 'Makala ya Wikipedia kuhusu eBPF',
          linkUrl: 'https://en.wikipedia.org/wiki/EBPF',
        },
        {
          image: 'stackoverflow',
          title: 'eBPF Stackoverflow',
          description: 'Uliza maswali na soma majibu',
          linkUrl: 'https://stackoverflow.com/questions/tagged/ebpf+or+bpf+or+xdp-bpf',
        },
        {
          image: 'reddit',
          title: 'Jumuiya ya eBPF kwenye Reddit',
          description: 'Jadili sehemu ya kernel ya eBPF',
          linkUrl: 'https://www.reddit.com/r/eBPF/',
        },
        {
          image: 'cilium',
          title: 'Mwongozo wa Marejeo wa BPF & XDP',
          description: 'Jifunze muundo wa BPF na uandishi wa programu',
          linkUrl: 'https://cilium.readthedocs.io/en/stable/bpf/',
        },
        {
          image: 'kernel',
          title: 'Nyaraka za BPF',
          description: 'Nyaraka za BPF katika Kernel ya Linux',
          linkUrl: 'https://www.kernel.org/doc/html/latest/bpf/index.html',
        },
        {
          image: 'gitKernel',
          title: 'BPF Design Q&A',
          description: 'Maswali Yanayoulizwa Sana Kuhusu eBPF yanayohusiana na Kernel',
          linkUrl:
            'https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/bpf/bpf_design_QA.rst',
        },
      ],
    },
    subscriptionForm: {
      title: 'Jisajili',
      afterTitle: 'kwa Habari za eCHO News Mara Moja kwa Wiki',
      description: 'Kuwa na habari za hivi karibuni kutoka jamii za eBPF na Cilium',
      placeholder: 'Anwani ya barua pepe...',
      buttonTitle: 'Jisajili',
    },
    books: {
      title: 'Chimbua Vitabu Kuhusu eBPF Kutoka kwa Wataalamu wa Tasnia',
      linkTitle: 'Jifunze zaidi',
    },
    tutorials: {
      title:
        'Jifunze zaidi kuhusu teknolojia ya eBPF kupitia mafunzo kutoka kwa wataalamu wa tasnia',
      linkTitle: 'More tutorials',
      items: [
        {
          title: 'Mafunzo ya kufuatilia eBPF',
          description:
            'Jifunze jinsi ya kutumia eBPF kwa ufuatiliaji kutoka kwa zana za bcc hadi kuendeleza na bpftrace na bcc.',
          linkUrl: 'http://www.brendangregg.com/blog/2019-01-01/learn-ebpf-tracing.html',
        },
        {
          title: 'Mafunzo ya XDP',
          description:
            'Jifunze hatua za msingi zinazohitajika kuandika programu za XDP kutoka kwa ni nini hadi kuambatanisha programu nyingi kwenye kiolesura kimoja.',
          linkUrl: 'https://github.com/xdp-project/xdp-tutorial',
        },
        {
          title: 'Mbadala wa Kompila',
          description:
            'Msaada wa BPF wa kuendesha compiler kwa ushirikiano kwenye kivinjari chako na kuchunguza tukio la assembly.',
          linkUrl: 'https://godbolt.org/',
        },
      ],
    },
    events: {
      title: 'Hudhuria matukio ya eBPF ili kujifunza kutoka kwa wataalamu wa tasnia',
      linkTitle: 'Matukio zaidi',
      linkUrl: '/sw/events/',
    },
    videoGallery: {
      title: 'Video za Utangulizi kwa eBPF',
      items: videoItems,
    },
    blog: {
      title: 'Jifunze zaidi kuhusu eBPF katika makala kutoka kwa jamii',
      linkTitle: 'Makala zaidi',
      linkUrl: '/blog/',
    },
    contributors: {
      title: 'Meet some of our community members',
    },
  },
  'tw-cn': {
    hero: {
      title: '開始了解 eBPF',
      items: [
        {
          image: 'lab',
          title: '動手實驗',
          description:
            '借用 Liz Rice 報告中的 opensnoop 範例，本實驗將教您如何使用 eBPF 工具，觀察其元件載入過程，以及將您自己的追蹤用例添加到 eBPF 原始碼中。',
          cardColorClassName: 'bg-secondary-blue-1-light border-secondary-blue-1',
          dashedBorderClassName: 'border-secondary-blue-2',
          linkUrl: 'https://ebpf.io/labs/',
          linkTarget: '_blank',
        },
        {
          image: 'book',
          title: '閱讀書籍',
          description:
            '閱讀 Liz Rice 所著的O’Reilly書籍《What is eBPF?》和《Learning eBPF》或者Brendan Gregg 所著的《BPF Performance Tools》來入門了解。 透過這些書，您將了解什麼是 eBPF、它為何如此強大，以及它提供的功能。',
          cardColorClassName: 'bg-secondary-green-1-light border-secondary-green-1',
          dashedBorderClassName: 'border-secondary-green-2',
          linkUrl: '#books',
          linkTarget: '_self',
        },
        {
          image: 'video',
          title: '觀看影片',
          description:
            '跟隨 John Fastabend 的演講深入了解 eBPF 的歷史。 從 2014 年的“早期”開始，它介紹了當時影響Linux 網路領域的主要專案、公司和參與者，以及它們如何促成 eBPF 的創建。',
          cardColorClassName: 'bg-secondary-red-1-light border-secondary-red-1',
          dashedBorderClassName: 'border-secondary-red-2',
          linkUrl: 'https://www.youtube.com/watch?v=sYxUOKi3Q00',
          linkTarget: '_blank',
        },
      ],
    },
    documentation: {
      title: '閱讀以下文件，了解更多有關 eBPF 的內容',
      items: [
        {
          image: 'wikipedia',
          title: '維基百科',
          description: '維基百科中關於 eBPF 的文章',
          linkUrl: 'https://en.wikipedia.org/wiki/EBPF',
        },
        {
          image: 'stackoverflow',
          title: 'eBPF Stackoverflow',
          description: '提出問題，閱讀回答',
          linkUrl: 'https://stackoverflow.com/questions/tagged/ebpf+or+bpf+or+xdp-bpf',
        },
        {
          image: 'reddit',
          title: 'eBPF 在 Reddit 的社群',
          description: '討論 eBPF 核心子系統',
          linkUrl: 'https://www.reddit.com/r/eBPF/',
        },
        {
          image: 'cilium',
          title: 'BPF 和 XDP 參考指南',
          description: '學習 BPF 的內部原理與編程',
          linkUrl: 'https://cilium.readthedocs.io/en/stable/bpf/',
        },
        {
          image: 'kernel',
          title: 'BPF 文件',
          description: 'Linux 核心文件中 BPF 的部分',
          linkUrl: 'https://www.kernel.org/doc/html/latest/bpf/index.html',
        },
        {
          image: 'gitKernel',
          title: 'BPF 設計答疑',
          description: 'eBPF 核心相關問題的 FAQ',
          linkUrl:
            'https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/bpf/bpf_design_QA.rst',
        },
      ],
    },
    subscriptionForm: {
      title: '訂閱',
      afterTitle: '訂閱雙周刊 eCHO 新聞',
      description: '了解 eBPF 和 Cilium 的最新新聞和資訊',
      placeholder: '電子郵件地址...',
      buttonTitle: '訂閱',
    },
    books: {
      title: '從行業專家撰寫的書裡探索 eBPF',
      linkTitle: '了解更多',
    },
    tutorials: {
      title: '從行業專家的教程裡深入了解 eBPF 技術',
      linkTitle: '更多教程',
      items: [
        {
          title: 'eBPF 追蹤教程',
          description:
            '學習如何使用 eBPF 進行跟踪，從運行 bcc 工具到使用 bpftrace 和 bcc 進行開發。',
          linkUrl: 'http://www.brendangregg.com/blog/2019-01-01/learn-ebpf-tracing.html',
        },
        {
          title: 'XDP 教程',
          description:
            '學習編寫 XDP 程式所需的基本步驟，從了解XDP的概念到如何將多個程式附加到一個介面',
          linkUrl: 'https://github.com/xdp-project/xdp-tutorial',
        },
        {
          title: '編譯器探索器',
          description: '支援在 Web 瀏覽器中以互動方式運行的BPF編譯器並探組合語言程式碼',
          linkUrl: 'https://godbolt.org/',
        },
      ],
    },
    events: {
      title: '參加 eBPF 活動，向行業專家學習',
      linkTitle: '更多活動',
      linkUrl: '/tw-cn/events',
    },
    videoGallery: {
      title: 'eBPF 入門影片',
      items: videoItems,
    },
    blog: {
      title: '透過社群文章更多的了解eBPF',
      linkTitle: '更多文章',
      linkUrl: '/blog/',
    },
    contributors: {
      title: '認識一些我們的社群成員',
    },
  },
};

export default data;
