import type { Reading } from "./readings";

interface ReadingSet {
  firstReading: Reading;
  psalm: Reading;
  gospel: Reading;
  secondReading?: Reading;
}

// ===================== FÉRIES DE L'AVENT =====================

export const adventWeekdays: Record<string, ReadingSet> = {
  // ===== 1ère SEMAINE DE L'AVENT =====

  "advent-1-lun": {
    firstReading: {
      reference: "Isaïe 2, 1-5",
      text: `Parole d'Isaïe, fils d'Amots, – Loss ce qu'il a vu au sujet de Juda et de Jérusalem.

Il arrivera dans les derniers jours que la montagne de la Maison du Seigneur se tiendra plus haut que les monts, s'élèvera au-dessus des collines. Vers elle afflueront toutes les nations et viendront des peuples nombreux. Ils diront : « Venez ! montons à la montagne du Seigneur, à la Maison du Dieu de Jacob ! Qu'il nous enseigne ses chemins, et nous irons par ses sentiers. » Oui, la loi sortira de Sion, et de Jérusalem, la parole du Seigneur.

Il sera juge entre les nations et l'arbitre de peuples nombreux. De leurs épées, ils forgeront des socs, et de leurs lances, des faucilles. Jamais nation contre nation ne lèvera l'épée ; ils n'apprendront plus la guerre.

Venez, maison de Jacob ! Marchons à la lumière du Seigneur.`,
    },
    psalm: {
      reference: "Psaume 121 (122)",
      text: `R/ Dans la joie, nous irons à la maison du Seigneur.

Quelle joie quand on m'a dit :
« Nous irons à la maison du Seigneur ! »
Maintenant notre marche prend fin
devant tes portes, Jérusalem !

Jérusalem, te voici dans tes murs :
ville où tout ensemble ne fait qu'un !
C'est là que montent les tribus,
les tribus du Seigneur.

C'est là qu'Israël doit rendre grâce
au nom du Seigneur.
C'est là le siège du droit,
le siège de la maison de David.

Appelez le bonheur sur Jérusalem :
« Paix à ceux qui t'aiment !
Que la paix règne dans tes murs,
le bonheur dans tes palais ! »

À cause de mes frères et de mes proches,
je dirai : « Paix sur toi ! »
À cause de la maison du Seigneur notre Dieu,
je désire ton bien.`,
    },
    gospel: {
      reference: "Matthieu 8, 5-11",
      text: `En ce temps-là, comme Jésus était entré à Capharnaüm, un centurion s'approcha de lui et le supplia : « Seigneur, mon serviteur est couché, à la maison, paralysé, et il souffre terriblement. » Jésus lui dit : « Je vais aller moi-même le guérir. » Le centurion reprit : « Seigneur, je ne suis pas digne que tu entres sous mon toit, mais dis seulement une parole et mon serviteur sera guéri. Moi-même qui suis soumis à une autorité, j'ai des soldats sous mes ordres ; à l'un, je dis : "Va", et il va ; à un autre : "Viens", et il vient, et à mon esclave : "Fais ceci", et il le fait. »

À ces mots, Jésus fut dans l'admiration et dit à ceux qui le suivaient : « Amen, je vous le déclare, chez personne en Israël, je n'ai trouvé une telle foi. Aussi je vous le dis : Beaucoup viendront de l'orient et de l'occident et prendront place avec Abraham, Isaac et Jacob au festin du royaume des Cieux. »`,
    },
  },

  "advent-1-mar": {
    firstReading: {
      reference: "Isaïe 11, 1-10",
      text: `En ce jour-là, un rameau sortira de la souche de Jessé, père de David, un rejeton jaillira de ses racines. Sur lui reposera l'esprit du Seigneur : esprit de sagesse et de discernement, esprit de conseil et de force, esprit de connaissance et de crainte du Seigneur – qui lui inspirera la crainte du Seigneur. Il ne jugera pas sur l'apparence ; il ne se prononcera pas sur des rumeurs. Il jugera les petits avec justice ; avec droiture, il se prononcera en faveur des humbles du pays. Du bâton de sa parole, il frappera le pays ; du souffle de ses lèvres, il fera mourir le méchant. La justice est la ceinture de ses hanches ; la fidélité est la ceinture de ses reins.

Le loup habitera avec l'agneau, le léopard se couchera près du chevreau, le veau et le lionceau seront nourris ensemble, un petit garçon les conduira. La vache et l'ourse auront même pâture, leurs petits auront même gîte. Le lion, comme le bœuf, mangera du fourrage. Le nourrisson s'amusera sur le nid du cobra ; sur le trou de la vipère, l'enfant étendra la main. Il n'y aura plus de mal ni de corruption sur toute ma montagne sainte ; car la connaissance du Seigneur remplira le pays comme les eaux recouvrent le fond de la mer.

Ce jour-là, la racine de Jessé sera dressée comme un étendard pour les peuples, les nations la chercheront, et la gloire sera sa demeure.`,
    },
    psalm: {
      reference: "Psaume 71 (72)",
      text: `R/ En ces jours-là fleurira la justice, grande paix jusqu'à la fin des lunes !

Dieu, donne au roi tes pouvoirs,
à ce fils de roi ta justice.
Qu'il gouverne ton peuple avec justice,
qu'il fasse droit aux malheureux !

En ces jours-là, fleurira la justice,
grande paix jusqu'à la fin des lunes !
Qu'il domine de la mer à la mer,
et du Fleuve jusqu'au bout de la terre !

Il délivrera le pauvre qui appelle
et le malheureux sans recours.
Il aura souci du faible et du pauvre,
du pauvre dont il sauve la vie.

Que son nom dure toujours ;
sous le soleil, que subsiste son nom !
En lui, que soient bénies toutes les familles de la terre ;
que tous les peuples le disent bienheureux !`,
    },
    gospel: {
      reference: "Luc 10, 21-24",
      text: `En ce temps-là, Jésus, exultant de joie sous l'action de l'Esprit Saint, dit : « Père, Seigneur du ciel et de la terre, je proclame ta louange : ce que tu as caché aux sages et aux savants, tu l'as révélé aux tout-petits. Oui, Père, tu l'as voulu ainsi dans ta bienveillance. Tout m'a été remis par mon Père. Personne ne connaît qui est le Fils, sinon le Père ; et personne ne connaît qui est le Père, sinon le Fils et celui à qui le Fils veut le révéler. »

Puis il se tourna vers ses disciples et leur dit en particulier : « Heureux les yeux qui voient ce que vous voyez ! Car, je vous le déclare : beaucoup de prophètes et de rois ont voulu voir ce que vous-mêmes voyez, et ne l'ont pas vu, entendre ce que vous entendez, et ne l'ont pas entendu. »`,
    },
  },

  "advent-1-mer": {
    firstReading: {
      reference: "Isaïe 25, 6-10a",
      text: `Ce jour-là, le Seigneur de l'univers préparera pour tous les peuples, sur sa montagne, un festin de viandes grasses et de vins capiteux, un festin de viandes savoureuses et de vins décantés. Sur cette montagne, il fera disparaître le voile de deuil qui enveloppait tous les peuples et le linceul qui couvrait toutes les nations. Il fera disparaître la mort pour toujours. Le Seigneur Dieu essuiera les larmes sur tous les visages, et par toute la terre il effacera l'humiliation de son peuple. Le Seigneur a parlé.

Et ce jour-là, on dira : « Voici notre Dieu, en lui nous espérions, et il nous a sauvés ; c'est lui le Seigneur, en lui nous espérions ; exultons, réjouissons-nous : il nous a sauvés ! » Car la main du Seigneur reposera sur cette montagne.`,
    },
    psalm: {
      reference: "Psaume 22 (23)",
      text: `R/ J'habiterai la maison du Seigneur pour la durée de mes jours.

Le Seigneur est mon berger :
je ne manque de rien.
Sur des prés d'herbe fraîche,
il me fait reposer.

Il me mène vers les eaux tranquilles
et me fait revivre ;
il me conduit par le juste chemin
pour l'honneur de son nom.

Si je traverse les ravins de la mort,
je ne crains aucun mal,
car tu es avec moi :
ton bâton me guide et me rassure.

Tu prépares la table pour moi
devant mes ennemis ;
tu répands le parfum sur ma tête,
ma coupe est débordante.

Grâce et bonheur m'accompagnent
tous les jours de ma vie ;
j'habiterai la maison du Seigneur
pour la durée de mes jours.`,
    },
    gospel: {
      reference: "Matthieu 15, 29-37",
      text: `En ce temps-là, Jésus arriva près de la mer de Galilée. Il gravit la montagne et là, il s'assit. De grandes foules s'approchèrent de lui, ayant avec elles des boiteux, des aveugles, des estropiés, des muets, et beaucoup d'autres encore ; on les déposa à ses pieds et il les guérit. Alors la foule était dans l'admiration en voyant des muets qui parlaient, des estropiés rétablis, des boiteux qui marchaient, des aveugles qui voyaient ; et ils rendirent gloire au Dieu d'Israël.

Jésus appela ses disciples et leur dit : « Je suis saisi de compassion pour cette foule, car depuis trois jours déjà ils restent auprès de moi, et n'ont rien à manger. Je ne veux pas les renvoyer à jeun, car ils pourraient défaillir en chemin. » Les disciples lui disent : « Où trouverons-nous dans un désert assez de pain pour rassasier une telle foule ? » Jésus leur demanda : « Combien de pains avez-vous ? » Ils dirent : « Sept, et quelques petits poissons. »

Alors il ordonna à la foule de s'asseoir par terre. Il prit les sept pains et les poissons ; rendant grâce, il les rompit, et il les donnait aux disciples, et les disciples aux foules. Ils mangèrent tous et furent rassasiés. On ramassa les morceaux qui restaient : sept corbeilles pleines.`,
    },
  },

  "advent-1-jeu": {
    firstReading: {
      reference: "Isaïe 26, 1-6",
      text: `En ce jour-là, on chantera ce cantique dans le pays de Juda : « Nous avons une ville forte ! Le Seigneur a mis pour sauvegarde murailles et avant-mur. Ouvrez les portes ! Qu'elle entre, la nation juste, celle qui garde la fidélité. Tu assures la paix, la paix à celui qui s'appuie sur toi parce qu'il te fait confiance.

Mettez votre foi dans le Seigneur, à jamais, car le Seigneur est le Rocher pour toujours. Il a renversé ceux qui siégeaient en haut lieu ; il a abaissé la cité hautaine, il l'a abaissée jusqu'à terre, la jetant dans la poussière. Elle est foulée aux pieds, les pieds des pauvres, les pas des malheureux. »`,
    },
    psalm: {
      reference: "Psaume 117 (118)",
      text: `R/ Béni soit au nom du Seigneur celui qui vient !

Rendez grâce au Seigneur : il est bon !
Éternel est son amour !
Mieux vaut s'appuyer sur le Seigneur
que de compter sur les hommes ;

mieux vaut s'appuyer sur le Seigneur
que de compter sur les puissants.
Ouvrez-moi les portes de justice :
j'entrerai, je rendrai grâce au Seigneur.

« C'est ici la porte du Seigneur :
qu'ils entrent, les justes ! »
Je te rends grâce car tu m'as exaucé :
tu es pour moi le salut.

Béni soit au nom du Seigneur
celui qui vient !
De la maison du Seigneur,
nous vous bénissons !`,
    },
    gospel: {
      reference: "Matthieu 7, 21.24-27",
      text: `En ce temps-là, Jésus disait à ses disciples : « Ce n'est pas en me disant : "Seigneur, Seigneur !" qu'on entrera dans le royaume des Cieux, mais c'est en faisant la volonté de mon Père qui est aux cieux.

Ainsi, celui qui entend les paroles que je dis là et les met en pratique est comparable à un homme prévoyant qui a construit sa maison sur le roc. La pluie est tombée, les torrents ont dévalé, les vents ont soufflé et se sont abattus sur cette maison ; la maison ne s'est pas écroulée, car elle était fondée sur le roc.

Et celui qui entend de moi ces paroles sans les mettre en pratique est comparable à un homme insensé qui a construit sa maison sur le sable. La pluie est tombée, les torrents ont dévalé, les vents ont soufflé, ils sont venus battre cette maison ; la maison s'est écroulée, et son écroulement a été complet. »`,
    },
  },

  "advent-1-ven": {
    firstReading: {
      reference: "Isaïe 29, 17-24",
      text: `Ainsi parle le Seigneur Dieu : Ne le savez-vous pas ? Encore un peu de temps, très peu de temps, et le Liban se changera en verger, et le verger sera pareil à une forêt. Les sourds, en ce jour-là, entendront les paroles du Livre. Quant aux yeux des aveugles, dans l'obscurité et les ténèbres, ils verront.

Les humbles se réjouiront davantage dans le Seigneur, les malheureux exulteront en Dieu, le Saint d'Israël. Car ce sera la fin de l'homme qui tyrannise, et du moqueur, c'en sera fini ; ils seront supprimés, tous ceux qui guettent l'occasion de mal faire, ceux qui font condamner quelqu'un par leur témoignage, qui faussent les débats du tribunal et qui, par des arguties, empêchent le juste d'avoir raison.

C'est pourquoi le Seigneur, qui a racheté Abraham, parle ainsi à la maison de Jacob : « Désormais Jacob n'aura plus de honte, désormais son visage ne pâlira plus. Car, quand il verra chez lui ses enfants, l'œuvre de mes mains, il proclamera la sainteté de mon nom, il proclamera la sainteté du Saint de Jacob, il tremblera devant le Dieu d'Israël. Les esprits égarés découvriront l'intelligence, et les récriminateurs accepteront qu'on les instruise. »`,
    },
    psalm: {
      reference: "Psaume 26 (27)",
      text: `R/ Le Seigneur est ma lumière et mon salut.

Le Seigneur est ma lumière et mon salut ;
de qui aurais-je crainte ?
Le Seigneur est le rempart de ma vie ;
devant qui tremblerais-je ?

J'ai demandé une chose au Seigneur,
la seule que je cherche :
habiter la maison du Seigneur
tous les jours de ma vie.

J'en suis sûr, je verrai les bontés du Seigneur
sur la terre des vivants.
« Espère le Seigneur, sois fort et prends courage ;
espère le Seigneur. »`,
    },
    gospel: {
      reference: "Matthieu 9, 27-31",
      text: `En ce temps-là, Jésus était en route ; deux aveugles le suivirent, en criant : « Prends pitié de nous, fils de David ! » Quand il fut entré dans la maison, les aveugles s'approchèrent de lui, et Jésus leur dit : « Croyez-vous que je peux faire cela ? » Ils lui répondirent : « Oui, Seigneur. » Alors il leur toucha les yeux, en disant : « Que tout se passe pour vous selon votre foi. » Leurs yeux s'ouvrirent.

Alors Jésus leur dit avec fermeté : « Attention ! que personne ne le sache ! » Mais eux, en sortant, parlèrent de lui dans toute la région.`,
    },
  },

  "advent-1-sam": {
    firstReading: {
      reference: "Isaïe 30, 19-21.23-26",
      text: `Ainsi parle le Seigneur, le Saint d'Israël : Peuple de Sion, toi qui habites Jérusalem, tu ne pleureras jamais plus. À l'appel de ton cri, le Seigneur te fera grâce. Dès qu'il t'aura entendu, il te répondra. Le Seigneur vous donnera du pain dans la détresse et de l'eau dans l'épreuve. Celui qui t'instruit ne se dérobera plus et tes yeux le verront. Tes oreilles entendront derrière toi une parole : « Voici le chemin, marchez-y », que vous alliez à droite ou à gauche.

Le Seigneur te donnera la pluie pour la semence que tu auras jetée en terre, et le pain que produira la terre sera riche et nourrissant. Ton bétail, ce jour-là, ira paître dans de vastes pâturages. Les bœufs et les ânes qui travaillent la terre mangeront un fourrage salé, étalé à la pelle et à la fourche. Sur toute haute montagne, sur toute colline élevée, couleront des ruisseaux, des torrents, au jour du grand massacre, quand tomberont les tours fortifiées.

La lumière de la lune sera comme la lumière du soleil, et la lumière du soleil sera sept fois plus forte, comme la lumière de sept jours, le jour où le Seigneur pansera la blessure de son peuple et guérira ses meurtrissures.`,
    },
    psalm: {
      reference: "Psaume 146 (147A)",
      text: `R/ Heureux qui s'appuie sur le Dieu de Jacob !

Il est bon de fêter notre Dieu,
il est beau de chanter sa louange !
Le Seigneur rebâtit Jérusalem,
il rassemble les déportés d'Israël.

Il guérit les cœurs brisés
et soigne leurs blessures.
Il compte le nombre des étoiles,
il donne à chacune un nom.

Il est grand, notre Seigneur, tout-puissant,
à sa sagesse, pas de limite !
Le Seigneur élève les humbles
et rabaisse jusqu'à terre les impies.`,
    },
    gospel: {
      reference: "Matthieu 9, 35 – 10, 1.5a.6-8",
      text: `En ce temps-là, Jésus parcourait toutes les villes et tous les villages, enseignant dans leurs synagogues, proclamant l'Évangile du Royaume et guérissant toute maladie et toute infirmité. Voyant les foules, Jésus fut saisi de compassion envers elles parce qu'elles étaient fatiguées et abattues comme des brebis sans berger. Il dit alors à ses disciples : « La moisson est abondante, mais les ouvriers sont peu nombreux. Priez donc le maître de la moisson d'envoyer des ouvriers pour sa moisson. »

Alors Jésus appela ses douze disciples et leur donna le pouvoir d'expulser les esprits impurs et de guérir toute maladie et toute infirmité. Ces douze, Jésus les envoya en mission avec les instructions suivantes : « Allez vers les brebis perdues de la maison d'Israël. Sur votre route, proclamez que le royaume des Cieux est tout proche. Guérissez les malades, ressuscitez les morts, purifiez les lépreux, expulsez les démons. Vous avez reçu gratuitement : donnez gratuitement. »`,
    },
  },

  // ===== 2ème SEMAINE DE L'AVENT =====

  "advent-2-lun": {
    firstReading: {
      reference: "Isaïe 35, 1-10",
      text: `Le désert et la terre de la soif, qu'ils se réjouissent ! Le pays aride, qu'il exulte et fleurisse comme la rose, qu'il se couvre de fleurs des champs, qu'il exulte et crie de joie ! La gloire du Liban lui est donnée, la splendeur du Carmel et du Sarone. On verra la gloire du Seigneur, la splendeur de notre Dieu.

Fortifiez les mains défaillantes, affermissez les genoux qui fléchissent, dites aux gens qui s'affolent : « Soyez forts, ne craignez pas. Voici votre Dieu : c'est la vengeance qui vient, la revanche de Dieu. Il vient lui-même et va vous sauver. »

Alors se dessilleront les yeux des aveugles, et s'ouvriront les oreilles des sourds. Alors le boiteux bondira comme un cerf, et la bouche du muet criera de joie ; car l'eau jaillira dans le désert, des torrents dans le pays aride. La terre brûlante se changera en lac, la région de la soif, en eaux jaillissantes.

Il y aura là un chemin, une route, on l'appellera la Voie sacrée. L'homme impur n'y passera pas. Ceux qu'a libérés le Seigneur reviennent, ils entrent dans Sion, clamant leur allégresse ; une joie sans fin illumine leur visage ; allégresse et joie les accompagnent, douleur et plainte s'enfuient.`,
    },
    psalm: {
      reference: "Psaume 84 (85)",
      text: `R/ Voici notre Dieu qui vient nous sauver.

J'écoute : que dira le Seigneur Dieu ?
Ce qu'il dit, c'est la paix pour son peuple et ses fidèles.
Son salut est proche de ceux qui le craignent,
et la gloire habitera notre terre.

Amour et vérité se rencontrent,
justice et paix s'embrassent ;
la vérité germera de la terre
et du ciel se penchera la justice.

Le Seigneur donnera ses bienfaits,
et notre terre donnera son fruit.
La justice marchera devant lui,
et ses pas traceront le chemin.`,
    },
    gospel: {
      reference: "Luc 5, 17-26",
      text: `En ce temps-là, un jour que Jésus enseignait, il y avait dans l'assistance des pharisiens et des docteurs de la Loi, venus de tous les villages de Galilée et de Judée, ainsi que de Jérusalem ; et la puissance du Seigneur était à l'œuvre pour lui faire opérer des guérisons.

Arrivent des gens, portant sur un brancard un homme qui était paralysé ; ils cherchaient à le faire entrer pour le placer devant Jésus. Mais, ne trouvant pas moyen de l'introduire à cause de la foule, ils montèrent sur le toit et, en écartant les tuiles, le firent descendre avec sa civière en plein milieu devant Jésus.

Voyant leur foi, il dit : « Homme, tes péchés te sont pardonnés. » Les scribes et les pharisiens se mirent à raisonner : « Qui est cet homme qui prononce des blasphèmes ? Qui donc peut pardonner les péchés, sinon Dieu seul ? » Mais Jésus, saisissant leurs pensées, leur répondit : « Pourquoi ces pensées dans vos cœurs ? Qu'est-ce qui est le plus facile ? Dire : "Tes péchés te sont pardonnés", ou dire : "Lève-toi et marche" ? Eh bien ! Pour que vous sachiez que le Fils de l'homme a autorité sur la terre pour pardonner les péchés – Jésus s'adressa à celui qui était paralysé – je te le dis, lève-toi, prends ta civière et retourne dans ta maison. »

À l'instant même, celui-ci se releva devant eux, il prit ce sur quoi il était couché et s'en alla dans sa maison en rendant gloire à Dieu. Tous furent saisis de stupeur et ils rendaient gloire à Dieu. Remplis de crainte, ils disaient : « Nous avons vu des choses extraordinaires aujourd'hui ! »`,
    },
  },

  "advent-2-mar": {
    firstReading: {
      reference: "Isaïe 40, 1-11",
      text: `« Consolez, consolez mon peuple, – dit votre Dieu – parlez au cœur de Jérusalem. Proclamez que son service est accompli, que son crime est expié, qu'elle a reçu de la main du Seigneur le double pour toutes ses fautes. »

Une voix proclame : « Dans le désert, préparez le chemin du Seigneur ; tracez droit, dans les terres arides, une route pour notre Dieu. Que tout ravin soit comblé, toute montagne et toute colline abaissées ! que les escarpements se changent en plaine, et les sommets, en large vallée ! Alors se révélera la gloire du Seigneur, et tout être de chair verra que la bouche du Seigneur a parlé. »

Une voix dit : « Proclame ! » Et je dis : « Que dois-je proclamer ? – Toute chair est comme l'herbe, toute sa grâce est comme la fleur des champs : l'herbe se dessèche et la fleur se fane quand passe sur elle le souffle du Seigneur. Oui, le peuple est comme l'herbe : l'herbe se dessèche et la fleur se fane, mais la parole de notre Dieu se dressera pour toujours. »

Monte sur une haute montagne, toi qui portes la bonne nouvelle à Sion. Élève la voix avec force, toi qui portes la bonne nouvelle à Jérusalem. Élève la voix, ne crains pas. Dis aux villes de Juda : « Voici votre Dieu ! » Voici le Seigneur Dieu ! Il vient avec puissance ; son bras lui soumet tout. Voici le fruit de son travail avec lui, et devant lui, son ouvrage. Comme un berger, il fait paître son troupeau : son bras rassemble les agneaux, il les porte sur son cœur, il mène les brebis qui allaitent.`,
    },
    psalm: {
      reference: "Psaume 95 (96)",
      text: `R/ Voici notre Dieu qui vient avec puissance.

Chantez au Seigneur un chant nouveau,
chantez au Seigneur, terre entière,
chantez au Seigneur et bénissez son nom !

De jour en jour, proclamez son salut,
racontez à tous les peuples sa gloire,
à toutes les nations ses merveilles !

Il est grand, le Seigneur, hautement loué,
redoutable au-dessus de tous les dieux :
néant, tous les dieux des nations !

Rendez au Seigneur, familles des peuples,
rendez au Seigneur la gloire et la puissance,
rendez au Seigneur la gloire de son nom.

Allez dire aux nations : « Le Seigneur est roi ! »
Le monde, inébranlable, tient bon.
Il gouverne les peuples avec droiture.`,
    },
    gospel: {
      reference: "Matthieu 18, 12-14",
      text: `En ce temps-là, Jésus disait à ses disciples : « Quel est votre avis ? Si un homme possède cent brebis et que l'une d'entre elles s'égare, ne va-t-il pas laisser les quatre-vingt-dix-neuf autres dans la montagne pour partir à la recherche de la brebis égarée ? Et, s'il arrive à la retrouver, amen, je vous le dis : il se réjouit pour elle plus que pour les quatre-vingt-dix-neuf qui ne se sont pas égarées.

Ainsi, votre Père qui est aux cieux ne veut pas qu'un seul de ces petits soit perdu. »`,
    },
  },

  "advent-2-mer": {
    firstReading: {
      reference: "Isaïe 40, 25-31",
      text: `« À qui me comparerez-vous, pour que je lui sois égal ? » – dit le Dieu Saint. Levez les yeux et regardez : qui a créé ces astres ? C'est celui qui les fait sortir au complet et les appelle chacun par son nom. Si grande est sa force, et telle est la puissance de sa vigueur, que pas un seul ne manque.

Pourquoi dis-tu, Jacob, pourquoi affirmes-tu, Israël : « Mon chemin est caché au Seigneur, mon droit échappe à mon Dieu » ? Tu ne le sais donc pas, tu ne l'as pas entendu ? Le Seigneur est le Dieu éternel, le créateur des extrémités de la terre. Il ne se fatigue pas, il ne se lasse pas ; sa sagesse est insondable.

Il donne de la force à celui qui est fatigué, il augmente la vigueur de celui qui est épuisé. Les garçons se fatiguent, se lassent, et les jeunes gens ne cessent de trébucher, mais ceux qui mettent leur espérance dans le Seigneur trouvent des forces nouvelles ; ils déploient comme des ailes d'aigles, ils courent sans se lasser, ils marchent sans se fatiguer.`,
    },
    psalm: {
      reference: "Psaume 102 (103)",
      text: `R/ Le Seigneur est tendresse et pitié.

Le Seigneur est tendresse et pitié,
lent à la colère et plein d'amour ;
il n'est pas pour toujours en procès,
ne maintient pas sans fin ses reproches.

Comme le ciel domine la terre,
fort est son amour pour qui le craint ;
aussi loin qu'est l'orient de l'occident,
il met loin de nous nos péchés.

Comme la tendresse du père pour ses fils,
la tendresse du Seigneur pour qui le craint !
Il sait de quoi nous sommes pétris,
il se souvient que nous sommes poussière.

Bénis le Seigneur, ô mon âme,
n'oublie aucun de ses bienfaits !`,
    },
    gospel: {
      reference: "Matthieu 11, 28-30",
      text: `En ce temps-là, Jésus prit la parole et dit : « Venez à moi, vous tous qui peinez sous le poids du fardeau, et moi, je vous procurerai le repos. Prenez sur vous mon joug, devenez mes disciples, car je suis doux et humble de cœur, et vous trouverez le repos pour votre âme. Oui, mon joug est facile à porter, et mon fardeau, léger. »`,
    },
  },

  "advent-2-jeu": {
    firstReading: {
      reference: "Isaïe 41, 13-20",
      text: `Ainsi parle le Seigneur : « C'est moi, le Seigneur ton Dieu, qui saisis ta main droite, et qui te dis : "Ne crains pas, je viens à ton aide." Ne crains pas, vermisseau de Jacob, pauvre のe petit reste d'Israël. C'est moi qui viens à ton aide – oracle du Seigneur – le Saint d'Israël est ton rédempteur.

J'ai fait de toi un traîneau à battre le grain, tout neuf, à double rang de pointes : tu écraseras les montagnes, tu les broieras, tu réduiras les collines en menue paille. Tu les vanneras, le vent les emportera, un tourbillon les dispersera ; mais toi, tu exulteras dans le Seigneur, tu trouveras ta fierté dans le Saint d'Israël.

Les pauvres et les malheureux cherchent de l'eau, et il n'y en a pas ; leur langue est desséchée par la soif. Moi, le Seigneur, je les exaucerai ; moi, le Dieu d'Israël, je ne les abandonnerai pas. Je ferai jaillir des fleuves sur les hauteurs et des sources au creux des vallées. Je changerai le désert en lac et la terre aride en fontaine. Je planterai dans le désert le cèdre et l'acacia, le myrte et l'olivier ; je mettrai ensemble dans les terres incultes le cyprès, l'orme et le buis, afin que tous voient et reconnaissent, afin que tous observent et comprennent que la main du Seigneur a fait tout cela, que le Saint d'Israël en est le créateur. »`,
    },
    psalm: {
      reference: "Psaume 144 (145)",
      text: `R/ Le Seigneur est tendresse et pitié, lent à la colère et plein d'amour.

Le Seigneur est tendresse et pitié,
lent à la colère et plein d'amour ;
la bonté du Seigneur est pour tous,
sa tendresse, pour toutes ses œuvres.

Que tes œuvres, Seigneur, te rendent grâce
et que tes fidèles te bénissent !
Ils diront la gloire de ton règne,
ils parleront de tes exploits.

Le Seigneur est vrai en tout ce qu'il dit,
fidèle en tout ce qu'il fait.
Le Seigneur soutient tous ceux qui tombent,
il redresse tous les accablés.`,
    },
    gospel: {
      reference: "Matthieu 11, 11-15",
      text: `En ce temps-là, Jésus déclarait aux foules : « Amen, je vous le dis : Parmi ceux qui sont nés d'une femme, personne ne s'est levé de plus grand que Jean le Baptiste ; et cependant le plus petit dans le royaume des Cieux est plus grand que lui.

Depuis les jours de Jean le Baptiste jusqu'à présent, le royaume des Cieux subit la violence, et des violents cherchent à s'en emparer. Tous les Prophètes, ainsi que la Loi, ont prophétisé jusqu'à Jean. Et, si vous voulez bien comprendre, c'est lui, le prophète Élie qui devait venir. Celui qui a des oreilles, qu'il entende ! »`,
    },
  },

  "advent-2-ven": {
    firstReading: {
      reference: "Isaïe 48, 17-19",
      text: `Ainsi parle le Seigneur, ton rédempteur, le Saint d'Israël : « Moi, je suis le Seigneur ton Dieu, je t'enseigne ce qui est utile, je te guide sur le chemin où tu marches. Si seulement tu avais prêté attention à mes commandements ! Ta paix serait comme un fleuve, et ta justice, comme les flots de la mer. Ta postérité serait comme le sable, et ta descendance, aussi nombreuse que les grains de sable. Son nom ne serait ni retranché ni effacé devant moi. »`,
    },
    psalm: {
      reference: "Psaume 1",
      text: `R/ Qui marche à ta suite, Seigneur, aura la lumière de la vie.

Heureux est l'homme
qui n'entre pas au conseil des méchants,
qui ne suit pas le chemin des pécheurs,
ne siège pas avec ceux qui ricanent,
mais se plaît dans la loi du Seigneur
et murmure sa loi jour et nuit !

Il est comme un arbre
planté près d'un ruisseau,
qui donne du fruit en son temps,
et jamais son feuillage ne meurt ;
tout ce qu'il entreprend réussira.

Tel n'est pas le sort des méchants.
Mais ils sont comme la paille
balayée par le vent.
Le Seigneur connaît le chemin des justes,
mais le chemin des méchants se perdra.`,
    },
    gospel: {
      reference: "Matthieu 11, 16-19",
      text: `En ce temps-là, Jésus déclarait aux foules : « À qui vais-je comparer cette génération ? Elle ressemble à des gamins assis sur les places, qui crient vers les autres :
"Nous vous avons joué de la flûte,
et vous n'avez pas dansé.
Nous avons chanté des complaintes,
et vous ne vous êtes pas frappé la poitrine."

Jean est venu, en effet ; il ne mange pas, il ne boit pas, et l'on dit : "C'est un possédé !" Le Fils de l'homme est venu ; il mange et il boit, et l'on dit : "Voilà un glouton et un ivrogne, un ami des publicains et des pécheurs." Mais la Sagesse de Dieu a été reconnue juste à travers ce qu'elle fait. »`,
    },
  },

  "advent-2-sam": {
    firstReading: {
      reference: "Siracide 48, 1-4.9-11",
      text: `Le prophète Élie surgit comme un feu ; sa parole brûlait comme une torche. Il fit venir la famine sur Israël ; dans son ardeur, il en diminua le nombre. Par la parole du Seigneur, il ferma le ciel et, par trois fois, en fit descendre le feu.

Comme tu étais glorieux, Élie, dans tes prodiges ! Qui pourrait se vanter d'être ton égal ? Toi qui fus emporté dans un tourbillon de feu par un char aux chevaux de feu ; toi qui fus désigné dans les menaces pour les temps à venir, afin d'apaiser la colère avant qu'elle n'éclate, pour ramener le cœur du père vers le fils et rétablir les tribus de Jacob. Heureux ceux qui te verront et ceux que l'amour a endormis, car nous aussi nous posséderons la vie !`,
    },
    psalm: {
      reference: "Psaume 79 (80)",
      text: `R/ Dieu, fais-nous revenir ; que ton visage s'éclaire, et nous serons sauvés !

Berger d'Israël, écoute,
toi qui conduis ton troupeau, resplendis !
Réveille ta vaillance
et viens nous sauver.

Dieu de l'univers, reviens !
Du haut des cieux, regarde et vois :
visite cette vigne, protège-la,
celle qu'a plantée ta main droite.

Que ta main soutienne l'homme de ta droite,
le fils de l'homme qui te doit sa force.
Jamais plus nous n'irons loin de toi :
fais-nous vivre et invoquer ton nom !`,
    },
    gospel: {
      reference: "Matthieu 17, 9a.10-13",
      text: `En ce temps-là, descendant de la montagne, les disciples interrogèrent Jésus : « Pourquoi donc les scribes disent-ils que le prophète Élie doit venir d'abord ? » Jésus leur répondit : « Élie va venir, en effet, pour tout remettre à sa place. Mais, je vous le déclare : Élie est déjà venu ; au lieu de le reconnaître, ils l'ont traité comme ils ont voulu. Et le Fils de l'homme va souffrir le même sort de leur part. » Alors les disciples comprirent qu'il leur parlait de Jean le Baptiste.`,
    },
  },

  // ===== 3ème SEMAINE DE L'AVENT =====

  "advent-3-lun": {
    firstReading: {
      reference: "Nombres 24, 2-7.15-17a",
      text: `En ces jours-là, levant les yeux, Balaam vit Israël, établi par tribus ; l'esprit de Dieu fut sur lui. Il prononça ces paroles prophétiques : « Oracle de Balaam, fils de Béor, oracle de l'homme au regard pénétrant, oracle de celui qui entend les paroles de Dieu. Il voit ce que le Puissant lui fait voir, il tombe en extase, et ses yeux s'ouvrent.

Que tes tentes sont belles, Jacob, et tes demeures, Israël ! Comme des vallées qui s'étendent, comme des jardins au bord d'un fleuve, comme des aloès que le Seigneur a plantés, comme des cèdres au bord des eaux ! Un héros surgira de la descendance de Jacob, il dominera sur des peuples nombreux. »

Il prononça encore ces paroles prophétiques : « Oracle de Balaam, fils de Béor, oracle de l'homme au regard pénétrant, oracle de celui qui entend les paroles de Dieu et qui sait le savoir du Très-Haut. Il voit ce que le Puissant lui fait voir, il tombe en extase, et ses yeux s'ouvrent.

Je le vois, mais pas pour maintenant ; je l'aperçois, mais pas de près : un astre se lève, issu de Jacob, un sceptre se dresse, issu d'Israël. »`,
    },
    psalm: {
      reference: "Psaume 24 (25)",
      text: `R/ Seigneur, enseigne-moi tes voies, fais-moi connaître ta route.

Seigneur, enseigne-moi tes voies,
fais-moi connaître ta route.
Dirige-moi par ta vérité, enseigne-moi,
car tu es le Dieu qui me sauve.

Rappelle-toi, Seigneur, ta tendresse,
ton amour qui est de toujours.
Dans ton amour, ne m'oublie pas,
en raison de ta bonté, Seigneur.

Il est droit, il est bon, le Seigneur,
lui qui montre aux pécheurs le chemin.
Sa droiture dirige les humbles,
il enseigne aux humbles son chemin.`,
    },
    gospel: {
      reference: "Matthieu 21, 23-27",
      text: `En ce temps-là, Jésus était entré dans le Temple, et, pendant qu'il enseignait, les grands prêtres et les anciens du peuple s'approchèrent de lui et demandèrent : « Par quelle autorité fais-tu cela, et qui t'a donné cette autorité ? » Jésus leur répondit : « À mon tour, je vais vous poser une question, une seule ; et si vous me répondez, je vous dirai, moi aussi, par quelle autorité je fais cela : Le baptême de Jean, d'où venait-il ? du ciel ou des hommes ? »

Ils faisaient en eux-mêmes ce raisonnement : « Si nous disons : "Du ciel", il nous dira : "Pourquoi donc n'avez-vous pas cru à sa parole ?" Si nous disons : "Des hommes", nous devons redouter la foule, car tous tiennent Jean pour un prophète. » Ils répondirent à Jésus : « Nous ne savons pas. » Il leur dit à son tour : « Moi non plus, je ne vous dis pas par quelle autorité je fais cela. »`,
    },
  },

  "advent-3-mar": {
    firstReading: {
      reference: "Sophonie 3, 1-2.9-13",
      text: `Malheur à la ville rebelle, impure et tyrannique ! Elle n'a pas écouté l'appel, elle n'a pas accepté la leçon, elle n'a pas fait confiance au Seigneur, de son Dieu elle ne s'est pas approchée.

Alors, je donnerai aux peuples des lèvres purifiées, pour que tous invoquent le nom du Seigneur et, d'un même geste, le servent. D'au-delà des fleuves d'Éthiopie, ceux qui m'adorent, mes enfants dispersés, m'apporteront mon offrande. Ce jour-là, tu n'auras plus à rougir de tes méfaits, de tes crimes contre moi ; car alors j'extirperai du milieu de toi ceux qui se vantent avec insolence, et tu cesseras de te pavaner sur ma montagne sainte.

Oui, je laisserai en ton sein un peuple pauvre et petit ; il prendra pour abri le nom du Seigneur. Ce reste d'Israël ne commettra plus d'injustice ; ils ne diront plus de mensonge ; dans leur bouche, plus de langage trompeur. Alors, ils pourront paître et se reposer, nul ne viendra les effrayer.`,
    },
    psalm: {
      reference: "Psaume 33 (34)",
      text: `R/ Un pauvre crie ; le Seigneur entend.

Je bénirai le Seigneur en tout temps,
sa louange sans cesse à mes lèvres.
Je me glorifierai dans le Seigneur :
que les pauvres m'entendent et soient en fête !

Magnifiez avec moi le Seigneur,
exaltons tous ensemble son nom.
Je cherche le Seigneur, il me répond :
de toutes mes frayeurs, il me délivre.

Le Seigneur est proche du cœur brisé,
il sauve les esprits abattus.
Malheur sur malheur pour le juste,
mais le Seigneur chaque fois le délivre.`,
    },
    gospel: {
      reference: "Matthieu 21, 28-32",
      text: `En ce temps-là, Jésus disait aux grands prêtres et aux anciens du peuple : « Quel est votre avis ? Un homme avait deux fils. Il vint trouver le premier et lui dit : "Mon enfant, va travailler aujourd'hui à la vigne." Celui-ci répondit : "Je ne veux pas." Mais ensuite, s'étant repenti, il y alla. Puis le père alla trouver le second et lui parla de la même manière. Celui-ci répondit : "Oui, Seigneur !" et il n'y alla pas.

Lequel des deux a fait la volonté du père ? » Ils lui répondent : « Le premier. » Jésus leur dit : « Amen, je vous le déclare : les publicains et les prostituées vous précèdent dans le royaume de Dieu. Car Jean le Baptiste est venu à vous sur le chemin de la justice, et vous n'avez pas cru à sa parole ; mais les publicains et les prostituées y ont cru. Vous, même après avoir vu cela, vous ne vous êtes pas repentis plus tard pour croire à sa parole. »`,
    },
  },

  "advent-3-mer": {
    firstReading: {
      reference: "Isaïe 45, 6b-8.18.21b-25",
      text: `Ainsi parle le Seigneur : « Je suis le Seigneur, il n'en est pas d'autre. Je façonne la lumière et je crée les ténèbres, je fais la paix et je crée le malheur. C'est moi, le Seigneur, qui fais tout cela.

Cieux, distillez d'en haut votre rosée, que les nuages fassent pleuvoir la justice, que la terre s'ouvre et produise le salut, que la justice germe en même temps. C'est moi, le Seigneur, qui crée tout cela. »

Ainsi parle le Seigneur, le Créateur des cieux – c'est lui qui est Dieu ! – lui qui a modelé la terre, qui l'a faite et affermie ; il ne l'a pas créée comme un lieu vide, il l'a modelée pour être habitée. « Je suis le Seigneur, il n'en est pas d'autre.

Il n'y a pas d'autre Dieu que moi ; de Dieu juste et sauveur, il n'y en a pas en dehors de moi. Tournez-vous vers moi : vous serez sauvés, tous les lointains de la terre ! Car je suis Dieu : il n'en est pas d'autre. Je le jure par moi-même : de ma bouche sort la justice, une parole irrévocable. Devant moi, tout genou fléchira, toute langue en fera le serment : "Par le Seigneur seulement – dira-t-elle de moi – la justice et la force !" Jusqu'à lui viendront, couverts de honte, tous ceux qui s'enflammaient contre lui. Elle obtiendra, par le Seigneur, justice et gloire, toute la descendance d'Israël. »`,
    },
    psalm: {
      reference: "Psaume 84 (85)",
      text: `R/ Cieux, répandez votre rosée ! Nuées, faites pleuvoir le Juste !

J'écoute : que dira le Seigneur Dieu ?
Ce qu'il dit, c'est la paix pour son peuple et ses fidèles ;
qu'ils ne reviennent jamais à leur folie !
Son salut est proche de ceux qui le craignent,
et la gloire habitera notre terre.

Amour et vérité se rencontrent,
justice et paix s'embrassent ;
la vérité germera de la terre
et du ciel se penchera la justice.

Le Seigneur donnera ses bienfaits,
et notre terre donnera son fruit.
La justice marchera devant lui,
et ses pas traceront le chemin.`,
    },
    gospel: {
      reference: "Luc 7, 18b-23",
      text: `En ce temps-là, Jean le Baptiste appela deux de ses disciples et les envoya demander au Seigneur : « Es-tu celui qui doit venir, ou devons-nous en attendre un autre ? » Arrivés près de Jésus, les deux hommes lui dirent : « Jean le Baptiste nous a envoyés te demander : Es-tu celui qui doit venir, ou devons-nous en attendre un autre ? »

À cette heure-là, Jésus guérit beaucoup de gens de leurs maladies, de leurs infirmités et des esprits mauvais, et il rendit la vue à beaucoup d'aveugles. Puis il répondit aux envoyés : « Allez annoncer à Jean ce que vous avez vu et entendu : les aveugles retrouvent la vue, les boiteux marchent, les lépreux sont purifiés, les sourds entendent, les morts ressuscitent, les pauvres reçoivent la Bonne Nouvelle. Heureux celui qui ne trébuchera pas à cause de moi ! »`,
    },
  },

  "advent-3-jeu": {
    firstReading: {
      reference: "Isaïe 54, 1-10",
      text: `Ainsi parle le Seigneur : « Crie de joie, toi qui n'as pas enfanté ! Éclate en cris de joie et d'allégresse, toi qui n'as pas connu les douleurs ! Car les fils de la délaissée seront plus nombreux que les fils de l'épouse, – dit le Seigneur. Élargis l'espace de ta tente, déploie la toile de ta demeure, ne lésine pas ! Allonge tes cordages, renforce tes piquets ! Car tu vas déborder à droite et à gauche ; ta descendance prendra possession des nations et peuplera les villes désertes.

Ne crains pas, tu n'auras plus de honte ; ne rougis pas, tu n'auras plus à pâlir. Tu oublieras la honte de ta jeunesse, tu ne te souviendras plus du déshonneur de ton veuvage. Ton époux, c'est Celui qui t'a faite, le Seigneur de l'univers est son nom. Ton rédempteur, c'est le Saint d'Israël, il s'appelle Dieu de toute la terre.

Oui, comme une femme abandonnée et désolée, le Seigneur te rappelle. "Est-ce qu'on rejette la femme de sa jeunesse ?" – dit ton Dieu. Un court instant, je t'avais abandonnée ; mais dans ma grande tendresse, je te rassemblerai. Quand ma colère a débordé, un instant, je t'avais caché ma face. Mais dans mon éternelle fidélité, j'ai pitié de toi, – dit le Seigneur, ton rédempteur.

C'est pour moi comme au temps de Noé : j'avais juré que les eaux de Noé ne submergeraient plus la terre ; de même, je jure de ne plus m'irriter contre toi, et de ne plus te menacer. Quand les montagnes s'écarteraient, quand les collines chancèleraient, ma fidélité envers toi ne s'écartera pas, et mon alliance de paix ne sera pas ébranlée, – dit le Seigneur qui te montre sa tendresse. »`,
    },
    psalm: {
      reference: "Psaume 29 (30)",
      text: `R/ Je t'exalte, Seigneur : tu m'as relevé.

Je t'exalte, Seigneur : tu m'as relevé,
tu m'as épargné l'abîme,
tu m'as fait remonter de l'abîme
et revivre quand je descendais dans la fosse.

Fêtez le Seigneur, vous, ses fidèles,
rendez grâce en rappelant son nom très saint.
Sa colère ne dure qu'un instant,
sa bonté, toute la vie.

Avec le soir, viennent les larmes,
mais au matin, les cris de joie !
Tu as changé mon deuil en une danse,
mes habits funèbres en parure de joie.

Que mon cœur ne se taise pas,
qu'il soit en fête pour toi ;
et que sans fin, Seigneur, mon Dieu,
je te rende grâce !`,
    },
    gospel: {
      reference: "Luc 7, 24-30",
      text: `En ce temps-là, quand les envoyés de Jean le Baptiste furent partis, Jésus se mit à dire aux foules au sujet de Jean : « Qu'êtes-vous allés regarder au désert ? un roseau agité par le vent ? Alors, qu'êtes-vous allés voir ? un homme habillé de vêtements raffinés ? Mais ceux qui portent des vêtements somptueux et qui vivent dans le luxe sont dans les palais des rois. Alors, qu'êtes-vous allés voir ? un prophète ? Oui, je vous le dis ; et bien plus qu'un prophète.

C'est de lui qu'il est écrit : Voici que j'envoie mon messager en avant de toi, pour préparer le chemin devant toi.

Je vous le dis : Parmi ceux qui sont nés d'une femme, personne n'est plus grand que Jean ; et cependant le plus petit dans le royaume de Dieu est plus grand que lui. » Tout le peuple qui a écouté Jean, y compris les publicains, en se faisant baptiser par lui, a reconnu que Dieu était juste. Mais les pharisiens et les docteurs de la Loi, en ne se faisant pas baptiser par lui, ont rejeté le dessein que Dieu avait sur eux.`,
    },
  },

  "advent-3-ven": {
    firstReading: {
      reference: "Isaïe 56, 1-3a.6-8",
      text: `Ainsi parle le Seigneur : « Observez le droit, pratiquez la justice, car mon salut approche, il vient, et ma justice va se révéler. Heureux l'homme qui fait ainsi, le fils d'Adam qui s'y tient fermement, gardant le sabbat sans le profaner, veillant à ne faire aucun mal. »

Que l'étranger qui s'est attaché au Seigneur ne dise pas : « Le Seigneur va sûrement me séparer de son peuple. »

Les fils d'étrangers qui se sont attachés au Seigneur pour l'honorer, pour aimer son nom, pour devenir ses serviteurs, tous ceux qui gardent le sabbat sans le profaner et qui se tiennent fermement dans mon alliance, je les conduirai à ma montagne sainte, je les comblerai de joie dans ma maison de prière, leurs holocaustes et leurs sacrifices seront agréés sur mon autel, car ma maison s'appellera « Maison de prière pour tous les peuples. »

Oracle du Seigneur Dieu, qui rassemble les exilés d'Israël : « J'en rassemblerai d'autres encore avec ceux qui sont déjà rassemblés. »`,
    },
    psalm: {
      reference: "Psaume 66 (67)",
      text: `R/ Que les peuples, Dieu, te rendent grâce ; qu'ils te rendent grâce tous ensemble !

Que Dieu nous prenne en grâce et nous bénisse,
que son visage s'illumine pour nous ;
et ton chemin sera connu sur la terre,
ton salut, parmi toutes les nations.

Que les nations chantent leur joie,
car tu gouvernes le monde avec justice ;
tu gouvernes les peuples avec droiture,
sur la terre, tu conduis les nations.

Que les peuples, Dieu, te rendent grâce ;
qu'ils te rendent grâce tous ensemble !
Que Dieu nous bénisse,
et que la terre tout entière l'adore !`,
    },
    gospel: {
      reference: "Jean 5, 33-36",
      text: `En ce temps-là, Jésus disait aux Juifs : « Vous avez envoyé une délégation auprès de Jean le Baptiste, et il a rendu témoignage à la vérité. Moi, ce n'est pas d'un homme que je reçois le témoignage, mais je parle ainsi pour que vous soyez sauvés.

Jean était la lampe qui brûle et qui brille, et vous avez voulu vous réjouir un moment à sa lumière. Mais j'ai pour moi un témoignage plus grand que celui de Jean : ce sont les œuvres que le Père m'a donné d'accomplir ; les œuvres mêmes que je fais témoignent que le Père m'a envoyé. »`,
    },
  },

  "advent-3-sam": {
    firstReading: {
      reference: "Genèse 49, 2.8-10",
      text: `En ces jours-là, Jacob appela ses fils et dit : « Rassemblez-vous, écoutez, fils de Jacob, écoutez Israël, votre père.

Juda, tes frères te rendront hommage ; ta main pèsera sur la nuque de tes ennemis et les fils de ton père s'inclineront devant toi. Juda est un jeune lion. Tu remontes du carnage, mon fils. Il s'est accroupi, il s'est couché comme un lion ; ce fauve, qui le fera lever ? Le sceptre royal n'échappera pas à Juda, ni le bâton de commandement, d'entre ses pieds, jusqu'à ce que vienne celui à qui le pouvoir appartient, à qui les peuples obéiront. »`,
    },
    psalm: {
      reference: "Psaume 71 (72)",
      text: `R/ En ces jours-là fleurira la justice, grande paix jusqu'à la fin des lunes !

Dieu, donne au roi tes pouvoirs,
à ce fils de roi ta justice.
Qu'il gouverne ton peuple avec justice,
qu'il fasse droit aux malheureux !

En ces jours-là, fleurira la justice,
grande paix jusqu'à la fin des lunes !
Qu'il domine de la mer à la mer,
et du Fleuve jusqu'au bout de la terre !

Il délivrera le pauvre qui appelle
et le malheureux sans recours.
Il aura souci du faible et du pauvre,
du pauvre dont il sauve la vie.`,
    },
    gospel: {
      reference: "Matthieu 1, 1-17",
      text: `Généalogie de Jésus Christ, fils de David, fils d'Abraham.

Abraham engendra Isaac, Isaac engendra Jacob, Jacob engendra Juda et ses frères. Juda, de son union avec Thamar, engendra Pharès et Zara, Pharès engendra Esrom, Esrom engendra Aram, Aram engendra Aminadab, Aminadab engendra Naassone, Naassone engendra Salmone, Salmone, de son union avec Rahab, engendra Booz, Booz, de son union avec Ruth, engendra Jobed, Jobed engendra Jessé, Jessé engendra le roi David.

David, de son union avec la femme d'Ourias, engendra Salomon, Salomon engendra Roboam, Roboam engendra Abia, Abia engendra Asa, Asa engendra Josaphat, Josaphat engendra Joram, Joram engendra Ozias, Ozias engendra Joatham, Joatham engendra Acaz, Acaz engendra Ézékias, Ézékias engendra Manassé, Manassé engendra Amone, Amone engendra Josias, Josias engendra Jékonias et ses frères à l'époque de l'exil à Babylone.

Après l'exil à Babylone, Jékonias engendra Salathiel, Salathiel engendra Zorobabel, Zorobabel engendra Abioud, Abioud engendra Éliakim, Éliakim engendra Azor, Azor engendra Sadok, Sadok engendra Akim, Akim engendra Élioud, Élioud engendra Éléazar, Éléazar engendra Mattane, Mattane engendra Jacob, Jacob engendra Joseph, l'époux de Marie, de laquelle fut engendré Jésus, que l'on appelle Christ.

Le nombre total des générations est donc : depuis Abraham jusqu'à David, quatorze générations ; depuis David jusqu'à l'exil à Babylone, quatorze générations ; depuis l'exil à Babylone jusqu'au Christ, quatorze générations.`,
    },
  },

  // ===== DU 17 AU 24 DÉCEMBRE – Lectures propres (Antiennes « Ô ») =====

  "dec-17": {
    firstReading: {
      reference: "Genèse 49, 2.8-10",
      text: `En ces jours-là, Jacob appela ses fils et dit : « Rassemblez-vous, écoutez, fils de Jacob, écoutez Israël, votre père.

Juda, tes frères te rendront hommage ; ta main pèsera sur la nuque de tes ennemis et les fils de ton père s'inclineront devant toi. Juda est un jeune lion. Tu remontes du carnage, mon fils. Il s'est accroupi, il s'est couché comme un lion ; ce fauve, qui le fera lever ? Le sceptre royal n'échappera pas à Juda, ni le bâton de commandement, d'entre ses pieds, jusqu'à ce que vienne celui à qui le pouvoir appartient, à qui les peuples obéiront. »`,
    },
    psalm: {
      reference: "Psaume 71 (72)",
      text: `R/ En ces jours-là fleurira la justice, grande paix jusqu'à la fin des lunes !

Dieu, donne au roi tes pouvoirs,
à ce fils de roi ta justice.
Qu'il gouverne ton peuple avec justice,
qu'il fasse droit aux malheureux !

En ces jours-là, fleurira la justice,
grande paix jusqu'à la fin des lunes !
Qu'il domine de la mer à la mer,
et du Fleuve jusqu'au bout de la terre !

Il délivrera le pauvre qui appelle
et le malheureux sans recours.
Il aura souci du faible et du pauvre,
du pauvre dont il sauve la vie.`,
    },
    gospel: {
      reference: "Matthieu 1, 1-17",
      text: `Généalogie de Jésus Christ, fils de David, fils d'Abraham.

Abraham engendra Isaac, Isaac engendra Jacob, Jacob engendra Juda et ses frères. Juda, de son union avec Thamar, engendra Pharès et Zara, Pharès engendra Esrom, Esrom engendra Aram, Aram engendra Aminadab, Aminadab engendra Naassone, Naassone engendra Salmone, Salmone, de son union avec Rahab, engendra Booz, Booz, de son union avec Ruth, engendra Jobed, Jobed engendra Jessé, Jessé engendra le roi David.

David, de son union avec la femme d'Ourias, engendra Salomon, Salomon engendra Roboam, Roboam engendra Abia, Abia engendra Asa, Asa engendra Josaphat, Josaphat engendra Joram, Joram engendra Ozias, Ozias engendra Joatham, Joatham engendra Acaz, Acaz engendra Ézékias, Ézékias engendra Manassé, Manassé engendra Amone, Amone engendra Josias, Josias engendra Jékonias et ses frères à l'époque de l'exil à Babylone.

Après l'exil à Babylone, Jékonias engendra Salathiel, Salathiel engendra Zorobabel, Zorobabel engendra Abioud, Abioud engendra Éliakim, Éliakim engendra Azor, Azor engendra Sadok, Sadok engendra Akim, Akim engendra Élioud, Élioud engendra Éléazar, Éléazar engendra Mattane, Mattane engendra Jacob, Jacob engendra Joseph, l'époux de Marie, de laquelle fut engendré Jésus, que l'on appelle Christ.

Le nombre total des générations est donc : depuis Abraham jusqu'à David, quatorze générations ; depuis David jusqu'à l'exil à Babylone, quatorze générations ; depuis l'exil à Babylone jusqu'au Christ, quatorze générations.`,
    },
  },

  "dec-18": {
    firstReading: {
      reference: "Jérémie 23, 5-8",
      text: `Voici venir des jours – oracle du Seigneur – où je susciterai pour David un Germe juste : il régnera en vrai roi, il agira avec intelligence, il exercera dans le pays le droit et la justice. En ces jours-là, Juda sera sauvé, et Israël habitera en sécurité. Voici le nom qu'on lui donnera : « Le-Seigneur-est-notre-justice. »

C'est pourquoi, voici venir des jours – oracle du Seigneur – où l'on ne dira plus : « Par le Seigneur vivant, qui a fait monter les fils d'Israël du pays d'Égypte », mais : « Par le Seigneur vivant, qui a fait monter et revenir la descendance de la maison d'Israël du pays du nord et de tous les pays où il les avait dispersés, et ils habiteront sur leur sol. »`,
    },
    psalm: {
      reference: "Psaume 71 (72)",
      text: `R/ En ces jours-là fleurira la justice, grande paix jusqu'à la fin des lunes !

Dieu, donne au roi tes pouvoirs,
à ce fils de roi ta justice.
Qu'il gouverne ton peuple avec justice,
qu'il fasse droit aux malheureux !

En ces jours-là, fleurira la justice,
grande paix jusqu'à la fin des lunes !
Qu'il domine de la mer à la mer,
et du Fleuve jusqu'au bout de la terre !

Il délivrera le pauvre qui appelle
et le malheureux sans recours.
Il aura souci du faible et du pauvre,
du pauvre dont il sauve la vie.

Que son nom dure toujours ;
sous le soleil, que subsiste son nom !
En lui, que soient bénies toutes les familles de la terre ;
que tous les peuples le disent bienheureux !`,
    },
    gospel: {
      reference: "Matthieu 1, 18-24",
      text: `Voici comment fut engendré Jésus Christ : Marie, sa mère, avait été accordée en mariage à Joseph ; avant qu'ils aient habité ensemble, elle fut enceinte par l'action de l'Esprit Saint. Joseph, son époux, qui était un homme juste, et ne voulait pas la dénoncer publiquement, décida de la renvoyer en secret.

Comme il avait formé ce projet, voici que l'ange du Seigneur lui apparut en songe et lui dit : « Joseph, fils de David, ne crains pas de prendre chez toi Marie, ton épouse, puisque l'enfant qui est engendré en elle vient de l'Esprit Saint ; elle enfantera un fils, et tu lui donneras le nom de Jésus (c'est-à-dire : Le-Seigneur-sauve), car c'est lui qui sauvera son peuple de ses péchés. »

Tout cela est arrivé pour que soit accomplie la parole du Seigneur prononcée par le prophète : Voici que la Vierge concevra, et elle enfantera un fils ; on lui donnera le nom d'Emmanuel, qui se traduit : « Dieu-avec-nous. »

Quand Joseph se réveilla, il fit ce que l'ange du Seigneur lui avait prescrit : il prit chez lui son épouse.`,
    },
  },

  "dec-19": {
    firstReading: {
      reference: "Juges 13, 2-7.24-25a",
      text: `En ces jours-là, il y avait un homme de Çoréa, du clan de Dane, nommé Manoah. Sa femme était stérile et n'avait pas eu d'enfant. L'ange du Seigneur apparut à cette femme et lui dit : « Tu es stérile et tu n'as pas eu d'enfant. Mais tu vas concevoir et tu enfanteras un fils. Désormais, fais bien attention : ne bois ni vin ni boisson forte, et ne mange rien d'impur. Car tu vas concevoir et enfanter un fils. Le rasoir ne passera pas sur sa tête, car cet enfant sera consacré à Dieu dès le sein de sa mère. C'est lui qui commencera à sauver Israël de la main des Philistins. »

La femme alla dire à son mari : « Un homme de Dieu est venu me trouver ; il avait l'apparence d'un ange de Dieu, tant il était imposant. Je ne lui ai pas demandé d'où il venait, et il ne m'a pas fait connaître son nom. Il m'a dit : "Tu vas concevoir et tu enfanteras un fils. Désormais, ne bois ni vin ni boisson forte, et ne mange rien d'impur, car cet enfant sera consacré à Dieu dès le sein de sa mère et jusqu'au jour de sa mort." »

La femme enfanta un fils et elle lui donna le nom de Samson. L'enfant grandit, et le Seigneur le bénit. L'esprit du Seigneur commença à le saisir.`,
    },
    psalm: {
      reference: "Psaume 70 (71)",
      text: `R/ Ma bouche annonce tout le jour tes actes de justice et de salut.

En toi, Seigneur, j'ai mon refuge :
garde-moi d'être humilié pour toujours.
Dans ta justice, défends-moi, libère-moi,
tends l'oreille vers moi, et sauve-moi.

Sois le rocher qui m'accueille,
toujours accessible ;
tu as résolu de me sauver :
ma forteresse et mon roc, c'est toi !

Seigneur mon Dieu, tu es mon espérance,
toi, mon appui dès ma jeunesse.
Toi, mon soutien dès avant ma naissance,
tu m'as choisi dès le ventre de ma mère.

Ma bouche annonce tout le jour
tes actes de justice et de salut.
Tu m'as instruit dès ma jeunesse,
jusqu'à présent, j'ai proclamé tes merveilles.`,
    },
    gospel: {
      reference: "Luc 1, 5-25",
      text: `Il y avait, au temps d'Hérode le Grand, roi de Judée, un prêtre du nom de Zacharie, du groupe d'Abia. Sa femme aussi était descendante d'Aaron ; elle s'appelait Élisabeth. Ils étaient l'un et l'autre des justes devant Dieu : ils suivaient tous les commandements et les préceptes du Seigneur de façon irréprochable. Ils n'avaient pas d'enfant, car Élisabeth était stérile et, de plus, parsing étaient l'un et l'autre avancés en âge.

Or, tandis que Zacharie, au jour fixé pour son groupe, assurait le service du culte devant Dieu, il fut désigné par le sort, suivant l'usage des prêtres, pour entrer dans le sanctuaire du Seigneur et y brûler l'encens. Toute la multitude du peuple était en prière au-dehors, à l'heure de l'offrande de l'encens. L'ange du Seigneur lui apparut, debout à droite de l'autel de l'encens. À sa vue, Zacharie fut bouleversé et la crainte le saisit.

L'ange lui dit : « Sois sans crainte, Zacharie, car ta supplication a été exaucée : ta femme Élisabeth mettra au monde pour toi un fils, et tu lui donneras le nom de Jean. Tu seras dans la joie et l'allégresse, et beaucoup se réjouiront de sa naissance, car il sera grand devant le Seigneur. Il ne boira pas de vin ni de boisson forte, et il sera rempli d'Esprit Saint dès le ventre de sa mère ; il ramènera de nombreux fils d'Israël au Seigneur leur Dieu ; il marchera devant, en présence du Seigneur, avec l'esprit et la puissance du prophète Élie, pour faire revenir le cœur des pères vers leurs enfants, ramener les rebelles à la sagesse des justes, et préparer au Seigneur un peuple bien disposé. »

Zacharie dit à l'ange : « Comment vais-je savoir que cela arrivera ? Moi, en effet, je suis un vieillard et ma femme est avancée en âge. » L'ange lui répondit : « Je suis Gabriel et je me tiens en présence de Dieu. J'ai été envoyé pour te parler et t'annoncer cette bonne nouvelle. Mais voici que tu seras réduit au silence et, jusqu'au jour où cela se réalisera, tu ne pourras plus parler, parce que tu n'as pas cru à mes paroles ; elles s'accompliront en leur temps. »

Le peuple attendait Zacharie et s'étonnait qu'il s'attarde dans le sanctuaire. Quand il sortit, il ne pouvait pas leur parler, et ils comprirent que, dans le sanctuaire, il avait eu une vision. Il leur faisait des signes et restait muet.

Lorsqu'il eut achevé son temps de service liturgique, il repartit chez lui. Quelque temps après, sa femme Élisabeth conçut et elle garda le secret pendant cinq mois. Elle disait : « Voilà ce que le Seigneur a fait pour moi, en ces jours où il a posé son regard pour enlever ma honte parmi les hommes. »`,
    },
  },

  "dec-20": {
    firstReading: {
      reference: "Isaïe 7, 10-14",
      text: `En ces jours-là, le Seigneur parla ainsi au roi Acaz : « Demande pour toi un signe de la part du Seigneur ton Dieu, au fond du séjour des morts ou sur les sommets, là-haut. » Acaz répondit : « Non, je n'en demanderai pas, je ne mettrai pas le Seigneur à l'épreuve. »

Alors Isaïe dit : « Écoutez, maison de David ! Il ne vous suffit donc pas de fatiguer les hommes : il faut encore que vous fatiguiez mon Dieu ! C'est pourquoi le Seigneur lui-même vous donnera un signe : Voici que la vierge est enceinte, elle enfantera un fils, qu'elle appellera Emmanuel, car Dieu est avec nous. »`,
    },
    psalm: {
      reference: "Psaume 23 (24)",
      text: `R/ Qu'il vienne, le Seigneur : c'est lui, le roi de gloire !

Au Seigneur, le monde et sa richesse,
la terre et tous ses habitants !
C'est lui qui l'a fondée sur les mers
et la garde inébranlable sur les flots.

Qui peut gravir la montagne du Seigneur
et se tenir dans le lieu saint ?
L'homme au cœur pur, aux mains innocentes,
qui ne livre pas son âme aux idoles.

Il obtient, du Seigneur, la bénédiction,
et de Dieu son Sauveur, la justice.
Voici le peuple de ceux qui le cherchent,
qui recherchent la face de Dieu !

Portes, levez vos frontons,
élevez-vous, portes éternelles :
qu'il entre, le roi de gloire !
Qui est ce roi de gloire ?
C'est le Seigneur, Dieu de l'univers ;
c'est lui, le roi de gloire.`,
    },
    gospel: {
      reference: "Luc 1, 26-38",
      text: `En ce temps-là, l'ange Gabriel fut envoyé par Dieu dans une ville de Galilée, appelée Nazareth, à une jeune fille vierge, accordée en mariage à un homme de la maison de David, appelé Joseph ; et le nom de la jeune fille était Marie.

L'ange entra chez elle et dit : « Je te salue, Comblée-de-grâce, le Seigneur est avec toi. » À cette parole, elle fut toute bouleversée, et elle se demandait ce que pouvait signifier cette salutation.

L'ange lui dit : « Sois sans crainte, Marie, car tu as trouvé grâce auprès de Dieu. Voici que tu vas concevoir et enfanter un fils ; tu lui donneras le nom de Jésus. Il sera grand, il sera appelé Fils du Très-Haut ; le Seigneur Dieu lui donnera le trône de David son père ; il régnera pour toujours sur la maison de Jacob, et son règne n'aura pas de fin. »

Marie dit à l'ange : « Comment cela va-t-il se faire, puisque je ne connais pas d'homme ? » L'ange lui répondit : « L'Esprit Saint viendra sur toi, et la puissance du Très-Haut te prendra sous son ombre ; c'est pourquoi celui qui va naître sera saint, il sera appelé Fils de Dieu. Or voici que, dans sa vieillesse, Élisabeth, ta parente, a conçu, elle aussi, un fils et en est à son sixième mois, alors qu'on l'appelait la femme stérile. Car rien n'est impossible à Dieu. »

Marie dit alors : « Voici la servante du Seigneur ; que tout m'advienne selon ta parole. » Alors l'ange la quitta.`,
    },
  },

  "dec-21": {
    firstReading: {
      reference: "Cantique des Cantiques 2, 8-14",
      text: `La voix de mon bien-aimé ! C'est lui, il vient… Il bondit sur les montagnes, il court sur les collines, mon bien-aimé, pareil à la gazelle, au faon de la biche. Le voici, il se tient derrière notre mur ; il regarde aux fenêtres, guette par le treillage.

Il parle, mon bien-aimé, il me dit : « Lève-toi, mon amie, ma toute belle, et viens… Car voici que l'hiver est passé, la saison des pluies est finie, elle s'en est allée. Sur notre terre, les fleurs apparaissent, la saison de la taille est arrivée, et l'on entend la voix de la tourterelle. Le figuier donne ses premiers fruits et la vigne fleurie exhale sa bonne odeur. Lève-toi, mon amie, ma toute belle, et viens… Ma colombe, dans les fentes du rocher, dans les retraites escarpées, que je voie ton visage, que j'entende ta voix ! Ta voix est douce, et ton visage, ravissant. »`,
    },
    psalm: {
      reference: "Psaume 32 (33)",
      text: `R/ Criez de joie pour le Seigneur, hommes justes !

Criez de joie pour le Seigneur, hommes justes !
Hommes droits, à vous la louange !
Rendez grâce au Seigneur sur la cithare,
jouez pour lui sur la harpe à dix cordes.

Oui, elle est droite, la parole du Seigneur ;
il est fidèle en tout ce qu'il fait.
Il aime le bon droit et la justice ;
la terre est remplie de son amour.

Heureux le peuple dont le Seigneur est le Dieu,
heureuse la nation qu'il s'est choisie pour domaine !
Que ton amour, Seigneur, soit sur nous
comme notre espoir est en toi !`,
    },
    gospel: {
      reference: "Luc 1, 39-45",
      text: `En ces jours-là, Marie se mit en route et se rendit avec empressement vers la région montagneuse, dans une ville de Judée. Elle entra dans la maison de Zacharie et salua Élisabeth.

Or, quand Élisabeth entendit la salutation de Marie, l'enfant tressaillit en elle. Alors, Élisabeth fut remplie d'Esprit Saint, et s'écria d'une voix forte : « Tu es bénie entre toutes les femmes, et le fruit de tes entrailles est béni. D'où m'est-il donné que la mère de mon Seigneur vienne jusqu'à moi ? Car, lorsque tes paroles de salutation sont parvenues à mes oreilles, l'enfant a tressailli d'allégresse en moi. Heureuse celle qui a cru à l'accomplissement des paroles qui lui furent dites de la part du Seigneur. »`,
    },
  },

  "dec-22": {
    firstReading: {
      reference: "1 Samuel 1, 24-28",
      text: `En ces jours-là, lorsqu'elle eut sevré Samuel, Anne, sa mère, le conduisit à la maison du Seigneur, à Silo ; l'enfant était encore tout jeune. Anne avait pris avec elle un taureau de trois ans, un sac de farine et une outre de vin.

On immola le taureau, et l'on conduisit l'enfant au prêtre Éli. Anne lui dit : « Écoute-moi, mon seigneur ! Aussi vrai que tu es vivant, je suis cette femme qui se tenait ici près de toi pour prier le Seigneur. C'est pour obtenir cet enfant que je priais, et le Seigneur me l'a donné en réponse à ma demande. À mon tour, je le donne au Seigneur pour qu'il en soit toute sa vie. Il est donné au Seigneur. » Et ils se prosternèrent devant le Seigneur.`,
    },
    psalm: {
      reference: "1 Samuel 2, 1.4-8",
      text: `R/ Mon cœur exulte dans le Seigneur ; mon Dieu m'a donné la force.

Mon cœur exulte dans le Seigneur,
mon front s'est relevé grâce à mon Dieu.
Ma bouche a ri de mes ennemis,
car je me réjouis de ton salut.

L'arc des puissants est brisé,
mais les faibles sont ceinturés de force.
Ceux qui étaient rassasiés s'embauchent pour du pain,
et les affamés se reposent ;
la femme stérile enfante sept fois,
et la mère comblée d'enfants se flétrit.

Le Seigneur fait mourir et vivre ;
il fait descendre à l'abîme et en fait remonter.
Le Seigneur rend pauvre et rend riche ;
il abaisse et il élève.
De la poussière il relève le faible,
il retire le pauvre de la cendre
pour qu'il siège parmi les princes
et reçoive un trône de gloire.`,
    },
    gospel: {
      reference: "Luc 1, 46-56",
      text: `En ce temps-là, Marie dit : « Mon âme exalte le Seigneur, exulte mon esprit en Dieu, mon Sauveur ! Il s'est penché sur son humble servante ; désormais tous les âges me diront bienheureuse. Le Puissant fit pour moi des merveilles ; Saint est son nom !

Sa miséricorde s'étend d'âge en âge sur ceux qui le craignent. Déployant la force de son bras, il disperse les superbes. Il renverse les puissants de leurs trônes, il élève les humbles. Il comble de biens les affamés, renvoie les riches les mains vides.

Il relève Israël son serviteur, il se souvient de son amour, de la promesse faite à nos pères, en faveur d'Abraham et sa descendance à jamais. »

Marie resta avec Élisabeth environ trois mois, puis elle s'en retourna chez elle.`,
    },
  },

  "dec-23": {
    firstReading: {
      reference: "Malachie 3, 1-4.23-24",
      text: `Ainsi parle le Seigneur Dieu : « Voici que j'envoie mon messager pour qu'il prépare le chemin devant moi ; et soudain viendra dans son Temple le Seigneur que vous cherchez. Le messager de l'Alliance que vous désirez, le voici qui vient, – dit le Seigneur de l'univers.

Qui pourra soutenir le jour de sa venue ? Qui pourra rester debout lorsqu'il se montrera ? Car il est pareil au feu du fondeur, pareil à la lessive des blanchisseurs. Il s'assiéra pour fondre et purifier : il purifiera les fils de Lévi, il les affinera comme l'or et l'argent ; alors, ils pourront présenter au Seigneur l'offrande en toute justice. Alors, l'offrande de Juda et de Jérusalem sera agréable au Seigneur, comme aux jours d'autrefois, comme aux années lointaines.

Voici que je vais vous envoyer Élie le prophète, avant que vienne le jour du Seigneur, jour grand et redoutable. Il ramènera le cœur des pères vers leurs fils, et le cœur des fils vers leurs pères, pour que je ne vienne pas frapper d'anathème le pays. »`,
    },
    psalm: {
      reference: "Psaume 24 (25)",
      text: `R/ Levez la tête et regardez : votre rédemption approche.

Seigneur, enseigne-moi tes voies,
fais-moi connaître ta route.
Dirige-moi par ta vérité, enseigne-moi,
car tu es le Dieu qui me sauve.

Rappelle-toi, Seigneur, ta tendresse,
ton amour qui est de toujours.
Dans ton amour, ne m'oublie pas,
en raison de ta bonté, Seigneur.

Il est droit, il est bon, le Seigneur,
lui qui montre aux pécheurs le chemin.
Sa droiture dirige les humbles,
il enseigne aux humbles son chemin.`,
    },
    gospel: {
      reference: "Luc 1, 57-66",
      text: `Quand fut accompli le temps où Élisabeth devait enfanter, elle mit au monde un fils. Ses voisins et sa famille apprirent que le Seigneur lui avait montré la grandeur de sa miséricorde, et ils se réjouissaient avec elle.

Le huitième jour, ils vinrent pour la circoncision de l'enfant. Ils voulaient l'appeler Zacharie, du nom de son père. Mais sa mère prit la parole et déclara : « Non, il s'appellera Jean. » On lui dit : « Personne dans ta famille ne porte ce nom-là ! » On demandait par signes au père comment il voulait l'appeler. Il se fit donner une tablette sur laquelle il écrivit : « Jean est son nom. » Et tout le monde en fut étonné.

À l'instant même, sa bouche s'ouvrit, sa langue se délia : il parlait et il bénissait Dieu. La crainte saisit alors tous les gens du voisinage et, dans toute la région montagneuse de Judée, on racontait tous ces événements. Tous ceux qui les apprenaient les méditaient dans leur cœur et disaient : « Que sera donc cet enfant ? » En effet, la main du Seigneur était avec lui.`,
    },
  },

  "dec-24": {
    firstReading: {
      reference: "2 Samuel 7, 1-5.8b-12.14a.16",
      text: `Le roi David habitait enfin dans sa maison, et le Seigneur lui avait accordé la tranquillité en le délivrant de tous les ennemis qui l'entouraient. Le roi dit alors au prophète Nathan : « Vois donc ! J'habite dans une maison de cèdre, et l'arche de Dieu habite sous un abri de toile ! » Nathan dit au roi : « Tout ce que tu as l'intention de faire, fais-le, car le Seigneur est avec toi. »

Mais, cette nuit-là, la parole du Seigneur fut adressée à Nathan : « Va dire à mon serviteur David : Ainsi parle le Seigneur : Est-ce toi qui me bâtiras une maison pour que j'y habite ?

C'est moi qui t'ai pris au pâturage, derrière le troupeau, pour que tu sois le chef de mon peuple Israël. J'ai été avec toi partout où tu es allé, j'ai abattu devant toi tous tes ennemis. Je t'ai fait un nom aussi grand que celui des plus grands de la terre. Je fixerai en ce lieu mon peuple Israël, je l'y planterai, il s'y établira et never ne tremblera plus, et jamais plus les méchants ne l'opprimeront comme autrefois. Quand tes jours seront accomplis et que tu reposeras auprès de tes pères, je susciterai dans ta descendance un successeur, qui naîtra de toi, et je rendrai stable sa royauté.

Moi, je serai pour lui un père ; et lui sera pour moi un fils. Ta maison et ta royauté subsisteront toujours devant moi, ton trône sera stable pour toujours. »`,
    },
    psalm: {
      reference: "Psaume 88 (89)",
      text: `R/ L'amour du Seigneur, sans fin je le chante !

L'amour du Seigneur, sans fin je le chante ;
ta fidélité, je l'annonce d'âge en âge.
Je le dis : C'est un amour bâti pour toujours ;
ta fidélité est plus stable que les cieux.

« Avec mon élu, j'ai fait une alliance,
j'ai juré à David, mon serviteur :
J'établirai ta descendance pour toujours,
je te bâtirai un trône pour la suite des âges. »

« Il me dira : Tu es mon Père,
mon Dieu, mon roc et mon salut !
Sans fin je lui garderai mon amour,
mon alliance avec lui sera fidèle. »`,
    },
    gospel: {
      reference: "Luc 1, 67-79",
      text: `En ce temps-là, Zacharie, le père de Jean, fut rempli d'Esprit Saint et prononça ces paroles prophétiques :

« Béni soit le Seigneur, le Dieu d'Israël, qui visite et rachète son peuple. Il a fait surgir la force qui nous sauve dans la maison de David, son serviteur, comme il l'avait dit par la bouche des saints, par ses prophètes, depuis les temps anciens : salut qui nous arrache à l'ennemi, à la main de tous nos oppresseurs, amour qu'il montre envers nos pères, mémoire de son alliance sainte, serment juré à notre père Abraham de nous rendre sans crainte, afin que, délivrés de la main des ennemis, nous le servions dans la justice et la sainteté, en sa présence, tout au long de nos jours.

Et toi, petit enfant, tu seras appelé prophète du Très-Haut ; tu marcheras devant, à la face du Seigneur, et tu prépareras ses chemins pour donner à son peuple de connaître le salut par la rémission de ses péchés, grâce à la tendresse, à l'amour de notre Dieu, quand nous visite l'astre d'en haut, pour illuminer ceux qui habitent les ténèbres et l'ombre de la mort, pour conduire nos pas au chemin de la paix. »`,
    },
  },

  // ===== 4ème SEMAINE DE L'AVENT =====

  "advent-4-lun": {
    firstReading: {
      reference: "Isaïe 7, 10-14",
      text: `En ces jours-là, le Seigneur parla ainsi au roi Acaz : « Demande pour toi un signe de la part du Seigneur ton Dieu, au fond du séjour des morts ou sur les sommets, là-haut. » Acaz répondit : « Non, je n'en demanderai pas, je ne mettrai pas le Seigneur à l'épreuve. »

Alors Isaïe dit : « Écoutez, maison de David ! Il ne vous suffit donc pas de fatiguer les hommes : il faut encore que vous fatiguiez mon Dieu ! C'est pourquoi le Seigneur lui-même vous donnera un signe : Voici que la vierge est enceinte, elle enfantera un fils, qu'elle appellera Emmanuel, car Dieu est avec nous. »`,
    },
    psalm: {
      reference: "Psaume 23 (24)",
      text: `R/ Qu'il vienne, le Seigneur : c'est lui, le roi de gloire !

Au Seigneur, le monde et sa richesse,
la terre et tous ses habitants !
C'est lui qui l'a fondée sur les mers
et la garde inébranlable sur les flots.

Qui peut gravir la montagne du Seigneur
et se tenir dans le lieu saint ?
L'homme au cœur pur, aux mains innocentes,
qui ne livre pas son âme aux idoles.

Portes, levez vos frontons,
élevez-vous, portes éternelles :
qu'il entre, le roi de gloire !
Qui est ce roi de gloire ?
C'est le Seigneur, Dieu de l'univers ;
c'est lui, le roi de gloire.`,
    },
    gospel: {
      reference: "Luc 1, 26-38",
      text: `En ce temps-là, l'ange Gabriel fut envoyé par Dieu dans une ville de Galilée, appelée Nazareth, à une jeune fille vierge, accordée en mariage à un homme de la maison de David, appelé Joseph ; et le nom de la jeune fille était Marie.

L'ange entra chez elle et dit : « Je te salue, Comblée-de-grâce, le Seigneur est avec toi. » À cette parole, elle fut toute bouleversée, et elle se demandait ce que pouvait signifier cette salutation.

L'ange lui dit : « Sois sans crainte, Marie, car tu as trouvé grâce auprès de Dieu. Voici que tu vas concevoir et enfanter un fils ; tu lui donneras le nom de Jésus. Il sera grand, il sera appelé Fils du Très-Haut ; le Seigneur Dieu lui donnera le trône de David son père ; il régnera pour toujours sur la maison de Jacob, et son règne n'aura pas de fin. »

Marie dit à l'ange : « Comment cela va-t-il se faire, puisque je ne connais pas d'homme ? » L'ange lui répondit : « L'Esprit Saint viendra sur toi, et la puissance du Très-Haut te prendra sous son ombre ; c'est pourquoi celui qui va naître sera saint, il sera appelé Fils de Dieu. Or voici que, dans sa vieillesse, Élisabeth, ta parente, a conçu, elle aussi, un fils et en est à son sixième mois, alors qu'on l'appelait la femme stérile. Car rien n'est impossible à Dieu. »

Marie dit alors : « Voici la servante du Seigneur ; que tout m'advienne selon ta parole. » Alors l'ange la quitta.`,
    },
  },

  "advent-4-mar": {
    firstReading: {
      reference: "Cantique des Cantiques 2, 8-14",
      text: `La voix de mon bien-aimé ! C'est lui, il vient… Il bondit sur les montagnes, il court sur les collines, mon bien-aimé, pareil à la gazelle, au faon de la biche. Le voici, il se tient derrière notre mur ; il regarde aux fenêtres, guette par le treillage.

Il parle, mon bien-aimé, il me dit : « Lève-toi, mon amie, ma toute belle, et viens… Car voici que l'hiver est passé, la saison des pluies est finie, elle s'en est allée. Sur notre terre, les fleurs apparaissent, la saison de la taille est arrivée, et l'on entend la voix de la tourterelle. Le figuier donne ses premiers fruits et la vigne fleurie exhale sa bonne odeur. Lève-toi, mon amie, ma toute belle, et viens… Ma colombe, dans les fentes du rocher, dans les retraites escarpées, que je voie ton visage, que j'entende ta voix ! Ta voix est douce, et ton visage, ravissant. »`,
    },
    psalm: {
      reference: "Psaume 32 (33)",
      text: `R/ Criez de joie pour le Seigneur, hommes justes !

Criez de joie pour le Seigneur, hommes justes !
Hommes droits, à vous la louange !
Rendez grâce au Seigneur sur la cithare,
jouez pour lui sur la harpe à dix cordes.

Oui, elle est droite, la parole du Seigneur ;
il est fidèle en tout ce qu'il fait.
Il aime le bon droit et la justice ;
la terre est remplie de son amour.

Heureux le peuple dont le Seigneur est le Dieu,
heureuse la nation qu'il s'est choisie pour domaine !
Que ton amour, Seigneur, soit sur nous
comme notre espoir est en toi !`,
    },
    gospel: {
      reference: "Luc 1, 39-45",
      text: `En ces jours-là, Marie se mit en route et se rendit avec empressement vers la région montagneuse, dans une ville de Judée. Elle entra dans la maison de Zacharie et salua Élisabeth.

Or, quand Élisabeth entendit la salutation de Marie, l'enfant tressaillit en elle. Alors, Élisabeth fut remplie d'Esprit Saint, et s'écria d'une voix forte : « Tu es bénie entre toutes les femmes, et le fruit de tes entrailles est béni. D'où m'est-il donné que la mère de mon Seigneur vienne jusqu'à moi ? Car, lorsque tes paroles de salutation sont parvenues à mes oreilles, l'enfant a tressailli d'allégresse en moi. Heureuse celle qui a cru à l'accomplissement des paroles qui lui furent dites de la part du Seigneur. »`,
    },
  },

  "advent-4-mer": {
    firstReading: {
      reference: "1 Samuel 1, 24-28",
      text: `En ces jours-là, lorsqu'elle eut sevré Samuel, Anne, sa mère, le conduisit à la maison du Seigneur, à Silo ; l'enfant était encore tout jeune. Anne avait pris avec elle un taureau de trois ans, un sac de farine et une outre de vin.

On immola le taureau, et l'on conduisit l'enfant au prêtre Éli. Anne lui dit : « Écoute-moi, mon seigneur ! Aussi vrai que tu es vivant, je suis cette femme qui se tenait ici près de toi pour prier le Seigneur. C'est pour obtenir cet enfant que je priais, et le Seigneur me l'a donné en réponse à ma demande. À mon tour, je le donne au Seigneur pour qu'il en soit toute sa vie. Il est donné au Seigneur. » Et ils se prosternèrent devant le Seigneur.`,
    },
    psalm: {
      reference: "1 Samuel 2, 1.4-8",
      text: `R/ Mon cœur exulte dans le Seigneur ; mon Dieu m'a donné la force.

Mon cœur exulte dans le Seigneur,
mon front s'est relevé grâce à mon Dieu.
Ma bouche a ri de mes ennemis,
car je me réjouis de ton salut.

L'arc des puissants est brisé,
mais les faibles sont ceinturés de force.
Ceux qui étaient rassasiés s'embauchent pour du pain,
et les affamés se reposent.

Le Seigneur fait mourir et vivre ;
il fait descendre à l'abîme et en fait remonter.
Le Seigneur rend pauvre et rend riche ;
il abaisse et il élève.
De la poussière il relève le faible,
il retire le pauvre de la cendre
pour qu'il siège parmi les princes
et reçoive un trône de gloire.`,
    },
    gospel: {
      reference: "Luc 1, 46-56",
      text: `En ce temps-là, Marie dit : « Mon âme exalte le Seigneur, exulte mon esprit en Dieu, mon Sauveur ! Il s'est penché sur son humble servante ; désormais tous les âges me diront bienheureuse. Le Puissant fit pour moi des merveilles ; Saint est son nom !

Sa miséricorde s'étend d'âge en âge sur ceux qui le craignent. Déployant la force de son bras, il disperse les superbes. Il renverse les puissants de leurs trônes, il élève les humbles. Il comble de biens les affamés, renvoie les riches les mains vides.

Il relève Israël son serviteur, il se souvient de son amour, de la promesse faite à nos pères, en faveur d'Abraham et sa descendance à jamais. »

Marie resta avec Élisabeth environ trois mois, puis elle s'en retourna chez elle.`,
    },
  },

  "advent-4-jeu": {
    firstReading: {
      reference: "Malachie 3, 1-4.23-24",
      text: `Ainsi parle le Seigneur Dieu : « Voici que j'envoie mon messager pour qu'il prépare le chemin devant moi ; et soudain viendra dans son Temple le Seigneur que vous cherchez. Le messager de l'Alliance que vous désirez, le voici qui vient, – dit le Seigneur de l'univers.

Qui pourra soutenir le jour de sa venue ? Qui pourra rester debout lorsqu'il se montrera ? Car il est pareil au feu du fondeur, pareil à la lessive des blanchisseurs. Il s'assiéra pour fondre et purifier : il purifiera les fils de Lévi, il les affinera comme l'or et l'argent ; alors, ils pourront présenter au Seigneur l'offrande en toute justice. Alors, l'offrande de Juda et de Jérusalem sera agréable au Seigneur, comme aux jours d'autrefois, comme aux années lointaines.

Voici que je vais vous envoyer Élie le prophète, avant que vienne le jour du Seigneur, jour grand et redoutable. Il ramènera le cœur des pères vers leurs fils, et le cœur des fils vers leurs pères, pour que je ne vienne pas frapper d'anathème le pays. »`,
    },
    psalm: {
      reference: "Psaume 24 (25)",
      text: `R/ Levez la tête et regardez : votre rédemption approche.

Seigneur, enseigne-moi tes voies,
fais-moi connaître ta route.
Dirige-moi par ta vérité, enseigne-moi,
car tu es le Dieu qui me sauve.

Rappelle-toi, Seigneur, ta tendresse,
ton amour qui est de toujours.
Dans ton amour, ne m'oublie pas,
en raison de ta bonté, Seigneur.

Il est droit, il est bon, le Seigneur,
lui qui montre aux pécheurs le chemin.
Sa droiture dirige les humbles,
il enseigne aux humbles son chemin.`,
    },
    gospel: {
      reference: "Luc 1, 57-66",
      text: `Quand fut accompli le temps où Élisabeth devait enfanter, elle mit au monde un fils. Ses voisins et sa famille apprirent que le Seigneur lui avait montré la grandeur de sa miséricorde, et ils se réjouissaient avec elle.

Le huitième jour, ils vinrent pour la circoncision de l'enfant. Ils voulaient l'appeler Zacharie, du nom de son père. Mais sa mère prit la parole et déclara : « Non, il s'appellera Jean. » On lui dit : « Personne dans ta famille ne porte ce nom-là ! » On demandait par signes au père comment il voulait l'appeler. Il se fit donner une tablette sur laquelle il écrivit : « Jean est son nom. » Et tout le monde en fut étonné.

À l'instant même, sa bouche s'ouvrit, sa langue se délia : il parlait et il bénissait Dieu. La crainte saisit alors tous les gens du voisinage et, dans toute la région montagneuse de Judée, on racontait tous ces événements. Tous ceux qui les apprenaient les méditaient dans leur cœur et disaient : « Que sera donc cet enfant ? » En effet, la main du Seigneur était avec lui.`,
    },
  },

  "advent-4-ven": {
    firstReading: {
      reference: "2 Samuel 7, 1-5.8b-12.14a.16",
      text: `Le roi David habitait enfin dans sa maison, et le Seigneur lui avait accordé la tranquillité en le délivrant de tous les ennemis qui l'entouraient. Le roi dit alors au prophète Nathan : « Vois donc ! J'habite dans une maison de cèdre, et l'arche de Dieu habite sous un abri de toile ! » Nathan dit au roi : « Tout ce que tu as l'intention de faire, fais-le, car le Seigneur est avec toi. »

Mais, cette nuit-là, la parole du Seigneur fut adressée à Nathan : « Va dire à mon serviteur David : Ainsi parle le Seigneur : Est-ce toi qui me bâtiras une maison pour que j'y habite ?

C'est moi qui t'ai pris au pâturage, derrière le troupeau, pour que tu sois le chef de mon peuple Israël. J'ai été avec toi partout où tu es allé, j'ai abattu devant toi tous tes ennemis. Quand tes jours seront accomplis et que tu reposeras auprès de tes pères, je susciterai dans ta descendance un successeur, qui naîtra de toi, et je rendrai stable sa royauté.

Moi, je serai pour lui un père ; et lui sera pour moi un fils. Ta maison et ta royauté subsisteront toujours devant moi, ton trône sera stable pour toujours. »`,
    },
    psalm: {
      reference: "Psaume 88 (89)",
      text: `R/ L'amour du Seigneur, sans fin je le chante !

L'amour du Seigneur, sans fin je le chante ;
ta fidélité, je l'annonce d'âge en âge.
Je le dis : C'est un amour bâti pour toujours ;
ta fidélité est plus stable que les cieux.

« Avec mon élu, j'ai fait une alliance,
j'ai juré à David, mon serviteur :
J'établirai ta descendance pour toujours,
je te bâtirai un trône pour la suite des âges. »

« Il me dira : Tu es mon Père,
mon Dieu, mon roc et mon salut !
Sans fin je lui garderai mon amour,
mon alliance avec lui sera fidèle. »`,
    },
    gospel: {
      reference: "Luc 1, 67-79",
      text: `En ce temps-là, Zacharie, le père de Jean, fut rempli d'Esprit Saint et prononça ces paroles prophétiques :

« Béni soit le Seigneur, le Dieu d'Israël, qui visite et rachète son peuple. Il a fait surgir la force qui nous sauve dans la maison de David, son serviteur, comme il l'avait dit par la bouche des saints, par ses prophètes, depuis les temps anciens : salut qui nous arrache à l'ennemi, à la main de tous nos oppresseurs, amour qu'il montre envers nos pères, mémoire de son alliance sainte, serment juré à notre père Abraham de nous rendre sans crainte, afin que, délivrés de la main des ennemis, nous le servions dans la justice et la sainteté, en sa présence, tout au long de nos jours.

Et toi, petit enfant, tu seras appelé prophète du Très-Haut ; tu marcheras devant, à la face du Seigneur, et tu prépareras ses chemins pour donner à son peuple de connaître le salut par la rémission de ses péchés, grâce à la tendresse, à l'amour de notre Dieu, quand nous visite l'astre d'en haut, pour illuminer ceux qui habitent les ténèbres et l'ombre de la mort, pour conduire nos pas au chemin de la paix. »`,
    },
  },
};

