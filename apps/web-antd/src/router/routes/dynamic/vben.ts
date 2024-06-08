import type { RouteRecordRaw } from 'vue-router';

import { VBEN_GITHUB_URL } from '@vben/constants';
import { preferences } from '@vben-core/preferences';

import { BasicLayout, IFrameView } from '@/layouts';
import { $t } from '@vben/locales/helper';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: preferences.logo.source,
      title: 'Vben',
    },
    name: 'AboutLayout',
    path: '/vben-admin',
    redirect: '/vben-admin/about',
    children: [
      {
        name: 'About',
        path: 'about',
        component: () => import('@/views/about/index.vue'),
        meta: {
          icon: 'mdi:creative-commons',
          title: $t('page.about'),
        },
      },
      {
        name: 'AboutDocument',
        path: 'document',
        component: IFrameView,
        meta: {
          icon: 'mdi:flame-circle',
          iframeSrc: 'https://doc.vvbin.cn/',
          keepAlive: true,
          title: $t('page.document'),
        },
      },
      {
        name: 'Github',
        path: 'github',
        component: IFrameView,
        meta: {
          icon: 'mdi:github',
          target: VBEN_GITHUB_URL,
          title: 'Github',
        },
      },
    ],
  },
];

export default routes;