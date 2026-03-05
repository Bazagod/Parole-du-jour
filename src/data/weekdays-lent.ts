import type { Reading } from "./readings";

interface ReadingSet {
  firstReading: Reading;
  psalm: Reading;
  gospel: Reading;
  secondReading?: Reading;
}

export const lentWeekdays: Record<string, ReadingSet> = {

  "ash-wed": {
    firstReading: {
      reference: "Jo\u00ebl 2, 12-18",
      text: `Maintenant \u2013 oracle du Seigneur \u2013 revenez \u00e0 moi de tout votre c\u0153ur, dans le je\u00fbne, les larmes et le deuil ! D\u00e9chirez vos c\u0153urs et non pas vos v\u00eatements, et revenez au Seigneur votre Dieu, car il est tendre et mis\u00e9ricordieux, lent \u00e0 la col\u00e8re et plein d\u2019amour, renoncer au ch\u00e2timent. Qui sait ? Il pourrait revenir, il pourrait renoncer au ch\u00e2timent, et laisser derri\u00e8re lui sa b\u00e9n\u00e9diction. Sonnez du cor dans Sion : prescrivez un je\u00fbne sacr\u00e9, publiez une assembl\u00e9e solennelle, r\u00e9unissez le peuple, tenez une assembl\u00e9e sainte, rassemblez les anciens, r\u00e9unissez petits enfants et nourrissons ! Que le jeune \u00e9poux sorte de sa chambre, que la jeune mariée quitte sa alcôve ! Entre le portail et l\u2019autel, les pr\u00eatres, serviteurs du Seigneur, iront pleurer et diront : \u00ab Pitié, Seigneur, pour ton peuple, n\u2019expose pas ceux qui t\u2019appartiennent \u00e0 l\u2019insulte et aux moqueries des pa\u00efens ! Faut-il qu\u2019on dise parmi les nations : O\u00f9 donc est leur Dieu ? \u00bb Et le Seigneur s\u2019est \u00e9mu en faveur de son pays, il a eu piti\u00e9 de son peuple.`,
    },
    psalm: {
      reference: "Psaume 50 (51)",
      text: `R/ Piti\u00e9, Seigneur, car nous avons p\u00e9ch\u00e9.

Piti\u00e9, mon Dieu, dans ton amour,
selon ta grande mis\u00e9ricorde, efface mon p\u00e9ch\u00e9.
Lave-moi tout entier de ma faute,
purifie-moi de mon offense.

Oui, je connais mon p\u00e9ch\u00e9,
ma faute est toujours devant moi.
Contre toi, et toi seul, j\u2019ai p\u00e9ch\u00e9,
ce qui est mal \u00e0 tes yeux, je l\u2019ai fait.

Cr\u00e9e en moi un c\u0153ur pur, \u00f4 mon Dieu,
renouvelle et raffermis au fond de moi mon esprit.
Ne me chasse pas loin de ta face,
ne me reprends pas ton esprit saint.

Rends-moi la joie d\u2019\u00eatre sauv\u00e9 ;
que l\u2019esprit g\u00e9n\u00e9reux me soutienne.
Seigneur, ouvre mes l\u00e8vres,
et ma bouche annoncera ta louange.`,
    },
    gospel: {
      reference: "Matthieu 6, 1-6.16-18",
      text: `En ce temps-l\u00e0, J\u00e9sus disait \u00e0 ses disciples : \u00ab Ce que vous faites pour devenir justes, \u00e9vitez de l\u2019accomplir devant les hommes pour vous faire remarquer. Sinon, il n\u2019y a pas de r\u00e9compense pour vous aupr\u00e8s de votre P\u00e8re qui est aux cieux.

Ainsi, quand tu fais l\u2019aum\u00f4ne, ne fais pas sonner la trompette devant toi, comme les hypocrites qui se donnent en spectacle dans les synagogues et dans les rues, pour obtenir la gloire qui vient des hommes. Amen, je vous le d\u00e9clare : ceux-l\u00e0 ont touch\u00e9 leur r\u00e9compense. Mais toi, quand tu fais l\u2019aum\u00f4ne, que ta main gauche ignore ce que fait ta main droite, afin que ton aum\u00f4ne reste dans le secret ; ton P\u00e8re qui voit dans le secret te le rendra.

Et quand vous priez, ne soyez pas comme les hypocrites : ils aiment \u00e0 se tenir debout dans les synagogues et aux carrefours pour bien se montrer aux hommes quand ils prient. Amen, je vous le d\u00e9clare : ceux-l\u00e0 ont touch\u00e9 leur r\u00e9compense. Mais toi, quand tu pries, retire-toi dans ta pi\u00e8ce la plus retir\u00e9e, ferme la porte, et prie ton P\u00e8re qui est pr\u00e9sent dans le secret ; ton P\u00e8re qui voit dans le secret te le rendra.

Et quand vous je\u00fbnez, ne prenez pas un air abattu, comme les hypocrites : ils prennent une mine d\u00e9faite pour bien montrer aux hommes qu\u2019ils je\u00fbnent. Amen, je vous le d\u00e9clare : ceux-l\u00e0 ont touch\u00e9 leur r\u00e9compense. Mais toi, quand tu je\u00fbnes, parfume-toi la t\u00eate et lave-toi le visage ; ainsi, ton je\u00fbne ne sera pas connu des hommes, mais seulement de ton P\u00e8re qui est pr\u00e9sent dans le secret ; ton P\u00e8re qui voit dans le secret te le rendra. \u00bb`,
    },
    secondReading: {
      reference: "2 Corinthiens 5, 20 \u2013 6, 2",
      text: `Fr\u00e8res, nous sommes les ambassadeurs du Christ, et par nous c\u2019est Dieu lui-m\u00eame qui lance un appel : nous le demandons au nom du Christ, laissez-vous r\u00e9concilier avec Dieu. Celui qui n\u2019a pas connu le p\u00e9ch\u00e9, Dieu l\u2019a pour nous identifi\u00e9 au p\u00e9ch\u00e9, afin qu\u2019en lui nous devenions justes de la justice m\u00eame de Dieu. En tant que coop\u00e9rateurs de Dieu, nous vous exhortons encore \u00e0 ne pas laisser sans effet la gr\u00e2ce re\u00e7ue de Dieu. Car il dit dans l\u2019\u00c9criture : Au moment favorable je t\u2019ai exauc\u00e9, au jour du salut je t\u2019ai secouru. Le voici maintenant le moment favorable, le voici maintenant le jour du salut.`,
    },
  },

  "ash-jeu": {
    firstReading: {
      reference: "Deut\u00e9ronome 30, 15-20",
      text: `Mo\u00efse disait au peuple : \u00ab Vois ! Je mets aujourd\u2019hui devant toi ou bien la vie et le bonheur, ou bien la mort et le malheur. Ce que je te commande aujourd\u2019hui, c\u2019est d\u2019aimer le Seigneur ton Dieu, de marcher dans ses chemins, de garder ses commandements, ses d\u00e9crets et ses ordonnances. Alors, tu vivras, tu te multiplieras ; le Seigneur ton Dieu te b\u00e9nira dans le pays dont tu vas prendre possession. Mais si tu d\u00e9tournes ton c\u0153ur, si tu n\u2019ob\u00e9is pas, si tu te laisses entra\u00eener \u00e0 te prosterner devant d\u2019autres dieux et \u00e0 les servir, je vous le d\u00e9clare aujourd\u2019hui : certainement vous p\u00e9rirez, vous ne prolongerez pas vos jours sur la terre dont vous allez prendre possession en passant le Jourdain. Je prends aujourd\u2019hui \u00e0 t\u00e9moin contre vous le ciel et la terre : je mets devant toi la vie ou la mort, la b\u00e9n\u00e9diction ou la mal\u00e9diction. Choisis donc la vie, pour que vous viviez, toi et ta descendance, en aimant le Seigneur ton Dieu, en \u00e9coutant sa voix, en vous attachant \u00e0 lui ; c\u2019est lui qui est ta vie, et il te donnera de longs jours pour habiter la terre que le Seigneur a jur\u00e9 de donner \u00e0 tes p\u00e8res, Abraham, Isaac et Jacob. \u00bb`,
    },
    psalm: {
      reference: "Psaume 1",
      text: `R/ Heureux est l\u2019homme qui met sa foi dans le Seigneur.

Heureux est l\u2019homme
qui n\u2019entre pas au conseil des m\u00e9chants,
qui ne suit pas le chemin des p\u00e9cheurs,
ne si\u00e8ge pas avec ceux qui ricanent,
mais se pla\u00eet dans la loi du Seigneur
et murmure sa loi jour et nuit !

Il est comme un arbre
plant\u00e9 pr\u00e8s d\u2019un ruisseau,
qui donne du fruit en son temps,
et jamais son feuillage ne meurt ;
tout ce qu\u2019il entreprend r\u00e9ussira.

Tel n\u2019est pas le sort des m\u00e9chants :
ils sont comme la paille
balan\u00e9e par le vent.
Le Seigneur conna\u00eet le chemin des justes,
mais le chemin des m\u00e9chants se perdra.`,
    },
    gospel: {
      reference: "Luc 9, 22-25",
      text: `En ce temps-l\u00e0, J\u00e9sus disait \u00e0 ses disciples : \u00ab Il faut que le Fils de l\u2019homme souffre beaucoup, qu\u2019il soit rejet\u00e9 par les anciens, les grands pr\u00eatres et les scribes, qu\u2019il soit tu\u00e9, et que, le troisi\u00e8me jour, il ressuscite. \u00bb

Il leur disait \u00e0 tous : \u00ab Celui qui veut marcher \u00e0 ma suite, qu\u2019il renonce \u00e0 lui-m\u00eame, qu\u2019il prenne sa croix chaque jour et qu\u2019il me suive. Car celui qui veut sauver sa vie la perdra ; mais celui qui perdra sa vie \u00e0 cause de moi la sauvera. Quel avantage un homme aurait-il \u00e0 gagner le monde entier, s\u2019il se perd ou se ruine lui-m\u00eame ? \u00bb`,
    },
  },

  "ash-ven": {
    firstReading: {
      reference: "Isa\u00efe 58, 1-9a",
      text: `Ainsi parle le Seigneur Dieu : Crie \u00e0 pleine gorge ! Ne te retiens pas ! Que ta voix retentisse comme le cor ! D\u00e9nonce \u00e0 mon peuple sa r\u00e9volte, \u00e0 la maison de Jacob ses p\u00e9ch\u00e9s. Jour apr\u00e8s jour, ils viennent me chercher ; ils d\u00e9sirent conna\u00eetre mes chemins. Comme une nation qui pratiquerait la justice et n\u2019abandonnerait pas le droit de son Dieu, ils me demandent des ordonnances justes, ils d\u00e9sirent s\u2019approcher de Dieu : \u00ab Pourquoi je\u00fbner, si tu ne le vois pas ? Pourquoi nous mortifier, si tu l\u2019ignores ? \u00bb Oui, mais le jour o\u00f9 vous je\u00fbnez, vous savez bien trouver votre int\u00e9r\u00eat, et vous traitez durement ceux qui peinent pour vous. Votre je\u00fbne se passe en querelles et disputes, en coups de poing sauvages. Ce n\u2019est pas en je\u00fbnant comme vous le faites aujourd\u2019hui que vous ferez entendre l\u00e0-haut votre voix. Est-ce l\u00e0 le je\u00fbne qui me pla\u00eet, un jour o\u00f9 l\u2019homme se rabaisse ? S\u2019agit-il de courber la t\u00eate comme un jonc, de coucher sur le sac et la cendre ? Appelles-tu cela un je\u00fbne, un jour agr\u00e9able au Seigneur ? Le je\u00fbne qui me pla\u00eet, n\u2019est-ce pas ceci : faire tomber les cha\u00eenes injustes, d\u00e9lier les attaches du joug, rendre la libert\u00e9 aux opprim\u00e9s, briser tous les jougs ? N\u2019est-ce pas partager ton pain avec celui qui a faim, accueillir chez toi les pauvres sans abri, couvrir celui que tu verras sans v\u00eatement, ne pas te d\u00e9rober \u00e0 ton semblable ? Alors ta lumi\u00e8re jaillira comme l\u2019aurore, et tes forces reviendront vite. Devant toi marchera ta justice, et la gloire du Seigneur ferm era la marche. Alors, si tu appelles, le Seigneur r\u00e9pondra ; si tu cries, il dira : \u00ab Me voici. \u00bb`,
    },
    psalm: {
      reference: "Psaume 50 (51)",
      text: `R/ Un c\u0153ur bris\u00e9, broy\u00e9, Dieu, tu ne le m\u00e9prises pas.

Piti\u00e9, mon Dieu, dans ton amour,
selon ta grande mis\u00e9ricorde, efface mon p\u00e9ch\u00e9.
Lave-moi tout entier de ma faute,
purifie-moi de mon offense.

Tu ne veux ni sacrifice ni offrande,
tu as ouvert mes oreilles ;
tu ne demandes ni holocauste ni victime,
alors j\u2019ai dit : \u00ab Voici, je viens. \u00bb

Un c\u0153ur bris\u00e9, broy\u00e9,
Dieu, tu ne le m\u00e9prises pas.
Seigneur, ouvre mes l\u00e8vres,
et ma bouche annoncera ta louange.`,
    },
    gospel: {
      reference: "Matthieu 9, 14-15",
      text: `En ce temps-l\u00e0, les disciples de Jean le Baptiste s\u2019approch\u00e8rent de J\u00e9sus en disant : \u00ab Pourquoi, alors que nous et les pharisiens, nous je\u00fbnons, tes disciples ne je\u00fbnent-ils pas ? \u00bb J\u00e9sus leur r\u00e9pondit : \u00ab Les invit\u00e9s de la noce pourraient-ils donc \u00eatre en deuil pendant le temps o\u00f9 l\u2019\u00c9poux est avec eux ? Mais des jours viendront o\u00f9 l\u2019\u00c9poux leur sera enlev\u00e9, et alors ils je\u00fbneront. \u00bb`,
    },
  },

  "ash-sam": {
    firstReading: {
      reference: "Isa\u00efe 58, 9b-14",
      text: `Ainsi parle le Seigneur : Si tu fais dispara\u00eetre de chez toi le joug, le geste accusateur, la parole malfaisante, si tu donnes \u00e0 celui qui a faim ce que toi, tu d\u00e9sires, et si tu combles les d\u00e9sirs du malheureux, ta lumi\u00e8re se l\u00e8vera dans les t\u00e9n\u00e8bres et ton obscurit\u00e9 sera comme la lumi\u00e8re de midi. Le Seigneur sera toujours ton guide. En plein d\u00e9sert, il comblera tes d\u00e9sirs et te rendra vigueur. Tu seras comme un jardin bien irrigu\u00e9, comme une source o\u00f9 les eaux ne manquent jamais. Tu reb\u00e2tiras les ruines anciennes, tu rel\u00e8veras les fondations des g\u00e9n\u00e9rations pass\u00e9es. On t\u2019appellera : \u00ab R\u00e9parateur de br\u00e8ches \u00bb, \u00ab Restaurateur de chemins \u00bb. Si tu t\u2019abstiens de voyager le jour du sabbat, de traiter tes affaires en mon jour saint, si tu appelles le sabbat tes d\u00e9lices, et si tu honores le jour saint du Seigneur, si tu le c\u00e9l\u00e8bres en renonc\u0327ant \u00e0 tes voyages, en ne traitant pas tes affaires et en ne tenant pas de discours, alors tu trouveras tes d\u00e9lices dans le Seigneur ; je te ferai chevaucher sur les hauteurs du pays, je te donnerai \u00e0 manger l\u2019h\u00e9ritage de Jacob, ton p\u00e8re. Oui, la bouche du Seigneur a parl\u00e9.`,
    },
    psalm: {
      reference: "Psaume 85 (86)",
      text: `R/ Enseigne-moi tes voies, Seigneur, que je marche suivant ta v\u00e9rit\u00e9.

\u00c9coute, Seigneur, r\u00e9ponds-moi,
car je suis pauvre et malheureux.
Veille sur moi qui suis fid\u00e8le,
\u00f4 mon Dieu, sauve ton serviteur qui s\u2019appuie sur toi.

Piti\u00e9, Seigneur, toi que j\u2019appelle chaque jour !
Seigneur, r\u00e9jouis ton serviteur :
vers toi, j\u2019\u00e9l\u00e8ve mon \u00e2me !
Toi qui es bon et qui pardonnes,
plein d\u2019amour pour tous ceux qui t\u2019appellent.

Enseigne-moi tes voies, Seigneur,
que je marche suivant ta v\u00e9rit\u00e9 ;
unifie mon c\u0153ur pour qu\u2019il craigne ton nom.`,
    },
    gospel: {
      reference: "Luc 5, 27-32",
      text: `En ce temps-l\u00e0, J\u00e9sus sortit et remarqua un publicain (c\u2019est-\u00e0-dire un collecteur d\u2019imp\u00f4ts) du nom de L\u00e9vi assis au bureau des douanes. Il lui dit : \u00ab Suis-moi. \u00bb Abandonnant tout, l\u2019homme se leva et le suivait.

L\u00e9vi donna pour J\u00e9sus une grande r\u00e9ception dans sa maison ; il y avait foule de publicains et d\u2019autres gens attabl\u00e9s avec eux. Les pharisiens et les scribes de leur parti r\u00e9criminaient en disant \u00e0 ses disciples : \u00ab Pourquoi mangez-vous et buvez-vous avec les publicains et les p\u00e9cheurs ? \u00bb J\u00e9sus leur r\u00e9pondit : \u00ab Ce ne sont pas les gens bien portants qui ont besoin du m\u00e9decin, mais les malades. Je ne suis pas venu appeler des justes mais des p\u00e9cheurs, pour qu\u2019ils se convertissent. \u00bb`,
    },
  },

  // ===== 1\u00e8re SEMAINE DE CAR\u00caME =====

  "lent-1-lun": {
    firstReading: {
      reference: "L\u00e9vitique 19, 1-2.11-18",
      text: `Le Seigneur parla \u00e0 Mo\u00efse et dit : \u00ab Parle \u00e0 toute l\u2019assembl\u00e9e des fils d\u2019Isra\u00ebl. Tu leur diras : Soyez saints, car moi, le Seigneur votre Dieu, je suis saint. Vous ne volerez pas, vous ne mentirez pas, vous ne tromperez pas votre compagnon. Vous ne ferez pas de faux serments par mon nom : tu profanerais le nom de ton Dieu. Je suis le Seigneur. Tu n\u2019exploiteras pas ton prochain, tu ne le voleras pas. Le salaire du journalier ne restera pas chez toi jusqu\u2019au lendemain matin. Tu n\u2019insulteras pas un sourd et tu ne mettras pas d\u2019obstacle devant un aveugle. Tu craindras ton Dieu. Je suis le Seigneur. Vous ne commettrez pas d\u2019injustice au tribunal. Tu n\u2019avantageras pas le faible, tu ne favoriseras pas le puissant : c\u2019est selon la justice que tu jugeras ton compagnon. Tu n\u2019iras pas r\u00e9pandre la calomnie dans ton peuple, tu ne porteras pas atteinte \u00e0 la vie de ton prochain. Je suis le Seigneur. Tu n\u2019auras aucune pens\u00e9e de haine contre ton fr\u00e8re. Mais tu n\u2019h\u00e9siteras pas \u00e0 r\u00e9primander ton compagnon, et ainsi tu ne participeras pas \u00e0 son p\u00e9ch\u00e9. Tu ne te vengeras pas. Tu ne garderas pas de rancune contre les fils de ton peuple. Tu aimeras ton prochain comme toi-m\u00eame. Je suis le Seigneur. \u00bb`,
    },
    psalm: {
      reference: "Psaume 18B (19)",
      text: `R/ Tes paroles, Seigneur, sont esprit et elles sont vie.

La loi du Seigneur est parfaite,
qui redonne vie ;
la charte du Seigneur est s\u00fbre,
qui rend sages les simples.

Les pr\u00e9ceptes du Seigneur sont droits,
ils r\u00e9jouissent le c\u0153ur ;
le commandement du Seigneur est limpide,
il clarifie le regard.

La crainte qu\u2019il inspire est pure,
elle est l\u00e0 pour toujours ;
les d\u00e9cisions du Seigneur sont justes
et vraiment \u00e9quitables.

Accueille les paroles de ma bouche,
le murmure de mon c\u0153ur ;
qu\u2019ils parviennent devant toi,
Seigneur, mon rocher, mon d\u00e9fenseur !`,
    },
    gospel: {
      reference: "Matthieu 25, 31-46",
      text: `En ce temps-l\u00e0, J\u00e9sus disait \u00e0 ses disciples : \u00ab Quand le Fils de l\u2019homme viendra dans sa gloire, et tous les anges avec lui, alors il si\u00e9gera sur son tr\u00f4ne de gloire. Toutes les nations seront rassembl\u00e9es devant lui ; il s\u00e9parera les hommes les uns des autres, comme le berger s\u00e9pare les brebis des boucs : il placera les brebis \u00e0 sa droite, et les boucs \u00e0 sa gauche.

Alors le Roi dira \u00e0 ceux qui seront \u00e0 sa droite : \u201cVenez, les b\u00e9nis de mon P\u00e8re, recevez en h\u00e9ritage le Royaume pr\u00e9par\u00e9 pour vous depuis la fondation du monde. Car j\u2019avais faim, et vous m\u2019avez donn\u00e9 \u00e0 manger ; j\u2019avais soif, et vous m\u2019avez donn\u00e9 \u00e0 boire ; j\u2019\u00e9tais un \u00e9tranger, et vous m\u2019avez accueilli ; j\u2019\u00e9tais nu, et vous m\u2019avez habill\u00e9 ; j\u2019\u00e9tais malade, et vous m\u2019avez visit\u00e9 ; j\u2019\u00e9tais en prison, et vous \u00eates venus jusqu\u2019\u00e0 moi !\u201d

Alors les justes lui r\u00e9pondront : \u201cSeigneur, quand est-ce que nous t\u2019avons vu avoir faim, et nous t\u2019avons nourri ? avoir soif, et nous t\u2019avons donn\u00e9 \u00e0 boire ? \u00eatre un \u00e9tranger, et nous t\u2019avons accueilli ? \u00eatre nu, et nous t\u2019avons habill\u00e9 ? \u00eatre malade ou en prison et nous sommes venus jusqu\u2019\u00e0 toi ?\u201d Et le Roi leur r\u00e9pondra : \u201cAmen, je vous le dis : chaque fois que vous l\u2019avez fait \u00e0 l\u2019un de ces plus petits de mes fr\u00e8res, c\u2019est \u00e0 moi que vous l\u2019avez fait.\u201d

Alors il dira \u00e0 ceux qui seront \u00e0 sa gauche : \u201cAllez-vous-en loin de moi, vous les maudits, dans le feu \u00e9ternel pr\u00e9par\u00e9 pour le diable et ses anges. Car j\u2019avais faim, et vous ne m\u2019avez pas donn\u00e9 \u00e0 manger ; j\u2019avais soif, et vous ne m\u2019avez pas donn\u00e9 \u00e0 boire ; j\u2019\u00e9tais un \u00e9tranger, et vous ne m\u2019avez pas accueilli ; j\u2019\u00e9tais nu, et vous ne m\u2019avez pas habill\u00e9 ; j\u2019\u00e9tais malade et en prison, et vous ne m\u2019avez pas visit\u00e9.\u201d

Alors ils r\u00e9pondront, eux aussi : \u201cSeigneur, quand t\u2019avons-nous vu avoir faim, avoir soif, \u00eatre nu, \u00eatre un \u00e9tranger, \u00eatre malade ou en prison, sans nous mettre \u00e0 ton service ?\u201d Il leur r\u00e9pondra : \u201cAmen, je vous le dis : chaque fois que vous ne l\u2019avez pas fait \u00e0 l\u2019un de ces plus petits, c\u2019est \u00e0 moi que vous ne l\u2019avez pas fait.\u201d Et ils s\u2019en iront, ceux-ci au ch\u00e2timent \u00e9ternel, et les justes, \u00e0 la vie \u00e9ternelle. \u00bb`,
    },
  },

  "lent-1-mar": {
    firstReading: {
      reference: "Isa\u00efe 55, 10-11",
      text: `Ainsi parle le Seigneur : La pluie et la neige qui descendent des cieux n\u2019y retournent pas sans avoir arros\u00e9 la terre, sans l\u2019avoir f\u00e9cond\u00e9e et l\u2019avoir fait germer, donnant la semence au semeur et le pain \u00e0 celui qui doit manger ; ainsi ma parole, qui sort de ma bouche, ne me reviendra pas sans r\u00e9sultat, sans avoir fait ce qui me pla\u00eet, sans avoir accompli sa mission.`,
    },
    psalm: {
      reference: "Psaume 33 (34)",
      text: `R/ Le Seigneur est proche du c\u0153ur bris\u00e9.

Je b\u00e9nirai le Seigneur en tout temps,
sa louange sans cesse \u00e0 mes l\u00e8vres.
Je me glorifierai dans le Seigneur :
que les pauvres m\u2019entendent et soient en f\u00eate !

Le Seigneur regarde les justes,
il \u00e9coute, attentif \u00e0 leurs cris.
Le Seigneur est proche du c\u0153ur bris\u00e9,
il sauve les esprits abattus.

Malheur sur malheur pour le juste,
mais le Seigneur chaque fois le d\u00e9livre.
Il veille sur chacun de ses os :
pas un seul ne sera bris\u00e9.`,
    },
    gospel: {
      reference: "Matthieu 6, 7-15",
      text: `En ce temps-l\u00e0, J\u00e9sus disait \u00e0 ses disciples : \u00ab Lorsque vous priez, ne rabâchez pas comme les pa\u00efens : ils s\u2019imaginent qu\u2019\u00e0 force de paroles ils seront exauc\u00e9s. Ne les imitez donc pas, car votre P\u00e8re sait de quoi vous avez besoin, avant m\u00eame que vous l\u2019ayez demand\u00e9.

Vous donc, priez ainsi : Notre P\u00e8re, qui es aux cieux, que ton nom soit sanctifi\u00e9, que ton r\u00e8gne vienne, que ta volont\u00e9 soit faite sur la terre comme au ciel. Donne-nous aujourd\u2019hui notre pain de ce jour. Remets-nous nos dettes, comme nous-m\u00eames nous remettons leurs dettes \u00e0 nos d\u00e9biteurs. Et ne nous laisse pas entrer en tentation, mais d\u00e9livre-nous du Mal.

Car, si vous pardonnez aux hommes leurs fautes, votre P\u00e8re c\u00e9leste vous pardonnera aussi. Mais si vous ne pardonnez pas aux hommes, votre P\u00e8re non plus ne pardonnera pas vos fautes. \u00bb`,
    },
  },

  "lent-1-mer": {
    firstReading: {
      reference: "Jonas 3, 1-10",
      text: `La parole du Seigneur fut adress\u00e9e de nouveau \u00e0 Jonas : \u00ab L\u00e8ve-toi, va \u00e0 Ninive, la grande ville. Proclame le message que je te donne. \u00bb Jonas se leva et partit pour Ninive, selon la parole du Seigneur. Or, Ninive \u00e9tait une ville extraordinairement grande : il fallait trois jours pour la traverser. Jonas commen\u00e7a \u00e0 marcher dans la ville, pendant une journ\u00e9e \u00e0 peine, en proclamant : \u00ab Encore quarante jours, et Ninive sera d\u00e9truite ! \u00bb Aussit\u00f4t, les gens de Ninive crurent en Dieu. Ils proclam\u00e8rent un je\u00fbne, et tous, du plus grand au plus petit, rev\u00eatirent le sac. La chose arriva jusqu\u2019au roi de Ninive. Il se leva de son tr\u00f4ne, quitta son manteau, se couvrit d\u2019un sac et s\u2019assit sur la cendre. Puis il fit crier dans Ninive ce d\u00e9cret du roi et de ses grands : \u00ab Hommes et b\u00eates, gros et petit b\u00e9tail, ne go\u00fbteront rien, ne mangeront pas et ne boiront pas. Hommes et b\u00eates, tous se couvriront de sacs, et ils crieront vers Dieu de toute leur force, et chacun se d\u00e9tournera de sa conduite mauvaise et de ses actes de violence. Qui sait si Dieu ne se ravisera pas et ne renoncera pas \u00e0 sa col\u00e8re, si bien que nous ne p\u00e9rirons pas ! \u00bb En voyant leur r\u00e9action, voyant qu\u2019ils se d\u00e9tournaient de leur conduite mauvaise, Dieu renonc\u0327a au ch\u00e2timent dont il les avait menac\u00e9s, et il ne le mit pas \u00e0 ex\u00e9cution.`,
    },
    psalm: {
      reference: "Psaume 50 (51)",
      text: `R/ Un c\u0153ur bris\u00e9, broy\u00e9, Dieu, tu ne le m\u00e9prises pas.

Piti\u00e9, mon Dieu, dans ton amour,
selon ta grande mis\u00e9ricorde, efface mon p\u00e9ch\u00e9.
Lave-moi tout entier de ma faute,
purifie-moi de mon offense.

Cr\u00e9e en moi un c\u0153ur pur, \u00f4 mon Dieu,
renouvelle et raffermis au fond de moi mon esprit.
Ne me chasse pas loin de ta face,
ne me reprends pas ton esprit saint.

Le sacrifice qui pla\u00eet \u00e0 Dieu,
c\u2019est un esprit bris\u00e9 ;
tu ne m\u00e9prises pas, \u00f4 mon Dieu,
un c\u0153ur bris\u00e9 et broy\u00e9.`,
    },
    gospel: {
      reference: "Luc 11, 29-32",
      text: `En ce temps-l\u00e0, comme les foules s\u2019amassaient, J\u00e9sus se mit \u00e0 dire : \u00ab Cette g\u00e9n\u00e9ration est une g\u00e9n\u00e9ration mauvaise : elle cherche un signe, mais en fait de signe il ne lui sera donn\u00e9 que le signe de Jonas. Car Jonas a \u00e9t\u00e9 un signe pour les habitants de Ninive ; il en sera de m\u00eame avec le Fils de l\u2019homme pour cette g\u00e9n\u00e9ration.

Lors du Jugement, la reine de Saba se dressera en m\u00eame temps que les hommes de cette g\u00e9n\u00e9ration, et elle les condamnera. En effet, elle est venue des extr\u00e9mit\u00e9s de la terre pour \u00e9couter la sagesse de Salomon, et il y a ici bien plus que Salomon.

Lors du Jugement, les habitants de Ninive se l\u00e8veront en m\u00eame temps que cette g\u00e9n\u00e9ration, et ils la condamneront ; en effet, il se sont convertis en r\u00e9ponse \u00e0 la proclamation faite par Jonas, et il y a ici bien plus que Jonas. \u00bb`,
    },
  },

  "lent-1-jeu": {
    firstReading: {
      reference: "Esther 4, 17n.p-r.aa-bb.gg-hh",
      text: `En ces jours-l\u00e0, la reine Esther, saisie d\u2019une angoisse mortelle, chercha refuge aupr\u00e8s du Seigneur. Elle priait le Seigneur, Dieu d\u2019Isra\u00ebl, et disait : \u00ab Mon Seigneur, notre Roi, toi qui es l\u2019Unique, viens \u00e0 mon secours, car je suis seule et je n\u2019ai pas d\u2019autre d\u00e9fenseur que toi, et le danger est dans ma main. Moi, j\u2019ai entendu dire, depuis ma tribu natale, que toi, Seigneur, tu as choisi Isra\u00ebl parmi toutes les nations, et nos p\u00e8res parmi tous leurs anc\u00eatres, comme h\u00e9ritage \u00e0 perp\u00e9tuit\u00e9, et que tu as accompli pour eux tout ce que tu leur avais promis. Souviens-toi, Seigneur ; manifeste-toi au jour de notre d\u00e9tresse. Et moi, donne-moi du courage, Roi des dieux et Ma\u00eetre de toute puissance. Mets sur mes l\u00e8vres une parole harmoni\u00e9use quand je serai en face du lion ; change son c\u0153ur, pour qu\u2019il prenne en haine celui qui nous combat, et que celui-ci soit an\u00e9anti, lui et ses partisans. Et nous, d\u00e9livre-nous de la main de nos ennemis ; change notre deuil en f\u00eate et nos souffrances en salut. \u00bb`,
    },
    psalm: {
      reference: "Psaume 137 (138)",
      text: `R/ Le jour o\u00f9 je t\u2019ai appel\u00e9, tu m\u2019as exauc\u00e9.

De tout mon c\u0153ur, Seigneur, je te rends gr\u00e2ce :
tu as entendu les paroles de ma bouche.
Je te chante en pr\u00e9sence des anges,
vers ton temple sacr\u00e9, je me prosterne.

Je rends gr\u00e2ce \u00e0 ton nom pour ton amour et ta v\u00e9rit\u00e9,
car tu \u00e9l\u00e8ves, au-dessus de tout, ton nom et ta parole.
Le jour o\u00f9 tu r\u00e9pondis \u00e0 mon appel,
tu fis grandir en mon \u00e2me la force.

Ta main droite me rend vainqueur.
Le Seigneur fait tout pour moi !
Seigneur, \u00e9ternel est ton amour :
n\u2019arr\u00eate pas l\u2019\u0153uvre de tes mains.`,
    },
    gospel: {
      reference: "Matthieu 7, 7-12",
      text: `En ce temps-l\u00e0, J\u00e9sus disait \u00e0 ses disciples : \u00ab Demandez, on vous donnera ; cherchez, vous trouverez ; frappez, on vous ouvrira. Car quiconque demande re\u00e7oit ; qui cherche trouve ; \u00e0 qui frappe, on ouvrira.

Lequel d\u2019entre vous donnera une pierre \u00e0 son fils quand il lui demande du pain ? ou bien lui donnera un serpent, quand il lui demande un poisson ? Si donc vous, qui \u00eates mauvais, vous savez donner de bonnes choses \u00e0 vos enfants, combien plus votre P\u00e8re qui est aux cieux donnera-t-il de bonnes choses \u00e0 ceux qui les lui demandent !

Donc, tout ce que vous voudriez que les autres fassent pour vous, faites-le pour eux, vous aussi : voil\u00e0 ce que disent la Loi et les Proph\u00e8tes. \u00bb`,
    },
  },

  "lent-1-ven": {
    firstReading: {
      reference: "\u00c9z\u00e9chiel 18, 21-28",
      text: `Ainsi parle le Seigneur Dieu : Si le m\u00e9chant se d\u00e9tourne de tous les p\u00e9ch\u00e9s qu\u2019il a commis, s\u2019il observe tous mes d\u00e9crets, s\u2019il pratique le droit et la justice, il vivra, il ne mourra pas. On ne se souviendra d\u2019aucun des crimes qu\u2019il a commis, il vivra \u00e0 cause de la justice qu\u2019il a pratiqu\u00e9e. Prendrais-je donc plaisir \u00e0 la mort du m\u00e9chant \u2013 oracle du Seigneur Dieu \u2013 et non pas plut\u00f4t \u00e0 ce qu\u2019il se d\u00e9tourne de sa conduite et qu\u2019il vive ? Mais le juste, s\u2019il se d\u00e9tourne de sa justice et fait le mal en imitant toutes les abominations du m\u00e9chant, il mourra ! On ne se souviendra d\u2019aucun des actes de justice qu\u2019il a accomplis ; \u00e0 cause de son infid\u00e9lit\u00e9 et de son p\u00e9ch\u00e9, il mourra. Et vous, vous dites : \u201cLa conduite du Seigneur est sans logique.\u201d \u00c9coutez donc, fils d\u2019Isra\u00ebl : est-ce ma conduite qui est sans logique, ou bien la v\u00f4tre ? Si le juste se d\u00e9tourne de sa justice, commet le mal, et meurt dans cet \u00e9tat, c\u2019est \u00e0 cause de son mal qu\u2019il mourra. Si le m\u00e9chant se d\u00e9tourne de sa m\u00e9chancet\u00e9 pour pratiquer le droit et la justice, il sauvera sa vie. Il a ouvert les yeux et s\u2019est d\u00e9tourn\u00e9 de ses crimes. C\u2019est certain, il vivra, il ne mourra pas.`,
    },
    psalm: {
      reference: "Psaume 129 (130)",
      text: `R/ Pr\u00e8s du Seigneur est l\u2019amour, pr\u00e8s de lui abonde le rachat.

Des profondeurs je crie vers toi, Seigneur,
Seigneur, \u00e9coute mon appel !
Que ton oreille se fasse attentive
au cri de ma pri\u00e8re !

Si tu retiens les fautes, Seigneur,
Seigneur, qui subsistera ?
Mais pr\u00e8s de toi se trouve le pardon
pour que l\u2019homme te craigne.

J\u2019esp\u00e8re le Seigneur de toute mon \u00e2me ;
je l\u2019esp\u00e8re, et j\u2019attends sa parole.
Pr\u00e8s du Seigneur est l\u2019amour,
pr\u00e8s de lui, abonde le rachat.
C\u2019est lui qui rach\u00e8tera Isra\u00ebl
de toutes ses fautes.`,
    },
    gospel: {
      reference: "Matthieu 5, 20-26",
      text: `En ce temps-l\u00e0, J\u00e9sus disait \u00e0 ses disciples : \u00ab Je vous le dis : Si votre justice ne surpasse pas celle des scribes et des pharisiens, vous n\u2019entrerez pas dans le royaume des Cieux.

Vous avez appris qu\u2019il a \u00e9t\u00e9 dit aux anciens : Tu ne commettras pas de meurtre, et si quelqu\u2019un commet un meurtre, il devra passer en jugement. Eh bien ! moi, je vous dis : Tout homme qui se met en col\u00e8re contre son fr\u00e8re devra passer en jugement. Si quelqu\u2019un insulte son fr\u00e8re, il devra passer devant le tribunal. Si quelqu\u2019un le traite de fou, il sera passible de la g\u00e9henne de feu.

Donc, lorsque tu vas pr\u00e9senter ton offrande \u00e0 l\u2019autel, si, l\u00e0, tu te souviens que ton fr\u00e8re a quelque chose contre toi, laisse ton offrande, l\u00e0, devant l\u2019autel, va d\u2019abord te r\u00e9concilier avec ton fr\u00e8re, et ensuite viens pr\u00e9senter ton offrande.

Mets-toi vite d\u2019accord avec ton adversaire pendant que tu es en chemin avec lui, pour \u00e9viter que ton adversaire ne te livre au juge, le juge au garde, et qu\u2019on ne te jette en prison. Amen, je te le dis : tu n\u2019en sortiras pas avant d\u2019avoir pay\u00e9 jusqu\u2019au dernier sou. \u00bb`,
    },
  },

  "lent-1-sam": {
    firstReading: {
      reference: "Deut\u00e9ronome 26, 16-19",
      text: `Mo\u00efse disait au peuple : \u00ab Aujourd\u2019hui le Seigneur ton Dieu te commande de mettre en pratique ces d\u00e9crets et ces ordonnances. Tu veilleras \u00e0 les pratiquer de tout ton c\u0153ur et de toute ton \u00e2me. Aujourd\u2019hui tu as obtenu du Seigneur cette d\u00e9claration : lui sera ton Dieu ; toi, tu suivras ses chemins, tu garderas ses d\u00e9crets, ses commandements et ses ordonnances, tu \u00e9couteras sa voix. Aujourd\u2019hui le Seigneur a obtenu de toi cette d\u00e9claration : tu seras son peuple, son domaine particulier, comme il te l\u2019a dit, tu observeras tous ses commandements. Il te rendra sup\u00e9rieur \u00e0 toutes les nations qu\u2019il a faites, en renomm\u00e9e, en r\u00e9putation et en gloire. Tu seras un peuple consacr\u00e9 au Seigneur ton Dieu, comme il l\u2019a dit. \u00bb`,
    },
    psalm: {
      reference: "Psaume 118 (119)",
      text: `R/ Heureux ceux qui marchent suivant la loi du Seigneur !

Heureux les hommes int\u00e8gres dans leurs voies
qui marchent suivant la loi du Seigneur !
Heureux ceux qui gardent ses exigences,
ils le cherchent de tout c\u0153ur !

Toi, tu promulgues des pr\u00e9ceptes
\u00e0 observer enti\u00e8rement.
Puissent mes voies s\u2019affermir
\u00e0 observer tes commandements !

De tout mon c\u0153ur, je te cherche ;
garde-moi de fuir tes volont\u00e9s.
Dans mon c\u0153ur, je conserve tes promesses
pour ne pas faillir envers toi.`,
    },
    gospel: {
      reference: "Matthieu 5, 43-48",
      text: `En ce temps-l\u00e0, J\u00e9sus disait \u00e0 ses disciples : \u00ab Vous avez appris qu\u2019il a \u00e9t\u00e9 dit : Tu aimeras ton prochain et tu ha\u00efras ton ennemi. Eh bien ! moi, je vous dis : Aimez vos ennemis, et priez pour ceux qui vous pers\u00e9cutent, afin d\u2019\u00eatre vraiment les fils de votre P\u00e8re qui est aux cieux ; car il fait lever son soleil sur les m\u00e9chants et sur les bons, il fait tomber la pluie sur les justes et sur les injustes.

En effet, si vous aimez ceux qui vous aiment, quelle r\u00e9compense m\u00e9ritez-vous ? Les publicains eux-m\u00eames n\u2019en font-ils pas autant ? Et si vous ne saluez que vos fr\u00e8res, que faites-vous d\u2019extraordinaire ? Les pa\u00efens eux-m\u00eames n\u2019en font-ils pas autant ?

Vous donc, vous serez parfaits comme votre P\u00e8re c\u00e9leste est parfait. \u00bb`,
    },
  },

  // ===== 2\u00e8me SEMAINE DE CAR\u00caME =====

  "lent-2-lun": {
    firstReading: {
      reference: "Daniel 9, 4b-10",
      text: `En ces jours-l\u00e0, je fis au Seigneur mon Dieu cette pri\u00e8re et cette confession : \u00ab Ah ! Seigneur, Dieu grand et redoutable, toi qui gardes ton alliance et ta mis\u00e9ricorde \u00e0 ceux qui t\u2019aiment et qui observent tes commandements, nous avons p\u00e9ch\u00e9, nous avons commis l\u2019iniquit\u00e9, nous avons fait le mal, nous nous sommes r\u00e9volt\u00e9s, nous nous sommes d\u00e9tourn\u00e9s de tes commandements et de tes ordonnances. Nous n\u2019avons pas \u00e9cout\u00e9 tes serviteurs les proph\u00e8tes, qui ont parl\u00e9 en ton nom \u00e0 nos rois, \u00e0 nos princes, \u00e0 nos p\u00e8res, et \u00e0 tout le peuple du pays. \u00c0 toi, Seigneur, la justice ; \u00e0 nous la honte au visage, comme on le voit aujourd\u2019hui, pour les gens de Juda, les habitants de J\u00e9rusalem et tout Isra\u00ebl, pour ceux qui sont pr\u00e8s et pour ceux qui sont loin, dans tous les pays o\u00f9 tu les as chass\u00e9s \u00e0 cause des infid\u00e9lit\u00e9s qu\u2019ils ont commises envers toi. Seigneur, \u00e0 nous la honte au visage, \u00e0 nos rois, \u00e0 nos princes, \u00e0 nos p\u00e8res, parce que nous avons p\u00e9ch\u00e9 contre toi. Au Seigneur notre Dieu, la mis\u00e9ricorde et le pardon, car nous nous sommes r\u00e9volt\u00e9s contre lui, nous n\u2019avons pas \u00e9cout\u00e9 la voix du Seigneur notre Dieu pour suivre ses lois, qu\u2019il avait mises devant nous par ses serviteurs les proph\u00e8tes. \u00bb`,
    },
    psalm: {
      reference: "Psaume 78 (79)",
      text: `R/ Seigneur, ne nous traite pas selon nos p\u00e9ch\u00e9s.

Ne retiens pas contre nous les p\u00e9ch\u00e9s de nos anc\u00eatres :
que ta mis\u00e9ricorde nous devance,
car nous sommes \u00e0 bout de force !

Aide-nous, Dieu notre Sauveur,
pour la gloire de ton nom !
D\u00e9livre-nous, efface nos fautes,
pour la cause de ton nom !

Que monte en ta pr\u00e9sence la plainte du captif ;
ton bras est fort : lib\u00e8re les condamn\u00e9s.
Et nous, ton peuple, le troupeau que tu fais pa\u00eetre,
sans fin, nous te rendrons gr\u00e2ce.`,
    },
    gospel: {
      reference: "Luc 6, 36-38",
      text: `En ce temps-l\u00e0, J\u00e9sus disait \u00e0 ses disciples : \u00ab Soyez mis\u00e9ricordieux comme votre P\u00e8re est mis\u00e9ricordieux. Ne jugez pas, et vous ne serez pas jug\u00e9s ; ne condamnez pas, et vous ne serez pas condamn\u00e9s. Pardonnez, et vous serez pardonn\u00e9s. Donnez, et l\u2019on vous donnera : c\u2019est une mesure bien pleine, tass\u00e9e, secou\u00e9e, d\u00e9bordante, qui sera vers\u00e9e dans le pan de votre v\u00eatement ; car la mesure dont vous vous servez pour les autres servira de mesure aussi pour vous. \u00bb`,
    },
  },

  "lent-2-mar": {
    firstReading: {
      reference: "Isa\u00efe 1, 10.16-20",
      text: `\u00c9coutez la parole du Seigneur, vous qui \u00eates pareils aux chefs de Sodome ! Pr\u00eatez l\u2019oreille \u00e0 l\u2019enseignement de notre Dieu, vous, peuple de Gomorrhe ! Lavez-vous, purifiez-vous, \u00f4tez de ma vue vos actions mauvaises, cessez de faire le mal. Apprenez \u00e0 faire le bien : recherchez le droit, mettez au pas l\u2019oppresseur, rendez justice \u00e0 l\u2019orphelin, d\u00e9fendez la cause de la veuve. Venez, et nous allons nous expliquer \u2013 dit le Seigneur. Si vos p\u00e9ch\u00e9s sont comme l\u2019\u00e9carlate, ils deviendront aussi blancs que neige. S\u2019ils sont rouges comme le vermillon, ils deviendront comme de la laine. Si vous consentez \u00e0 m\u2019ob\u00e9ir, les bonnes choses du pays, vous les mangerez ; mais si vous refusez, si vous vous r\u00e9voltez, c\u2019est l\u2019\u00e9p\u00e9e qui vous mangera. Oui, la bouche du Seigneur a parl\u00e9.`,
    },
    psalm: {
      reference: "Psaume 49 (50)",
      text: `R/ \u00c0 celui qui veille sur sa conduite, je ferai voir le salut de Dieu.

\u00c9coute, mon peuple, je parle ;
Isra\u00ebl, je te prends \u00e0 t\u00e9moin ;
moi, Dieu, je suis ton Dieu !
Ce n\u2019est pas pour tes sacrifices que je te bl\u00e2me.

Offre \u00e0 Dieu le sacrifice d\u2019action de gr\u00e2ce,
accomplis tes v\u0153ux envers le Tr\u00e8s-Haut.
Invoque-moi au jour de la d\u00e9tresse :
je te d\u00e9livrerai, et tu me rendras gloire.

\u00ab Qu\u2019as-tu \u00e0 r\u00e9citer mes d\u00e9crets,
\u00e0 garder mon alliance \u00e0 la bouche,
toi qui n\u2019aimes pas les reproches
et rejettes loin de toi mes paroles ? \u00bb`,
    },
    gospel: {
      reference: "Matthieu 23, 1-12",
      text: `En ce temps-l\u00e0, J\u00e9sus s\u2019adressa aux foules et \u00e0 ses disciples, et il d\u00e9clara : \u00ab Les scribes et les pharisiens enseignent dans la chaire de Mo\u00efse. Donc, tout ce qu\u2019ils peuvent vous dire, faites-le et observez-le. Mais n\u2019agissez pas d\u2019apr\u00e8s leurs actes, car ils disent et ne font pas. Ils attachent de pesants fardeaux, difficiles \u00e0 porter, et ils en chargent les \u00e9paules des gens ; mais eux-m\u00eames ne veulent pas les remuer du doigt.

Toutes leurs actions, ils les font pour \u00eatre remarqu\u00e9s des gens : ils \u00e9largissent leurs phylact\u00e8res et rallongent leurs franges ; ils aiment les places d\u2019honneur dans les d\u00eeners, les si\u00e8ges d\u2019honneur dans les synagogues et les salutations sur les places publiques ; ils aiment recevoir des gens le titre de Rabbi.

Pour vous, ne vous faites pas donner le titre de Rabbi, car vous n\u2019avez qu\u2019un seul ma\u00eetre pour vous enseigner, et vous \u00eates tous fr\u00e8res. Ne donnez \u00e0 personne sur terre le nom de p\u00e8re, car vous n\u2019avez qu\u2019un seul P\u00e8re, celui qui est aux cieux. Ne vous faites pas non plus donner le titre de ma\u00eetres, car vous n\u2019avez qu\u2019un seul ma\u00eetre, le Christ.

Le plus grand parmi vous sera votre serviteur. Qui s\u2019\u00e9l\u00e8vera sera abaiss\u00e9, qui s\u2019abaissera sera \u00e9lev\u00e9. \u00bb`,
    },
  },

  "lent-2-mer": {
    firstReading: {
      reference: "J\u00e9r\u00e9mie 18, 18-20",
      text: `Mes adversaires ont dit : \u00ab Venez, montons un complot contre J\u00e9r\u00e9mie. La loi ne va pas dispara\u00eetre par manque de pr\u00eatre, ni le conseil, par manque de sage, ni l\u2019oracle, par manque de proph\u00e8te. Venez, attaquons-le par notre langue, ne faisons pas attention \u00e0 toutes ses paroles. \u00bb

Mais toi, Seigneur, fais attention \u00e0 moi, \u00e9coute ce que disent mes adversaires. Comment rend-on le mal pour le bien ? Et pourtant ils m\u2019ont creus\u00e9 une fosse ! Rappelle-toi que je me tenais en ta pr\u00e9sence pour te parler en leur faveur, pour d\u00e9tourner d\u2019eux ta col\u00e8re.`,
    },
    psalm: {
      reference: "Psaume 30 (31)",
      text: `R/ Sauve-moi, Seigneur, dans ton amour.

En toi, Seigneur, j\u2019ai mon refuge ;
garde-moi d\u2019\u00eatre humili\u00e9 pour toujours.
Dans ta justice, lib\u00e8re-moi ;
\u00e9coute, et viens me d\u00e9livrer.

Sois le rocher qui m\u2019abrite,
la maison fortifi\u00e9e qui me sauve.
Ma forteresse et mon roc, c\u2019est toi :
pour l\u2019honneur de ton nom,
tu me guides et me conduis.

En tes mains je remets mon esprit ;
tu me rach\u00e8tes, Seigneur, Dieu de v\u00e9rit\u00e9.
Moi, je suis s\u00fbr du Seigneur.
Ton amour me fait danser de joie.`,
    },
    gospel: {
      reference: "Matthieu 20, 17-28",
      text: `En ce temps-l\u00e0, J\u00e9sus, montant \u00e0 J\u00e9rusalem, prit \u00e0 part les Douze disciples et, en chemin, il leur dit : \u00ab Voici que nous montons \u00e0 J\u00e9rusalem. Le Fils de l\u2019homme sera livr\u00e9 aux grands pr\u00eatres et aux scribes, ils le condamneront \u00e0 mort et le livreront aux nations pa\u00efennes pour qu\u2019elles se moquent de lui, le flagellent et le crucifient ; le troisi\u00e8me jour, il ressuscitera. \u00bb

Alors la m\u00e8re des fils de Z\u00e9b\u00e9d\u00e9e s\u2019approcha de J\u00e9sus avec ses fils Jacques et Jean, et elle se prosterna pour lui faire une demande. J\u00e9sus lui dit : \u00ab Que veux-tu ? \u00bb Elle r\u00e9pondit : \u00ab Ordonne que mes deux fils que voici si\u00e8gent, l\u2019un \u00e0 ta droite et l\u2019autre \u00e0 ta gauche, dans ton Royaume. \u00bb J\u00e9sus r\u00e9pondit : \u00ab Vous ne savez pas ce que vous demandez. Pouvez-vous boire la coupe que je vais boire ? \u00bb Ils lui disent : \u00ab Nous le pouvons. \u00bb Il leur dit : \u00ab Ma coupe, vous la boirez ; quant \u00e0 si\u00e9ger \u00e0 ma droite et \u00e0 ma gauche, ce n\u2019est pas \u00e0 moi de l\u2019accorder ; il y a ceux pour qui cela est pr\u00e9par\u00e9 par mon P\u00e8re. \u00bb

Les dix autres, qui avaient entendu, s\u2019indign\u00e8rent contre les deux fr\u00e8res. J\u00e9sus les appela et dit : \u00ab Vous le savez : les chefs des nations les commandent en ma\u00eetres, et les grands font sentir leur pouvoir. Parmi vous il ne devra pas en \u00eatre ainsi : celui qui veut devenir grand parmi vous sera votre serviteur ; et celui qui veut \u00eatre parmi vous le premier sera votre esclave. Ainsi, le Fils de l\u2019homme n\u2019est pas venu pour \u00eatre servi, mais pour servir, et donner sa vie en ran\u00e7on pour la multitude. \u00bb`,
    },
  },

  "lent-2-jeu": {
    firstReading: {
      reference: "J\u00e9r\u00e9mie 17, 5-10",
      text: `Ainsi parle le Seigneur : Maudit soit l\u2019homme qui met sa foi dans un mortel, qui s\u2019appuie sur un \u00eatre de chair, tandis que son c\u0153ur se d\u00e9tourne du Seigneur. Il sera comme un chardon dans le d\u00e9sert, il ne verra pas venir le bonheur. Il habitera les lieux br\u00fbl\u00e9s du d\u00e9sert, dans une terre sal\u00e9e, inhabit\u00e9e.

B\u00e9ni soit l\u2019homme qui met sa foi dans le Seigneur, dont le Seigneur est la confiance. Il sera comme un arbre, plant\u00e9 pr\u00e8s des eaux, qui pousse ses racines vers le courant : il ne craint pas quand vient la chaleur, son feuillage reste vert ; dans l\u2019ann\u00e9e de la s\u00e9cheresse, il est sans inqui\u00e9tude, et il ne manque pas de porter du fruit.

Rien n\u2019est plus faux que le c\u0153ur de l\u2019homme, il est irr\u00e9m\u00e9diable. Qui peut le conna\u00eetre ? Moi, le Seigneur, qui scrute les c\u0153urs et qui sonde les reins, afin de rendre \u00e0 chacun selon sa conduite, selon le fruit de ses actes.`,
    },
    psalm: {
      reference: "Psaume 1",
      text: `R/ Heureux est l\u2019homme qui met sa foi dans le Seigneur.

Heureux est l\u2019homme
qui n\u2019entre pas au conseil des m\u00e9chants,
qui ne suit pas le chemin des p\u00e9cheurs,
ne si\u00e8ge pas avec ceux qui ricanent,
mais se pla\u00eet dans la loi du Seigneur
et murmure sa loi jour et nuit !

Il est comme un arbre
plant\u00e9 pr\u00e8s d\u2019un ruisseau,
qui donne du fruit en son temps,
et jamais son feuillage ne meurt ;
tout ce qu\u2019il entreprend r\u00e9ussira.

Tel n\u2019est pas le sort des m\u00e9chants.
Mais ils sont comme la paille
balan\u00e9e par le vent.
Le Seigneur conna\u00eet le chemin des justes,
mais le chemin des m\u00e9chants se perdra.`,
    },
    gospel: {
      reference: "Luc 16, 19-31",
      text: `En ce temps-l\u00e0, J\u00e9sus disait aux pharisiens : \u00ab Il y avait un homme riche, v\u00eatu de pourpre et de lin fin, qui faisait chaque jour des festins somptueux. Devant son portail \u00e9tait couch\u00e9 un pauvre nomm\u00e9 Lazare, couvert d\u2019ulc\u00e8res, qui aurait bien voulu se rassasier de ce qui tombait de la table du riche ; mais les chiens, eux, venaient l\u00e9cher ses ulc\u00e8res.

Or le pauvre mourut, et les anges l\u2019emport\u00e8rent aupr\u00e8s d\u2019Abraham. Le riche mourut aussi, et on l\u2019enterra. Au s\u00e9jour des morts, il \u00e9tait en proie \u00e0 la torture ; levant les yeux, il vit Abraham de loin et Lazare tout pr\u00e8s de lui. Alors il cria : \u201cP\u00e8re Abraham, prends piti\u00e9 de moi et envoie Lazare tremper le bout de son doigt dans l\u2019eau pour me rafra\u00eechir la langue, car je souffre terriblement dans cette fournaise.\u201d

\u201cMon enfant, r\u00e9pondit Abraham, rappelle-toi : tu as re\u00e7u le bonheur pendant ta vie, et Lazare, le malheur pendant la sienne. Maintenant, lui, il trouve ici la consolation, et toi, la souffrance. Et de plus, un grand ab\u00eeme a \u00e9t\u00e9 \u00e9tabli entre nous et vous, pour que ceux qui voudraient passer vers vous ne le puissent pas, et que, de l\u00e0-bas non plus, on ne traverse pas vers nous.\u201d

Le riche r\u00e9pliqua : \u201cP\u00e8re, je te prie d\u2019envoyer Lazare dans la maison de mon p\u00e8re. En effet, j\u2019ai cinq fr\u00e8res : qu\u2019il les avertisse, de peur qu\u2019ils ne viennent, eux aussi, dans ce lieu de torture !\u201d Abraham lui dit : \u201cIls ont Mo\u00efse et les Proph\u00e8tes : qu\u2019ils les \u00e9coutent !\u201d \u201cNon, p\u00e8re Abraham, dit-il, mais si quelqu\u2019un de chez les morts vient les trouver, ils se convertiront.\u201d Abraham r\u00e9pondit : \u201cS\u2019ils n\u2019\u00e9coutent pas Mo\u00efse ni les Proph\u00e8tes, quelqu\u2019un pourra bien ressusciter d\u2019entre les morts : ils ne seront pas convaincus.\u201d \u00bb`,
    },
  },

  "lent-2-ven": {
    firstReading: {
      reference: "Gen\u00e8se 37, 3-4.12-13a.17b-28",
      text: `Isra\u00ebl, c\u2019est-\u00e0-dire Jacob, aimait Joseph plus que tous ses autres enfants, parce qu\u2019il \u00e9tait le fils de sa vieillesse, et il lui fit faire un v\u00eatement de grand prix. En voyant que leur p\u00e8re l\u2019aimait plus que tous ses fr\u00e8res, ceux-ci se mirent \u00e0 d\u00e9tester Joseph, et ils ne pouvaient plus lui parler sans hostilit\u00e9.

Les fr\u00e8res de Joseph \u00e9taient all\u00e9s \u00e0 Sichem faire pa\u00eetre le troupeau de leur p\u00e8re. Isra\u00ebl dit \u00e0 Joseph : \u00ab Tes fr\u00e8res gardent le troupeau \u00e0 Sichem. Viens, je vais t\u2019envoyer vers eux. \u00bb Joseph alla rejoindre ses fr\u00e8res et les trouva \u00e0 Dot\u00e2ne. Ceux-ci l\u2019aper\u00e7urent de loin et, avant qu\u2019il les ait rejoints, ils complot\u00e8rent de le faire mourir. Ils se dirent l\u2019un \u00e0 l\u2019autre : \u00ab Voici le grand r\u00eaveur qui arrive ! Maintenant, venez, tuons-le, et jetons-le dans une citerne. Nous dirons qu\u2019une b\u00eate f\u00e9roce l\u2019a d\u00e9vor\u00e9, et nous verrons ce que deviennent ses r\u00eaves ! \u00bb

Ruben les entendit, et il sauva Joseph de leurs mains en disant : \u00ab Ne lui \u00f4tons pas la vie. \u00bb Il leur dit : \u00ab Ne r\u00e9pandez pas son sang : jetez-le dans cette citerne du d\u00e9sert, mais ne portez pas la main sur lui. \u00bb Il voulait le sauver de leurs mains et le rendre \u00e0 son p\u00e8re. D\u00e8s que Joseph eut rejoint ses fr\u00e8res, ceux-ci le d\u00e9pouill\u00e8rent du v\u00eatement de grand prix qu\u2019il portait, ils se saisirent de lui et le jet\u00e8rent dans la citerne, qui \u00e9tait vide et sans eau. Puis, s\u2019\u00e9tant assis pour manger, ils lev\u00e8rent les yeux et virent une caravane d\u2019Isma\u00e9lites qui venait de Galaad. Leurs chameaux \u00e9taient charg\u00e9s d\u2019aromates, de baume et de myrrhe qu\u2019ils allaient livrer en \u00c9gypte. Juda dit \u00e0 ses fr\u00e8res : \u00ab Quel profit aurions-nous \u00e0 tuer notre fr\u00e8re et \u00e0 dissimuler sa mort ? Vendons-le aux Isma\u00e9lites. Ne portons pas la main sur lui, car il est notre fr\u00e8re, il est de notre chair. \u00bb Ses fr\u00e8res l\u2019\u00e9cout\u00e8rent. Des marchands madianites qui passaient par l\u00e0 retir\u00e8rent Joseph de la citerne, et le vendirent pour vingt pi\u00e8ces d\u2019argent aux Isma\u00e9lites. Ceux-ci emmen\u00e8rent Joseph en \u00c9gypte.`,
    },
    psalm: {
      reference: "Psaume 104 (105)",
      text: `R/ Souvenez-vous des merveilles que le Seigneur a faites.

Cherchez le Seigneur et sa puissance,
recherchez sans tr\u00eave sa face ;
souvenez-vous des merveilles qu\u2019il a faites,
de ses prodiges, des jugements qu\u2019il prononc\u0327a.

Il appela sur le pays la famine,
il coupa court \u00e0 toute ressource de pain.
Mais devant eux, il envoya un homme,
Joseph, qui fut vendu comme esclave.

On lui mit aux pieds des entraves,
on lui passa des fers au cou.
Jusqu\u2019au jour o\u00f9 arriva ce qu\u2019il avait dit,
la parole du Seigneur le mit \u00e0 l\u2019\u00e9preuve.`,
    },
    gospel: {
      reference: "Matthieu 21, 33-43.45-46",
      text: `En ce temps-l\u00e0, J\u00e9sus disait aux grands pr\u00eatres et aux anciens du peuple : \u00ab \u00c9coutez une autre parabole : Un homme \u00e9tait propri\u00e9taire d\u2019un domaine ; il planta une vigne, l\u2019entoura d\u2019une cl\u00f4ture, y creusa un pressoir et b\u00e2tit une tour de garde. Puis il la loua \u00e0 des vignerons, et partit en voyage.

Quand arriva le temps des fruits, il envoya ses serviteurs aupr\u00e8s des vignerons pour se faire remettre le produit de sa vigne. Mais les vignerons se saisirent des serviteurs, frapp\u00e8rent l\u2019un, tu\u00e8rent l\u2019autre, lapid\u00e8rent le troisi\u00e8me. De nouveau, le propri\u00e9taire envoya d\u2019autres serviteurs, plus nombreux que les premiers ; mais ils furent trait\u00e9s de la m\u00eame fa\u00e7on.

Finalement, il leur envoya son fils, en se disant : \u201cIls respecteront mon fils.\u201d Mais, voyant le fils, les vignerons se dirent entre eux : \u201cVoici l\u2019h\u00e9ritier : venez ! tuons-le, nous aurons l\u2019h\u00e9ritage !\u201d Ils se saisirent de lui, le jet\u00e8rent hors de la vigne et le tu\u00e8rent.

Eh bien ! quand le ma\u00eetre de la vigne viendra, que fera-t-il \u00e0 ces vignerons ? \u00bb On lui r\u00e9pondit : \u00ab Ces m\u00e9chants, il les fera p\u00e9rir misérablement. Il louera la vigne \u00e0 d\u2019autres vignerons, qui lui en remettront le produit en temps voulu. \u00bb

J\u00e9sus leur dit : \u00ab N\u2019avez-vous jamais lu dans les \u00c9critures : La pierre qu\u2019ont rejet\u00e9e les b\u00e2tisseurs est devenue la pierre d\u2019angle : c\u2019est l\u00e0 l\u2019\u0153uvre du Seigneur, la merveille devant nos yeux ! Aussi, je vous le dis : Le royaume de Dieu vous sera enlev\u00e9 pour \u00eatre donn\u00e9 \u00e0 une nation qui lui fera produire ses fruits. \u00bb

En entendant les paraboles de J\u00e9sus, les grands pr\u00eatres et les pharisiens avaient bien compris qu\u2019il parlait d\u2019eux. Tout en cherchant \u00e0 l\u2019arr\u00eater, ils eurent peur des foules, parce qu\u2019elles le tenaient pour un proph\u00e8te.`,
    },
  },

  "lent-2-sam": {
    firstReading: {
      reference: "Mich\u00e9e 7, 14-15.18-20",
      text: `Seigneur, avec ta houlette, conduis ton peuple, le troupeau qui t\u2019appartient, qui demeure isol\u00e9 dans le maquis, entour\u00e9 de vergers. Qu\u2019il trouve sa p\u00e2ture en Bashane et en Galaad, comme aux jours d\u2019autrefois ! Comme aux jours o\u00f9 tu sortis du pays d\u2019\u00c9gypte, fais-nous voir des merveilles !

Quel est le dieu qui peut te comparer ? Tu enl\u00e8ves le crime, tu passes sur la r\u00e9volte, comme tu le fais \u00e0 l\u2019\u00e9gard du reste de ton h\u00e9ritage. Tu ne gardes pas ta col\u00e8re pour toujours, car tu aimes la mis\u00e9ricorde ! De nouveau, tu nous montreras ta tendresse, tu fouleras aux pieds nos crimes, tu jetteras au fond de la mer tous nos p\u00e9ch\u00e9s ! Tu accorderas \u00e0 Jacob ta fid\u00e9lit\u00e9, et \u00e0 Abraham ta mis\u00e9ricorde, comme tu l\u2019as jur\u00e9 \u00e0 nos p\u00e8res depuis les jours d\u2019autrefois.`,
    },
    psalm: {
      reference: "Psaume 102 (103)",
      text: `R/ Le Seigneur est tendresse et piti\u00e9.

Le Seigneur est tendresse et piti\u00e9,
lent \u00e0 la col\u00e8re et plein d\u2019amour ;
il n\u2019est pas pour toujours en proc\u00e8s,
ne maintient pas sans fin ses reproches.

Il n\u2019agit pas envers nous selon nos fautes,
ne nous rend pas selon nos offenses.
Comme le ciel domine la terre,
fort est son amour pour qui le craint ;

aussi loin qu\u2019est l\u2019orient de l\u2019occident,
il met loin de nous nos p\u00e9ch\u00e9s.
Comme la tendresse du p\u00e8re pour ses fils,
la tendresse du Seigneur pour qui le craint !`,
    },
    gospel: {
      reference: "Luc 15, 1-3.11-32",
      text: `En ce temps-l\u00e0, les publicains et les p\u00e9cheurs venaient tous \u00e0 J\u00e9sus pour l\u2019\u00e9couter. Les pharisiens et les scribes r\u00e9criminaient contre lui : \u00ab Cet homme fait bon accueil aux p\u00e9cheurs, et il mange avec eux ! \u00bb Alors J\u00e9sus leur dit cette parabole :

\u00ab Un homme avait deux fils. Le plus jeune dit \u00e0 son p\u00e8re : \u201cP\u00e8re, donne-moi la part de fortune qui me revient.\u201d Et le p\u00e8re leur partagea ses biens. Peu de jours apr\u00e8s, le plus jeune rassembla tout ce qu\u2019il avait, et partit pour un pays lointain o\u00f9 il dilapida sa fortune en menant une vie de d\u00e9sordre. Il avait tout d\u00e9pens\u00e9, quand une grande famine survint dans ce pays, et il commen\u00e7a \u00e0 se trouver dans le besoin. Il alla s\u2019engager aupr\u00e8s d\u2019un habitant de ce pays, qui l\u2019envoya dans ses champs garder les porcs. Il aurait bien voulu se remplir le ventre avec les gousses que mangeaient les porcs, mais personne ne lui donnait rien.

Alors il rentra en lui-m\u00eame et se dit : \u201cCombien d\u2019ouvriers de mon p\u00e8re ont du pain en abondance, et moi, ici, je meurs de faim ! Je me l\u00e8verai, j\u2019irai vers mon p\u00e8re, et je lui dirai : P\u00e8re, j\u2019ai p\u00e9ch\u00e9 contre le ciel et envers toi. Je ne suis plus digne d\u2019\u00eatre appel\u00e9 ton fils. Traite-moi comme l\u2019un de tes ouvriers.\u201d Il se leva et s\u2019en alla vers son p\u00e8re.

Comme il \u00e9tait encore loin, son p\u00e8re l\u2019aper\u00e7ut et fut saisi de compassion ; il courut se jeter \u00e0 son cou et le couvrit de baisers. Le fils lui dit : \u201cP\u00e8re, j\u2019ai p\u00e9ch\u00e9 contre le ciel et envers toi. Je ne suis plus digne d\u2019\u00eatre appel\u00e9 ton fils.\u201d Mais le p\u00e8re dit \u00e0 ses serviteurs : \u201cVite, apportez le plus beau v\u00eatement pour l\u2019en rev\u00eatir. Mettez-lui une bague au doigt et des sandales aux pieds, allez chercher le veau gras, tuez-le, mangeons et festoyons, car mon fils que voil\u00e0 \u00e9tait mort, et il est revenu \u00e0 la vie ; il \u00e9tait perdu, et il est retrouv\u00e9.\u201d Et ils commenc\u00e8rent \u00e0 festoyer.

Or le fils a\u00een\u00e9 \u00e9tait aux champs. Quand il revint et fut pr\u00e8s de la maison, il entendit la musique et les danses. Appelant un des serviteurs, il s\u2019informa de ce qui se passait. Celui-ci r\u00e9pondit : \u201cTon fr\u00e8re est arriv\u00e9, et ton p\u00e8re a tu\u00e9 le veau gras, parce qu\u2019il a retrouv\u00e9 ton fr\u00e8re en bonne sant\u00e9.\u201d Alors le fils a\u00een\u00e9 se mit en col\u00e8re, et il refusait d\u2019entrer. Son p\u00e8re sortit le supplier. Mais il r\u00e9pliqua \u00e0 son p\u00e8re : \u201cIl y a tant d\u2019ann\u00e9es que je suis \u00e0 ton service sans avoir jamais transgress\u00e9 tes ordres, et jamais tu ne m\u2019as donn\u00e9 un chevreau pour festoyer avec mes amis. Mais, quand ton fils que voil\u00e0 est revenu apr\u00e8s avoir d\u00e9vor\u00e9 ton bien avec des prostitu\u00e9es, tu as fait tuer pour lui le veau gras !\u201d

Le p\u00e8re lui dit : \u201cToi, mon enfant, tu es toujours avec moi, et tout ce qui est \u00e0 moi est \u00e0 toi. Il fallait festoyer et se r\u00e9jouir ; car ton fr\u00e8re que voil\u00e0 \u00e9tait mort, et il est revenu \u00e0 la vie ; il \u00e9tait perdu, et il est retrouv\u00e9 !\u201d \u00bb`,
    },
  },

  // ===== Semaines 3 \u00e0 5 et Semaine Sainte/Triduum : conserver la structure existante =====
  // Les entr\u00e9es suivantes gardent les cl\u00e9s existantes avec les textes d\u00e9j\u00e0 pr\u00e9sents
  // (le fichier pr\u00e9c\u00e9dent les contenait d\u00e9j\u00e0, on les r\u00e9\u00e9crit ici pour coh\u00e9rence)

  "lent-3-lun": {
    firstReading: { reference: "2 Rois 5, 1-15a", text: `En ces jours-l\u00e0, Naaman, g\u00e9n\u00e9ral de l\u2019arm\u00e9e du roi d\u2019Aram, \u00e9tait un homme de grande valeur et hautement estim\u00e9 par son ma\u00eetre, car c\u2019\u00e9tait par lui que le Seigneur avait donn\u00e9 la victoire au roi d\u2019Aram. Or, cet homme vaillant \u00e9tait l\u00e9preux. Des Aram\u00e9ens, au cours d\u2019une razzia, avaient emmen\u00e9 captive une fillette du pays d\u2019Isra\u00ebl, qui \u00e9tait au service de la femme de Naaman. Elle dit \u00e0 sa ma\u00eetresse : \u00ab Ah ! si mon ma\u00eetre s\u2019adressait au proph\u00e8te qui est \u00e0 Samarie, celui-ci le d\u00e9barrasserait de sa l\u00e8pre. \u00bb \u00c9lis\u00e9e lui fit dire : \u00ab Va te baigner sept fois dans le Jourdain, et ta chair redeviendra nette. \u00bb Naaman se mit en col\u00e8re et s\u2019\u00e9loigna en disant : \u00ab Je m\u2019\u00e9tais dit : Il va sortir, se pr\u00e9senter, invoquer le nom du Seigneur son Dieu, passer la main sur l\u2019endroit malade et enlever ma l\u00e8pre. \u00bb Ses serviteurs s\u2019approch\u00e8rent pour lui dire : \u00ab Mon p\u00e8re, si le proph\u00e8te t\u2019avait demand\u00e9 quelque chose de difficile, tu l\u2019aurais fait, n\u2019est-ce pas ? \u00bb Il descendit donc et se plongea sept fois dans le Jourdain, selon la parole de l\u2019homme de Dieu ; alors sa chair redevint semblable \u00e0 celle d\u2019un petit enfant : il \u00e9tait purifi\u00e9 ! Il revint chez l\u2019homme de Dieu avec toute son escorte ; il entra, se pr\u00e9senta devant lui et d\u00e9clara : \u00ab D\u00e9sormais, je le sais : il n\u2019y a pas d\u2019autre Dieu, sur toute la terre, que celui d\u2019Isra\u00ebl ! \u00bb` },
    psalm: { reference: "Psaume 41-42 (42-43)", text: `R/ Mon \u00e2me a soif de Dieu, le Dieu vivant.

Comme un cerf alt\u00e9r\u00e9 cherche l\u2019eau vive,
ainsi mon \u00e2me te cherche toi, mon Dieu.
Mon \u00e2me a soif de Dieu, le Dieu vivant ;
quand pourrai-je m\u2019avancer, para\u00eetre face \u00e0 Dieu ?

Envoie ta lumi\u00e8re et ta v\u00e9rit\u00e9 :
qu\u2019elles guident mes pas et me conduisent
\u00e0 ta montagne sainte, jusqu\u2019en ta demeure.

J\u2019avancerai jusqu\u2019\u00e0 l\u2019autel de Dieu,
vers Dieu qui est toute ma joie ;
je te rendrai gr\u00e2ce avec ma harpe,
Dieu, mon Dieu !` },
    gospel: { reference: "Luc 4, 24-30", text: `En ce temps-l\u00e0, dans la synagogue de Nazareth, J\u00e9sus d\u00e9clara : \u00ab Amen, je vous le dis : aucun proph\u00e8te ne trouve un accueil favorable dans son pays. En v\u00e9rit\u00e9, je vous le dis : Au temps du proph\u00e8te \u00c9lie, lorsque pendant trois ans et six mois il n\u2019y eut pas de pluie, et qu\u2019une grande famine s\u00e9vit sur toute la terre, il y avait beaucoup de veuves en Isra\u00ebl ; pourtant \u00c9lie ne fut envoy\u00e9 vers aucune d\u2019entre elles, mais bien dans la ville de Sarepta, au pays de Sidon, chez une veuve \u00e9trang\u00e8re. Au temps du proph\u00e8te \u00c9lis\u00e9e, il y avait beaucoup de l\u00e9preux en Isra\u00ebl ; et pourtant aucun d\u2019eux n\u2019a \u00e9t\u00e9 purifi\u00e9, mais bien Naaman le Syrien. \u00bb \u00c0 ces mots, dans la synagogue, tous devinrent furieux. Ils se lev\u00e8rent, pouss\u00e8rent J\u00e9sus hors de la ville, et le men\u00e8rent jusqu\u2019\u00e0 un escarpement de la colline o\u00f9 leur ville est construite, pour le pr\u00e9cipiter en bas. Mais lui, passant au milieu d\u2019eux, allait son chemin.` },
  },

  "lent-3-mar": {
    firstReading: { reference: "Daniel 3, 25.34-43", text: `En ces jours-l\u00e0, Azarias, debout, priait ainsi. Au milieu du feu, ouvrant la bouche, il dit : \u00ab \u00c0 cause de ton nom, ne nous livre pas pour toujours et ne romps pas ton alliance. Ne nous retire pas ta mis\u00e9ricorde, \u00e0 cause d\u2019Abraham, ton ami, d\u2019Isaac, ton serviteur, et d\u2019Isra\u00ebl que tu as consacr\u00e9. Tu as dit que tu rendrais leur descendance aussi nombreuse que les astres du ciel, que le sable au rivage des mers. Or nous voici, Seigneur, le plus petit de tous les peuples, humili\u00e9s aujourd\u2019hui sur toute la terre, \u00e0 cause de nos p\u00e9ch\u00e9s. Il n\u2019est plus, en ce temps, ni prince, ni proph\u00e8te, ni chef, ni holocauste, ni sacrifice, ni offrande, ni encens, ni lieu o\u00f9 t\u2019offrir nos pr\u00e9mices pour obtenir ta mis\u00e9ricorde. Mais, avec nos c\u0153urs bris\u00e9s, nos esprits humili\u00e9s, re\u00e7ois-nous comme un holocauste de b\u00e9liers et de taureaux. Que notre sacrifice, en ce jour, trouve gr\u00e2ce devant toi. Car il n\u2019est pas de honte pour ceux qui espèrent en toi. Et maintenant, de tout notre c\u0153ur, nous te suivons, nous te craignons et nous cherchons ta face. Ne nous laisse pas dans la honte, agis envers nous selon ton indulgence et l\u2019abondance de ta mis\u00e9ricorde. D\u00e9livre-nous en renouvelant tes merveilles, glorifie ton nom, Seigneur. \u00bb` },
    psalm: { reference: "Psaume 24 (25)", text: `R/ Rappelle-toi, Seigneur, ta tendresse.

Seigneur, enseigne-moi tes voies,
fais-moi conna\u00eetre ta route.
Dirige-moi par ta v\u00e9rit\u00e9, enseigne-moi,
car tu es le Dieu qui me sauve.

Rappelle-toi, Seigneur, ta tendresse,
ton amour qui est de toujours.
Oublie les r\u00e9voltes, les p\u00e9ch\u00e9s de ma jeunesse ;
dans ton amour, ne m\u2019oublie pas.

Il est droit, il est bon, le Seigneur,
lui qui montre aux p\u00e9cheurs le chemin.
Sa droiture dirige les humbles,
il enseigne aux humbles son chemin.` },
    gospel: { reference: "Matthieu 18, 21-35", text: `En ce temps-l\u00e0, Pierre s\u2019approcha de J\u00e9sus pour lui demander : \u00ab Seigneur, lorsque mon fr\u00e8re commettra des fautes contre moi, combien de fois dois-je lui pardonner ? Jusqu\u2019\u00e0 sept fois ? \u00bb J\u00e9sus lui r\u00e9pondit : \u00ab Je ne te dis pas jusqu\u2019\u00e0 sept fois, mais jusqu\u2019\u00e0 soixante-dix fois sept fois.

Ainsi, le royaume des Cieux est comparable \u00e0 un roi qui voulut r\u00e9gler ses comptes avec ses serviteurs. Il commen\u00e7ait, quand on lui amena quelqu\u2019un qui lui devait dix mille talents (c\u2019est-\u00e0-dire soixante millions de pi\u00e8ces d\u2019argent). Comme cet homme n\u2019avait pas de quoi rembourser, le ma\u00eetre ordonna de le vendre, avec sa femme, ses enfants et tous ses biens, en remboursement de sa dette. Alors, tombant \u00e0 ses pieds, le serviteur demeurait prostern\u00e9 et disait : \u201cPrens patience envers moi, et je te rembourserai tout.\u201d Saisi de compassion, le ma\u00eetre de ce serviteur le laissa partir et lui remit sa dette.

Mais, en sortant, ce serviteur trouva un de ses compagnons qui lui devait cent pi\u00e8ces d\u2019argent. Il se jeta sur lui pour l\u2019\u00e9trangler, en disant : \u201cRembourse ta dette !\u201d Son compagnon se jeta \u00e0 ses pieds et le supplia : \u201cPrens patience envers moi, et je te rembourserai.\u201d Mais l\u2019autre refusa et le fit jeter en prison jusqu\u2019\u00e0 ce qu\u2019il ait rembours\u00e9 ce qu\u2019il devait.

Ses compagnons, voyant cela, furent profond\u00e9ment atrist\u00e9s et all\u00e8rent raconter \u00e0 leur ma\u00eetre tout ce qui s\u2019\u00e9tait pass\u00e9. Alors celui-ci le fit appeler et lui dit : \u201cServiteur mauvais ! je t\u2019avais remis toute cette dette parce que tu m\u2019avais suppli\u00e9. Ne devais-tu pas, \u00e0 ton tour, avoir piti\u00e9 de ton compagnon, comme moi-m\u00eame j\u2019avais eu piti\u00e9 de toi ?\u201d Dans sa col\u00e8re, son ma\u00eetre le livra aux bourreaux jusqu\u2019\u00e0 ce qu\u2019il ait rembours\u00e9 tout ce qu\u2019il devait. C\u2019est ainsi que mon P\u00e8re du ciel vous traitera, si chacun de vous ne pardonne pas \u00e0 son fr\u00e8re du fond du c\u0153ur. \u00bb` },
  },

  "lent-3-mer": {
    firstReading: { reference: "Deut\u00e9ronome 4, 1.5-9", text: `Mo\u00efse disait au peuple : \u00ab Maintenant, Isra\u00ebl, \u00e9coute les d\u00e9crets et les ordonnances que je vous enseigne pour que vous les mettiez en pratique. Ainsi vous vivrez, vous entrerez, pour en prendre possession, dans le pays que vous donne le Seigneur, le Dieu de vos p\u00e8res. Voyez, je vous enseigne les d\u00e9crets et les ordonnances que le Seigneur mon Dieu m\u2019a donn\u00e9s pour que vous les mettiez en pratique dans le pays dont vous allez prendre possession. Vous les garderez, vous les mettrez en pratique ; ils seront votre sagesse et votre intelligence aux yeux de tous les peuples. Quand ceux-ci entendront parler de tous ces d\u00e9crets, ils s\u2019\u00e9crieront : \u201cIl n\u2019y a pas un peuple sage et intelligent comme cette grande nation !\u201d Quelle est en effet la grande nation dont les dieux soient aussi proches que le Seigneur notre Dieu est proche de nous chaque fois que nous l\u2019invoquons ? Et quelle est la grande nation qui ait des d\u00e9crets et des ordonnances aussi justes que toute cette Loi que je vous pr\u00e9sente aujourd\u2019hui ? Mais prends garde \u00e0 toi : garde-toi d\u2019oublier les choses que tes yeux ont vues ; ne les laisse pas sortir de ton c\u0153ur un seul jour. Enseigne-les \u00e0 tes fils, et aux fils de tes fils. \u00bb` },
    psalm: { reference: "Psaume 147 (147B)", text: `R/ Glorifie le Seigneur, J\u00e9rusalem !

Glorifie le Seigneur, J\u00e9rusalem !
C\u00e9l\u00e8bre ton Dieu, \u00f4 Sion !
Il a renforc\u00e9 les barres de tes portes,
dans tes murs il a b\u00e9ni tes enfants.

Il \u00e9tablit la paix \u00e0 tes fronti\u00e8res,
et d\u2019un pain de froment te rassasie.
Il envoie sa parole sur la terre :
rapide, son verbe la parcourt.

Il r\u00e9v\u00e8le sa parole \u00e0 Jacob,
ses d\u00e9crets et ses lois \u00e0 Isra\u00ebl.
Pas un peuple qu\u2019il ait ainsi trait\u00e9 ;
nul autre n\u2019a connu ses volont\u00e9s.` },
    gospel: { reference: "Matthieu 5, 17-19", text: `En ce temps-l\u00e0, J\u00e9sus disait \u00e0 ses disciples : \u00ab Ne pensez pas que je sois venu abolir la Loi ou les Proph\u00e8tes : je ne suis pas venu abolir, mais accomplir. Amen, je vous le dis : Avant que le ciel et la terre disparaissent, pas un seul iota, pas un seul trait ne dispara\u00eetra de la Loi jusqu\u2019\u00e0 ce que tout se r\u00e9alise. Donc, celui qui rejettera un seul de ces plus petits commandements, et qui enseignera aux hommes \u00e0 faire ainsi, sera d\u00e9clar\u00e9 le plus petit dans le royaume des Cieux. Mais celui qui les observera et les enseignera, celui-l\u00e0 sera d\u00e9clar\u00e9 grand dans le royaume des Cieux. \u00bb` },
  },

  "lent-3-jeu": {
    firstReading: { reference: "J\u00e9r\u00e9mie 7, 23-28", text: `Ainsi parle le Seigneur : Voici l\u2019ordre que j\u2019ai donn\u00e9 \u00e0 vos p\u00e8res : \u00ab \u00c9coutez ma voix : je serai votre Dieu, et vous serez mon peuple ; vous marcherez dans tous les chemins o\u00f9 je vous ordonne de marcher, afin que vous soyez heureux. \u00bb Mais ils n\u2019ont pas \u00e9cout\u00e9, ils n\u2019ont pas pr\u00eat\u00e9 l\u2019oreille : ils ont suivi les mauvais penchants de leur c\u0153ur endurci ; au lieu de me regarder, ils m\u2019ont tourn\u00e9 le dos. Depuis le jour o\u00f9 vos p\u00e8res ont quitt\u00e9 le pays d\u2019\u00c9gypte, jusqu\u2019\u00e0 ce jour, je vous ai envoy\u00e9 inlassablement tous mes serviteurs les proph\u00e8tes ; mais ils n\u2019ont pas \u00e9cout\u00e9, ils n\u2019ont pas pr\u00eat\u00e9 l\u2019oreille : ils ont raidi leur nuque, et ont fait pire que leurs p\u00e8res. Tu auras beau leur dire toutes ces paroles, ils ne t\u2019\u00e9couteront pas. Tu auras beau les appeler, ils ne te r\u00e9pondront pas. Alors tu leur diras : Voici la nation qui n\u2019\u00e9coute pas la voix du Seigneur son Dieu, et ne veut pas se laisser corriger. La fid\u00e9lit\u00e9 a disparu ; m\u00eame dans leur bouche, elle est supprim\u00e9e.` },
    psalm: { reference: "Psaume 94 (95)", text: `R/ Aujourd\u2019hui, ne fermez pas votre c\u0153ur, mais \u00e9coutez la voix du Seigneur !

Venez, crions de joie pour le Seigneur,
acclamons notre Rocher, notre salut !
Allons jusqu\u2019\u00e0 lui en rendant gr\u00e2ce,
par nos hymnes de f\u00eate acclamons-le !

Entrez, inclinez-vous, prosternez-vous,
adorons le Seigneur qui nous a faits.
Oui, il est notre Dieu ;
nous sommes le peuple qu\u2019il conduit.

Aujourd\u2019hui \u00e9couterez-vous sa parole ?
\u00ab Ne fermez pas votre c\u0153ur comme au d\u00e9sert,
o\u00f9 vos p\u00e8res m\u2019ont tent\u00e9 et provoqué,
alors qu\u2019ils avaient vu mon exploit. \u00bb` },
    gospel: { reference: "Luc 11, 14-23", text: `En ce temps-l\u00e0, J\u00e9sus expulsait un d\u00e9mon qui \u00e9tait muet. Lorsque le d\u00e9mon fut sorti, le muet se mit \u00e0 parler, et les foules furent dans l\u2019admiration. Mais certains d\u2019entre eux dirent : \u00ab C\u2019est par B\u00e9elz\u00e9boul, le chef des d\u00e9mons, qu\u2019il expulse les d\u00e9mons. \u00bb D\u2019autres, pour le mettre \u00e0 l\u2019\u00e9preuve, cherchaient \u00e0 obtenir de lui un signe venant du ciel.

J\u00e9sus, connaissant leurs pens\u00e9es, leur dit : \u00ab Tout royaume divis\u00e9 contre lui-m\u00eame devient un d\u00e9sert, ses maisons s\u2019\u00e9croulent les unes sur les autres. Si Satan, lui aussi, est divis\u00e9 contre lui-m\u00eame, comment son royaume tiendra-t-il ? Vous dites en effet que c\u2019est par B\u00e9elz\u00e9boul que j\u2019expulse les d\u00e9mons. Mais si c\u2019est par B\u00e9elz\u00e9boul que moi, je les expulse, vos disciples, par qui les expulsent-ils ? D\u00e8s lors, ce sont eux qui seront vos juges. Mais, si c\u2019est par le doigt de Dieu que j\u2019expulse les d\u00e9mons, c\u2019est donc que le r\u00e8gne de Dieu est arriv\u00e9 jusqu\u2019\u00e0 vous.

Quand l\u2019homme fort, et bien arm\u00e9, garde son palais, tout ce qui lui appartient est en s\u00e9curit\u00e9. Mais si un plus fort survient et triomphe de lui, il lui enl\u00e8ve son armement, auquel il se fiait, et il distribue tout ce dont il l\u2019a d\u00e9pouill\u00e9. Celui qui n\u2019est pas avec moi est contre moi ; celui qui ne rassemble pas avec moi disperse. \u00bb` },
  },

  "lent-3-ven": {
    firstReading: { reference: "Os\u00e9e 14, 2-10", text: `Ainsi parle le Seigneur : Reviens, Isra\u00ebl, au Seigneur ton Dieu ; car tu t\u2019es effondr\u00e9 par suite de tes fautes. Prenez avec vous des paroles, et revenez au Seigneur. Dites-lui : \u00ab Enl\u00e8ve toutes les fautes, et accepte ce qui est bon. Au lieu de taureaux, nous t\u2019offrirons en sacrifice les paroles de nos l\u00e8vres. Assour ne nous sauvera pas, nous ne monterons plus sur des chevaux, nous ne dirons plus : \u201cNotre Dieu !\u201d \u00e0 l\u2019ouvrage de nos mains, car de toi seul l\u2019orphelin re\u00e7oit la compassion. \u00bb

Je gu\u00e9rirai leur infid\u00e9lit\u00e9, je les aimerai d\u2019un amour gratuit, car ma col\u00e8re s\u2019est d\u00e9tourn\u00e9e d\u2019Isra\u00ebl. Je serai pour Isra\u00ebl comme la ros\u00e9e, il fleurira comme le lis, il \u00e9tendra ses racines comme les arbres du Liban. Ses jeunes pousses s\u2019\u00e9tendront, il aura la splendeur de l\u2019olivier et le parfum du Liban. Ils reviendront s\u2019asseoir \u00e0 son ombre, ils feront revivre le froment, ils fleuriront comme la vigne, ils seront renomm\u00e9s comme le vin du Liban. \u00c9phra\u00efm ! Qu\u2019ai-je encore \u00e0 faire avec les idoles ? C\u2019est moi qui l\u2019exauce et le comble. Je suis comme un cypr\u00e8s toujours vert, c\u2019est gr\u00e2ce \u00e0 moi que tu portes du fruit. Qui est assez sage pour comprendre ces choses, assez intelligent pour les saisir ? Oui, les chemins du Seigneur sont droits : les justes y avancent, mais les p\u00e9cheurs y tr\u00e9buchent.` },
    psalm: { reference: "Psaume 80 (81)", text: `R/ C\u2019est moi, le Seigneur ton Dieu, \u00e9coute ma voix.

\u00c9coute, mon peuple, je t\u2019adjure !
Isra\u00ebl, si tu voulais m\u2019\u00e9couter !
Tu n\u2019auras pas chez toi d\u2019autre dieu,
tu ne te prosterneras pas devant un dieu \u00e9tranger.

C\u2019est moi, le Seigneur ton Dieu,
qui t\u2019ai fait monter de la terre d\u2019\u00c9gypte.
Ouvre ta bouche, et moi, je l\u2019emplirai.

Ah ! si mon peuple m\u2019\u00e9coutait,
Isra\u00ebl, s\u2019il allait sur mes chemins !
Je le nourrirais de la fleur du froment,
je le rassasierais avec le miel du rocher.` },
    gospel: { reference: "Marc 12, 28b-34", text: `En ce temps-l\u00e0, un scribe qui avait entendu la discussion et voyait que J\u00e9sus avait bien r\u00e9pondu, s\u2019avan\u00e7a pour lui demander : \u00ab Quel est le premier de tous les commandements ? \u00bb J\u00e9sus lui fit cette r\u00e9ponse : \u00ab Voici le premier : \u00c9coute, Isra\u00ebl : le Seigneur notre Dieu est l\u2019unique Seigneur. Tu aimeras le Seigneur ton Dieu de tout ton c\u0153ur, de toute ton \u00e2me, de tout ton esprit et de toute ta force. Et voici le second : Tu aimeras ton prochain comme toi-m\u00eame. Il n\u2019y a pas de commandement plus grand que ceux-l\u00e0. \u00bb

Le scribe reprit : \u00ab Fort bien, Ma\u00eetre, tu as dit vrai : Dieu est l\u2019Unique et il n\u2019y en a pas d\u2019autre que lui. L\u2019aimer de tout son c\u0153ur, de toute son intelligence, de toute sa force, et aimer son prochain comme soi-m\u00eame, vaut mieux que toute offrande d\u2019holocaustes et de sacrifices. \u00bb J\u00e9sus, voyant qu\u2019il avait r\u00e9pondu de fa\u00e7on sens\u00e9e, lui dit : \u00ab Tu n\u2019es pas loin du royaume de Dieu. \u00bb Et personne n\u2019osait plus l\u2019interroger.` },
  },

  "lent-3-sam": {
    firstReading: { reference: "Os\u00e9e 6, 1-6", text: `Venez, retournons vers le Seigneur ! Il nous a d\u00e9chir\u00e9s, il nous gu\u00e9rira ; il nous a frapp\u00e9s, il pansera nos plaies. Apr\u00e8s deux jours, il nous rendra la vie ; le troisi\u00e8me jour, il nous rel\u00e8vera et nous vivrons en sa pr\u00e9sence. Effor\u00e7ons-nous de conna\u00eetre le Seigneur : son lever est aussi s\u00fbr que l\u2019aurore ; il viendra vers nous comme la pluie, comme l\u2019ond\u00e9e qui arrose la terre.

\u00ab Que vais-je te faire, \u00c9phra\u00efm ? Que vais-je te faire, Juda ? Votre pi\u00e9t\u00e9 est comme la nu\u00e9e du matin, comme la ros\u00e9e qui s\u2019\u00e9vapore \u00e0 l\u2019aurore. Voil\u00e0 pourquoi j\u2019ai frapp\u00e9 par mes proph\u00e8tes, je les ai tu\u00e9s par les paroles de ma bouche, et mon jugement jaillira comme la lumi\u00e8re. Car c\u2019est l\u2019amour que je d\u00e9sire, et non les sacrifices, la connaissance de Dieu plut\u00f4t que les holocaustes. \u00bb` },
    psalm: { reference: "Psaume 50 (51)", text: `R/ C\u2019est l\u2019amour que je d\u00e9sire, et non les sacrifices.

Piti\u00e9, mon Dieu, dans ton amour,
selon ta grande mis\u00e9ricorde, efface mon p\u00e9ch\u00e9.
Lave-moi tout entier de ma faute,
purifie-moi de mon offense.

Oui, je connais mon p\u00e9ch\u00e9,
ma faute est toujours devant moi.
Contre toi, et toi seul, j\u2019ai p\u00e9ch\u00e9,
ce qui est mal \u00e0 tes yeux, je l\u2019ai fait.

Si j\u2019offre un sacrifice, tu n\u2019en veux pas,
tu ne prends aucun plaisir \u00e0 l\u2019holocauste.
Le sacrifice qui pla\u00eet \u00e0 Dieu, c\u2019est un esprit bris\u00e9 ;
tu ne m\u00e9prises pas, \u00f4 mon Dieu, un c\u0153ur bris\u00e9 et broy\u00e9.` },
    gospel: { reference: "Luc 18, 9-14", text: `En ce temps-l\u00e0, \u00e0 l\u2019adresse de certains qui \u00e9taient convaincus d\u2019\u00eatre justes et qui m\u00e9prisaient les autres, J\u00e9sus dit la parabole que voici : \u00ab Deux hommes mont\u00e8rent au Temple pour prier. L\u2019un \u00e9tait pharisien, et l\u2019autre, publicain (c\u2019est-\u00e0-dire un collecteur d\u2019imp\u00f4ts).

Le pharisien se tenait debout et priait en lui-m\u00eame : \u201cMon Dieu, je te rends gr\u00e2ce parce que je ne suis pas comme les autres hommes \u2013 Loss, injustes, adult\u00e8res \u2013, ou encore comme ce publicain. Je je\u00fbne deux fois par semaine et je verse le dixi\u00e8me de tout ce que je gagne.\u201d

Le publicain, lui, se tenait \u00e0 distance et n\u2019osait m\u00eame pas lever les yeux vers le ciel ; mais il se frappait la poitrine, en disant : \u201cMon Dieu, montre-toi favorable au p\u00e9cheur que je suis !\u201d

Je vous le d\u00e9clare : quand ce dernier redescendit dans sa maison, c\u2019est lui qui \u00e9tait devenu un homme juste, plut\u00f4t que l\u2019autre. Qui s\u2019\u00e9l\u00e8ve sera abaiss\u00e9 ; qui s\u2019abaisse sera \u00e9lev\u00e9. \u00bb` },
  },

  // ===== 4ème SEMAINE DE CARÊME =====

  "lent-4-lun": {
    firstReading: { reference: "Isaïe 65, 17-21", text: `Ainsi parle le Seigneur : « Voici que je crée des cieux nouveaux et une terre nouvelle ; on ne se souviendra plus du passé, il ne reviendra plus à l’esprit. Soyez plutôt dans la joie, exultez sans fin pour ce que je crée. Car je vais créer Jérusalem, pour qu’elle soit exultation, et son peuple, pour qu’il soit joie. J’exulterai en Jérusalem, je trouverai ma joie dans mon peuple. On n’y entendra plus de pleurs ni de cris. Ils bâtiront des maisons et les habiteront ; ils planteront des vignes et en mangeront les fruits. »` },
    psalm: { reference: "Psaume 29 (30)", text: `R/ Je t’exalte, Seigneur : tu m’as relevé.

Je t’exalte, Seigneur : tu m’as relevé, tu m’as épargné l’abîme. Sa colère ne dure qu’un instant, sa bonté, toute la vie. Avec le soir, viennent les larmes, mais au matin, les cris de joie ! Tu as changé mon deuil en une danse ; que sans fin, Seigneur, mon Dieu, je te rende grâce !` },
    gospel: { reference: "Jean 4, 43-54", text: `En ce temps-là, Jésus partit pour la Galilée. Or, il y avait un fonctionnaire royal, dont le fils était malade à Capharnam. Il alla trouver Jésus ; il lui demandait de descendre guérir son fils qui allait mourir. Jésus lui dit : « Si vous ne voyez pas de signes et de prodiges, vous ne croirez donc pas ! » Le fonctionnaire lui dit : « Seigneur, descends, avant que mon enfant ne meure ! » Jésus lui répondit : « Va, ton fils est vivant. » L’homme crut à la parole que Jésus lui avait dite et il partit. Pendant qu’il descendait, ses serviteurs arrivèrent à sa rencontre et lui dirent que son enfant était vivant. Ils lui dirent : « C’est hier, à la septième heure, que la fièvre l’a quitté. » Le père reconnut que c’était justement l’heure où Jésus lui avait dit : « Ton fils est vivant. » Alors il crut, lui, ainsi que tous les gens de sa maison.` },
  },

  "lent-4-mar": {
    firstReading: { reference: "Ézéchiel 47, 1-9.12", text: `En ces jours-là, de l’eau sortait de dessous le seuil de la Maison, vers l’orient. L’homme mesura mille coudées et me fit traverser l’eau : j’en avais jusqu’aux chevilles. Il mesura encore mille coudées : j’en avais jusqu’aux genoux. Encore mille coudées : j’en avais jusqu’à la taille. Encore mille coudées ; c’était un torrent infranchissable. Il me dit : « Cette eau assainit les eaux de la mer Morte. Au bord du torrent, des arbres fruitiers pousseront ; leur feuillage ne se flétrira pas et leurs fruits ne manqueront pas. Les fruits seront une nourriture, et les feuilles un remède. »` },
    psalm: { reference: "Psaume 45 (46)", text: `R/ Le Seigneur de l’univers est avec nous.

Dieu est pour nous refuge et force, secours dans la détresse. Le Fleuve, ses bras réjouissent la ville de Dieu. Dieu s’y tient : elle est inébranlable. Le Seigneur de l’univers est avec nous, notre citadelle, c’est le Dieu de Jacob !` },
    gospel: { reference: "Jean 5, 1-16", text: `À l’occasion d’une fête juive, Jésus monta à Jérusalem. Il y avait là un homme, malade depuis trente-huit ans. Jésus lui dit : « Veux-tu être guéri ? » Le malade répondit : « Seigneur, je n’ai personne pour me plonger dans la piscine. » Jésus lui dit : « Lève-toi, prends ton brancard, et marche. » Et aussitôt l’homme fut guéri. Or, ce jour-là était un jour de sabbat. Les Juifs dirent : « C’est le sabbat ! » Plus tard, Jésus le retrouve et lui dit : « Te voilà guéri. Ne pèche plus. » Et voilà pourquoi les Juifs persécutaient Jésus : parce qu’il avait fait cela le jour du sabbat.` },
  },

  "lent-4-mer": {
    firstReading: { reference: "Isaïe 49, 8-15", text: `Ainsi parle le Seigneur : « Au temps favorable, je t’ai exaucé. » Cieux, criez de joie ! Car le Seigneur console son peuple. Jérusalem disait : « Le Seigneur m’a abandonnée. » Une femme peut-elle oublier son nourrisson ? Même si elle l’oubliait, moi, je ne t’oublierai pas – dit le Seigneur.` },
    psalm: { reference: "Psaume 144 (145)", text: `R/ Le Seigneur est tendresse et pitié.

Le Seigneur est tendresse et pitié, lent à la colère et plein d’amour ; la bonté du Seigneur est pour tous, sa tendresse, pour toutes ses œuvres. Le Seigneur soutient tous ceux qui tombent, il redresse tous les accablés.` },
    gospel: { reference: "Jean 5, 17-30", text: `En ce temps-là, Jésus déclara aux Juifs : « Mon Père est toujours à l’œuvre, et moi aussi, je suis à l’œuvre. » Jésus reprit : « Amen, amen, je vous le dis : le Fils ne peut rien faire de lui-même. Celui qui écoute ma parole et croit en Celui qui m’a envoyé, obtient la vie éternelle. »` },
  },

  "lent-4-jeu": {
    firstReading: { reference: "Exode 32, 7-14", text: `En ces jours-là, le Seigneur parla à Moïse : « Va, descends, ton peuple s’est corrompu. » Moïse apaisa le Seigneur : « Souviens-toi de tes serviteurs, Abraham, Isaac et Israël. » Le Seigneur renonça au mal qu’il avait voulu faire à son peuple.` },
    psalm: { reference: "Psaume 105 (106)", text: `R/ Seigneur, souviens-toi de nous.

Nous avons péché tout comme nos pères. À l’Horeb ils fabriquent un veau. Ils oubliaient le Dieu qui les sauve. C’est alors que Moïse surgit sur la brèche pour empêcher que sa fureur les détruise.` },
    gospel: { reference: "Jean 5, 31-47", text: `En ce temps-là, Jésus disait aux Juifs : « J’ai pour moi un témoignage plus grand que celui de Jean : ce sont les œuvres que le Père m’a donné d’accomplir. Vous scrutez les Écritures ; or, ce sont les Écritures qui me rendent témoignage. Votre accusateur, c’est Moïse. »` },
  },

  "lent-4-ven": {
    firstReading: { reference: "Sagesse 2, 1a.12-22", text: `Les impies raisonnent ainsi : « Attirons le juste dans un piège. Si le juste est fils de Dieu, Dieu l’assistera. Soumettons-le à des outrages. Condamnons-le à une mort infâme. » Ils s’égarent ; leur méchanceté les a rendus aveugles.` },
    psalm: { reference: "Psaume 33 (34)", text: `R/ Le Seigneur est proche du cœur brisé.

Je bénirai le Seigneur en tout temps. Le Seigneur est proche du cœur brisé, il sauve les esprits abattus.` },
    gospel: { reference: "Jean 7, 1-2.10.25-30", text: `En ce temps-là, Jésus parcourait la Galilée. La fête des Tentes était proche. Jésus y monta en secret. Jésus s’écria : « Celui qui m’a envoyé dit la vérité, lui que vous ne connaissez pas. Moi, je le connais parce que je viens d’auprès de lui. » On cherchait à l’arrêter, mais son heure n’était pas encore venue.` },
  },

  "lent-4-sam": {
    firstReading: { reference: "Jérémie 11, 18-20", text: `Seigneur, tu m’as fait savoir. Moi, j’étais comme un agneau docile qu’on emmène à l’abattoir. Ils disaient : « Coupons l’arbre à la racine. » Seigneur de l’univers, toi qui juges avec justice, c’est à toi que j’ai remis ma cause.` },
    psalm: { reference: "Psaume 7", text: `R/ Seigneur mon Dieu, tu es mon refuge !

Seigneur mon Dieu, tu es mon refuge ! Juge-moi, Seigneur, sur ma justice. Je rendrai grâce au Seigneur, le Très-Haut.` },
    gospel: { reference: "Jean 7, 40-53", text: `En ce temps-là, dans la foule, certains disaient : « C’est le Christ ! » Mais d’autres : « Le Christ peut-il venir de Galilée ? » La foule se divisa. Les gardes répondirent : « Jamais un homme n’a parlé de la sorte ! » Nicodème leur dit : « Notre Loi permet-elle de juger un homme sans l’entendre d’abord ? » Puis ils s’en allèrent chacun chez soi.` },
  },

  // ===== 5ème SEMAINE DE CARÊME =====

  "lent-5-lun": {
    firstReading: { reference: "Daniel 13, 1-9.15-17.19-30.33-62", text: `En ces jours-là, à Babylone, Suzanne craignait le Seigneur. Deux anciens furent enfl’ammés de désir pour elle. Suzanne gémit : « Je préfère tomber entre vos mains plutôt que de pécher aux yeux du Seigneur. » Dieu éveilla l’esprit de Daniel. Il confondit les deux vieillards. Ainsi fut sauvé le sang innocent.` },
    psalm: { reference: "Psaume 22 (23)", text: `R/ Le Seigneur est mon berger.

Le Seigneur est mon berger : je ne manque de rien. Si je traverse les ravins de la mort, je ne crains aucun mal. Grâce et bonheur m’accompagnent tous les jours de ma vie.` },
    gospel: { reference: "Jean 8, 1-11", text: `En ce temps-là, les scribes et les pharisiens amènent une femme surprise en situation d’adultère. Jésus leur dit : « Celui d’entre vous qui est sans péché, qu’il soit le premier à lui jeter une pierre. » Ils s’en allaient l’un après l’autre. Jésus dit à la femme : « Moi non plus, je ne te condamne pas. Va, et désormais ne pèche plus. »` },
  },

  "lent-5-mar": {
    firstReading: { reference: "Nombres 21, 4-9", text: `En ces jours-là, le peuple perdit courage dans le désert. Le Seigneur envoya des serpents à la morsure brûlante. Le Seigneur dit à Moïse : « Fais-toi un serpent de bronze, dresse-le au sommet d’un mât : ceux qui auront été mordus, qu’ils le regardent, et ils vivront ! »` },
    psalm: { reference: "Psaume 101 (102)", text: `R/ Seigneur, écoute ma prière.

Seigneur, entends ma prière : que mon cri parvienne jusqu’à toi ! Quand le Seigneur rebâtira Sion, quand il apparaîtra dans sa gloire.` },
    gospel: { reference: "Jean 8, 21-30", text: `En ce temps-là, Jésus disait : « Je m’en vais ; vous mourrez dans votre péché. Si vous ne croyez pas que moi, JE SUIS, vous mourrez dans vos péchés. Quand vous aurez élevé le Fils de l’homme, alors vous comprendrez que moi, JE SUIS. » Beaucoup crurent en lui.` },
  },

  "lent-5-mer": {
    firstReading: { reference: "Daniel 3, 14-20.91-92.95", text: `En ces jours-là, Nabucodonosor dit : « Vous refusez de vous prosterner devant la statue d’or ? » Sidrak, Midrak et Abdénago répondirent : « Si notre Dieu peut nous délivrer, il nous délivrera. Mais nous ne servirons pas tes dieux. » On les jeta dans la fournaise. Le roi fut stupéfait : « Je vois quatre hommes libres au milieu du feu. » Nabucodonosor s’écria : « Béni soit le Dieu de Sidrak, Midrak et Abdénago ! »` },
    psalm: { reference: "Daniel 3, 52-56", text: `R/ À toi, louange et gloire éternellement !

Béni sois-tu, Seigneur, Dieu de nos pères : à toi, louange et gloire éternellement ! Béni soit le nom très saint de ta gloire : à toi, louange et gloire éternellement !` },
    gospel: { reference: "Jean 8, 31-42", text: `En ce temps-là, Jésus disait : « Si vous demeurez fidèles à ma parole, vous êtes vraiment mes disciples ; alors vous connaîtrez la vérité, et la vérité vous rendra libres. » Ils répliquèrent : « Nous sommes la descendance d’Abraham. » Jésus répondit : « Si Dieu était votre Père, vous m’aimeriez, car moi, c’est de Dieu que je suis sorti. »` },
  },

  "lent-5-jeu": {
    firstReading: { reference: "Genèse 17, 3-9", text: `En ces jours-là, Abram tomba face contre terre. Dieu lui parla : « Ton nom sera Abraham. J’établirai mon alliance entre moi et toi ; ce sera une alliance éternelle. » Dieu dit à Abraham : « Toi, tu garderas mon alliance, de génération en génération. »` },
    psalm: { reference: "Psaume 104 (105)", text: `R/ Le Seigneur s’est toujours souvenu de son alliance.

Cherchez le Seigneur et sa puissance. Il s’est toujours souvenu de son alliance, promesse faite à Abraham.` },
    gospel: { reference: "Jean 8, 51-59", text: `En ce temps-là, Jésus disait : « Si quelqu’un garde ma parole, jamais il ne verra la mort. » Les Juifs dirent : « Es-tu plus grand qu’Abraham ? » Jésus répondit : « Avant qu’Abraham fût, moi, JE SUIS. » Alors ils ramassèrent des pierres. Mais Jésus se cacha et sortit du Temple.` },
  },

  "lent-5-ven": {
    firstReading: { reference: "Jérémie 20, 10-13", text: `Moi, Jérémie, j’entends les calomnies de la foule. Mais le Seigneur est avec moi, tel un guerrier redoutable. Chantez le Seigneur : il a délivré le malheureux de la main des méchants.` },
    psalm: { reference: "Psaume 17 (18)", text: `R/ Dans mon angoisse, j’ai crié vers le Seigneur.

Je t’aime, Seigneur, ma force. Dans mon angoisse, j’ai crié vers le Seigneur ; de son temple il a entendu ma voix.` },
    gospel: { reference: "Jean 10, 31-42", text: `En ce temps-là, des Juifs prirent des pierres pour lapider Jésus. Il dit : « Pour laquelle de ces œuvres voulez-vous me lapider ? » Ils répondirent : « Tu te fais Dieu. » Jésus répliqua : « Si je fais les œuvres de mon Père, croyez les œuvres. » Beaucoup crurent en lui.` },
  },

  "lent-5-sam": {
    firstReading: { reference: "Ézéchiel 37, 21-28", text: `Ainsi parle le Seigneur Dieu : « Je vais prendre les fils d’Israël parmi les nations. J’en ferai une seule nation. Mon serviteur David sera leur unique pasteur. Je conclurai avec eux une alliance de paix éternelle. Mon sanctuaire sera au milieu d’eux pour toujours. »` },
    psalm: { reference: "Jérémie 31, 10-13", text: `R/ Le Seigneur nous garde, comme un berger son troupeau.

Celui qui a dispersé Israël le rassemble. Le Seigneur a racheté Jacob. Je change leur deuil en joie.` },
    gospel: { reference: "Jean 11, 45-56", text: `En ce temps-là, beaucoup de Juifs crurent en Jésus. Caïphe dit : « Il vaut mieux qu’un seul homme meure pour le peuple. » Il prophétisa que Jésus allait mourir pour la nation. À partir de ce jour-là, ils décidèrent de le tuer.` },
  },

  // ===== SEMAINE SAINTE =====

  "holy-week-lun": {
    firstReading: { reference: "Isaïe 42, 1-7", text: `Ainsi parle le Seigneur : « Voici mon serviteur que je soutiens, mon élu qui a toute ma faveur. J’ai fait reposer sur lui mon esprit ; aux nations, il proclamera le droit. Il ne brisera pas le roseau qui fléchit, il n’éteindra pas la mèche qui faiblit. Moi, le Seigneur, je fais de toi l’alliance du peuple, la lumière des nations ; tu ouvriras les yeux des aveugles, tu feras sortir les captifs de leur prison. »` },
    psalm: { reference: "Psaume 26 (27)", text: `R/ Le Seigneur est ma lumière et mon salut.

Le Seigneur est ma lumière et mon salut ; de qui aurais-je crainte ? J’en suis sûr, je verrai les bontés du Seigneur sur la terre des vivants. « Espère le Seigneur, sois fort et prends courage. »` },
    gospel: { reference: "Jean 12, 1-11", text: `Six jours avant la Pâque, Jésus vint à Béthanie. Marie prit une livre d’un parfum très pur ; elle le répandit sur les pieds de Jésus, qu’elle essuya avec ses cheveux. Judas Iscariote dit : « Pourquoi n’a-t-on pas vendu ce parfum ? » Jésus lui dit : « Laisse-la. Des pauvres, vous en aurez toujours avec vous, mais moi, vous ne m’aurez pas toujours. » Les grands prêtres décidèrent de tuer aussi Lazare.` },
  },

  "holy-week-mar": {
    firstReading: { reference: "Isaïe 49, 1-6", text: `Écoutez-moi, îles lointaines ! J’étais encore dans le sein maternel quand le Seigneur m’a appelé. Il m’a dit : « Tu es mon serviteur, en toi je manifesterai ma splendeur. » Et il dit : « Je fais de toi la lumière des nations, pour que mon salut parvienne jusqu’aux extrémités de la terre. »` },
    psalm: { reference: "Psaume 70 (71)", text: `R/ Ma bouche annonce tout le jour tes actes de justice.

En toi, Seigneur, j’ai mon refuge. Ma bouche annonce tout le jour tes actes de justice et de salut.` },
    gospel: { reference: "Jean 13, 21-33.36-38", text: `En ce temps-là, au cours du repas, Jésus fut bouleversé : « Amen, amen, je vous le dis : l’un de vous me livrera. » Judas prit la bouchée. Satan entra en lui. Jésus lui dit : « Ce que tu fais, fais-le vite. » Judas sortit. Il faisait nuit. Jésus déclara : « Maintenant le Fils de l’homme est glorifié. » Pierre lui dit : « Je donnerai ma vie pour toi ! » Jésus réplique : « Le coq ne chantera pas avant que tu m’aies renié trois fois. »` },
  },

  "holy-week-mer": {
    firstReading: { reference: "Isaïe 50, 4-9a", text: `Le Seigneur mon Dieu m’a donné le langage des disciples, pour que je puisse soutenir celui qui est épuisé. Chaque matin, il éveille mon oreille. J’ai présenté mon dos à ceux qui me frappaient. Je n’ai pas caché ma face devant les outrages et les crachats. Le Seigneur mon Dieu vient à mon secours. Il est proche, Celui qui me justifie. Qui donc me condamnera ?` },
    psalm: { reference: "Psaume 68 (69)", text: `R/ Dans ton grand amour, Dieu, réponds-moi.

C’est pour toi que j’endure l’insulte. Dans ton grand amour, Dieu, réponds-moi. Les pauvres l’ont vu, ils sont en fête : « Vie et joie, à vous qui cherchez Dieu ! »` },
    gospel: { reference: "Matthieu 26, 14-25", text: `En ce temps-là, Judas Iscariote se rendit chez les grands prêtres et dit : « Que voulez-vous me donner, si je vous le livre ? » Ils lui remirent trente pièces d’argent. Le soir venu, Jésus déclara : « Amen, je vous le dis : l’un de vous va me livrer. » Profondément attristés, ils demandaient : « Serait-ce moi, Seigneur ? » Judas dit : « Rabbi, serait-ce moi ? » Jésus lui répond : « C’est toi-même qui l’as dit ! »` },
  },
};
