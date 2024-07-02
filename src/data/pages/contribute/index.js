const data = {
  pageUrls: {
    en: '/contribute/',
    'fr-fr': '/fr-fr/contribute/',
    pt: '/pt/contribute/',
    'pt-br': '/pt-br/contribute/',
    'it-it': '/it-it/contribute/',
    es: '/es/contribute/',
    'zh-cn': '/zh-cn/contribute/',
    sw: '/sw/contribute/',
    'tw-cn': '/tw-cn/contribute/',
  },
  en: {
    hero: {
      title: 'How to Contribute to eBPF',
      description:
        'eBPF consists of many communities including the eBPF runtime in the Linux kernel, various development SDKs and libraries, a series of large projects using eBPF, and a wide set of smaller projects and tools. There are therefore many ways to contribute to the eBPF community and get involved. The following list of ideas can serve as a starting point on how you can get involved and contribute to the community.',
      card: {
        title: 'Contribute to the eBPF runtime in the Linux kernel',
        description:
          'The Linux kernel community is maintaining separate Git trees for the eBPF subsystem to manage all developer contributions. The trees are maintained by:',
        secondDescription:
          'Working on the eBPF runtime can be incredibly rewarding as it builds the foundation for software being written that runs on millions of systems and devices. Work includes a wide range of topics from adding support to additional hooks, adding new program types, improvements to the eBPF verifier, adding JIT support for additional CPU architectures, extending the set of BPF helpers, adding new test cases to BPF’s test infrastructure, or improvements to bpftool and libbpf.',
        authors: [
          {
            name: 'Alexei Starovoitov',
            company: 'Facebook',
          },
          {
            name: 'Daniel Borkmann',
            company: 'Cilium/Isovalent',
          },
        ],
        links: [
          {
            text: 'Git trees',
            to: 'https://git.kernel.org/?q=BPF+Group',
          },
          {
            text: 'Linux kernel eBPF runtime',
            to: '/infrastructure/#linux-kernel',
          },
        ],
      },
    },
    howToContribute: {
      items: [
        {
          icon: 'file',
          title: 'Contribute to an eBPF project',
          description:
            '<p>The list of eBPF-based projects is long and growing. It will be simple to find a project that sparks interest. Check out the eBPF landscape to see an overview of eBPF-based projects.</p><p>Many of the listed eBPF-based projects maintain a list of good-first-issue-labeled tasks which are scoped to not require extensive project specific knowledge and provide a great opportunity to get hands-on quickly.</p>',
          links: [
            {
              text: 'eBPF landscape',
              to: '/applications',
            },
          ],
        },
        {
          icon: 'gear',
          title: 'Contribute to the eBPF development toolchains',
          description:
            '<p>Even though the Linux kernel provides minimal libraries and APIs to use eBPF directly, the majority of projects leverage an eBPF development toolchain to simplify use of eBPF and share common code among other projects.</p><p>Check out eBPF development toolchains for a frequently updated list of projects in this space. You will find information on how to get involved on each project website directly.</p>',
          links: [
            {
              text: 'eBPF development toolchains',
              to: '/what-is-ebpf/#development-toolchains',
            },
          ],
        },
        {
          icon: 'pen',
          title: 'Contribute to ebpf.io',
          description:
            '<p>Do you have a writing talent? Are you good with diagrams? The content of the ebpf.io website is licensed under a Creative Commons Attribution 4.0 International License. If you want to get involved, visit the GitHub repository. Make sure to also join the #ebpf-website Slack channel to get in touch with the team working on the documentation. Share what you have learned by improving the documentation or write additional tutorials.</p>',
          links: [
            {
              text: 'License',
              to: 'https://creativecommons.org/licenses/by/4.0/',
              target: '_blank',
            },
            {
              text: 'GitHub repository',
              to: 'https://github.com/ebpf-io/ebpf.io-website',
              target: '_blank',
            },
            {
              text: 'Slack',
              to: 'https://ebpf.io/slack',
            },
          ],
        },
      ],
    },
  },
  'fr-fr': {
    hero: {
      title: 'Comment contribuer à eBPF',
      description:
        'eBPF rassemble de nombreuses communautés, notamment l’environnement d’exécution eBPF dans le noyau Linux, divers SDK et bibliothèques de développement, de grands projets utilisant eBPF ainsi qu’un large éventail de projets et d’outils plus petits. Il existe donc de nombreuses façons de contribuer et de s’impliquer auprès de la communauté eBPF. La liste d’idées qui suit peut vous servir de point de départ.',
      card: {
        title: 'Contribuer au runtime eBPF dans le noyau Linux',
        description:
          'La communauté du noyau Linux maintient des arbres Git distincts pour le sous-système eBPF afin de gérer toutes les contributions des développeurs. Les arbres sont entretenus par :',
        secondDescription:
          'Travailler sur l’environnement d’exécution eBPF peut être extrêmement gratifiant car il s’agit de contribuer à un logiciel qui s’exécute sur des millions de systèmes et d’appareils. Le travail comprend un large éventail de sujets couvrant l’ajout de la prise en charge de points d’attache supplémentaires, l’ajout de nouveaux types de programmes, des améliorations au vérificateur eBPF, l’ajout de la prise en charge JIT pour des architectures CPU supplémentaires, l’extension de l’ensemble des fonctions noyau mises à disposition des programmes BPF, l’ajout de nouveaux cas de test à l’infrastructure de test de BPF, ou des améliorations de bpftool et libbpf.',
        authors: [
          {
            name: 'Alexeï Starovoitov',
            company: 'Facebook',
          },
          {
            name: 'Daniel Borkmann',
            company: 'Cilium/Isovalent',
          },
        ],
        links: [
          {
            text: 'Git trees',
            to: 'https://git.kernel.org/?q=BPF+Group',
          },
          {
            text: 'Linux kernel eBPF runtime',
            to: '/fr-fr/infrastructure/#linux-kernel',
          },
        ],
      },
    },
    howToContribute: {
      items: [
        {
          icon: 'file',
          title: 'Contribuer à un projet eBPF',
          description:
            '<p>Les projets basés sur eBPF sont nombreux, et la liste ne cesse de s’allonger. Il n’y a que l’embarras du choix ! Consultez le paysage eBPF pour un aperçu des différents projets.</p><p>De nombreux projets basés sur eBPF maintiennent une liste de tâches dénotées en tant que « good first issues », des portes d’entrée ne nécessitant pas de connaissances approfondies spécifiques au projet et qui offrent une excellente occasion de se familiariser rapidement avec le sujet.</p>',
          links: [
            {
              text: 'eBPF landscape',
              to: '/fr-fr/applications',
            },
          ],
        },
        {
          icon: 'gear',
          title: 'Contribuer aux chaînes d’outils de développement eBPF',
          description:
            '<p>Même si le noyau Linux fournit un minimum de bibliothèques et d’API pour utiliser directement eBPF, la majorité des projets exploitent une chaîne d’outils de développement plus haut niveau pour simplifier l’utilisation d’eBPF et mettre en commun l’implémentation de certaines fonctionnalités avec d’autres projets.</p><p>Consultez la liste des chaînes d’outils de développement eBPF, fréquemment mise à jour. Si vous souhaitez vous impliquer sur l’un d’entre eux, vous trouverez des informations sur le site web associé.</p>',
          links: [
            {
              text: 'eBPF development toolchains',
              to: '/fr-fr/what-is-ebpf/#chaînes-doutils-de-développement',
            },
          ],
        },
        {
          icon: 'pen',
          title: 'Contribuer à ebpf.io',
          description:
            '<p>Avez-vous un talent d’écriture? Êtes-vous doué(e) avec les diagrammes? Le contenu du site web ebpf.io est sous licence Creative Commons Attribution 4.0 International. Si vous souhaitez vous impliquer, visitez le dépôt GitHub. Assurez-vous également de rejoindre le canal Slack #ebpf-website pour entrer en contact avec l’équipe travaillant sur la documentation. Partagez ce que vous avez appris en améliorant la documentation ou écrivez des tutoriels supplémentaires.</p>',
          links: [
            {
              text: 'License',
              to: 'https://creativecommons.org/licenses/by/4.0/',
              target: '_blank',
            },
            {
              text: 'GitHub repository',
              to: 'https://github.com/ebpf-io/ebpf.io-website',
              target: '_blank',
            },
            {
              text: 'Slack',
              to: 'https://ebpf.io/slack',
            },
          ],
        },
      ],
    },
  },
  pt: {
    hero: {
      title: 'Como contribuir para o eBPF',
      description:
        'O eBPF consiste em muitas comunidades, incluindo o tempo de execução do eBPF no kernel Linux, vários SDKs e bibliotecas de desenvolvimento, uma série de grandes projetos usando eBPF e um amplo conjunto de projetos e ferramentas menores. Existem, portanto, muitas maneiras de contribuir para a comunidade eBPF e se envolver. A lista de ideias a seguir pode servir como um ponto de partida sobre como você pode se envolver e contribuir para a comunidade.',
      card: {
        title: 'Contribua para o tempo de execução do eBPF no kernel Linux',
        description:
          'A comunidade do kernel Linux mantém branch’s separadas no Git para gerenciar todas as contribuições dos desenvolvedores. Elas são mantidas por:',
        secondDescription:
          "Trabalhar ajudando na evolução 'runtime' do eBPF pode ser incrivelmente recompensador, pois ele constitui a base para o desenvolvimento de software que é executado em milhões de sistemas e dispositivos. O trabalho inclui uma ampla gama de tópicos, como adicionar suporte a ganchos adicionais, adicionar novos tipos de programas, realizar melhorias no verificador eBPF, adicionar suporte JIT para arquiteturas de CPU adicionais, estender o conjunto de ajudantes BPF, adicionar novos casos de teste à infraestrutura de teste BPF ou melhorias no bpftool e libbpf.",
        authors: [
          {
            name: 'Alexei Starovoitov',
            company: 'Facebook',
          },
          {
            name: 'Daniel Borkmann',
            company: 'Cílio/Isovalente',
          },
        ],
        links: [
          {
            text: 'Git trees',
            to: 'https://git.kernel.org/?q=BPF+Group',
          },
          {
            text: 'Linux kernel eBPF runtime',
            to: '/pt/infrastructure/#linux-kernel',
          },
        ],
      },
    },
    howToContribute: {
      items: [
        {
          icon: 'file',
          title: 'Contribuir para um projeto eBPF',
          description:
            '<p>A lista de projetos baseados no eBPF é longa e crescente. Será simples encontrar um projeto que desperte interesse. Consulte o panorama do eBPF para ver uma visão geral dos projetos baseados no eBPF.</p><p>Muitos dos projetos baseados no eBPF listados mantêm uma lista de tarefas rotuladas como boas primeiras, que têm como escopo não exigir um conhecimento extensivo específico do projeto e oferecem uma ótima oportunidade para colocar a mão na massa rapidamente.</p>',
          links: [
            {
              text: 'Paisagem eBPF',
              to: '/pt/applications',
            },
          ],
        },
        {
          icon: 'gear',
          title: 'Contribuir para as cadeias de ferramentas de desenvolvimento do eBPF',
          description:
            '<p>Embora o kernel Linux forneça bibliotecas e APIs mínimas para usar o eBPF diretamente, a maioria dos projetos aproveita uma cadeia de ferramentas de desenvolvimento do eBPF para simplificar o uso do eBPF e compartilhar código comum entre outros projetos.</p><p>Confira as cadeias de ferramentas de desenvolvimento do eBPF para obter uma lista atualizada com frequência de projetos neste espaço. Encontrará informações sobre como participar diretamente no sítio Web de cada projeto.</p>',
          links: [
            {
              text: 'CONJUNTOS DE FERRAMENTAS DE DESENVOLVIMENTO EBPF',
              to: '/pt/what-is-ebpf/#ferramentas-de-desenvolvimento',
            },
          ],
        },
        {
          icon: 'pen',
          title: 'Contribua para ebpf.io',
          description:
            '<p>Você tem talento para escrever? Você é bom com diagramas? O conteúdo do site ebpf.io está licenciado sob uma Licença Creative Commons Attribution 4.0 International. Se você quiser participar, visite o repositório GitHub. Certifique-se também de entrar no canal Slack do #ebpf-site para entrar em contato com a equipe que trabalha na documentação. Partilhe o que aprendeu melhorando a documentação ou escreva tutoriais adicionais.</p>',
          links: [
            {
              text: 'License',
              to: 'https://creativecommons.org/licenses/by/4.0/',
              target: '_blank',
            },
            {
              text: 'GitHub repository',
              to: 'https://github.com/ebpf-io/ebpf.io-website',
              target: '_blank',
            },
            {
              text: 'Slack',
              to: 'https://ebpf.io/slack',
            },
          ],
        },
      ],
    },
  },
  'pt-br': {
    hero: {
      title: 'Como Contribuir para o eBPF',
      description:
        "O eBPF consiste em várias comunidades, incluindo o 'Runtime' eBPF no kernel do Linux, também contempla vários SDK’s e bibliotecas de desenvolvimento, muitos projetos importantes que utilizam o eBPF e alguns outros projetos menores e ferramentas também fazem parte desta gama. Portanto, há muitas maneiras para que você possa interagir, e contribuir para a comunidade eBPF. A lista de ideias abaixo pode servir como um ponto de partida sobre como você pode se envolver e contribuir para a comunidade.",
      card: {
        title: "Contribuidores do 'runtime' do eBPF no kernel Linux",
        description:
          'A comunidade do kernel Linux mantém branch’s separadas no Git para gerenciar todas as contribuições dos desenvolvedores. Elas são mantidas por:',
        secondDescription:
          "Trabalhar ajudando na evolução 'runtime' do eBPF pode ser incrivelmente recompensador, pois ele constitui a base para o desenvolvimento de software que é executado em milhões de sistemas e dispositivos. O trabalho inclui uma ampla gama de tópicos, como adicionar suporte a ganchos adicionais, adicionar novos tipos de programas, realizar melhorias no verificador eBPF, adicionar suporte JIT para arquiteturas de CPU adicionais, estender o conjunto de ajudantes BPF, adicionar novos casos de teste à infraestrutura de teste BPF ou melhorias no bpftool e libbpf.",
        authors: [
          {
            name: 'Alexei Starovoitov',
            company: 'Facebook',
          },
          {
            name: 'Daniel Borkmann',
            company: 'Cilium/Isovalent',
          },
        ],
        links: [
          {
            text: 'Git trees',
            to: 'https://git.kernel.org/?q=BPF+Group',
          },
          {
            text: 'Linux kernel eBPF runtime',
            to: '/pt-br/infrastructure/#linux-kernel',
          },
        ],
      },
    },
    howToContribute: {
      items: [
        {
          icon: 'file',
          title: 'Contribuir para um projeto eBPF',
          description:
            '<p>A lista de projetos baseados em eBPF é extensa e está em constante crescimento. Será fácil encontrar um projeto que desperte seu interesse. Consulte o landscape eBPF para obter uma visão geral dos projetos baseados em eBPF.</p><p>Muitos dos projetos baseados em eBPF listados mantêm uma lista de tarefas marcadas como "good-first-issue", que não exigem um conhecimento extenso do projeto e oferecem uma ótima oportunidade para que você possa começar rapidamente.</p>',
          links: [
            {
              text: 'Panorama eBPF',
              to: '/pt-br/applications',
            },
          ],
        },
        {
          icon: 'gear',
          title: 'Contribuir para as ferramentas de desenvolvimento eBPF',
          description:
            '<p>Mesmo que o kernel Linux forneça bibliotecas e APIs mínimas para usar o eBPF diretamente, a maioria dos projetos aproveita uma ferramenta de desenvolvimento eBPF para simplificar o uso do eBPF e compartilhar código comum entre outros projetos.</p><p>Consulte as ferramentas de desenvolvimento eBPF para obter uma lista frequentemente atualizada de projetos nesta área. Você encontrará informações sobre como se envolver em cada site do projeto diretamente.</p>',
          links: [
            {
              text: 'CONJUNTOS DE FERRAMENTAS DE DESENVOLVIMENTO EBPF',
              to: '/pt-br/what-is-ebpf/#ferramentas-de-desenvolvimento',
            },
          ],
        },
        {
          icon: 'pen',
          title: 'Contribuir para o ebpf.io',
          description:
            '<p>Você tem talento para escrever? Sabe criar diagramas? O conteúdo do site ebpf.io é licenciado sob uma Licença Internacional Creative Commons Atribuição 4.0. Se você deseja se envolver, visite nosso repositório no GitHub. Certifique-se de também se juntar ao nosso canal no Slack #ebpf-website para entrar em contato com a equipe que trabalha na documentação. Compartilhe o que você aprendeu melhorando a documentação ou escrevendo tutoriais adicionais.</p>',
          links: [
            {
              text: 'License',
              to: 'https://creativecommons.org/licenses/by/4.0/',
              target: '_blank',
            },
            {
              text: 'GitHub repository',
              to: 'https://github.com/ebpf-io/ebpf.io-website',
              target: '_blank',
            },
            {
              text: 'Slack',
              to: 'https://ebpf.io/slack',
            },
          ],
        },
      ],
    },
  },
  'it-it': {
    hero: {
      title: 'Come contribuire a eBPF',
      description:
        'eBPF è costituito da molte community tra cui il runtime eBPF nel kernel Linux, vari SDK e librerie di sviluppo, una serie di progetti di grandi dimensioni che utilizzano eBPF e un’ampia serie di progetti e strumenti più piccoli. Esistono quindi molti modi per contribuire alla comunità eBPF ed essere coinvolti. Il seguente elenco di idee può servire come punto di partenza su come puoi essere coinvolto e contribuire alla comunità.',
      card: {
        title: 'Contribuisci al runtime eBPF nel kernel Linux',
        description:
          'La community del kernel Linux mantiene alberature Git separate per il sottosistema eBPF per gestire tutti i contributi degli sviluppatori. Queste alberature sono mantenute da:',
        secondDescription:
          'Lavorare sul runtime eBPF può essere incredibilmente gratificante poiché crea le basi per la scrittura di software che può essere eseguito su milioni di sistemi e dispositivi. Il lavoro include un’ampia gamma di argomenti, dall’aggiunta del supporto a hook aggiuntivi, l’aggiunta di nuovi tipi di programmi, miglioramenti al verificatore eBPF, l’aggiunta del supporto JIT per architetture CPU aggiuntive, l’estensione del set di helper BPF, l’aggiunta di nuovi casi di test all’infrastruttura di test di BPF o miglioramenti a bpftool e libbpf.',
        authors: [
          {
            name: 'Alexei Starovoitov',
            company: 'Facebook',
          },
          {
            name: 'Daniel Borkmann',
            company: 'Cilium/Isovalent',
          },
        ],
        links: [
          {
            text: 'Alberature Git',
            to: 'https://git.kernel.org/?q=BPF+Group',
          },
          {
            text: 'Linux kernel eBPF runtime',
            to: '/it-it/infrastructure/#linux-kernel',
          },
        ],
      },
    },
    howToContribute: {
      items: [
        {
          icon: 'file',
          title: 'Contribuisci a un progetto eBPF',
          description:
            '<p>La lista dei progetti basati su eBPF è lunga e in crescita costante. Sarà semplice individuare un progetto che susciti interesse. Dai un’occhiata per avere una panoramica dei progetti basati su eBPF.</p><p>Molti dei progetti basati su eBPF elencati mantengono un elenco di attività etichettate come "good-first-issue" che hanno lo scopo di non richiedere una conoscenza approfondita specifica del progetto e di fornire una grande opportunità per cominciare rapidamente a metterci le mani.</p>',
          links: [
            {
              text: 'Panorama eBPF',
              to: '/it-it/applications',
            },
          ],
        },
        {
          icon: 'gear',
          title: 'Contribuisci alla toolchain di sviluppo eBPF',
          description:
            '<p>Nonostante il kernel di Linux fornisca librerie e API minimali per usare eBPF direttamente, la maggioranza dei progetti sfrutta una toolchain di sviluppo eBPF per semplificare l’uso di eBPF e condividere codice comune con altri progetti.</p><p>Consulta la toolchain di sviluppo eBPF per una lista di progetti che viene frequentemente aggiornata in questo spazio. Troverai informazioni su come partecipare direttamente sul sito web di ciascun progetto.</p>',
          links: [
            {
              text: 'Toolchain di sviluppo eBPF',
              to: '/it-it/what-is-ebpf/#toolchain-di-sviluppo',
            },
          ],
        },
        {
          icon: 'pen',
          title: 'Contribuire a ebpf.io',
          description:
            '<p>Ritieni di aver talento per la scrittura? Sai creare diagrammi? Il contenuto del sito ebpf.io è concesso in licenza con una licenza internazionale Creative Commons Attribution 4.0. Se vuoi essere coinvolto visita il repository GitHub. Assicurati di unirti anche al canale Slack del sito web #ebpf per entrare in contatto con il team che lavora sulla documentazione. Condividi ciò che hai imparato migliorando la documentazione o scrivendo tutorial aggiuntivi.</p>',
          links: [
            {
              text: 'Licenza',
              to: 'https://creativecommons.org/licenses/by/4.0/',
              target: '_blank',
            },
            {
              text: 'Repository GitHub',
              to: 'https://github.com/ebpf-io/ebpf.io-website',
              target: '_blank',
            },
            {
              text: 'Slack',
              to: 'https://ebpf.io/slack',
            },
          ],
        },
      ],
    },
  },
  es: {
    hero: {
      title: 'Cómo contribuir a eBPF',
      description:
        'eBPF está formado por muchas comunidades, incluido el tiempo de ejecución de eBPF en el kernel de Linux, varios SDK y bibliotecas de desarrollo, una serie de grandes proyectos que utilizan eBPF y un amplio conjunto de proyectos y herramientas más pequeños. Por tanto, hay muchas formas de contribuir a la comunidad eBPF y participar en ella. La siguiente lista de ideas puede servir como punto de partida sobre cómo participar y contribuir a la comunidad.',
      card: {
        title: 'Contribuir al tiempo de ejecución de eBPF en el núcleo de Linux',
        description:
          'La comunidad del núcleo Linux mantiene repositorios Git separados para el subsistema eBPF con el fin de gestionar todas las contribuciones de los desarrolladores. Los repositorios son mantenidos por:',
        secondDescription:
          'Trabajar en el tiempo de ejecución de eBPF puede ser increíblemente gratificante, ya que sienta las bases para escribir software que se ejecuta en millones de sistemas y dispositivos. El trabajo incluye una amplia gama de temas, desde añadir soporte a hooks adicionales, añadir nuevos tipos de programas, mejoras en el verificador de eBPF, añadir soporte JIT para arquitecturas de CPU adicionales, ampliar el conjunto de ayudantes de BPF, añadir nuevos casos de prueba a la infraestructura de pruebas de BPF o mejoras en bpftool y libbpf.',
        authors: [
          {
            name: 'Alexei Starovoitov',
            company: 'Facebook',
          },
          {
            name: 'Daniel Borkmann',
            company: 'Cilium/Isovalent',
          },
        ],
        links: [
          {
            text: 'Git trees',
            to: 'https://git.kernel.org/?q=BPF+Group',
          },
          {
            text: 'Linux kernel eBPF runtime',
            to: '/es/infrastructure/#linux-kernel',
          },
        ],
      },
    },
    howToContribute: {
      items: [
        {
          icon: 'file',
          title: 'Contribuya a un proyecto eBPF',
          description:
            '<p>La lista de proyectos basados en eBPF es larga y sigue creciendo.Le resultará fácil encontrar un proyecto que despierte su interés.Consulte el panorama de eBPF para ver un resumen de los proyectos basados en eBPF.</p><p>Muchos de los proyectos basados en eBPF que figuran en la lista mantienen una lista de tareas con una buena etiqueta de primer tema, cuyo alcance no requiere amplios conocimientos específicos del proyecto y ofrece una gran oportunidad para ponerse manos a la obra rápidamente.</p>',
          links: [
            {
              text: 'PANORAMA EBPF',
              to: '/applications',
            },
          ],
        },
        {
          icon: 'gear',
          title: 'Contribuir a las cadenas de herramientas de desarrollo de eBPF',
          description:
            '<p>Aunque el núcleo de Linux proporciona bibliotecas y API mínimas para utilizar eBPF directamente, la mayoría de los proyectos aprovechan una cadena de herramientas de desarrollo de eBPF para simplificar el uso de eBPF y compartir código común entre otros proyectos.</p><p>Consulte eBPF development toolchains para obtener una lista actualizada de proyectos en este espacio. Encontrará información sobre cómo participar directamente en el sitio web de cada proyecto.</p>',
          links: [
            {
              text: 'CADENAS DE HERRAMIENTAS DE DESARROLLO EBPF',
              to: '/what-is-ebpf/#development-toolchains',
            },
          ],
        },
        {
          icon: 'pen',
          title: 'Contribuya a ebpf.io',
          description:
            '<p>¿Tiene talento para escribir? ¿Se le dan bien los diagramas? El contenido del sitio web ebpf.io está sujeto a una licencia internacional Creative Commons Attribution 4.0. Si quieres participar, visita el repositorio de GitHub. Asegúrate también de unirte al canal de Slack #ebpf-website para ponerte en contacto con el equipo que trabaja en la documentación. Comparte lo que has aprendido mejorando la documentación o escribiendo tutoriales adicionales.</p>',
          links: [
            {
              text: 'LICENCIA',
              to: 'https://creativecommons.org/licenses/by/4.0/',
              target: '_blank',
            },
            {
              text: 'REPOSITORIO GITHUB',
              to: 'https://github.com/ebpf-io/ebpf.io-website',
              target: '_blank',
            },
            {
              text: 'Slack',
              to: 'https://ebpf.io/slack',
            },
          ],
        },
      ],
    },
  },
  'zh-cn': {
    hero: {
      title: '如何为 eBPF 做出贡献',
      description:
        'eBPF 由许多社区组成，其中包括 Linux 内核中的 eBPF 运行时、各种开发 sdk 和库、一系列使用 eBPF 的大小型项目以及工具。因此，有许多途径可以为 eBPF 社区做出贡献并参与其中。下面列表里的想法可以启发你如何开始参与并为社区做出贡献。',
      card: {
        title: '为 Linux 内核中的 eBPF 运行时做出贡献',
        description:
          'Linux 内核社区正在为 eBPF 子系统维护单独的 Git trees 来管理对应所有开发人员的贡献。这些 trees 是由：',
        secondDescription:
          '为 eBPF 运行时作出贡献工作可以获得令人难以置信的回报，因为它是正在编写的在数百万个系统和设备上运行的软件的基石。工作包括广泛的主题，比如可以添加对额外钩子的支持、添加新的程序类型、对 eBPF 验证器的改进、为额外的 CPU 架构添加 JIT 支持、扩展 BPF 助手集、向 BPF 的测试基础设施添加新的测试用例，或者是对 bpftool 和 libbpf 的改进等等。',
        authors: [
          {
            name: 'Alexei Starovoitov',
            company: 'Facebook',
          },
          {
            name: 'Daniel Borkmann',
            company: 'Cilium/Isovalent',
          },
        ],
        links: [
          {
            text: 'Git trees',
            to: 'https://git.kernel.org/?q=BPF+Group',
          },
          {
            text: 'Linux 内核 eBPF 运行时',
            to: '/zh-cn/infrastructure/#linux-kernel',
          },
        ],
      },
    },
    howToContribute: {
      items: [
        {
          icon: 'file',
          title: '为 eBPF 的应用项目做出贡献',
          description:
            '<p> ebpf-based 的项目很多并且还在不断增长。想要找到一个能激发你兴趣的项目很简单，请查阅 eBPF 应用项目概览。</p><p>列出的许多 ebpf-based 的项目都维护了一个标记为 "good-first-issue-labeled" 的任务列表，这些任务的范围不需要广泛的项目特定知识，并提供了快速上手的绝佳机会。</p>',
          links: [
            {
              text: 'eBPF 应用项目概览',
              to: '/zh-cn/applications',
            },
          ],
        },
        {
          icon: 'gear',
          title: '为 eBPF 开发工具链做出贡献',
          description:
            '<p>尽管 Linux 内核提供了一些库和 api 来直接使用 eBPF，但大多数项目会利用 eBPF 开发工具链来简化对它的使用，并在其他项目之间共享公共代码。</p><p> 在这里可以查看一些经常更新的 eBPF 开发工具链项目列表。你可以在每个项目网站上直接找到如何参与的信息。</p>',
          links: [
            {
              text: 'eBPF 开发工具链',
              to: '/zh-cn/what-is-ebpf/#development-toolchains',
            },
          ],
        },
        {
          icon: 'pen',
          title: '为 ebpf.io 做出贡献',
          description:
            '<p>你有良好的写作技巧吗? 你擅长绘画图表吗? ebpf.io 网站下的内容都受到国际公共知识共享许可协议 4.0(Creative Commons Attribution 4.0 International License) 的约束，如果你想要参与进来，请先访问我们的 GitHub 项目进行了解。也请记得加入我们的 #ebpf-website Slack channel 和团队保持联系共同协作修订文档，以及通过改进文档或编写额外的教程来分享您学到的东西。</p>',
          links: [
            {
              text: 'License',
              to: 'https://creativecommons.org/licenses/by/4.0/',
              target: '_blank',
            },
            {
              text: 'GitHub repository',
              to: 'https://github.com/ebpf-io/ebpf.io-website',
              target: '_blank',
            },
            {
              text: 'Slack',
              to: 'https://ebpf.io/slack',
            },
          ],
        },
      ],
    },
  },
  sw: {
    hero: {
      title: 'Jinsi ya kuchangia eBPF',
      description:
        'eBPF inajumuisha jumuiya nyingi ikiwa ni pamoja na wakati wa utekelezaji wa eBPF katika kinu cha Linux kernel, SDK mbalimbali za maendeleo na maktaba, mfululizo wa miradi mikubwa inayotumia eBPF, na seti pana ya miradi na zana ndogondogo. Kwa hiyo kuna njia nyingi za kuchangia jumuiya ya eBPF na kujihusisha. Orodha ifuatayo ya mawazo inaweza kutumika kama kianzio cha jinsi unavyoweza kujihusisha na kuchangia kwa jamii.',
      card: {
        title: 'Changia kwa wakati wa utekelezaji wa eBPF rutime kinu cha Linux kernel',
        description:
          'Jumuiya ya Linux kernel inadumisha miti tofauti ya Git kwa mfumo mdogo wa eBPF ili kudhibiti michango yote ya wasanidi programu. Miti hiyo inatunzwa na:',
        secondDescription:
          'Kufanya kazi kwenye wakati wa utekelezaji wa eBPF kunaweza kufaidika sana kwani kunajenga msingi wa programu kuandikwa unaotumia mamilioni ya mifumo na vifaa. Kazi inajumuisha mada mbalimbali kuanzia kuongeza usaidizi hadi ndoano za ziada, kuongeza aina mpya za programu, uboreshaji wa kithibitishaji cha eBPF, kuongeza usaidizi wa JIT kwa usanifu wa ziada wa CPU, kupanua seti ya wasaidizi wa BPF, kuongeza kesi mpya za majaribio kwenye miundombinu ya majaribio ya BPF, au uboreshaji wa bpftool na libbpf.',
        authors: [
          {
            name: 'Alexei Starovoitov',
            company: 'Facebook',
          },
          {
            name: 'Daniel Borkmann',
            company: 'Cilium/Isovalent',
          },
        ],
        links: [
          {
            text: 'Git trees',
            to: 'https://git.kernel.org/?q=BPF+Group',
          },
          {
            text: 'Linux kernel eBPF runtime',
            to: '/infrastructure/#linux-kernel',
          },
        ],
      },
    },
    howToContribute: {
      items: [
        {
          icon: 'file',
          title: 'Changia kwa mradi wa eBPF',
          description:
            '<p>Orodha ya miradi inayotegemea eBPF ni ndefu na inakua. Itakuwa rahisi kupata mradi unaovutia. Angalia mandhari ya eBPF ili kuona muhtasari wa miradi inayotegemea eBPF.</p><p>Miradi mingi iliyoorodheshwa kulingana na eBPF hudumisha orodha ya majukumu yenye lebo ya suala-kwanza ambayo yamepangwa ili kutohitaji ujuzi mahususi wa mradi na kutoa fursa nzuri ya kufanyiwa kazi haraka.</p>',
          links: [
            {
              text: 'eBPF Mandhari',
              to: '/sw/applications',
            },
          ],
        },
        {
          icon: 'gear',
          title: 'Changia kwa minyororo ya ukuzaji ya eBPF',
          description:
            '<p>Ingawa kinu cha Linux hutoa maktaba na API chache za kutumia eBPF moja kwa moja, miradi mingi hutumia zana za ukuzaji za eBPF ili kurahisisha matumizi ya eBPF na kushiriki msimbo wa pamoja kati ya miradi mingine.</p><p>Angalia misururu ya zana za ukuzaji za eBPF kwa orodha inayosasishwa mara kwa mara ya miradi katika nafasi hii. Utapata habari juu ya jinsi ya kushiriki kwenye kila tovuti ya mradi moja kwa moja.</p>',
          links: [
            {
              text: 'vyombo vya maendeleo ya eBPF',
              to: '/sw/what-is-ebpf/#development-toolchains',
            },
          ],
        },
        {
          icon: 'pen',
          title: 'Changia kwa ebpf.io',
          description:
            '<p>Je, una kipaji cha uandishi? Je, wewe ni mzuri na michoro? Maudhui ya tovuti ya ebpf.io yameidhinishwa chini ya Leseni ya Kimataifa ya Creative Commons Attribution 4.0. Ikiwa unataka kujihusisha, tembelea hazina ya GitHub. Hakikisha pia umejiunga na kituo cha #ebpf-tovuti ya Slack ili kuwasiliana na timu inayoshughulikia uhifadhi. Shiriki kile umejifunza kwa kuboresha uhifadhi au kuandika mafunzo ya ziada.</p>',
          links: [
            {
              text: 'Leseni',
              to: 'https://creativecommons.org/licenses/by/4.0/',
              target: '_blank',
            },
            {
              text: 'GitHub repository',
              to: 'https://github.com/ebpf-io/ebpf.io-website',
              target: '_blank',
            },
            {
              text: 'Slack',
              to: 'https://ebpf.io/slack',
            },
          ],
        },
      ],
    },
  },
  'tw-cn': {
    hero: {
      title: '如何為 eBPF 做出貢獻',
      description:
        'eBPF 由許多社群組成，包括 Linux 核心中的 eBPF 運行時、各種開發 SDK 和函式庫、一系列使用 eBPF 的大型專案以及廣泛的小型專案和工具。 因此，有許多方法可以為 eBPF 社群做出貢獻並參與其中。 以下想法清單可以作為您如何參與社區並為社區做出貢獻的起點。',
      card: {
        title: '為 Linux 核心中的 eBPF 運行時做出貢獻',
        description:
          'Linux 核心社群正在為 eBPF 子系統維護單獨的 Git tree，以管理對應所有開發人員的貢獻。 這些Git tree由以下人員維護：',
        secondDescription:
          '為 eBPF 運行時做出貢獻可以獲得令人難以置信的回報，因為它為編寫在數百萬個系統和設備上運行的軟體奠定了基礎。 工作包括廣泛的主題，比如添加對額外勾點的支援、添加新的程式類型、改進eBPF 驗證器、添加對附加CPU 架構的JIT 支援、擴展BPF 助手集、向BPF 的測試基礎設施添加新的測試案例，或對 bpftool 和 libbpf 的改進等等。',
        authors: [
          {
            name: 'Alexei Starovoitov',
            company: 'Facebook',
          },
          {
            name: 'Daniel Borkmann',
            company: 'Cilium/Isovalent',
          },
        ],
        links: [
          {
            text: 'Git trees',
            to: 'https://git.kernel.org/?q=BPF+Group',
          },
          {
            text: 'Linux 核心 eBPF 運行時',
            to: '/tw-cn/infrastructure/#linux-kernel',
          },
        ],
      },
    },
    howToContribute: {
      items: [
        {
          icon: 'file',
          title: '為 eBPF 應用項目做出貢獻',
          description:
            '<p> eBPF-based 的項目清單很長，而且還在增加。 想找到一個能夠激發您興趣的項目很容易, 請查看 eBPF 應用項目概覽。</p><p>列出的許多 eBPF-based 的項目都維護了一個標記為"giid-first-issue-labeled" 的任務列表，這些任務的範圍不需要廣泛的項目特定知識, 並提供了快速上手實踐的絕佳機會。</p>',
          links: [
            {
              text: 'eBPF 應用項目概覽',
              to: '/tw-cn/applications',
            },
          ],
        },
        {
          icon: 'gear',
          title: '為 eBPF 開發工具鏈做出貢獻',
          description:
            '<p>儘管Linux 核心提供一些函式庫和API 來直接使用eBPF，但大多數項目都利用eBPF 開發工具鏈來簡化eBPF 的使用, 並在其他項目之間共享公共程式碼。</p><p>在這裡可以查看到一些經常更新的 eBPF 開發工具鏈的項目清單。 您可以在每個項目網站上直接找到有關如何參與的資訊。</p>',
          links: [
            {
              text: 'eBPF 開發工具鏈',
              to: '/tw-cn/what-is-ebpf/#development-toolchains',
            },
          ],
        },
        {
          icon: 'pen',
          title: '為 eBPF 做出貢獻',
          description:
            '<p>你有良好的寫作技巧嗎？ 你擅長繪畫圖表嗎？ ebpf.io 網站的內容根據 Creative Commons Attribution 4.0 International License 授權。 如果您想參與其中，請造訪我們的 GitHub Respository 進行了解。 也請記得加入我們 #ebpf-website Slack Channel，以便與處理文件的團隊取得聯繫, 以及透過改進文件或編寫其他教程來分享您學到的知識。</p>',
          links: [
            {
              text: 'License',
              to: 'https://creativecommons.org/licenses/by/4.0/',
              target: '_blank',
            },
            {
              text: 'GitHub repository',
              to: 'https://github.com/ebpf-io/ebpf.io-website',
              target: '_blank',
            },
            {
              text: 'Slack',
              to: 'https://ebpf.io/slack',
            },
          ],
        },
      ],
    },
  },
};

export default data;
