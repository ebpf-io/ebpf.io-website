const data = {
  en: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'Are these projects under the eBPF Foundation?',
        answer: `<ul>
					<li>This page lists a number of open source projects that use eBPF as the underlying core technology. These projects are not all under the <a href="https://www.ebpf.foundation/">eBPF Foundation</a> but are listed here as a survey of the eBPF project landscape today.</li>
				</ul>`,
      },
      {
        question: 'Add your project',
        answer: `<ol>
					<li>Make sure that the project is meeting the requirements to be listed. See below.</li>
					<li>Open a <a href="https://github.com/ebpf-io/ebpf.io" target="_blank" rel="noopener noreferrer">pull request</a> and provide the required information. Use one of the already listed projects as a template. The ordering of applications is based on the number of Github stars (high to low), updated on a quarterly basis.</li>
					<li>The pull request will be reviewed by the community and merged by one of the maintainers. If you have any questions, feel free to ask on <a href="https://ebpf.io/slack">Slack</a>.</li>
				</ol>`,
      },
      {
        question: 'Are you maintaining a listed project?',
        answer: `<ul>
					<li>If you are maintaining one of the listed projects and would like to adjust the content. Get in touch on <a href="https://ebpf.io/slack">Slack</a> or open a pull request directly.</li>
				</ul>`,
      },
      {
        question: 'Requirements for a project to be listed',
        answer: `
					<p>
						Projects can be listed on this page as "Major" or "Emerging". The requirements for being
						listed as "Emerging" are:
					</p>
					<ul>
						<li>
							The project must be open source. All source code must be licensed under an open source
							license. Any documentation must be licensed under an open license.
						</li>
						<li>
							The project must be using eBPF as its underlying core technology (in other words, a project
							would lose its purpose if the eBPF parts are removed) or help accelerate the adoption of
							eBPF in production.
						</li>
						<li>The project must be actively maintained.</li>
						<li>
							The project must be open to collaboration and have a governance model following open source
							best-practices.
						</li>
					</ul>
					<p>
						In order to be listed as a "Major" project, a project must meet all of the requirements above,
						plus:
					</p>
					<ul>
						<li>The project must have more than 50 contributors.</li>
						<li>
							The project must be used in production-like environments with a significant amount of users.
							Since this information may not be easily discoverable from a link to the project, such
							information should be included in the pull request description.
						</li>
					</ul>`,
      },
    ],
  },
  'fr-fr': {
    title: 'Questions fréquemment posées',
    items: [
      {
        question: 'Ces projets relèvent-ils de la Fondation eBPF ?',
        answer: `<ul>
					<li>Cette page répertorie un certain nombre de projets open source qui utilisent eBPF comme technologie de base sous-jacente. Ces projets ne relèvent pas tous de la <a href="https://www.ebpf.foundation/">Fondation eBPF</a> mais sont répertoriés ici en tant qu’étude du paysage actuel des projets eBPF.</li>
				</ul>`,
      },
      {
        question: 'Ajoutez votre projet',
        answer: `<ol>
					<li>Assurez-vous que le projet répond aux exigences pour être répertorié. Voir ci-dessous.</li>
					<li>Ouvrez une <a href="https://github.com/ebpf-io/ebpf.io" target="_blank" rel="noopener noreferrer">pull request</a> et fournissez les informations requises. Utilisez l'un des projets déjà répertoriés comme modèle. L'ordre des candidatures est basé sur le nombre d'étoiles Github (de haut en bas), mis à jour tous les trimestres.</li>
					<li>La pull request sera examinée par la communauté et fusionnée par l'un des responsables. Si vous avez des questions, n'hésitez pas à les poser sur <a href="https://ebpf.io/slack">Slack</a>.</li>
				</ol>`,
      },
      {
        question: 'Vous maintenez un projet répertorié ?',
        answer: `<ul>
					<li>Si vous gérez l'un des projets répertoriés et souhaitez ajuster le contenu. Contactez-nous sur <a href="https://ebpf.io/slack">Slack</a> ou ouvrez directement une pull request.</li>
				</ul>`,
      },
      {
        question: 'Conditions requises pour qu’un projet soit répertorié',
        answer: `
					<p>
						Les projets peuvent être répertoriés sur cette page comme « majeurs » ou « émergents ». Pour être répertorié comme « émergent », les conditions sont les suivantes :
					</p>
					<ul>
						<li>
							Le projet doit être open source. Tout le code source doit être sous licence open source. Toute documentation doit être sous licence open source.
						</li>
						<li>
							Le projet doit utiliser eBPF comme technologie de base sous-jacente (en d'autres termes, un projet perdrait son objectif si les parties de l'eBPF étaient supprimées) ou contribuer à accélérer l'adoption de eBPF en production.
						</li>
						<li>Le projet doit être activement maintenu.</li>
						<li>
							Le projet doit être ouvert à la collaboration et disposer d'un modèle de gouvernance suivant les meilleures pratiques open source.
						</li>
					</ul>
					<p>
						Pour être répertorié comme projet « majeur », un projet doit répondre à toutes les exigences ci-dessus, plus :
					</p>
					<ul>
						<li>Le projet doit compter plus de 50 contributeurs.</li>
						<li>
							Le projet doit être utilisé dans des environnements de production avec un nombre important d'utilisateurs. Étant donné que ces informations peuvent ne pas être facilement détectables à partir d'un lien vers le projet, ces informations doivent être incluses dans la description de la pull request.
						</li>
					</ul>`,
      },
    ],
  },
  pt: {
    title: 'Perguntas frequentes',
    items: [
      {
        question: 'Esses projetos são da Fundação eBPF?',
        answer: `<ul>
					<li>Esta página lista vários projetos de código aberto que usam eBPF como tecnologia central subjacente. Esses projetos não estão todos sob a <a href="https://www.ebpf.foundation/">Fundação eBPF</a>, mas estão listados aqui como uma pesquisa do panorama dos projetos eBPF hoje.</li>
				</ul>`,
      },
      {
        question: 'Adicione seu projeto',
        answer: `<ol>
					<li>Certifique-se de que o projeto atenda aos requisitos a serem listados. Veja abaixo.</li>
					<li>Abra uma <a href="https://github.com/ebpf-io/ebpf.io" target="_blank" rel="noopener noreferrer">solicitação pull</a> e forneça as informações necessárias. Use um dos projetos já listados como modelo. A ordenação dos aplicativos é baseada no número de estrelas do Github (maior para menor), atualizado trimestralmente.</li>
					<li>A solicitação pull será revisada pela comunidade e mesclada por um dos mantenedores. Se você tiver alguma dúvida, fique à vontade para perguntar no <a href="https://ebpf.io/slack">Slack</a>.</li>
				</ol>`,
      },
      {
        question: 'Você está mantendo um projeto listado?',
        answer: `<ul>
					<li>Se você mantém um dos projetos listados e gostaria de ajustar o conteúdo. Entre em contacto no <a href="https://ebpf.io/slack">Slack</a> ou abra uma solicitação pull diretamente.</li>
				</ul>`,
      },
      {
        question: 'Requisitos para um projeto ser listado',
        answer: `
					<p>
						Os projetos podem ser listados nesta página como "Principais" ou "Emergentes". Os requisitos para ser listado como "Emergente" são:
					</p>
					<ul>
						<li>
							O projeto deve ser de código aberto. Todo o código-fonte deve ser licenciado sob uma licença de código aberto. Qualquer documentação deve ser licenciada sob uma licença aberta.
						</li>
						<li>
							O projeto deve usar o eBPF como tecnologia central subjacente (em outras palavras, um projeto perderia o seu propósito se as partes do eBPF fossem removidas) ou ajudar a acelerar a adoção do eBPF na produção.
						</li>
						<li>O projeto deve ser mantido ativamente.</li>
						<li>
							O projeto deve estar aberto à colaboração e ter um modelo de governança seguindo as melhores práticas de código aberto.
						</li>
					</ul>
					<p>
						Para ser listado como um projeto “Grande”, um projeto deve atender a todos os requisitos acima, mais:
					</p>
					<ul>
						<li>O projeto deve ter mais de 50 colaboradores.</li>
						<li>
							O projeto deve ser utilizado em ambientes de produção com uma quantidade significativa de usuários. Como essas informações podem não ser facilmente descobertas a partir de um link para o projeto, tais informações devem ser incluídas na descrição da solicitação pull.
						</li>
					</ul>`,
      },
    ],
  },
  'pt-br': {
    title: 'Perguntas Frequentes',
    items: [
      {
        question: 'Esses projetos fazem parte da Fundação eBPF?',
        answer: `<ul>
					<li>Esta página lista vários projetos de open source que usam o eBPF como tecnologia central. Esses projetos não fazem todos parte da <a href="https://www.ebpf.foundation/">Fundação eBPF</a>, mas estão listados aqui como uma pesquisa da lanscape atual do projeto eBPF.</li>
				</ul>`,
      },
      {
        question: 'Adicione o seu projeto',
        answer: `<ol>
					<li>Certifique-se de que o projeto atende aos requisitos para ser listado. Veja abaixo.</li>
					<li>Abra um <a href="https://github.com/ebpf-io/ebpf.io" target="_blank" rel="noopener noreferrer">pull request</a> e forneça as informações necessárias. Use um dos projetos já listados como modelo. A ordenação das aplicações é baseada no número de estrelas no Github (de alta para baixa) e é atualizada trimestralmente.</li>
					<li>O pull request será revisado pela comunidade e mesclado por um dos mantenedores. Se tiver alguma dúvida, sinta-se à vontade para perguntar no <a href="https://ebpf.io/slack">Slack</a>.</li>
				</ol>`,
      },
      {
        question: 'Você é mantenedor de um projeto listado?',
        answer: `<ul>
					<li>Se você for mantenedor de um dos projetos listados e desejar ajustar o conteúdo. Entre em contato pelo <a href="https://ebpf.io/slack">Slack</a> ou abra um pull request diretamente.</li>
				</ul>`,
      },
      {
        question: 'Requisitos para um projeto ser listado',
        answer: `
					<p>
						Os projetos podem ser listados nesta página como "Principais" ou "Emergentes". Os requisitos para serem listados como "Emergentes" são:
					</p>
					<ul>
						<li>
							O projeto deve ser de open source. Todo o código-fonte deve estar licenciado sob uma licença de open source. Qualquer documentação deve ser licenciada sob uma licença aberta.
						</li>
						<li>
							O projeto deve usar o eBPF como tecnologia central (ou seja, o projeto perderia sua finalidade se as partes do eBPF fossem removidas) ou ajudar a acelerar a adoção do eBPF em produção.
						</li>
						<li>O projeto deve ser ativamente mantido.</li>
						<li>
							O projeto deve estar aberto à colaboração e ter um modelo de governança seguindo as melhores práticas do open source.
						</li>
					</ul>
					<p>
						Para ser listado como um projeto "Principal", um projeto deve atender a todos os requisitos acima, além de:
					</p>
					<ul>
						<li>O projeto deve ter mais de 50 colaboradores.</li>
						<li>
							O projeto deve ser usado em ambientes semelhantes à produção, com um número significativo de usuários. Como essa informação pode não ser facilmente descoberta a partir de um link para o projeto, essa informação deve ser incluída na descrição do pull request.
						</li>
					</ul>`,
      },
    ],
  },
  'it-it': {
    title: 'Domande Frequenti',
    items: [
      {
        question: 'Questi progetti sono sostenuti dalla Fondazione eBPF?',
        answer: `<ul>
					<li>Questa pagina elenca alcuni progetti open source che impiegano eBPF come tecnologia fondante. Non tutti questi progetti sono sostenuti dalla <a href="https://www.ebpf.foundation/">Fondazione eBPF</a>, ma l’elenco rappresenta una fotografia del panorama odierno dei progetti eBPF.</li>
				</ul>`,
      },
      {
        question: 'Aggiungi il tuo progetto',
        answer: `<ol>
					<li>Assicurati che il tuo progetto rispetti i requisiti richiesti. Vedi qui sotto.</li>
					<li>Apri una <a href="https://github.com/ebpf-io/ebpf.io" target="_blank" rel="noopener noreferrer">pull request</a> e fornisci le informazioni richieste. Utilizza uno dei progetti già presenti come modello. L’ordine di presentazione delle applicazioni è in base ai voti (le stelle ottenute) su Github (discendente), aggiornata ogni trimestre..</li>
					<li>La richiesta di pull verrà valutata dalla community e ne verrà fatto il merge da uno dei manutentori. Chiedi pure su <a href="https://ebpf.io/slack">Slack</a> se avessi domande da porre.</li>
				</ol>`,
      },
      {
        question: 'Sei il manutentore di uno dei progetti elencati?',
        answer: `<ul>
					<li>Se sei il manutentore di uno dei progetti elencati e vuoi modificarne il contenuto. Entra in contatto su <a href="https://ebpf.io/slack">Slack</a> o apri direttamente una richiesta di pull.</li>
				</ul>`,
      },
      {
        question: 'Requisiti da rispettare affinché un progetto possa essere incluso',
        answer: `
					<p>
						I progetti possono essere aggiunti a questa pagina nella categoria “Major” (Principale) oppure “Emerging” (Emergente). I requisiti per poter essere annoverati come “Emerging” sono:
					</p>
					<ul>
						<li>
							Il progetto deve essere open source. Tutti i codici sorgente devono essere rilasciati con una licenza open source. Tutta la documentazione deve essere rilasciata con una licenza open.
						</li>
						<li>
							Il progetto deve necessariamente impiegare eBPF come sua tecnologia fondante (in altre parole, un progetto perderebbe il suo scopo qualora le parti eBPF venissero rimosse), oppure favorire l’adozione di eBPF in produzione.
						</li>
						<li>Il progetto deve essere attivamente mantenuto.</li>
						<li>
							Il progetto deve essere aperto alla collaborazione e avere un modello di governance aderente alle best-practice dell’open source.
						</li>
					</ul>
					<p>
						Per poter essere definibile “Major”, un progetto deve soddisfare tutti i requisiti di cui sopra, più:
					</p>
					<ul>
						<li>Il progetto deve avere più di 50 contributori.</li>
						<li>
							Il progetto deve essere impiegato in ambienti realistici di produzione che abbiano un significativo numero di utenti. Dal momento che queste informazioni non sono facilmente ricavabili da un collegamento al progetto, dovrebbero essere incluse nella descrizione della pull request.
						</li>
					</ul>`,
      },
    ],
  },
  es: {
    title: 'Preguntas frecuentes',
    items: [
      {
        question: '¿Estos proyectos pertenecen a la Fundación eBPF?',
        answer: `<ul>
					<li>Esta página enumera una serie de proyectos de código abierto que utilizan eBPF como tecnología central subyacente. No todos estos proyectos pertenecen a la <a href="https://www.ebpf.foundation/">Fundación eBPF</a>, pero se enumeran aquí como un estudio del panorama actual de los proyectos eBPF.</li>
				</ul>`,
      },
      {
        question: 'Añade tu proyecto',
        answer: `<ol>
					<li>Asegúrate de que el proyecto cumpla con los requisitos para ser incluido en la lista. Ve abajo.</li>
					<li>Abre un <a href="https://github.com/ebpf-io/ebpf.io" target="_blank" rel="noopener noreferrer">pull request</a> y proporciona la información requerida. Utiliza uno de los proyectos ya enumerados como plantilla. El orden de las aplicaciones se basa en el número de estrellas de Github (de mayor a menor), actualizado trimestralmente.</li>
					<li>La comunidad revisará el pull request y uno de los mantenedores le hará merge. Si tienes alguna pregunta, no dudes en preguntarla en <a href="https://ebpf.io/slack">Slack</a>.</li>
				</ol>`,
      },
      {
        question: '¿Estás manteniendo un proyecto listado?',
        answer: `<ul>
					<li>Si mantienes uno de los proyectos enumerados y deseas ajustar el contenido, pónte en contacto en <a href="https://ebpf.io/slack">Slack</a> o abre un pull request directamente.</li>
				</ul>`,
      },
      {
        question: 'Requisitos para que un proyecto sea catalogado',
        answer: `
					<p>
						Los proyectos se pueden enumerar en esta página como "Principales" o "Emergentes". Los requisitos para figurar como “Emergente” son:
					</p>
					<ul>
						<li>
							El proyecto debe ser de código abierto. Todo el código fuente debe tener una licencia de código abierto. Cualquier documentación debe tener una licencia abierta.
						</li>
						<li>
							El proyecto debe utilizar eBPF como tecnología central subyacente (en otras palabras, un proyecto perdería su propósito si se eliminan las partes de eBPF) o ayudar a acelerar la adopción de eBPF en producción.
						</li>
						<li>El proyecto debe mantenerse activamente.</li>
						<li>
							El proyecto debe estar abierto a la colaboración y tener un modelo de gobernanza que siga las mejores prácticas de código abierto.
						</li>
					</ul>
					<p>
						Para figurar como proyecto "principal", un proyecto debe cumplir con todos los requisitos anteriores, además de:
					</p>
					<ul>
						<li>El proyecto debe tener más de 50 contribuyentes.</li>
						<li>
							El proyecto debe utilizarse en entornos similares a los de producción con una cantidad significativa de usuarios. Dado que es posible que esta información no se pueda descubrir fácilmente desde un enlace al proyecto, dicha información debe incluirse en la descripción del pull request.
						</li>
					</ul>`,
      },
    ],
  },
  'zh-hans': {
    title: '常见问题',
    items: [
      {
        question: '这些项目是否属于 eBPF 基金会 ?',
        answer: `<ul>
					<li>本页列出了许多使用 eBPF 作为底层核心技术的开源项目。这些项目并不都在 <a href="https://www.ebpf.foundation/">eBPF 基金会</a> 之下，但在此列出，以展示当前 eBPF 项目的概况。.</li>
				</ul>`,
      },
      {
        question: '添加你的项目',
        answer: `<ol>
					<li>确保项目符合列出的要求。见下文。</li>
					<li>提交 <a href="https://github.com/ebpf-io/ebpf.io" target="_blank" rel="noopener noreferrer">Pull Request</a> 并提供所需的信息。使用一个已经列出的项目作为模板。应用程序的排序基于 Github 星标的数量(从高到低)，每季度更新一次。</li>
					<li>Pull Request 将由社区审核，并由一个维护者合并。如果你有任何问题，请在 <a href="https://ebpf.io/slack">Slack</a> 上提问。</li>
				</ol>`,
      },
      {
        question: '您是否在维护一个已列出的项目 ?',
        answer: `<ul>
					<li>如果您正在维护列出的项目之一，并希望调整内容。在 <a href="https://ebpf.io/slack">Slack</a> 上与我们取得联系或直接提交一个 Pull Request。</li>
				</ul>`,
      },
      {
        question: '被列出项目的要求',
        answer: `
					<p>
						项目可以在此页面上以“主要”或“新兴”的形式列出。被列为“新兴”的要求是：
					</p>
					<ul>
						<li>
							项目必须是开源的。所有源代码必须在开放源代码许可下进行许可。任何文档都必须在开放许可协议下授权。
						</li>
						<li>
							项目必须使用 eBPF 作为其基础核心技术（换句话说, 如果去掉eBPF部分, 项目将失去其目的）,或者帮助加速在生产中采用 eBPF。
						</li>
						<li>项目必须积极维护。</li>
						<li>
							项目必须对协作开放，并具有遵循开源最佳实践的治理模型。
						</li>
					</ul>
					<p>
						要被列为“主要”项目, 该项目必须满足上述所有要求, 并且：
					</p>
					<ul>
						<li>项目必须有超过 50 个贡献者。</li>
						<li>
							该项目必须在生产级别的环境中有大量使用用户。由于这些信息可能不容易从项目链接中发现，因此这些信息应该包含在 Pull Request 描述中。
						</li>
					</ul>`,
      },
    ],
  },
  sw: {
    title: 'Maswali Yanayoulizwa Sana',
    items: [
      {
        question: 'Je, miradi hii iko chini ya Msingi wa eBPF?',
        answer: `<ul>
					<li>Ukurasa huu unataja idadi ya miradi ya chanzo wazi inayotumia eBPF kama teknolojia ya msingi. Miradi hii yote haijarudi chini ya <a href="https://www.ebpf.foundation/">Msingi wa eBPF</a> lakini inatajwa hapa kama utafiti wa taswira ya mradi wa eBPF leo.</li>
				</ul>`,
      },
      {
        question: 'Ongeza mradi wako',
        answer: `<ol>
					<li>Hakikisha kuwa mradi unakidhi mahitaji ya kuingizwa. Tazama hapo chini.</li>
					<li>Fungua <a href="https://github.com/ebpf-io/ebpf.io" target="_blank" rel="noopener noreferrer">ombi la uchukuzi</a> na toa habari zinazohitajika. Tumia mradi ulioorodheshwa tayari kama kiolezo. Mpangilio wa maombi unategemea idadi ya Nyota za Github (kutoka juu hadi chini), zinazorekebishwa kila robo.</li>
					<li>Ombi la uchukuzi litapitiwa na jamii na kuunganishwa na mmoja wa wahifadhi. Ikiwa una maswali yoyote, jisikie huru kuuliza kwenye <a href="https://ebpf.io/slack">Slack</a>.</li>
				</ol>`,
      },
      {
        question: 'Je, unasimamia mradi ulioorodheshwa?',
        answer: `<ul>
					<li>Ikiwa unasimamia moja ya miradi iliyoorodheshwa na ungependa kurekebisha maudhui. Wasiliana kwenye <a href="https://ebpf.io/slack">Slack</a> au fungua ombi la kuchukuliwa moja kwa moja.</li>
				</ul>`,
      },
      {
        question: 'Mahitaji kwa mradi kuingizwa',
        answer: `
					<p>
						Miradi inaweza kuorodheshwa kwenye ukurasa huu kama "Kubwa" au "Inayojitokeza". Mahitaji ya kuorodheshwa kama "Inayojitokeza" ni kama ifuatavyo:
					</p>
					<ul>
						<li>
							Mradi lazima uwe wa chanzo wazi. Kila msimbo wa chanzo lazima uwe na leseni ya chanzo wazi. Nyaraka yoyote lazima iwe na leseni ya wazi.
						</li>
						<li>
							Mradi lazima utumie eBPF kama teknolojia yake ya msingi (kwa maneno mengine, mradi ungepoteza kusudi lake ikiwa sehemu za eBPF ziondolewa) au kusaidia kuharakisha usambazaji wa eBPF katika uzalishaji.
						</li>
						<li>Mradi lazima uwe unahifadhiwa kwa shughuli.</li>
						<li>
							Mradi lazima uwe wazi kwa ushirikiano na uwe na mfano wa utawala unaozingatia mazoea bora ya chanzo wazi.
						</li>
					</ul>
					<p>
						Ili kuorodheshwa kama "Kubwa," mradi lazima ukidhi mahitaji yote hapo juu, pamoja na:
					</p>
					<ul>
						<li>Mradi lazima uwe na zaidi ya wachangiaji 50.</li>
						<li>
							Mradi lazima utumiwe katika mazingira yanayofanana na uzalishaji na idadi kubwa ya watumiaji. Tangu habari kama hiyo inaweza isiwe rahisi kupatikana kutoka kwa kiungo kwenye mradi, habari kama hiyo inapaswa kuwa sehemu ya maelezo ya ombi la uchukuzi.
						</li>
					</ul>`,
      },
    ],
  },
  'zh-hant': {
    title: '常見問題',
    items: [
      {
        question: '這些專案是否屬於 eBPF 基金會？',
        answer: `<ul>
							<li>本頁列出了一些使用 eBPF 作為底層核心技術的開源專案。這些專案並非全部屬於 <a href="https://www.ebpf.foundation/">eBPF 基金會</a>，但在此列出以展示當前 eBPF 專案概況。
						</ul>`,
      },
      {
        question: '添加你的專案',
        answer: `<ol>
							<li>確保專案符合列出的要求。見下文。</li>
							<li>提交 <a href="https://github.com/ebpf-io/ebpf.io" target="_blank" rel="noopener noreferrer">Pull Request</a> 並提供所需的資訊。使用一個已列出的專案作為範本。應用程式的排序基於 GitHub 星數（從高到低），每季更新一次。</li>
							<li>Pull Request 將由社群審核並由一位維護者合併。如果您有任何疑問，請隨時在 <a href="https://ebpf.io/slack">Slack</a> 上提問。</li>
						</ol>`,
      },
      {
        question: '您是否在維護一個已列出的專案？',
        answer: `<ul>
					<li>如果您正在維護列出的專案之一，並希望調整內容。在 <a href="https://ebpf.io/slack">Slack</a> 上取得聯繫或直接提交一個 Pull Request。</li>
				</ul>`,
      },
      {
        question: '被列出專案的要求',
        answer: `
					<p>
						專案可以在此頁面上以「主要」或「新興」的形式列出。被列為「新興」的要求是：
					</p>
					<ul>
						<li>
							該專案必須是開源的。所有原始碼必須根據開源許可證獲得許可。任何文件都必須在開放許可協議下授權。
						</li>
						<li>
							該專案必須使用 eBPF 作為其底層核心技術（換句話說，如果去掉 eBPF 部分，專案將失去其目的）或有助於加速在生產環境中採用 eBPF。
						</li>
						<li>
							該專案必須積極維護。
						</li>
						<li>
							該專案必須對協作開放，並具有遵循開源最佳實踐的治理模式。
						</li>
					<ul>
					<p>
						要被列為「主要」專案，該專案必須滿足上述所有要求，並且：
					</p>
					<ul>
						<li>該專案必須有超過 50 名貢獻者。</li>
						<li>
							該專案必須在生產級別環境中有大量使用者。由於此資訊可能不容易從專案連結中發現，因此此類資訊應包含在 Pull Request 描述中。
						</li>
					</ul>`,
      },
    ],
  },

  'ko-kr': {
    title: '자주 묻는 질문들',
    items: [
      {
        question: '이러한 프로젝트들은 eBPF Foundation 소속인가요?',
        answer: `<ul>
					<li>이 페이지는 eBPF를 코어 기술로 사용하는 오픈 소스 프로젝트를 나열하고 있습니다. 이러한 프로젝트들이 모두 <a href="https://www.ebpf.foundation/">eBPF 재단</a>에서 관리하는 프로젝트는 아니지만, eBPF 프로젝트 큰그림에 대한 조사의 일부로 나열되어있습니다.</li>
				</ul>`,
      },
      {
        question: '여러분의 프로젝트를 추가하세요',
        answer: `<ol>
					<li>해당 프로젝트가 후술되는 요구사항을 만족하는지에 대해 확인해주세요, 다음의 내용을 확인해주세요.</li>
					<li><a href="https://github.com/ebpf-io/ebpf.io" target="_blank" rel="noopener noreferrer">Pull request</a>를 열어주시고 필수 정보를 제공해주세요. 나열된 프로젝트를 예시로 삼아서 사용해주세요. 후술되는 애플리케이션의 순서는 GitHub의 스타 (높은순)으로 나열되어있으며, 이는 매 분기마다 업데이트됩니다.</li>
					<li>Pull request는 커뮤니티에서 검토를 진행하며, eBPF 프로젝트 관리자에 의해서 merge 될 것입니다. 만일 질문이 있으시다면, <a href="https://ebpf.io/slack">Slack</a>에 자유롭게 질문해주세요.</li>
				</ol>`,
      },
      {
        question: '나열된 프로젝트를 관리하고 계신가요?',
        answer: `<ul>
					<li>만일 나열된 프로젝트 중 하나를 관리하고 계시고, 내용을 수정하고 싶으시다면 <a href="https://ebpf.io/slack">Slack</a>을 통해 연락하시거나, pull request를 직접적으로 열어주세요..</li>
				</ul>`,
      },
      {
        question: '프로젝트가 목록에 등재되기 위한 요구사항들',
        answer: `
					<p>
						프로젝트들은 현 페이지에서 “Major” 또는 “Emerging” 상태로 등재될 수 있습니다. “Emerging”으로 등재되기 위해서는 다음의 요구사항을 만족해야합니다:
					</p>
					<ul>
						<li>
							해당 프로젝트는 오픈소스여야 합니다. 모든 오픈소스 코드는 오픈소스 라이센스에 의해 라이센싱 되어야합니다. 모든 공식 문서 또한 공개 라이센스에 의해 라이센싱 되어야합니다.
						</li>
						<li>
							해당 프로젝트는 반드시 eBPF를 해당 프로젝트의 근간이 되는 주요 기술로 사용해야하거나 (즉, 만일 eBPF가 사용되는 부분이 없어진다면, 해당 프로젝트의 목적이 없어집니다) eBPF를 프로덕션 환경에서 사용하는 것에
						</li>
						<li>도움을 주어야 합니다.</li>
						<li>
							해당 프로젝트는 반드시 협력을 할 수 있는 구조여야 하며 좋은 오픈소스 관행(best-practices)들을 따르는 관리 모델을 채택해야합니다.
						</li>
					</ul>
					<p>
						“Major” 프로젝트로 등재되기 위해서는, 해당 프로젝트는 상술된 모든 요구사항을 만족해야하며, 추가적으로 다음의 사항을 만족해야합니다:
					</p>
					<ul>
						<li>해당 프로젝트는 50명 이상의 기여자가 있어야 합니다.</li>
						<li>
							해당 프로젝트는 반드시 수많은 유저를 가진 프로덕션과 같은 환경에서 사용하고 있어야 합니다. 이러한 정보는 프로젝트의 링크만을 통해서 확인하기는 어려운 정보이기에, 해당 정보는 pull request 설명에 포함되어야합니다.
						</li>
					</ul>`,
      },
    ],
  },
};

export default data;
