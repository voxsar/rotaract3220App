<template>
    <f7-page no-toolbar no-navbar panel-close="left" no-swipeback login-screen>
        <f7-login-screen-title>One Rotaract</f7-login-screen-title>
        <div class="card">
            <div class="card-header">Rotaract Membership Directory</div>
            <div class="card-content">
                <!-- Card content -->
                <div class="data-table">
                    <div>
                        <vue-good-table
                                :columns="columns"
                                :rows="members"
                                :pagination-options="{
                            enabled: true,
                            mode: 'records',
                            perPage: 10,
                            position: 'top',
                            perPageDropdown: [3, 7, 9],
                            dropdownAllowAll: false,
                            setCurrentPage: 2,
                            nextLabel: 'next',
                            prevLabel: 'prev',
                            rowsPerPageLabel: 'Rows per page',
                            ofLabel: 'of',
                            pageLabel: 'page', // for 'pages' mode
                            allLabel: 'All',
                          }"
                                :search-options="{
                            enabled: true,
                            trigger: 'enter',
                            skipDiacritics: true,
                            placeholder: 'Search Members',
                            }"
                                theme="nocturnal"
                        />
                    </div>
                </div>
            </div>
        </div>

    </f7-page>
</template>

<script>
    import LoginRep from './../js/LoginRepository'
    export default {
        data() {
            var storage = window.localStorage
            return {
                columns: [
                    {
                        label: 'Name',
                        field: 'card_name',
                    },
                    {
                        label: 'Club',
                        field: 'c_name',
                    },
                ],
                members : JSON.parse(storage.getItem('members'))
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