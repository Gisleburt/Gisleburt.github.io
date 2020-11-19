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
  IPage,
  IRoleDescription,
  ISection,
  ISkillList,
  ISkills,
  IWorkHistory,
} from './contentful';

export const isContenfulBlogPost = (entry: Entry<unknown>): entry is IBlogPost =>
  entry.sys.contentType.sys.id === 'blogPost';

export const isContenfulContactDetails = (entry: Entry<unknown>): entry is IContactDetails =>
  entry.sys.contentType.sys.id === 'contactDetails';

export const isContenfulContentDetails = (entry: Entry<unknown>): entry is IContentDetails =>
  entry.sys.contentType.sys.id === 'contentDetails';

export const isContenfulCv = (entry: Entry<unknown>): entry is ICv => entry.sys.contentType.sys.id === 'cv';

export const isContentfulExternalLink = (entry: Entry<unknown>): entry is IExternalLink =>
  entry.sys.contentType.sys.id === 'externalLink';

export const isContenfulFreeText = (entry: Entry<unknown>): entry is IFreeText =>
  entry.sys.contentType.sys.id === 'freeText';

export const isContentfulGenericPage = (entry: Entry<unknown>): entry is IGenericPage =>
  entry.sys.contentType.sys.id === 'genericPage';

export const isContentfulImage = (entry: Entry<unknown>): entry is IImage => entry.sys.contentType.sys.id === 'image';

export const isContentfulLink = (entry: Entry<unknown>): entry is ILink => entry.sys.contentType.sys.id === 'link';

export const isContentfulNavBar = (entry: Entry<unknown>): entry is INavBar =>
  entry.sys.contentType.sys.id === 'navBar';

export const isContenfulPage = (entry: Entry<unknown>): entry is IPage => entry.sys.contentType.sys.id === 'page';

export const isContenfulRoleDescription = (entry: Entry<unknown>): entry is IRoleDescription =>
  entry.sys.contentType.sys.id === 'roleDescription';

export const isContenfulSection = (entry: Entry<unknown>): entry is ISection =>
  entry.sys.contentType.sys.id === 'section';

export const isContenfulSkillList = (entry: Entry<unknown>): entry is ISkillList =>
  entry.sys.contentType.sys.id === 'skillList';

export const isContenfulSkills = (entry: Entry<unknown>): entry is ISkills => entry.sys.contentType.sys.id === 'skills';

export const isContenfulWorkHistory = (entry: Entry<unknown>): entry is IWorkHistory =>
  entry.sys.contentType.sys.id === 'workHistory';
