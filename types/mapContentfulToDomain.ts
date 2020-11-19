import { Entry } from 'contentful';
import {
  IBlogPost,
  IContactDetails,
  IContentDetails,
  ICv,
  IExternalLink,
  IFreeText,
  IGenericPage,
  IImage,
  ILink,
  INavBar,
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
  isContentfulExternalLink,
  isContentfulGenericPage,
  isContentfulImage,
  isContentfulNavBar,
} from './contentfulPredicates';

const mapContactDetail = (contactDetail: IContactDetails): Content.ContactDetail => ({
  __TYPE__: 'ContactDetail',
  id: contactDetail.sys.id,
  label: contactDetail.fields.label,
  value: contactDetail.fields.value,
  href: contactDetail.fields.href,
});

const mapContactDetails = (cvContent: IContentDetails): Content.ContactDetails => ({
  __TYPE__: 'ContactDetails',
  id: cvContent.sys.id,
  title: cvContent.fields.title,
  details: cvContent.fields.contactDetails?.map((detail) => mapContactDetail(detail)) || [],
});

const mapSkillsList = (skillsList: ISkillList): Content.SkillList => ({
  __TYPE__: 'SkillList',
  id: skillsList.sys.id,
  title: skillsList.fields.title,
  skills: skillsList.fields.skills,
});

const mapSkills = (skills: ISkills): Content.Skills => ({
  __TYPE__: 'Skills',
  id: skills.sys.id,
  title: skills.fields.groupTitle,
  description: skills.fields.description,
  skillsList: skills.fields.skillsLists.map((skillsList) => mapSkillsList(skillsList)),
});

const mapRole = (role: IRoleDescription): Content.RoleDescription => ({
  __TYPE__: 'RoleDescription',
  id: role.sys.id,
  business: role.fields.buisnessName,
  role: role.fields.jobTitle,
  startDate: role.fields.startDate,
  endDate: role.fields.endDate,
  description: role.fields.description,
});

const mapWorkHistory = (workHistory: IWorkHistory): Content.WorkHistory => ({
  __TYPE__: 'WorkHistory',
  id: workHistory.sys.id,
  title: workHistory.fields.title,
  roles: workHistory.fields.roles.map((role) => mapRole(role)),
});

export const mapFreeText = (freeText: IFreeText): Content.FreeText => ({
  __TYPE__: 'FreeText',
  id: freeText.sys.id,
  text: freeText.fields.text,
});

export const mapImage = (image: IImage): Content.Image => ({
  __TYPE__: 'Image',
  id: image.sys.id,
  description: image.fields.description,
  url: image.fields.image.fields.file.url,
  height: image.fields.image.fields.file.details.image?.height || 0,
  width: image.fields.image.fields.file.details.image?.width || 0,
});

const mapSectionContent = (sectionContent: IFreeText | IRoleDescription | ISkills | IImage): Content.SectionContent => {
  if (isContenfulFreeText(sectionContent)) {
    return mapFreeText(sectionContent);
  }
  if (isContenfulRoleDescription(sectionContent)) {
    return mapRole(sectionContent);
  }
  if (isContentfulImage(sectionContent)) {
    return mapImage(sectionContent);
  }
  return mapSkills(sectionContent);
};

const mapSection = (section: ISection): Content.Section => ({
  __TYPE__: 'Section',
  id: section.sys.id,
  title: section.fields.title,
  content: section.fields.content.map((sectionContent) => mapSectionContent(sectionContent)),
});

const mapCvContent = (cvContent: IContentDetails | ISection | ISkills | IWorkHistory): Content.CvContent => {
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
  id: cv.sys.id,
  content: cv.fields.content.map((cvContent) => mapCvContent(cvContent)),
  title: cv.fields.title,
});

const mapBlogPost = (blogPost: IBlogPost): Content.BlogPost => ({
  __TYPE__: 'BlogPost',
  id: blogPost.sys.id,
  title: blogPost.fields.title,
  image: undefined,
  post: blogPost.fields.post,
});

export const mapLinkExternal = (link: IExternalLink): Content.Link => ({
  __TYPE__: 'Link',
  id: link.sys.id,
  text: link.fields.text,
  url: link.fields.url,
});

export const mapLinkInternal = (link: ILink): Content.Link => ({
  __TYPE__: 'Link',
  id: link.sys.id,
  text: link.fields.text,
  url: link.fields.link.fields.path,
});

export const mapLink = (link: IExternalLink | ILink): Content.Link => {
  if (isContentfulExternalLink(link)) {
    return mapLinkExternal(link);
  }
  return mapLinkInternal(link);
};

export const mapNavBar = (content: INavBar): Content.NavBar => ({
  __TYPE__: 'NavBar',
  id: content.sys.id,
  links: content.fields.links.map((link) => mapLink(link)),
});

export const mapGenericPageContent = (content: ICv | IFreeText | INavBar | ISection): Content.GenericPageContent => {
  if (isContenfulCv(content)) {
    return mapCv(content);
  }
  if (isContenfulFreeText(content)) {
    return mapFreeText(content);
  }
  if (isContentfulNavBar(content)) {
    return mapNavBar(content);
  }
  return mapSection(content);
};

export const mapGenericPage = (pageContent: IGenericPage): Content.GenericPage => {
  return {
    __TYPE__: 'GenericPage',
    id: pageContent.sys.id,
    title: pageContent.fields.title,
    content: pageContent.fields.content.map((content) => mapGenericPageContent(content)),
  };
};

const mapPageContent = (pageContent: ICv | IBlogPost | IGenericPage): Content.PageContent => {
  if (isContenfulCv(pageContent)) {
    return mapCv(pageContent);
  }
  if (isContentfulGenericPage(pageContent)) {
    return mapGenericPage(pageContent);
  }
  return mapBlogPost(pageContent);
};

export const mapPage = (page: Entry<IPageFields>): Content.Page => {
  if (!isContenfulPage(page)) {
    throw new Error(`Expected Page, actually got ${page.sys.contentType.sys.id}`);
  }

  return {
    __TYPE__: 'Page',
    id: page.sys.id,
    content: mapPageContent(page.fields.content),
    path: page.fields.path,
  };
};

export const mapPagePath = (page: Entry<IPageFields>): Content.Path => ({
  __TYPE__: 'Path',
  id: page.sys.id,
  path: page.fields.path,
});
