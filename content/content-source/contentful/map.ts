// Tools to map contentful types to domain types
import {
  IContactDetailsFields,
  IContentDetailsFields,
  ICvFields,
  IPersonalStatementFields,
  IRoleDescriptionFields,
  ISkillListFields,
  ISkillsFields,
  IWorkHistoryFields,
} from './types';
import { CurriculumVitae } from '../../types';

export const mapPersonalStatement = (personalStatement: IPersonalStatementFields): string[] => (
  personalStatement.statement.split(/[\n\r]+/)
);

export const mapSkillsList = (skillsList: ISkillListFields): CurriculumVitae.SkillsListCategory => ({
  category: skillsList.title,
  skills: skillsList.skills,
});

export const mapSkills = (skills: ISkillsFields): CurriculumVitae.SkillsListCategory[] => (
  skills.skillsLists.map((skillsList) => mapSkillsList(skillsList.fields))
);

export const mapWorkHistoryItem = (role: IRoleDescriptionFields): CurriculumVitae.WorkHistoryItem => ({
  company: role.buisnessName,
  title: role.jobTitle,
  description: role.description.split(/[\n\r]+/),
  startDate: role.startDate,
  endDate: role.endDate,
});

export const mapWorkHistory = (workHistory: IWorkHistoryFields): CurriculumVitae.WorkHistoryItem[] => (
  workHistory.roles.map((role) => mapWorkHistoryItem(role.fields))
);

export const mapContactDetail = (contactDetail: IContactDetailsFields): CurriculumVitae.ContactDetail => ({
  href: contactDetail.href,
  label: contactDetail.label,
  value: contactDetail.value,
});

export const mapContactDetails = (contactDetails: IContentDetailsFields): CurriculumVitae.ContactDetail[] => (
  contactDetails.contactDetails?.map((contactDetail) => mapContactDetail(contactDetail.fields)) || []
);

export const mapCv = (cv: ICvFields): CurriculumVitae.Cv => ({
  title: cv.title,
  personalStatement: mapPersonalStatement(cv.personalStatement.fields),
  skillsDescription: cv.skills.fields.description || '',
  skillsListCategories: mapSkills(cv.skills.fields),
  workHistory: mapWorkHistory(cv.workHistory.fields),
  contactDetails: mapContactDetails(cv.contactDetails.fields),
});
