const data = {
  pageUrls: {
    en: '/contribute/',
    'fr-fr': '/fr-fr/contribute/',
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
            to: '/infrastructure/#linux-kernel',
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
              to: '/applications',
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
              to: '/fr-fr/what-is-ebpf/#development-toolchains',
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
};

export default data;
