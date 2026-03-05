import type { Reading } from "./readings";

interface ReadingSet {
  firstReading: Reading;
  psalm: Reading;
  gospel: Reading;
  secondReading?: Reading;
}

export const sundaysYearC: Record<string, ReadingSet> = {
  // ===================== AVENT =====================
  "advent-1-sun": {
    firstReading: {
      reference: "Jérémie 33, 14-16",
      text: `Voici venir des jours – oracle du Seigneur – où j'accomplirai la parole de bonheur que j'ai adressée à la maison d'Israël et à la maison de Juda. En ces jours-là, je ferai germer pour David un Germe de justice, et il exercera dans le pays le droit et la justice. En ces jours-là, Juda sera sauvé, et Jérusalem habitera en sécurité.`,
    },
    psalm: {
      reference: "Psaume 24 (25)",
      text: `Vers toi, Seigneur, j'élève mon âme. Seigneur, enseigne-moi tes voies, fais-moi connaître ta route. Dirige-moi par ta vérité, enseigne-moi, car tu es le Dieu qui me sauve. Rappelle-toi, Seigneur, ta tendresse, ton amour qui est de toujours.`,
    },
    secondReading: {
      reference: "1 Thessaloniciens 3, 12 – 4, 2",
      text: `Frères, que le Seigneur vous donne, entre vous et à l'égard de tous les hommes, un amour de plus en plus intense et débordant. Qu'il affermisse ainsi vos cœurs, les rendant irréprochables en sainteté devant Dieu notre Père, lors de la venue de notre Seigneur Jésus avec tous les saints.`,
    },
    gospel: {
      reference: "Luc 21, 25-28.34-36",
      text: `En ce temps-là, Jésus parlait à ses disciples de sa venue : « Il y aura des signes dans le soleil, la lune et les étoiles. Sur terre, les nations seront affolées. Alors, on verra le Fils de l'homme venir dans une nuée, avec puissance et grande gloire. Quand ces événements commenceront, redressez-vous et relevez la tête, car votre rédemption approche. Restez éveillés et priez en tout temps. »`,
    },
  },
  "advent-2-sun": {
    firstReading: {
      reference: "Baruch 5, 1-9",
      text: `Jérusalem, quitte ta robe de tristesse et de misère, et revêts la parure de la gloire de Dieu pour toujours. Prends le manteau de la justice de Dieu, mets sur ta tête le diadème de la gloire de l'Éternel. Car Dieu va montrer ta splendeur à toute la terre. Dieu conduira Israël dans la joie, à la lumière de sa gloire, avec sa miséricorde et sa justice.`,
    },
    psalm: {
      reference: "Psaume 125 (126)",
      text: `Quand le Seigneur ramena les captifs de Sion, nous étions comme en rêve ! Alors notre bouche était pleine de rires, nous poussions des cris de joie. Quelles merveilles le Seigneur fit pour nous : nous étions en grande fête ! Qui sème dans les larmes moissonne dans la joie.`,
    },
    secondReading: {
      reference: "Philippiens 1, 4-6.8-11",
      text: `Frères, à tout moment, chaque fois que je prie pour vous tous, c'est avec joie que je le fais. Et, dans ma prière, je demande que votre amour vous fasse progresser de plus en plus dans la pleine connaissance et en toute clairvoyance pour discerner ce qui est important. J'en suis persuadé, celui qui a commencé en vous un si beau travail le continuera jusqu'à son achèvement, au jour du Christ Jésus.`,
    },
    gospel: {
      reference: "Luc 3, 1-6",
      text: `L'an quinze du règne de l'empereur Tibère, la parole de Dieu fut adressée dans le désert à Jean, le fils de Zacharie. Il parcourut toute la région du Jourdain, en proclamant un baptême de conversion pour le pardon des péchés, comme il est écrit dans le livre des oracles d'Isaïe : « Voix de celui qui crie dans le désert : Préparez le chemin du Seigneur, rendez droits ses sentiers. Tout être vivant verra le salut de Dieu. »`,
    },
  },
  "advent-3-sun": {
    firstReading: {
      reference: "Sophonie 3, 14-18a",
      text: `Pousse des cris de joie, fille de Sion ! Éclate en ovations, Israël ! Réjouis-toi, de tout ton cœur bondis de joie, fille de Jérusalem ! Le Seigneur a levé les sentences qui pesaient sur toi. Le Seigneur ton Dieu est en toi, c'est lui, le héros qui apporte le salut. Il aura en toi sa joie et son allégresse, il te renouvellera par son amour.`,
    },
    psalm: {
      reference: "Isaïe 12, 2-6",
      text: `Voici le Dieu qui me sauve : j'ai confiance, je n'ai plus de crainte. Ma force et mon chant, c'est le Seigneur ; il est pour moi le salut. Exultez de joie, vous qui habitez Sion, car il est grand au milieu de toi, le Saint d'Israël !`,
    },
    secondReading: {
      reference: "Philippiens 4, 4-7",
      text: `Frères, soyez toujours dans la joie du Seigneur ; je le redis : soyez dans la joie. Que votre bienveillance soit connue de tous les hommes. Le Seigneur est proche. Ne soyez inquiets de rien, mais, en toute circonstance, priez et suppliez, tout en rendant grâce. Et la paix de Dieu, qui dépasse tout ce qu'on peut concevoir, gardera vos cœurs et vos pensées dans le Christ Jésus.`,
    },
    gospel: {
      reference: "Luc 3, 10-18",
      text: `En ce temps-là, les foules qui venaient se faire baptiser par Jean lui demandaient : « Que devons-nous faire ? » Jean leur répondait : « Celui qui a deux vêtements, qu'il partage avec celui qui n'en a pas ; et celui qui a de quoi manger, qu'il fasse de même. » Jean leur déclara : « Moi, je vous baptise avec de l'eau ; mais il vient, celui qui est plus fort que moi. Lui vous baptisera dans l'Esprit Saint et le feu. »`,
    },
  },
  "advent-4-sun": {
    firstReading: {
      reference: "Michée 5, 1-4a",
      text: `Ainsi parle le Seigneur : Toi, Bethléem Éphrata, le plus petit des clans de Juda, c'est de toi que sortira pour moi celui qui doit gouverner Israël. Ses origines remontent aux temps anciens, aux jours d'autrefois. Il se dressera et il sera leur berger par la puissance du Seigneur, par la majesté du nom du Seigneur son Dieu. Il sera la paix !`,
    },
    psalm: {
      reference: "Psaume 79 (80)",
      text: `Dieu de l'univers, reviens ! Du haut des cieux, regarde et vois. Visite cette vigne, protège-la, celle qu'a plantée ta main droite. Que ta main soutienne l'homme de ta droite, le fils de l'homme qui te doit sa force. Jamais plus nous n'irons loin de toi : fais-nous vivre et invoquer ton nom.`,
    },
    secondReading: {
      reference: "Hébreux 10, 5-10",
      text: `Frères, en entrant dans le monde, le Christ dit : « Tu n'as voulu ni sacrifice ni offrande, mais tu m'as formé un corps. Tu n'as pas agréé les holocaustes ni les sacrifices pour le péché ; alors, j'ai dit : Me voici, je suis venu, mon Dieu, pour faire ta volonté. » Et c'est grâce à cette volonté que nous sommes sanctifiés, par l'offrande que Jésus Christ a faite de son corps, une fois pour toutes.`,
    },
    gospel: {
      reference: "Luc 1, 39-45",
      text: `En ces jours-là, Marie se mit en route et se rendit avec empressement vers la région montagneuse, dans une ville de Judée. Elle entra dans la maison de Zacharie et salua Élisabeth. Or, quand Élisabeth entendit la salutation de Marie, l'enfant tressaillit en elle. Élisabeth, remplie de l'Esprit Saint, s'écria d'une voix forte : « Tu es bénie entre toutes les femmes, et le fruit de tes entrailles est béni. D'où m'est-il donné que la mère de mon Seigneur vienne jusqu'à moi ? »`,
    },
  },

  // ===================== CARÊME =====================
  "lent-1-sun": {
    firstReading: {
      reference: "Deutéronome 26, 4-10",
      text: `Moïse disait au peuple : « Le prêtre recevra la corbeille de tes mains et la déposera devant l'autel du Seigneur ton Dieu. Tu prononceras ces paroles : Mon père était un Araméen nomade, qui descendit en Égypte. Là-bas, il devint une nation grande et puissante. Les Égyptiens nous maltraitèrent, mais nous avons crié vers le Seigneur, et le Seigneur nous a fait sortir d'Égypte à main forte. Il nous a conduits dans ce lieu et nous a donné ce pays, un pays ruisselant de lait et de miel. »`,
    },
    psalm: {
      reference: "Psaume 90 (91)",
      text: `Toi qui habites à l'ombre du Très-Haut et qui reposes à l'ombre du Puissant, dis au Seigneur : « Mon refuge, mon rempart, mon Dieu, dont je suis sûr ! » Il te couvre et te protège. Tu ne craindras ni les terreurs de la nuit, ni la flèche qui vole au grand jour. Il ordonne à ses anges de te garder en tous tes chemins.`,
    },
    secondReading: {
      reference: "Romains 10, 8-13",
      text: `Frères, que dit l'Écriture ? « La parole est près de toi, elle est dans ta bouche et dans ton cœur. » Cette parole, c'est la parole de la foi que nous proclamons. En effet, si de ta bouche, tu affirmes que Jésus est Seigneur, si, dans ton cœur, tu crois que Dieu l'a ressuscité d'entre les morts, alors tu seras sauvé. Il n'y a pas de différence entre le Juif et le païen : tous ont le même Seigneur, généreux envers tous ceux qui l'invoquent.`,
    },
    gospel: {
      reference: "Luc 4, 1-13",
      text: `En ce temps-là, après son baptême, Jésus, rempli d'Esprit Saint, fut conduit par l'Esprit à travers le désert où, pendant quarante jours, il fut tenté par le diable. Le diable lui dit : « Si tu es Fils de Dieu, ordonne à cette pierre de devenir du pain. » Jésus lui répondit : « Il est écrit : L'homme ne vit pas seulement de pain. » Après avoir épuisé toutes les formes de tentation, le diable s'éloigna de lui jusqu'au moment fixé.`,
    },
  },
  "lent-2-sun": {
    firstReading: {
      reference: "Genèse 15, 5-12.17-18",
      text: `En ces jours-là, le Seigneur emmena Abram dehors et lui dit : « Regarde le ciel, et compte les étoiles, si tu le peux. Telle sera ta descendance. » Abram eut foi dans le Seigneur, et le Seigneur estima qu'il était juste. Quand le soleil fut couché, un brasier fumant et une torche enflammée passèrent entre les morceaux d'animaux. Ce jour-là, le Seigneur conclut une alliance avec Abram.`,
    },
    psalm: {
      reference: "Psaume 26 (27)",
      text: `Le Seigneur est ma lumière et mon salut ; de qui aurais-je crainte ? Le Seigneur est le rempart de ma vie ; devant qui tremblerais-je ? J'en suis sûr, je verrai les bontés du Seigneur sur la terre des vivants. Espère le Seigneur, sois fort et prends courage ; espère le Seigneur.`,
    },
    secondReading: {
      reference: "Philippiens 3, 17 – 4, 1",
      text: `Frères, ensemble, imitez-moi, et regardez bien ceux qui se conduisent selon l'exemple que nous vous donnons. Car notre cité se trouve dans les cieux, d'où nous attendons comme sauveur le Seigneur Jésus Christ. Il transformera nos pauvres corps à l'image de son corps glorieux, avec la puissance active qui le rend même capable de tout mettre sous son pouvoir.`,
    },
    gospel: {
      reference: "Luc 9, 28b-36",
      text: `En ce temps-là, Jésus prit avec lui Pierre, Jean et Jacques, et il gravit la montagne pour prier. Pendant qu'il priait, l'aspect de son visage devint autre, et son vêtement devint d'une blancheur éblouissante. Moïse et Élie, apparus dans la gloire, parlaient de son départ qui allait s'accomplir à Jérusalem. Pierre dit à Jésus : « Maître, il est bon que nous soyons ici ! » De la nuée, une voix se fit entendre : « Celui-ci est mon Fils, celui que j'ai choisi : écoutez-le ! »`,
    },
  },
  "lent-3-sun": {
    firstReading: {
      reference: "Exode 3, 1-8a.13-15",
      text: `En ces jours-là, Moïse était berger du troupeau de son beau-père Jéthro. Il mena le troupeau au-delà du désert et parvint à la montagne de Dieu, l'Horeb. L'ange du Seigneur lui apparut dans la flamme d'un buisson en feu. Le Seigneur dit : « J'ai vu la misère de mon peuple. Je suis descendu pour le délivrer. Je suis celui qui suis. » Dieu dit encore : « Tu diras aux fils d'Israël : "Le Seigneur, le Dieu de vos pères, m'a envoyé vers vous." »`,
    },
    psalm: {
      reference: "Psaume 102 (103)",
      text: `Le Seigneur est tendresse et pitié, lent à la colère et plein d'amour. Bénis le Seigneur, ô mon âme, du fond de mon être, son saint nom. Il n'agit pas envers nous selon nos fautes. Comme le ciel domine la terre, fort est son amour pour qui le craint.`,
    },
    secondReading: {
      reference: "1 Corinthiens 10, 1-6.10-12",
      text: `Frères, je ne voudrais pas vous laisser ignorer que nos pères, sous la nuée, ont tous passé la mer Rouge. Dans la mer, tous ont été baptisés en Moïse. Tous ont mangé la même nourriture spirituelle, et tous ont bu la même boisson spirituelle. Ces événements étaient destinés à nous servir d'exemple. Celui qui se croit debout, qu'il fasse attention à ne pas tomber.`,
    },
    gospel: {
      reference: "Luc 13, 1-9",
      text: `En ce temps-là, des gens rapportèrent à Jésus l'affaire des Galiléens que Pilate avait fait massacrer. Jésus leur répondit : « Pensez-vous que ces Galiléens étaient de plus grands pécheurs que tous les autres ? Eh bien, je vous dis : pas du tout ! Mais si vous ne vous convertissez pas, vous périrez tous de même. » Jésus disait aussi cette parabole : « Quelqu'un avait un figuier planté dans sa vigne. L'homme vint chercher du fruit et n'en trouva pas. Laisse-le encore cette année, le temps que je bêche autour pour y mettre du fumier. Peut-être donnera-t-il du fruit à l'avenir. »`,
    },
  },
  "lent-4-sun": {
    firstReading: {
      reference: "Josué 5, 9a.10-12",
      text: `En ces jours-là, le Seigneur dit à Josué : « Aujourd'hui, j'ai enlevé de vous la honte de l'Égypte. » Les fils d'Israël campèrent à Guilgal et célébrèrent la Pâque le quatorzième jour du mois, le soir, dans les plaines de Jéricho. Le lendemain de la Pâque, en ce jour même, ils mangèrent les produits de cette terre. La manne cessa le lendemain : les fils d'Israël mangèrent les récoltes de la terre de Canaan.`,
    },
    psalm: {
      reference: "Psaume 33 (34)",
      text: `Goûtez et voyez : le Seigneur est bon ! Heureux qui trouve en lui son refuge ! Je bénirai le Seigneur en tout temps, sa louange sans cesse à mes lèvres. Le Seigneur est proche du cœur brisé, il sauve les esprits abattus.`,
    },
    secondReading: {
      reference: "2 Corinthiens 5, 17-21",
      text: `Frères, si quelqu'un est dans le Christ, il est une créature nouvelle. Le monde ancien s'en est allé, un monde nouveau est déjà né. Tout cela vient de Dieu : il nous a réconciliés avec lui par le Christ et il nous a donné le ministère de la réconciliation. Au nom du Christ, nous vous le demandons, laissez-vous réconcilier avec Dieu.`,
    },
    gospel: {
      reference: "Luc 15, 1-3.11-32",
      text: `En ce temps-là, les publicains et les pécheurs venaient tous à Jésus pour l'écouter. Les pharisiens et les scribes récriminaient contre lui. Alors Jésus leur dit cette parabole : « Un homme avait deux fils. Le plus jeune dit à son père : "Père, donne-moi la part de fortune qui me revient." Quand il eut tout dépensé, il rentra en lui-même et dit : "Je me lèverai, j'irai vers mon père." Comme il était encore loin, son père l'aperçut et fut saisi de compassion ; il courut se jeter à son cou et le couvrit de baisers. »`,
    },
  },
  "lent-5-sun": {
    firstReading: {
      reference: "Isaïe 43, 16-21",
      text: `Ainsi parle le Seigneur, qui fit un chemin dans la mer, un sentier dans les eaux puissantes : « Ne faites plus mémoire des événements passés, ne songez plus aux choses d'autrefois. Voici que je fais une chose nouvelle, elle germe déjà, ne la voyez-vous pas ? Oui, je vais faire passer un chemin dans le désert, des fleuves dans les lieux arides. Le peuple que j'ai formé pour moi redira ma louange. »`,
    },
    psalm: {
      reference: "Psaume 125 (126)",
      text: `Quand le Seigneur ramena les captifs de Sion, nous étions comme en rêve ! Alors notre bouche était pleine de rires, nous poussions des cris de joie. Ramène, Seigneur, nos captifs, comme les torrents au désert. Qui sème dans les larmes moissonne dans la joie.`,
    },
    secondReading: {
      reference: "Philippiens 3, 8-14",
      text: `Frères, tous les avantages que j'avais autrefois, je les considère comme une perte à cause de ce bien qui dépasse tout : la connaissance du Christ Jésus, mon Seigneur. À cause de lui, j'ai tout perdu. Il s'agit pour moi de connaître le Christ, d'éprouver la puissance de sa résurrection et de communier aux souffrances de sa Passion. Je cours vers le but en vue du prix auquel Dieu nous appelle là-haut dans le Christ Jésus.`,
    },
    gospel: {
      reference: "Jean 8, 1-11",
      text: `En ce temps-là, Jésus s'en alla au mont des Oliviers. Les scribes et les pharisiens lui amenèrent une femme surprise en situation d'adultère. Ils lui dirent : « Maître, dans la Loi, Moïse nous a ordonné de lapider ces femmes-là. Et toi, que dis-tu ? » Jésus se releva et leur dit : « Celui d'entre vous qui est sans péché, qu'il soit le premier à lui jeter une pierre. » Ils s'en allèrent un par un. Jésus dit à la femme : « Moi non plus, je ne te condamne pas. Va, et désormais ne pèche plus. »`,
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
      reference: "Luc 22, 14 – 23, 56",
      text: `La Passion de notre Seigneur Jésus Christ selon saint Luc. Jésus dit : « J'ai désiré d'un grand désir manger cette Pâque avec vous avant de souffrir. » Arrivé au mont des Oliviers, il priait : « Père, si tu le veux, éloigne de moi cette coupe ; cependant, que soit faite non pas ma volonté, mais la tienne. » Sur la croix, Jésus disait : « Père, pardonne-leur : ils ne savent pas ce qu'ils font. » Puis il dit : « Père, entre tes mains je remets mon esprit. »`,
    },
  },

  // ===================== TEMPS PASCAL =====================
  "easter-sun": {
    firstReading: {
      reference: "Actes 10, 34a.37-43",
      text: `En ces jours-là, Pierre prit la parole et dit : « Vous savez ce qui s'est passé à travers tout le pays des Juifs, depuis les commencements en Galilée : Jésus de Nazareth, Dieu lui a donné l'onction d'Esprit Saint et de puissance. Là où il passait, il faisait le bien. Celui-là, Dieu l'a ressuscité le troisième jour. Nous en sommes témoins. »`,
    },
    psalm: {
      reference: "Psaume 117 (118)",
      text: `Voici le jour que fit le Seigneur, qu'il soit pour nous jour de fête et de joie ! Rendez grâce au Seigneur : Il est bon ! Éternel est son amour ! La pierre qu'ont rejetée les bâtisseurs est devenue la pierre d'angle : c'est là l'œuvre du Seigneur, la merveille devant nos yeux !`,
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
      reference: "Actes 5, 12-16",
      text: `En ces jours-là, par les mains des Apôtres, beaucoup de signes et de prodiges s'accomplissaient dans le peuple. Tous les croyants, d'un même cœur, se tenaient sous le portique de Salomon. On sortait les malades sur les places, pour qu'au passage de Pierre, son ombre au moins couvrît quelqu'un d'entre eux. Et tous étaient guéris.`,
    },
    psalm: {
      reference: "Psaume 117 (118)",
      text: `Rendez grâce au Seigneur : Il est bon ! Éternel est son amour ! Oui, que le dise Israël : Éternel est son amour ! Le bras du Seigneur se lève, le bras du Seigneur est fort ! Non, je ne mourrai pas, je vivrai, pour annoncer les actions du Seigneur.`,
    },
    secondReading: {
      reference: "Apocalypse 1, 9-11a.12-13.17-19",
      text: `Moi, Jean, votre frère, je me trouvais dans l'île de Patmos à cause de la parole de Dieu. Je vis sept chandeliers d'or, et au milieu des chandeliers, quelqu'un qui ressemblait à un Fils d'homme. Quand je le vis, je tombai à ses pieds comme mort. Il posa sur moi sa main droite, en disant : « Ne crains pas ! Moi, je suis le Premier et le Dernier, le Vivant : j'étais mort, et me voilà vivant pour les siècles des siècles. »`,
    },
    gospel: {
      reference: "Jean 20, 19-31",
      text: `C'était après la mort de Jésus. Le soir venu, les portes étant verrouillées, Jésus vint, et il était là au milieu d'eux. Il leur dit : « La paix soit avec vous ! » Puis il dit à Thomas : « Avance ton doigt ici, et vois mes mains ; avance ta main, et mets-la dans mon côté : cesse d'être incrédule, sois croyant. » Thomas lui dit : « Mon Seigneur et mon Dieu ! » Jésus lui dit : « Parce que tu m'as vu, tu crois. Heureux ceux qui croient sans avoir vu. »`,
    },
  },
  "easter-3-sun": {
    firstReading: {
      reference: "Actes 5, 27b-32.40b-41",
      text: `En ces jours-là, les Apôtres comparurent devant le Conseil suprême. Le grand prêtre les interrogea : « Nous vous avions formellement interdit d'enseigner au nom de celui-là. » Pierre et les Apôtres répondirent : « Il faut obéir à Dieu plutôt qu'aux hommes. Le Dieu de nos pères a ressuscité Jésus. C'est lui que Dieu a élevé, pour accorder à Israël la conversion et le pardon des péchés. Nous en sommes témoins. » Ils repartirent tout joyeux d'avoir été jugés dignes de subir des humiliations pour le nom de Jésus.`,
    },
    psalm: {
      reference: "Psaume 29 (30)",
      text: `Je t'exalte, Seigneur : tu m'as relevé, tu m'as fait remonter de l'abîme. Tu m'as fait revivre quand je descendais à la fosse. Au soir les larmes, au matin les cris de joie ! Tu as changé mon deuil en une danse, Seigneur mon Dieu, sans fin je te rendrai grâce.`,
    },
    secondReading: {
      reference: "Apocalypse 5, 11-14",
      text: `Moi, Jean, j'ai vu, et j'ai entendu la voix d'une multitude d'anges rassemblés autour du Trône, des Vivants et des Anciens ; ils étaient des myriades de myriades. Ils disaient d'une voix forte : « Il est digne, l'Agneau immolé, de recevoir puissance et richesse, sagesse et force, honneur, gloire et louange. » Et toute créature dans le ciel, sur la terre et sous la terre proclamait : « À Celui qui siège sur le Trône et à l'Agneau, la louange et l'honneur, la gloire et la souveraineté pour les siècles des siècles ! »`,
    },
    gospel: {
      reference: "Jean 21, 1-19",
      text: `En ce temps-là, Jésus se manifesta encore aux disciples sur le bord de la mer de Tibériade. Simon-Pierre leur dit : « Je m'en vais à la pêche. » Ils jetèrent le filet et ne pouvaient plus le tirer, tellement il y avait de poissons. Quand ils eurent mangé, Jésus dit à Simon-Pierre : « Simon, fils de Jean, m'aimes-tu plus que ceux-ci ? » Il lui répondit : « Oui, Seigneur, tu sais que je t'aime. » Jésus lui dit : « Sois le berger de mes brebis. »`,
    },
  },
  "easter-4-sun": {
    firstReading: {
      reference: "Actes 13, 14.43-52",
      text: `En ces jours-là, Paul et Barnabé arrivèrent à Antioche de Pisidie. Le sabbat suivant, presque toute la ville se rassembla pour entendre la parole du Seigneur. Quand les Juifs virent les foules, ils furent remplis de jalousie. Paul et Barnabé leur déclarèrent : « C'est à vous d'abord qu'il fallait adresser la parole de Dieu. Puisque vous la repoussez, eh bien ! nous nous tournons vers les nations païennes. » Les païens se réjouissaient et rendaient gloire à la parole du Seigneur.`,
    },
    psalm: {
      reference: "Psaume 99 (100)",
      text: `Nous sommes son peuple, son troupeau. Acclamez le Seigneur, terre entière, servez le Seigneur dans l'allégresse, venez à lui avec des chants de joie ! Reconnaissez que le Seigneur est Dieu : il nous a faits, et nous sommes à lui. Oui, le Seigneur est bon, éternel est son amour, sa fidélité demeure d'âge en âge.`,
    },
    secondReading: {
      reference: "Apocalypse 7, 9.14b-17",
      text: `Moi, Jean, j'ai vu une foule immense, que nul ne pouvait dénombrer, une foule de toutes nations, tribus, peuples et langues. Ils se tenaient debout devant le Trône et devant l'Agneau, vêtus de robes blanches. « Ce sont ceux qui viennent de la grande épreuve ; ils ont lavé leurs robes dans le sang de l'Agneau. L'Agneau qui se tient au milieu du Trône sera leur pasteur pour les conduire aux sources des eaux de la vie. Et Dieu essuiera toute larme de leurs yeux. »`,
    },
    gospel: {
      reference: "Jean 10, 27-30",
      text: `En ce temps-là, Jésus déclara : « Mes brebis écoutent ma voix ; moi, je les connais, et elles me suivent. Je leur donne la vie éternelle ; elles ne périront jamais et personne ne les arrachera de ma main. Mon Père, qui me les a données, est plus grand que tout, et personne ne peut rien arracher de la main du Père. Le Père et moi, nous sommes UN. »`,
    },
  },
  "easter-5-sun": {
    firstReading: {
      reference: "Actes 14, 21b-27",
      text: `En ces jours-là, Paul et Barnabé revinrent à Lystre, puis à Iconium et Antioche de Pisidie. Ils affermissaient le courage des disciples et les exhortaient à persévérer dans la foi, en disant : « Il nous faut passer par bien des épreuves pour entrer dans le royaume de Dieu. » Dans chaque Église, ils instituèrent des Anciens. À leur arrivée à Antioche, ils rapportèrent tout ce que Dieu avait fait avec eux, et comment il avait ouvert aux nations la porte de la foi.`,
    },
    psalm: {
      reference: "Psaume 144 (145)",
      text: `Mon Dieu, mon Roi, je bénirai ton nom toujours et à jamais ! Le Seigneur est tendresse et pitié, lent à la colère et plein d'amour. La bonté du Seigneur est pour tous, sa tendresse, pour toutes ses œuvres. Que tes fidèles te bénissent ! Ils diront la gloire de ton règne.`,
    },
    secondReading: {
      reference: "Apocalypse 21, 1-5a",
      text: `Moi, Jean, j'ai vu un ciel nouveau et une terre nouvelle. Et j'ai vu descendre du ciel, d'auprès de Dieu, la Ville sainte, la Jérusalem nouvelle, prête pour les noces, comme une épouse parée pour son mari. J'ai entendu une voix forte qui venait du Trône : « Voici la demeure de Dieu avec les hommes. Il essuiera toute larme de leurs yeux, et la mort ne sera plus. » Celui qui siégeait sur le Trône déclara : « Voici que je fais toutes choses nouvelles. »`,
    },
    gospel: {
      reference: "Jean 13, 31-33a.34-35",
      text: `En ce temps-là, au cours du dernier repas que Jésus prenait avec ses disciples, quand Judas fut sorti du cénacle, Jésus déclara : « Maintenant le Fils de l'homme est glorifié, et Dieu est glorifié en lui. Mes petits enfants, je suis encore avec vous, mais pour peu de temps. Je vous donne un commandement nouveau : c'est de vous aimer les uns les autres. Comme je vous ai aimés, vous aussi, aimez-vous les uns les autres. À ceci, tous reconnaîtront que vous êtes mes disciples : si vous avez de l'amour les uns pour les autres. »`,
    },
  },
  "easter-6-sun": {
    firstReading: {
      reference: "Actes 15, 1-2.22-29",
      text: `En ces jours-là, des gens venus de Judée enseignaient les frères en disant : « Si vous ne recevez pas la circoncision selon la coutume de Moïse, vous ne pouvez pas être sauvés. » Cela provoqua un affrontement. Les Apôtres et les Anciens décidèrent d'envoyer à Antioche des délégués avec cette lettre : « L'Esprit Saint et nous-mêmes avons décidé de ne pas faire peser sur vous d'autres obligations que celles-ci, qui s'imposent : vous abstenir des viandes offertes en sacrifice aux idoles, du sang et de l'union illégitime. »`,
    },
    psalm: {
      reference: "Psaume 66 (67)",
      text: `Que les peuples, Dieu, te rendent grâce ; qu'ils te rendent grâce tous ensemble ! Que Dieu nous prenne en grâce et nous bénisse, que son visage s'illumine pour nous, et ton chemin sera connu sur la terre, ton salut, parmi toutes les nations.`,
    },
    secondReading: {
      reference: "Apocalypse 21, 10-14.22-23",
      text: `Moi, Jean, j'ai vu la Ville sainte, la Jérusalem nouvelle, qui descendait du ciel, d'auprès de Dieu. Elle avait la gloire de Dieu ; son éclat était celui d'une pierre précieuse, d'un jaspe cristallin. La muraille de la ville reposait sur douze fondations portant les douze noms des douze Apôtres de l'Agneau. Dans la ville, je n'ai pas vu de sanctuaire, car son sanctuaire, c'est le Seigneur Dieu, Souverain de l'univers, et l'Agneau. La ville n'a pas besoin du soleil ni de la lune pour l'éclairer, car la gloire de Dieu l'illumine.`,
    },
    gospel: {
      reference: "Jean 14, 23-29",
      text: `En ce temps-là, Jésus disait à ses disciples : « Si quelqu'un m'aime, il gardera ma parole ; mon Père l'aimera, nous viendrons vers lui et, chez lui, nous nous ferons une demeure. Le Défenseur, l'Esprit Saint que le Père enverra en mon nom, lui, vous enseignera tout, et il vous fera souvenir de tout ce que je vous ai dit. Je vous laisse la paix, je vous donne ma paix. Que votre cœur ne soit pas bouleversé ni effrayé. »`,
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
      reference: "Éphésiens 1, 17-23",
      text: `Frères, que le Dieu de notre Seigneur Jésus Christ vous donne un esprit de sagesse qui vous le fasse connaître. Qu'il ouvre à sa lumière les yeux de votre cœur, pour que vous sachiez quelle espérance vous ouvre son appel. Il a déployé la force de sa puissance en ressuscitant le Christ d'entre les morts et en le faisant siéger à sa droite dans les cieux. Il a tout mis sous ses pieds et l'a donné, au sommet de tout, comme tête à l'Église.`,
    },
    gospel: {
      reference: "Luc 24, 46-53",
      text: `En ce temps-là, Jésus ressuscité dit à ses disciples : « Ainsi est-il écrit que le Christ souffrirait, qu'il ressusciterait d'entre les morts le troisième jour, et que la conversion serait proclamée en son nom, pour le pardon des péchés, à toutes les nations, en commençant par Jérusalem. Vous êtes témoins de tout cela. » Puis il les emmena au dehors, jusque vers Béthanie, et, levant les mains, il les bénit. Tandis qu'il les bénissait, il se sépara d'eux et il était emporté au ciel.`,
    },
  },
  "easter-7-sun": {
    firstReading: {
      reference: "Actes 7, 55-60",
      text: `En ces jours-là, Étienne, rempli de l'Esprit Saint, fixait le ciel du regard. Il vit la gloire de Dieu, et Jésus debout à la droite de Dieu. Il déclara : « Voici que je contemple les cieux ouverts et le Fils de l'homme debout à la droite de Dieu. » Tandis qu'on le lapidait, Étienne priait : « Seigneur Jésus, reçois mon esprit. » Puis, il fléchit les genoux et s'écria d'une voix forte : « Seigneur, ne leur compte pas ce péché. » Et, après cette parole, il s'endormit dans la mort.`,
    },
    psalm: {
      reference: "Psaume 96 (97)",
      text: `Le Seigneur est roi ! Exulte la terre ! Joie pour les îles sans nombre ! Les cieux ont proclamé sa justice, et tous les peuples ont vu sa gloire. Lumière est semée pour le juste, et joie pour les cœurs droits. Justes, réjouissez-vous dans le Seigneur !`,
    },
    secondReading: {
      reference: "Apocalypse 22, 12-14.16-17.20",
      text: `Moi, Jean, j'ai entendu une voix qui me disait : « Voici que je viens sans tarder, et j'apporte avec moi le salaire que je vais donner à chacun selon ce qu'il a fait. Moi, je suis l'Alpha et l'Oméga, le Premier et le Dernier, le Commencement et la Fin. Moi, Jésus, je suis le rejeton, le descendant de David, l'étoile resplendissante du matin. » L'Esprit et l'Épouse disent : « Viens ! » Celui qui donne ce témoignage déclare : « Oui, je viens sans tarder. » Amen ! Viens, Seigneur Jésus !`,
    },
    gospel: {
      reference: "Jean 17, 20-26",
      text: `En ce temps-là, les yeux levés au ciel, Jésus priait ainsi : « Père saint, je ne prie pas seulement pour ceux qui sont là, mais encore pour ceux qui, grâce à leur parole, croiront en moi. Que tous soient un, comme toi, Père, tu es en moi, et moi en toi. Qu'ils soient un en nous, eux aussi, pour que le monde croie que tu m'as envoyé. Et moi, je leur ai donné la gloire que tu m'as donnée, pour que l'amour dont tu m'as aimé soit en eux, et que moi aussi, je sois en eux. »`,
    },
  },
  "pentecost-sun": {
    firstReading: {
      reference: "Actes 2, 1-11",
      text: `Quand arriva le jour de la Pentecôte, au terme des cinquante jours après Pâques, ils se trouvaient réunis tous ensemble. Soudain un bruit survint du ciel comme un violent coup de vent : la maison où ils étaient assis en fut remplie tout entière. Alors leur apparurent des langues qu'on aurait dites de feu. Tous furent remplis d'Esprit Saint : ils se mirent à parler en d'autres langues, et chacun les entendait dans son propre dialecte.`,
    },
    psalm: {
      reference: "Psaume 103 (104)",
      text: `Ô Seigneur, envoie ton Esprit qui renouvelle la face de la terre ! Quelle profusion dans tes œuvres, Seigneur ! La terre s'emplit de tes biens. Tu reprends leur souffle, ils expirent. Tu envoies ton souffle : ils sont créés ; tu renouvelles la face de la terre.`,
    },
    secondReading: {
      reference: "Romains 8, 8-17",
      text: `Frères, ceux qui sont sous l'emprise de la chair ne peuvent pas plaire à Dieu. Or, vous, vous n'êtes pas sous l'emprise de la chair, mais sous celle de l'Esprit, puisque l'Esprit de Dieu habite en vous. Vous n'avez pas reçu un esprit qui fait de vous des esclaves, mais vous avez reçu un Esprit qui fait de vous des fils ; et c'est en lui que nous crions « Abba ! », c'est-à-dire : Père !`,
    },
    gospel: {
      reference: "Jean 14, 15-16.23b-26",
      text: `En ce temps-là, Jésus disait à ses disciples : « Si vous m'aimez, vous garderez mes commandements. Moi, je prierai le Père, et il vous donnera un autre Défenseur qui sera pour toujours avec vous. Si quelqu'un m'aime, il gardera ma parole ; mon Père l'aimera, nous viendrons vers lui et, chez lui, nous nous ferons une demeure. Le Défenseur, l'Esprit Saint que le Père enverra en mon nom, lui, vous enseignera tout. »`,
    },
  },

  // ===================== POST-PENTECÔTE =====================
  "trinity-sun": {
    firstReading: {
      reference: "Proverbes 8, 22-31",
      text: `Ainsi parle la Sagesse de Dieu : « Le Seigneur m'a faite pour lui, principe de son action, la première de ses œuvres, depuis toujours. Avant les siècles, j'ai été formée, avant l'apparition de la terre. J'étais à ses côtés comme un maître d'œuvre. Je faisais ses délices jour après jour, jouant devant lui à tout moment, jouant dans l'univers, sur sa terre, et trouvant mes délices avec les fils des hommes. »`,
    },
    psalm: {
      reference: "Psaume 8",
      text: `Ô Seigneur, notre Dieu, qu'il est grand ton nom par toute la terre ! À voir ton ciel, ouvrage de tes doigts, la lune et les étoiles que tu fixas, qu'est-ce que l'homme pour que tu penses à lui, le fils d'un homme, que tu en prennes souci ? Tu l'as voulu un peu moindre qu'un dieu, le couronnant de gloire et d'honneur.`,
    },
    secondReading: {
      reference: "Romains 5, 1-5",
      text: `Frères, nous qui sommes devenus justes par la foi, nous voici en paix avec Dieu par notre Seigneur Jésus Christ, lui qui nous a donné, par la foi, l'accès à cette grâce. Et l'espérance ne déçoit pas, puisque l'amour de Dieu a été répandu dans nos cœurs par l'Esprit Saint qui nous a été donné.`,
    },
    gospel: {
      reference: "Jean 16, 12-15",
      text: `En ce temps-là, Jésus disait à ses disciples : « J'ai encore beaucoup de choses à vous dire, mais pour l'instant vous ne pouvez pas les porter. Quand il viendra, lui, l'Esprit de vérité, il vous conduira dans la vérité tout entière. Car ce qu'il dira ne viendra pas de lui-même : il redira tout ce qu'il aura entendu. Il prendra ce qui vient de moi pour vous le faire connaître. Tout ce que possède le Père est à moi ; voilà pourquoi je vous ai dit : L'Esprit prend ce qui vient de moi pour vous le faire connaître. »`,
    },
  },
  "corpus-sun": {
    firstReading: {
      reference: "Genèse 14, 18-20",
      text: `En ces jours-là, Melkisédek, roi de Salem, fit apporter du pain et du vin : il était prêtre du Dieu très-haut. Il bénit Abram en disant : « Béni soit Abram par le Dieu très-haut, qui a fait le ciel et la terre ; et béni soit le Dieu très-haut, qui a livré tes ennemis entre tes mains. » Et Abram lui donna le dixième de tout ce qu'il avait.`,
    },
    psalm: {
      reference: "Psaume 109 (110)",
      text: `Tu es prêtre à jamais selon l'ordre du roi Melkisédek. Oracle du Seigneur à mon seigneur : « Siège à ma droite. » De Sion, le Seigneur te présente le sceptre de ta force : « Domine jusqu'au cœur de l'ennemi. » Le Seigneur l'a juré dans un serment irrévocable.`,
    },
    secondReading: {
      reference: "1 Corinthiens 11, 23-26",
      text: `Frères, moi, Paul, j'ai reçu du Seigneur ce que je vous ai transmis : la nuit où il était livré, le Seigneur Jésus prit du pain, puis, ayant rendu grâce, il le rompit et dit : « Ceci est mon corps, qui est pour vous. Faites cela en mémoire de moi. » Chaque fois que vous mangez ce pain et que vous buvez cette coupe, vous proclamez la mort du Seigneur, jusqu'à ce qu'il vienne.`,
    },
    gospel: {
      reference: "Luc 9, 11b-17",
      text: `En ce temps-là, Jésus parlait aux foules du règne de Dieu et guérissait ceux qui en avaient besoin. Le jour commençait à baisser. Les Douze lui dirent : « Renvoie cette foule. » Mais il leur dit : « Donnez-leur vous-mêmes à manger. » Jésus prit les cinq pains et les deux poissons, et, levant les yeux au ciel, il prononça la bénédiction, il les rompit et les donna à ses disciples pour qu'ils les distribuent à la foule. Ils mangèrent et ils furent tous rassasiés.`,
    },
  },

  // ===================== TEMPS ORDINAIRE =====================
  "ot-2-sun": {
    firstReading: {
      reference: "Isaïe 62, 1-5",
      text: `Pour la cause de Sion, je ne me tairai pas, et pour Jérusalem, je n'aurai de cesse que sa justice ne paraisse dans la clarté, et son salut comme une torche qui brûle. Tu ne seras plus appelée « la Délaissée », mais on t'appellera « Ma Préférence ». Comme un jeune homme épouse une vierge, ton bâtisseur t'épousera. Comme la joie de l'époux au sujet de l'épouse, ton Dieu se réjouira à ton sujet.`,
    },
    psalm: {
      reference: "Psaume 95 (96)",
      text: `Racontez à tous les peuples les merveilles du Seigneur. Chantez au Seigneur un chant nouveau, chantez au Seigneur, terre entière. Racontez à tous les peuples sa gloire, à toutes les nations ses merveilles ! Rendez au Seigneur la gloire de son nom.`,
    },
    secondReading: {
      reference: "1 Corinthiens 12, 4-11",
      text: `Frères, les dons de la grâce sont variés, mais c'est le même Esprit. Les services sont variés, mais c'est le même Seigneur. Les activités sont variées, mais c'est le même Dieu qui agit en tout et en tous. À chacun est donnée la manifestation de l'Esprit en vue du bien. Tout cela, c'est l'unique et même Esprit qui l'opère, distribuant ses dons à chacun en particulier comme il le veut.`,
    },
    gospel: {
      reference: "Jean 2, 1-11",
      text: `En ce temps-là, il y eut un mariage à Cana de Galilée. La mère de Jésus était là. Jésus aussi avait été invité avec ses disciples. Or, on manqua de vin. La mère de Jésus lui dit : « Ils n'ont pas de vin. » Jésus dit aux serviteurs : « Remplissez d'eau les jarres. Maintenant, puisez, et portez-en au maître du repas. » Le maître du repas goûta l'eau changée en vin. Tel fut le commencement des signes que Jésus accomplit. Il manifesta sa gloire, et ses disciples crurent en lui.`,
    },
  },
  "ot-3-sun": {
    firstReading: {
      reference: "Néhémie 8, 2-4a.5-6.8-10",
      text: `En ces jours-là, le prêtre Esdras apporta la Loi devant l'assemblée. Il lut dans le livre de la Loi de Dieu, en donnant les explications nécessaires. Tout le peuple pleurait en entendant les paroles de la Loi. Alors Esdras leur dit : « Ne pleurez pas ! Ce jour est consacré au Seigneur votre Dieu. Allez, mangez des viandes savoureuses, buvez des boissons aromatisées, et envoyez une part à celui qui n'a rien de prêt. La joie du Seigneur est votre rempart ! »`,
    },
    psalm: {
      reference: "Psaume 18 (19)",
      text: `La loi du Seigneur est parfaite, qui redonne vie ; la charte du Seigneur est sûre, qui rend sages les simples. Les préceptes du Seigneur sont droits, ils réjouissent le cœur ; le commandement du Seigneur est limpide, il clarifie le regard. Les paroles de ma bouche, le murmure de mon cœur, soient agréés en ta présence, Seigneur.`,
    },
    secondReading: {
      reference: "1 Corinthiens 12, 12-30",
      text: `Frères, prenons une comparaison : le corps ne fait qu'un, il a pourtant plusieurs membres ; et tous les membres, malgré leur nombre, ne forment qu'un seul corps. Il en est ainsi pour le Christ. C'est dans un unique Esprit que nous tous avons été baptisés pour former un seul corps. L'œil ne peut pas dire à la main : « Je n'ai pas besoin de toi. » Vous êtes corps du Christ et, chacun pour votre part, vous êtes membres de ce corps.`,
    },
    gospel: {
      reference: "Luc 1, 1-4 ; 4, 14-21",
      text: `Beaucoup ont entrepris de composer un récit des événements qui se sont accomplis parmi nous. J'ai décidé, moi aussi, après avoir recueilli avec précision des informations, d'en écrire pour toi un exposé suivi, excellent Théophile. Lorsque Jésus, dans la puissance de l'Esprit, revint en Galilée, il enseignait dans les synagogues. À Nazareth, il lut le passage d'Isaïe : « L'Esprit du Seigneur est sur moi. Il m'a envoyé porter la Bonne Nouvelle aux pauvres. » Il déclara : « Aujourd'hui s'accomplit ce passage de l'Écriture que vous venez d'entendre. »`,
    },
  },
  "ot-4-sun": {
    firstReading: {
      reference: "Jérémie 1, 4-5.17-19",
      text: `Au temps du roi Josias, la parole du Seigneur me fut adressée : « Avant même de te façonner dans le sein de ta mère, je te connaissais ; avant que tu viennes au jour, je t'ai consacré ; je fais de toi un prophète pour les nations. Toi, mets ta ceinture autour des reins et lève-toi, tu leur diras tout ce que je t'ordonnerai. Ils te combattront, mais ils ne pourront rien contre toi, car je suis avec toi pour te délivrer. »`,
    },
    psalm: {
      reference: "Psaume 70 (71)",
      text: `En toi, Seigneur, j'ai mon refuge ; garde-moi d'être humilié pour toujours. Dans ta justice, défends-moi, libère-moi ; tends l'oreille vers moi, et sauve-moi. Seigneur mon Dieu, tu es mon espérance, toi, mon appui dès avant ma naissance. Ma bouche annonce tout le jour tes actes de justice et de salut.`,
    },
    secondReading: {
      reference: "1 Corinthiens 12, 31 – 13, 13",
      text: `Frères, parmi les dons de Dieu, vous cherchez à obtenir ce qu'il y a de meilleur. Eh bien, je vais vous indiquer un chemin supérieur à tout. J'aurais beau parler toutes les langues des hommes et des anges, si je n'ai pas la charité, s'il me manque l'amour, je ne suis qu'un cuivre qui résonne. La charité prend patience, la charité rend service. Ce qui demeure aujourd'hui, c'est la foi, l'espérance et la charité ; mais la plus grande des trois, c'est la charité.`,
    },
    gospel: {
      reference: "Luc 4, 21-30",
      text: `En ce temps-là, dans la synagogue de Nazareth, Jésus déclara : « Aujourd'hui s'accomplit ce passage de l'Écriture. » Tous lui rendaient témoignage et s'étonnaient du message de grâce qui sortait de sa bouche. Ils disaient : « N'est-ce pas là le fils de Joseph ? » Jésus leur dit : « Amen, je vous le dis : aucun prophète ne trouve un accueil favorable dans son pays. » À ces mots, dans la synagogue, tous devinrent furieux. Ils poussèrent Jésus hors de la ville, mais lui, passant au milieu d'eux, allait son chemin.`,
    },
  },
  "ot-5-sun": {
    firstReading: {
      reference: "Isaïe 6, 1-2a.3-8",
      text: `L'année de la mort du roi Ozias, je vis le Seigneur qui siégeait sur un trône très élevé. Des séraphins se tenaient au-dessus de lui. Ils se criaient l'un à l'autre : « Saint ! Saint ! Saint, le Seigneur de l'univers ! Toute la terre est remplie de sa gloire. » Je dis : « Malheur à moi ! Je suis perdu, car je suis un homme aux lèvres impures. » L'un des séraphins toucha ma bouche avec une braise et dit : « Tes lèvres sont purifiées. » J'entendis la voix du Seigneur : « Qui enverrai-je ? » Je dis : « Me voici : envoie-moi ! »`,
    },
    psalm: {
      reference: "Psaume 137 (138)",
      text: `De tout mon cœur, Seigneur, je te rends grâce : tu as entendu les paroles de ma bouche. Je te chante en présence des anges. Le jour où tu répondis à mon appel, tu fis grandir en mon âme la force. Tous les rois de la terre te rendent grâce quand ils entendent les paroles de ta bouche.`,
    },
    secondReading: {
      reference: "1 Corinthiens 15, 1-11",
      text: `Frères, je vous rappelle la Bonne Nouvelle que je vous ai annoncée. Avant tout, je vous ai transmis ceci, que j'ai moi-même reçu : le Christ est mort pour nos péchés conformément aux Écritures, il fut mis au tombeau, il est ressuscité le troisième jour. Il est apparu à Pierre, puis aux Douze, ensuite à plus de cinq cents frères à la fois. En tout dernier lieu, il est même apparu à l'avorton que je suis. C'est par la grâce de Dieu que je suis ce que je suis.`,
    },
    gospel: {
      reference: "Luc 5, 1-11",
      text: `En ce temps-là, la foule se pressait autour de Jésus pour écouter la parole de Dieu. Jésus monta dans une barque qui appartenait à Simon, et lui dit : « Avance au large, et jetez vos filets pour la pêche. » Simon répondit : « Maître, nous avons peiné toute la nuit sans rien prendre ; mais, sur ta parole, je vais jeter les filets. » Ils prirent une telle quantité de poissons que leurs filets allaient se déchirer. Simon-Pierre tomba aux genoux de Jésus, en disant : « Éloigne-toi de moi, Seigneur, car je suis un homme pécheur. » Jésus dit à Simon : « Sois sans crainte, désormais ce sont des hommes que tu prendras. »`,
    },
  },
  "ot-6-sun": {
    firstReading: {
      reference: "Jérémie 17, 5-8",
      text: `Ainsi parle le Seigneur : Maudit soit l'homme qui met sa foi dans un mortel, qui s'appuie sur un être de chair, tandis que son cœur se détourne du Seigneur. Béni soit l'homme qui met sa foi dans le Seigneur. Il sera comme un arbre, planté près des eaux, qui pousse ses racines vers le courant : il ne craint pas quand vient la chaleur, et son feuillage reste vert.`,
    },
    psalm: {
      reference: "Psaume 1",
      text: `Heureux est l'homme qui ne suit pas le chemin des pécheurs. Il est comme un arbre planté près d'un ruisseau, qui donne du fruit en son temps, et jamais son feuillage ne meurt ; tout ce qu'il entreprend réussira. Tel n'est pas le sort des méchants : ils sont comme de la paille balayée par le vent.`,
    },
    secondReading: {
      reference: "1 Corinthiens 15, 12.16-20",
      text: `Frères, nous proclamons que le Christ est ressuscité d'entre les morts ; alors, comment certains d'entre vous peuvent-ils affirmer qu'il n'y a pas de résurrection des morts ? Si les morts ne ressuscitent pas, le Christ non plus n'est pas ressuscité. Mais non ! Le Christ est ressuscité d'entre les morts, lui, premier-né d'entre ceux qui se sont endormis.`,
    },
    gospel: {
      reference: "Luc 6, 17.20-26",
      text: `En ce temps-là, Jésus descendit de la montagne avec les Douze et s'arrêta sur un terrain plat. Regardant alors ses disciples, Jésus dit : « Heureux, vous les pauvres, car le royaume de Dieu est à vous. Heureux, vous qui avez faim maintenant, car vous serez rassasiés. Heureux, vous qui pleurez maintenant, car vous rirez. Mais quel malheur pour vous, les riches, car vous avez votre consolation ! Quel malheur pour vous qui êtes repus maintenant, car vous aurez faim ! »`,
    },
  },
  "ot-7-sun": {
    firstReading: {
      reference: "1 Samuel 26, 2.7-9.12-13.22-23",
      text: `En ces jours-là, Saül descendit au désert de Zif avec trois mille hommes pour y chercher David. David et Abishaï arrivèrent de nuit près de Saül qui dormait. Abishaï dit à David : « Laisse-moi le clouer à terre avec sa lance ! » Mais David répondit : « Ne le tue pas ! Qui pourrait demeurer impuni après avoir porté la main sur celui que le Seigneur a consacré par l'onction ? » David prit la lance et la gourde d'eau, et ils s'en allèrent. David cria : « Le Seigneur rendra à chacun selon sa justice et sa fidélité. »`,
    },
    psalm: {
      reference: "Psaume 102 (103)",
      text: `Le Seigneur est tendresse et pitié, lent à la colère et plein d'amour. Il n'agit pas envers nous selon nos fautes, ne nous rend pas selon nos offenses. Comme le ciel domine la terre, fort est son amour pour qui le craint. Aussi loin qu'est l'orient de l'occident, il met loin de nous nos péchés.`,
    },
    secondReading: {
      reference: "1 Corinthiens 15, 45-49",
      text: `Frères, l'Écriture dit : Le premier homme, Adam, devint un être vivant ; le dernier Adam – le Christ – est devenu l'être spirituel qui donne la vie. Le premier homme, né de la terre, est terrestre ; le second homme, lui, vient du ciel. Comme nous aurons été à l'image de celui qui est terrestre, de même nous serons à l'image de celui qui vient du ciel.`,
    },
    gospel: {
      reference: "Luc 6, 27-38",
      text: `En ce temps-là, Jésus déclarait : « Je vous le dis, à vous qui m'écoutez : Aimez vos ennemis, faites du bien à ceux qui vous haïssent. Bénissez ceux qui vous maudissent, priez pour ceux qui vous calomnient. À celui qui te frappe sur une joue, présente l'autre joue. Soyez miséricordieux comme votre Père est miséricordieux. Ne jugez pas, et vous ne serez pas jugés. Donnez, et l'on vous donnera : c'est une mesure bien pleine, tassée, secouée, débordante, qui sera versée dans le pan de votre vêtement. »`,
    },
  },
  "ot-10-sun": {
    firstReading: {
      reference: "1 Rois 17, 17-24",
      text: `En ces jours-là, le fils de la femme chez qui habitait Élie tomba malade et mourut. Elle dit à Élie : « Homme de Dieu, que me veux-tu ? Tu es venu chez moi pour rappeler mes fautes et faire mourir mon fils ! » Élie cria vers le Seigneur : « Seigneur, mon Dieu, je t'en supplie, fais revenir en cet enfant son âme ! » Le Seigneur entendit la voix d'Élie, et l'âme de l'enfant revint en lui : il était vivant ! La femme dit à Élie : « Maintenant je sais que la parole du Seigneur dans ta bouche est vérité. »`,
    },
    psalm: {
      reference: "Psaume 29 (30)",
      text: `Je t'exalte, Seigneur : tu m'as relevé. Au soir les larmes, au matin les cris de joie ! Tu as changé mon deuil en une danse, tu m'as enlevé mon habit de sac, tu m'as revêtu de joie. Que mon cœur ne se taise pas, qu'il soit en fête pour toi, et que sans fin, Seigneur mon Dieu, je te rende grâce !`,
    },
    secondReading: {
      reference: "Galates 1, 11-19",
      text: `Frères, je veux que vous le sachiez, l'Évangile que j'ai proclamé n'est pas une invention humaine. Ce n'est pas non plus d'un homme que je l'ai reçu ou appris, mais par révélation de Jésus Christ. Celui qui m'avait mis à part dès le sein de ma mère a trouvé bon de révéler en moi son Fils, pour que je l'annonce parmi les nations païennes.`,
    },
    gospel: {
      reference: "Luc 7, 11-17",
      text: `En ce temps-là, Jésus se rendit dans une ville appelée Naïm. Un mort était emporté ; c'était le fils unique d'une veuve. Voyant celle-ci, le Seigneur fut saisi de compassion pour elle et lui dit : « Ne pleure pas. » Il s'approcha et toucha le cercueil. Il dit : « Jeune homme, je te l'ordonne, lève-toi. » Le mort se redressa et se mit à parler. Jésus le rendit à sa mère. La crainte s'empara de tous, et ils rendaient gloire à Dieu : « Un grand prophète s'est levé parmi nous, et Dieu a visité son peuple. »`,
    },
  },
  "ot-11-sun": {
    firstReading: {
      reference: "2 Samuel 12, 7-10.13",
      text: `En ces jours-là, le prophète Nathan dit à David : « Ainsi parle le Seigneur Dieu d'Israël : C'est moi qui t'ai sacré roi d'Israël. Pourquoi as-tu méprisé le Seigneur en faisant ce qui est mal à ses yeux ? Tu as frappé par l'épée Ourias le Hittite ; sa femme, tu l'as prise pour en faire ta femme. » David dit à Nathan : « J'ai péché contre le Seigneur ! » Nathan lui répondit : « Le Seigneur a pardonné ton péché : tu ne mourras pas. »`,
    },
    psalm: {
      reference: "Psaume 31 (32)",
      text: `Heureux l'homme dont la faute est enlevée, et le péché remis ! J'ai dit : « Je rendrai grâce au Seigneur en confessant mes péchés. » Toi, tu as enlevé l'offense de ma faute. Tu es un refuge pour moi, tu me gardes de la détresse, de chants de délivrance tu m'entoures.`,
    },
    secondReading: {
      reference: "Galates 2, 16.19-21",
      text: `Frères, nous le savons : ce n'est pas en observant la Loi que l'homme devient juste devant Dieu, mais seulement par la foi en Jésus Christ. Par la Loi, je suis mort à la Loi afin de vivre pour Dieu. Avec le Christ, je suis crucifié. Je vis, mais ce n'est plus moi, c'est le Christ qui vit en moi. Ma vie présente dans la chair, je la vis dans la foi au Fils de Dieu qui m'a aimé et s'est livré lui-même pour moi.`,
    },
    gospel: {
      reference: "Luc 7, 36 – 8, 3",
      text: `En ce temps-là, un pharisien avait invité Jésus à manger avec lui. Survint une femme de la ville, une pécheresse. Tout en pleurs, elle se mit à mouiller de ses larmes les pieds de Jésus. Puis elle les essuya avec ses cheveux, les couvrit de baisers et y versa du parfum. Jésus dit au pharisien : « Ses péchés, ses nombreux péchés, sont pardonnés, puisqu'elle a montré beaucoup d'amour. Mais celui à qui on pardonne peu montre peu d'amour. » Puis il dit à la femme : « Ta foi t'a sauvée. Va en paix ! »`,
    },
  },
  "ot-12-sun": {
    firstReading: {
      reference: "Zacharie 12, 10-11 ; 13, 1",
      text: `Ainsi parle le Seigneur : « Je répandrai sur la maison de David et sur les habitants de Jérusalem un esprit de grâce et de supplication. Ils regarderont vers moi, celui qu'ils ont transpercé ; ils le pleureront comme on pleure un fils premier-né. Ce jour-là, il y aura grande lamentation dans Jérusalem. Ce jour-là, une source jaillira pour la maison de David et pour les habitants de Jérusalem, en remède au péché et à la souillure. »`,
    },
    psalm: {
      reference: "Psaume 62 (63)",
      text: `Dieu, tu es mon Dieu, je te cherche dès l'aube : mon âme a soif de toi ; après toi languit ma chair, terre aride, altérée, sans eau. Je t'ai contemplé au sanctuaire, j'ai vu ta force et ta gloire. Ton amour vaut mieux que la vie : tu seras la louange de mes lèvres !`,
    },
    secondReading: {
      reference: "Galates 3, 26-29",
      text: `Frères, tous, dans le Christ Jésus, vous êtes fils de Dieu par la foi. Vous tous que le baptême a unis au Christ, vous avez revêtu le Christ. Il n'y a plus ni juif ni grec, il n'y a plus ni esclave ni homme libre, il n'y a plus l'homme et la femme, car tous, vous ne faites qu'un dans le Christ Jésus. Et si vous appartenez au Christ, vous êtes de la descendance d'Abraham.`,
    },
    gospel: {
      reference: "Luc 9, 18-24",
      text: `En ce temps-là, un jour, Jésus priait à l'écart. Comme ses disciples étaient là, il les interrogea : « Au dire des foules, qui suis-je ? » Pierre prit la parole et dit : « Le Christ, le Messie de Dieu. » Jésus leur défendit de le dire à personne, et déclara : « Il faut que le Fils de l'homme souffre beaucoup, qu'il soit rejeté et qu'il soit tué ; le troisième jour, il ressuscitera. Celui qui veut marcher à ma suite, qu'il renonce à lui-même, qu'il prenne sa croix chaque jour et qu'il me suive. »`,
    },
  },
  "ot-13-sun": {
    firstReading: {
      reference: "1 Rois 19, 16b.19-21",
      text: `En ces jours-là, le Seigneur dit à Élie : « Tu consacreras Élisée, fils de Shafath, comme prophète pour te succéder. » Élie s'en alla. Il trouva Élisée en train de labourer. Il passa près de lui et jeta vers lui son manteau. Alors Élisée quitta ses bœufs, courut derrière Élie et dit : « Laisse-moi embrasser mon père et ma mère, puis je te suivrai. » Élisée le suivit et se mit à son service.`,
    },
    psalm: {
      reference: "Psaume 15 (16)",
      text: `Garde-moi, mon Dieu : j'ai fait de toi mon refuge. J'ai dit au Seigneur : « Tu es mon Dieu ! » Seigneur, mon partage et ma coupe : de toi dépend mon sort. Je garde le Seigneur devant moi sans relâche ; il est à ma droite : je suis inébranlable. Tu m'apprends le chemin de la vie.`,
    },
    secondReading: {
      reference: "Galates 5, 1.13-18",
      text: `Frères, c'est pour que nous soyons libres que le Christ nous a libérés. Tenez bon, donc, et ne vous remettez pas sous le joug de l'esclavage. Vous avez été appelés à la liberté. Mais que cette liberté ne soit pas un prétexte pour satisfaire votre égoïsme ; au contraire, mettez-vous, par amour, au service les uns des autres. Marchez sous la conduite de l'Esprit Saint.`,
    },
    gospel: {
      reference: "Luc 9, 51-62",
      text: `En ce temps-là, comme s'accomplissait le temps où il allait être enlevé au ciel, Jésus, le visage déterminé, prit la route de Jérusalem. En cours de route, un homme lui dit : « Je te suivrai partout où tu iras. » Jésus lui déclara : « Les renards ont des terriers, les oiseaux du ciel ont des nids ; mais le Fils de l'homme n'a pas d'endroit où reposer la tête. » Il dit à un autre : « Suis-moi. » L'homme répondit : « Laisse-moi d'abord aller enterrer mon père. » Jésus répliqua : « Quiconque met la main à la charrue, puis regarde en arrière, n'est pas fait pour le royaume de Dieu. »`,
    },
  },
  "ot-14-sun": {
    firstReading: {
      reference: "Isaïe 66, 10-14c",
      text: `Réjouissez-vous avec Jérusalem ! Exultez en elle, vous tous qui l'aimez ! Vous serez nourris de son lait, rassasiés de ses consolations, et vous puiserez avec délices à l'abondance de sa gloire. Ainsi parle le Seigneur : « Voici que je dirige vers elle la paix comme un fleuve. Comme un enfant que sa mère console, ainsi je vous consolerai. »`,
    },
    psalm: {
      reference: "Psaume 65 (66)",
      text: `Terre entière, acclame Dieu, chante le Seigneur ! Venez et voyez les hauts faits de Dieu : il est redoutable envers les fils des hommes. Béni soit Dieu, qui n'a pas écarté ma prière, ni détourné de moi son amour !`,
    },
    secondReading: {
      reference: "Galates 6, 14-18",
      text: `Frères, pour moi, que la croix de notre Seigneur Jésus Christ reste ma seule fierté. Par elle, le monde est crucifié pour moi, et moi pour le monde. Ce qui compte, ce n'est pas d'être circoncis ou incirconcis, c'est d'être une création nouvelle. La paix et la miséricorde de Dieu pour tous ceux qui marchent selon cette règle. Je porte dans mon corps les marques des souffrances de Jésus.`,
    },
    gospel: {
      reference: "Luc 10, 1-12.17-20",
      text: `En ce temps-là, parmi les disciples, le Seigneur en désigna encore soixante-douze, et il les envoya deux par deux, en avant de lui, dans toutes les villes et localités où lui-même allait se rendre. Il leur dit : « La moisson est abondante, mais les ouvriers sont peu nombreux. Priez donc le maître de la moisson d'envoyer des ouvriers pour sa moisson. » Les soixante-douze revinrent tout joyeux, en disant : « Seigneur, même les démons nous sont soumis en ton nom. » Jésus leur dit : « Réjouissez-vous parce que vos noms se trouvent inscrits dans les cieux. »`,
    },
  },
  "ot-15-sun": {
    firstReading: {
      reference: "Deutéronome 30, 10-14",
      text: `Moïse disait au peuple : « Écoute la voix du Seigneur ton Dieu, en observant ses commandements et ses décrets. Reviens au Seigneur ton Dieu de tout ton cœur et de toute ton âme. Car cette loi que je te prescris aujourd'hui n'est pas au-dessus de tes forces ni hors de ton atteinte. Elle n'est pas dans les cieux. Elle n'est pas au-delà des mers. Elle est tout près de toi, cette Parole, elle est dans ta bouche et dans ton cœur, afin que tu la mettes en pratique. »`,
    },
    psalm: {
      reference: "Psaume 68 (69)",
      text: `Les pauvres l'ont vu, alors ils sont en fête : « Vie et joie, à vous qui cherchez Dieu ! » Car le Seigneur écoute les humbles, il n'oublie pas les siens emprisonnés. Que le ciel et la terre le célèbrent, les mers et tout ce qui s'y remue !`,
    },
    secondReading: {
      reference: "Colossiens 1, 15-20",
      text: `Le Christ Jésus est l'image du Dieu invisible, le premier-né, avant toute créature. En lui, tout fut créé, dans le ciel et sur la terre. Il est avant toute chose, et tout subsiste en lui. Il est aussi la tête du corps, la tête de l'Église. Car Dieu a jugé bon qu'habite en lui toute plénitude et que tout, par le Christ, lui soit enfin réconcilié, en faisant la paix par le sang de sa Croix.`,
    },
    gospel: {
      reference: "Luc 10, 25-37",
      text: `En ce temps-là, un docteur de la Loi se leva et mit Jésus à l'épreuve : « Maître, que dois-je faire pour avoir en héritage la vie éternelle ? » Jésus lui demanda : « Dans la Loi, qu'y a-t-il d'écrit ? » Il répondit : « Tu aimeras le Seigneur ton Dieu, et ton prochain comme toi-même. » Jésus dit : « Et qui est mon prochain ? » Jésus raconta la parabole du bon Samaritain, qui prit soin du blessé laissé au bord du chemin, et dit : « Va, et toi aussi, fais de même. »`,
    },
  },
  "ot-16-sun": {
    firstReading: {
      reference: "Genèse 18, 1-10a",
      text: `En ces jours-là, aux chênes de Mambré, le Seigneur apparut à Abraham. Abraham leva les yeux et vit trois hommes qui se tenaient debout près de lui. Il courut à leur rencontre et se prosterna. Il dit : « Mon seigneur, ne passe pas sans t'arrêter près de ton serviteur. » Il fit préparer un veau et du pain. L'un d'eux dit : « Je reviendrai chez toi au temps fixé, et Sarah, ta femme, aura un fils. »`,
    },
    psalm: {
      reference: "Psaume 14 (15)",
      text: `Seigneur, qui séjournera sous ta tente ? Celui qui se conduit parfaitement, qui agit avec justice et dit la vérité selon son cœur. Il n'a pas de mépris pour son prochain. Il prête son argent sans intérêt. Qui fait ainsi demeure inébranlable.`,
    },
    secondReading: {
      reference: "Colossiens 1, 24-28",
      text: `Frères, maintenant je trouve la joie dans les souffrances que je supporte pour vous ; ce qui reste à souffrir des épreuves du Christ dans ma propre chair, je l'accomplis pour son corps qui est l'Église. De ce ministère, je suis devenu serviteur. Le mystère tenu caché depuis toujours et que Dieu a maintenant manifesté à ses saints, c'est le Christ au milieu de vous, le Christ, espérance de la gloire.`,
    },
    gospel: {
      reference: "Luc 10, 38-42",
      text: `En ce temps-là, Jésus entra dans un village. Une femme nommée Marthe le reçut. Elle avait une sœur appelée Marie qui, s'étant assise aux pieds du Seigneur, écoutait sa parole. Marthe, accaparée par les multiples occupations du service, intervint et dit : « Seigneur, cela ne te fait rien que ma sœur me laisse faire seule le service ? Dis-lui donc de m'aider. » Le Seigneur lui répondit : « Marthe, Marthe, tu te donnes du souci pour bien des choses. Une seule est nécessaire. Marie a choisi la meilleure part, elle ne lui sera pas enlevée. »`,
    },
  },
  "ot-17-sun": {
    firstReading: {
      reference: "Genèse 18, 20-32",
      text: `En ces jours-là, les hommes partirent de là et se dirigèrent vers Sodome. Abraham s'approcha et dit : « Vas-tu vraiment faire périr le juste avec le coupable ? Peut-être y a-t-il cinquante justes dans la ville. » Le Seigneur dit : « Si je trouve cinquante justes, je pardonnerai à toute la ville. » Abraham reprit : « Et s'il y en a quarante-cinq ? trente ? vingt ? dix ? » Le Seigneur dit : « Pour dix, je ne détruirai pas. »`,
    },
    psalm: {
      reference: "Psaume 137 (138)",
      text: `De tout mon cœur, Seigneur, je te rends grâce. Le jour où tu répondis à mon appel, tu fis grandir en mon âme la force. Si haut que soit le Seigneur, il voit le plus humble ; de loin, il reconnaît l'orgueilleux. Le Seigneur fait tout pour moi ! Seigneur, éternel est ton amour.`,
    },
    secondReading: {
      reference: "Colossiens 2, 12-14",
      text: `Frères, dans le baptême, vous avez été mis au tombeau avec le Christ et vous êtes ressuscités avec lui par la foi en la force de Dieu qui l'a ressuscité d'entre les morts. Vous étiez des morts, parce que vous aviez commis des péchés. Dieu vous a donné la vie avec le Christ : il nous a pardonné toutes nos fautes. Il a effacé le document accusateur qui nous accablait, il l'a supprimé en le clouant à la croix.`,
    },
    gospel: {
      reference: "Luc 11, 1-13",
      text: `En ce temps-là, il arriva que Jésus, en un certain lieu, était en prière. Quand il eut terminé, un de ses disciples lui demanda : « Seigneur, apprends-nous à prier. » Il leur répondit : « Quand vous priez, dites : Père, que ton nom soit sanctifié, que ton règne vienne. Donne-nous le pain dont nous avons besoin pour chaque jour. Pardonne-nous nos péchés, car nous-mêmes, nous pardonnons aussi à tous ceux qui ont des torts envers nous. Demandez, on vous donnera ; cherchez, vous trouverez ; frappez, on vous ouvrira. »`,
    },
  },
  "ot-18-sun": {
    firstReading: {
      reference: "Qohélet 1, 2 ; 2, 21-23",
      text: `Vanité des vanités, disait Qohélet. Vanité des vanités, tout est vanité ! Un homme s'est donné de la peine ; il a travaillé avec sagesse, savoir et succès, et il doit laisser son bien à quelqu'un qui ne s'est donné aucune peine. Cela aussi n'est que vanité. Que reste-t-il à l'homme de toute la peine et de tous les calculs pour lesquels il se fatigue sous le soleil ?`,
    },
    psalm: {
      reference: "Psaume 89 (90)",
      text: `D'âge en âge, Seigneur, tu as été notre refuge. Apprends-nous la vraie mesure de nos jours : que nos cœurs pénètrent la sagesse. Reviens, Seigneur, pourquoi tarder ? Ravise-toi par égard pour tes serviteurs. Rassasie-nous de ton amour au matin, que nous passions nos jours dans la joie et les chants.`,
    },
    secondReading: {
      reference: "Colossiens 3, 1-5.9-11",
      text: `Frères, si vous êtes ressuscités avec le Christ, recherchez les réalités d'en haut. Tendez vers les réalités d'en haut, et non pas vers celles de la terre. Faites mourir en vous ce qui n'appartient qu'à la terre. Ne vous mentez pas les uns aux autres. Vous vous êtes revêtus de l'homme nouveau ; il n'y a plus le païen et le Juif, il n'y a que le Christ : il est tout, et en tous.`,
    },
    gospel: {
      reference: "Luc 12, 13-21",
      text: `En ce temps-là, du milieu de la foule, quelqu'un demanda à Jésus : « Maître, dis à mon frère de partager avec moi notre héritage. » Jésus lui répondit : « Gardez-vous bien de toute avidité, car la vie de quelqu'un, même dans l'abondance, ne dépend pas de ce qu'il possède. » Et il leur dit cette parabole : « Il y avait un homme riche, dont le domaine avait bien rapporté. Dieu lui dit : "Tu es fou : cette nuit même, on va te redemander ta vie." Voilà ce qui arrive à celui qui amasse pour lui-même, au lieu d'être riche en vue de Dieu. »`,
    },
  },
  "ot-19-sun": {
    firstReading: {
      reference: "Sagesse 18, 6-9",
      text: `La nuit de la libération avait été connue d'avance par nos pères ; ils étaient sûrs des promesses auxquelles ils avaient cru. Ton peuple attendait le salut des justes et la ruine des ennemis. Par ce moyen, tu as puni nos adversaires et tu nous as comblés de gloire en nous appelant à toi.`,
    },
    psalm: {
      reference: "Psaume 32 (33)",
      text: `Oui, elle est droite, la parole du Seigneur ; il est fidèle en tout ce qu'il fait. Heureux le peuple dont le Seigneur est le Dieu, heureuse la nation qu'il s'est choisie pour domaine ! Que ton amour, Seigneur, soit sur nous comme notre espoir est en toi !`,
    },
    secondReading: {
      reference: "Hébreux 11, 1-2.8-19",
      text: `Frères, la foi est une façon de posséder ce que l'on espère, un moyen de connaître des réalités qu'on ne voit pas. Grâce à la foi, Abraham obéit à l'appel de Dieu et partit pour un pays qu'il devait recevoir en héritage. Il partit sans savoir où il allait. Grâce à la foi, Sara reçut la puissance d'être mère. Abraham pensait que Dieu est capable même de ressusciter les morts.`,
    },
    gospel: {
      reference: "Luc 12, 32-48",
      text: `En ce temps-là, Jésus disait à ses disciples : « Sois sans crainte, petit troupeau : votre Père a trouvé bon de vous donner le Royaume. Vendez ce que vous possédez et donnez-le en aumône. Restez en tenue de service, votre ceinture autour des reins, et vos lampes allumées. Vous aussi, tenez-vous prêts : c'est à l'heure où vous n'y penserez pas que le Fils de l'homme viendra. Le serviteur fidèle et sensé, le maître l'établira sur tous ses biens. »`,
    },
  },
  "ot-20-sun": {
    firstReading: {
      reference: "Jérémie 38, 4-6.8-10",
      text: `En ces jours-là, les princes dirent au roi Sédécias : « Que cet homme, Jérémie, soit mis à mort : en parlant comme il le fait, il démoralise ce qui reste de combattants. » Le roi Sédécias répondit : « Il est entre vos mains. » Ils descendirent Jérémie au fond de la citerne avec des cordes. Mais Ébed-Mélek alla trouver le roi et lui dit : « Monseigneur le roi, ces gens ont mal agi. » Le roi ordonna de tirer le prophète de la citerne.`,
    },
    psalm: {
      reference: "Psaume 39 (40)",
      text: `D'un grand espoir, j'espérais le Seigneur : il s'est penché vers moi. Du fond de l'abîme il m'a tiré, de la vase et de la boue il m'a relevé. Il m'a mis sur le roc, il a raffermi mes pas. En ma bouche il a mis un chant nouveau, une louange à notre Dieu. Et moi, je suis pauvre et malheureux, mais le Seigneur pense à moi.`,
    },
    secondReading: {
      reference: "Hébreux 12, 1-4",
      text: `Frères, nous aussi, entourés de cette immense nuée de témoins, débarrassons-nous de tout ce qui nous alourdit, et courons avec endurance l'épreuve qui nous est proposée, les yeux fixés sur Jésus, celui qui est à l'origine et au terme de la foi. Renonçant à la joie qui lui était proposée, il a enduré la croix en méprisant la honte de ce supplice. Vous n'avez pas encore résisté jusqu'au sang dans votre lutte contre le péché.`,
    },
    gospel: {
      reference: "Luc 12, 49-53",
      text: `En ce temps-là, Jésus disait à ses disciples : « Je suis venu apporter un feu sur la terre, et comme je voudrais qu'il soit déjà allumé ! Je dois recevoir un baptême, et quelle angoisse est la mienne jusqu'à ce qu'il soit accompli ! Pensez-vous que je sois venu mettre la paix sur la terre ? Non, je vous le dis, mais bien plutôt la division. Car désormais cinq personnes de la même famille seront divisées : trois contre deux et deux contre trois. »`,
    },
  },
  "ot-21-sun": {
    firstReading: {
      reference: "Isaïe 66, 18-21",
      text: `Ainsi parle le Seigneur : « Je viens rassembler toutes les nations et toutes les langues. Elles viendront et elles verront ma gloire. J'enverrai des rescapés vers les nations lointaines, vers les îles éloignées qui n'ont pas encore entendu parler de moi. Ils annonceront ma gloire parmi les nations. De toutes les nations, ils ramèneront tous vos frères, en offrande au Seigneur. »`,
    },
    psalm: {
      reference: "Psaume 116 (117)",
      text: `Louez le Seigneur, tous les peuples ; fêtez-le, tous les pays ! Son amour envers nous s'est montré le plus fort ; éternelle est la fidélité du Seigneur ! Allez dans le monde entier. Proclamez l'Évangile.`,
    },
    secondReading: {
      reference: "Hébreux 12, 5-7.11-13",
      text: `Frères, vous avez oublié cette parole de réconfort, qui vous est adressée comme à des fils : « Mon fils, ne néglige pas les leçons du Seigneur, ne te décourage pas quand il te fait des reproches. Car le Seigneur corrige celui qu'il aime. » C'est pour votre éducation que vous souffrez. Certes, toute éducation, sur le moment, ne semble pas une cause de joie, mais elle donne plus tard ceux qu'elle a formés le fruit paisible de la justice.`,
    },
    gospel: {
      reference: "Luc 13, 22-30",
      text: `En ce temps-là, tandis qu'il faisait route vers Jérusalem, Jésus traversait villes et villages en enseignant. Quelqu'un lui demanda : « Seigneur, n'y a-t-il que peu de gens qui soient sauvés ? » Jésus leur dit : « Efforcez-vous d'entrer par la porte étroite, car, je vous le déclare, beaucoup chercheront à entrer et n'y parviendront pas. On viendra de l'orient et de l'occident, du nord et du midi, prendre place au festin dans le royaume de Dieu. Oui, il y a des derniers qui seront premiers, et des premiers qui seront derniers. »`,
    },
  },
  "ot-22-sun": {
    firstReading: {
      reference: "Ben Sira le Sage 3, 17-18.20.28-29",
      text: `Mon fils, accomplis toute chose dans l'humilité, et tu seras aimé plus qu'un bienfaiteur. Plus tu es grand, plus il faut t'abaisser : tu trouveras grâce devant le Seigneur. Grande est la puissance du Seigneur, et les humbles lui rendent gloire. La condition de l'orgueilleux est sans remède, car la racine du mal est en lui. Le cœur du sage médite les paraboles ; une oreille attentive est le désir du sage.`,
    },
    psalm: {
      reference: "Psaume 67 (68)",
      text: `Dieu, tu es bon pour le faible, tu prépares ta bonté pour le pauvre. Que Dieu se lève et ses ennemis se dispersent ! Les justes sont en fête, exultant devant la face de Dieu, criant de joie ! Tu répands la pluie, ô Dieu ; ton héritage, tu le restaures.`,
    },
    secondReading: {
      reference: "Hébreux 12, 18-19.22-24a",
      text: `Frères, quand vous êtes venus vers Dieu, vous n'êtes pas venus vers une réalité palpable, ni vers un feu ardent, un ouragan, les ténèbres et la tempête. Vous êtes venus vers la montagne de Sion et vers la cité du Dieu vivant, la Jérusalem céleste, vers des myriades d'anges en fête, vers l'assemblée des premiers-nés dont les noms sont inscrits dans les cieux. Vous êtes venus vers Dieu, le juge de tous, et vers Jésus, le médiateur d'une alliance nouvelle.`,
    },
    gospel: {
      reference: "Luc 14, 1.7-14",
      text: `Un jour de sabbat, Jésus était entré dans la maison d'un chef des pharisiens pour y prendre son repas. Il dit aux invités une parabole, en remarquant comment ils choisissaient les premières places : « Quand quelqu'un t'invite, va te mettre à la dernière place. Quiconque s'élève sera abaissé ; qui s'abaisse sera élevé. » Jésus disait aussi : « Quand tu donnes un festin, invite des pauvres, des estropiés, des boiteux, des aveugles ; heureux seras-tu, parce qu'ils n'ont rien à te donner en retour : cela te sera rendu à la résurrection des justes. »`,
    },
  },
  "ot-23-sun": {
    firstReading: {
      reference: "Sagesse 9, 13-18",
      text: `Quel homme peut découvrir les intentions de Dieu ? Qui peut comprendre les volontés du Seigneur ? Les réflexions des mortels sont incertaines, et nos pensées, instables ; car un corps périssable appesantit notre âme. Nous avons peine à nous représenter ce qui est sur terre. Mais ce qui est dans les cieux, qui donc l'a découvert ? Et qui aurait connu ta volonté, si tu n'avais pas donné la Sagesse et envoyé d'en haut ton Esprit Saint ?`,
    },
    psalm: {
      reference: "Psaume 89 (90)",
      text: `D'âge en âge, Seigneur, tu as été notre refuge. Apprends-nous la vraie mesure de nos jours : que nos cœurs pénètrent la sagesse. Rassasie-nous de ton amour au matin, que nous passions nos jours dans la joie et les chants. Que vienne sur nous la douceur du Seigneur notre Dieu !`,
    },
    secondReading: {
      reference: "Philémon 9b-10.12-17",
      text: `Frères bien-aimés, moi, Paul, un vieil homme, et maintenant, de plus, un prisonnier du Christ Jésus, je te recommande Onésime, mon enfant à qui j'ai donné la vie dans ma prison. Je te le renvoie, lui qui est une part de moi-même. S'il t'a fait du tort ou s'il te doit quelque chose, mets cela sur mon compte. Accueille-le non plus comme un esclave, mais comme un frère bien-aimé.`,
    },
    gospel: {
      reference: "Luc 14, 25-33",
      text: `En ce temps-là, de grandes foules faisaient route avec Jésus. Il se retourna et leur dit : « Si quelqu'un vient à moi sans me préférer à son père, sa mère, sa femme, ses enfants, ses frères et sœurs, et même à sa propre vie, il ne peut pas être mon disciple. Celui qui ne porte pas sa croix pour marcher à ma suite ne peut pas être mon disciple. Ainsi donc, celui d'entre vous qui ne renonce pas à tout ce qui lui appartient ne peut pas être mon disciple. »`,
    },
  },
  "ot-24-sun": {
    firstReading: {
      reference: "Exode 32, 7-11.13-14",
      text: `En ces jours-là, le Seigneur parla à Moïse : « Va, descends, ton peuple s'est corrompu. Ils se sont fait un veau en métal fondu. Maintenant, laisse-moi faire ; ma colère va s'enflammer contre eux et je les détruirai ! » Moïse apaisa le visage du Seigneur son Dieu en disant : « Pourquoi, Seigneur, ta colère s'enflammerait-elle contre ton peuple, que tu as fait sortir d'Égypte ? Souviens-toi de tes serviteurs, Abraham, Isaac et Israël. » Le Seigneur renonça au mal qu'il avait voulu faire à son peuple.`,
    },
    psalm: {
      reference: "Psaume 50 (51)",
      text: `Pitié, mon Dieu, dans ton amour, selon ta grande miséricorde, efface mon péché. Lave-moi tout entier de ma faute, purifie-moi de mon offense. Crée en moi un cœur pur, ô mon Dieu, renouvelle et raffermis au fond de moi mon esprit.`,
    },
    secondReading: {
      reference: "1 Timothée 1, 12-17",
      text: `Frères bien-aimés, je suis plein de gratitude envers celui qui me donne la force, le Christ Jésus notre Seigneur. Moi, autrefois, j'étais un blasphémateur, un persécuteur, un violent. Mais il m'a été fait miséricorde. La grâce de notre Seigneur a surabondé, avec la foi et l'amour dans le Christ Jésus. Voici une parole digne de foi : le Christ Jésus est venu dans le monde pour sauver les pécheurs ; et moi, je suis le premier des pécheurs. Au roi des siècles, au Dieu unique, immortel et invisible, honneur et gloire pour les siècles des siècles. Amen.`,
    },
    gospel: {
      reference: "Luc 15, 1-32",
      text: `En ce temps-là, les publicains et les pécheurs venaient tous à Jésus pour l'écouter. Les pharisiens et les scribes récriminaient contre lui. Alors Jésus leur dit cette parabole : « Si l'un de vous a cent brebis et qu'il en perd une, ne laisse-t-il pas les quatre-vingt-dix-neuf autres pour aller chercher celle qui est perdue ? De même, il y aura de la joie dans le ciel pour un seul pécheur qui se convertit. » Jésus dit encore : « Un homme avait deux fils… » Et il leur raconta la parabole du fils prodigue.`,
    },
  },
  "ot-25-sun": {
    firstReading: {
      reference: "Amos 8, 4-7",
      text: `Écoutez ceci, vous qui écrasez le malheureux pour anéantir les humbles du pays, vous qui dites : « Quand donc la fête de la nouvelle lune sera-t-elle passée, pour que nous puissions vendre notre blé ? Nous diminuerons la mesure, nous augmenterons le prix, nous fausserons les balances. Nous achèterons le faible pour un peu d'argent. » Le Seigneur le jure : « Non, jamais je n'oublierai aucun de leurs méfaits. »`,
    },
    psalm: {
      reference: "Psaume 112 (113)",
      text: `Louez le nom du Seigneur ! Qui est semblable au Seigneur notre Dieu ? Lui, si grand, il abaisse son regard. De la poussière il relève le faible, il retire le pauvre de la cendre pour qu'il siège parmi les princes, les princes de son peuple.`,
    },
    secondReading: {
      reference: "1 Timothée 2, 1-8",
      text: `Frères bien-aimés, j'encourage, avant tout, à faire des demandes, des prières, des intercessions et des actions de grâce pour tous les hommes, pour les chefs d'État et tous ceux qui exercent l'autorité, afin que nous puissions mener notre vie dans la tranquillité et le calme, en toute piété et dignité. Cela est bon et agréable à Dieu notre Sauveur, car il veut que tous les hommes soient sauvés.`,
    },
    gospel: {
      reference: "Luc 16, 1-13",
      text: `En ce temps-là, Jésus disait à ses disciples : « Un homme riche avait un gérant qui lui fut dénoncé comme dilapidant ses biens. Le maître fit l'éloge de ce gérant malhonnête car il avait agi avec habileté. Car les fils de ce monde sont plus habiles entre eux que les fils de la lumière. Aucun domestique ne peut servir deux maîtres. Vous ne pouvez pas servir à la fois Dieu et l'argent. »`,
    },
  },
  "ot-26-sun": {
    firstReading: {
      reference: "Amos 6, 1a.4-7",
      text: `Ainsi parle le Seigneur de l'univers : Malheur à ceux qui vivent bien tranquilles dans Sion ! Couchés sur des lits d'ivoire, vautrés sur leurs divans, ils mangent les agneaux du troupeau et les veaux les plus tendres. Ils boivent le vin à même les amphores, ils se frottent avec des parfums de luxe, mais ils ne se tourmentent guère du désastre d'Israël ! C'est pourquoi maintenant ils vont être déportés, en tête des déportés ; et la bande des vautrés n'existera plus.`,
    },
    psalm: {
      reference: "Psaume 145 (146)",
      text: `Le Seigneur fait justice aux opprimés, aux affamés, il donne le pain. Le Seigneur délie les enchaînés, le Seigneur ouvre les yeux des aveugles, le Seigneur redresse les accablés, le Seigneur aime les justes. Le Seigneur protège l'étranger, il soutient la veuve et l'orphelin.`,
    },
    secondReading: {
      reference: "1 Timothée 6, 11-16",
      text: `Toi, homme de Dieu, recherche la justice, la piété, la foi, la charité, la persévérance et la douceur. Mène le bon combat de la foi, saisis la vie éternelle à laquelle tu as été appelé. Je t'ordonne devant Dieu et devant le Christ Jésus de garder le commandement sans tache ni reproche, jusqu'à la manifestation de notre Seigneur Jésus Christ. Le Roi des rois et Seigneur des seigneurs, le seul qui possède l'immortalité, lui qui habite une lumière inaccessible. À lui, honneur et puissance éternelle. Amen.`,
    },
    gospel: {
      reference: "Luc 16, 19-31",
      text: `En ce temps-là, Jésus disait aux pharisiens : « Il y avait un homme riche, vêtu de pourpre et de lin fin, qui faisait chaque jour des festins somptueux. Devant son portail gisait un pauvre nommé Lazare, couvert d'ulcères, qui aurait bien voulu se rassasier de ce qui tombait de la table du riche. Le pauvre mourut, et les anges l'emportèrent auprès d'Abraham. Le riche mourut aussi et fut enseveli. Abraham répondit : "Entre vous et nous, un grand abîme a été établi. S'ils n'écoutent pas Moïse ni les Prophètes, quelqu'un pourra bien ressusciter d'entre les morts : ils ne seront pas convaincus." »`,
    },
  },
  "ot-27-sun": {
    firstReading: {
      reference: "Habacuc 1, 2-3 ; 2, 2-4",
      text: `Combien de temps, Seigneur, vais-je appeler, sans que tu entendes ? Crier vers toi : « Violence ! », sans que tu sauves ? Pourquoi me fais-tu voir le mal et supporter le malheur ? Alors le Seigneur me répondit : « Écris la vision, grave-la sur des tablettes pour qu'on puisse la lire couramment. Car c'est encore une vision pour le temps fixé ; elle tendra vers son accomplissement et ne décevra pas. Le juste vivra par sa fidélité. »`,
    },
    psalm: {
      reference: "Psaume 94 (95)",
      text: `Aujourd'hui, ne fermez pas votre cœur, mais écoutez la voix du Seigneur ! Venez, crions de joie pour le Seigneur, acclamons notre Rocher, notre salut ! Entrez, inclinez-vous, prosternez-vous, adorons le Seigneur qui nous a faits.`,
    },
    secondReading: {
      reference: "2 Timothée 1, 6-8.13-14",
      text: `Frères bien-aimés, je te le rappelle, ravive le don gratuit de Dieu, ce don qui est en toi par l'imposition de mes mains. Car ce n'est pas un esprit de peur que Dieu nous a donné, mais un esprit de force, d'amour et de pondération. N'aie donc pas honte de rendre témoignage à notre Seigneur. Garde le dépôt de la foi dans toute sa beauté, avec l'aide de l'Esprit Saint qui habite en nous.`,
    },
    gospel: {
      reference: "Luc 17, 5-10",
      text: `En ce temps-là, les Apôtres dirent au Seigneur : « Augmente en nous la foi ! » Le Seigneur répondit : « Si vous aviez de la foi, gros comme une graine de moutarde, vous auriez dit à l'arbre que voici : "Déracine-toi et va te planter dans la mer", et il vous aurait obéi. Lequel d'entre vous, quand son serviteur vient de labourer ou de garder les bêtes, lui dira : "Vite, viens te mettre à table" ? Vous de même, quand vous aurez exécuté tout ce qui vous a été ordonné, dites : "Nous sommes de simples serviteurs : nous n'avons fait que notre devoir." »`,
    },
  },
  "ot-28-sun": {
    firstReading: {
      reference: "2 Rois 5, 14-17",
      text: `En ces jours-là, le général syrien Naaman descendit jusqu'au Jourdain et s'y plongea sept fois, selon la parole d'Élisée, l'homme de Dieu. Alors sa chair redevint semblable à celle d'un petit enfant : il était purifié ! Il retourna chez l'homme de Dieu avec toute son escorte et dit : « Désormais, je le sais : il n'y a pas d'autre Dieu, sur toute la terre, que celui d'Israël ! Je t'en prie, accepte un présent de ton serviteur. » Mais Élisée refusa.`,
    },
    psalm: {
      reference: "Psaume 97 (98)",
      text: `Le Seigneur a fait connaître sa victoire et révélé sa justice aux nations. Chantez au Seigneur un chant nouveau, car il a fait des merveilles. Sa main droite et son bras très saint lui ont donné la victoire. La terre tout entière a vu la victoire de notre Dieu.`,
    },
    secondReading: {
      reference: "2 Timothée 2, 8-13",
      text: `Frères bien-aimés, souviens-toi de Jésus Christ, ressuscité d'entre les morts, le descendant de David. Voilà mon Évangile, pour lequel je souffre, jusqu'à être enchaîné comme un malfaiteur. Mais on n'enchaîne pas la parole de Dieu ! Voici une parole digne de foi : si nous sommes morts avec lui, avec lui nous vivrons. Si nous supportons l'épreuve, avec lui nous régnerons. Lui reste fidèle, car il ne peut se renier lui-même.`,
    },
    gospel: {
      reference: "Luc 17, 11-19",
      text: `En ce temps-là, Jésus, marchant vers Jérusalem, traversait la région entre la Samarie et la Galilée. Dix lépreux vinrent à sa rencontre. Restant à distance, ils élevèrent la voix et dirent : « Jésus, maître, prends pitié de nous. » En les voyant, Jésus leur dit : « Allez vous montrer aux prêtres. » En cours de route, ils furent purifiés. L'un d'eux, voyant qu'il était guéri, revint sur ses pas en glorifiant Dieu. C'était un Samaritain. Jésus dit : « Les dix n'ont-ils pas été purifiés ? Les neuf autres, où sont-ils ? Relève-toi et va : ta foi t'a sauvé. »`,
    },
  },
  "ot-29-sun": {
    firstReading: {
      reference: "Exode 17, 8-13",
      text: `En ces jours-là, le peuple d'Amalec vint attaquer Israël à Rephidim. Moïse dit à Josué : « Choisis des hommes, et va combattre Amalec. Moi, demain, je me tiendrai au sommet de la colline, le bâton de Dieu dans la main. » Quand Moïse tenait la main levée, Israël était le plus fort ; quand il la laissait retomber, Amalec était le plus fort. Aaron et Hour lui soutenaient les bras. Josué triompha d'Amalec.`,
    },
    psalm: {
      reference: "Psaume 120 (121)",
      text: `Le secours me viendra du Seigneur qui a fait le ciel et la terre. Je lève les yeux vers les montagnes : d'où le secours me viendra-t-il ? Le Seigneur, ton gardien, le Seigneur, ton ombrage, se tient près de toi. Le Seigneur te gardera de tout mal, il gardera ta vie.`,
    },
    secondReading: {
      reference: "2 Timothée 3, 14 – 4, 2",
      text: `Frères bien-aimés, demeure dans ce que tu as appris. Depuis ton plus jeune âge, tu connais les Saintes Écritures : elles ont le pouvoir de te communiquer la sagesse, en vue du salut par la foi que nous avons en Jésus Christ. Toute l'Écriture est inspirée par Dieu ; elle est utile pour enseigner, pour réfuter, pour redresser. Proclame la Parole, interviens à temps et à contretemps, dénonce le mal, fais des reproches, encourage.`,
    },
    gospel: {
      reference: "Luc 18, 1-8",
      text: `En ce temps-là, Jésus disait à ses disciples une parabole sur la nécessité pour eux de toujours prier sans se décourager : « Il y avait dans une ville un juge qui ne craignait pas Dieu et ne respectait pas les hommes. Dans cette même ville, il y avait une veuve qui venait lui demander : "Rends-moi justice contre mon adversaire." Le juge finit par se dire : "Je vais lui rendre justice pour qu'elle ne vienne plus m'assommer." » Le Seigneur ajouta : « Et Dieu ne ferait pas justice à ses élus, qui crient vers lui jour et nuit ? Mais le Fils de l'homme, quand il viendra, trouvera-t-il la foi sur la terre ? »`,
    },
  },
  "ot-30-sun": {
    firstReading: {
      reference: "Ben Sira le Sage 35, 12-14.16-18",
      text: `Le Seigneur est un juge qui ne fait pas de différence entre les personnes. Il ne défavorise pas le pauvre, il écoute la prière de l'opprimé. Il ne méprise pas la supplication de l'orphelin, ni la plainte répétée de la veuve. Celui dont le service plaît au Seigneur sera bien accueilli, et sa prière parviendra jusqu'au ciel. La prière du pauvre traverse les nuées.`,
    },
    psalm: {
      reference: "Psaume 33 (34)",
      text: `Un pauvre crie ; le Seigneur entend : il le sauve de toutes ses angoisses. Le Seigneur est proche du cœur brisé, il sauve les esprits abattus. Malheur sur malheur pour le juste, mais le Seigneur chaque fois le délivre. Il rachètera la vie de ses serviteurs : aucun de ceux qui l'ont pour refuge ne sera condamné.`,
    },
    secondReading: {
      reference: "2 Timothée 4, 6-8.16-18",
      text: `Frères bien-aimés, me voici déjà offert en sacrifice, et le moment de mon départ est venu. J'ai mené le bon combat, j'ai achevé ma course, j'ai gardé la foi. Je n'ai plus qu'à recevoir la couronne de la justice : le Seigneur, le juste juge, me la remettra en ce jour-là. La première fois que j'ai présenté ma défense, personne ne m'a soutenu. Mais le Seigneur, lui, m'a assisté. Il me donnera la force et me sauvera. À lui la gloire pour les siècles des siècles. Amen.`,
    },
    gospel: {
      reference: "Luc 18, 9-14",
      text: `En ce temps-là, à l'adresse de certains qui étaient convaincus d'être justes et qui méprisaient les autres, Jésus dit la parabole que voici : « Deux hommes montèrent au Temple pour prier. L'un était pharisien, et l'autre, publicain. Le pharisien se tenait debout et priait ainsi : "Mon Dieu, je te rends grâce parce que je ne suis pas comme les autres hommes." Le publicain, lui, se tenait à distance et n'osait même pas lever les yeux vers le ciel ; mais il se frappait la poitrine, en disant : "Mon Dieu, montre-toi favorable au pécheur que je suis !" Je vous le déclare : quand ce dernier redescendit dans sa maison, c'est lui qui était devenu un homme juste. Qui s'élève sera abaissé ; qui s'abaisse sera élevé. »`,
    },
  },
  "ot-31-sun": {
    firstReading: {
      reference: "Sagesse 11, 22 – 12, 2",
      text: `Seigneur, le monde entier est devant toi comme un rien sur la balance, comme la goutte de rosée matinale qui descend sur la terre. Pourtant, tu as pitié de tous les hommes, parce que tu peux tout. Tu fermes les yeux sur leurs péchés, pour qu'ils se convertissent. Tu aimes tout ce qui existe. Ton souffle impérissable les anime tous. Ceux qui tombent, tu les reprends peu à peu, tu les avertis, tu leur rappelles en quoi ils pèchent, pour qu'ils se détournent du mal et croient en toi, Seigneur.`,
    },
    psalm: {
      reference: "Psaume 144 (145)",
      text: `Mon Dieu, mon Roi, je bénirai ton nom toujours et à jamais ! Le Seigneur est tendresse et pitié, lent à la colère et plein d'amour. La bonté du Seigneur est pour tous, sa tendresse, pour toutes ses œuvres. Le Seigneur soutient tous ceux qui tombent, il redresse tous les accablés.`,
    },
    secondReading: {
      reference: "2 Thessaloniciens 1, 11 – 2, 2",
      text: `Frères, nous prions pour vous à tout moment afin que notre Dieu vous trouve dignes de l'appel qu'il vous a adressé ; par sa puissance, qu'il vous donne d'accomplir tout le bien que vous désirez, et qu'il rende active votre foi. Ainsi, le nom de notre Seigneur Jésus sera glorifié en vous. Frères, nous vous le demandons à propos de la venue de notre Seigneur : ne vous laissez pas trop vite déstabiliser ni effrayer.`,
    },
    gospel: {
      reference: "Luc 19, 1-10",
      text: `En ce temps-là, entré dans la ville de Jéricho, Jésus la traversait. Or, il y avait un homme du nom de Zachée ; il était le chef des collecteurs d'impôts, et c'était quelqu'un de riche. Il cherchait à voir qui était Jésus, mais il ne le pouvait pas à cause de la foule, car il était de petite taille. Il courut en avant et grimpa sur un sycomore. Jésus leva les yeux et lui dit : « Zachée, descends vite : aujourd'hui il faut que j'aille demeurer dans ta maison. » Zachée dit : « Voici, Seigneur : je fais don aux pauvres de la moitié de mes biens. » Jésus dit : « Aujourd'hui, le salut est arrivé pour cette maison. Car le Fils de l'homme est venu chercher et sauver ce qui était perdu. »`,
    },
  },
  "ot-32-sun": {
    firstReading: {
      reference: "2 Maccabées 7, 1-2.9-14",
      text: `En ces jours-là, sept frères furent arrêtés avec leur mère. À coups de fouet, on voulait les contraindre à manger du porc. L'un d'eux déclara : « Nous sommes prêts à mourir plutôt que de transgresser les lois de nos pères. » Le deuxième dit en expirant : « Tu nous arraches à cette vie présente, mais le Roi du monde nous ressuscitera pour une vie éternelle. » Le quatrième dit : « Mieux vaut mourir de la main des hommes quand on attend la résurrection promise par Dieu. »`,
    },
    psalm: {
      reference: "Psaume 16 (17)",
      text: `Seigneur, écoute la justice ! Au réveil, je me rassasierai de ton visage. J'ai tenu mes pas sur tes traces, et mes pieds n'ont pas chancelé. Tu m'éprouves, tu me visites la nuit. Et moi, par ta justice, je verrai ta face ; au réveil, je me rassasierai de ton visage.`,
    },
    secondReading: {
      reference: "2 Thessaloniciens 2, 16 – 3, 5",
      text: `Frères, que notre Seigneur Jésus Christ lui-même, et Dieu notre Père qui nous a aimés et nous a pour toujours donné réconfort et bonne espérance par sa grâce, réconfortent vos cœurs et les affermissent en tout ce que vous pouvez faire et dire de bien. Priez aussi pour nous, afin que la parole du Seigneur poursuive sa course. Le Seigneur est fidèle : il vous affermira et vous gardera du Mauvais. Que le Seigneur conduise vos cœurs dans l'amour de Dieu et l'endurance du Christ.`,
    },
    gospel: {
      reference: "Luc 20, 27-38",
      text: `En ce temps-là, quelques sadducéens – Loss qui soutiennent qu'il n'y a pas de résurrection – s'approchèrent de Jésus et l'interrogèrent : « Maître, Moïse nous a prescrit : si un homme a un frère qui meurt en laissant une femme sans enfant, qu'il prenne la femme et suscite une descendance à son frère. » Jésus leur répondit : « Ceux qui ont été jugés dignes d'avoir part au monde à venir et à la résurrection d'entre les morts ne prennent ni femme ni mari. Que les morts ressuscitent, Moïse lui-même le fait comprendre, quand, dans le récit du buisson ardent, il appelle le Seigneur le Dieu d'Abraham, le Dieu d'Isaac, le Dieu de Jacob. Il n'est pas le Dieu des morts, mais des vivants. »`,
    },
  },
  "ot-33-sun": {
    firstReading: {
      reference: "Malachie 3, 19-20a",
      text: `Voici que vient le jour du Seigneur, brûlant comme la fournaise. Tous les arrogants, tous ceux qui commettent l'impiété, seront de la paille. Le jour qui vient les consumera, dit le Seigneur de l'univers. Il ne leur laissera ni racine ni branche. Mais pour vous qui craignez mon nom, le Soleil de justice se lèvera : il apportera la guérison dans son rayonnement.`,
    },
    psalm: {
      reference: "Psaume 97 (98)",
      text: `Le Seigneur vient gouverner la terre. Chantez au Seigneur un chant nouveau, car il a fait des merveilles. Il a fait connaître sa victoire et révélé sa justice aux nations. Il vient pour gouverner la terre, pour gouverner le monde avec justice et les peuples avec droiture.`,
    },
    secondReading: {
      reference: "2 Thessaloniciens 3, 7-12",
      text: `Frères, vous savez bien, vous, ce qu'il faut faire pour nous imiter. Nous n'avons pas vécu parmi vous de façon désordonnée ; et le pain que nous avons mangé, nous ne l'avons reçu de personne gratuitement, mais nous avons travaillé, dans la fatigue et la peine, nuit et jour. Si quelqu'un ne veut pas travailler, qu'il ne mange pas non plus. Or, nous apprenons que certains d'entre vous mènent une vie désordonnée. À ceux-là, nous demandons de travailler dans le calme.`,
    },
    gospel: {
      reference: "Luc 21, 5-19",
      text: `En ce temps-là, comme certains parlaient du Temple, de ses belles pierres et des ex-voto qui le décoraient, Jésus leur déclara : « Ce que vous contemplez, des jours viendront où il n'en restera pas pierre sur pierre : tout sera détruit. » On se dressera nation contre nation. Il y aura de grands tremblements de terre et des épidémies. On portera la main sur vous et l'on vous persécutera. Mais pas un cheveu de votre tête ne sera perdu. C'est par votre persévérance que vous garderez votre vie. »`,
    },
  },
  "christ-king-sun": {
    firstReading: {
      reference: "2 Samuel 5, 1-3",
      text: `En ces jours-là, toutes les tribus d'Israël vinrent trouver David à Hébron et dirent : « Vois ! Nous sommes de tes os et de ta chair. Dans le passé déjà, quand Saül était notre roi, c'est toi qui menais Israël en campagne et le ramenais. Le Seigneur t'a dit : Tu seras le pasteur d'Israël mon peuple, tu seras le chef d'Israël. » Tous les anciens d'Israël vinrent et le roi David fit alliance avec eux devant le Seigneur. Ils donnèrent l'onction à David pour le faire roi sur Israël.`,
    },
    psalm: {
      reference: "Psaume 121 (122)",
      text: `Quelle joie quand on m'a dit : « Nous irons à la maison du Seigneur ! » Maintenant notre marche prend fin devant tes portes, Jérusalem ! Jérusalem, te voici dans tes murs, ville où tout ensemble ne fait qu'un ! C'est là que montent les tribus, pour rendre grâce au nom du Seigneur. Appelez le bonheur sur Jérusalem : « Paix à ceux qui t'aiment ! »`,
    },
    secondReading: {
      reference: "Colossiens 1, 12-20",
      text: `Frères, rendez grâce à Dieu le Père, qui vous a rendus capables d'avoir part à l'héritage des saints, dans la lumière. Il nous a arrachés au pouvoir des ténèbres, il nous a fait entrer dans le royaume de son Fils bien-aimé, par qui nous avons la rédemption, le pardon des péchés. Il est l'image du Dieu invisible, le premier-né, avant toute créature. Car Dieu a jugé bon qu'habite en lui toute plénitude et que tout, par le Christ, lui soit enfin réconcilié, en faisant la paix par le sang de sa Croix.`,
    },
    gospel: {
      reference: "Luc 23, 35-43",
      text: `En ce temps-là, on venait de crucifier Jésus. Le peuple restait là à observer. Les chefs tournaient Jésus en dérision : « Il en a sauvé d'autres : qu'il se sauve lui-même, s'il est le Messie de Dieu, l'Élu ! » Les soldats aussi se moquaient de lui. L'un des malfaiteurs suspendus en croix l'injuriait. Mais l'autre lui fit de vifs reproches : « Pour nous, c'est juste : nous recevons ce qu'ont mérité nos actes ; mais lui, il n'a rien fait de mal. » Et il disait : « Jésus, souviens-toi de moi quand tu viendras dans ton Royaume. » Jésus lui déclara : « Amen, je te le dis : aujourd'hui, avec moi, tu seras dans le Paradis. »`,
    },
  },
};
