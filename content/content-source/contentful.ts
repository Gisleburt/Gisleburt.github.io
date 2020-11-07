import { ContentfulClientApi, createClient } from 'contentful';
import { ContentSource, CurriculumVitae } from '../types';
import { ICvFields } from './contentful/types';
import { mapCv } from './contentful/map';

class Contentful implements ContentSource {
  client: ContentfulClientApi;

  constructor(private space: string, private accessToken: string) {
    this.client = createClient({
      space,
      accessToken,
    });
  }

  async getCv(): Promise<CurriculumVitae.Cv> {
    const entryId = '1cchxQM58kpjkTuQLwPvIO';
    const cv = await this.client.getEntry<ICvFields>(entryId, { include: 10 });
    return mapCv(cv.fields);
  }
}

export default Contentful;
