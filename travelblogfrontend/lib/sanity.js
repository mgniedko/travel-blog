import {createPrewiewSubscriptionHook, createCurrentUserHook} from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url'
import {config} from './config'

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const usePreviewSubscription = createPrewiewSubscriptionHook(config);

export const useCurrentUser = createCurrentUserHook(config);
