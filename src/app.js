
export class App {

  configureRouter(config, router){
    config.title = 'SuperT';
    config.map([
      {
        route: ['','about_platform'],
        name: 'about_platform',
        moduleId: './components/about_platform/about_platform',
        nav: true,
        title:'about_platform'
      },
      {
        route: 'one_news/',
        name: 'one_news',
        moduleId: './components/one_news/one_news',
        nav: true,
        title:'one_news'
      },
      {
        route: ['news'],
        name: 'news',
        moduleId: './components/news/news',
        nav: true,
        title:'news'
      },
      {
        route: ['post_data'],
        name: 'post_data',
        moduleId: './components/post_data/post_data',
        nav: true,
        title:'Post_data'
      },
      {
        route: ['index'],
        name: 'index',
        moduleId: './components/index/index',
        nav: true,
        title:'Index'
      },
      {
        route: ['platform'],
        name: 'platform',
        moduleId: './components/platform/platform',
        nav: true,
        title:'Platform'
      },

      {
        route: ['sign_in'],
        name: 'sign_in',
        moduleId: './components/sign_in/sign_in',
        nav: true,
        title:'Sign_in'
      },

      {
        route: ['about'],
        name: 'about',
        moduleId: './components/about/about',
        nav: true,
        title:'About'
      },
      {
        route: ['home'],
        name: 'home',
        moduleId: './components/home/home',
        nav: true,
        title:'Home'
      }

    ]);

    this.router = router;
  }

}
