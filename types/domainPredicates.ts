import { Content } from './domain';

type UnknownContent = Content.ContentType<string, unknown>;

export const isBlogPost = (item: UnknownContent): item is Content.BlogPost => item.__TYPE__ === 'BlogPost';

export const isContactDetail = (item: UnknownContent): item is Content.ContactDetail =>
  item.__TYPE__ === 'ContactDetail';

export const isContactDetails = (item: UnknownContent): item is Content.ContactDetails =>
  item.__TYPE__ === 'ContactDetails';

export const isCv = (item: UnknownContent): item is Content.Cv => item.__TYPE__ === 'Cv';

export const isFreeText = (item: UnknownContent): item is Content.FreeText => item.__TYPE__ === 'FreeText';

export const isGenericPage = (item: UnknownContent): item is Content.GenericPage => item.__TYPE__ === 'GenericPage';

export const isImage = (item: UnknownContent): item is Content.Image => item.__TYPE__ === 'Image';

export const isNavBar = (item: UnknownContent): item is Content.NavBar => item.__TYPE__ === 'NavBar';

export const isPage = (item: UnknownContent): item is Content.Page => item.__TYPE__ === 'Page';

export const isPath = (item: UnknownContent): item is Content.Path => item.__TYPE__ === 'Path';

export const isRoleDescription = (item: UnknownContent): item is Content.RoleDescription =>
  item.__TYPE__ === 'RoleDescription';

export const isSection = (item: UnknownContent): item is Content.Section => item.__TYPE__ === 'Section';

export const isSkillList = (item: UnknownContent): item is Content.SkillList => item.__TYPE__ === 'SkillList';

export const isSkills = (item: UnknownContent): item is Content.Skills => item.__TYPE__ === 'Skills';

export const isWorkHistory = (item: UnknownContent): item is Content.WorkHistory => item.__TYPE__ === 'WorkHistory';
