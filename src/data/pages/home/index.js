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
      blackButtonUrl: '/applications',
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
};

export default data;
