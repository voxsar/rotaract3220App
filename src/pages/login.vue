<template>
	<f7-page no-toolbar no-navbar panel-close="left" no-swipeback login-screen>
		<f7-login-screen-title>One Rotaract</f7-login-screen-title>
		<f7-list form>
			<f7-list-input
				label="Username"
				type="text"
				placeholder="Your username"
				:value="username"
				@input="username = $event.target.value"
			></f7-list-input>
			<f7-list-input
				label="Password"
				type="password"
				placeholder="Your password"
				:value="password"
				@input="password = $event.target.value"
			></f7-list-input>
		</f7-list>
		<f7-list>
			<f7-list-button @click="signIn">Sign In</f7-list-button>
			<f7-block-footer>Rotaract 3220 Sri Lanka and Maldives.<br>&copy; Rotaract Digital Communications Unit</f7-block-footer>
		</f7-list>
		<!-- Services Popup -->
		<div class="popup popup-services">
			<div class="content-block">
				<p>Services</p>
				<p><a href="#" class="close-popup">Close popup</a></p>
				<p>Lorem ipsum dolor ...</p>
			</div>
		</div>
	</f7-page>
</template>

<script>
	import LoginRep from './../js/LoginRepository'
	export default {
		data() {
			return {
				username: 'voxsar@gmail.com',
				password: 'scoobydoo@123',
			};
		},
		methods: {
			signIn() {
				var ti = this
				console.log(ti);
				LoginRep.post('',
				{
					grant_type: "password",
					client_id: 11,
					client_secret: "Gpkv1RmOqLtRUoMuHRdqvr8ep5cz2ygTb37Zr05K",
					username: this.username,
					password: this.password,
					scope: "*"
				}).then(function (t){
					console.log(t)
					var storage = window.localStorage
					storage.setItem("access_token", t.data.access_token)
					ti.$f7router.navigate('/dashboard')
				}).catch(function(e){
					ti.$f7.dialog.alert('Use proper login credentialsl');
				})
			},
		},
		beforeMount() {
			var ti = this
			var storage = window.localStorage
			if(storage.getItem("access_token") === null){
				ti.$f7router.navigate('/dashboard')
			}else{
				ti.$f7router.navigate('/dashboard')
			}
		}
	};
</script>