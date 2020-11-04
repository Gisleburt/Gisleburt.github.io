import { WorkHistoryItemProps } from '../components/cv/WorkHistoryItem';

type Opaque<K, T> = T & { __TYPE__: K };
export type DateTime = Opaque<'DateTime', string>;

export type ContentSource = {
  getCv(): Promise<Cv.Cv>;
}

export namespace Cv {
  export type Cv = {
    title: string;
    personalStatement: string[];
    skillsListCategories: SkillsListCategory[];
    skillsDescription: string;
    workHistory: WorkHistoryItemProps[];
    contactDetails: ContactDetail[];
  }

  export type SkillsListCategory = {
    category: string;
    skills: string[];
  }

  export type ContactDetail = {
    label: string;
    value: string;
    href?: string;
  }

  export type WorkHistoryItem = {
    company: string;
    title: string;
    startDate: string;
    endDate?: string;
    description: string[];
  }
}
