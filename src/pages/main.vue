<template>
    <f7-page no-toolbar no-navbar panel-close="left" no-swipeback login-screen>
        <f7-login-screen-title>One Rotaract</f7-login-screen-title>
        <button class="button button-round-aurora" @click="disco">District Steering Committee</button>
        <button class="button button-round-aurora" @click="membership">Membership Directory</button>
        <button class="button button-round-aurora" @click="clubs">Club Directory</button>
        <button class="button button-round-aurora" @click="calendar">Rotaract Calendar</button>

    </f7-page>
</template>

<script>
    import MembershipRepository from './../js/MembershipRepository'
    export default {
        data() {
            return {
                username: 'voxsar@gmail.com',
                password: 'scoobydoo@123',
            };
        },
        methods: {
            membership() {
                var ti = this
                ti.$f7.preloader.show();
                console.log('membership');
                MembershipRepository.get('/membership').then(function (t) {
                    console.log(t);
                    var storage = window.localStorage
                    storage.setItem("members", JSON.stringify(t.data))
                    ti.$f7.preloader.hide();
                    ti.$f7router.navigate('/membership')

                }).catch(function (e) {
                    ti.$f7.dialog.alert(e.message);
                        ti.$f7.preloader.hide();
                        // ti.$f7router.navigate('/membership')

                    }
                )
                // ti.$f7router.navigate('/dashboard')
            },
            clubs(){
                var ti = this
                ti.$f7.preloader.show();
                console.log('clubs');
                MembershipRepository.get('/clubs').then(function (t) {
                    console.log(t);
                    var storage = window.localStorage
                    storage.setItem("clubs", JSON.stringify(t.data))
                    ti.$f7.preloader.hide();
                    ti.$f7router.navigate('/clubs')

                }).catch(function (e) {
                        ti.$f7.dialog.alert(e.message);
                        ti.$f7.preloader.hide();
                        // ti.$f7router.navigate('/membership')

                    }
                )
            },
            disco(){
                var ti = this
                ti.$f7.preloader.show();
                console.log('membership');
                MembershipRepository.get('/disco').then(function (t) {
                    console.log(t);
                    var storage = window.localStorage
                    storage.setItem("disco", JSON.stringify(t.data))
                    ti.$f7.preloader.hide();
                    ti.$f7router.navigate('/disco')

                }).catch(function (e) {
                        ti.$f7.dialog.alert(e.message);
                        ti.$f7.preloader.hide();
                        // ti.$f7router.navigate('/membership')

                    }
                )
            },
            calendar(){
                var ti = this
                ti.$f7router.navigate('/calendar')
            },
        },
        beforeMount() {
        }
    };
</script>