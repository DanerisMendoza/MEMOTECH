<template>
    <div>
        <table class="table table-bordered table-striped">
        <thead>
        <tr>
            <th>username</th>
            <th>Password</th>
            <th>created_at</th>
            <th>updated_at</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in users" :key="user.id">
            <td>{{ user.username }}</td>
            <td>{{ user.password }}</td>
            <td>{{ user.created_at }}</td>
            <td>{{ user.updated_at }}</td>
        </tr>
        </tbody>
    </table>
    </div>
</template>

<script>
    import axios from '../axiosConfig';

    export default{
        created(){
            this.fetchStudents();
        },
        data(){
            return{
                users: [],
            }
        },

        methods: {
            
            fetchStudents() {
                axios.get('/api/viewUser').then(response => {
                    this.users = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
            },

        },

        mounted(){

        window.Echo.channel('channel-user_tb_data').listen('user_tb_data',(e) => {
            this.users = e.result;
        });

        },


        
    }
</script>