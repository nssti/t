import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/t/__docusaurus/debug',
    component: ComponentCreator('/t/__docusaurus/debug', '737'),
    exact: true
  },
  {
    path: '/t/__docusaurus/debug/config',
    component: ComponentCreator('/t/__docusaurus/debug/config', '179'),
    exact: true
  },
  {
    path: '/t/__docusaurus/debug/content',
    component: ComponentCreator('/t/__docusaurus/debug/content', 'b12'),
    exact: true
  },
  {
    path: '/t/__docusaurus/debug/globalData',
    component: ComponentCreator('/t/__docusaurus/debug/globalData', '53d'),
    exact: true
  },
  {
    path: '/t/__docusaurus/debug/metadata',
    component: ComponentCreator('/t/__docusaurus/debug/metadata', 'c84'),
    exact: true
  },
  {
    path: '/t/__docusaurus/debug/registry',
    component: ComponentCreator('/t/__docusaurus/debug/registry', '2f5'),
    exact: true
  },
  {
    path: '/t/__docusaurus/debug/routes',
    component: ComponentCreator('/t/__docusaurus/debug/routes', '7ed'),
    exact: true
  },
  {
    path: '/t/blog',
    component: ComponentCreator('/t/blog', 'e9a'),
    exact: true
  },
  {
    path: '/t/blog/archive',
    component: ComponentCreator('/t/blog/archive', 'd57'),
    exact: true
  },
  {
    path: '/t/blog/authors',
    component: ComponentCreator('/t/blog/authors', 'b5f'),
    exact: true
  },
  {
    path: '/t/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/t/blog/authors/all-sebastien-lorber-articles', '5e1'),
    exact: true
  },
  {
    path: '/t/blog/authors/yangshun',
    component: ComponentCreator('/t/blog/authors/yangshun', 'aaf'),
    exact: true
  },
  {
    path: '/t/blog/first-blog-post',
    component: ComponentCreator('/t/blog/first-blog-post', '97e'),
    exact: true
  },
  {
    path: '/t/blog/long-blog-post',
    component: ComponentCreator('/t/blog/long-blog-post', 'c72'),
    exact: true
  },
  {
    path: '/t/blog/mdx-blog-post',
    component: ComponentCreator('/t/blog/mdx-blog-post', '864'),
    exact: true
  },
  {
    path: '/t/blog/tags',
    component: ComponentCreator('/t/blog/tags', '89f'),
    exact: true
  },
  {
    path: '/t/blog/tags/docusaurus',
    component: ComponentCreator('/t/blog/tags/docusaurus', 'f2a'),
    exact: true
  },
  {
    path: '/t/blog/tags/facebook',
    component: ComponentCreator('/t/blog/tags/facebook', 'ad5'),
    exact: true
  },
  {
    path: '/t/blog/tags/hello',
    component: ComponentCreator('/t/blog/tags/hello', 'f01'),
    exact: true
  },
  {
    path: '/t/blog/tags/hola',
    component: ComponentCreator('/t/blog/tags/hola', '867'),
    exact: true
  },
  {
    path: '/t/blog/welcome',
    component: ComponentCreator('/t/blog/welcome', '9e0'),
    exact: true
  },
  {
    path: '/t/markdown-page',
    component: ComponentCreator('/t/markdown-page', '246'),
    exact: true
  },
  {
    path: '/t/docs',
    component: ComponentCreator('/t/docs', '2b0'),
    routes: [
      {
        path: '/t/docs',
        component: ComponentCreator('/t/docs', '306'),
        routes: [
          {
            path: '/t/docs',
            component: ComponentCreator('/t/docs', '1ef'),
            routes: [
              {
                path: '/t/docs/API/endpoints',
                component: ComponentCreator('/t/docs/API/endpoints', 'a35'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/t/',
    component: ComponentCreator('/t/', '84b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
