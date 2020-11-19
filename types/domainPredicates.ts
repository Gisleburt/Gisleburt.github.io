import { Content } from './domain';

export const isBlogPost = (item: Content.ContentType<string, unknown>): item is Content.BlogPost =>
  item.__TYPE__ === 'BlogPost';

export const isContactDetail = (item: Content.ContentType<string, unknown>): item is Content.ContactDetail =>
  item.__TYPE__ === 'ContactDetail';

export const isContactDetails = (item: Content.ContentType<string, unknown>): item is Content.ContactDetails =>
  item.__TYPE__ === 'ContactDetails';

export const isCv = (item: Content.ContentType<string, unknown>): item is Content.Cv => item.__TYPE__ === 'Cv';

export const isFreeText = (item: Content.ContentType<string, unknown>): item is Content.FreeText =>
  item.__TYPE__ === 'FreeText';

export const isGenericPage = (item: Content.ContentType<string, unknown>): item is Content.GenericPage =>
  item.__TYPE__ === 'GenericPage';

export const isImage = (item: Content.ContentType<string, unknown>): item is Content.Image => item.__TYPE__ === 'Image';

export const isPage = (item: Content.ContentType<string, unknown>): item is Content.Page => item.__TYPE__ === 'Page';

export const isPath = (item: Content.ContentType<string, unknown>): item is Content.Path => item.__TYPE__ === 'Path';

export const isRoleDescription = (item: Content.ContentType<string, unknown>): item is Content.RoleDescription =>
  item.__TYPE__ === 'RoleDescription';

export const isSection = (item: Content.ContentType<string, unknown>): item is Content.Section =>
  item.__TYPE__ === 'Section';

export const isSkillList = (item: Content.ContentType<string, unknown>): item is Content.SkillList =>
  item.__TYPE__ === 'SkillList';

export const isSkills = (item: Content.ContentType<string, unknown>): item is Content.Skills =>
  item.__TYPE__ === 'Skills';

export const isWorkHistory = (item: Content.ContentType<string, unknown>): item is Content.WorkHistory =>
  item.__TYPE__ === 'WorkHistory';
