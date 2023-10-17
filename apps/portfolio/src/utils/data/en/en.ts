import {
  Contact,
  Data,
  Job,
  JobSection,
  Skill,
  Training,
  TrainingSection,
} from "../type";

const contact: Contact = {
  label: "Contact",
  email: "jfps.dev21@gmail.com",
  phone: "07 69 13 94 76",
  address: "2 bis rue du 11 novembre Le Taillan-Médoc 33320, France",
};

const trainingList: Training[] = [
  { date: "08/2023", description: "Master Expert Web Development" },
  {
    date: "08/2021",
    description: "LP Development in web applications and digital innovation",
  },
  {
    date: "06/2020",
    description:
      "BTS IT Service for Organizations option Software Application and Business Solution",
  },
  {
    date: "07/2018",
    description: "ES Baccalaureate, Maths option, mention “fairly good”",
  },
];

const training: TrainingSection = {
  label: "Training",
  value: trainingList,
};

const jobList: Job[] = [
  {
    date: "09/2021 - 09/2023",
    description:
      "Apprenticeship at “DOTS”, located in Bordeaux. Data management, design and maintenance of application solutions in typescript.",
  },
  {
    date: "09/2020 - 09/2021",
    description:
      "Apprenticeship at “Medical Planning”, located in Saint-Jean-d’ilIac. Maintenance, evolution and testing of a project in PHP, managing and generating schedules for the medical environment.",
  },
  {
    date: "03/2020-04/2020",
    description:
      "Internship at “Business Web Agency”, in Dijon for 7 weeks, Design of application solutions with the Laravel Framework.",
  },
  {
    date: "05/2019-07/2019",
    description:
      "Internship at “Éditions Asyelle”, in Bergerac for 5 weeks. Management of a server and renovation of an application solution in PHP.",
  },
];

const job: JobSection = { label: "Jobs", value: jobList };

const skills: string[] = [
  "Full Stack application development and maintenance",
  "Development language: C#, JAVA, TS, PHP",
  "In-depth knowledge of game mechanics to seamlessly integrate story into gameplay.",
  "Ability to work collaboratively with a multidisciplinary team, including game designers, artists and programmers.",
  "Master interactive storytelling to create engaging stories that adapt to player choices.",
  "Passion for video games and a good knowledge of the history of video games in general.",
];

const skill: Skill = {
  label: "SKILLS",
  value: skills,
};

export const dataEn: Data = {
  firstName: "Jean-François",
  lastName: "Picherit-Steinbrucker",
  title: "Video Game Screenwriter",
  contact,
  training,
  job,
  skill,
};
