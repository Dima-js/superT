export class App {

  configureRouter(config, router){
    config.title = 'SuperT';
    config.map([
      {
        route: ['','index'],
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
