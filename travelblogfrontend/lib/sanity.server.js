import {createClient} from 'next-sanity';
import {config} from './config'

export const sanityClient = createClient(config);

export const previewClient = createClient({
    ...config,
    useCdn: false,
    token: 'sk8aQ3Yeob9hGuSPW37aseWN5dll5OXxYYyEDaHZjX16ZTnbOavkNc6vXMcyDXPQnNWXXoFqGlOTkh0L1gTnX9yPihHzQVUUZFQ1s2mgUtKZeyDlYauKAnHNEeACTFYW4bOwqGkwtTmMigyRWx43YYCsrt1LXz0RpAvPNsDoF8VuH9e4i3hW'
});

export const getClient = (usePreview) => usePreview ? previewClient : sanityClient;