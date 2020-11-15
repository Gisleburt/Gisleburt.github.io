import { ContentfulClientApi, createClient, CreateClientParams } from 'contentful';
import { mapPage, mapPagePath } from '../types/mapContentfulToDomain';
import { Content, ContentSource } from '../types/domain';
import { IPageFields } from '../types/contentful';

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

  async getPaths(): Promise<Content.Path[]> {
    const pages = await this.client.getEntries<IPageFields>({ include: 0, content_type: 'page' });
    return pages.items.map((page) => mapPagePath(page));
  }

  async getPage(path: string): Promise<Content.Page> {
    const pages = await this.client.getEntries<IPageFields>({ include: 10, content_type: 'page', 'fields.path': path });
    return mapPage(pages.items[0]);
  }
}

export default Contentful;
