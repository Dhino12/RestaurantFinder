/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-extraneous-dependencies */
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
    ({ url }) => url.origin === 'https://restaurant-api.dicoding.dev/review',
    new StaleWhileRevalidate({
        cacheName: 'review',
    }),
);
