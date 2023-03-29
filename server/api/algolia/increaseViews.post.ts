import algoliasearch from 'algoliasearch';
import { H3Event } from 'h3';

export default defineEventHandler(async (event: H3Event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();

  const appId = config.algolia?.appId;
  const docIndex = config.algolia?.docIndex;
  const apiKey = process.env?.ALGOLIA_WRITE_API_KEY;

  if (appId === 'mock') return {};

  if (!appId || !apiKey)
    throw createError({
      statusCode: 500,
      statusMessage: 'Algolia environment variables not available',
    });

  try {
    const client = algoliasearch(appId, apiKey);
    const index = client.initIndex(docIndex);
    const requestOptions = { headers: { 'x-algolia-application-id': appId } };
    const doc = await index.findObject(item => item.objectID === body.objectID, requestOptions);

    await index.partialUpdateObjects(
      [
        {
          objectID: doc.object.objectID,
          viewed: (doc.object as any).viewed + 1,
        },
      ],
      { ...requestOptions, createIfNotExists: false }
    );
  } catch (err: any) {
    throw createError({
      statusCode: 500,
      statusMessage: err,
    });
  }

  return {};
});
