<template>
	<f7-page name="form">
		<f7-navbar title="My Details" back-link="Back"></f7-navbar>

		<f7-block-title>Personnal Details</f7-block-title>
		<f7-list no-hairlines-md>
			<f7-list-input
				label="Membership No"
				type="text"
				placeholder="Membership Number"
				:value="membership_id"
			></f7-list-input>

			<f7-list-input
				label="Name"
				type="text"
				placeholder="Your name"
				:value="full_name"
			></f7-list-input>
			
			<f7-list-input
				label="Nationality"
				type="text"
				placeholder="Nationality"
				:value="designation"
			></f7-list-input>
			
			<f7-list-input
				label="Occupation"
				type="text"
				placeholder="Occupation"
				:value="occupation"
			></f7-list-input>

			<f7-list-input
				label="Email"
				type="email"
				placeholder="Email"
				:value="email"
			></f7-list-input>

			<f7-list-input
				label="Mobile"
				type="tel"
				placeholder="Mobile"
				:value="mobile"
			></f7-list-input>

			<f7-list-item title="Gender" smart-select :smart-select-params="{openIn: 'sheet'}">
				<select name="gender">
					<option selected :value="gender">{{gender}}</option>
				</select>
			</f7-list-item>

			<f7-list-input
				label="Birth date"
				type="date"
				placeholder="Birth day"
				defaultValue="2014-04-30"
				:value="dob"
			></f7-list-input>

			<f7-list-input
				type="textarea"
				label="Textarea"
				placeholder="Bio"
				:value="bio_description"
			></f7-list-input>
			
			<f7-list-input
				label="Nationality"
				type="text"
				placeholder="Nationality"
				:value="nationality"
			></f7-list-input>
		</f7-list>
		<f7-block-title>Address</f7-block-title>
		<f7-list no-hairlines-md>
			<f7-list-input
				label="Street No"
				type="text"
				placeholder="Street No"
				:value="streetno"
			></f7-list-input>

			<f7-list-input
				label="Street Name"
				type="text"
				placeholder="Street Name"
				:value="streetname"
			></f7-list-input>
			
			<f7-list-input
				label="City"
				type="text"
				placeholder="City"
				:value="city"
			></f7-list-input>
			
			<f7-list-input
				label="State/Province"
				type="text"
				placeholder="State/Province"
				:value="state_province"
			></f7-list-input>
			
			<f7-list-input
				label="Postal Code"
				type="text"
				placeholder="Postal Code"
				:value="postalcode"
			></f7-list-input>
			
			<f7-list-input
				label="Country"
				type="text"
				placeholder="Country"
				:value="country"
			></f7-list-input>
		</f7-list>

	</f7-page>
</template>
<script>
	import OauthRep from './../../js/OauthRepository'
	import { f7, f7ready } from 'framework7-vue';
	export default {
		data() {
			return {
				email: '00',
				full_name: '00',
				mobile: '00',
				occupation: '',
				gender: '',
				bio_description: '',
				photo: '',
				nationality: '',
				designation: '',
				address: '',
				streetno: '',
				streetname: '',
				city: '',
				state_province: '',
				postalcode: '',
				country: '',
				membership_id: '',
				dob: '',
			};
		},
		created(){
			const self = this
			OauthRep.get('/me').then(function(t) {
				self.membership_id = t.data.membership_id
				self.full_name = t.data.full_name
				self.designation = t.data.designation
				self.occupation = t.data.occupation
				self.email = t.data.email
				self.mobile = t.data.mobile
				self.dob = t.data.dob
				self.bio_description = t.data.bio_description
				if(t.data.gender == "M"){
					self.gender = "Male"
				}else if(t.data.gender == "F"){
					self.gender = "Female"
				}else{
					self.gender = "Other"
				}
				self.streetno = t.data.streetno
				self.streetname = t.data.streetname
				self.city = t.data.city
				self.state_province = t.data.state_province
				self.postalcode = t.data.postalcode
				self.country = t.data.country
				self.nationality = t.data.nationality
			}).catch(function(t) {
				console.log(t)
			})
		},
		methods: {
			updateProfile() {
			}
		}
	}
</script>