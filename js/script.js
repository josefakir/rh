var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  theme : 'md',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/about/',
      url: 'about.html',
    },
    {
      path: '/inicio/',
      url: 'inicio.html',
    },
    {
      path: '/mi-perfil/',
      url: 'mi-perfil.html',
    },
    {
      path: '/perfil/',
      url: 'perfil.html',
    },
    {
      path: '/home/',
      url: 'index.html',
    },
    {
      path: '/comportamientos/',
      url: 'comportamientos.html',
    },
    {
      path: '/inicio-masonry/',
      url: 'inicio-masonry.html',
    },
  ],
  on: {
    // each object key means same name event handler
    pageInit: function (page) {
      if(page.name=='inicio-masonry'){
       
      }
      // do something on page init
    }
  }
  // ... other parameters
});





var mainView = app.views.create('.view-main');