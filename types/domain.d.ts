type Opaque<K = string, T> = T & { __TYPE__: K };

export type ContentSource = {
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

export namespace Content {
  export type ContentType<K = string, T> = T & { __TYPE__: K; id: string };

  export type BlogPost = ContentType<
    'BlogPost',
    {
      title: string;
      image?: unknown;
      post: string;
    }
  >;

  export type ContactDetail = ContentType<
    'ContactDetail',
    {
      label: string;
      value: string;
      href?: string;
    }
  >;

  export type ContactDetails = ContentType<
    'ContactDetails',
    {
      title: string;
      details: ContactDetail[];
    }
  >;

  export type Cv = ContentType<
    'Cv',
    {
      title: string;
      content: (ContactDetails | Section | Skills | WorkHistory)[];
    }
  >;

  export type FreeText = ContentType<
    'FreeText',
    {
      text: string;
    }
  >;

  export type Page = ContentType<
    'Page',
    {
      path: string;
      content: Cv | BlogPost;
    }
  >;

  export type Path = ContentType<
    'Path',
    {
      path: string;
    }
  >;

  /**
   * @deprecated Use Section
   */
  export type PersonalStatement = ContentType<
    'PersonalStatement',
    {
      title: string;
      statement: string;
    }
  >;

  export type RoleDescription = ContentType<
    'RoleDescription',
    {
      business: string;
      role: string;
      startDate: string;
      endDate?: string;
      description: string;
    }
  >;

  export type Section = ContentType<
    'Section',
    {
      title: string;
      content: (FreeText | RoleDescription | Skills)[];
    }
  >;

  export type SkillList = ContentType<
    'SkillList',
    {
      title: string;
      skills: string[];
    }
  >;

  /**
   * @deprecated Use Section
   */
  export type Skills = ContentType<
    'Skills',
    {
      title: string;
      description?: string;
      skillsList: SkillList[];
    }
  >;

  /**
   * @deprecated Use Section
   */
  export type WorkHistory = ContentType<
    'WorkHistory',
    {
      title: string;
      roles: RoleDescription[];
    }
  >;
}
