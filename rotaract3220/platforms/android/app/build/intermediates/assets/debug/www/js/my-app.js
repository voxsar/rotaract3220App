var $$ = Dom7;

var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'org.rotaract3220.app',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      name: 'Home',
      path: '/',
      url: 'main.html',
    },
    {
      name: 'virtualCard',
      path: '/virtualCard/',
      url: 'details/virtualCard.html',
    },
    {
      name: 'about',
      path: '/about/',
      url: 'settings/about.html',
    },
    {
      name: 'privacy',
      path: '/privacy/',
      url: 'settings/privacy.html',
    },
    {
      name: 'clubdetails',
      path: '/clubdetails/',
      url: 'details/club.html',
    }, 
    {
      name: 'personaldetails',
      path: '/personaldetails/',
      url: 'details/personaldetails.html',
    },  
    {
      name: 'clubevents',
      path: '/clubevents/',
      url: 'events/clubevents.html',
    },  
    {
      name: 'rotaractevents',
      path: '/rotaractevents/',
      url: 'events/rotaractevents.html',
    },  
    {
      name: 'districtevents',
      path: '/districtevents/',
      url: 'events/districtevents.html',
    },  
    {
      name: 'clusterevents',
      path: '/clusterevents/',
      url: 'events/clusterevents.html',
    }
  ],
  // ... other parameters
});

var mainView = app.views.create('.view-main', {url: '/'});


// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
  // Do something here when page loaded and initialized

  var swiper = app.swiper.create('.swiper-container', {
    speed: 400,
    spaceBetween: 100
  });
})

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

// create searchbar
var searchbar = app.searchbar.create({
  el: '.searchbar',
  searchContainer: '.list',
  searchIn: '.item-title',
  on: {
    search(sb, query, previousQuery) {
      console.log(query, previousQuery);
    }
  }
})