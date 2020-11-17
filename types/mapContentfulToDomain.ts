import { Entry } from 'contentful';
import {
  IBlogPost,
  IContactDetails,
  IContentDetails,
  ICv,
  IFreeText,
  IPageFields,
  IRoleDescription,
  ISection,
  ISkillList,
  ISkills,
  IWorkHistory,
} from './contentful';
import { Content } from './domain';
import {
  isContenfulContentDetails,
  isContenfulCv,
  isContenfulFreeText,
  isContenfulPage,
  isContenfulRoleDescription,
  isContenfulSkills,
  isContenfulWorkHistory,
} from './contentfulPredicates';

const mapContactDetail = (contactDetail: IContactDetails): Content.ContactDetail => ({
  __TYPE__: 'ContactDetail',
  label: contactDetail.fields.label,
  value: contactDetail.fields.value,
  href: contactDetail.fields.href,
});

const mapContactDetails = (cvContent: IContentDetails): Content.ContactDetails => ({
  __TYPE__: 'ContactDetails',
  title: cvContent.fields.title,
  details: cvContent.fields.contactDetails?.map((detail) => mapContactDetail(detail)) || [],
});

const mapSkillsList = (skillsList: ISkillList): Content.SkillList => ({
  __TYPE__: 'SkillList',
  title: skillsList.fields.title,
  skills: skillsList.fields.skills,
});

const mapSkills = (skills: ISkills): Content.Skills => ({
  __TYPE__: 'Skills',
  title: skills.fields.groupTitle,
  description: skills.fields.description,
  skillsList: skills.fields.skillsLists.map((skillsList) => mapSkillsList(skillsList)),
});

const mapRole = (role: IRoleDescription): Content.RoleDescription => ({
  __TYPE__: 'RoleDescription',
  business: role.fields.buisnessName,
  role: role.fields.jobTitle,
  startDate: role.fields.startDate,
  endDate: role.fields.endDate,
  description: role.fields.description,
});

const mapWorkHistory = (workHistory: IWorkHistory): Content.WorkHistory => ({
  __TYPE__: 'WorkHistory',
  title: workHistory.fields.title,
  roles: workHistory.fields.roles.map((role) => mapRole(role)),
});

const mapFreeText = (freeText: IFreeText): Content.FreeText => ({
  __TYPE__: 'FreeText',
  text: freeText.fields.text,
});

const mapSectionContent = (
  sectionContent: IFreeText | IRoleDescription | ISkills
): Content.FreeText | Content.RoleDescription | Content.Skills => {
  if (isContenfulFreeText(sectionContent)) {
    return mapFreeText(sectionContent);
  }
  if (isContenfulRoleDescription(sectionContent)) {
    return mapRole(sectionContent);
  }
  return mapSkills(sectionContent);
};

const mapSection = (section: ISection): Content.Section => ({
  __TYPE__: 'Section',
  title: section.fields.title,
  content: section.fields.content.map((sectionContent) => mapSectionContent(sectionContent)),
});

const mapCvContent = (
  cvContent: IContentDetails | ISection | ISkills | IWorkHistory
): Content.ContactDetails | Content.Section | Content.Skills | Content.WorkHistory => {
  if (isContenfulContentDetails(cvContent)) {
    return mapContactDetails(cvContent);
  }
  if (isContenfulSkills(cvContent)) {
    return mapSkills(cvContent);
  }
  if (isContenfulWorkHistory(cvContent)) {
    return mapWorkHistory(cvContent);
  }
  return mapSection(cvContent);
};

const mapCv = (cv: ICv): Content.Cv => ({
  __TYPE__: 'Cv',
  content: cv.fields.content.map((cvContent) => mapCvContent(cvContent)),
  title: cv.fields.title,
});

const mapBlogPost = (blogPost: IBlogPost): Content.BlogPost => ({
  __TYPE__: 'BlogPost',
  title: blogPost.fields.title,
  image: undefined,
  post: blogPost.fields.post,
});

const mapPageContent = (pageContent: ICv | IBlogPost): Content.BlogPost | Content.Cv => {
  if (isContenfulCv(pageContent)) {
    return mapCv(pageContent);
  }
  return mapBlogPost(pageContent);
};

export const mapPage = (page: Entry<IPageFields>): Content.Page => {
  if (!isContenfulPage(page)) {
    throw new Error(`Expected Page, actually got ${page.sys.contentType.sys.id}`);
  }

  return {
    __TYPE__: 'Page',
    content: mapPageContent(page.fields.content),
    path: page.fields.path,
  };
};

export const mapPagePath = (page: Entry<IPageFields>): Content.Path => ({
  __TYPE__: 'Path',
  path: page.fields.path,
});