// ===================== FÊTES FIXES MAJEURES =====================

export const feastReadings: Record<string, ReadingSet> = {
  "feast-01-01": {
    firstReading: {
      reference: "Nombres 6, 22-27",
      text: `Le Seigneur parla à Moïse. Il dit : « Parle à Aaron et à ses fils. Tu leur diras : Voici en quels termes vous bénirez les fils d'Israël :

"Que le Seigneur te bénisse et te garde !
Que le Seigneur fasse briller sur toi son visage,
qu'il te prenne en grâce !
Que le Seigneur tourne vers toi son visage,
qu'il t'apporte la paix !"

Ils invoqueront ainsi mon nom sur les fils d'Israël, et moi, je les bénirai. »`,
    },
    psalm: {
      reference: "Psaume 66 (67)",
      text: `R/ Que Dieu nous prenne en grâce et nous bénisse !

Que Dieu nous prenne en grâce et nous bénisse,
que son visage s'illumine pour nous ;
et ton chemin sera connu sur la terre,
ton salut, parmi toutes les nations.

Que les nations chantent leur joie,
car tu gouvernes le monde avec justice ;
tu gouvernes les peuples avec droiture,
sur la terre, tu conduis les nations.

La terre a donné son fruit ;
Dieu, notre Dieu, nous bénit.
Que Dieu nous bénisse,
et que la terre tout entière l'adore !`,
    },
    secondReading: {
      reference: "Galates 4, 4-7",
      text: `Frères, lorsqu'est venue la plénitude des temps, Dieu a envoyé son Fils, né d'une femme et soumis à la loi de Moïse, afin de racheter ceux qui étaient soumis à la Loi et pour que nous soyons adoptés comme fils.

Et voici la preuve que vous êtes des fils : Dieu a envoyé l'Esprit de son Fils dans nos cœurs, et cet Esprit crie « Abba ! », c'est-à-dire : Père ! Ainsi tu n'es plus esclave, mais fils, et puisque tu es fils, tu es aussi héritier : c'est l'œuvre de Dieu.`,
    },
    gospel: {
      reference: "Luc 2, 16-21",
      text: `En ce temps-là, les bergers se hâtèrent d'aller à Bethléem, et ils découvrirent Marie et Joseph, avec le nouveau-né couché dans la mangeoire. Après avoir vu, ils racontèrent ce qui leur avait été annoncé au sujet de cet enfant. Et tous ceux qui entendirent s'étonnaient de ce que leur racontaient les bergers.

Marie, cependant, retenait tous ces événements et les méditait dans son cœur. Les bergers repartirent ; ils glorifiaient et louaient Dieu pour tout ce qu'ils avaient entendu et vu, selon ce qui leur avait été annoncé.

Quand fut arrivé le huitième jour, celui de la circoncision, l'enfant reçut le nom de Jésus, le nom que l'ange lui avait donné avant sa conception.`,
    },
  },

  "feast-01-06": {
    firstReading: {
      reference: "Isaïe 60, 1-6",
      text: `Debout, Jérusalem, resplendis ! Elle est venue, ta lumière, et la gloire du Seigneur s'est levée sur toi. Voici que les ténèbres couvrent la terre, et la nuée obscure couvre les peuples. Mais sur toi se lève le Seigneur, sur toi sa gloire apparaît.

Les nations marcheront vers ta lumière, et les rois, vers la clarté de ton aurore. Lève les yeux alentour, et regarde : tous, ils se rassemblent, ils viennent vers toi ; tes fils arrivent de loin, et tes filles sont portées sur la hanche.

Tu seras radieuse, ton cœur frémira et se dilatera. Les trésors d'au-delà des mers afflueront vers toi, vers toi viendront les richesses des nations. En grand nombre, des chameaux t'envahiront, de jeunes chameaux de Madiane et d'Épha. Tous les gens de Saba viendront, apportant l'or et l'encens ; ils annonceront les exploits du Seigneur.`,
    },
    psalm: {
      reference: "Psaume 71 (72)",
      text: `R/ Toutes les nations, Seigneur, se prosterneront devant toi.

Dieu, donne au roi tes pouvoirs,
à ce fils de roi ta justice.
Qu'il gouverne ton peuple avec justice,
qu'il fasse droit aux malheureux !

En ces jours-là, fleurira la justice,
grande paix jusqu'à la fin des lunes !
Qu'il domine de la mer à la mer,
et du Fleuve jusqu'au bout de la terre !

Les rois de Tarsis et des Îles apporteront des présents.
Les rois de Saba et de Seba feront leur offrande.
Tous les rois se prosterneront devant lui,
tous les pays le serviront.

Il délivrera le pauvre qui appelle
et le malheureux sans recours.
Il aura souci du faible et du pauvre,
du pauvre dont il sauve la vie.`,
    },
    secondReading: {
      reference: "Éphésiens 3, 2-3a.5-6",
      text: `Frères, vous avez appris, je pense, en quoi consiste la grâce que Dieu m'a donnée pour vous : par révélation, il m'a fait connaître le mystère du Christ.

Ce mystère n'avait pas été porté à la connaissance des hommes des générations passées, comme il a été révélé maintenant à ses saints Apôtres et aux prophètes, dans l'Esprit. Ce mystère, c'est que toutes les nations sont associées au même héritage, au même corps, au partage de la même promesse, dans le Christ Jésus, par l'annonce de l'Évangile.`,
    },
    gospel: {
      reference: "Matthieu 2, 1-12",
      text: `Jésus était né à Bethléem en Judée, au temps du roi Hérode le Grand. Or, voici que des mages venus d'Orient arrivèrent à Jérusalem et demandèrent : « Où est le roi des Juifs qui vient de naître ? Nous avons vu son étoile à l'orient et nous sommes venus nous prosterner devant lui. »

En apprenant cela, le roi Hérode fut bouleversé, et tout Jérusalem avec lui. Il réunit tous les grands prêtres et les scribes du peuple, pour leur demander où devait naître le Christ. Ils lui répondirent : « À Bethléem en Judée, car voici ce qui est écrit par le prophète : Et toi, Bethléem, terre de Juda, tu n'es certes pas le dernier parmi les chefs-lieux de Juda, car de toi sortira un chef, qui sera le berger de mon peuple Israël. »

Alors Hérode convoqua les mages en secret pour leur faire préciser à quelle date l'étoile était apparue ; puis il les envoya à Bethléem, en leur disant : « Allez vous renseigner avec précision sur l'enfant. Et quand vous l'aurez trouvé, venez me l'annoncer pour que j'aille, moi aussi, me prosterner devant lui. »

Après avoir entendu le roi, ils partirent. Et voici que l'étoile qu'ils avaient vue à l'orient les précédait, jusqu'à ce qu'elle vienne s'arrêter au-dessus de l'endroit où se trouvait l'enfant. Quand ils virent l'étoile, ils se réjouirent d'une très grande joie. Ils entrèrent dans la maison, ils virent l'enfant avec Marie sa mère ; et, tombant à ses pieds, ils se prosternèrent devant lui. Ils ouvrirent leurs coffrets, et lui offrirent leurs présents : de l'or, de l'encens et de la myrrhe.

Mais, avertis en songe de ne pas retourner chez Hérode, ils regagnèrent leur pays par un autre chemin.`,
    },
  },

  "feast-02-02": {
    firstReading: {
      reference: "Malachie 3, 1-4",
      text: `Ainsi parle le Seigneur Dieu : « Voici que j'envoie mon messager pour qu'il prépare le chemin devant moi ; et soudain viendra dans son Temple le Seigneur que vous cherchez. Le messager de l'Alliance que vous désirez, le voici qui vient, – dit le Seigneur de l'univers.

Qui pourra soutenir le jour de sa venue ? Qui pourra rester debout lorsqu'il se montrera ? Car il est pareil au feu du fondeur, pareil à la lessive des blanchisseurs. Il s'assiéra pour fondre et purifier l'argent ; il purifiera les fils de Lévi, il les affinera comme l'or et l'argent ; alors, ils pourront présenter au Seigneur l'offrande en toute justice. Alors, l'offrande de Juda et de Jérusalem sera agréable au Seigneur, comme aux jours d'autrefois, comme aux années lointaines. »`,
    },
    psalm: {
      reference: "Psaume 23 (24)",
      text: `R/ C'est le Seigneur, Dieu de l'univers ; c'est lui, le roi de gloire.

Au Seigneur, le monde et sa richesse,
la terre et tous ses habitants !
C'est lui qui l'a fondée sur les mers
et la garde inébranlable sur les flots.

Qui peut gravir la montagne du Seigneur
et se tenir dans le lieu saint ?
L'homme au cœur pur, aux mains innocentes,
qui ne livre pas son âme aux idoles.

Portes, levez vos frontons,
élevez-vous, portes éternelles :
qu'il entre, le roi de gloire !
Qui est ce roi de gloire ?
C'est le Seigneur, le fort, le vaillant,
le Seigneur, le vaillant des combats.

Portes, levez vos frontons,
élevez-vous, portes éternelles :
qu'il entre, le roi de gloire !
Qui donc est ce roi de gloire ?
C'est le Seigneur, Dieu de l'univers ;
c'est lui, le roi de gloire.`,
    },
    secondReading: {
      reference: "Hébreux 2, 14-18",
      text: `Puisque les enfants des hommes ont en commun le sang et la chair, Jésus a partagé cette même condition humaine. De cette façon, par sa mort, il a pu réduire à l'impuissance celui qui possédait le pouvoir de la mort, c'est-à-dire le diable, et il a rendu libres tous ceux qui, par crainte de la mort, passaient toute leur vie dans une situation d'esclaves.

Car ce n'est pas des anges qu'il prend soin – Loss c'est bien de la descendance d'Abraham. Il lui fallait donc se rendre en tout semblable à ses frères, pour devenir un grand prêtre miséricordieux et digne de foi pour les relations avec Dieu, afin d'enlever les péchés du peuple. Étant lui-même passé par l'épreuve et la souffrance, il est capable de porter secours à ceux qui subissent une épreuve.`,
    },
    gospel: {
      reference: "Luc 2, 22-40",
      text: `Quand fut accompli le temps prescrit par la loi de Moïse pour la purification, les parents de Jésus l'amenèrent à Jérusalem pour le présenter au Seigneur, selon ce qui est écrit dans la Loi : Tout premier-né de sexe masculin sera consacré au Seigneur. Ils venaient aussi offrir le sacrifice prescrit par la loi du Seigneur : un couple de tourterelles ou deux petites colombes.

Or, il y avait à Jérusalem un homme appelé Syméon. C'était un homme juste et religieux, qui attendait la consolation d'Israël, et l'Esprit Saint était sur lui. Il avait été divinement averti par l'Esprit Saint qu'il ne verrait pas la mort avant d'avoir vu le Christ, le Messie du Seigneur. Sous l'action de l'Esprit, Syméon vint au Temple. Au moment où les parents présentaient l'enfant Jésus pour se conformer au rite de la Loi qui le concernait, Syméon reçut l'enfant dans ses bras, et il bénit Dieu en disant :

« Maintenant, ô Maître souverain, tu peux laisser ton serviteur s'en aller en paix, selon ta parole. Car mes yeux ont vu le salut que tu préparais à la face des peuples : lumière qui se révèle aux nations et donne gloire à ton peuple Israël. »

Le père et la mère de l'enfant s'étonnaient de ce qui était dit de lui. Syméon les bénit, puis il dit à Marie, sa mère : « Voici que cet enfant provoquera la chute et le relèvement de beaucoup en Israël. Il sera un signe de contradiction – et toi, ton âme sera traversée d'un glaive – Loss ainsi seront dévoilées les pensées qui viennent du cœur d'un grand nombre. »

Il y avait aussi une femme prophète, Anne, fille de Phanuel, de la tribu d'Aser. Elle était très avancée en âge ; après sept ans de mariage, demeurée veuve, elle était arrivée à l'âge de quatre-vingt-quatre ans. Elle ne s'éloignait pas du Temple, servant Dieu jour et nuit dans le jeûne et la prière. Elle survint à cette heure même, rendant grâce à Dieu et parlant de l'enfant à tous ceux qui attendaient la délivrance de Jérusalem.

Lorsqu'ils eurent achevé tout ce que prescrivait la loi du Seigneur, ils retournèrent en Galilée, dans leur ville de Nazareth. L'enfant, lui, grandissait et se fortifiait, rempli de sagesse, et la grâce de Dieu était sur lui.`,
    },
  },

  "feast-03-19": {
    firstReading: {
      reference: "2 Samuel 7, 4-5a.12-14a.16",
      text: `Cette nuit-là, la parole du Seigneur fut adressée au prophète Nathan : « Va dire à mon serviteur David : Quand tes jours seront accomplis et que tu reposeras auprès de tes pères, je susciterai dans ta descendance un successeur, qui naîtra de toi, et je rendrai stable sa royauté. C'est lui qui bâtira une maison pour mon nom, et je rendrai stable pour toujours son trône royal.

Moi, je serai pour lui un père ; et lui sera pour moi un fils. Ta maison et ta royauté subsisteront toujours devant moi, ton trône sera stable pour toujours. »`,
    },
    psalm: {
      reference: "Psaume 88 (89)",
      text: `R/ Sa descendance subsistera toujours.

L'amour du Seigneur, sans fin je le chante ;
ta fidélité, je l'annonce d'âge en âge.
Je le dis : C'est un amour bâti pour toujours ;
ta fidélité est plus stable que les cieux.

« Avec mon élu, j'ai fait une alliance,
j'ai juré à David, mon serviteur :
J'établirai ta descendance pour toujours,
je te bâtirai un trône pour la suite des âges. »

« Il me dira : Tu es mon Père,
mon Dieu, mon roc et mon salut !
Sans fin je lui garderai mon amour,
mon alliance avec lui sera fidèle.
Je lui donnerai un premier-né,
plus haut que les rois de la terre. »`,
    },
    secondReading: {
      reference: "Romains 4, 13.16-18.22",
      text: `Frères, ce n'est pas par la Loi que la promesse de recevoir le monde en héritage a été faite à Abraham et à sa descendance, mais par la justice de la foi.

Voilà pourquoi on devient héritier par la foi : c'est une grâce, et la promesse reste ferme pour tous les descendants, non pour ceux qui se rattachent à la Loi seulement, mais pour ceux qui se rattachent aussi à la foi d'Abraham, lui qui est notre père à tous. C'est bien ce qui est écrit : J'ai fait de toi le père d'un grand nombre de nations.

Il est notre père devant Dieu en qui il a cru, Dieu qui donne la vie aux morts et qui appelle à l'existence ce qui n'existe pas. Espérant contre toute espérance, il a cru ; ainsi est-il devenu le père d'un grand nombre de nations, selon cette parole : Telle sera ta descendance. Et voilà pourquoi il lui fut accordé d'être juste.`,
    },
    gospel: {
      reference: "Matthieu 1, 16.18-21.24a",
      text: `Jacob engendra Joseph, l'époux de Marie, de laquelle fut engendré Jésus, que l'on appelle Christ.

Or, voici comment fut engendré Jésus Christ : Marie, sa mère, avait été accordée en mariage à Joseph ; avant qu'ils aient habité ensemble, elle fut enceinte par l'action de l'Esprit Saint. Joseph, son époux, qui était un homme juste, et ne voulait pas la dénoncer publiquement, décida de la renvoyer en secret.

Comme il avait formé ce projet, voici que l'ange du Seigneur lui apparut en songe et lui dit : « Joseph, fils de David, ne crains pas de prendre chez toi Marie, ton épouse, puisque l'enfant qui est engendré en elle vient de l'Esprit Saint ; elle enfantera un fils, et tu lui donneras le nom de Jésus (c'est-à-dire : Le-Seigneur-sauve), car c'est lui qui sauvera son peuple de ses péchés. »

Quand Joseph se réveilla, il fit ce que l'ange du Seigneur lui avait prescrit.`,
    },
  },

  "feast-03-25": {
    firstReading: {
      reference: "Isaïe 7, 10-14 ; 8, 10",
      text: `En ces jours-là, le Seigneur parla ainsi au roi Acaz : « Demande pour toi un signe de la part du Seigneur ton Dieu, au fond du séjour des morts ou sur les sommets, là-haut. » Acaz répondit : « Non, je n'en demanderai pas, je ne mettrai pas le Seigneur à l'épreuve. »

Alors Isaïe dit : « Écoutez, maison de David ! Il ne vous suffit donc pas de fatiguer les hommes : il faut encore que vous fatiguiez mon Dieu ! C'est pourquoi le Seigneur lui-même vous donnera un signe : Voici que la vierge est enceinte, elle enfantera un fils, qu'elle appellera Emmanuel, car Dieu est avec nous. »`,
    },
    psalm: {
      reference: "Psaume 39 (40)",
      text: `R/ Me voici, Seigneur, je viens faire ta volonté.

Tu ne voulais ni offrande ni sacrifice,
tu as ouvert mes oreilles ;
tu ne demandais ni holocauste ni victime,
alors j'ai dit : « Voici, je viens. »

« Dans le livre, est écrit pour moi
ce que tu veux que je fasse.
Mon Dieu, voilà ce que j'aime :
ta loi me tient aux entrailles ! »

J'ai annoncé ta justice
dans la grande assemblée ;
vois, je ne retiens pas mes lèvres,
Seigneur, tu le sais.

Je n'ai pas enfoui ta justice au fond de mon cœur,
je n'ai pas caché ta fidélité, ton salut ;
j'ai dit ton amour et ta vérité
à la grande assemblée.`,
    },
    secondReading: {
      reference: "Hébreux 10, 4-10",
      text: `Frères, il est impossible que du sang de taureaux et de boucs enlève les péchés. Aussi, en entrant dans le monde, le Christ dit : Tu n'as voulu ni sacrifice ni offrande, mais tu m'as formé un corps. Tu n'as pas agréé les holocaustes ni les sacrifices pour le péché ; alors, j'ai dit : Me voici, je suis venu, mon Dieu, pour faire ta volonté, ainsi qu'il est écrit de moi dans le Livre.

Le Christ commence donc par dire : Tu n'as pas voulu ni agréé les sacrifices et les offrandes, les holocaustes et les sacrifices pour le péché, et pourtant la Loi les prescrit. Ensuite, il déclare : Me voici, je suis venu pour faire ta volonté. Ainsi, il supprime le premier état de choses pour établir le second. Et c'est grâce à cette volonté que nous sommes sanctifiés, par l'offrande que Jésus Christ a faite de son corps, une fois pour toutes.`,
    },
    gospel: {
      reference: "Luc 1, 26-38",
      text: `En ce temps-là, l'ange Gabriel fut envoyé par Dieu dans une ville de Galilée, appelée Nazareth, à une jeune fille vierge, accordée en mariage à un homme de la maison de David, appelé Joseph ; et le nom de la jeune fille était Marie.

L'ange entra chez elle et dit : « Je te salue, Comblée-de-grâce, le Seigneur est avec toi. » À cette parole, elle fut toute bouleversée, et elle se demandait ce que pouvait signifier cette salutation.

L'ange lui dit : « Sois sans crainte, Marie, car tu as trouvé grâce auprès de Dieu. Voici que tu vas concevoir et enfanter un fils ; tu lui donneras le nom de Jésus. Il sera grand, il sera appelé Fils du Très-Haut ; le Seigneur Dieu lui donnera le trône de David son père ; il régnera pour toujours sur la maison de Jacob, et son règne n'aura pas de fin. »

Marie dit à l'ange : « Comment cela va-t-il se faire, puisque je ne connais pas d'homme ? » L'ange lui répondit : « L'Esprit Saint viendra sur toi, et la puissance du Très-Haut te prendra sous son ombre ; c'est pourquoi celui qui va naître sera saint, il sera appelé Fils de Dieu. Or voici que, dans sa vieillesse, Élisabeth, ta parente, a conçu, elle aussi, un fils et en est à son sixième mois, alors qu'on l'appelait la femme stérile. Car rien n'est impossible à Dieu. »

Marie dit alors : « Voici la servante du Seigneur ; que tout m'advienne selon ta parole. » Alors l'ange la quitta.`,
    },
  },

  "feast-06-24": {
    firstReading: {
      reference: "Isaïe 49, 1-6",
      text: `Écoutez-moi, îles lointaines ! Peuples éloignés, soyez attentifs ! J'étais encore dans le sein maternel quand le Seigneur m'a appelé ; j'étais encore dans les entrailles de ma mère quand il a prononcé mon nom. Il a fait de ma bouche une épée tranchante, il m'a protégé par l'ombre de sa main ; il a fait de moi une flèche acérée, il m'a caché dans son carquois.

Il m'a dit : « Tu es mon serviteur, Israël, en toi je manifesterai ma splendeur. » Et moi, je disais : « Je me suis fatigué pour rien, c'est pour le néant, c'est en pure perte que j'ai usé mes forces. » Et pourtant, mon droit subsistait auprès du Seigneur, ma récompense, auprès de mon Dieu.

Maintenant le Seigneur parle, lui qui m'a façonné dès le sein de ma mère pour que je sois son serviteur, que je lui ramène Jacob, que je lui rassemble Israël. Oui, j'ai de la valeur aux yeux du Seigneur, c'est mon Dieu qui est ma force.

Et il dit : « C'est trop peu que tu sois mon serviteur pour relever les tribus de Jacob, ramener les rescapés d'Israël : je fais de toi la lumière des nations, pour que mon salut parvienne jusqu'aux extrémités de la terre. »`,
    },
    psalm: {
      reference: "Psaume 138 (139)",
      text: `R/ Je te rends grâce, ô mon Dieu, pour tant de merveilles.

Tu me scrutes, Seigneur, et tu sais !
Tu sais quand je m'assieds, quand je me lève ;
de très loin, tu pénètres mes pensées.
Que je marche ou me repose, tu le vois,
tous mes chemins te sont familiers.

C'est toi qui as créé mes reins,
qui m'as tissé dans le sein de ma mère.
Je reconnais devant toi le prodige,
l'être étonnant que je suis :
étonnantes sont tes œuvres,
toute mon âme le sait.

Mes os n'étaient pas cachés pour toi
quand j'étais façonné dans le secret,
modelé aux profondeurs de la terre.
J'étais encore inachevé, tu me voyais ;
sur ton livre, tous mes jours étaient inscrits,
recensés avant qu'un seul ne soit.`,
    },
    secondReading: {
      reference: "Actes 13, 22-26",
      text: `En ces jours-là, dans la synagogue d'Antioche de Pisidie, Paul disait aux Juifs : « Dieu a, pour nos pères, suscité David comme roi, et il lui a rendu ce témoignage : J'ai trouvé David, fils de Jessé ; c'est un homme selon mon cœur qui réalisera toutes mes volontés.

De la descendance de David, Dieu, selon sa promesse, a fait sortir un sauveur pour Israël : c'est Jésus, dont Jean le Baptiste a préparé l'avènement en proclamant avant lui un baptême de conversion pour tout le peuple d'Israël. Au moment d'achever sa course, Jean disait : "Ce que vous pensez que je suis, je ne le suis pas. Mais le voici qui vient après moi, et je ne suis pas digne de retirer les sandales de ses pieds."

Vous, frères, les fils de la lignée d'Abraham et ceux parmi vous qui craignent Dieu, c'est à nous que la parole du salut a été envoyée. »`,
    },
    gospel: {
      reference: "Luc 1, 57-66.80",
      text: `Quand fut accompli le temps où Élisabeth devait enfanter, elle mit au monde un fils. Ses voisins et sa famille apprirent que le Seigneur lui avait montré la grandeur de sa miséricorde, et ils se réjouissaient avec elle.

Le huitième jour, ils vinrent pour la circoncision de l'enfant. Ils voulaient l'appeler Zacharie, du nom de son père. Mais sa mère prit la parole et déclara : « Non, il s'appellera Jean. » On lui dit : « Personne dans ta famille ne porte ce nom-là ! » On demandait par signes au père comment il voulait l'appeler. Il se fit donner une tablette sur laquelle il écrivit : « Jean est son nom. » Et tout le monde en fut étonné.

À l'instant même, sa bouche s'ouvrit, sa langue se délia : il parlait et il bénissait Dieu. La crainte saisit alors tous les gens du voisinage et, dans toute la région montagneuse de Judée, on racontait tous ces événements. Tous ceux qui les apprenaient les méditaient dans leur cœur et disaient : « Que sera donc cet enfant ? » En effet, la main du Seigneur était avec lui.

L'enfant grandissait et son esprit se fortifiait. Il alla vivre au désert jusqu'au jour où il se fit connaître à Israël.`,
    },
  },

  "feast-06-29": {
    firstReading: {
      reference: "Actes 12, 1-11",
      text: `En ces jours-là, le roi Hérode Agrippa se saisit de certains membres de l'Église pour les persécuter. Il supprima Jacques, frère de Jean, en le faisant décapiter. Voyant que cela plaisait aux Juifs, il fit arrêter aussi Pierre. C'était les jours des Pains sans levain.

Il le fit saisir et mettre en prison, sous la garde de quatre escouades de quatre soldats ; il avait l'intention de le faire comparaître devant le peuple après la Pâque. Tandis que Pierre était ainsi détenu dans la prison, l'Église priait Dieu pour lui avec insistance.

Hérode allait le faire comparaître. Cette nuit-là, Pierre, attaché avec deux chaînes, dormait entre deux soldats ; devant la porte, des sentinelles gardaient la prison. Et voici que l'ange du Seigneur survint, et une lumière brilla dans la cellule. Il réveilla Pierre en le frappant au côté et dit : « Lève-toi vite. » Les chaînes lui tombèrent des mains. L'ange lui dit : « Mets ta ceinture et tes sandales. » Et Pierre obéit. L'ange ajouta : « Mets ton manteau et suis-moi. »

Pierre sortit et le suivait ; il ne se rendait pas compte que l'intervention de l'ange était réelle, il pensait avoir une vision. Passant devant le premier poste de garde, puis devant le second, ils arrivèrent au portail de fer donnant sur la ville. Celui-ci s'ouvrit tout seul devant eux. Une fois dehors, ils s'engagèrent dans une rue, et aussitôt l'ange le quitta.

Alors, Pierre revint à lui et dit : « Maintenant je sais que c'est vrai : le Seigneur a envoyé son ange, et il m'a arraché aux mains d'Hérode et à tout ce que le peuple juif pouvait attendre. »`,
    },
    psalm: {
      reference: "Psaume 33 (34)",
      text: `R/ De toutes mes frayeurs, le Seigneur m'a délivré.

Je bénirai le Seigneur en tout temps,
sa louange sans cesse à mes lèvres.
Je me glorifierai dans le Seigneur :
que les pauvres m'entendent et soient en fête !

Magnifiez avec moi le Seigneur,
exaltons tous ensemble son nom.
Je cherche le Seigneur, il me répond :
de toutes mes frayeurs, il me délivre.

L'ange du Seigneur campe à l'entour
pour libérer ceux qui le craignent.
Goûtez et voyez : le Seigneur est bon !
Heureux qui trouve en lui son refuge !`,
    },
    secondReading: {
      reference: "2 Timothée 4, 6-8.17-18",
      text: `Bien-aimé, moi, je suis déjà offert en sacrifice, le moment de mon départ est venu. J'ai mené le bon combat, j'ai achevé ma course, j'ai gardé la foi. Je n'ai plus qu'à recevoir la couronne de la justice : le Seigneur, le juste juge, me la remettra en ce jour-là, et non seulement à moi, mais aussi à tous ceux qui auront attendu avec amour sa Manifestation glorieuse.

Le Seigneur, lui, m'a assisté. Il m'a rempli de force pour que, par moi, la proclamation de l'Évangile s'accomplisse jusqu'au bout et que toutes les nations l'entendent. J'ai été arraché à la gueule du lion ; le Seigneur m'arrachera encore à tout ce qu'on fait pour me nuire. Il me sauvera et me fera entrer dans son Royaume céleste. À lui la gloire pour les siècles des siècles. Amen.`,
    },
    gospel: {
      reference: "Matthieu 16, 13-19",
      text: `En ce temps-là, Jésus, arrivé dans la région de Césarée-de-Philippe, demandait à ses disciples : « Au dire des gens, qui est le Fils de l'homme ? » Ils répondirent : « Pour les uns, Jean le Baptiste ; pour d'autres, Élie ; pour d'autres encore, Jérémie ou l'un des prophètes. » Jésus leur demanda : « Et vous, que dites-vous ? Pour vous, qui suis-je ? »

Alors Simon-Pierre prit la parole et dit : « Tu es le Christ, le Fils du Dieu vivant ! » Prenant la parole à son tour, Jésus lui dit : « Heureux es-tu, Simon fils de Yonas : ce n'est pas la chair et le sang qui t'ont révélé cela, mais mon Père qui est aux cieux. Et moi, je te le déclare : Tu es Pierre, et sur cette pierre je bâtirai mon Église ; et la puissance de la Mort ne l'emportera pas sur elle. Je te donnerai les clés du royaume des Cieux : tout ce que tu auras lié sur la terre sera lié dans les cieux, et tout ce que tu auras délié sur la terre sera délié dans les cieux. »`,
    },
  },

  "feast-08-15": {
    firstReading: {
      reference: "Apocalypse 11, 19a ; 12, 1-6a.10ab",
      text: `Le sanctuaire de Dieu, qui est dans le ciel, s'ouvrit, et l'arche de son Alliance apparut dans le sanctuaire.

Un grand signe apparut dans le ciel : une Femme, ayant le soleil pour manteau, la lune sous les pieds, et sur la tête une couronne de douze étoiles. Elle est enceinte, elle crie, dans les douleurs et la torture d'un enfantement.

Un autre signe apparut dans le ciel : un grand dragon, rouge feu, avec sept têtes et dix cornes, et, sur chacune des sept têtes, un diadème. Sa queue, entraînant le tiers des étoiles du ciel, les précipita sur la terre. Le Dragon vint se poster devant la Femme qui allait enfanter, afin de dévorer l'enfant dès sa naissance.

Elle mit au monde un fils, un enfant mâle, celui qui sera le berger de toutes les nations, les conduisant avec un sceptre de fer. L'enfant fut emporté auprès de Dieu et de son Trône, et la Femme s'enfuit au désert, où Dieu lui a préparé une place.

Alors j'entendis dans le ciel une voix forte qui disait : « Maintenant voici le salut, la puissance et le règne de notre Dieu, voici le pouvoir de son Christ ! »`,
    },
    psalm: {
      reference: "Psaume 44 (45)",
      text: `R/ Debout, à la droite du Très-Haut, se tient la reine.

Écoute, ma fille, regarde et tends l'oreille ;
oublie ton peuple et la maison de ton père :
le roi sera séduit par ta beauté.

Il est ton Seigneur : prosterne-toi devant lui.
Alors, les plus riches du peuple,
chargés de présents, quêteront ton sourire.

Fille de roi, elle est là, dans sa gloire,
vêtue d'étoffes d'or ;
on la conduit, Loss Loss en cortège, au roi.

Des jeunes filles, tes compagnes, lui font escorte ;
on les conduit parmi les chants de fête :
elles entrent au palais du roi.`,
    },
    secondReading: {
      reference: "1 Corinthiens 15, 20-27a",
      text: `Frères, le Christ est ressuscité d'entre les morts, lui, premier-né d'entre ceux qui se sont endormis. Car, la mort étant venue par un homme, c'est par un homme aussi que vient la résurrection des morts. De même en effet que tous les hommes meurent en Adam, de même c'est dans le Christ que tous recevront la vie, mais chacun à son rang : en premier, le Christ, et ensuite, lors du retour du Christ, ceux qui lui appartiennent.

Alors, tout sera achevé, quand le Christ remettra le pouvoir royal à Dieu son Père, après avoir anéanti toutes les Principautés, toutes les Puissances et toutes les Forces. Car il faut qu'il règne jusqu'au jour où Dieu aura mis sous ses pieds tous ses ennemis. Et le dernier ennemi qui sera anéanti, c'est la mort, car il a tout mis sous ses pieds.`,
    },
    gospel: {
      reference: "Luc 1, 39-56",
      text: `En ces jours-là, Marie se mit en route et se rendit avec empressement vers la région montagneuse, dans une ville de Judée. Elle entra dans la maison de Zacharie et salua Élisabeth.

Or, quand Élisabeth entendit la salutation de Marie, l'enfant tressaillit en elle. Alors, Élisabeth fut remplie d'Esprit Saint, et s'écria d'une voix forte : « Tu es bénie entre toutes les femmes, et le fruit de tes entrailles est béni. D'où m'est-il donné que la mère de mon Seigneur vienne jusqu'à moi ? Car, lorsque tes paroles de salutation sont parvenues à mes oreilles, l'enfant a tressailli d'allégresse en moi. Heureuse celle qui a cru à l'accomplissement des paroles qui lui furent dites de la part du Seigneur. »

Marie dit : « Mon âme exalte le Seigneur, exulte mon esprit en Dieu, mon Sauveur ! Il s'est penché sur son humble servante ; désormais tous les âges me diront bienheureuse. Le Puissant fit pour moi des merveilles ; Saint est son nom !

Sa miséricorde s'étend d'âge en âge sur ceux qui le craignent. Déployant la force de son bras, il disperse les superbes. Il renverse les puissants de leurs trônes, il élève les humbles. Il comble de biens les affamés, renvoie les riches les mains vides.

Il relève Israël son serviteur, il se souvient de son amour, de la promesse faite à nos pères, en faveur d'Abraham et sa descendance à jamais. »

Marie resta avec Élisabeth environ trois mois, puis elle s'en retourna chez elle.`,
    },
  },

  "feast-09-14": {
    firstReading: {
      reference: "Nombres 21, 4b-9",
      text: `En ces jours-là, en chemin à travers le désert, le peuple perdit courage. Il récrimina contre Dieu et contre Moïse : « Pourquoi nous avoir fait monter d'Égypte ? Est-ce pour nous faire mourir dans le désert, où il n'y a ni pain ni eau ? Nous sommes dégoûtés de cette nourriture misérable ! »

Alors le Seigneur envoya contre le peuple des serpents à la morsure brûlante, et beaucoup en moururent dans le peuple d'Israël. Le peuple vint vers Moïse et dit : « Nous avons péché, en récriminant contre le Seigneur et contre toi. Intercède auprès du Seigneur pour qu'il éloigne de nous les serpents. » Moïse intercéda pour le peuple, et le Seigneur dit à Moïse : « Fais-toi un serpent brûlant, et dresse-le au sommet d'un mât : tous ceux qui auront été mordus, qu'ils le regardent, et ils vivront ! » Moïse fit un serpent de bronze et le dressa au sommet du mât. Quand un homme était mordu par un serpent, et qu'il regardait le serpent de bronze, il restait en vie.`,
    },
    psalm: {
      reference: "Psaume 77 (78)",
      text: `R/ N'oubliez pas les exploits du Seigneur !

Nous avons entendu et nous savons
ce que nos pères nous ont raconté :
les exploits du Seigneur et sa puissance,
les merveilles qu'il a faites.

Quand Dieu les frappait, ils le cherchaient,
ils revenaient et se tournaient vers lui.
Ils se souvenaient que Dieu est leur rocher,
et le Dieu Très-Haut, leur rédempteur.

Mais de leur bouche ils le trompaient,
de leur langue ils lui mentaient.
Leur cœur n'était pas constant envers lui ;
ils n'étaient pas fidèles à son alliance.

Et lui, miséricordieux,
au lieu de détruire, il pardonnait ;
maintes fois, il retint sa colère
au lieu de réveiller sa fureur.`,
    },
    secondReading: {
      reference: "Philippiens 2, 6-11",
      text: `Le Christ Jésus, ayant la condition de Dieu, ne retint pas jalousement le rang qui l'égalait à Dieu. Mais il s'est anéanti, prenant la condition de serviteur, devenant semblable aux hommes. Reconnu homme à son aspect, il s'est abaissé, devenant obéissant jusqu'à la mort, et la mort de la croix.

C'est pourquoi Dieu l'a exalté : il l'a doté du Nom qui est au-dessus de tout nom, afin qu'au nom de Jésus tout genou fléchisse au ciel, sur terre et aux enfers, et que toute langue proclame : « Jésus Christ est Seigneur » à la gloire de Dieu le Père.`,
    },
    gospel: {
      reference: "Jean 3, 13-17",
      text: `En ce temps-là, Jésus disait à Nicodème : « Nul n'est monté au ciel sinon celui qui est descendu du ciel, le Fils de l'homme. De même que le serpent de bronze fut élevé par Moïse dans le désert, ainsi faut-il que le Fils de l'homme soit élevé, afin qu'en lui tout homme qui croit ait la vie éternelle.

Car Dieu a tellement aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne se perde pas, mais obtienne la vie éternelle. Car Dieu a envoyé son Fils dans le monde, non pas pour juger le monde, mais pour que, par lui, le monde soit sauvé. »`,
    },
  },

  "feast-11-01": {
    firstReading: {
      reference: "Apocalypse 7, 2-4.9-14",
      text: `Moi, Jean, j'ai vu un ange qui montait du côté où le soleil se lève, avec le sceau qui imprime la marque du Dieu vivant ; d'une voix forte, il cria aux quatre anges qui avaient reçu le pouvoir de faire du mal à la terre et à la mer : « Ne faites pas de mal à la terre, ni à la mer, ni aux arbres, avant que nous ayons marqué du sceau le front des serviteurs de notre Dieu. » Et j'entendis le nombre de ceux qui étaient marqués du sceau : ils étaient cent quarante-quatre mille, de toutes les tribus des fils d'Israël.

Après cela, j'ai vu : et voici une foule immense, que nul ne pouvait dénombrer, une foule de toutes nations, tribus, peuples et langues. Ils se tenaient debout devant le Trône et devant l'Agneau, vêtus de robes blanches, avec des palmes à la main. Et ils proclamaient d'une voix forte : « Le salut appartient à notre Dieu qui siège sur le Trône, et à l'Agneau ! »

L'un des Anciens prit alors la parole et me dit : « Ces gens vêtus de robes blanches, qui sont-ils, et d'où viennent-ils ? » Je lui répondis : « Mon seigneur, toi, tu le sais. » Il me dit : « Ceux-là viennent de la grande épreuve ; ils ont lavé leurs robes, ils les ont purifiées par le sang de l'Agneau. »`,
    },
    psalm: {
      reference: "Psaume 23 (24)",
      text: `R/ Voici le peuple de ceux qui cherchent ta face, Seigneur.

Au Seigneur, le monde et sa richesse,
la terre et tous ses habitants !
C'est lui qui l'a fondée sur les mers
et la garde inébranlable sur les flots.

Qui peut gravir la montagne du Seigneur
et se tenir dans le lieu saint ?
L'homme au cœur pur, aux mains innocentes,
qui ne livre pas son âme aux idoles.

Il obtient, du Seigneur, la bénédiction,
et de Dieu son Sauveur, la justice.
Voici le peuple de ceux qui le cherchent,
qui recherchent la face de Dieu !`,
    },
    secondReading: {
      reference: "1 Jean 3, 1-3",
      text: `Frères bien-aimés, voyez quel grand amour nous a donné le Père pour que nous soyons appelés enfants de Dieu – et nous le sommes. Voici pourquoi le monde ne nous connaît pas : c'est qu'il n'a pas connu Dieu.

Bien-aimés, dès maintenant, nous sommes enfants de Dieu, mais ce que nous serons n'a pas encore été manifesté. Nous savons que lors de cette manifestation nous lui serons semblables car nous le verrons tel qu'il est.

Et quiconque met en lui une telle espérance se rend pur comme lui-même est pur.`,
    },
    gospel: {
      reference: "Matthieu 5, 1-12a",
      text: `En ce temps-là, voyant les foules, Jésus gravit la montagne. Il s'assit, et ses disciples s'approchèrent de lui. Alors, ouvrant la bouche, il les enseignait. Il disait :

« Heureux les pauvres de cœur, car le royaume des Cieux est à eux.
Heureux ceux qui pleurent, car ils seront consolés.
Heureux les doux, car ils recevront la terre en héritage.
Heureux ceux qui ont faim et soif de la justice, car ils seront rassasiés.
Heureux les miséricordieux, car ils obtiendront miséricorde.
Heureux les cœurs purs, car ils verront Dieu.
Heureux les artisans de paix, car ils seront appelés fils de Dieu.
Heureux ceux qui sont persécutés pour la justice, car le royaume des Cieux est à eux.
Heureux êtes-vous si l'on vous insulte, si l'on vous persécute et si l'on dit faussement toute sorte de mal contre vous, à cause de moi. Réjouissez-vous, soyez dans l'allégresse, car votre récompense est grande dans les cieux ! »`,
    },
  },

  "feast-11-02": {
    firstReading: {
      reference: "Sagesse 3, 1-9",
      text: `Les âmes des justes sont dans la main de Dieu ; aucun tourment ne les atteindra. Aux yeux de l'insensé, ils ont paru mourir ; leur départ de ce monde a été tenu pour un malheur, et leur éloignement de nous, pour une destruction ; mais ils sont dans la paix.

Au regard des hommes, ils ont subi un châtiment ; mais l'espérance de l'immortalité les comblait. Après de légères corrections, ils recevront de grands bienfaits. Dieu les a mis à l'épreuve et il les a trouvés dignes de lui. Comme l'or au creuset, il les a éprouvés ; comme une offrande parfaite, il les a agréés.

Au temps de la visite divine, ils resplendiront ; comme des étincelles dans les chaumes, ils courront en tous sens. Ils jugeront les nations et domineront les peuples, et le Seigneur régnera sur eux pour toujours. Ceux qui mettent leur confiance dans le Seigneur comprendront la vérité ; ceux qui sont fidèles demeureront auprès de lui dans l'amour, car grâce et miséricorde sont pour ses élus.`,
    },
    psalm: {
      reference: "Psaume 22 (23)",
      text: `R/ Le Seigneur est mon berger : rien ne saurait me manquer.

Le Seigneur est mon berger :
je ne manque de rien.
Sur des prés d'herbe fraîche,
il me fait reposer.

Il me mène vers les eaux tranquilles
et me fait revivre ;
il me conduit par le juste chemin
pour l'honneur de son nom.

Si je traverse les ravins de la mort,
je ne crains aucun mal,
car tu es avec moi :
ton bâton me guide et me rassure.

Tu prépares la table pour moi
devant mes ennemis ;
tu répands le parfum sur ma tête,
ma coupe est débordante.

Grâce et bonheur m'accompagnent
tous les jours de ma vie ;
j'habiterai la maison du Seigneur
pour la durée de mes jours.`,
    },
    secondReading: {
      reference: "Romains 6, 3-9",
      text: `Frères, nous tous qui par le baptême avons été unis au Christ Jésus, c'est à sa mort que nous avons été unis par le baptême. Si donc, par le baptême qui nous unit à sa mort, nous avons été mis au tombeau avec lui, c'est pour que nous menions une vie nouvelle, nous aussi, comme le Christ qui, par la toute-puissance du Père, est ressuscité d'entre les morts.

Car, si nous avons été unis à lui par une mort qui ressemble à la sienne, nous le serons aussi par une résurrection qui ressemblera à la sienne. Nous le savons : l'homme ancien qui est en nous a été fixé à la croix avec lui pour que le corps du péché soit réduit à rien, et qu'ainsi nous ne soyons plus esclaves du péché. Car celui qui est mort est affranchi du péché.

Et si nous sommes passés par la mort avec le Christ, nous croyons que nous vivrons aussi avec lui. Nous le savons en effet : ressuscité d'entre les morts, le Christ ne meurt plus ; la mort n'a plus de pouvoir sur lui.`,
    },
    gospel: {
      reference: "Jean 6, 37-40",
      text: `En ce temps-là, Jésus disait aux foules : « Tous ceux que me donne le Père viendront jusqu'à moi ; et celui qui vient à moi, je ne vais pas le jeter dehors. Car je suis descendu du ciel pour faire non pas ma volonté, mais la volonté de Celui qui m'a envoyé.

Or, telle est la volonté de Celui qui m'a envoyé : que je ne perde aucun de ceux qu'il m'a donnés, mais que je les ressuscite au dernier jour. Telle est la volonté de mon Père : que celui qui voit le Fils et croit en lui ait la vie éternelle ; et moi, je le ressusciterai au dernier jour. »`,
    },
  },

  "feast-12-08": {
    firstReading: {
      reference: "Genèse 3, 9-15.20",
      text: `Quand l'homme eut mangé du fruit de l'arbre, le Seigneur Dieu l'appela et lui dit : « Où es-tu donc ? » L'homme répondit : « J'ai entendu ta voix dans le jardin, j'ai pris peur car j'étais nu, et je me suis caché. » Le Seigneur reprit : « Qui donc t'a dit que tu étais nu ? Aurais-tu mangé de l'arbre dont je t'avais interdit de manger ? » L'homme répondit : « La femme que tu m'as donnée, c'est elle qui m'a donné du fruit de l'arbre, et j'en ai mangé. » Le Seigneur Dieu dit à la femme : « Qu'as-tu fait là ? » La femme répondit : « Le serpent m'a trompée, et j'en ai mangé. »

Alors le Seigneur Dieu dit au serpent : « Parce que tu as fait cela, tu seras maudit parmi tous les animaux et toutes les bêtes des champs. Tu ramperas sur le ventre et tu mangeras de la poussière tous les jours de ta vie. Je mettrai une hostilité entre toi et la femme, entre ta descendance et sa descendance : celle-ci te meurtrira la tête, et toi, tu lui meurtriras le talon. »

L'homme appela sa femme Ève (c'est-à-dire : la vivante), parce qu'elle fut la mère de tous les vivants.`,
    },
    psalm: {
      reference: "Psaume 97 (98)",
      text: `R/ Chantez au Seigneur un chant nouveau, car il a fait des merveilles.

Chantez au Seigneur un chant nouveau,
car il a fait des merveilles ;
par son bras très saint, par sa main puissante,
il s'est assuré la victoire.

Le Seigneur a fait connaître sa victoire
et révélé sa justice aux nations ;
il s'est rappelé sa fidélité, son amour,
en faveur de la maison d'Israël.

La terre tout entière a vu
la victoire de notre Dieu.
Acclamez le Seigneur, terre entière,
sonnez, chantez, jouez !`,
    },
    secondReading: {
      reference: "Éphésiens 1, 3-6.11-12",
      text: `Béni soit Dieu, le Père de notre Seigneur Jésus Christ ! Il nous a bénis et comblés des bénédictions de l'Esprit, au ciel, dans le Christ. Il nous a choisis, dans le Christ, avant la fondation du monde, pour que nous soyons saints, immaculés devant lui, dans l'amour.

Il nous a prédestinés à être, pour lui, des fils adoptifs par Jésus Christ. Ainsi l'a voulu sa bienveillance, à la louange de gloire de sa grâce, la grâce qu'il nous donne dans le Fils bien-aimé.

En lui, nous sommes devenus le domaine particulier de Dieu, nous y avons été prédestinés selon le projet de celui qui réalise tout ce qu'il a décidé : il a voulu que nous soyons ceux qui d'avance ont espéré dans le Christ, à la louange de sa gloire.`,
    },
    gospel: {
      reference: "Luc 1, 26-38",
      text: `En ce temps-là, l'ange Gabriel fut envoyé par Dieu dans une ville de Galilée, appelée Nazareth, à une jeune fille vierge, accordée en mariage à un homme de la maison de David, appelé Joseph ; et le nom de la jeune fille était Marie.

L'ange entra chez elle et dit : « Je te salue, Comblée-de-grâce, le Seigneur est avec toi. » À cette parole, elle fut toute bouleversée, et elle se demandait ce que pouvait signifier cette salutation.

L'ange lui dit : « Sois sans crainte, Marie, car tu as trouvé grâce auprès de Dieu. Voici que tu vas concevoir et enfanter un fils ; tu lui donneras le nom de Jésus. Il sera grand, il sera appelé Fils du Très-Haut ; le Seigneur Dieu lui donnera le trône de David son père ; il régnera pour toujours sur la maison de Jacob, et son règne n'aura pas de fin. »

Marie dit à l'ange : « Comment cela va-t-il se faire, puisque je ne connais pas d'homme ? » L'ange lui répondit : « L'Esprit Saint viendra sur toi, et la puissance du Très-Haut te prendra sous son ombre ; c'est pourquoi celui qui va naître sera saint, il sera appelé Fils de Dieu. Or voici que, dans sa vieillesse, Élisabeth, ta parente, a conçu, elle aussi, un fils et en est à son sixième mois, alors qu'on l'appelait la femme stérile. Car rien n'est impossible à Dieu. »

Marie dit alors : « Voici la servante du Seigneur ; que tout m'advienne selon ta parole. » Alors l'ange la quitta.`,
    },
  },

  "feast-12-25": {
    firstReading: {
      reference: "Isaïe 52, 7-10",
      text: `Comme ils sont beaux sur les montagnes, les pas du messager, celui qui annonce la paix, qui porte la bonne nouvelle, qui annonce le salut, et vient dire à Sion : « Il règne, ton Dieu ! »

Écoutez la voix des guetteurs : ils élèvent la voix, tous ensemble ils crient de joie, car, de leurs propres yeux, ils voient le Seigneur qui revient à Sion.

Éclatez en cris de joie, vous, ruines de Jérusalem, car le Seigneur a consolé son peuple, il a racheté Jérusalem ! Le Seigneur a découvert le bras de sa sainteté aux yeux de toutes les nations. Tous les lointains de la terre ont vu le salut de notre Dieu.`,
    },
    psalm: {
      reference: "Psaume 97 (98)",
      text: `R/ La terre tout entière a vu le salut de notre Dieu.

Chantez au Seigneur un chant nouveau,
car il a fait des merveilles ;
par son bras très saint, par sa main puissante,
il s'est assuré la victoire.

Le Seigneur a fait connaître sa victoire
et révélé sa justice aux nations ;
il s'est rappelé sa fidélité, son amour,
en faveur de la maison d'Israël.

La terre tout entière a vu
la victoire de notre Dieu.
Acclamez le Seigneur, terre entière,
sonnez, chantez, jouez !

Jouez pour le Seigneur sur la cithare,
sur la cithare et tous les instruments ;
au son de la trompette et du cor,
acclamez votre roi, le Seigneur !`,
    },
    secondReading: {
      reference: "Hébreux 1, 1-6",
      text: `À bien des reprises et de bien des manières, Dieu, dans le passé, a parlé à nos pères par les prophètes ; mais à la fin, en ces jours où nous sommes, il nous a parlé par son Fils qu'il a établi héritier de toutes choses et par qui il a créé les mondes.

Rayonnement de la gloire de Dieu, expression parfaite de son être, le Fils, qui porte l'univers par sa parole puissante, après avoir accompli la purification des péchés, s'est assis à la droite de la Majesté divine dans les hauteurs des cieux ; et il est devenu bien supérieur aux anges, dans la mesure même où il a reçu en héritage un nom si différent du leur.

En effet, Dieu déclara-t-il jamais à un ange : Tu es mon Fils, moi, aujourd'hui, je t'ai engendré ? Ou bien encore : Moi, je serai pour lui un père, et lui sera pour moi un fils ? À l'inverse, au moment d'introduire le Premier-né dans le monde à venir, il dit : Que tous les anges de Dieu se prosternent devant lui.`,
    },
    gospel: {
      reference: "Jean 1, 1-18",
      text: `Au commencement était le Verbe, et le Verbe était auprès de Dieu, et le Verbe était Dieu. Il était au commencement auprès de Dieu. C'est par lui que tout est venu à l'existence, et rien de ce qui s'est fait ne s'est fait sans lui. En lui était la vie, et la vie était la lumière des hommes ; la lumière brille dans les ténèbres, et les ténèbres ne l'ont pas arrêtée.

Il y eut un homme envoyé par Dieu ; son nom était Jean. Il est venu comme témoin, pour rendre témoignage à la Lumière, afin que tous croient par lui. Cet homme n'était pas la Lumière, mais il était là pour rendre témoignage à la Lumière.

Le Verbe était la vraie Lumière, qui éclaire tout homme en venant dans le monde. Il était dans le monde, et le monde était venu par lui à l'existence, mais le monde ne l'a pas reconnu. Il est venu chez lui, et les siens ne l'ont pas reçu. Mais à tous ceux qui l'ont reçu, il a donné de pouvoir devenir enfants de Dieu, eux qui croient en son nom. Ils ne sont pas nés du sang, ni d'une volonté charnelle, ni d'une volonté d'homme : ils sont nés de Dieu.

Et le Verbe s'est fait chair, il a habité parmi nous, et nous avons vu sa gloire, la gloire qu'il tient de son Père comme Fils unique, plein de grâce et de vérité.

Jean le Baptiste lui rend témoignage en proclamant : « C'est de lui que j'ai dit : Celui qui vient derrière moi est passé devant moi, car avant moi il était. »

Tous, nous avons eu part à sa plénitude, nous avons reçu grâce après grâce ; car la Loi fut donnée par Moïse, la grâce et la vérité sont venues par Jésus Christ. Dieu, personne ne l'a jamais vu ; le Fils unique, lui qui est Dieu, lui qui est dans le sein du Père, c'est lui qui l'a fait connaître.`,
    },
  },
};
