import {
  Contact,
  Data,
  Job,
  JobSection,
  Skill,
  Training,
  TrainingSection,
} from "./data/type";

const contact: Contact = {
  label: "Contact",
  email: "jfps.dev21@gmail.com",
  phone: "07 69 13 94 76",
  address: "2 bis rue du 11 novembre 33320 Le Taillan-Médoc",
};

const trainingList: Training[] = [
  { date: "08/2023", description: "Master Expert Développement Web" },
  {
    date: "08/2021",
    description: "LP Développement en applications web et innovation numérique",
  },
  {
    date: "06/2020",
    description:
      "BTS Service Informatiques aux Organisations option Solution Application Logiciel et Métier",
  },
  {
    date: "07/2018",
    description: "Baccalauréat ES option Maths mention « assez bien »",
  },
];

const training: TrainingSection = {
  label: "Formation",
  value: trainingList,
};

const jobList: Job[] = [
  {
    date: "09/2021 - 09/2023",
    description:
      "Alternance à “DOTS”, situé à Bordeaux. Gestion de la données, conception et maintenances de solution applicatives en typescript.",
  },
  {
    date: "09/2020 - 09/2021",
    description:
      "Alternance à “Planning Médical”, située à Saint-Jean-d’ilIac. Maintenance, évolution et test d’un projet en php, gérant et générant des planning pour le milieu médical.",
  },
  {
    date: "03/2020-04/2020",
    description:
      "Stage à “Business Web Agence”, à Dijon de 7 semaine, Conception de solutions applicatives avec le Framework Laravel.",
  },
  {
    date: "05/2019-07/2019",
    description:
      "Stage aux “Éditions Asyelle”, à Bergerac de 5 semaines. Gestion d’un serveur et rénovation d’une solution applicative en PHP.",
  },
];

const job: JobSection = { label: "Emplois", value: jobList };

const skills: string[] = [
  "Développment et maintenance applicative fullStack",
  "Language de développement: C#, JAVA, TS, PHP",
  "Connaissance approfondie des mécaniques de jeu pour intégrer harmonieusement l'histoire dans le gameplay.",
  "Capacité à travailler en collaboration avec une équipe multidisciplinaire, y compris des concepteurs de jeu, des artistes et des programmeurs.",
  "Maîtrise de la narration interactive pour créer des histoires engageantes qui s'adaptent aux choix des joueurs.",
  "Passion pour les jeux vidéo et une bonne connaissance de l'histoire du jeu vidéo en général.",
];

const skill: Skill = {
  label: "Compétences",
  value: skills,
};

export const data: Data = {
  firstName: "Jean-François",
  lastName: "Picherit-Steinbrucker",
  title: "Scénariste Jeux Vidéo",
  contact,
  training,
  job,
  skill,
};
