import type { Reading } from "./readings";

interface ReadingSet {
  firstReading: Reading;
  psalm: Reading;
  gospel: Reading;
  secondReading?: Reading;
}

export const sundaysYearB: Record<string, ReadingSet> = {
  // ===================== AVENT =====================
  "advent-1-sun": {
    firstReading: {
      reference: "Isaïe 63, 16b-17.19b ; 64, 2b-7",
      text: `Tu es, Seigneur, notre Père, notre Rédempteur : tel est ton nom depuis toujours. Pourquoi, Seigneur, nous laisses-tu errer hors de tes chemins ? Ah ! Si tu déchirais les cieux, si tu descendais ! Nous sommes tous l'ouvrage de tes mains.`,
    },
    psalm: {
      reference: "Psaume 79 (80)",
      text: `Dieu de l'univers, reviens ! Du haut des cieux, regarde et vois. Visite cette vigne, protège-la, celle qu'a plantée ta main droite. Que ta main soutienne l'homme de ta droite, le fils de l'homme qui te doit sa force.`,
    },
    secondReading: {
      reference: "1 Corinthiens 1, 3-9",
      text: `Frères, que la grâce et la paix soient avec vous, de la part de Dieu notre Père et du Seigneur Jésus Christ. Je ne cesse de rendre grâce à Dieu à votre sujet. Aucun don de grâce ne vous manque, à vous qui attendez de voir se révéler notre Seigneur Jésus Christ. Il est fidèle, le Dieu qui vous a appelés à vivre en communion avec son Fils.`,
    },
    gospel: {
      reference: "Marc 13, 33-37",
      text: `En ce temps-là, Jésus disait à ses disciples : « Prenez garde, restez éveillés : car vous ne savez pas quand ce sera le moment. Il en est comme d'un homme parti en voyage : en quittant sa maison, il a donné tout pouvoir à ses serviteurs et à chacun sa tâche, et il a recommandé au portier de veiller. Veillez donc, car vous ne savez pas quand vient le maître de la maison. Ce que je vous dis là, je le dis à tous : Veillez ! »`,
    },
  },
  "advent-2-sun": {
    firstReading: {
      reference: "Isaïe 40, 1-5.9-11",
      text: `« Consolez, consolez mon peuple, dit votre Dieu. Parlez au cœur de Jérusalem. » Une voix proclame : « Dans le désert, préparez le chemin du Seigneur ; tracez droit, dans les terres arides, une route pour notre Dieu. Alors se révélera la gloire du Seigneur. » Voici le Seigneur Dieu ! Il vient avec puissance ; comme un berger, il fait paître son troupeau.`,
    },
    psalm: {
      reference: "Psaume 84 (85)",
      text: `J'écoute : que dira le Seigneur Dieu ? Ce qu'il dit, c'est la paix pour son peuple. Son salut est proche de ceux qui le craignent. Amour et vérité se rencontrent, justice et paix s'embrassent. La vérité germera de la terre, et du ciel se penchera la justice.`,
    },
    secondReading: {
      reference: "2 Pierre 3, 8-14",
      text: `Frères bien-aimés, pour le Seigneur, un seul jour est comme mille ans, et mille ans sont comme un seul jour. Le Seigneur ne tarde pas à tenir sa promesse. Il prend patience envers vous, car il ne veut pas en laisser quelques-uns se perdre, mais il veut que tous parviennent à la conversion. Nous attendons les cieux nouveaux et la terre nouvelle où résidera la justice.`,
    },
    gospel: {
      reference: "Marc 1, 1-8",
      text: `Commencement de l'Évangile de Jésus, Christ, Fils de Dieu. Jean le Baptiste parut dans le désert. Il proclamait un baptême de conversion pour le pardon des péchés. Il proclamait : « Voici venir derrière moi celui qui est plus fort que moi. Moi, je vous ai baptisés avec de l'eau ; lui vous baptisera dans l'Esprit Saint. »`,
    },
  },
  "advent-3-sun": {
    firstReading: {
      reference: "Isaïe 61, 1-2a.10-11",
      text: `L'esprit du Seigneur Dieu est sur moi parce que le Seigneur m'a consacré par l'onction. Il m'a envoyé annoncer la bonne nouvelle aux humbles, guérir ceux qui ont le cœur brisé, proclamer aux captifs leur délivrance. Je tressaille de joie dans le Seigneur, mon âme exulte en mon Dieu. Il m'a vêtue des vêtements du salut, il m'a couverte du manteau de la justice.`,
    },
    psalm: {
      reference: "Luc 1, 46-50.53-54 (Magnificat)",
      text: `Mon âme exalte le Seigneur, exulte mon esprit en Dieu, mon Sauveur ! Il s'est penché sur son humble servante ; désormais tous les âges me diront bienheureuse. Le Puissant fit pour moi des merveilles ; saint est son nom ! Il comble de biens les affamés, renvoie les riches les mains vides.`,
    },
    secondReading: {
      reference: "1 Thessaloniciens 5, 16-24",
      text: `Frères, soyez toujours dans la joie, priez sans relâche, rendez grâce en toute circonstance : c'est la volonté de Dieu à votre égard dans le Christ Jésus. N'éteignez pas l'Esprit, ne méprisez pas les prophéties. Que le Dieu de la paix lui-même vous sanctifie tout entiers. Il est fidèle, celui qui vous appelle : tout cela, il le fera.`,
    },
    gospel: {
      reference: "Jean 1, 6-8.19-28",
      text: `Il y eut un homme envoyé par Dieu ; son nom était Jean. Il est venu comme témoin, pour rendre témoignage à la Lumière, afin que tous croient par lui. Voici le témoignage de Jean, quand les Juifs envoyèrent des prêtres pour lui demander : « Qui es-tu ? » Il déclara : « Je suis la voix de celui qui crie dans le désert : Redressez le chemin du Seigneur. Moi, je baptise dans l'eau. Au milieu de vous se tient celui que vous ne connaissez pas. »`,
    },
  },
  "advent-4-sun": {
    firstReading: {
      reference: "2 Samuel 7, 1-5.8b-12.14a.16",
      text: `Le roi David dit au prophète Nathan : « Vois donc ! J'habite dans une maison de cèdre, et l'arche de Dieu habite sous un abri de toile ! » Mais, cette nuit-là, la parole du Seigneur fut adressée à Nathan : « Va dire à mon serviteur David : C'est moi qui t'ai pris au pâturage. Quand tes jours seront accomplis, je susciterai dans ta descendance un successeur. Moi, je serai pour lui un père ; et lui sera pour moi un fils. Ta maison et ta royauté subsisteront toujours devant moi. »`,
    },
    psalm: {
      reference: "Psaume 88 (89)",
      text: `L'amour du Seigneur, sans fin je le chante ; ta fidélité, je l'annonce d'âge en âge. C'est un amour bâti pour toujours ; ta fidélité est plus stable que les cieux. « Avec mon élu, j'ai fait une alliance, j'ai juré à David, mon serviteur : J'établirai ta descendance pour toujours. »`,
    },
    secondReading: {
      reference: "Romains 16, 25-27",
      text: `Frères, à Celui qui peut vous rendre forts selon mon Évangile et la proclamation de Jésus Christ, selon la révélation d'un mystère gardé depuis toujours dans le silence, mystère maintenant manifesté au moyen des écrits prophétiques, au Dieu unique et sage, par Jésus Christ, à lui la gloire pour les siècles des siècles. Amen.`,
    },
    gospel: {
      reference: "Luc 1, 26-38",
      text: `En ce temps-là, l'ange Gabriel fut envoyé par Dieu dans une ville de Galilée, appelée Nazareth, à une jeune fille vierge, accordée en mariage à un homme de la maison de David, appelé Joseph ; et le nom de la jeune fille était Marie. L'ange lui dit : « Sois sans crainte, Marie, tu as trouvé grâce auprès de Dieu. Tu vas concevoir et enfanter un fils ; tu lui donneras le nom de Jésus. » Marie dit : « Voici la servante du Seigneur ; que tout m'advienne selon ta parole. »`,
    },
  },

  // ===================== CARÊME =====================
  "lent-1-sun": {
    firstReading: {
      reference: "Genèse 9, 8-15",
      text: `Dieu dit à Noé et à ses fils : « Voici que moi, j'établis mon alliance avec vous, avec votre descendance après vous, et avec tous les êtres vivants. Oui, j'établis mon alliance avec vous : aucun être de chair ne sera plus détruit par les eaux du déluge. Je mets mon arc dans la nuée, il sera le signe de l'alliance entre moi et la terre. »`,
    },
    psalm: {
      reference: "Psaume 24 (25)",
      text: `Seigneur, enseigne-moi tes voies, fais-moi connaître ta route. Dirige-moi par ta vérité, enseigne-moi, car tu es le Dieu qui me sauve. Rappelle-toi, Seigneur, ta tendresse, ton amour qui est de toujours.`,
    },
    secondReading: {
      reference: "1 Pierre 3, 18-22",
      text: `Frères bien-aimés, le Christ, lui aussi, a souffert pour les péchés, une seule fois, le juste pour les injustes, afin de vous introduire devant Dieu. Dans sa chair, il a été mis à mort ; dans l'esprit, il a reçu la vie. C'est ainsi que le baptême vous sauve maintenant : il n'est pas la purification des souillures du corps, mais l'engagement envers Dieu d'une conscience droite, par la résurrection de Jésus Christ.`,
    },
    gospel: {
      reference: "Marc 1, 12-15",
      text: `En ce temps-là, l'Esprit poussa Jésus au désert et, dans le désert, il resta quarante jours, tenté par Satan. Il vivait parmi les bêtes sauvages, et les anges le servaient. Après l'arrestation de Jean, Jésus partit pour la Galilée proclamer l'Évangile de Dieu ; il disait : « Les temps sont accomplis : le règne de Dieu est tout proche. Convertissez-vous et croyez à l'Évangile. »`,
    },
  },
  "lent-2-sun": {
    firstReading: {
      reference: "Genèse 22, 1-2.9a.10-13.15-18",
      text: `En ces jours-là, Dieu mit Abraham à l'épreuve. Il lui dit : « Prends ton fils, ton unique, celui que tu aimes, Isaac, et va au pays de Moriah. Là, tu l'offriras en holocauste. » Abraham étendit la main et saisit le couteau pour immoler son fils. Mais l'ange du Seigneur l'appela et dit : « Ne porte pas la main sur le garçon ! Je le jure par moi-même : parce que tu as fait cela, je te comblerai de bénédictions. »`,
    },
    psalm: {
      reference: "Psaume 115 (116b)",
      text: `Je crois, et je parlerai, moi qui ai beaucoup souffert. Il en coûte au Seigneur de voir mourir les siens ! Je t'offrirai le sacrifice d'action de grâce, j'invoquerai le nom du Seigneur. Je tiendrai mes promesses au Seigneur, oui, devant tout son peuple.`,
    },
    secondReading: {
      reference: "Romains 8, 31b-34",
      text: `Frères, si Dieu est pour nous, qui sera contre nous ? Il n'a pas épargné son propre Fils, mais il l'a livré pour nous tous : comment pourrait-il, avec lui, ne pas nous donner tout ? Qui accusera ceux que Dieu a choisis ? Le Christ Jésus est mort ; bien plus, il est ressuscité, il est à la droite de Dieu, il intercède pour nous.`,
    },
    gospel: {
      reference: "Marc 9, 2-10",
      text: `En ce temps-là, Jésus prit avec lui Pierre, Jacques et Jean, et les emmena, eux seuls, à l'écart sur une haute montagne. Et il fut transfiguré devant eux. Ses vêtements devinrent resplendissants, d'une blancheur telle que personne sur terre ne peut obtenir une blancheur pareille. Une nuée survint qui les couvrit de son ombre, et de la nuée une voix se fit entendre : « Celui-ci est mon Fils bien-aimé : écoutez-le ! »`,
    },
  },
  "lent-3-sun": {
    firstReading: {
      reference: "Exode 20, 1-17",
      text: `En ces jours-là, sur le Sinaï, Dieu prononça toutes les paroles que voici : « Je suis le Seigneur ton Dieu, qui t'ai fait sortir du pays d'Égypte. Tu n'auras pas d'autres dieux en face de moi. Tu ne prononceras pas le nom du Seigneur ton Dieu pour le mal. Souviens-toi du jour du sabbat pour le sanctifier. Honore ton père et ta mère. Tu ne commettras pas de meurtre. Tu ne commettras pas d'adultère. Tu ne commettras pas de vol. »`,
    },
    psalm: {
      reference: "Psaume 18 (19)",
      text: `La loi du Seigneur est parfaite, qui redonne vie ; la charte du Seigneur est sûre, qui rend sages les simples. Les préceptes du Seigneur sont droits, ils réjouissent le cœur ; le commandement du Seigneur est limpide, il clarifie le regard.`,
    },
    secondReading: {
      reference: "1 Corinthiens 1, 22-25",
      text: `Frères, alors que les Juifs réclament des signes miraculeux, et que les Grecs recherchent une sagesse, nous, nous proclamons un Messie crucifié, scandale pour les Juifs, folie pour les nations païennes. Mais pour ceux que Dieu appelle, ce Messie est puissance de Dieu et sagesse de Dieu. Car ce qui est folie de Dieu est plus sage que les hommes.`,
    },
    gospel: {
      reference: "Jean 2, 13-25",
      text: `Comme la Pâque approchait, Jésus monta à Jérusalem. Dans le Temple, il trouva installés les marchands de bœufs, de brebis et de colombes, et les changeurs. Il fit un fouet avec des cordes et les chassa tous du Temple. Il dit : « Enlevez cela d'ici. Cessez de faire de la maison de mon Père une maison de commerce. » Les Juifs lui demandèrent : « Quel signe peux-tu nous donner ? » Jésus leur répondit : « Détruisez ce sanctuaire, et en trois jours je le relèverai. » Mais lui parlait du sanctuaire de son corps.`,
    },
  },
  "lent-4-sun": {
    firstReading: {
      reference: "2 Chroniques 36, 14-16.19-23",
      text: `En ces jours-là, tous les chefs des prêtres et le peuple multipliaient les infidélités. Le Seigneur, le Dieu de leurs pères, sans cesse leur envoyait des messagers, car il avait compassion de son peuple. Mais eux se moquaient des envoyés de Dieu. Alors ils incendièrent la Maison de Dieu et le peuple fut exilé à Babylone. La première année du règne de Cyrus, roi de Perse, le Seigneur suscita l'esprit de Cyrus qui fit publier : « Le Seigneur m'a chargé de lui bâtir une maison à Jérusalem. Quiconque parmi vous fait partie de son peuple, qu'il monte ! »`,
    },
    psalm: {
      reference: "Psaume 136 (137)",
      text: `Au bord des fleuves de Babylone nous étions assis et nous pleurions, nous souvenant de Sion. Si je t'oublie, Jérusalem, que ma main droite m'oublie ! Je veux que ma langue s'attache à mon palais si je perds ton souvenir.`,
    },
    secondReading: {
      reference: "Éphésiens 2, 4-10",
      text: `Frères, Dieu est riche en miséricorde ; à cause du grand amour dont il nous a aimés, nous qui étions des morts par suite de nos fautes, il nous a donné la vie avec le Christ. C'est bien par la grâce que vous êtes sauvés, et par le moyen de la foi. Cela ne vient pas de vous, c'est le don de Dieu. Nous sommes son ouvrage, créés dans le Christ Jésus.`,
    },
    gospel: {
      reference: "Jean 3, 14-21",
      text: `En ce temps-là, Jésus disait à Nicodème : « De même que le serpent de bronze fut élevé par Moïse dans le désert, ainsi faut-il que le Fils de l'homme soit élevé, afin qu'en lui tout homme qui croit ait la vie éternelle. Car Dieu a tellement aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne se perde pas, mais obtienne la vie éternelle. Car Dieu a envoyé son Fils dans le monde, non pas pour juger le monde, mais pour que, par lui, le monde soit sauvé. »`,
    },
  },
  "lent-5-sun": {
    firstReading: {
      reference: "Jérémie 31, 31-34",
      text: `Voici venir des jours – oracle du Seigneur –, où je conclurai avec la maison d'Israël et avec la maison de Juda une alliance nouvelle. Je mettrai ma Loi au plus profond d'eux-mêmes ; je l'inscrirai sur leur cœur. Je serai leur Dieu, et ils seront mon peuple. Tous me connaîtront, des plus petits jusqu'aux plus grands, car je pardonnerai leurs fautes et ne me rappellerai plus leurs péchés.`,
    },
    psalm: {
      reference: "Psaume 50 (51)",
      text: `Crée en moi un cœur pur, ô mon Dieu, renouvelle et raffermis au fond de moi mon esprit. Ne me chasse pas loin de ta face, ne me reprends pas ton esprit saint. Rends-moi la joie d'être sauvé ; que l'esprit généreux me soutienne.`,
    },
    secondReading: {
      reference: "Hébreux 5, 7-9",
      text: `Le Christ, pendant les jours de sa vie dans la chair, offrit, avec un grand cri et dans les larmes, des prières et des supplications à Dieu qui pouvait le sauver de la mort, et il fut exaucé en raison de son grand respect. Bien qu'il soit le Fils, il apprit par ses souffrances l'obéissance et, conduit à sa perfection, il est devenu pour tous ceux qui lui obéissent la cause du salut éternel.`,
    },
    gospel: {
      reference: "Jean 12, 20-33",
      text: `En ce temps-là, il y avait quelques Grecs parmi ceux qui étaient montés à Jérusalem pour adorer Dieu. Jésus leur déclara : « Amen, amen, je vous le dis : si le grain de blé tombé en terre ne meurt pas, il reste seul ; mais s'il meurt, il porte beaucoup de fruit. Qui aime sa vie la perd ; qui s'en détache en ce monde la gardera pour la vie éternelle. Et moi, quand j'aurai été élevé de terre, j'attirerai à moi tous les hommes. »`,
    },
  },
  "palm-sun": {
    firstReading: {
      reference: "Isaïe 50, 4-7",
      text: `Le Seigneur mon Dieu m'a donné le langage des disciples, pour que je puisse, d'une parole, soutenir celui qui est épuisé. Le Seigneur Dieu m'a ouvert l'oreille, et moi, je ne me suis pas révolté, je ne me suis pas dérobé. J'ai présenté mon dos à ceux qui me frappaient. Le Seigneur Dieu vient à mon secours ; c'est pourquoi je ne suis pas atteint par les outrages.`,
    },
    psalm: {
      reference: "Psaume 21 (22)",
      text: `Mon Dieu, mon Dieu, pourquoi m'as-tu abandonné ? Tous ceux qui me voient me bafouent ; ils ricanent et hochent la tête. Ils partagent entre eux mes habits et tirent au sort mon vêtement. Mais toi, Seigneur, ne sois pas loin ! Tu m'as répondu !`,
    },
    secondReading: {
      reference: "Philippiens 2, 6-11",
      text: `Le Christ Jésus, ayant la condition de Dieu, ne retint pas jalousement le rang qui l'égalait à Dieu. Il s'est anéanti, prenant la condition de serviteur, devenant semblable aux hommes. Il s'est abaissé, devenant obéissant jusqu'à la mort, et la mort de la croix. C'est pourquoi Dieu l'a exalté : il l'a doté du Nom qui est au-dessus de tout nom.`,
    },
    gospel: {
      reference: "Marc 14, 1 – 15, 47",
      text: `La Passion de notre Seigneur Jésus Christ selon saint Marc. Ils allèrent au domaine appelé Gethsémani. Jésus priait : « Abba, Père, tout est possible pour toi. Éloigne de moi cette coupe. Cependant, non pas ce que moi, je veux, mais ce que toi, tu veux. » Pilate leur relâcha Barabbas et, après avoir fait flageller Jésus, il le livra pour qu'il soit crucifié. À la neuvième heure, Jésus cria d'une voix forte : « Mon Dieu, mon Dieu, pourquoi m'as-tu abandonné ? » Puis il expira.`,
    },
  },

  // ===================== TEMPS PASCAL =====================
  "easter-sun": {
    firstReading: {
      reference: "Actes 10, 34a.37-43",
      text: `En ces jours-là, Pierre prit la parole et dit : « Vous savez ce qui s'est passé à travers tout le pays des Juifs, depuis les commencements en Galilée : Jésus de Nazareth, Dieu lui a donné l'onction d'Esprit Saint et de puissance. Là où il passait, il faisait le bien. Celui-là, Dieu l'a ressuscité le troisième jour. Il nous a chargés d'annoncer au peuple et de témoigner que Dieu l'a établi Juge des vivants et des morts. »`,
    },
    psalm: {
      reference: "Psaume 117 (118)",
      text: `Voici le jour que fit le Seigneur, qu'il soit pour nous jour de fête et de joie ! Rendez grâce au Seigneur : Il est bon ! Éternel est son amour ! La pierre qu'ont rejetée les bâtisseurs est devenue la pierre d'angle : c'est là l'œuvre du Seigneur.`,
    },
    secondReading: {
      reference: "Colossiens 3, 1-4",
      text: `Frères, si vous êtes ressuscités avec le Christ, recherchez les réalités d'en haut : c'est là qu'est le Christ, assis à la droite de Dieu. Tendez vers les réalités d'en haut, et non pas vers celles de la terre. Quand paraîtra le Christ, votre vie, alors vous aussi, vous paraîtrez avec lui dans la gloire.`,
    },
    gospel: {
      reference: "Jean 20, 1-9",
      text: `Le premier jour de la semaine, Marie Madeleine se rend au tombeau de grand matin ; c'était encore les ténèbres. Elle s'aperçoit que la pierre a été enlevée du tombeau. Pierre et l'autre disciple se rendirent au tombeau. Il vit les linges posés à plat, ainsi que le suaire, roulé à part à sa place. C'est alors qu'entra l'autre disciple : il vit, et il crut.`,
    },
  },
  "easter-2-sun": {
    firstReading: {
      reference: "Actes 4, 32-35",
      text: `La multitude de ceux qui étaient devenus croyants avait un seul cœur et une seule âme ; et personne ne disait que ses biens lui appartenaient en propre, mais ils avaient tout en commun. C'est avec une grande puissance que les Apôtres rendaient témoignage de la résurrection du Seigneur Jésus. On distribuait à chacun en fonction de ses besoins.`,
    },
    psalm: {
      reference: "Psaume 117 (118)",
      text: `Rendez grâce au Seigneur : Il est bon ! Éternel est son amour ! Oui, que le dise Israël : Éternel est son amour ! Le bras du Seigneur se lève, le bras du Seigneur est fort ! Non, je ne mourrai pas, je vivrai, pour annoncer les actions du Seigneur.`,
    },
    secondReading: {
      reference: "1 Jean 5, 1-6",
      text: `Frères bien-aimés, celui qui croit que Jésus est le Christ, celui-là est né de Dieu ; celui qui aime le Père qui a engendré aime aussi le Fils qui est né de lui. Qui est vainqueur du monde ? N'est-ce pas celui qui croit que Jésus est le Fils de Dieu ? C'est lui, Jésus Christ, qui est venu par l'eau et par le sang : non pas seulement avec l'eau, mais avec l'eau et avec le sang.`,
    },
    gospel: {
      reference: "Jean 20, 19-31",
      text: `C'était après la mort de Jésus. Le soir venu, en ce premier jour de la semaine, les portes du lieu où se trouvaient les disciples étant verrouillées, Jésus vint, et il était là au milieu d'eux. Il leur dit : « La paix soit avec vous ! » Puis il dit à Thomas : « Avance ton doigt ici, et vois mes mains ; avance ta main, et mets-la dans mon côté : cesse d'être incrédule, sois croyant. » Thomas lui dit : « Mon Seigneur et mon Dieu ! »`,
    },
  },
  "easter-3-sun": {
    firstReading: {
      reference: "Actes 3, 13-15.17-19",
      text: `En ces jours-là, Pierre disait au peuple : « Le Dieu d'Abraham, d'Isaac et de Jacob, le Dieu de nos pères, a glorifié son serviteur Jésus, alors que vous, vous l'aviez livré et renié. Vous avez renié le Saint et le Juste, et vous avez demandé qu'on vous accorde la grâce d'un meurtrier. Vous avez tué le Prince de la vie, lui que Dieu a ressuscité d'entre les morts. Convertissez-vous donc et tournez-vous vers Dieu pour que vos péchés soient effacés. »`,
    },
    psalm: {
      reference: "Psaume 4",
      text: `Quand je crie, réponds-moi, Dieu, ma justice ! Toi qui m'as libéré dans la détresse, pitié pour moi, écoute ma prière ! Beaucoup demandent : « Qui nous fera voir le bonheur ? » Sur nous, Seigneur, que s'illumine ton visage ! Dans la paix moi aussi, je me couche et je dors, car tu me donnes d'habiter, Seigneur, seul, dans la confiance.`,
    },
    secondReading: {
      reference: "1 Jean 2, 1-5a",
      text: `Mes petits enfants, je vous écris cela pour que vous évitiez le péché. Mais si l'un de nous vient à pécher, nous avons un défenseur devant le Père : Jésus Christ, le Juste. C'est lui qui, par son sacrifice, obtient le pardon de nos péchés, non seulement des nôtres, mais encore de ceux du monde entier. Voici comment nous savons que nous le connaissons : si nous gardons ses commandements.`,
    },
    gospel: {
      reference: "Luc 24, 35-48",
      text: `En ce temps-là, les disciples qui rentraient d'Emmaüs racontaient aux onze Apôtres ce qui s'était passé sur la route. Jésus lui-même fut présent au milieu d'eux et leur dit : « La paix soit avec vous ! » Saisis de frayeur, ils croyaient voir un esprit. Il leur dit : « Voyez mes mains et mes pieds : c'est bien moi ! Touchez-moi, regardez : un esprit n'a pas de chair ni d'os comme vous constatez que j'en ai. » Alors il ouvrit leur intelligence à la compréhension des Écritures.`,
    },
  },
  "easter-4-sun": {
    firstReading: {
      reference: "Actes 4, 8-12",
      text: `En ces jours-là, Pierre, rempli de l'Esprit Saint, déclara : « Chefs du peuple et anciens, nous sommes interrogés aujourd'hui pour avoir fait du bien à un infirme, et l'on nous demande comment cet homme a été sauvé. Sachez-le, c'est par le nom de Jésus Christ le Nazaréen, lui que vous avez crucifié mais que Dieu a ressuscité d'entre les morts. Il n'y a pas d'autre nom donné aux hommes par lequel nous devions être sauvés. »`,
    },
    psalm: {
      reference: "Psaume 117 (118)",
      text: `Rendez grâce au Seigneur : Il est bon ! Éternel est son amour ! Mieux vaut s'appuyer sur le Seigneur que de compter sur les hommes. La pierre qu'ont rejetée les bâtisseurs est devenue la pierre d'angle. C'est là l'œuvre du Seigneur, la merveille devant nos yeux !`,
    },
    secondReading: {
      reference: "1 Jean 3, 1-2",
      text: `Frères bien-aimés, voyez quel grand amour nous a donné le Père pour que nous soyons appelés enfants de Dieu – et nous le sommes. Voilà pourquoi le monde ne nous connaît pas : c'est qu'il n'a pas connu Dieu. Bien-aimés, dès maintenant, nous sommes enfants de Dieu, mais ce que nous serons n'a pas encore été manifesté. Nous savons que lors de cette manifestation nous lui serons semblables car nous le verrons tel qu'il est.`,
    },
    gospel: {
      reference: "Jean 10, 11-18",
      text: `En ce temps-là, Jésus déclara : « Moi, je suis le bon pasteur, le vrai berger, qui donne sa vie pour ses brebis. Le berger mercenaire, lui, s'enfuit dès qu'il voit venir le loup ; il abandonne les brebis, et le loup s'en empare. Moi, je suis le bon pasteur ; je connais mes brebis, et mes brebis me connaissent, comme le Père me connaît, et que je connais le Père ; et je donne ma vie pour mes brebis. J'ai encore d'autres brebis qui ne sont pas de cet enclos. »`,
    },
  },
  "easter-5-sun": {
    firstReading: {
      reference: "Actes 9, 26-31",
      text: `En ces jours-là, arrivé à Jérusalem, Saul cherchait à se joindre aux disciples, mais tous avaient peur de lui, ne croyant pas que c'était un vrai disciple. Barnabé le prit avec lui et le présenta aux Apôtres. L'Église était en paix dans toute la Judée, la Galilée et la Samarie ; elle se construisait et elle marchait dans la crainte du Seigneur ; réconfortée par l'Esprit Saint, elle se multipliait.`,
    },
    psalm: {
      reference: "Psaume 21 (22)",
      text: `Devant ceux qui te craignent, je tiendrai mes promesses. Les pauvres mangeront : ils seront rassasiés. La terre entière se souviendra et se tournera vers le Seigneur. La postérité le servira ; on annoncera le Seigneur aux générations à venir.`,
    },
    secondReading: {
      reference: "1 Jean 3, 18-24",
      text: `Petits enfants, n'aimons pas en paroles ni par des discours, mais par des actes et en vérité. Voilà comment nous reconnaîtrons que nous appartenons à la vérité. Son commandement est que nous croyions au nom de son Fils Jésus Christ, et que nous nous aimions les uns les autres comme il nous l'a commandé. Celui qui garde ses commandements demeure en Dieu, et Dieu en lui.`,
    },
    gospel: {
      reference: "Jean 15, 1-8",
      text: `En ce temps-là, Jésus disait à ses disciples : « Moi, je suis la vraie vigne, et mon Père est le vigneron. Tout sarment qui est en moi, mais qui ne porte pas de fruit, mon Père l'enlève. Demeurez en moi, comme moi en vous. De même que le sarment ne peut pas porter de fruit par lui-même s'il ne demeure pas sur la vigne, de même vous non plus, si vous ne demeurez pas en moi. Celui qui demeure en moi et en qui je demeure, celui-là porte beaucoup de fruit. »`,
    },
  },
  "easter-6-sun": {
    firstReading: {
      reference: "Actes 10, 25-26.34-35.44-48",
      text: `En ces jours-là, comme Pierre arrivait à Césarée chez Corneille, celui-ci vint à sa rencontre et se prosterna à ses pieds. Pierre le releva en disant : « Lève-toi. Je ne suis qu'un homme, moi aussi. » En vérité, je le comprends, Dieu est impartial : il accueille, quelle que soit la nation, celui qui le craint et dont les œuvres sont justes. L'Esprit Saint descendit sur tous ceux qui écoutaient la Parole, et Pierre ordonna de les baptiser au nom de Jésus Christ.`,
    },
    psalm: {
      reference: "Psaume 97 (98)",
      text: `Le Seigneur a fait connaître sa victoire et révélé sa justice aux nations. Chantez au Seigneur un chant nouveau, car il a fait des merveilles. Sa main droite et son bras très saint lui ont donné la victoire. La terre tout entière a vu la victoire de notre Dieu.`,
    },
    secondReading: {
      reference: "1 Jean 4, 7-10",
      text: `Frères bien-aimés, aimons-nous les uns les autres, puisque l'amour vient de Dieu. Celui qui aime est né de Dieu et connaît Dieu. Celui qui n'aime pas n'a pas connu Dieu, car Dieu est amour. Voici comment l'amour de Dieu s'est manifesté parmi nous : Dieu a envoyé son Fils unique dans le monde pour que nous vivions par lui.`,
    },
    gospel: {
      reference: "Jean 15, 9-17",
      text: `En ce temps-là, Jésus disait à ses disciples : « Comme le Père m'a aimé, moi aussi je vous ai aimés. Demeurez dans mon amour. Si vous gardez mes commandements, vous demeurerez dans mon amour. Mon commandement, le voici : Aimez-vous les uns les autres comme je vous ai aimés. Il n'y a pas de plus grand amour que de donner sa vie pour ceux qu'on aime. Ce n'est pas vous qui m'avez choisi, c'est moi qui vous ai choisis et établis. »`,
    },
  },
  "ascension": {
    firstReading: {
      reference: "Actes 1, 1-11",
      text: `Cher Théophile, dans mon premier livre, j'ai parlé de tout ce que Jésus a fait et enseigné, depuis le commencement jusqu'au jour où il fut enlevé au ciel. Il leur dit : « Vous allez recevoir une force quand le Saint-Esprit viendra sur vous ; vous serez alors mes témoins à Jérusalem, dans toute la Judée et la Samarie, et jusqu'aux extrémités de la terre. » Après ces paroles, tandis que les Apôtres le regardaient, il s'éleva, et une nuée vint le soustraire à leurs yeux.`,
    },
    psalm: {
      reference: "Psaume 46 (47)",
      text: `Dieu s'élève parmi les ovations, le Seigneur, aux éclats du cor. Sonnez, sonnez pour notre Dieu, sonnez, sonnez pour notre roi ! Car Dieu est le roi de la terre. Il règne sur les nations, Dieu est assis sur son trône sacré.`,
    },
    secondReading: {
      reference: "Éphésiens 4, 1-13",
      text: `Frères, moi qui suis en prison à cause du Seigneur, je vous exhorte à vous conduire d'une manière digne de votre vocation. Supportez-vous les uns les autres avec amour ; ayez soin de garder l'unité dans l'Esprit par le lien de la paix. Il y a un seul Seigneur, une seule foi, un seul baptême, un seul Dieu et Père de tous. Et les dons qu'il a faits, c'est pour que les fidèles soient organisés pour l'œuvre du ministère, pour la construction du corps du Christ.`,
    },
    gospel: {
      reference: "Marc 16, 15-20",
      text: `En ce temps-là, Jésus ressuscité se manifesta aux onze Apôtres et leur dit : « Allez dans le monde entier. Proclamez l'Évangile à toute la création. Celui qui croira et sera baptisé sera sauvé. » Le Seigneur Jésus, après leur avoir parlé, fut enlevé au ciel et s'assit à la droite de Dieu. Quant à eux, ils s'en allèrent proclamer partout l'Évangile. Le Seigneur travaillait avec eux et confirmait la Parole par les signes qui l'accompagnaient.`,
    },
  },
  "easter-7-sun": {
    firstReading: {
      reference: "Actes 1, 15-17.20a.20c-26",
      text: `En ces jours-là, Pierre se leva au milieu des frères qui étaient réunis au nombre d'environ cent vingt personnes, et il déclara : « Frères, il fallait que l'Écriture s'accomplisse. Il est écrit : Qu'un autre prenne sa charge. Il faut donc que quelqu'un nous rejoigne comme témoin de la résurrection de Jésus. » On en présenta deux. Alors on tira au sort, et le sort tomba sur Matthias, qui fut associé aux onze Apôtres.`,
    },
    psalm: {
      reference: "Psaume 102 (103)",
      text: `Le Seigneur a son trône dans les cieux. Bénis le Seigneur, ô mon âme ; du fond de mon être, son saint nom. Le Seigneur est tendresse et pitié, lent à la colère et plein d'amour. Comme le ciel domine la terre, fort est son amour pour qui le craint.`,
    },
    secondReading: {
      reference: "1 Jean 4, 11-16",
      text: `Frères bien-aimés, puisque Dieu nous a tellement aimés, nous devons, nous aussi, nous aimer les uns les autres. Dieu, personne ne l'a jamais vu. Mais si nous nous aimons les uns les autres, Dieu demeure en nous, et en nous, son amour atteint la perfection. Nous avons reconnu l'amour que Dieu a pour nous, et nous y avons cru. Dieu est amour : qui demeure dans l'amour demeure en Dieu, et Dieu demeure en lui.`,
    },
    gospel: {
      reference: "Jean 17, 11b-19",
      text: `En ce temps-là, les yeux levés au ciel, Jésus priait ainsi : « Père saint, garde mes disciples unis dans ton nom, le nom que tu m'as donné, pour qu'ils soient un, comme nous-mêmes. Je ne prie pas pour que tu les retires du monde, mais pour que tu les gardes du Mauvais. Consacre-les dans la vérité : ta parole est vérité. De même que tu m'as envoyé dans le monde, moi aussi, je les ai envoyés dans le monde. »`,
    },
  },
  "pentecost-sun": {
    firstReading: {
      reference: "Actes 2, 1-11",
      text: `Quand arriva le jour de la Pentecôte, au terme des cinquante jours après Pâques, ils se trouvaient réunis tous ensemble. Soudain un bruit survint du ciel comme un violent coup de vent : la maison où ils étaient assis en fut remplie tout entière. Alors leur apparurent des langues qu'on aurait dites de feu ; il s'en posa une sur chacun d'eux. Tous furent remplis d'Esprit Saint : ils se mirent à parler en d'autres langues.`,
    },
    psalm: {
      reference: "Psaume 103 (104)",
      text: `Ô Seigneur, envoie ton Esprit qui renouvelle la face de la terre ! Quelle profusion dans tes œuvres, Seigneur ! La terre s'emplit de tes biens. Tu reprends leur souffle, ils expirent. Tu envoies ton souffle : ils sont créés ; tu renouvelles la face de la terre.`,
    },
    secondReading: {
      reference: "Galates 5, 16-25",
      text: `Frères, je vous le dis : marchez sous la conduite de l'Esprit Saint, et vous n'obéirez pas aux convoitises de la chair. Voici le fruit de l'Esprit : amour, joie, paix, patience, bonté, bienveillance, fidélité, douceur et maîtrise de soi. Puisque l'Esprit nous fait vivre, marchons sous la conduite de l'Esprit.`,
    },
    gospel: {
      reference: "Jean 15, 26-27 ; 16, 12-15",
      text: `En ce temps-là, Jésus disait à ses disciples : « Quand viendra le Défenseur, que je vous enverrai d'auprès du Père, lui, l'Esprit de vérité qui procède du Père, il rendra témoignage en ma faveur. Et vous aussi, vous allez rendre témoignage. J'ai encore beaucoup de choses à vous dire, mais pour l'instant vous ne pouvez pas les porter. Quand il viendra, lui, l'Esprit de vérité, il vous conduira dans la vérité tout entière. »`,
    },
  },

  // ===================== POST-PENTECÔTE =====================
  "trinity-sun": {
    firstReading: {
      reference: "Deutéronome 4, 32-34.39-40",
      text: `Moïse disait au peuple : « Interroge les temps anciens, depuis le jour où Dieu créa l'homme sur la terre : est-il arrivé quelque chose d'aussi grand ? Est-il un peuple qui ait entendu comme toi la voix de Dieu ? Est-il un dieu qui ait entrepris de se choisir une nation ? Reconnais-le aujourd'hui et médite-le dans ton cœur : le Seigneur est Dieu, là-haut dans le ciel comme ici-bas sur la terre ; il n'y en a pas d'autre. »`,
    },
    psalm: {
      reference: "Psaume 32 (33)",
      text: `Oui, elle est droite, la parole du Seigneur ; il est fidèle en tout ce qu'il fait. Il aime le bon droit et la justice ; la terre est remplie de son amour. Le Seigneur a fait les cieux par sa parole. Heureux le peuple dont le Seigneur est le Dieu !`,
    },
    secondReading: {
      reference: "Romains 8, 14-17",
      text: `Frères, tous ceux qui se laissent conduire par l'Esprit de Dieu, ceux-là sont fils de Dieu. Vous n'avez pas reçu un esprit qui fait de vous des esclaves, mais vous avez reçu un Esprit qui fait de vous des fils ; et c'est en lui que nous crions « Abba ! », c'est-à-dire : Père ! L'Esprit lui-même rend témoignage à notre esprit que nous sommes enfants de Dieu. Héritiers de Dieu, héritiers avec le Christ.`,
    },
    gospel: {
      reference: "Matthieu 28, 16-20",
      text: `En ce temps-là, les onze disciples s'en allèrent en Galilée, à la montagne où Jésus leur avait ordonné de se rendre. Quand ils le virent, ils se prosternèrent, mais certains eurent des doutes. Jésus s'approcha d'eux et leur dit : « Tout pouvoir m'a été donné au ciel et sur la terre. Allez ! De toutes les nations faites des disciples : baptisez-les au nom du Père, et du Fils, et du Saint-Esprit. Et moi, je suis avec vous tous les jours jusqu'à la fin du monde. »`,
    },
  },
  "corpus-sun": {
    firstReading: {
      reference: "Exode 24, 3-8",
      text: `En ces jours-là, Moïse vint rapporter au peuple toutes les paroles du Seigneur et toutes ses ordonnances. Le peuple répondit d'une seule voix : « Toutes ces paroles que le Seigneur a dites, nous les mettrons en pratique. » Moïse prit le sang et en aspergea le peuple en disant : « Voici le sang de l'Alliance que le Seigneur a conclue avec vous. »`,
    },
    psalm: {
      reference: "Psaume 115 (116b)",
      text: `Comment rendrai-je au Seigneur tout le bien qu'il m'a fait ? J'élèverai la coupe du salut, j'invoquerai le nom du Seigneur. Il en coûte au Seigneur de voir mourir les siens ! Je t'offrirai le sacrifice d'action de grâce, j'invoquerai le nom du Seigneur.`,
    },
    secondReading: {
      reference: "Hébreux 9, 11-15",
      text: `Frères, le Christ est venu, grand prêtre des biens à venir. Par la tente plus grande et plus parfaite, celle qui n'est pas œuvre de mains humaines, il est entré une fois pour toutes dans le sanctuaire, non pas avec du sang de boucs et de jeunes taureaux, mais avec son propre sang, nous obtenant ainsi une rédemption éternelle. Voilà pourquoi il est le médiateur d'une alliance nouvelle.`,
    },
    gospel: {
      reference: "Marc 14, 12-16.22-26",
      text: `Le premier jour de la fête des pains sans levain, les disciples de Jésus lui dirent : « Où veux-tu que nous allions faire les préparatifs pour que tu manges la Pâque ? » Pendant le repas, Jésus prit du pain et, après avoir prononcé la bénédiction, il le rompit et le leur donna en disant : « Prenez, ceci est mon corps. » Puis, prenant une coupe et rendant grâce, il la leur donna, et ils en burent tous. Et il leur dit : « Ceci est mon sang, le sang de l'Alliance, versé pour la multitude. »`,
    },
  },

  // ===================== TEMPS ORDINAIRE =====================
  "ot-2-sun": {
    firstReading: {
      reference: "1 Samuel 3, 3b-10.19",
      text: `En ces jours-là, le jeune Samuel était couché dans le temple du Seigneur. Le Seigneur appela Samuel, qui répondit : « Me voici ! » Il courut vers le prêtre Éli, mais Éli lui dit : « Je ne t'ai pas appelé. Retourne te coucher. » Le Seigneur appela de nouveau. Alors Éli comprit que c'était le Seigneur qui appelait l'enfant, et il dit à Samuel : « Va te recoucher, et s'il t'appelle, tu diras : Parle, Seigneur, ton serviteur écoute. » Samuel grandit, et le Seigneur était avec lui.`,
    },
    psalm: {
      reference: "Psaume 39 (40)",
      text: `Me voici, Seigneur, je viens faire ta volonté. D'un grand espoir, j'espérais le Seigneur : il s'est penché vers moi. Tu ne voulais ni offrande ni sacrifice, tu as ouvert mes oreilles. Tu ne demandais ni holocauste ni victime, alors j'ai dit : « Voici, je viens. »`,
    },
    secondReading: {
      reference: "1 Corinthiens 6, 13c-15a.17-20",
      text: `Frères, le corps n'est pas pour la débauche, il est pour le Seigneur, et le Seigneur est pour le corps. Ne le savez-vous pas ? Votre corps est un sanctuaire de l'Esprit Saint, lui qui est en vous et que vous avez reçu de Dieu. Vous ne vous appartenez plus à vous-mêmes, car vous avez été achetés à grand prix. Rendez donc gloire à Dieu dans votre corps.`,
    },
    gospel: {
      reference: "Jean 1, 35-42",
      text: `En ce temps-là, Jean se trouvait avec deux de ses disciples. Posant son regard sur Jésus qui allait et venait, il dit : « Voici l'Agneau de Dieu. » Les deux disciples suivirent Jésus. Il se retourna et leur demanda : « Que cherchez-vous ? » Ils lui répondirent : « Rabbi, où demeures-tu ? » Il leur dit : « Venez, et vous verrez. » André, le frère de Simon-Pierre, amena Simon à Jésus. Jésus posa son regard sur lui et dit : « Tu es Simon, fils de Jean ; tu t'appelleras Kèphas » – ce qui veut dire Pierre.`,
    },
  },
  "ot-3-sun": {
    firstReading: {
      reference: "Jonas 3, 1-5.10",
      text: `La parole du Seigneur fut adressée de nouveau à Jonas : « Lève-toi, va à Ninive, la grande ville. Proclame le message que je te donne. » Jonas se mit en route pour Ninive. Il proclama : « Encore quarante jours, et Ninive sera détruite ! » Aussitôt, les gens de Ninive crurent en Dieu. En voyant leur réaction, Dieu renonça au châtiment dont il les avait menacés.`,
    },
    psalm: {
      reference: "Psaume 24 (25)",
      text: `Seigneur, enseigne-moi tes voies, fais-moi connaître ta route. Dirige-moi par ta vérité, enseigne-moi, car tu es le Dieu qui me sauve. Rappelle-toi, Seigneur, ta tendresse, ton amour qui est de toujours. Il est droit, il est bon, le Seigneur, lui qui montre aux pécheurs le chemin.`,
    },
    secondReading: {
      reference: "1 Corinthiens 7, 29-31",
      text: `Frères, je dois vous le dire : le temps est limité. Dès lors, que ceux qui ont une femme soient comme s'ils n'en avaient pas, ceux qui pleurent, comme s'ils ne pleuraient pas, ceux qui ont des possessions, comme s'ils n'en avaient pas, ceux qui profitent de ce monde, comme s'ils n'en profitaient pas vraiment. Car il passe, ce monde tel que nous le voyons.`,
    },
    gospel: {
      reference: "Marc 1, 14-20",
      text: `Après l'arrestation de Jean, Jésus partit pour la Galilée proclamer l'Évangile de Dieu ; il disait : « Les temps sont accomplis : le règne de Dieu est tout proche. Convertissez-vous et croyez à l'Évangile. » Passant le long de la mer de Galilée, Jésus vit Simon et son frère André, et il leur dit : « Venez à ma suite. Je vous ferai devenir pêcheurs d'hommes. » Aussitôt, laissant leurs filets, ils le suivirent.`,
    },
  },
  "ot-4-sun": {
    firstReading: {
      reference: "Deutéronome 18, 15-20",
      text: `Moïse disait au peuple : « Au milieu de vous, parmi vos frères, le Seigneur votre Dieu fera se lever un prophète comme moi, et vous l'écouterez. Je mettrai dans sa bouche mes paroles, et il leur dira tout ce que je lui prescrirai. Si quelqu'un n'écoute pas les paroles que ce prophète prononcera en mon nom, moi-même je lui en demanderai compte. »`,
    },
    psalm: {
      reference: "Psaume 94 (95)",
      text: `Aujourd'hui, ne fermez pas votre cœur, mais écoutez la voix du Seigneur ! Venez, crions de joie pour le Seigneur, acclamons notre Rocher, notre salut ! Entrez, inclinez-vous, prosternez-vous, adorons le Seigneur qui nous a faits.`,
    },
    secondReading: {
      reference: "1 Corinthiens 7, 32-35",
      text: `Frères, j'aimerais vous voir libres de tout souci. Celui qui n'est pas marié a le souci des affaires du Seigneur, il cherche comment plaire au Seigneur. Je vous dis cela pour votre profit, non pour vous tendre un piège, mais pour que vous vous attachiez au Seigneur sans partage.`,
    },
    gospel: {
      reference: "Marc 1, 21-28",
      text: `Jésus et ses disciples entrèrent à Capharnaüm. Aussitôt, le jour du sabbat, il se rendit à la synagogue, et là, il enseignait. On était frappé par son enseignement, car il enseignait en homme qui a autorité, et non pas comme les scribes. Or, il y avait dans leur synagogue un homme tourmenté par un esprit impur, qui se mit à crier : « Que nous veux-tu, Jésus de Nazareth ? » Jésus l'interpella vivement : « Tais-toi ! Sors de cet homme. » L'esprit impur sortit de lui. Tous furent saisis de crainte.`,
    },
  },
  "ot-5-sun": {
    firstReading: {
      reference: "Job 7, 1-4.6-7",
      text: `Job prit la parole et dit : « Vraiment, la vie de l'homme sur la terre est une corvée. Il est comme le manœuvre qui attend son salaire. Comme l'esclave qui désire un peu d'ombre, je n'ai en partage que des mois de déception. Si je me couche, je me dis : Quand pourrai-je me lever ? Mes jours sont plus rapides que la navette du tisserand, alors ma vie s'achèvera sans espoir. »`,
    },
    psalm: {
      reference: "Psaume 146 (147)",
      text: `Il est bon de fêter notre Dieu, il est beau de chanter sa louange ! Le Seigneur guérit les cœurs brisés et soigne leurs blessures. Il compte le nombre des étoiles, il donne à chacune un nom. Le Seigneur élève les humbles et rabaisse jusqu'à terre les impies.`,
    },
    secondReading: {
      reference: "1 Corinthiens 9, 16-19.22-23",
      text: `Frères, annoncer l'Évangile, ce n'est pas là pour moi un motif de fierté, c'est une nécessité qui s'impose à moi. Malheur à moi si je n'annonçais pas l'Évangile ! Je me suis fait tout à tous pour en sauver à tout prix quelques-uns. Et tout cela, je le fais à cause de l'Évangile, pour y avoir part, moi aussi.`,
    },
    gospel: {
      reference: "Marc 1, 29-39",
      text: `En ce temps-là, aussitôt sortis de la synagogue de Capharnaüm, Jésus et ses disciples allèrent chez Simon et André, avec Jacques et Jean. Or, la belle-mère de Simon était au lit, elle avait de la fièvre. Jésus s'approcha, la saisit par la main et la fit lever. La fièvre la quitta. Le lendemain, Jésus se leva bien avant l'aube et sortit pour aller dans un endroit désert, et là il priait. Il leur dit : « Allons ailleurs, pour que là aussi je proclame l'Évangile ; car c'est pour cela que je suis sorti. »`,
    },
  },
  "ot-6-sun": {
    firstReading: {
      reference: "Lévitique 13, 1-2.44-46",
      text: `Le Seigneur parla à Moïse et dit : « Quand un homme aura sur la peau une tumeur, une dartre ou une tache, on l'amènera au prêtre Aaron. Le lépreux atteint d'une tache portera des vêtements déchirés et les cheveux en désordre ; il devra se couvrir le haut du visage et crier : Impur ! Impur ! Il habitera à l'écart, sa demeure sera hors du camp. »`,
    },
    psalm: {
      reference: "Psaume 31 (32)",
      text: `Heureux l'homme dont la faute est enlevée, et le péché remis ! Heureux l'homme dont le Seigneur ne retient pas l'offense. Je t'ai fait connaître ma faute, je n'ai pas caché mes torts. J'ai dit : « Je rendrai grâce au Seigneur en confessant mes péchés. » Toi, tu as enlevé l'offense de ma faute.`,
    },
    secondReading: {
      reference: "1 Corinthiens 10, 31 – 11, 1",
      text: `Frères, que vous mangiez ou que vous buviez, ou que vous fassiez quoi que ce soit, faites tout pour la gloire de Dieu. Ne soyez un obstacle pour personne, ni pour les Juifs, ni pour les païens, ni pour l'Église de Dieu. Imitez-moi, comme moi aussi j'imite le Christ.`,
    },
    gospel: {
      reference: "Marc 1, 40-45",
      text: `En ce temps-là, un lépreux vint auprès de Jésus ; il le supplia et, tombant à ses genoux, lui dit : « Si tu le veux, tu peux me purifier. » Saisi de compassion, Jésus étendit la main, le toucha et lui dit : « Je le veux, sois purifié. » À l'instant même, la lèpre le quitta et il fut purifié. Jésus le renvoya aussitôt, avec cet avertissement sévère : « Ne dis rien à personne. »`,
    },
  },
  "ot-7-sun": {
    firstReading: {
      reference: "Isaïe 43, 18-19.21-22.24b-25",
      text: `Ainsi parle le Seigneur : « Ne faites plus mémoire des événements passés, ne songez plus aux choses d'autrefois. Voici que je fais une chose nouvelle, elle germe déjà, ne la voyez-vous pas ? Le peuple que j'ai formé pour moi redira ma louange. Mais toi, tu m'as accablé par tes péchés. Moi, oui moi, je suis celui qui efface tes révoltes, à cause de moi-même, et je ne me souviendrai plus de tes péchés. »`,
    },
    psalm: {
      reference: "Psaume 40 (41)",
      text: `Heureux qui pense au pauvre et au faible : le Seigneur le sauve au jour du malheur ! Le Seigneur le gardera vivant, heureux sur la terre. Toi, Seigneur, prends pitié de moi ; guéris-moi, car j'ai péché contre toi.`,
    },
    secondReading: {
      reference: "2 Corinthiens 1, 18-22",
      text: `Frères, Dieu en est garant : la parole que nous vous adressons n'est pas « oui » et « non ». Le Fils de Dieu, le Christ Jésus, que nous avons proclamé, n'a pas été « oui » et « non » ; il n'a été que « oui ». Et toutes les promesses de Dieu ont trouvé leur « oui » dans sa personne. C'est Dieu lui-même qui nous a donné l'onction, qui nous a marqués de son sceau et qui a mis dans nos cœurs les arrhes de l'Esprit.`,
    },
    gospel: {
      reference: "Marc 2, 1-12",
      text: `Quelques jours après la guérison d'un lépreux, Jésus revint à Capharnaüm, et l'on apprit qu'il était à la maison. Des gens arrivèrent, portant un paralysé. Comme ils ne pouvaient l'approcher à cause de la foule, ils découvrirent le toit au-dessus de lui et firent descendre le brancard. Voyant leur foi, Jésus dit au paralysé : « Mon enfant, tes péchés sont pardonnés. » Il dit au paralysé : « Lève-toi, prends ton brancard, et rentre à la maison. » L'homme se leva et sortit devant tout le monde.`,
    },
  },
  "ot-10-sun": {
    firstReading: {
      reference: "Genèse 3, 9-15",
      text: `Quand l'homme eut mangé du fruit de l'arbre, le Seigneur Dieu l'appela et lui dit : « Où es-tu donc ? » L'homme répondit : « J'ai eu peur, car je suis nu, et je me suis caché. » Alors le Seigneur Dieu dit au serpent : « Je mettrai une hostilité entre toi et la femme, entre ta descendance et sa descendance : celle-ci te meurtrira la tête, et toi, tu lui meurtriras le talon. »`,
    },
    psalm: {
      reference: "Psaume 129 (130)",
      text: `Des profondeurs je crie vers toi, Seigneur, Seigneur, écoute mon appel ! Que ton oreille se fasse attentive au cri de ma prière ! Près du Seigneur est l'amour, près de lui abonde le rachat. C'est lui qui rachètera Israël de toutes ses fautes.`,
    },
    secondReading: {
      reference: "2 Corinthiens 4, 13 – 5, 1",
      text: `Frères, l'Écriture dit : J'ai cru, c'est pourquoi j'ai parlé. Et nous aussi, nous croyons, et c'est pourquoi nous parlons. Car notre détresse du moment présent est légère par rapport au poids vraiment incomparable de gloire éternelle qu'elle produit pour nous. Nous le savons, en effet : même si notre corps, cette tente qui est notre demeure sur la terre, est détruit, nous avons un édifice construit par Dieu, une demeure éternelle dans les cieux.`,
    },
    gospel: {
      reference: "Marc 3, 20-35",
      text: `En ce temps-là, Jésus revint à la maison, et de nouveau la foule se rassembla. Les scribes disaient : « Il est possédé par Béelzéboul. » Jésus les appela et leur dit en paraboles : « Comment Satan peut-il expulser Satan ? Si un royaume est divisé contre lui-même, ce royaume ne peut pas tenir. » Puis, parcourant du regard ceux qui étaient assis en cercle autour de lui, il dit : « Celui qui fait la volonté de Dieu, celui-là est pour moi un frère, une sœur, une mère. »`,
    },
  },
  "ot-11-sun": {
    firstReading: {
      reference: "Ézéchiel 17, 22-24",
      text: `Ainsi parle le Seigneur Dieu : « À la cime du grand cèdre, je prendrai une jeune pousse ; au sommet de sa ramure, j'en cueillerai une toute fraîche, et je la planterai moi-même sur une montagne très élevée. Elle portera des rameaux, et produira du fruit, elle deviendra un cèdre magnifique. Moi, le Seigneur, j'ai parlé, et je le ferai. »`,
    },
    psalm: {
      reference: "Psaume 91 (92)",
      text: `Il est bon de rendre grâce au Seigneur, de chanter pour ton nom, Dieu Très-Haut. Le juste grandira comme un palmier, il poussera comme un cèdre du Liban. Planté dans les parvis du Seigneur, il grandira dans la maison de notre Dieu.`,
    },
    secondReading: {
      reference: "2 Corinthiens 5, 6-10",
      text: `Frères, nous gardons toujours confiance, tout en sachant que nous demeurons loin du Seigneur tant que nous demeurons dans ce corps ; en effet, nous cheminons dans la foi, non dans la claire vision. Oui, nous avons confiance, et nous voudrions plutôt quitter la demeure de ce corps pour demeurer près du Seigneur. C'est pour cela que nous nous efforçons de lui plaire, que nous demeurions dans ce corps ou que nous le quittions.`,
    },
    gospel: {
      reference: "Marc 4, 26-34",
      text: `En ce temps-là, Jésus disait aux foules : « Il en est du règne de Dieu comme d'un homme qui jette en terre la semence : nuit et jour, qu'il dorme ou qu'il se lève, la semence germe et grandit, il ne sait comment. » Il disait encore : « À quoi allons-nous comparer le règne de Dieu ? Il est comme une graine de moutarde : quand on la sème, elle est la plus petite de toutes les semences. Mais quand on l'a semée, elle grandit et dépasse toutes les plantes potagères. »`,
    },
  },
  "ot-12-sun": {
    firstReading: {
      reference: "Job 38, 1.8-11",
      text: `Le Seigneur s'adressa à Job du milieu de la tempête et dit : « Qui donc a retenu la mer avec des portes, quand elle jaillissait du sein primordial ? Je lui imposai ma limite, en disant : Tu viendras jusqu'ici ! tu n'iras pas plus loin, ici s'arrêtera l'orgueil de tes flots ! »`,
    },
    psalm: {
      reference: "Psaume 106 (107)",
      text: `Rendez grâce au Seigneur : Il est bon ! Éternel est son amour ! Ceux qui erraient sur la mer, le Seigneur les tira de la détresse. Il ramena la tempête au calme, et les flots se turent. Ils se réjouirent de les voir s'apaiser, et le Seigneur les conduisit au port désiré.`,
    },
    secondReading: {
      reference: "2 Corinthiens 5, 14-17",
      text: `Frères, l'amour du Christ nous saisit quand nous pensons qu'un seul est mort pour tous, et qu'ainsi tous ont passé par la mort. Si donc quelqu'un est dans le Christ, il est une créature nouvelle. Le monde ancien s'en est allé, un monde nouveau est déjà né.`,
    },
    gospel: {
      reference: "Marc 4, 35-41",
      text: `Ce jour-là, le soir venu, Jésus dit à ses disciples : « Passons sur l'autre rive. » Survint une violente tempête. Les vagues se jetaient sur la barque, si bien que déjà elle se remplissait. Lui dormait sur le coussin à l'arrière. Ils le réveillent : « Maître, nous sommes perdus ; cela ne te fait rien ? » Réveillé, il menaça le vent et dit à la mer : « Silence, tais-toi ! » Le vent tomba, et il se fit un grand calme. Jésus leur dit : « Pourquoi êtes-vous si craintifs ? N'avez-vous pas encore la foi ? »`,
    },
  },
  "ot-13-sun": {
    firstReading: {
      reference: "Sagesse 1, 13-15 ; 2, 23-24",
      text: `Dieu n'a pas fait la mort, il ne se réjouit pas de voir mourir les êtres vivants. Il les a tous créés pour qu'ils subsistent. Les forces vitales du monde sont salutaires. Oui, Dieu a créé l'homme pour l'incorruptibilité, il a fait de lui une image de ce qu'il est en lui-même. C'est par la jalousie du diable que la mort est entrée dans le monde.`,
    },
    psalm: {
      reference: "Psaume 29 (30)",
      text: `Je t'exalte, Seigneur : tu m'as relevé, tu m'as fait remonter de l'abîme. Tu m'as fait revivre quand je descendais à la fosse. Au soir les larmes, au matin les cris de joie ! Tu as changé mon deuil en une danse, Seigneur mon Dieu, sans fin je te rendrai grâce.`,
    },
    secondReading: {
      reference: "2 Corinthiens 8, 7.9.13-15",
      text: `Frères, puisque vous avez tout en abondance, la foi, la Parole, la connaissance de Dieu, toute sorte d'empressement et l'amour que nous vous avons communiqué, qu'il y ait aussi abondance dans votre don généreux ! Vous connaissez le don généreux de notre Seigneur Jésus Christ : lui qui est riche, il s'est fait pauvre à cause de vous, pour que vous deveniez riches par sa pauvreté.`,
    },
    gospel: {
      reference: "Marc 5, 21-43",
      text: `En ce temps-là, Jésus regagna en barque l'autre rive. Une grande foule se rassembla. Arrive un chef de synagogue, nommé Jaïre. Il tombe à ses pieds et le supplie : « Ma fille, encore si jeune, est à la dernière extrémité. Viens lui imposer les mains. » Une femme, malade depuis douze ans, toucha son vêtement, et aussitôt elle fut guérie. Jésus dit à Jaïre : « Ne crains pas, crois seulement. » Il saisit la main de l'enfant et lui dit : « Talitha koum », ce qui signifie : « Jeune fille, je te le dis, lève-toi ! » Aussitôt la jeune fille se leva et se mit à marcher.`,
    },
  },
  "ot-14-sun": {
    firstReading: {
      reference: "Ézéchiel 2, 2-5",
      text: `En ces jours-là, l'esprit vint en moi et me fit tenir debout. J'entendis celui qui me parlait. Il me dit : « Fils d'homme, je t'envoie vers les fils d'Israël, vers une nation de rebelles qui s'est révoltée contre moi. Qu'ils écoutent ou qu'ils n'écoutent pas – Loss sont des rebelles – ils sauront qu'il y a un prophète au milieu d'eux. »`,
    },
    psalm: {
      reference: "Psaume 122 (123)",
      text: `Vers toi j'ai les yeux levés, vers toi qui es au ciel. Comme les yeux de l'esclave vers la main de son maître, comme les yeux de la servante vers la main de sa maîtresse, nos yeux, levés vers le Seigneur notre Dieu, attendent sa pitié. Pitié pour nous, Seigneur, pitié pour nous !`,
    },
    secondReading: {
      reference: "2 Corinthiens 12, 7-10",
      text: `Frères, pour que je ne sois pas rempli d'orgueil, j'ai reçu dans ma chair une écharde. Trois fois, j'ai prié le Seigneur de l'écarter de moi. Mais il m'a déclaré : « Ma grâce te suffit, car ma puissance donne toute sa mesure dans la faiblesse. » C'est pourquoi je me glorifie de mes faiblesses, afin que la puissance du Christ fasse en moi sa demeure. Car, lorsque je suis faible, c'est alors que je suis fort.`,
    },
    gospel: {
      reference: "Marc 6, 1-6",
      text: `En ce temps-là, Jésus se rendit dans son lieu d'origine, et ses disciples le suivirent. Le jour du sabbat, il se mit à enseigner dans la synagogue. De nombreux auditeurs, frappés d'étonnement, disaient : « D'où cela lui vient-il ? N'est-il pas le charpentier, le fils de Marie ? » Et ils étaient profondément choqués à son sujet. Jésus leur dit : « Un prophète n'est méprisé que dans son pays, sa parenté et sa maison. » Et il s'étonna de leur manque de foi.`,
    },
  },
  "ot-15-sun": {
    firstReading: {
      reference: "Amos 7, 12-15",
      text: `En ces jours-là, Amazias, prêtre de Béthel, dit au prophète Amos : « Va-t'en d'ici avec tes visions, retire-toi au pays de Juda ; c'est là-bas que tu pourras gagner ta vie en prophétisant. » Amos répondit : « Je n'étais pas prophète ni fils de prophète ; j'étais bouvier, et je soignais les sycomores. Mais le Seigneur m'a saisi quand j'étais derrière le troupeau, et c'est lui qui m'a dit : Va, tu seras prophète pour mon peuple Israël. »`,
    },
    psalm: {
      reference: "Psaume 84 (85)",
      text: `J'écoute : que dira le Seigneur Dieu ? Ce qu'il dit, c'est la paix pour son peuple et ses fidèles. Son salut est proche de ceux qui le craignent. Amour et vérité se rencontrent, justice et paix s'embrassent.`,
    },
    secondReading: {
      reference: "Éphésiens 1, 3-14",
      text: `Béni soit Dieu, le Père de notre Seigneur Jésus Christ ! Il nous a bénis et comblés des bénédictions de l'Esprit, au ciel, dans le Christ. Il nous a choisis, dans le Christ, avant la fondation du monde, pour que nous soyons saints, immaculés devant lui, dans l'amour. Il nous a prédestinés à être, pour lui, des fils adoptifs par Jésus Christ.`,
    },
    gospel: {
      reference: "Marc 6, 7-13",
      text: `En ce temps-là, Jésus appela les Douze ; alors il commença à les envoyer en mission deux par deux. Il leur donnait autorité sur les esprits impurs. Il leur prescrivit de ne rien prendre pour la route, mais seulement un bâton ; pas de pain, pas de sac, pas de pièces de monnaie dans leur ceinture. Ils partirent, et proclamèrent qu'il fallait se convertir. Ils chassaient beaucoup de démons, faisaient des onctions d'huile à de nombreux malades, et les guérissaient.`,
    },
  },
  "ot-16-sun": {
    firstReading: {
      reference: "Jérémie 23, 1-6",
      text: `Quel malheur pour vous, pasteurs ! Vous laissez périr et vous dispersez les brebis de mon pâturage – oracle du Seigneur ! C'est pourquoi, moi, je m'occuperai de mon troupeau, je le rassemblerai. Je susciterai pour David un Germe juste : il régnera en vrai roi, il agira avec sagesse, il exercera dans le pays le droit et la justice. Voici le nom qu'on lui donnera : « Le-Seigneur-est-notre-justice. »`,
    },
    psalm: {
      reference: "Psaume 22 (23)",
      text: `Le Seigneur est mon berger : je ne manque de rien. Sur des prés d'herbe fraîche, il me fait reposer. Il me mène vers les eaux tranquilles et me fait revivre. Si je traverse les ravins de la mort, je ne crains aucun mal, car tu es avec moi.`,
    },
    secondReading: {
      reference: "Éphésiens 2, 13-18",
      text: `Frères, maintenant, dans le Christ Jésus, vous qui autrefois étiez loin, vous êtes devenus proches par le sang du Christ. C'est lui, le Christ, qui est notre paix : des deux, il a fait une seule réalité ; par sa chair crucifiée, il a détruit ce qui les séparait, le mur de la haine. Par lui, les uns et les autres, nous avons, dans un seul Esprit, accès auprès du Père.`,
    },
    gospel: {
      reference: "Marc 6, 30-34",
      text: `En ce temps-là, les Apôtres se réunirent auprès de Jésus, et lui annoncèrent tout ce qu'ils avaient fait et enseigné. Il leur dit : « Venez à l'écart dans un endroit désert, et reposez-vous un peu. » En débarquant, Jésus vit une grande foule. Il fut saisi de compassion envers eux, parce qu'ils étaient comme des brebis sans berger. Alors, il se mit à les enseigner longuement.`,
    },
  },
  "ot-17-sun": {
    firstReading: {
      reference: "2 Rois 4, 42-44",
      text: `En ces jours-là, un homme vint de Baal-Shalisha et apporta à Élisée, l'homme de Dieu, vingt pains d'orge et du grain frais dans un sac. Élisée dit alors : « Donne-le à tous ces gens pour qu'ils mangent. » Son serviteur répondit : « Comment donner cela à cent personnes ? » Élisée reprit : « Donne-le à tous ces gens pour qu'ils mangent, car ainsi parle le Seigneur : On mangera, et il en restera. »`,
    },
    psalm: {
      reference: "Psaume 144 (145)",
      text: `Tu ouvres ta main, Seigneur : nous voici rassasiés. Le Seigneur est tendresse et pitié, lent à la colère et plein d'amour. La bonté du Seigneur est pour tous, sa tendresse, pour toutes ses œuvres. Les yeux sur toi, tous ils espèrent : tu leur donnes la nourriture au temps voulu.`,
    },
    secondReading: {
      reference: "Éphésiens 4, 1-6",
      text: `Frères, moi qui suis en prison à cause du Seigneur, je vous exhorte à vous conduire d'une manière digne de votre vocation : ayez beaucoup d'humilité, de douceur et de patience, supportez-vous les uns les autres avec amour ; ayez soin de garder l'unité dans l'Esprit par le lien de la paix. Il y a un seul Seigneur, une seule foi, un seul baptême, un seul Dieu et Père de tous.`,
    },
    gospel: {
      reference: "Jean 6, 1-15",
      text: `En ce temps-là, Jésus passa de l'autre côté de la mer de Galilée. Une grande foule le suivait. Il dit à Philippe : « Où pourrions-nous acheter du pain pour qu'ils aient à manger ? » André lui dit : « Il y a là un jeune garçon qui a cinq pains d'orge et deux poissons. » Jésus prit les pains, il rendit grâce, puis il les distribua. Ils mangèrent et furent rassasiés. On ramassa les morceaux : cela faisait douze paniers pleins.`,
    },
  },
  "ot-18-sun": {
    firstReading: {
      reference: "Exode 16, 2-4.12-15",
      text: `En ces jours-là, dans le désert, toute la communauté des fils d'Israël récrimina contre Moïse et Aaron. Le Seigneur dit à Moïse : « Voici que, du ciel, je vais faire pleuvoir du pain pour vous. » Le soir même, il y eut des cailles qui recouvrirent le camp. Le matin, il y avait une couche de rosée. Moïse leur dit : « C'est le pain que le Seigneur vous donne à manger. »`,
    },
    psalm: {
      reference: "Psaume 77 (78)",
      text: `Le Seigneur donna l'ordre aux nuées d'en haut, il ouvrit les écluses du ciel. Pour les nourrir il fit pleuvoir la manne, il leur donna le froment du ciel. Chacun mangea le pain des forts, il leur envoya des vivres à satiété.`,
    },
    secondReading: {
      reference: "Éphésiens 4, 17.20-24",
      text: `Frères, je vous le dis, je vous l'affirme au nom du Seigneur : vous ne devez plus vous conduire comme les païens. Ce n'est pas ainsi que l'on vous a appris à connaître le Christ. Il s'agit de vous défaire de votre conduite d'autrefois, de l'homme ancien corrompu, et de vous revêtir de l'homme nouveau, créé, selon Dieu, dans la justice et la sainteté conformes à la vérité.`,
    },
    gospel: {
      reference: "Jean 6, 24-35",
      text: `En ce temps-là, quand la foule vit que Jésus n'était pas là, elle monta dans les barques et se dirigea vers Capharnaüm. Jésus leur répondit : « Amen, amen, je vous le dis : vous me cherchez, non parce que vous avez vu des signes, mais parce que vous avez mangé de ces pains et que vous avez été rassasiés. Travaillez non pas pour la nourriture qui se perd, mais pour la nourriture qui demeure jusque dans la vie éternelle. Moi, je suis le pain de la vie. Celui qui vient à moi n'aura jamais faim. »`,
    },
  },
  "ot-19-sun": {
    firstReading: {
      reference: "1 Rois 19, 4-8",
      text: `En ces jours-là, le prophète Élie, marchant dans le désert, s'assit sous un buisson et demanda la mort : « Maintenant, Seigneur, c'en est trop ! Reprends ma vie. » Mais voici qu'un ange le toucha et lui dit : « Lève-toi, et mange ! » Il se leva, mangea et but. Fortifié par cette nourriture, il marcha quarante jours et quarante nuits jusqu'à l'Horeb, la montagne de Dieu.`,
    },
    psalm: {
      reference: "Psaume 33 (34)",
      text: `Goûtez et voyez : le Seigneur est bon ! Heureux qui trouve en lui son refuge ! Je bénirai le Seigneur en tout temps, sa louange sans cesse à mes lèvres. Le Seigneur est proche du cœur brisé, il sauve les esprits abattus.`,
    },
    secondReading: {
      reference: "Éphésiens 4, 30 – 5, 2",
      text: `Frères, n'attristez pas le Saint Esprit de Dieu, qui vous a marqués de son sceau en vue du jour de votre délivrance. Faites disparaître de votre vie tout ce qui est amertume, emportement, colère, éclats de voix, injures, ainsi que toute espèce de méchanceté. Soyez entre vous pleins de générosité et de tendresse. Vivez dans l'amour, comme le Christ nous a aimés et s'est livré lui-même pour nous.`,
    },
    gospel: {
      reference: "Jean 6, 41-51",
      text: `En ce temps-là, les Juifs récriminaient contre Jésus parce qu'il avait déclaré : « Moi, je suis le pain qui est descendu du ciel. » Ils disaient : « Celui-là n'est-il pas Jésus, fils de Joseph ? » Jésus leur répondit : « Ne récriminez pas entre vous. Moi, je suis le pain vivant, qui est descendu du ciel : si quelqu'un mange de ce pain, il vivra éternellement. Le pain que je donnerai, c'est ma chair, donnée pour la vie du monde. »`,
    },
  },
  "ot-20-sun": {
    firstReading: {
      reference: "Proverbes 9, 1-6",
      text: `La Sagesse a bâti sa maison, elle a taillé sept colonnes. Elle a tué ses bêtes, mêlé son vin et dressé sa table. Elle a envoyé ses servantes et elle proclame sur les hauteurs de la cité : « Celui qui est simple, qu'il passe par ici ! » À qui manque de bon sens, elle dit : « Venez, mangez de mon pain, buvez le vin que j'ai préparé. Quittez la niaiserie et vous vivrez, prenez le chemin de l'intelligence. »`,
    },
    psalm: {
      reference: "Psaume 33 (34)",
      text: `Goûtez et voyez : le Seigneur est bon ! Heureux qui trouve en lui son refuge ! Venez, mes fils, écoutez-moi, que je vous enseigne la crainte du Seigneur. Le Seigneur regarde les justes, il écoute, attentif à leurs cris.`,
    },
    secondReading: {
      reference: "Éphésiens 5, 15-20",
      text: `Frères, prenez bien garde à votre conduite : ne vivez pas comme des fous, mais comme des sages. Tirez parti du temps présent, car nous traversons des jours mauvais. Ne soyez donc pas insensés, mais comprenez bien quelle est la volonté du Seigneur. Ne vous enivrez pas de vin, mais laissez-vous remplir par l'Esprit Saint. Rendez continuellement grâce à Dieu le Père pour toutes choses, au nom de notre Seigneur Jésus Christ.`,
    },
    gospel: {
      reference: "Jean 6, 51-58",
      text: `En ce temps-là, Jésus disait aux foules : « Moi, je suis le pain vivant, qui est descendu du ciel : si quelqu'un mange de ce pain, il vivra éternellement. Le pain que je donnerai, c'est ma chair, donnée pour la vie du monde. » Les Juifs se querellaient entre eux : « Comment celui-là peut-il nous donner sa chair à manger ? » Jésus leur dit : « Celui qui mange ma chair et boit mon sang a la vie éternelle ; et moi, je le ressusciterai au dernier jour. »`,
    },
  },
  "ot-21-sun": {
    firstReading: {
      reference: "Josué 24, 1-2a.15-17.18b",
      text: `En ces jours-là, Josué réunit toutes les tribus d'Israël à Sichem. Josué dit alors à tout le peuple : « S'il ne vous plaît pas de servir le Seigneur, choisissez aujourd'hui qui vous voulez servir. Moi et les miens, nous voulons servir le Seigneur. » Le peuple répondit : « Plutôt mourir que d'abandonner le Seigneur pour servir d'autres dieux ! C'est le Seigneur notre Dieu qui nous a fait monter, nous et nos pères, du pays d'Égypte. Nous aussi, nous voulons servir le Seigneur, car c'est lui notre Dieu. »`,
    },
    psalm: {
      reference: "Psaume 33 (34)",
      text: `Goûtez et voyez : le Seigneur est bon ! Heureux qui trouve en lui son refuge ! Je bénirai le Seigneur en tout temps, sa louange sans cesse à mes lèvres. Le Seigneur est proche du cœur brisé, il sauve les esprits abattus. Malheur sur malheur pour le juste, mais le Seigneur chaque fois le délivre.`,
    },
    secondReading: {
      reference: "Éphésiens 5, 21-32",
      text: `Frères, par respect pour le Christ, soyez soumis les uns aux autres. Maris, aimez vos femmes comme le Christ a aimé l'Église : il s'est livré lui-même pour elle, afin de la rendre sainte. Ce mystère est grand : je le dis en référence au Christ et à l'Église.`,
    },
    gospel: {
      reference: "Jean 6, 60-69",
      text: `En ce temps-là, beaucoup de disciples de Jésus, après avoir entendu ses paroles, déclarèrent : « Cette parole est rude ! Qui peut l'entendre ? » Jésus reprit : « C'est l'esprit qui fait vivre, la chair n'est capable de rien. Les paroles que je vous ai dites sont esprit et elles sont vie. » À partir de ce moment, beaucoup de ses disciples s'en retournèrent et cessèrent de l'accompagner. Alors Jésus dit aux Douze : « Voulez-vous partir, vous aussi ? » Simon-Pierre lui répondit : « Seigneur, à qui irions-nous ? Tu as les paroles de la vie éternelle. »`,
    },
  },
  "ot-22-sun": {
    firstReading: {
      reference: "Deutéronome 4, 1-2.6-8",
      text: `Moïse disait au peuple : « Maintenant, Israël, écoute les décrets et les ordonnances que je vous enseigne pour que vous les mettiez en pratique. Vous n'ajouterez rien à ce que je vous ordonne, et vous n'y retrancherez rien. Gardez les commandements du Seigneur. Vous les mettrez en pratique : ils seront votre sagesse et votre intelligence aux yeux de tous les peuples. »`,
    },
    psalm: {
      reference: "Psaume 14 (15)",
      text: `Seigneur, qui séjournera sous ta tente ? Celui qui se conduit parfaitement, qui agit avec justice et dit la vérité selon son cœur. Il n'a pas de mépris pour son prochain. Il ne reprend pas sa parole. Qui fait ainsi demeure inébranlable.`,
    },
    secondReading: {
      reference: "Jacques 1, 17-18.21b-22.27",
      text: `Frères bien-aimés, les dons les meilleurs, les présents merveilleux, viennent d'en haut, ils descendent du Père des lumières. Il a voulu nous engendrer par sa parole de vérité. Accueillez dans la douceur la Parole semée en vous ; c'est elle qui peut sauver vos âmes. Mettez la Parole en pratique, ne vous contentez pas de l'écouter.`,
    },
    gospel: {
      reference: "Marc 7, 1-8.14-15.21-23",
      text: `En ce temps-là, les pharisiens et les scribes demandèrent à Jésus : « Pourquoi tes disciples ne suivent-ils pas la tradition des anciens ? Ils prennent leurs repas avec des mains impures. » Jésus leur répondit : « Isaïe a bien prophétisé à votre sujet : Ce peuple m'honore des lèvres, mais son cœur est loin de moi. Rien de ce qui est extérieur à l'homme et qui entre en lui ne peut le rendre impur. Mais ce qui sort de l'homme, voilà ce qui rend l'homme impur. C'est du dedans, du cœur de l'homme, que sortent les pensées perverses. »`,
    },
  },
  "ot-23-sun": {
    firstReading: {
      reference: "Isaïe 35, 4-7a",
      text: `Dites aux gens qui s'affolent : « Soyez forts, ne craignez pas. Voici votre Dieu : c'est la vengeance qui vient, la revanche de Dieu. Il vient lui-même et va vous sauver. » Alors se dessilleront les yeux des aveugles, et s'ouvriront les oreilles des sourds. Alors le boiteux bondira comme un cerf, et la bouche du muet criera de joie.`,
    },
    psalm: {
      reference: "Psaume 145 (146)",
      text: `Le Seigneur fait justice aux opprimés, aux affamés, il donne le pain ; le Seigneur délie les enchaînés. Le Seigneur ouvre les yeux des aveugles, le Seigneur redresse les accablés, le Seigneur aime les justes. Le Seigneur protège l'étranger.`,
    },
    secondReading: {
      reference: "Jacques 2, 1-5",
      text: `Frères, dans votre foi en Jésus Christ, notre Seigneur de gloire, n'ayez aucune partialité envers les personnes. Si, dans votre assemblée, il entre un homme aux vêtements rutilants et, en même temps, un pauvre aux vêtements sales, n'avez-vous pas fait une distinction entre vous ? Écoutez, mes frères bien-aimés ! Dieu, lui, n'a-t-il pas choisi ceux qui sont pauvres aux yeux du monde pour en faire des riches dans la foi ?`,
    },
    gospel: {
      reference: "Marc 7, 31-37",
      text: `En ce temps-là, Jésus quitta le territoire de Tyr ; passant par Sidon, il prit la direction de la mer de Galilée. On lui amène un sourd qui avait aussi de la difficulté à parler. Jésus l'emmena à l'écart, loin de la foule, lui mit les doigts dans les oreilles, et, avec sa salive, lui toucha la langue. Puis il leva les yeux au ciel et dit : « Effata ! », c'est-à-dire : « Ouvre-toi ! » Ses oreilles s'ouvrirent ; sa langue se délia. Tous étaient frappés d'étonnement : « Il a bien fait toutes choses. »`,
    },
  },
  "ot-24-sun": {
    firstReading: {
      reference: "Isaïe 50, 5-9a",
      text: `Le Seigneur mon Dieu m'a ouvert l'oreille, et moi, je ne me suis pas révolté, je ne me suis pas dérobé. J'ai présenté mon dos à ceux qui me frappaient, et mes joues à ceux qui m'arrachaient la barbe. Le Seigneur mon Dieu vient à mon secours ; c'est pourquoi je ne suis pas atteint par les outrages. Qui me fera un procès ? Le Seigneur Dieu vient à mon secours.`,
    },
    psalm: {
      reference: "Psaume 114 (116a)",
      text: `Je marcherai en présence du Seigneur sur la terre des vivants. J'aime le Seigneur : il entend le cri de ma prière. Il a penché vers moi son oreille le jour où j'ai appelé. J'étais pris dans les filets de la mort, le Seigneur m'a délivré.`,
    },
    secondReading: {
      reference: "Jacques 2, 14-18",
      text: `Frères, si quelqu'un prétend avoir la foi, sans la mettre en œuvre, à quoi cela sert-il ? Sa foi peut-elle le sauver ? Si un frère ou une sœur n'a pas de quoi s'habiller, ni de quoi manger tous les jours, et que l'un de vous leur dise : « Allez en paix ! Mettez-vous au chaud, et mangez à votre faim ! » sans leur donner le nécessaire, à quoi cela sert-il ? La foi, si elle n'est pas mise en œuvre, est bel et bien morte.`,
    },
    gospel: {
      reference: "Marc 8, 27-35",
      text: `En ce temps-là, Jésus s'en alla avec ses disciples vers les villages situés aux environs de Césarée-de-Philippe. Il leur demandait : « Au dire des gens, qui suis-je ? » Pierre prit la parole et dit : « Tu es le Christ. » Alors il commença à leur enseigner qu'il fallait que le Fils de l'homme souffre beaucoup, qu'il soit tué, et que, trois jours après, il ressuscite. « Si quelqu'un veut marcher à ma suite, qu'il renonce à lui-même, qu'il prenne sa croix et qu'il me suive. Car celui qui veut sauver sa vie la perdra ; mais celui qui perdra sa vie à cause de moi et de l'Évangile la sauvera. »`,
    },
  },
  "ot-25-sun": {
    firstReading: {
      reference: "Sagesse 2, 12.17-20",
      text: `Les impies disent : « Tendons des pièges au juste, il nous gêne. Voyons si ses paroles sont vraies, vérifions comment il finira. Si le juste est fils de Dieu, Dieu l'assistera et le délivrera de ses adversaires. Soumettons-le à des outrages et à des tourments, condamnons-le à une mort infâme. »`,
    },
    psalm: {
      reference: "Psaume 53 (54)",
      text: `Par ton nom, Dieu, sauve-moi, par ta puissance rends-moi justice ! Dieu, entends ma prière ; écoute les paroles de ma bouche ! Des étrangers se sont levés contre moi, des gens brutaux en veulent à ma vie. Voici que Dieu vient à mon aide, le Seigneur est mon appui entre tous.`,
    },
    secondReading: {
      reference: "Jacques 3, 16 – 4, 3",
      text: `Frères bien-aimés, la jalousie et les rivalités mènent au désordre et à toutes sortes d'actions malfaisantes. Au contraire, la sagesse qui vient d'en haut est d'abord pure, puis pacifique, bienveillante, conciliante, pleine de miséricorde et féconde en bons fruits. D'où viennent les guerres et les conflits entre vous ? N'est-ce pas de tous ces désirs qui mènent leur combat en vous-mêmes ?`,
    },
    gospel: {
      reference: "Marc 9, 30-37",
      text: `En ce temps-là, Jésus traversait la Galilée avec ses disciples, et il ne voulait pas qu'on le sache. Car il enseignait ses disciples en leur disant : « Le Fils de l'homme est livré aux mains des hommes ; ils le tueront et, trois jours après sa mort, il ressuscitera. » Mais ils ne comprenaient pas ces paroles et avaient peur de l'interroger. À la maison, Jésus leur demanda : « De quoi discutiez-vous en chemin ? » Ils se taisaient, car, en chemin, ils avaient discuté entre eux pour savoir qui était le plus grand. Il leur dit : « Si quelqu'un veut être le premier, qu'il soit le dernier de tous et le serviteur de tous. » Prenant un enfant, il le plaça au milieu d'eux.`,
    },
  },
  "ot-26-sun": {
    firstReading: {
      reference: "Nombres 11, 25-29",
      text: `En ces jours-là, le Seigneur descendit dans la nuée pour parler avec Moïse. Il prit une part de l'esprit qui reposait sur lui et le mit sur les soixante-dix anciens. Deux hommes étaient restés dans le camp : Eldad et Médad. L'esprit reposa sur eux. Un jeune homme courut annoncer à Moïse : « Eldad et Médad prophétisent dans le camp ! » Josué dit : « Mon maître Moïse, arrête-les ! » Mais Moïse lui dit : « Serais-tu jaloux pour moi ? Ah ! Si le Seigneur pouvait mettre son esprit sur eux ! »`,
    },
    psalm: {
      reference: "Psaume 18 (19)",
      text: `Les préceptes du Seigneur sont droits, ils réjouissent le cœur ; le commandement du Seigneur est limpide, il clarifie le regard. La crainte qu'il inspire est pure, elle est là pour toujours. Aussi ton serviteur en est illuminé : les garder, c'est grande récompense.`,
    },
    secondReading: {
      reference: "Jacques 5, 1-6",
      text: `Vous les riches, pleurez, lamentez-vous sur les malheurs qui vous attendent ! Vos richesses sont pourries, vos beaux vêtements sont mangés des mites. Le salaire dont vous avez frustré les ouvriers qui ont moissonné vos champs, le voici qui crie, et les clameurs des moissonneurs sont parvenues aux oreilles du Seigneur de l'univers.`,
    },
    gospel: {
      reference: "Marc 9, 38-43.45.47-48",
      text: `En ce temps-là, Jean, l'un des Douze, disait à Jésus : « Maître, nous avons vu quelqu'un expulser les démons en ton nom ; nous l'en avons empêché, car il n'est pas de ceux qui nous suivent. » Jésus répondit : « Ne l'en empêchez pas. Celui qui n'est pas contre nous est pour nous. Et celui qui vous donnera un verre d'eau au nom de votre appartenance au Christ, amen, je vous le dis, il ne restera pas sans récompense. Si ta main est pour toi une occasion de chute, coupe-la. Il vaut mieux entrer manchot dans la vie éternelle. »`,
    },
  },
  "ot-27-sun": {
    firstReading: {
      reference: "Genèse 2, 18-24",
      text: `Le Seigneur Dieu dit : « Il n'est pas bon que l'homme soit seul. Je vais lui faire une aide qui lui correspondra. » Avec de la terre, le Seigneur Dieu modela toutes les bêtes des champs, mais aucune ne correspondait à l'homme. Alors le Seigneur Dieu fit tomber sur lui un profond sommeil, et de la côte qu'il avait prise, il modela une femme. L'homme dit : « Cette fois-ci, voilà l'os de mes os et la chair de ma chair ! » C'est pourquoi l'homme quittera son père et sa mère, il s'attachera à sa femme, et tous deux ne feront plus qu'un.`,
    },
    psalm: {
      reference: "Psaume 127 (128)",
      text: `Heureux qui craint le Seigneur et marche selon ses voies ! Tu te nourriras du travail de tes mains : heureux es-tu ! À toi, le bonheur ! Ta femme sera dans ta maison comme une vigne généreuse, et tes fils, autour de la table, comme des plants d'olivier.`,
    },
    secondReading: {
      reference: "Hébreux 2, 9-11",
      text: `Frères, Jésus, qui a été abaissé un peu au-dessous des anges, le voici couronné de gloire et d'honneur à cause de sa Passion et de sa mort. Si, en effet, par la grâce de Dieu, il a goûté la mort pour tous les hommes, il convenait que Dieu conduise à leur gloire tous ces fils qu'il voulait rassembler. Car celui qui sanctifie et ceux qui sont sanctifiés doivent tous avoir même origine ; c'est pourquoi il n'a pas honte de les appeler ses frères.`,
    },
    gospel: {
      reference: "Marc 10, 2-16",
      text: `En ce temps-là, des pharisiens abordèrent Jésus et lui demandèrent : « Est-il permis à un mari de renvoyer sa femme ? » Jésus leur répondit : « Que vous a prescrit Moïse ? » Il leur dit : « C'est en raison de la dureté de vos cœurs qu'il a formulé pour vous cette règle. Mais, au commencement de la création, Dieu les fit homme et femme. Ce que Dieu a uni, que l'homme ne le sépare pas ! » On lui amenait des enfants pour qu'il pose la main sur eux. Il dit : « Laissez les enfants venir à moi. Le royaume de Dieu est à ceux qui leur ressemblent. »`,
    },
  },
  "ot-28-sun": {
    firstReading: {
      reference: "Sagesse 7, 7-11",
      text: `J'ai prié, et le discernement m'a été donné. J'ai supplié, et l'esprit de la Sagesse est venu en moi. Je l'ai préférée aux trônes et aux sceptres ; à côté d'elle, j'ai tenu pour rien la richesse. Aucune pierre précieuse ne l'égale. Tout l'or du monde auprès d'elle n'est qu'un peu de sable. Avec elle me sont venus tous les biens à la fois.`,
    },
    psalm: {
      reference: "Psaume 89 (90)",
      text: `Rassasie-nous de ton amour au matin, que nous passions nos jours dans la joie et les chants. Apprends-nous la vraie mesure de nos jours : que nos cœurs pénètrent la sagesse. Reviens, Seigneur, pourquoi tarder ? Ravise-toi par égard pour tes serviteurs.`,
    },
    secondReading: {
      reference: "Hébreux 4, 12-13",
      text: `Frères, elle est vivante, la parole de Dieu, énergique et plus coupante qu'une épée à deux tranchants ; elle va jusqu'au point de partage de l'âme et de l'esprit, des jointures et des moelles ; elle juge des intentions et des pensées du cœur. Pas une créature n'échappe à ses yeux, tout est nu devant elle, soumis à son regard ; nous aurons à lui rendre des comptes.`,
    },
    gospel: {
      reference: "Marc 10, 17-30",
      text: `En ce temps-là, Jésus se mettait en route quand un homme accourut et lui demanda : « Bon Maître, que dois-je faire pour avoir la vie éternelle en héritage ? » Jésus lui dit : « Une seule chose te manque : va, vends ce que tu as et donne-le aux pauvres ; alors tu auras un trésor au ciel. Puis viens, suis-moi. » Mais lui, à ces mots, devint sombre et s'en alla tout triste, car il avait de grands biens. Jésus dit à ses disciples : « Comme il sera difficile à ceux qui possèdent des richesses d'entrer dans le royaume de Dieu ! Il est plus facile à un chameau de passer par le trou d'une aiguille. »`,
    },
  },
  "ot-29-sun": {
    firstReading: {
      reference: "Isaïe 53, 10-11",
      text: `Broyé par la souffrance, le Serviteur a plu au Seigneur. S'il remet sa vie en sacrifice de réparation, il verra une descendance, il prolongera ses jours : par lui, ce qui plaît au Seigneur réussira. Par suite de ses tourments, il verra la lumière, la connaissance de Dieu le comblera. Le juste, mon serviteur, justifiera les multitudes, il se chargera de leurs fautes.`,
    },
    psalm: {
      reference: "Psaume 32 (33)",
      text: `Que ton amour, Seigneur, soit sur nous comme notre espoir est en toi ! Oui, elle est droite, la parole du Seigneur ; il est fidèle en tout ce qu'il fait. Il aime le bon droit et la justice ; la terre est remplie de son amour.`,
    },
    secondReading: {
      reference: "Hébreux 4, 14-16",
      text: `Frères, puisque nous avons un grand prêtre éminent qui a traversé les cieux, Jésus, le Fils de Dieu, tenons ferme l'affirmation de notre foi. En effet, nous n'avons pas un grand prêtre incapable de compatir à nos faiblesses, mais un grand prêtre éprouvé en toutes choses, à notre ressemblance, excepté le péché. Avançons-nous donc avec assurance vers le Trône de la grâce, pour obtenir miséricorde.`,
    },
    gospel: {
      reference: "Marc 10, 35-45",
      text: `En ce temps-là, Jacques et Jean, les fils de Zébédée, s'approchent de Jésus et lui disent : « Maître, ce que nous allons te demander, nous voudrions que tu le fasses pour nous. Donne-nous de siéger, l'un à ta droite et l'autre à ta gauche, dans ta gloire. » Jésus leur dit : « Vous ne savez pas ce que vous demandez. Pouvez-vous boire la coupe que je vais boire ? » Il leur dit : « Celui qui veut devenir grand parmi vous sera votre serviteur. Car le Fils de l'homme n'est pas venu pour être servi, mais pour servir, et donner sa vie en rançon pour la multitude. »`,
    },
  },
  "ot-30-sun": {
    firstReading: {
      reference: "Jérémie 31, 7-9",
      text: `Ainsi parle le Seigneur : Poussez des cris de joie pour Jacob, acclamez la première des nations ! Faites-vous entendre ! Dites : « Seigneur, sauve ton peuple, le reste d'Israël ! » Voici que je les fais revenir du pays du nord, je les rassemble des extrémités du monde. Il y a parmi eux des aveugles et des boiteux. La grande assemblée qui revient ici ! Ils sont partis dans les larmes, je les mène dans les consolations.`,
    },
    psalm: {
      reference: "Psaume 125 (126)",
      text: `Quand le Seigneur ramena les captifs de Sion, nous étions comme en rêve ! Alors notre bouche était pleine de rires, nous poussions des cris de joie. Ramène, Seigneur, nos captifs, comme les torrents au désert. Qui sème dans les larmes moissonne dans la joie.`,
    },
    secondReading: {
      reference: "Hébreux 5, 1-6",
      text: `Frères, tout grand prêtre est pris parmi les hommes ; il est établi pour intervenir en faveur des hommes dans leurs relations avec Dieu. Il est capable de compréhension envers ceux qui commettent des fautes par ignorance ou par égarement, car il est, lui aussi, rempli de faiblesse. Le Christ est grand prêtre selon l'ordre de Melkisédek, comme le dit l'Écriture : « Tu es prêtre à jamais. »`,
    },
    gospel: {
      reference: "Marc 10, 46-52",
      text: `En ce temps-là, tandis que Jésus sortait de Jéricho avec ses disciples et une foule nombreuse, le fils de Timée, Bartimée, un aveugle qui mendiait, était assis au bord du chemin. Quand il entendit que c'était Jésus de Nazareth, il se mit à crier : « Fils de David, Jésus, prends pitié de moi ! » Jésus lui dit : « Que veux-tu que je fasse pour toi ? » L'aveugle lui dit : « Rabbouni, que je retrouve la vue ! » Jésus lui dit : « Va, ta foi t'a sauvé. » Aussitôt l'homme retrouva la vue, et il suivait Jésus sur le chemin.`,
    },
  },
  "ot-31-sun": {
    firstReading: {
      reference: "Deutéronome 6, 2-6",
      text: `Moïse disait au peuple : « Tu craindras le Seigneur ton Dieu. Tous les jours de ta vie, toi, ainsi que ton fils et le fils de ton fils, tu observeras tous ses décrets et ses commandements. Écoute, Israël : le Seigneur notre Dieu est l'Unique. Tu aimeras le Seigneur ton Dieu de tout ton cœur, de toute ton âme et de toute ta force. Ces paroles que je te donne aujourd'hui resteront dans ton cœur. »`,
    },
    psalm: {
      reference: "Psaume 17 (18)",
      text: `Je t'aime, Seigneur, ma force : Seigneur, mon roc, ma forteresse, Dieu mon libérateur, le rocher qui m'abrite, mon bouclier, mon fort, mon arme de victoire ! Vive le Seigneur ! Béni soit mon Rocher ! Qu'il triomphe, le Dieu de ma victoire !`,
    },
    secondReading: {
      reference: "Hébreux 7, 23-28",
      text: `Frères, dans l'ancienne Alliance, weights prêtres furent nombreux, parce que la mort les empêchait de durer. Jésus, lui, parce qu'il demeure pour l'éternité, possède un sacerdoce qui ne passe pas. C'est pourquoi il est capable de sauver d'une manière définitive ceux qui s'avancent vers Dieu par lui, car il est toujours vivant pour intercéder en leur faveur.`,
    },
    gospel: {
      reference: "Marc 12, 28b-34",
      text: `En ce temps-là, un scribe s'avança vers Jésus pour lui demander : « Quel est le premier de tous les commandements ? » Jésus lui fit cette réponse : « Voici le premier : Écoute, Israël : le Seigneur notre Dieu est l'unique Seigneur. Tu aimeras le Seigneur ton Dieu de tout ton cœur, de toute ton âme, de tout ton esprit et de toute ta force. Et voici le second : Tu aimeras ton prochain comme toi-même. Il n'y a pas de commandement plus grand que ceux-là. » Le scribe reprit : « Fort bien, Maître, tu as dit vrai. » Jésus lui dit : « Tu n'es pas loin du royaume de Dieu. »`,
    },
  },
  "ot-32-sun": {
    firstReading: {
      reference: "1 Rois 17, 10-16",
      text: `En ces jours-là, le prophète Élie arriva à Sarepta, et il aperçut une veuve qui ramassait du bois. Il l'appela et lui dit : « Apporte-moi un morceau de pain. » Elle répondit : « Je n'ai rien de cuit ; j'ai seulement une poignée de farine et un peu d'huile. » Élie lui dit : « N'aie pas peur ! La jarre de farine ne s'épuisera pas, et le vase d'huile ne se videra pas, jusqu'au jour où le Seigneur donnera la pluie. » Et il en fut ainsi.`,
    },
    psalm: {
      reference: "Psaume 145 (146)",
      text: `Le Seigneur fait justice aux opprimés, aux affamés, il donne le pain. Le Seigneur délie les enchaînés, le Seigneur ouvre les yeux des aveugles. Le Seigneur protège l'étranger, il soutient la veuve et l'orphelin.`,
    },
    secondReading: {
      reference: "Hébreux 9, 24-28",
      text: `Le Christ n'est pas entré dans un sanctuaire fait de main d'homme, mais il est entré dans le ciel même, afin de se tenir maintenant pour nous devant la face de Dieu. Il s'est manifesté une seule fois pour détruire le péché par son sacrifice. Le Christ s'est offert une seule fois pour enlever les péchés de la multitude ; il apparaîtra une seconde fois pour le salut de ceux qui l'attendent.`,
    },
    gospel: {
      reference: "Marc 12, 38-44",
      text: `En ce temps-là, dans son enseignement, Jésus disait : « Méfiez-vous des scribes, qui tiennent à se promener en vêtements d'apparat. Ils dévorent les biens des veuves et, pour l'apparence, parsing de longues prières. » Jésus s'était assis dans le Temple, en face de la salle du trésor. Une pauvre veuve s'avança et mit deux petites pièces. Jésus dit à ses disciples : « Amen, je vous le dis : cette pauvre veuve a mis dans le Trésor plus que tous les autres. Car tous, ils ont pris sur leur superflu, mais elle, elle a pris sur son indigence : elle a mis tout ce qu'elle possédait, tout ce qu'elle avait pour vivre. »`,
    },
  },
  "ot-33-sun": {
    firstReading: {
      reference: "Daniel 12, 1-3",
      text: `En ce temps-là se lèvera Michel, le chef des anges, celui qui veille sur ton peuple. Ce sera un temps de détresse comme il n'y en a jamais eu depuis que les nations existent. Mais en ce temps-là, ton peuple sera délivré, tous ceux qui se trouveront inscrits dans le Livre. Beaucoup de ceux qui dorment dans la poussière de la terre s'éveilleront, les uns pour la vie éternelle, les autres pour la honte éternelle. Ceux qui ont l'intelligence resplendiront comme la splendeur du firmament, et ceux qui sont des maîtres de justice pour la multitude brilleront comme les étoiles pour toujours et à jamais.`,
    },
    psalm: {
      reference: "Psaume 15 (16)",
      text: `Garde-moi, mon Dieu : j'ai fait de toi mon refuge. J'ai dit au Seigneur : « Tu es mon Dieu ! » Seigneur, mon partage et ma coupe : de toi dépend mon sort. Je garde le Seigneur devant moi sans relâche ; il est à ma droite : je suis inébranlable. Tu m'apprends le chemin de la vie : devant ta face, débordement de joie !`,
    },
    secondReading: {
      reference: "Hébreux 10, 11-14.18",
      text: `Frères, dans l'ancienne Alliance, weights prêtre, chaque jour, se tenait debout dans le Lieu saint pour offrir maintes fois les mêmes sacrifices, qui sont incapables d'enlever les péchés. Jésus Christ, au contraire, après avoir offert pour les péchés un unique sacrifice, s'est assis pour toujours à la droite de Dieu. Par son unique offrande, il a mené pour toujours à leur perfection ceux qu'il sanctifie. Là où il y a rémission des péchés, il n'y a plus d'offrande pour le péché.`,
    },
    gospel: {
      reference: "Marc 13, 24-32",
      text: `En ce temps-là, Jésus parlait à ses disciples de sa venue : « En ces jours-là, après une grande détresse, le soleil s'obscurcira et la lune ne donnera plus sa clarté ; les étoiles tomberont du ciel, et les puissances célestes seront ébranlées. Alors on verra le Fils de l'homme venir dans les nuées avec grande puissance et avec gloire. Amen, je vous le dis : cette génération ne passera pas avant que tout cela n'arrive. Le ciel et la terre passeront, mes paroles ne passeront pas. Quant à ce jour et à cette heure-là, nul ne les connaît, pas même le Fils, mais seulement le Père. »`,
    },
  },
  "christ-king-sun": {
    firstReading: {
      reference: "Daniel 7, 13-14",
      text: `Moi, Daniel, j'ai vu venir, avec les nuées du ciel, comme un Fils d'homme ; il parvint jusqu'au Vieillard, et on le fit avancer devant lui. Et il lui fut donné domination, gloire et royauté ; tous les peuples, toutes les nations et les gens de toutes langues le servirent. Sa domination est une domination éternelle, qui ne passera pas, et sa royauté, une royauté qui ne sera pas détruite.`,
    },
    psalm: {
      reference: "Psaume 92 (93)",
      text: `Le Seigneur est roi ; il s'est vêtu de magnificence, le Seigneur a revêtu sa force. Ton trône est fixé dès l'origine : depuis toujours, tu es. Tes témoignages sont dignes de foi. La sainteté emplit ta maison, Seigneur, pour la suite des temps.`,
    },
    secondReading: {
      reference: "Apocalypse 1, 5-8",
      text: `Jésus Christ est le témoin fidèle, le premier-né des morts, le prince des rois de la terre. À lui qui nous aime, qui nous a délivrés de nos péchés par son sang, qui a fait de nous un royaume et des prêtres pour son Dieu et Père, à lui, la gloire et la souveraineté pour les siècles des siècles. Amen. Voici qu'il vient avec les nuées, tout œil le verra. « Moi, je suis l'Alpha et l'Oméga, dit le Seigneur Dieu, Celui qui est, qui était et qui vient, le Souverain de l'univers. »`,
    },
    gospel: {
      reference: "Jean 18, 33b-37",
      text: `En ce temps-là, Pilate demanda à Jésus : « Es-tu le roi des Juifs ? » Jésus lui dit : « Ma royauté n'est pas de ce monde ; si ma royauté était de ce monde, j'aurais des gardes qui se seraient battus pour que je ne sois pas livré aux Juifs. En fait, ma royauté n'est pas d'ici. » Pilate lui dit : « Alors, tu es roi ? » Jésus répondit : « C'est toi-même qui dis que je suis roi. Moi, je suis né, je suis venu dans le monde pour ceci : rendre témoignage à la vérité. Quiconque appartient à la vérité écoute ma voix. »`,
    },
  },
};
