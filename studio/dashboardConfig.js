export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5df1229411a1c401824908a5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ytj7te2c',
                  apiId: '80b08e3a-1578-4e96-836b-5d0bfa6ee3c7'
                },
                {
                  buildHookId: '5df12294f1d30e01efb265a7',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-yvpikzip',
                  apiId: 'dcbb65ae-3601-4cbf-825c-b37ccc0d8ea3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adithyamaheshb/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-yvpikzip.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
