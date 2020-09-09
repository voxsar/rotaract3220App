<template>
	<f7-app :params="f7params" theme-dark>

		<!-- Left panel with cover effect when hidden -->
		<f7-panel left cover theme-dark :visible-breakpoint="960">
			<f7-view>
				<f7-page>
					<f7-navbar title="Menu"></f7-navbar>
					<f7-block-title>Home</f7-block-title>
					<f7-list>
						<f7-list-item link="/home/personnal/" view=".view-main" panel-close title="Personnal Details"></f7-list-item>
						<f7-list-item link="/home/club/" view=".view-main" panel-close title="Club Details"></f7-list-item>
						<f7-list-item link="/home/membershipcard/" view=".view-main" panel-close title="Membership Card"></f7-list-item>
					</f7-list>
					<f7-block-title>Rotaract Events</f7-block-title>
					<f7-list>
						<f7-list-item link="/events/club/" view=".view-main" panel-close title="Club Projects"></f7-list-item>
						<f7-list-item link="/events/rotaract/" view=".view-main" panel-close title="Rotaract Projects"></f7-list-item>
						<f7-list-item link="/events/district/" view=".view-main" panel-close title="District Initiatives"></f7-list-item>
						<f7-list-item link="/events/cluster/" view=".view-main" panel-close title="Cluster Initiatives"></f7-list-item>
					</f7-list>
					<f7-block-title>Settings</f7-block-title>
					<f7-list>
						<f7-list-item link="/settings/" view=".view-main" panel-close title="Settings"></f7-list-item>
						<f7-list-item link="/about/" view=".view-main" panel-close title="About Rotaract 3220 App"></f7-list-item>
						<f7-list-item link="/privacy/" view=".view-main" panel-close title="Privacy"></f7-list-item>
					</f7-list>
				</f7-page>
			</f7-view>
		</f7-panel>


		<!-- Your main view, should have "view-main" class -->
		<f7-view main class="safe-areas" url="/"></f7-view>

	</f7-app>
</template>
<script>
	import { Device }  from 'framework7/framework7-lite.esm.bundle.js';
	import cordovaApp from '../js/cordova-app.js';
	import routes from '../js/routes.js';
	import Vue from 'vue'
	import axios from 'axios'
	import VueAxios from 'vue-axios'

	export default {
		data() {
			return {
				// Framework7 Parameters
				f7params: {
					id: 'org.rotaract3220.one', // App bundle ID
					name: 'One Rotaract', // App name
					theme: 'auto', // Automatic theme detection,



					// App routes
					routes: routes,

					// Register service worker
					serviceWorker: Device.cordova ? {} : {
						path: '/service-worker.js',
					},
					// Input settings
					input: {
						scrollIntoViewOnFocus: Device.cordova && !Device.electron,
						scrollIntoViewCentered: Device.cordova && !Device.electron,
					},
					// Cordova Statusbar settings
					statusbar: {
						iosOverlaysWebView: true,
						androidOverlaysWebView: false,
					},
				},
			}
		},
		mounted() {
			this.$f7ready((f7) => {
				// Init cordova APIs (see cordova-app.js)
				if (Device.cordova) {
					cordovaApp.init(f7);
				}
				// Call F7 APIs here
			});
		}
	}
</script>