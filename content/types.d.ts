type Opaque<K, T> = T & { __TYPE__: K };

export type ContentSource = {
  getCv(): Promise<CurriculumVitae.Cv>;
  getPaths(): Promise<Pages.Path[]>;
};

export namespace Pages {
  export type OpaqueCvPage = Opaque<'Cv', CurriculumVitae.Cv>;
  export type OpaqueBlogPostPage = Opaque<'BlogPost', BlogPosts.BlogPost>;
  export type OpaquePage = OpaqueCvPage | OpaqueBlogPostPage;

  export type Path = {
    path: string;
  };

  export type Page = Path & {
    page: OpaqueCvPage | BlogPosts;
  };
}

export namespace BlogPosts {
  export type BlogPost = {
    title: string;
    image: string;
    body: string;
  };
}

export namespace CurriculumVitae {
  export type Cv = {
    title: string;
    personalStatement: string[];
    skillsListCategories: SkillsListCategory[];
    skillsDescription: string;
    workHistory: WorkHistoryItem[];
    contactDetails: ContactDetail[];
  };

  export type SkillsListCategory = {
    category: string;
    skills: string[];
  };

  export type ContactDetail = {
    label: string;
    value: string;
    href?: string;
  };

  export type WorkHistoryItem = {
    company: string;
    title: string;
    startDate: string;
    endDate?: string;
    description: string[];
  };
}
