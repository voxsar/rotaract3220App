
import LoginPage from '../pages/login.vue';
import DashboardPage from '../pages/dashboard.vue';

/*Home Pages*/
import PersonalPage from '../pages/home/personnal.vue';
import ClubPage from '../pages/home/club.vue';
import MembershipCardPage from '../pages/home/membershipcard.vue';

/*Events*/
import ProjectsPage from '../pages/events/club.vue';
import RotaractPage from '../pages/events/rotaract.vue';
import DistrictPage from '../pages/events/district.vue';
import ClusterPage from '../pages/events/cluster.vue';

/*Settings*/
import SettingsPage from '../pages/settings/settings.vue';
import PrivacyPage from '../pages/settings/privacy.vue';
import AboutPage from '../pages/settings/about.vue';

import DynamicRoutePage from '../pages/dynamic-route.vue';
import RequestAndLoad from '../pages/request-and-load.vue';
import NotFoundPage from '../pages/404.vue';

var routes = [
	{
		path: '/',
		component: LoginPage,
		beforeEnter: function (routeTo, routeFrom, resolve, reject) {
			// Router instance
			// App instance
			//resolve({ url: '/dashboard' })
			var storage = window.localStorage
			if(storage.getItem("access_token") === null){
				resolve({ url: '/dashboard' })
			} else {
			// don't allow to visit this page for unauthenticated users
				resolve({ url: '/dashboard' })
			}
	    },
	},
	{
		path: '/dashboard',
		component: DashboardPage,
	},
	{
		path: 'settings/about/',
		component: AboutPage,
	},
	{
		path: 'settings/settings/',
		component: SettingsPage,
	},
	{
		path: 'settings/privacy/',
		component: PrivacyPage,
	},
	{
		path: '/home/personnal/',
		component: PersonalPage,
		beforeEnter: 
	},
	{
		path: '/home/club/',
		component: ClubPage,
	},
	{
		path: '/home/membershipcard/',
		component: MembershipCardPage,
	},
	{
		path: '/events/club/',
		component: ProjectsPage,
	},
	{
		path: '/events/rotaract/',
		component: RotaractPage,
	},
	{
		path: '/events/district/',
		component: DistrictPage,
	},
	{
		path: '/events/cluster/',
		component: ClusterPage,
	},
	{
		path: '/dynamic-route/blog/:blogId/post/:postId/',
		component: DynamicRoutePage,
	},
	{
		path: '/request-and-load/user/:userId/',
		async: function (routeTo, routeFrom, resolve, reject) {
			// Router instance
			var router = this;

			// App instance
			var app = router.app;

			// Show Preloader
			app.preloader.show();

			// User ID from request
			var userId = routeTo.params.userId;

			// Simulate Ajax Request
			setTimeout(function () {
				// We got user data from request
				var user = {
					firstName: 'Miyuru',
					lastName: 'Dharmage',
					about: '',
					links: [
						{
							title: 'Framework7 Website',
							url: 'http://framework7.io',
						},
						{
							title: 'Rotaract 3220',
							url: 'https://app.rotaract3220.org',
						},
					]
				};
				// Hide Preloader
				app.preloader.hide();

				// Resolve route to load page
				resolve(
					{
						component: RequestAndLoad,
					},
					{
						context: {
							user: user,
						}
					}
				);
			}, 1000);
		},
	},
	{
		path: '(.*)',
		component: NotFoundPage,
	},
];

export default routes;
