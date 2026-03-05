import type { Reading } from "./readings";

interface ReadingSet {
  firstReading: Reading;
  psalm: Reading;
  gospel: Reading;
  secondReading?: Reading;
}

export const sundaysYearA: Record<string, ReadingSet> = {
  // ===================== AVENT =====================
  "advent-1-sun": {
    firstReading: {
      reference: "Isaïe 2, 1-5",
      text: `Parole d'Isaïe sur Juda et Jérusalem. Il arrivera dans les derniers jours que la montagne de la Maison du Seigneur se tiendra plus haut que les monts. Toutes les nations afflueront vers elle. De Sion sortira la Loi, de Jérusalem, la parole du Seigneur. Venez, marchons à la lumière du Seigneur.`,
    },
    psalm: {
      reference: "Psaume 121 (122)",
      text: `Quelle joie quand on m'a dit : « Nous irons à la maison du Seigneur ! » Maintenant notre marche prend fin devant tes portes, Jérusalem ! Appelez le bonheur sur Jérusalem : « Paix à ceux qui t'aiment ! »`,
    },
    secondReading: {
      reference: "Romains 13, 11-14a",
      text: `Frères, vous le savez : c'est le moment, l'heure est déjà venue de sortir de votre sommeil. Car le salut est plus près de nous maintenant. La nuit est bientôt finie, le jour est tout proche. Revêtons-nous des armes de la lumière.`,
    },
    gospel: {
      reference: "Matthieu 24, 37-44",
      text: `En ce temps-là, Jésus disait à ses disciples : « Comme il en fut aux jours de Noé, ainsi en sera-t-il lors de la venue du Fils de l'homme. Tenez-vous donc prêts, vous aussi : c'est à l'heure où vous n'y penserez pas que le Fils de l'homme viendra. »`,
    },
  },
  "advent-2-sun": {
    firstReading: {
      reference: "Isaïe 11, 1-10",
      text: `Un rameau sortira de la souche de Jessé, un rejeton jaillira de ses racines. Sur lui reposera l'esprit du Seigneur. Il ne jugera pas sur l'apparence, il ne se prononcera pas sur des rumeurs. Le loup habitera avec l'agneau, le nourrisson s'amusera sur le nid du cobra.`,
    },
    psalm: {
      reference: "Psaume 71 (72)",
      text: `Dieu, donne au roi tes pouvoirs, à ce fils de roi ta justice. En ces jours-là, fleurira la justice, grande paix jusqu'à la fin des lunes ! Il dominera de la mer à la mer, et du Fleuve jusqu'au bout de la terre.`,
    },
    secondReading: {
      reference: "Romains 15, 4-9",
      text: `Frères, tout ce qui a été écrit à l'avance dans les livres saints l'a été pour notre instruction. Accueillez-vous donc les uns les autres, comme le Christ vous a accueillis pour la gloire de Dieu.`,
    },
    gospel: {
      reference: "Matthieu 3, 1-12",
      text: `En ces jours-là, paraît Jean le Baptiste, qui proclame dans le désert de Judée : « Convertissez-vous, car le royaume des Cieux est tout proche. » Moi, je vous baptise dans l'eau, en vue de la conversion. Celui qui vient derrière moi est plus fort que moi ; lui vous baptisera dans l'Esprit Saint et le feu.`,
    },
  },
  "advent-3-sun": {
    firstReading: {
      reference: "Isaïe 35, 1-6a.10",
      text: `Le désert et la terre de la soif, qu'ils se réjouissent ! Le pays aride, qu'il exulte et fleurisse ! Alors se dessilleront les yeux des aveugles, et s'ouvriront les oreilles des sourds. Alors le boiteux bondira comme un cerf, et la bouche du muet criera de joie.`,
    },
    psalm: {
      reference: "Psaume 145 (146)",
      text: `Le Seigneur fait justice aux opprimés, aux affamés, il donne le pain. Le Seigneur délie les enchaînés, le Seigneur ouvre les yeux des aveugles, le Seigneur redresse les accablés.`,
    },
    secondReading: {
      reference: "Jacques 5, 7-10",
      text: `Frères, en attendant la venue du Seigneur, prenez patience. Voyez le cultivateur : il attend les fruits précieux de la terre avec patience. Prenez pour modèles d'endurance et de patience les prophètes qui ont parlé au nom du Seigneur.`,
    },
    gospel: {
      reference: "Matthieu 11, 2-11",
      text: `En ce temps-là, Jean le Baptiste entendit parler des œuvres réalisées par le Christ. Il lui envoya ses disciples pour lui demander : « Es-tu celui qui doit venir, ou devons-nous en attendre un autre ? » Jésus leur répondit : « Les aveugles retrouvent la vue, les boiteux marchent, la Bonne Nouvelle est annoncée aux pauvres. »`,
    },
  },
  "advent-4-sun": {
    firstReading: {
      reference: "Isaïe 7, 10-14",
      text: `En ces jours-là, le Seigneur parla ainsi au roi Acaz : « Demande pour toi un signe de la part du Seigneur ton Dieu. » Acaz répondit : « Je n'en demanderai pas. » Alors Isaïe dit : « Le Seigneur lui-même vous donnera un signe : Voici que la vierge est enceinte, elle enfantera un fils, qu'elle appellera Emmanuel. »`,
    },
    psalm: {
      reference: "Psaume 23 (24)",
      text: `Au Seigneur, le monde et sa richesse, la terre et tous ses habitants ! C'est lui qui l'a fondée sur les mers. Portes, levez vos frontons : qu'il entre, le roi de gloire ! Qui est ce roi de gloire ? C'est le Seigneur, Dieu de l'univers.`,
    },
    secondReading: {
      reference: "Romains 1, 1-7",
      text: `Paul, serviteur du Christ Jésus, appelé à être apôtre, mis à part pour l'Évangile de Dieu. Cet Évangile, concernant son Fils, né de la descendance de David selon la chair, établi dans sa puissance de Fils de Dieu par sa résurrection d'entre les morts.`,
    },
    gospel: {
      reference: "Matthieu 1, 18-24",
      text: `Voici comment fut engendré Jésus Christ : Marie, sa mère, avait été accordée en mariage à Joseph ; avant qu'ils aient habité ensemble, elle fut enceinte par l'action de l'Esprit Saint. L'ange du Seigneur lui apparut en songe et lui dit : « Joseph, fils de David, ne crains pas de prendre chez toi Marie, ton épouse. Elle enfantera un fils, et tu lui donneras le nom de Jésus. »`,
    },
  },

  // ===================== NOËL / ÉPIPHANIE =====================
  "feast-12-25": {
    firstReading: {
      reference: "Isaïe 52, 7-10",
      text: `Comme ils sont beaux sur les montagnes, les pas du messager, celui qui annonce la paix, qui porte la bonne nouvelle, qui annonce le salut ! Tous les lointains de la terre ont vu le salut de notre Dieu.`,
    },
    psalm: {
      reference: "Psaume 97 (98)",
      text: `La terre tout entière a vu le salut de notre Dieu. Chantez au Seigneur un chant nouveau, car il a fait des merveilles. Sa main droite et son bras très saint lui ont donné la victoire.`,
    },
    secondReading: {
      reference: "Hébreux 1, 1-6",
      text: `À bien des reprises et de bien des manières, Dieu, dans le passé, a parlé à nos pères par les prophètes ; mais à la fin, en ces jours où nous sommes, il nous a parlé par son Fils qu'il a établi héritier de toutes choses et par qui il a créé les mondes.`,
    },
    gospel: {
      reference: "Jean 1, 1-18",
      text: `Au commencement était le Verbe, et le Verbe était auprès de Dieu, et le Verbe était Dieu. En lui était la vie, et la vie était la lumière des hommes. Et le Verbe s'est fait chair, il a habité parmi nous, et nous avons vu sa gloire, plein de grâce et de vérité.`,
    },
  },
  "feast-01-01": {
    firstReading: {
      reference: "Nombres 6, 22-27",
      text: `Le Seigneur parla à Moïse. Il dit : « Voici en quels termes vous bénirez les fils d'Israël : Que le Seigneur te bénisse et te garde ! Que le Seigneur fasse briller sur toi son visage, qu'il te prenne en grâce ! Que le Seigneur tourne vers toi son visage, qu'il t'apporte la paix ! »`,
    },
    psalm: {
      reference: "Psaume 66 (67)",
      text: `Que Dieu nous prenne en grâce et nous bénisse, que son visage s'illumine pour nous ; et ton chemin sera connu sur la terre, ton salut, parmi toutes les nations.`,
    },
    secondReading: {
      reference: "Galates 4, 4-7",
      text: `Frères, lorsqu'est venue la plénitude des temps, Dieu a envoyé son Fils, né d'une femme et soumis à la loi de Moïse, afin de racheter ceux qui étaient soumis à la Loi et pour que nous soyons adoptés comme fils. Tu n'es plus esclave, mais fils, et héritier par la grâce de Dieu.`,
    },
    gospel: {
      reference: "Luc 2, 16-21",
      text: `En ce temps-là, les bergers se hâtèrent d'aller à Bethléem, et ils découvrirent Marie et Joseph, avec le nouveau-né couché dans la mangeoire. Marie, cependant, retenait tous ces événements et les méditait dans son cœur. Quand fut arrivé le huitième jour, l'enfant reçut le nom de Jésus.`,
    },
  },
  "feast-01-06": {
    firstReading: {
      reference: "Isaïe 60, 1-6",
      text: `Debout, Jérusalem, resplendis ! Elle est venue, ta lumière, et la gloire du Seigneur s'est levée sur toi. Les nations marcheront vers ta lumière, et les rois, vers la clarté de ton aurore. Tous les gens de Saba viendront, apportant l'or et l'encens.`,
    },
    psalm: {
      reference: "Psaume 71 (72)",
      text: `Dieu, donne au roi tes pouvoirs, à ce fils de roi ta justice. Les rois de Tarsis et des Îles apporteront des présents ; les rois de Saba et de Séba feront leur offrande. Tous les rois se prosterneront devant lui.`,
    },
    secondReading: {
      reference: "Éphésiens 3, 2-3a.5-6",
      text: `Frères, vous avez appris comment Dieu m'a donné la grâce de l'Évangile. Par révélation, il m'a fait connaître le mystère : les païens sont associés au même héritage, au même corps, au partage de la même promesse, dans le Christ Jésus, par l'annonce de l'Évangile.`,
    },
    gospel: {
      reference: "Matthieu 2, 1-12",
      text: `Jésus était né à Bethléem en Judée, au temps du roi Hérode le Grand. Or, voici que des mages venus d'Orient arrivèrent à Jérusalem et demandèrent : « Où est le roi des Juifs qui vient de naître ? Nous avons vu son étoile à l'orient. » Ils ouvrirent leurs coffrets, et lui offrirent leurs présents : de l'or, de l'encens et de la myrrhe.`,
    },
  },

  // ===================== CARÊME =====================
  "lent-1-sun": {
    firstReading: {
      reference: "Genèse 2, 7-9 ; 3, 1-7",
      text: `Le Seigneur Dieu modela l'homme avec la poussière tirée du sol ; il insuffla dans ses narines le souffle de vie, et l'homme devint un être vivant. Le serpent dit à la femme : « Alors, Dieu vous a vraiment dit : Vous ne mangerez d'aucun arbre du jardin ? » Ils mangèrent du fruit, et leurs yeux s'ouvrirent.`,
    },
    psalm: {
      reference: "Psaume 50 (51)",
      text: `Pitié, mon Dieu, dans ton amour, selon ta grande miséricorde, efface mon péché. Oui, je connais mon péché, ma faute est toujours devant moi. Crée en moi un cœur pur, ô mon Dieu.`,
    },
    secondReading: {
      reference: "Romains 5, 12-19",
      text: `Frères, nous savons que par un seul homme, le péché est entré dans le monde, et que par le péché est venue la mort. Si la mort a régné par la faute d'un seul, combien plus, par un seul, Jésus Christ, régneront-ils dans la vie, ceux qui reçoivent en abondance le don de la grâce.`,
    },
    gospel: {
      reference: "Matthieu 4, 1-11",
      text: `En ce temps-là, Jésus fut conduit au désert par l'Esprit pour être tenté par le diable. Après avoir jeûné quarante jours et quarante nuits, il eut faim. Le tentateur s'approcha et lui dit : « Si tu es Fils de Dieu, ordonne que ces pierres deviennent des pains. » Jésus répondit : « L'homme ne vit pas seulement de pain, mais de toute parole qui sort de la bouche de Dieu. »`,
    },
  },
  "lent-2-sun": {
    firstReading: {
      reference: "Genèse 12, 1-4a",
      text: `En ces jours-là, le Seigneur dit à Abram : « Quitte ton pays, ta parenté et la maison de ton père, et va vers le pays que je te montrerai. Je ferai de toi une grande nation, je te bénirai, je rendrai grand ton nom, et tu deviendras une bénédiction. » Abram s'en alla, comme le Seigneur le lui avait dit.`,
    },
    psalm: {
      reference: "Psaume 32 (33)",
      text: `Oui, elle est droite, la parole du Seigneur ; il est fidèle en tout ce qu'il fait. Il aime le bon droit et la justice ; la terre est remplie de son amour. Que ton amour, Seigneur, soit sur nous comme notre espoir est en toi !`,
    },
    secondReading: {
      reference: "2 Timothée 1, 8b-10",
      text: `Frères bien-aimés, avec la force de Dieu, prends ta part des souffrances liées à l'annonce de l'Évangile. Car Dieu nous a sauvés, il nous a appelés à une vocation sainte, non pas à cause de nos propres actes, mais à cause de son projet à lui et de sa grâce.`,
    },
    gospel: {
      reference: "Matthieu 17, 1-9",
      text: `En ce temps-là, Jésus prit avec lui Pierre, Jacques et Jean son frère, et il les emmena à l'écart, sur une haute montagne. Il fut transfiguré devant eux ; son visage devint brillant comme le soleil, et ses vêtements, blancs comme la lumière. Une voix dit, depuis la nuée : « Celui-ci est mon Fils bien-aimé, en qui je trouve ma joie : écoutez-le ! »`,
    },
  },
  "lent-3-sun": {
    firstReading: {
      reference: "Exode 17, 3-7",
      text: `En ces jours-là, dans le désert, le peuple avait soif, et il récrimina contre Moïse : « Pourquoi nous as-tu fait monter d'Égypte ? Était-ce pour nous faire mourir de soif ? » Le Seigneur dit à Moïse : « Tu frapperas le rocher, et il en sortira de l'eau, et le peuple boira. »`,
    },
    psalm: {
      reference: "Psaume 94 (95)",
      text: `Aujourd'hui, ne fermez pas votre cœur, mais écoutez la voix du Seigneur ! Venez, crions de joie pour le Seigneur, acclamons notre Rocher, notre salut !`,
    },
    secondReading: {
      reference: "Romains 5, 1-2.5-8",
      text: `Frères, nous qui sommes devenus justes par la foi, nous voici en paix avec Dieu par notre Seigneur Jésus Christ. L'espérance ne déçoit pas, puisque l'amour de Dieu a été répandu dans nos cœurs par l'Esprit Saint qui nous a été donné.`,
    },
    gospel: {
      reference: "Jean 4, 5-42",
      text: `En ce temps-là, Jésus arriva à une ville de Samarie. Là se trouvait le puits de Jacob. Jésus dit à la Samaritaine : « Donne-moi à boire. » « Si tu savais le don de Dieu et qui est celui qui te dit : Donne-moi à boire, c'est toi qui lui aurais demandé, et il t'aurait donné de l'eau vive. » La femme lui dit : « Seigneur, donne-moi de cette eau. »`,
    },
  },
  "lent-4-sun": {
    firstReading: {
      reference: "1 Samuel 16, 1b.6-7.10-13a",
      text: `En ces jours-là, le Seigneur dit à Samuel : « Je t'envoie chez Jessé de Bethléem, car j'ai vu parmi ses fils mon roi. » Le Seigneur dit à Samuel : « L'homme ne voit que l'apparence, mais le Seigneur voit le cœur. » Samuel sacra David au milieu de ses frères. L'esprit du Seigneur s'empara de David à partir de ce jour-là.`,
    },
    psalm: {
      reference: "Psaume 22 (23)",
      text: `Le Seigneur est mon berger : je ne manque de rien. Sur des prés d'herbe fraîche, il me fait reposer. Il me mène vers les eaux tranquilles et me fait revivre. Si je traverse les ravins de la mort, je ne crains aucun mal, car tu es avec moi.`,
    },
    secondReading: {
      reference: "Éphésiens 5, 8-14",
      text: `Frères, autrefois, vous étiez ténèbres ; maintenant, dans le Seigneur, vous êtes lumière ; conduisez-vous comme des enfants de lumière. Le fruit de la lumière, c'est tout ce qui est bonté, justice et vérité.`,
    },
    gospel: {
      reference: "Jean 9, 1-41",
      text: `En ce temps-là, en sortant du Temple, Jésus vit sur son passage un homme aveugle de naissance. Il fit de la boue, l'appliqua sur les yeux de l'aveugle, et lui dit : « Va te laver à la piscine de Siloé. » L'homme y alla, il se lava ; quand il revint, il voyait. Il dit : « Je crois, Seigneur ! » Et il se prosterna devant lui.`,
    },
  },
  "lent-5-sun": {
    firstReading: {
      reference: "Ézéchiel 37, 12-14",
      text: `Ainsi parle le Seigneur Dieu : Je vais ouvrir vos tombeaux et je vous en ferai remonter, ô mon peuple, et je vous ramènerai sur la terre d'Israël. Je mettrai en vous mon esprit, et vous vivrez. Alors vous saurez que je suis le Seigneur.`,
    },
    psalm: {
      reference: "Psaume 129 (130)",
      text: `Des profondeurs je crie vers toi, Seigneur, Seigneur, écoute mon appel ! Près du Seigneur est l'amour, près de lui abonde le rachat. C'est lui qui rachètera Israël de toutes ses fautes.`,
    },
    secondReading: {
      reference: "Romains 8, 8-11",
      text: `Frères, ceux qui sont sous l'emprise de la chair ne peuvent pas plaire à Dieu. Or, vous, vous n'êtes pas sous l'emprise de la chair, mais sous celle de l'Esprit, puisque l'Esprit de Dieu habite en vous. Et si l'Esprit de Celui qui a ressuscité Jésus habite en vous, il donnera aussi la vie à vos corps mortels.`,
    },
    gospel: {
      reference: "Jean 11, 1-45",
      text: `En ce temps-là, il y avait quelqu'un de malade, Lazare, de Béthanie. Jésus lui dit : « Moi, je suis la résurrection et la vie. Celui qui croit en moi, même s'il meurt, vivra. » Jésus, en larmes, se rendit au tombeau. Il cria d'une voix forte : « Lazare, viens dehors ! » Et le mort sortit.`,
    },
  },
  "palm-sun": {
    firstReading: {
      reference: "Isaïe 50, 4-7",
      text: `Le Seigneur mon Dieu m'a donné le langage des disciples, pour que je puisse, d'une parole, soutenir celui qui est épuisé. Le Seigneur Dieu m'a ouvert l'oreille, et moi, je ne me suis pas révolté, je ne me suis pas dérobé. J'ai présenté mon dos à ceux qui me frappaient.`,
    },
    psalm: {
      reference: "Psaume 21 (22)",
      text: `Mon Dieu, mon Dieu, pourquoi m'as-tu abandonné ? Tous ceux qui me voient me bafouent. Ils partagent entre eux mes habits et tirent au sort mon vêtement. Mais toi, Seigneur, ne sois pas loin ! Tu m'as répondu !`,
    },
    secondReading: {
      reference: "Philippiens 2, 6-11",
      text: `Le Christ Jésus, ayant la condition de Dieu, ne retint pas jalousement le rang qui l'égalait à Dieu. Il s'est anéanti, prenant la condition de serviteur. Il s'est abaissé, devenant obéissant jusqu'à la mort, et la mort de la croix. C'est pourquoi Dieu l'a exalté : il l'a doté du Nom qui est au-dessus de tout nom.`,
    },
    gospel: {
      reference: "Matthieu 26, 14 – 27, 66",
      text: `La Passion de notre Seigneur Jésus Christ selon saint Matthieu. Jésus alla au jardin de Gethsémani et priait : « Mon Père, s'il est possible, que cette coupe passe loin de moi ! Cependant, non pas comme moi, je veux, mais comme toi, tu veux. » Vers la neuvième heure, Jésus cria d'une voix forte : « Éli, Éli, lema sabactani ? »`,
    },
  },

  // ===================== TEMPS PASCAL =====================
  "easter-sun": {
    firstReading: {
      reference: "Actes 10, 34a.37-43",
      text: `En ces jours-là, Pierre prit la parole et dit : « Vous savez ce qui s'est passé à travers tout le pays des Juifs : Jésus de Nazareth, Dieu lui a donné l'onction d'Esprit Saint et de puissance. Là où il passait, il faisait le bien. Celui-là, Dieu l'a ressuscité le troisième jour. »`,
    },
    psalm: {
      reference: "Psaume 117 (118)",
      text: `Voici le jour que fit le Seigneur, qu'il soit pour nous jour de fête et de joie ! Rendez grâce au Seigneur : Il est bon ! Éternel est son amour ! La pierre qu'ont rejetée les bâtisseurs est devenue la pierre d'angle.`,
    },
    secondReading: {
      reference: "Colossiens 3, 1-4",
      text: `Frères, si vous êtes ressuscités avec le Christ, recherchez les réalités d'en haut : c'est là qu'est le Christ, assis à la droite de Dieu. Tendez vers les réalités d'en haut, et non pas vers celles de la terre. Quand paraîtra le Christ, votre vie, alors vous aussi, vous paraîtrez avec lui dans la gloire.`,
    },
    gospel: {
      reference: "Jean 20, 1-9",
      text: `Le premier jour de la semaine, Marie Madeleine se rend au tombeau de grand matin. Elle s'aperçoit que la pierre a été enlevée du tombeau. Pierre et l'autre disciple se rendirent au tombeau. Il vit les linges posés à plat, ainsi que le suaire. C'est alors qu'entra l'autre disciple : il vit, et il crut.`,
    },
  },
  "easter-2-sun": {
    firstReading: {
      reference: "Actes 2, 42-47",
      text: `Les frères étaient assidus à l'enseignement des Apôtres et à la communion fraternelle, à la fraction du pain et aux prières. Tous les croyants vivaient ensemble, et ils avaient tout en commun. Chaque jour, le Seigneur leur adjoignait ceux qui étaient sauvés.`,
    },
    psalm: {
      reference: "Psaume 117 (118)",
      text: `Rendez grâce au Seigneur : Il est bon ! Éternel est son amour ! Oui, que le dise Israël : Éternel est son amour ! Le bras du Seigneur se lève, le bras du Seigneur est fort !`,
    },
    secondReading: {
      reference: "1 Pierre 1, 3-9",
      text: `Béni soit Dieu, le Père de notre Seigneur Jésus Christ : dans sa grande miséricorde, il nous a fait renaître pour une vivante espérance grâce à la résurrection de Jésus Christ d'entre les morts. Vous tressaillez de joie, même s'il faut que vous soyez affligés par diverses épreuves.`,
    },
    gospel: {
      reference: "Jean 20, 19-31",
      text: `C'était après la mort de Jésus. Le soir venu, les portes étant verrouillées, Jésus vint et il était là au milieu d'eux. Il leur dit : « La paix soit avec vous ! » Puis il dit à Thomas : « Avance ton doigt ici, et vois mes mains. Cesse d'être incrédule, sois croyant. » Thomas lui dit : « Mon Seigneur et mon Dieu ! »`,
    },
  },
  "easter-3-sun": {
    firstReading: {
      reference: "Actes 2, 14.22-33",
      text: `Le jour de la Pentecôte, Pierre se leva et éleva la voix : « Jésus le Nazaréen, cet homme que Dieu a accrédité auprès de vous par des miracles, Dieu l'a ressuscité en le délivrant des douleurs de la mort. Ce Jésus, Dieu l'a ressuscité ; nous tous, nous en sommes témoins. »`,
    },
    psalm: {
      reference: "Psaume 15 (16)",
      text: `Tu m'apprends le chemin de la vie : devant ta face, débordement de joie ! À ta droite, éternité de délices ! Garde-moi, mon Dieu, j'ai fait de toi mon refuge. Tu ne peux m'abandonner à la mort.`,
    },
    secondReading: {
      reference: "1 Pierre 1, 17-21",
      text: `Frères bien-aimés, vous savez que ce n'est pas par des biens corruptibles, l'argent ou l'or, que vous avez été rachetés de la conduite superficielle héritée de vos pères, mais par le sang précieux du Christ, comme d'un agneau sans défaut et sans tache.`,
    },
    gospel: {
      reference: "Luc 24, 13-35",
      text: `Le même jour, deux disciples faisaient route vers un village appelé Emmaüs. Jésus lui-même s'approcha, et il marchait avec eux. Quand il fut à table avec eux, ayant pris le pain, il prononça la bénédiction et, l'ayant rompu, il le leur donna. Alors leurs yeux s'ouvrirent, et ils le reconnurent.`,
    },
  },
  "easter-4-sun": {
    firstReading: {
      reference: "Actes 2, 14a.36-41",
      text: `Le jour de la Pentecôte, Pierre disait aux Juifs : « Que toute la maison d'Israël le sache : Dieu l'a fait Seigneur et Christ, ce Jésus que vous aviez crucifié. » Le cœur bouleversé, ils demandèrent : « Que devons-nous faire ? » Pierre leur répondit : « Convertissez-vous, et que chacun de vous soit baptisé. »`,
    },
    psalm: {
      reference: "Psaume 22 (23)",
      text: `Le Seigneur est mon berger : je ne manque de rien. Sur des prés d'herbe fraîche, il me fait reposer. Il me mène vers les eaux tranquilles et me fait revivre. Si je traverse les ravins de la mort, je ne crains aucun mal, car tu es avec moi.`,
    },
    secondReading: {
      reference: "1 Pierre 2, 20b-25",
      text: `Frères bien-aimés, si vous supportez la souffrance pour avoir fait le bien, c'est une grâce aux yeux de Dieu. Le Christ a souffert pour vous, il vous a laissé un modèle afin que vous suiviez ses traces. Vous étiez errants comme des brebis ; mais à présent vous êtes retournés vers votre berger.`,
    },
    gospel: {
      reference: "Jean 10, 1-10",
      text: `En ce temps-là, Jésus déclara : « Amen, amen, je vous le dis : celui qui entre dans l'enclos des brebis sans passer par la porte, celui-là est un voleur et un bandit. Celui qui entre par la porte, c'est le pasteur, le berger des brebis. Moi, je suis la porte. Si quelqu'un entre en passant par moi, il sera sauvé. »`,
    },
  },
  "easter-5-sun": {
    firstReading: {
      reference: "Actes 6, 1-7",
      text: `En ces jours-là, comme le nombre des disciples augmentait, les frères de langue grecque récriminèrent contre ceux de langue hébraïque. Les Douze convoquèrent alors l'ensemble des disciples et dirent : « Il n'est pas bon que nous délaissions la parole de Dieu pour servir aux tables. » On choisit sept hommes remplis d'Esprit Saint.`,
    },
    psalm: {
      reference: "Psaume 32 (33)",
      text: `Oui, elle est droite, la parole du Seigneur ; il est fidèle en tout ce qu'il fait. Le Seigneur aime le bon droit et la justice ; la terre est remplie de son amour. Que ton amour, Seigneur, soit sur nous comme notre espoir est en toi !`,
    },
    secondReading: {
      reference: "1 Pierre 2, 4-9",
      text: `Frères bien-aimés, approchez-vous du Seigneur Jésus : il est la pierre vivante rejetée par les hommes, mais choisie et précieuse devant Dieu. Vous êtes une descendance choisie, un sacerdoce royal, une nation sainte, un peuple acquis, pour proclamer les merveilles de Celui qui vous a appelés des ténèbres à son admirable lumière.`,
    },
    gospel: {
      reference: "Jean 14, 1-12",
      text: `En ce temps-là, Jésus disait à ses disciples : « Que votre cœur ne soit pas bouleversé : vous croyez en Dieu, croyez aussi en moi. Dans la maison de mon Père, il y a de nombreuses demeures. Je suis le Chemin, la Vérité et la Vie ; personne ne va vers le Père sans passer par moi. »`,
    },
  },
  "easter-6-sun": {
    firstReading: {
      reference: "Actes 8, 5-8.14-17",
      text: `En ces jours-là, Philippe, l'un des Sept, arriva dans une ville de Samarie, et il leur proclamait le Christ. Les foules, d'un même cœur, s'attachaient à ce que disait Philippe. Les Apôtres imposèrent les mains aux Samaritains, et ceux-ci reçurent l'Esprit Saint.`,
    },
    psalm: {
      reference: "Psaume 65 (66)",
      text: `Terre entière, acclame Dieu, chante le Seigneur ! Venez et voyez les hauts faits de Dieu : il est redoutable envers les fils des hommes. Béni soit Dieu, qui n'a pas écarté ma prière, ni détourné de moi son amour !`,
    },
    secondReading: {
      reference: "1 Pierre 3, 15-18",
      text: `Frères bien-aimés, honorez dans vos cœurs la sainteté du Seigneur, le Christ. Soyez prêts à tout moment à présenter une défense devant quiconque vous demande de rendre raison de l'espérance qui est en vous. Car le Christ, lui aussi, a souffert pour les péchés, une seule fois, le juste pour les injustes, afin de vous introduire devant Dieu.`,
    },
    gospel: {
      reference: "Jean 14, 15-21",
      text: `En ce temps-là, Jésus disait à ses disciples : « Si vous m'aimez, vous garderez mes commandements. Moi, je prierai le Père, et il vous donnera un autre Défenseur qui sera pour toujours avec vous : l'Esprit de vérité. Je ne vous laisserai pas orphelins, je reviens vers vous. »`,
    },
  },
  "ascension": {
    firstReading: {
      reference: "Actes 1, 1-11",
      text: `Cher Théophile, dans mon premier livre, j'ai parlé de tout ce que Jésus a fait et enseigné. Il fut enlevé au ciel. Les Apôtres le regardaient s'en aller vers le ciel, deux hommes en vêtements blancs leur dirent : « Ce Jésus qui a été enlevé au ciel d'auprès de vous, viendra de la même manière que vous l'avez vu s'en aller vers le ciel. »`,
    },
    psalm: {
      reference: "Psaume 46 (47)",
      text: `Dieu s'élève parmi les ovations, le Seigneur, aux éclats du cor. Sonnez, sonnez pour notre Dieu, sonnez, sonnez pour notre roi ! Car Dieu est le roi de la terre. Il règne sur les nations, Dieu est assis sur son trône sacré.`,
    },
    secondReading: {
      reference: "Éphésiens 1, 17-23",
      text: `Frères, que le Dieu de notre Seigneur Jésus Christ vous donne un esprit de sagesse qui vous le fasse connaître. Qu'il ouvre à sa lumière les yeux de votre cœur, pour que vous sachiez quelle espérance vous ouvre son appel. Il a tout mis sous ses pieds, et il l'a donné, au sommet de tout, comme tête à l'Église.`,
    },
    gospel: {
      reference: "Matthieu 28, 16-20",
      text: `En ce temps-là, les onze disciples s'en allèrent en Galilée, à la montagne où Jésus leur avait ordonné de se rendre. Jésus s'approcha d'eux et leur dit : « Tout pouvoir m'a été donné au ciel et sur la terre. Allez ! De toutes les nations faites des disciples : baptisez-les au nom du Père, et du Fils, et du Saint-Esprit. Et moi, je suis avec vous tous les jours jusqu'à la fin du monde. »`,
    },
  },
  "easter-7-sun": {
    firstReading: {
      reference: "Actes 1, 12-14",
      text: `Les Apôtres, après avoir vu Jésus s'en aller vers le ciel, retournèrent à Jérusalem. Montés dans la chambre haute, ils persévéraient, d'un même cœur, dans la prière, avec des femmes, avec Marie la mère de Jésus, et avec ses frères.`,
    },
    psalm: {
      reference: "Psaume 26 (27)",
      text: `Le Seigneur est ma lumière et mon salut ; de qui aurais-je crainte ? Le Seigneur est le rempart de ma vie ; devant qui tremblerais-je ? J'en suis sûr, je verrai les bontés du Seigneur sur la terre des vivants.`,
    },
    secondReading: {
      reference: "1 Pierre 4, 13-16",
      text: `Frères bien-aimés, dans la mesure où vous communiez aux souffrances du Christ, réjouissez-vous, afin d'être dans la joie et l'allégresse quand sa gloire se révélera. Si l'on vous outrage pour le nom du Christ, heureux êtes-vous, parce que l'Esprit de gloire, l'Esprit de Dieu, repose sur vous.`,
    },
    gospel: {
      reference: "Jean 17, 1-11a",
      text: `En ce temps-là, Jésus leva les yeux au ciel et dit : « Père, l'heure est venue. Glorifie ton Fils afin que le Fils te glorifie. La vie éternelle, c'est qu'ils te connaissent, toi le seul vrai Dieu, et celui que tu as envoyé, Jésus Christ. Moi, je ne suis plus dans le monde ; eux, ils sont dans le monde, et moi, je viens vers toi. »`,
    },
  },
  "pentecost-sun": {
    firstReading: {
      reference: "Actes 2, 1-11",
      text: `Quand arriva le jour de la Pentecôte, au terme des cinquante jours après Pâques, ils se trouvaient réunis tous ensemble. Soudain un bruit survint du ciel. Tous furent remplis d'Esprit Saint : ils se mirent à parler en d'autres langues, et chacun les entendait dans son propre dialecte.`,
    },
    psalm: {
      reference: "Psaume 103 (104)",
      text: `Ô Seigneur, envoie ton Esprit qui renouvelle la face de la terre ! Quelle profusion dans tes œuvres, Seigneur ! Tu renouvelles la face de la terre. Bénis le Seigneur, ô mon âme !`,
    },
    secondReading: {
      reference: "1 Corinthiens 12, 3b-7.12-13",
      text: `Frères, personne n'est capable de dire : « Jésus est Seigneur » sinon dans l'Esprit Saint. Les dons de la grâce sont variés, mais c'est le même Esprit. C'est dans un unique Esprit, en effet, que nous tous avons été baptisés pour former un seul corps. Nous avons tous été désaltérés par un seul Esprit.`,
    },
    gospel: {
      reference: "Jean 20, 19-23",
      text: `C'était après la mort de Jésus. Le soir venu, les portes du lieu étant verrouillées, Jésus vint, et il était là au milieu d'eux. Il leur dit : « La paix soit avec vous ! » Alors il répandit sur eux son souffle et il leur dit : « Recevez l'Esprit Saint. À qui vous remettrez ses péchés, ils seront remis. »`,
    },
  },

  // ===================== POST-PENTECÔTE =====================
  "trinity-sun": {
    firstReading: {
      reference: "Exode 34, 4b-6.8-9",
      text: `En ces jours-là, Moïse se leva de bon matin et il gravit la montagne du Sinaï. Le Seigneur descendit dans la nuée et proclama : « Le Seigneur, le Seigneur, Dieu tendre et miséricordieux, lent à la colère, plein d'amour et de vérité. » Moïse dit : « S'il est vrai que j'ai trouvé grâce à tes yeux, daigne marcher au milieu de nous. »`,
    },
    psalm: {
      reference: "Daniel 3, 52-56",
      text: `À toi, louange et gloire éternellement ! Béni sois-tu, Seigneur, Dieu de nos pères. Béni soit le nom très saint de ta gloire. Béni sois-tu dans ton saint temple de gloire. Béni sois-tu sur le trône de ton règne.`,
    },
    secondReading: {
      reference: "2 Corinthiens 13, 11-13",
      text: `Frères, soyez dans la joie, cherchez la perfection, encouragez-vous, soyez d'accord entre vous, vivez en paix, et le Dieu d'amour et de paix sera avec vous. Que la grâce du Seigneur Jésus Christ, l'amour de Dieu et la communion de l'Esprit Saint soient avec vous tous.`,
    },
    gospel: {
      reference: "Jean 3, 16-18",
      text: `Dieu a tellement aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne se perde pas, mais obtienne la vie éternelle. Car Dieu a envoyé son Fils dans le monde, non pas pour juger le monde, mais pour que, par lui, le monde soit sauvé.`,
    },
  },
  "corpus-sun": {
    firstReading: {
      reference: "Deutéronome 8, 2-3.14b-16a",
      text: `Moïse disait au peuple d'Israël : « Souviens-toi de la longue marche que tu as faite pendant quarante années dans le désert. Le Seigneur ton Dieu t'a fait passer par la pauvreté et la faim, et il t'a donné à manger la manne, pour que tu saches que l'homme ne vit pas seulement de pain, mais de tout ce qui vient de la bouche du Seigneur. »`,
    },
    psalm: {
      reference: "Psaume 147, 12-15.19-20",
      text: `Glorifie le Seigneur, Jérusalem ! Célèbre ton Dieu, ô Sion ! Il envoie sa parole sur la terre : rapide, son verbe la parcourt. Il révèle sa parole à Jacob, ses volontés et ses lois à Israël.`,
    },
    secondReading: {
      reference: "1 Corinthiens 10, 16-17",
      text: `Frères, la coupe de bénédiction que nous bénissons, n'est-elle pas communion au sang du Christ ? Le pain que nous rompons, n'est-il pas communion au corps du Christ ? Puisqu'il y a un seul pain, la multitude que nous sommes est un seul corps, car nous avons tous part à un seul pain.`,
    },
    gospel: {
      reference: "Jean 6, 51-58",
      text: `En ce temps-là, Jésus disait aux foules des Juifs : « Moi, je suis le pain vivant, qui est descendu du ciel : si quelqu'un mange de ce pain, il vivra éternellement. Le pain que je donnerai, c'est ma chair, donnée pour la vie du monde. Celui qui mange ma chair et boit mon sang a la vie éternelle. »`,
    },
  },

  // ===================== TEMPS ORDINAIRE =====================
  "ot-2-sun": {
    firstReading: {
      reference: "Isaïe 49, 3.5-6",
      text: `Le Seigneur m'a dit : « Tu es mon serviteur, Israël, en toi je me glorifierai. » Maintenant le Seigneur parle : « C'est trop peu que tu sois mon serviteur pour relever les tribus de Jacob. Je fais de toi la lumière des nations, pour que mon salut parvienne jusqu'aux extrémités de la terre. »`,
    },
    psalm: {
      reference: "Psaume 39 (40)",
      text: `Me voici, Seigneur, je viens faire ta volonté. D'un grand espoir, j'espérais le Seigneur : il s'est penché vers moi. Tu ne voulais ni offrande ni sacrifice, tu as ouvert mes oreilles ; tu ne demandais ni holocauste ni victime.`,
    },
    secondReading: {
      reference: "1 Corinthiens 1, 1-3",
      text: `Paul, appelé par la volonté de Dieu pour être apôtre du Christ Jésus, et Sosthène notre frère, à l'Église de Dieu qui est à Corinthe, à ceux qui ont été sanctifiés dans le Christ Jésus. À vous, la grâce et la paix, de la part de Dieu notre Père et du Seigneur Jésus Christ.`,
    },
    gospel: {
      reference: "Jean 1, 29-34",
      text: `En ce temps-là, voyant Jésus venir vers lui, Jean le Baptiste déclara : « Voici l'Agneau de Dieu, qui enlève le péché du monde. C'est de lui que j'ai dit : L'homme qui vient derrière moi est passé devant moi. J'ai vu l'Esprit descendre du ciel comme une colombe et il demeura sur lui. Celui-là baptise dans l'Esprit Saint. »`,
    },
  },
  "ot-3-sun": {
    firstReading: {
      reference: "Isaïe 8, 23b – 9, 3",
      text: `Dans un premier temps, le Seigneur a couvert de honte le pays de Zabulon et le pays de Nephtali ; mais ensuite, il a couvert de gloire la route de la mer. Le peuple qui marchait dans les ténèbres a vu se lever une grande lumière. Tu as prodigué la joie, tu as fait grandir l'allégresse.`,
    },
    psalm: {
      reference: "Psaume 26 (27)",
      text: `Le Seigneur est ma lumière et mon salut ; de qui aurais-je crainte ? Le Seigneur est le rempart de ma vie ; devant qui tremblerais-je ? J'ai demandé une chose au Seigneur, la seule que je cherche : habiter la maison du Seigneur tous les jours de ma vie.`,
    },
    secondReading: {
      reference: "1 Corinthiens 1, 10-13.17",
      text: `Frères, je vous exhorte au nom de notre Seigneur Jésus Christ : ayez tous un même langage ; qu'il n'y ait pas de divisions entre vous. Le Christ m'a envoyé non pas pour baptiser, mais pour annoncer l'Évangile, et cela sans avoir recours au langage de la sagesse humaine.`,
    },
    gospel: {
      reference: "Matthieu 4, 12-23",
      text: `Quand Jésus apprit l'arrestation de Jean le Baptiste, il se retira en Galilée. Il vint habiter à Capharnaüm, pour que soit accomplie la parole d'Isaïe : « Le peuple qui habitait dans les ténèbres a vu une grande lumière. » À partir de ce moment, Jésus commença à proclamer : « Convertissez-vous, car le royaume des Cieux est tout proche. »`,
    },
  },
  "ot-4-sun": {
    firstReading: {
      reference: "Sophonie 2, 3 ; 3, 12-13",
      text: `Cherchez le Seigneur, vous tous, les humbles du pays, qui accomplissez sa loi. Cherchez la justice, cherchez l'humilité. Je laisserai chez toi un peuple pauvre et petit ; il prendra pour abri le nom du Seigneur. Ce peuple ne commettra plus d'injustice.`,
    },
    psalm: {
      reference: "Psaume 145 (146)",
      text: `Heureux les pauvres de cœur, car le royaume des Cieux est à eux ! Le Seigneur fait justice aux opprimés, aux affamés, il donne le pain. Le Seigneur redresse les accablés, le Seigneur aime les justes.`,
    },
    secondReading: {
      reference: "1 Corinthiens 1, 26-31",
      text: `Frères, vous qui avez été appelés par Dieu, regardez bien : parmi vous, il n'y a pas beaucoup de sages aux yeux des hommes, ni beaucoup de puissants, ni beaucoup de gens de bonne famille. Mais ce qu'il y a de fou dans le monde, voilà ce que Dieu a choisi, pour couvrir de confusion les sages.`,
    },
    gospel: {
      reference: "Matthieu 5, 1-12a",
      text: `En ce temps-là, voyant les foules, Jésus gravit la montagne. Il disait : « Heureux les pauvres de cœur, car le royaume des Cieux est à eux. Heureux ceux qui pleurent, car ils seront consolés. Heureux les doux, car ils recevront la terre en héritage. Heureux les miséricordieux, car ils obtiendront miséricorde. Heureux les cœurs purs, car ils verront Dieu. »`,
    },
  },
  "ot-5-sun": {
    firstReading: {
      reference: "Isaïe 58, 7-10",
      text: `Ainsi parle le Seigneur : Partage ton pain avec celui qui a faim, accueille chez toi les pauvres sans abri, couvre celui que tu verras sans vêtement. Alors ta lumière jaillira comme l'aurore, et ta blessure se guérira rapidement.`,
    },
    psalm: {
      reference: "Psaume 111 (112)",
      text: `Lumière des cœurs droits, il s'est levé dans les ténèbres, homme de justice, de tendresse et de pitié. L'homme de bien a pitié, il partage ; il mène ses affaires avec droiture. Cœur ferme, il s'appuie sur le Seigneur.`,
    },
    secondReading: {
      reference: "1 Corinthiens 2, 1-5",
      text: `Frères, quand je suis venu chez vous, ce n'est pas avec le prestige du langage ou de la sagesse que je suis venu vous annoncer le mystère de Dieu. J'ai décidé de ne rien savoir parmi vous, sinon Jésus Christ, et Jésus Christ crucifié. Votre foi ne repose pas sur la sagesse des hommes, mais sur la puissance de Dieu.`,
    },
    gospel: {
      reference: "Matthieu 5, 13-16",
      text: `En ce temps-là, Jésus disait à ses disciples : « Vous êtes le sel de la terre. Mais si le sel devient fade, comment lui rendre de la saveur ? Vous êtes la lumière du monde. Que votre lumière brille devant les hommes : alors, voyant ce que vous faites de bien, ils rendront gloire à votre Père qui est aux cieux. »`,
    },
  },
  "ot-6-sun": {
    firstReading: {
      reference: "Ben Sira le Sage 15, 15-20",
      text: `Si tu le veux, tu peux observer les commandements, rester fidèle est en ton pouvoir. Le Seigneur a mis devant toi l'eau et le feu : étends la main vers ce que tu préfères. La vie et la mort sont proposées aux hommes, l'une ou l'autre leur est donnée selon leur choix.`,
    },
    psalm: {
      reference: "Psaume 118 (119)",
      text: `Heureux les hommes intègres dans leurs voies qui marchent suivant la loi du Seigneur ! Heureux ceux qui gardent ses exigences, ils le cherchent de tout cœur ! Ouvre mes yeux, que je contemple les merveilles de ta loi.`,
    },
    secondReading: {
      reference: "1 Corinthiens 2, 6-10",
      text: `Frères, c'est bien de sagesse que nous parlons devant ceux qui sont adultes dans la foi, mais ce n'est pas la sagesse de ce monde. Ce que nous proclamons, c'est la sagesse du mystère de Dieu, sagesse tenue cachée, prévue par lui dès avant les siècles, pour nous donner la gloire.`,
    },
    gospel: {
      reference: "Matthieu 5, 17-37",
      text: `En ce temps-là, Jésus disait à ses disciples : « Ne pensez pas que je sois venu abolir la Loi ou les Prophètes : je ne suis pas venu abolir, mais accomplir. Vous avez appris qu'il a été dit aux anciens : Tu ne tueras pas. Eh bien ! moi, je vous dis : Tout homme qui se met en colère contre son frère devra passer en jugement. Que votre parole soit "oui" si c'est "oui", "non" si c'est "non". »`,
    },
  },
  "ot-7-sun": {
    firstReading: {
      reference: "Lévitique 19, 1-2.17-18",
      text: `Le Seigneur parla à Moïse et dit : « Parle à toute l'assemblée des fils d'Israël. Tu leur diras : Soyez saints, car moi, le Seigneur votre Dieu, je suis saint. Tu ne haïras pas ton frère dans ton cœur. Tu aimeras ton prochain comme toi-même. Je suis le Seigneur. »`,
    },
    psalm: {
      reference: "Psaume 102 (103)",
      text: `Le Seigneur est tendresse et pitié, lent à la colère et plein d'amour. Il n'agit pas envers nous selon nos fautes, ne nous rend pas selon nos offenses. Comme le ciel domine la terre, fort est son amour pour qui le craint.`,
    },
    secondReading: {
      reference: "1 Corinthiens 3, 16-23",
      text: `Frères, n'oubliez pas que vous êtes un sanctuaire de Dieu, et que l'Esprit de Dieu habite en vous. Si quelqu'un détruit le sanctuaire de Dieu, celui-là, Dieu le détruira. Car le sanctuaire de Dieu est saint, et ce sanctuaire, c'est vous. Tout est à vous, mais vous, vous êtes au Christ, et le Christ est à Dieu.`,
    },
    gospel: {
      reference: "Matthieu 5, 38-48",
      text: `En ce temps-là, Jésus disait à ses disciples : « Vous avez appris qu'il a été dit : Œil pour œil, et dent pour dent. Eh bien ! moi, je vous dis de ne pas riposter au méchant. Aimez vos ennemis, et priez pour ceux qui vous persécutent, afin d'être vraiment les fils de votre Père qui est aux cieux. Vous donc, vous serez parfaits comme votre Père céleste est parfait. »`,
    },
  },
  "ot-10-sun": {
    firstReading: {
      reference: "Osée 6, 3-6",
      text: `Efforçons-nous de connaître le Seigneur : son lever est aussi sûr que l'aurore ; il viendra vers nous comme la pluie, comme la pluie de printemps qui arrose la terre. Car c'est l'amour que je désire, et non les sacrifices, la connaissance de Dieu plutôt que les holocaustes.`,
    },
    psalm: {
      reference: "Psaume 49 (50)",
      text: `Celui qui offre le sacrifice d'action de grâce, celui-là me rend gloire. À l'homme dont la conduite est irréprochable, je ferai voir le salut de Dieu. Écoute, mon peuple, je parle.`,
    },
    secondReading: {
      reference: "Romains 4, 18-25",
      text: `Frères, espérant contre toute espérance, Abraham a cru ; ainsi est-il devenu le père d'un grand nombre de nations. Devant la promesse de Dieu, il ne tomba pas dans le doute, mais il trouva sa force dans la foi, et rendit gloire à Dieu, car la foi d'Abraham lui fut comptée comme justice.`,
    },
    gospel: {
      reference: "Matthieu 9, 9-13",
      text: `En ce temps-là, Jésus vit, en passant, un homme, du nom de Matthieu, assis à son bureau de collecteur d'impôts. Il lui dit : « Suis-moi. » L'homme se leva et le suivit. Des pharisiens disaient : « Pourquoi votre maître mange-t-il avec les publicains et les pécheurs ? » Jésus répondit : « Ce ne sont pas les gens bien portants qui ont besoin du médecin, mais les malades. Allez apprendre ce que signifie : C'est la miséricorde que je veux, et non les sacrifices. »`,
    },
  },
  "ot-11-sun": {
    firstReading: {
      reference: "Exode 19, 2-6a",
      text: `En ces jours-là, les fils d'Israël arrivèrent dans le désert du Sinaï. Le Seigneur appela Moïse et lui dit : « Vous avez vu ce que j'ai fait à l'Égypte, comment je vous ai portés comme sur les ailes d'un aigle. Maintenant, si vous écoutez ma voix, vous serez mon domaine particulier parmi tous les peuples, car toute la terre m'appartient ; vous serez pour moi un royaume de prêtres, une nation sainte. »`,
    },
    psalm: {
      reference: "Psaume 99 (100)",
      text: `Acclamez le Seigneur, terre entière, servez le Seigneur dans l'allégresse, venez à lui avec des chants de joie ! Reconnaissez que le Seigneur est Dieu : il nous a faits, et nous sommes à lui, nous, son peuple, son troupeau.`,
    },
    secondReading: {
      reference: "Romains 5, 6-11",
      text: `Frères, alors que nous n'étions encore capables de rien, le Christ, au temps fixé par Dieu, est mort pour les impies. La preuve que Dieu nous aime, c'est que le Christ est mort pour nous, alors que nous étions encore pécheurs. Si nous avons été réconciliés avec Dieu par la mort de son Fils, combien plus serons-nous sauvés par sa vie.`,
    },
    gospel: {
      reference: "Matthieu 9, 36 – 10, 8",
      text: `En ce temps-là, voyant les foules, Jésus fut saisi de compassion envers elles parce qu'elles étaient fatiguées et abattues comme des brebis sans berger. Il dit alors à ses disciples : « La moisson est abondante, mais les ouvriers sont peu nombreux. » Puis il appela ses douze disciples et les envoya en mission : « Proclamez que le royaume des Cieux est tout proche. Guérissez les malades, ressuscitez les morts. »`,
    },
  },
  "ot-12-sun": {
    firstReading: {
      reference: "Jérémie 20, 10-13",
      text: `Jérémie disait : « J'entends les calomnies de la foule : "Dénoncez-le !" Tous mes amis guettent mes faux pas. Mais le Seigneur est avec moi, tel un guerrier redoutable. Chantez le Seigneur, louez-le : il a délivré le malheureux de la main des méchants. »`,
    },
    psalm: {
      reference: "Psaume 68 (69)",
      text: `Dans ton grand amour, Dieu, réponds-moi, par ta vérité sauvegarde-moi. Les pauvres l'ont vu, alors ils sont en fête : « Vie et joie, à vous qui cherchez Dieu ! » Car le Seigneur écoute les humbles.`,
    },
    secondReading: {
      reference: "Romains 5, 12-15",
      text: `Frères, nous savons que par un seul homme, le péché est entré dans le monde, et que par le péché est venue la mort. Mais il n'en va pas du don gratuit comme de la faute. Si la mort a frappé la multitude par la faute d'un seul, combien plus la grâce de Dieu s'est-elle répandue en abondance sur la multitude, par un seul homme, Jésus Christ.`,
    },
    gospel: {
      reference: "Matthieu 10, 26-33",
      text: `En ce temps-là, Jésus disait à ses Apôtres : « Ne craignez pas les hommes. Rien n'est voilé qui ne sera dévoilé, rien n'est caché qui ne sera connu. Ne craignez pas ceux qui tuent le corps sans pouvoir tuer l'âme. Quiconque se déclarera pour moi devant les hommes, moi aussi je me déclarerai pour lui devant mon Père qui est aux cieux. »`,
    },
  },
  "ot-13-sun": {
    firstReading: {
      reference: "2 Rois 4, 8-11.14-16a",
      text: `Un jour, le prophète Élisée passait à Sunam ; une femme notable l'invita à sa table. Elle dit à son mari : « Je sais que cet homme est un saint homme de Dieu. Préparons-lui une petite chambre. » Élisée dit : « À cette même époque, au temps fixé, tu tiendras un fils dans tes bras. »`,
    },
    psalm: {
      reference: "Psaume 88 (89)",
      text: `L'amour du Seigneur, sans fin je le chante ; ta fidélité, je l'annonce d'âge en âge. C'est un amour bâti pour toujours ; ta fidélité est plus stable que les cieux. Heureux le peuple qui connaît l'acclamation !`,
    },
    secondReading: {
      reference: "Romains 6, 3-4.8-11",
      text: `Frères, ne le savez-vous pas ? Nous tous qui par le baptême avons été unis au Christ Jésus, c'est à sa mort que nous avons été unis par le baptême. Si nous sommes passés par la mort avec le Christ, nous croyons que nous vivrons aussi avec lui. Pensez que vous êtes morts au péché, mais vivants pour Dieu en Jésus Christ.`,
    },
    gospel: {
      reference: "Matthieu 10, 37-42",
      text: `En ce temps-là, Jésus disait à ses Apôtres : « Celui qui aime son père ou sa mère plus que moi n'est pas digne de moi. Celui qui ne prend pas sa croix et ne me suit pas n'est pas digne de moi. Qui a trouvé sa vie la perdra ; qui a perdu sa vie à cause de moi la gardera. Qui vous accueille m'accueille. »`,
    },
  },
  "ot-14-sun": {
    firstReading: {
      reference: "Zacharie 9, 9-10",
      text: `Ainsi parle le Seigneur : Exulte de toutes tes forces, fille de Sion ! Pousse des cris de joie, fille de Jérusalem ! Voici ton roi qui vient à toi : il est juste et victorieux, pauvre et monté sur un âne. Il annoncera la paix aux nations, et son pouvoir s'étendra d'une mer à l'autre.`,
    },
    psalm: {
      reference: "Psaume 144 (145)",
      text: `Mon Dieu, mon Roi, je bénirai ton nom toujours et à jamais ! Le Seigneur est tendresse et pitié, lent à la colère et plein d'amour. La bonté du Seigneur est pour tous, sa tendresse, pour toutes ses œuvres.`,
    },
    secondReading: {
      reference: "Romains 8, 9.11-13",
      text: `Frères, vous, vous n'êtes pas sous l'emprise de la chair, mais sous celle de l'Esprit, puisque l'Esprit de Dieu habite en vous. Et si l'Esprit de Celui qui a ressuscité Jésus d'entre les morts habite en vous, Celui qui a ressuscité Jésus d'entre les morts donnera aussi la vie à vos corps mortels par son Esprit qui habite en vous.`,
    },
    gospel: {
      reference: "Matthieu 11, 25-30",
      text: `En ce temps-là, Jésus prit la parole et dit : « Père, Seigneur du ciel et de la terre, je proclame ta louange : ce que tu as caché aux sages et aux savants, tu l'as révélé aux tout-petits. Venez à moi, vous tous qui peinez sous le poids du fardeau, et moi, je vous procurerai le repos. Mon joug est facile à porter, et mon fardeau, léger. »`,
    },
  },
  "ot-15-sun": {
    firstReading: {
      reference: "Isaïe 55, 10-11",
      text: `Ainsi parle le Seigneur : La pluie et la neige qui descendent des cieux n'y retournent pas sans avoir abreuvé la terre, sans l'avoir fécondée et l'avoir fait germer. Ainsi ma parole, qui sort de ma bouche, ne me reviendra pas sans résultat, sans avoir fait ce qui me plaît.`,
    },
    psalm: {
      reference: "Psaume 64 (65)",
      text: `Tu visites la terre et tu l'abreuves, tu la combles de richesses ; les ruisseaux de Dieu regorgent d'eau. Tu couronnes une année de bienfaits ; sur ton passage, ruisselle l'abondance. Les prairies se parent de troupeaux, les campagnes se couvrent de blé.`,
    },
    secondReading: {
      reference: "Romains 8, 18-23",
      text: `Frères, j'estime qu'il n'y a pas de commune mesure entre les souffrances du temps présent et la gloire qui va être révélée pour nous. En effet, la création attend avec impatience la révélation des fils de Dieu. Nous aussi, en nous-mêmes, nous gémissons ; nous attendons notre adoption, la rédemption de notre corps.`,
    },
    gospel: {
      reference: "Matthieu 13, 1-23",
      text: `En ce temps-là, Jésus sortit de la maison, et il s'assit au bord de la mer. Il leur dit beaucoup de choses en paraboles : « Voici que le semeur sortit pour semer. Une partie tomba au bord du chemin, une autre sur le sol pierreux, une autre dans les ronces, une autre dans la bonne terre et elle donna du fruit. Celui qui a des oreilles, qu'il entende ! »`,
    },
  },
  "ot-16-sun": {
    firstReading: {
      reference: "Sagesse 12, 13.16-19",
      text: `Il n'y a pas d'autre dieu que toi, Seigneur, qui prenne soin de toute chose. Ta force est le principe de ta justice, et ta domination sur toute chose te rend indulgent envers toute chose. Toi qui disposes de la force, tu juges avec indulgence. Tu as donné à tes fils la belle espérance qu'après le péché tu accordes la conversion.`,
    },
    psalm: {
      reference: "Psaume 85 (86)",
      text: `Toi, Seigneur, Dieu de tendresse et de pitié, lent à la colère, plein d'amour et de vérité ! Toi qui es bon et qui pardonnes, plein d'amour pour tous ceux qui t'appellent.`,
    },
    secondReading: {
      reference: "Romains 8, 26-27",
      text: `Frères, l'Esprit Saint vient au secours de notre faiblesse, car nous ne savons pas prier comme il faut. L'Esprit lui-même intercède pour nous par des gémissements inexprimables. Et Dieu, qui scrute les cœurs, connaît les intentions de l'Esprit puisque c'est selon Dieu que l'Esprit intercède pour les fidèles.`,
    },
    gospel: {
      reference: "Matthieu 13, 24-43",
      text: `En ce temps-là, Jésus proposa aux foules une autre parabole : « Le royaume des Cieux est comparable à un homme qui a semé du bon grain dans son champ. Or, pendant que les gens dormaient, son ennemi survint, et sema de l'ivraie. Laissez-les pousser ensemble jusqu'à la moisson ; à ce moment, je dirai aux moissonneurs : Enlevez d'abord l'ivraie, liez-la en bottes pour la brûler ; quant au blé, ramassez-le dans mon grenier. »`,
    },
  },
  "ot-17-sun": {
    firstReading: {
      reference: "1 Rois 3, 5.7-12",
      text: `En ces jours-là, à Gabaon, pendant la nuit, le Seigneur apparut en songe à Salomon. Dieu lui dit : « Demande ce que je dois te donner. » Salomon répondit : « Donne à ton serviteur un cœur attentif pour qu'il sache gouverner ton peuple et discerner le bien et le mal. » Cette demande plut au Seigneur.`,
    },
    psalm: {
      reference: "Psaume 118 (119)",
      text: `De quel amour j'aime ta loi, Seigneur : tout le jour je la médite ! Mon partage, Seigneur, je l'ai dit, c'est d'observer tes paroles. Mon bonheur, c'est la loi de ta bouche, plus qu'un monceau d'or ou d'argent.`,
    },
    secondReading: {
      reference: "Romains 8, 28-30",
      text: `Frères, nous le savons, quand les hommes aiment Dieu, lui-même fait tout contribuer à leur bien, puisqu'ils sont appelés selon le dessein de son amour. Ceux qu'il a destinés d'avance, il les a aussi appelés ; ceux qu'il a appelés, il en a fait des justes ; et ceux qu'il a rendus justes, il leur a donné sa gloire.`,
    },
    gospel: {
      reference: "Matthieu 13, 44-52",
      text: `En ce temps-là, Jésus disait aux foules : « Le royaume des Cieux est comparable à un trésor caché dans un champ ; l'homme qui l'a découvert le cache de nouveau. Dans sa joie, il va vendre tout ce qu'il possède, et il achète ce champ. Le royaume des Cieux est encore comparable à un négociant qui recherche des perles fines. Ayant trouvé une perle de grande valeur, il va vendre tout ce qu'il possède, et il achète la perle. »`,
    },
  },
  "ot-18-sun": {
    firstReading: {
      reference: "Isaïe 55, 1-3",
      text: `Ainsi parle le Seigneur : Vous tous qui avez soif, venez, voici de l'eau ! Même si vous n'avez pas d'argent, venez acheter et consommer. Pourquoi dépenser votre argent pour ce qui ne nourrit pas ? Écoutez-moi bien, et vous mangerez de bonnes choses. Prêtez l'oreille ! Venez à moi ! Écoutez, et vous vivrez.`,
    },
    psalm: {
      reference: "Psaume 144 (145)",
      text: `Tu ouvres ta main, Seigneur : nous voici rassasiés. Le Seigneur est tendresse et pitié, lent à la colère et plein d'amour. La bonté du Seigneur est pour tous, sa tendresse, pour toutes ses œuvres. Les yeux sur toi, tous ils espèrent : tu leur donnes la nourriture au temps voulu.`,
    },
    secondReading: {
      reference: "Romains 8, 35.37-39",
      text: `Frères, qui pourra nous séparer de l'amour du Christ ? La détresse ? l'angoisse ? la persécution ? la faim ? le dénuement ? le danger ? le glaive ? Mais, en tout cela nous sommes les grands vainqueurs grâce à celui qui nous a aimés. Rien ne pourra nous séparer de l'amour de Dieu qui est dans le Christ Jésus notre Seigneur.`,
    },
    gospel: {
      reference: "Matthieu 14, 13-21",
      text: `En ce temps-là, quand Jésus apprit la mort de Jean le Baptiste, il se retira en barque dans un endroit désert, à l'écart. Il vit une grande foule de gens ; il fut saisi de compassion envers eux et guérit les infirmes. « Donnez-leur vous-mêmes à manger. » Ils mangèrent tous et ils furent rassasiés. On ramassa les morceaux qui restaient : cela faisait douze paniers pleins.`,
    },
  },
  "ot-19-sun": {
    firstReading: {
      reference: "1 Rois 19, 9a.11-13a",
      text: `En ces jours-là, lorsque le prophète Élie fut arrivé à l'Horeb, la montagne de Dieu, il entra dans une caverne et y passa la nuit. Le Seigneur dit : « Sors et tiens-toi sur la montagne. » Il y eut un ouragan, puis un tremblement de terre, puis un feu, mais le Seigneur n'était ni dans l'ouragan, ni dans le tremblement de terre, ni dans le feu. Après le feu, il y eut le murmure d'une brise légère.`,
    },
    psalm: {
      reference: "Psaume 84 (85)",
      text: `J'écoute : que dira le Seigneur Dieu ? Ce qu'il dit, c'est la paix pour son peuple et ses fidèles. Son salut est proche de ceux qui le craignent, et la gloire habitera notre terre. Amour et vérité se rencontrent, justice et paix s'embrassent.`,
    },
    secondReading: {
      reference: "Romains 9, 1-5",
      text: `Frères, c'est la vérité que je dis dans le Christ, je ne mens pas, et ma conscience m'en rend témoignage dans l'Esprit Saint. J'ai dans le cœur une grande tristesse, une douleur incessante. Les Israélites sont un peuple adopté par Dieu ; la gloire, les alliances, la Loi, le culte, les promesses de Dieu, tout cela est à eux.`,
    },
    gospel: {
      reference: "Matthieu 14, 22-33",
      text: `Après avoir nourri la foule, Jésus obligea les disciples à monter dans la barque. Vers la fin de la nuit, Jésus vint vers eux en marchant sur la mer. Pierre lui dit : « Seigneur, si c'est bien toi, ordonne-moi de venir vers toi sur les eaux. » Pierre marcha sur les eaux, mais voyant la force du vent, il eut peur et commença à enfoncer. Jésus le saisit : « Homme de peu de foi, pourquoi as-tu douté ? »`,
    },
  },
  "ot-20-sun": {
    firstReading: {
      reference: "Isaïe 56, 1.6-7",
      text: `Ainsi parle le Seigneur : Observez le droit, pratiquez la justice, car mon salut approche, il vient, et ma justice va se révéler. Les étrangers qui se sont attachés au Seigneur, je les conduirai à ma montagne sainte, et je les rendrai heureux dans ma maison de prière. Car ma maison s'appellera « Maison de prière pour tous les peuples ».`,
    },
    psalm: {
      reference: "Psaume 66 (67)",
      text: `Que les peuples, Dieu, te rendent grâce ; qu'ils te rendent grâce tous ensemble ! Que Dieu nous prenne en grâce et nous bénisse, que son visage s'illumine pour nous, et ton chemin sera connu sur la terre, ton salut, parmi toutes les nations.`,
    },
    secondReading: {
      reference: "Romains 11, 13-15.29-32",
      text: `Frères, je vous le dis à vous, qui venez des nations païennes : dans la mesure où je suis apôtre des nations, j'honore mon ministère. Car les dons gratuits de Dieu et son appel sont sans repentance. Dieu a enfermé tous les hommes dans la désobéissance pour faire à tous miséricorde.`,
    },
    gospel: {
      reference: "Matthieu 15, 21-28",
      text: `En ce temps-là, Jésus se retira dans la région de Tyr et de Sidon. Voici qu'une Cananéenne, venue de ces territoires, disait : « Prends pitié de moi, Seigneur, fils de David ! Ma fille est tourmentée par un démon. » Elle reprit : « Les petits chiens mangent les miettes qui tombent de la table de leurs maîtres. » Jésus répondit : « Femme, grande est ta foi, que tout se passe pour toi comme tu le veux ! »`,
    },
  },
  "ot-21-sun": {
    firstReading: {
      reference: "Isaïe 22, 19-23",
      text: `Ainsi parle le Seigneur à Shebna le maître du palais : « Je te chasserai de ton poste. J'appellerai mon serviteur Éliakim. Je le revêtirai de ta tunique, je le ceindrai de ton écharpe, je lui remettrai tes pouvoirs. Il sera un père pour les habitants de Jérusalem. Je mettrai sur son épaule la clef de la maison de David. »`,
    },
    psalm: {
      reference: "Psaume 137 (138)",
      text: `De tout mon cœur, Seigneur, je te rends grâce : tu as entendu les paroles de ma bouche. Je te chante en présence des anges. Tu as exalté ton nom et ta parole au-dessus de tout. Le jour où tu répondis à mon appel, tu fis grandir en mon âme la force.`,
    },
    secondReading: {
      reference: "Romains 11, 33-36",
      text: `Quelle profondeur dans la richesse, la sagesse et la connaissance de Dieu ! Ses décisions sont insondables, ses chemins sont impénétrables ! Qui a connu la pensée du Seigneur ? Qui a été son conseiller ? Car tout est de lui, et par lui, et pour lui. À lui la gloire pour l'éternité ! Amen.`,
    },
    gospel: {
      reference: "Matthieu 16, 13-20",
      text: `En ce temps-là, Jésus demandait à ses disciples : « Au dire des gens, qui est le Fils de l'homme ? » Simon-Pierre déclara : « Tu es le Christ, le Fils du Dieu vivant ! » Jésus lui dit : « Heureux es-tu, Simon fils de Yonas : ce n'est pas la chair et le sang qui t'ont révélé cela, mais mon Père qui est aux cieux. Tu es Pierre, et sur cette pierre je bâtirai mon Église. »`,
    },
  },
  "ot-22-sun": {
    firstReading: {
      reference: "Jérémie 20, 7-9",
      text: `Seigneur, tu m'as séduit, et j'ai été séduit ; tu m'as saisi, et tu as été le plus fort. À longueur de journée, je suis exposé à la raillerie. Je me disais : « Je ne penserai plus à lui, je ne parlerai plus en son nom. » Mais il y avait en moi comme un feu dévorant, au plus profond de mon être. Je m'épuisais à le maîtriser, sans y réussir.`,
    },
    psalm: {
      reference: "Psaume 62 (63)",
      text: `Dieu, tu es mon Dieu, je te cherche dès l'aube : mon âme a soif de toi. Dans ta justice, j'ai vu ta puissance et ta gloire. Ton amour vaut mieux que la vie : tu seras la louange de mes lèvres ! Toute ma vie, je vais te bénir.`,
    },
    secondReading: {
      reference: "Romains 12, 1-2",
      text: `Frères, je vous exhorte, par la tendresse de Dieu, à lui présenter votre corps en sacrifice vivant, saint, capable de plaire à Dieu : c'est là, pour vous, la juste manière de lui rendre un culte. Ne prenez pas pour modèle le monde présent, mais transformez-vous en renouvelant votre façon de penser.`,
    },
    gospel: {
      reference: "Matthieu 16, 21-27",
      text: `En ce temps-là, Jésus commença à montrer à ses disciples qu'il lui fallait aller à Jérusalem, souffrir beaucoup et être tué, et le troisième jour ressusciter. Pierre le prit à part et se mit à lui faire de vifs reproches. Jésus dit à Pierre : « Passe derrière moi, Satan ! » Puis il dit : « Si quelqu'un veut marcher à ma suite, qu'il renonce à lui-même, qu'il prenne sa croix et qu'il me suive. »`,
    },
  },
  "ot-23-sun": {
    firstReading: {
      reference: "Ézéchiel 33, 7-9",
      text: `La parole du Seigneur me fut adressée : « Fils d'homme, je fais de toi un guetteur pour la maison d'Israël. Lorsque tu entendras une parole de ma bouche, tu les avertiras de ma part. Si tu n'avertis pas le méchant, c'est à toi que je demanderai compte de son sang. Mais si tu l'avertis, toi, tu auras sauvé ta vie. »`,
    },
    psalm: {
      reference: "Psaume 94 (95)",
      text: `Aujourd'hui, ne fermez pas votre cœur, mais écoutez la voix du Seigneur ! Venez, crions de joie pour le Seigneur, acclamons notre Rocher, notre salut ! Entrez, inclinez-vous, prosternez-vous, adorons le Seigneur qui nous a faits.`,
    },
    secondReading: {
      reference: "Romains 13, 8-10",
      text: `Frères, n'ayez de dette envers personne, sauf celle de l'amour mutuel. Car celui qui aime les autres a pleinement accompli la Loi. L'amour ne fait rien de mal au prochain. Donc, le plein accomplissement de la Loi, c'est l'amour.`,
    },
    gospel: {
      reference: "Matthieu 18, 15-20",
      text: `En ce temps-là, Jésus disait à ses disciples : « Si ton frère a commis un péché contre toi, va lui faire des reproches seul à seul. S'il t'écoute, tu as gagné ton frère. Amen, je vous le dis : tout ce que vous aurez lié sur la terre sera lié dans le ciel. Quand deux ou trois sont réunis en mon nom, je suis là, au milieu d'eux. »`,
    },
  },
  "ot-24-sun": {
    firstReading: {
      reference: "Ben Sira le Sage 27, 30 – 28, 7",
      text: `Rancune et colère, voilà des choses abominables où le pécheur est passé maître. Celui qui se venge éprouvera la vengeance du Seigneur. Pardonne à ton prochain le tort qu'il t'a fait ; alors, à ta prière, tes péchés seront remis. Pense à ton sort final et renonce à toute haine.`,
    },
    psalm: {
      reference: "Psaume 102 (103)",
      text: `Le Seigneur est tendresse et pitié, lent à la colère et plein d'amour. Il n'agit pas envers nous selon nos fautes. Comme le ciel domine la terre, fort est son amour pour qui le craint. Aussi loin qu'est l'orient de l'occident, il met loin de nous nos péchés.`,
    },
    secondReading: {
      reference: "Romains 14, 7-9",
      text: `Frères, aucun d'entre nous ne vit pour soi-même, et aucun ne meurt pour soi-même : si nous vivons, nous vivons pour le Seigneur ; si nous mourons, nous mourons pour le Seigneur. Dans notre vie comme dans notre mort, nous appartenons au Seigneur. Car, si le Christ a connu la mort, puis la vie, c'est pour devenir le Seigneur et des morts et des vivants.`,
    },
    gospel: {
      reference: "Matthieu 18, 21-35",
      text: `En ce temps-là, Pierre s'approcha de Jésus pour lui demander : « Seigneur, lorsque mon frère commettra des fautes contre moi, combien de fois dois-je lui pardonner ? Jusqu'à sept fois ? » Jésus lui répondit : « Je ne te dis pas jusqu'à sept fois, mais jusqu'à soixante-dix fois sept fois. » Et il lui raconta la parabole du serviteur impitoyable.`,
    },
  },
  "ot-25-sun": {
    firstReading: {
      reference: "Isaïe 55, 6-9",
      text: `Cherchez le Seigneur tant qu'il se laisse trouver ; invoquez-le tant qu'il est proche. Que le méchant abandonne son chemin, et l'homme perfide, ses pensées ! Car mes pensées ne sont pas vos pensées, et vos chemins ne sont pas mes chemins – oracle du Seigneur. Autant le ciel est élevé au-dessus de la terre, autant mes chemins sont élevés au-dessus de vos chemins.`,
    },
    psalm: {
      reference: "Psaume 144 (145)",
      text: `Chaque jour je te bénirai, je louerai ton nom toujours et à jamais. Le Seigneur est tendresse et pitié, lent à la colère et plein d'amour. Le Seigneur est proche de ceux qui l'invoquent, de tous ceux qui l'invoquent en vérité.`,
    },
    secondReading: {
      reference: "Philippiens 1, 20c-24.27a",
      text: `Frères, soit que je vive, soit que je meure, le Christ sera glorifié dans mon corps. Car pour moi, vivre c'est le Christ, et mourir est un avantage. Je suis tiraillé entre les deux : je voudrais bien partir pour être avec le Christ, car c'est bien préférable. Mais, de l'autre côté, demeurer dans la chair est plus nécessaire pour vous.`,
    },
    gospel: {
      reference: "Matthieu 20, 1-16a",
      text: `En ce temps-là, Jésus disait cette parabole à ses disciples : « Le royaume des Cieux est comparable au maître d'un domaine qui sortit dès le matin afin d'embaucher des ouvriers pour sa vigne. Ceux qui n'avaient commencé qu'à la onzième heure s'avancèrent et reçurent chacun une pièce d'argent. C'est ainsi que les derniers seront premiers, et les premiers seront derniers. »`,
    },
  },
  "ot-26-sun": {
    firstReading: {
      reference: "Ézéchiel 18, 25-28",
      text: `Ainsi parle le Seigneur : « Vous dites : "La conduite du Seigneur n'est pas la bonne." Écoutez donc, fils d'Israël : est-ce ma conduite qui n'est pas la bonne ? N'est-ce pas plutôt la vôtre ? Si le méchant se détourne de sa méchanceté pour pratiquer le droit et la justice, il sauvera sa vie. »`,
    },
    psalm: {
      reference: "Psaume 24 (25)",
      text: `Rappelle-toi, Seigneur, ta tendresse, ton amour qui est de toujours. Oublie les révoltes, les péchés de ma jeunesse ; dans ton amour, ne m'oublie pas. Il est droit, il est bon, le Seigneur, lui qui montre aux pécheurs le chemin.`,
    },
    secondReading: {
      reference: "Philippiens 2, 1-11",
      text: `Frères, s'il est vrai que dans le Christ on se réconforte les uns les autres, ayez les mêmes dispositions, le même amour, les mêmes sentiments. Le Christ Jésus, ayant la condition de Dieu, s'est anéanti, prenant la condition de serviteur. Il s'est abaissé, devenant obéissant jusqu'à la mort, et la mort de la croix.`,
    },
    gospel: {
      reference: "Matthieu 21, 28-32",
      text: `En ce temps-là, Jésus disait aux grands prêtres et aux anciens du peuple : « Quel est votre avis ? Un homme avait deux fils. Il vint trouver le premier et lui dit : "Mon enfant, va travailler aujourd'hui à la vigne." Celui-ci répondit : "Je ne veux pas." Mais ensuite, s'étant repenti, il y alla. Lequel des deux a fait la volonté du père ? » Ils lui répondent : « Le premier. »`,
    },
  },
  "ot-27-sun": {
    firstReading: {
      reference: "Isaïe 5, 1-7",
      text: `Je veux chanter pour mon ami le chant du bien-aimé à sa vigne. Mon ami avait une vigne sur un coteau fertile. Il en retira les pierres, et y planta les cépages les meilleurs. Il espérait de beaux raisins, elle en donna de mauvais. La vigne du Seigneur de l'univers, c'est la maison d'Israël.`,
    },
    psalm: {
      reference: "Psaume 79 (80)",
      text: `La vigne que tu as prise à l'Égypte, tu la replantes en chassant des nations. Dieu de l'univers, reviens ! Du haut des cieux, regarde et vois : visite cette vigne, protège-la, celle qu'a plantée ta main droite.`,
    },
    secondReading: {
      reference: "Philippiens 4, 6-9",
      text: `Frères, ne soyez inquiets de rien, mais, en toute circonstance, priez et suppliez, tout en rendant grâce, pour faire connaître à Dieu vos demandes. Et la paix de Dieu, qui dépasse tout ce qu'on peut concevoir, gardera vos cœurs et vos pensées dans le Christ Jésus.`,
    },
    gospel: {
      reference: "Matthieu 21, 33-43",
      text: `En ce temps-là, Jésus disait aux grands prêtres et aux anciens : « Écoutez une autre parabole : Un homme était propriétaire d'un domaine ; il planta une vigne, l'entoura d'une clôture, y creusa un pressoir et bâtit une tour de garde. Puis il la loua à des vignerons, et partit en voyage. La pierre qu'ont rejetée les bâtisseurs est devenue la pierre d'angle. Le royaume de Dieu vous sera enlevé pour être donné à une nation qui lui fera produire ses fruits. »`,
    },
  },
  "ot-28-sun": {
    firstReading: {
      reference: "Isaïe 25, 6-10a",
      text: `Ce jour-là, le Seigneur de l'univers préparera pour tous les peuples, sur sa montagne, un festin de viandes grasses et de vins capiteux. Sur cette montagne, il fera disparaître le voile de deuil qui enveloppe tous les peuples. Il détruira la mort pour toujours. Le Seigneur Dieu essuiera les larmes sur tous les visages.`,
    },
    psalm: {
      reference: "Psaume 22 (23)",
      text: `Le Seigneur est mon berger : je ne manque de rien. Tu prépares la table pour moi devant mes ennemis ; tu répands le parfum sur ma tête, ma coupe est débordante. Grâce et bonheur m'accompagnent tous les jours de ma vie.`,
    },
    secondReading: {
      reference: "Philippiens 4, 12-14.19-20",
      text: `Frères, je sais vivre de peu, je sais aussi être dans l'abondance. J'ai été formé à tout et pour tout : à être rassasié et à souffrir la faim, à être dans l'abondance et dans les privations. Je peux tout en celui qui me donne la force. Et mon Dieu comblera tous vos besoins selon sa richesse, magnifiquement, dans le Christ Jésus.`,
    },
    gospel: {
      reference: "Matthieu 22, 1-14",
      text: `En ce temps-là, Jésus se mit de nouveau à parler en paraboles : « Le royaume des Cieux est comparable à un roi qui célébra les noces de son fils. Il envoya ses serviteurs appeler les invités aux noces, mais ceux-ci ne voulaient pas venir. Allez donc aux croisées des chemins : tous ceux que vous trouverez, invitez-les à la noce. Beaucoup sont appelés, mais peu sont élus. »`,
    },
  },
  "ot-29-sun": {
    firstReading: {
      reference: "Isaïe 45, 1.4-6",
      text: `Ainsi parle le Seigneur à son messie, à Cyrus : « Je t'ai appelé par ton nom, je t'ai donné un titre, alors que tu ne me connaissais pas. Je suis le Seigneur, il n'en est pas d'autre : hors moi, pas de Dieu. Pour que l'on sache, de l'orient à l'occident, qu'il n'y a rien en dehors de moi. »`,
    },
    psalm: {
      reference: "Psaume 95 (96)",
      text: `Rendez au Seigneur la gloire de son nom. Chantez au Seigneur un chant nouveau, chantez au Seigneur, terre entière. Racontez à tous les peuples sa gloire, à toutes les nations ses merveilles !`,
    },
    secondReading: {
      reference: "1 Thessaloniciens 1, 1-5b",
      text: `Paul, Silvain et Timothée, à l'Église de Thessalonique. À vous, la grâce et la paix. À tout moment, nous rendons grâce à Dieu au sujet de vous tous, en faisant mémoire de vous dans nos prières. Notre Évangile n'a pas été chez vous simple parole, mais puissance, action de l'Esprit Saint.`,
    },
    gospel: {
      reference: "Matthieu 22, 15-21",
      text: `En ce temps-là, les pharisiens allèrent tenir conseil pour prendre Jésus au piège. Ils lui envoyèrent leurs disciples, accompagnés des partisans d'Hérode : « Est-il permis, oui ou non, de payer l'impôt à César ? » Jésus dit : « Montrez-moi la monnaie de l'impôt. » « Rendez donc à César ce qui est à César, et à Dieu ce qui est à Dieu. »`,
    },
  },
  "ot-30-sun": {
    firstReading: {
      reference: "Exode 22, 20-26",
      text: `Ainsi parle le Seigneur : « Tu ne maltraiteras point l'immigré qui réside chez toi, tu ne l'opprimeras point, car vous étiez vous-mêmes des immigrés en Égypte. Vous n'accablerez pas la veuve et l'orphelin. Si tu prêtes de l'argent à un pauvre, tu ne lui imposeras pas d'intérêts. Si tu prends en gage le manteau de ton prochain, tu le lui rendras avant le coucher du soleil. »`,
    },
    psalm: {
      reference: "Psaume 17 (18)",
      text: `Je t'aime, Seigneur, ma force : Seigneur, mon roc, ma forteresse, Dieu mon libérateur, le rocher qui m'abrite, mon bouclier, mon fort, mon arme de victoire ! Vive le Seigneur ! Béni soit mon Rocher !`,
    },
    secondReading: {
      reference: "1 Thessaloniciens 1, 5c-10",
      text: `Frères, vous savez comment nous nous sommes comportés chez vous pour votre bien. Et vous-mêmes, vous nous avez imités, nous et le Seigneur, en accueillant la Parole au milieu d'une grande épreuve avec la joie de l'Esprit Saint. Vous vous êtes tournés vers Dieu en vous détournant des idoles, afin de servir le Dieu vivant et véritable.`,
    },
    gospel: {
      reference: "Matthieu 22, 34-40",
      text: `En ce temps-là, les pharisiens, apprenant que Jésus avait fermé la bouche aux sadducéens, se réunirent. Un docteur de la Loi posa une question à Jésus pour le mettre à l'épreuve : « Maître, dans la Loi, quel est le grand commandement ? » Jésus lui répondit : « Tu aimeras le Seigneur ton Dieu de tout ton cœur. Tu aimeras ton prochain comme toi-même. De ces deux commandements dépend toute la Loi. »`,
    },
  },
  "ot-31-sun": {
    firstReading: {
      reference: "Malachie 1, 14b – 2, 2b.8-10",
      text: `Je suis un grand roi – dit le Seigneur de l'univers – et mon nom inspire la crainte parmi les nations. Maintenant, à vous cet avertissement, prêtres : vous vous êtes écartés de la route, vous avez fait de la Loi une occasion de chute. N'avons-nous pas tous un seul Père ? N'est-ce pas un seul Dieu qui nous a créés ?`,
    },
    psalm: {
      reference: "Psaume 130 (131)",
      text: `Garde mon âme dans la paix près de toi, Seigneur. Seigneur, je n'ai pas le cœur fier ni le regard ambitieux ; je ne poursuis ni grands desseins, ni merveilles qui me dépassent. Non, mais je tiens mon âme égale et silencieuse ; mon âme est en moi comme un enfant.`,
    },
    secondReading: {
      reference: "1 Thessaloniciens 2, 7b-9.13",
      text: `Frères, nous avons été pleins de douceur avec vous, comme une mère qui entoure de soins ses nourrissons. Ayant pour vous une telle affection, nous aurions voulu vous donner non seulement l'Évangile de Dieu, mais tout nous-mêmes. Voilà pourquoi nous ne cessons de rendre grâce à Dieu : quand vous avez reçu la parole de Dieu, vous l'avez accueillie pour ce qu'elle est réellement, la parole de Dieu.`,
    },
    gospel: {
      reference: "Matthieu 23, 1-12",
      text: `En ce temps-là, Jésus s'adressa aux foules et à ses disciples : « Les scribes et les pharisiens enseignent dans la chaire de Moïse. Tout ce qu'ils peuvent vous dire, faites-le et observez-le. Mais n'agissez pas d'après leurs actes, car ils disent et ne font pas. Ils lient de pesants fardeaux et en chargent les épaules des gens. Le plus grand parmi vous sera votre serviteur. Qui s'élèvera sera abaissé, qui s'abaissera sera élevé. »`,
    },
  },
  "ot-32-sun": {
    firstReading: {
      reference: "Sagesse 6, 12-16",
      text: `La Sagesse est resplendissante, elle ne se flétrit pas. Elle se laisse aisément contempler par ceux qui l'aiment, elle se laisse trouver par ceux qui la cherchent. Elle devance leurs désirs en se faisant connaître la première. Celui qui la cherche dès l'aurore ne se fatiguera pas : il la trouvera assise à sa porte.`,
    },
    psalm: {
      reference: "Psaume 62 (63)",
      text: `Dieu, tu es mon Dieu, je te cherche dès l'aube : mon âme a soif de toi ; après toi languit ma chair, terre aride, altérée, sans eau. Je t'ai contemplé au sanctuaire, j'ai vu ta force et ta gloire. Ton amour vaut mieux que la vie.`,
    },
    secondReading: {
      reference: "1 Thessaloniciens 4, 13-18",
      text: `Frères, nous ne voulons pas vous laisser dans l'ignorance au sujet de ceux qui se sont endormis dans la mort ; il ne faut pas que vous soyez abattus comme les autres qui n'ont pas d'espérance. Jésus est mort et ressuscité : de même, nous le croyons, ceux qui se sont endormis, Dieu les emmènera avec Jésus.`,
    },
    gospel: {
      reference: "Matthieu 25, 1-13",
      text: `En ce temps-là, Jésus disait à ses disciples cette parabole : « Le royaume des Cieux sera comparable à dix jeunes filles invitées à des noces, qui prirent leur lampe pour sortir à la rencontre de l'époux. Cinq d'entre elles étaient insouciantes, et cinq étaient prévoyantes. Les insouciantes avaient pris leur lampe sans emporter d'huile. Veillez donc, car vous ne savez ni le jour ni l'heure. »`,
    },
  },
  "ot-33-sun": {
    firstReading: {
      reference: "Proverbes 31, 10-13.19-20.30-31",
      text: `Une femme parfaite, qui la trouvera ? Elle est précieuse plus que les perles. Elle a travaillé de ses mains avec entrain. Elle tend la main au malheureux, elle ouvre ses bras au pauvre. Décevante est la grâce, et vaine la beauté ; la femme qui craint le Seigneur est seule digne de louange.`,
    },
    psalm: {
      reference: "Psaume 127 (128)",
      text: `Heureux qui craint le Seigneur et marche selon ses voies ! Tu te nourriras du travail de tes mains : heureux es-tu ! À toi, le bonheur ! Ta femme sera dans ta maison comme une vigne généreuse.`,
    },
    secondReading: {
      reference: "1 Thessaloniciens 5, 1-6",
      text: `Frères, pour ce qui est des temps et des moments de la venue du Seigneur, vous n'avez pas besoin qu'on vous en écrive. Vous savez très bien que le jour du Seigneur vient comme un voleur dans la nuit. Ne dormons pas, comme les autres, mais soyons vigilants et sobres.`,
    },
    gospel: {
      reference: "Matthieu 25, 14-30",
      text: `En ce temps-là, Jésus disait à ses disciples cette parabole : « C'est comme un homme qui partait en voyage : il appela ses serviteurs et leur confia ses biens. À l'un il remit une somme de cinq talents, à un autre deux, à un troisième un seul. Celui qui avait reçu cinq talents en gagna cinq autres. Le maître lui dit : "Très bien, serviteur bon et fidèle, tu as été fidèle pour peu de choses, je t'en confierai beaucoup ; entre dans la joie de ton seigneur." »`,
    },
  },
  "christ-king-sun": {
    firstReading: {
      reference: "Ézéchiel 34, 11-12.15-17",
      text: `Ainsi parle le Seigneur Dieu : Voici que moi-même, je m'occuperai de mes brebis, et je veillerai sur elles. C'est moi qui ferai paître mon troupeau, et c'est moi qui le ferai reposer. La brebis perdue, je la chercherai ; l'égarée, je la ramènerai. Quant à vous, mes brebis, je vais juger entre brebis et brebis.`,
    },
    psalm: {
      reference: "Psaume 22 (23)",
      text: `Le Seigneur est mon berger : je ne manque de rien. Sur des prés d'herbe fraîche, il me fait reposer. Il me mène vers les eaux tranquilles et me fait revivre. Grâce et bonheur m'accompagnent tous les jours de ma vie ; j'habiterai la maison du Seigneur pour la durée de mes jours.`,
    },
    secondReading: {
      reference: "1 Corinthiens 15, 20-26.28",
      text: `Frères, le Christ est ressuscité d'entre les morts, lui, premier-né d'entre ceux qui se sont endormis. Car, la mort étant venue par un homme, c'est par un homme aussi que vient la résurrection des morts. Le dernier ennemi qui sera anéanti, c'est la mort. Alors le Fils lui-même sera soumis à Dieu, et Dieu sera tout en tous.`,
    },
    gospel: {
      reference: "Matthieu 25, 31-46",
      text: `En ce temps-là, Jésus disait à ses disciples : « Quand le Fils de l'homme viendra dans sa gloire, escorté de tous les anges, il siégera sur son trône de gloire. Il séparera les hommes les uns des autres. Car j'avais faim, et vous m'avez donné à manger ; j'avais soif, et vous m'avez donné à boire ; j'étais un étranger, et vous m'avez accueilli. Chaque fois que vous l'avez fait à l'un de ces plus petits de mes frères, c'est à moi que vous l'avez fait. »`,
    },
  },
};
