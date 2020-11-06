/* eslint @typescript-eslint/no-var-requires: 0 */
const { createClient } = require('contentful-management');
const { config } = require('dotenv');

config({ path: '.env.local' });

module.exports = async () => {
  const spaceId = process.env.CONTENTFUL_SPACE_ID || '';
  const accessToken = process.env.CONTENTFUL_MANAGEMENT_API_TOKEN || '';
  const contentfulClient = createClient({
    accessToken,
  });

  const space = await contentfulClient.getSpace(spaceId);
  return space.getEnvironment('master');
};
