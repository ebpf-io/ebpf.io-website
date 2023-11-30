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
};

export default data;
