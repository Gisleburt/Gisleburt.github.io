import { ContentfulClientApi, createClient, CreateClientParams } from 'contentful';
import { ContentSource, CurriculumVitae, Pages } from '../types';
import { ICvFields, IPageFields } from './contentful/types';
import { mapCv, mapPage, mapPagePath } from './contentful/map';

class Contentful implements ContentSource {
  client: ContentfulClientApi;

  constructor(params: CreateClientParams) {
    this.client = createClient(params);
  }

  static fromEnvironment(): Contentful {
    if (process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN) {
      return new Contentful(Contentful.previewConfigFromEnv());
    }
    return new Contentful(Contentful.productionConfigFromEnv());
  }

  private static previewConfigFromEnv(): CreateClientParams {
    return {
      space: process.env.CONTENTFUL_SPACE_ID || '',
      accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN || '',
      host: 'preview.contentful.com',
    };
  }

  private static productionConfigFromEnv(): CreateClientParams {
    return {
      space: process.env.CONTENTFUL_SPACE_ID || '',
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
    };
  }

  async getCv(): Promise<CurriculumVitae.Cv> {
    const entryId = '1cchxQM58kpjkTuQLwPvIO';
    const cv = await this.client.getEntry<ICvFields>(entryId, { include: 10 });
    return mapCv(cv.fields);
  }

  async getPaths(): Promise<Pages.Path[]> {
    const pages = await this.client.getEntries<IPageFields>({ include: 0, content_type: 'page' });
    return pages.items.map((page) => mapPagePath(page.fields));
  }

  async getPage(path: string): Promise<Pages.OpaquePage> {
    const pages = await this.client.getEntries<IPageFields>({ include: 10, content_type: 'page', 'fields.path': path });
    return mapPage(pages.items[0].fields);
  }
}

export default Contentful;
