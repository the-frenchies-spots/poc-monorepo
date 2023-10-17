export enum ELocale {
  EN = "en",
  FR = "fr",
}

export interface Contact {
  label: string;
  email: string;
  phone: string;
  address: string;
}

export interface Training {
  date: string;
  description: string;
}

export interface TrainingSection {
  label: string;
  value: Training[];
}

export interface Job {
  date: string;
  description: string;
}

export interface JobSection {
  label: string;
  value: Job[];
}

export interface Skill {
  label: string;
  value: string[];
}

export interface Data {
  firstName: string;
  lastName: string;
  title: string;
  contact: Contact;
  training: TrainingSection;
  job: JobSection;
  skill: Skill;
}
