<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar large :sliding="false">
      <f7-nav-left>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title sliding>One Rotaract</f7-nav-title>
      <f7-nav-title-large>One Rotaract</f7-nav-title-large>
    </f7-navbar>
    <!-- Page content-->
    <f7-block strong>
      <p>Welcome</p>
      <p>The One Rotaract Applications brings you all the projects and activities under your finger tips</p>
    </f7-block>
    <f7-block-title>Personal</f7-block-title>
    <f7-list>
      <f7-list-item link="/membership/" title="View Membership Card"></f7-list-item>
      <f7-list-button @click="signIn">Sign In</f7-list-button>
    </f7-list>

  </f7-page>
</template>
<script>
  import OauthRep from './../js/OauthRepository'
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
        OauthRep.post('me',
        {
          
        }).then(function (t){
          console.log(t)
        }).catch(function(e){
          console.log(e)

        })
      },
    },
  };
</script>