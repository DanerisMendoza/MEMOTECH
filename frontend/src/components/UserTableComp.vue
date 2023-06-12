<template>
    <div>
      <PopupModal v-if="isModal">
        <template v-slot:title>
          <h2>EDIT USER</h2>
        </template>
        <template v-slot:closeButton>
           <button type="button" class="btn btn-secondary" @click="closeModal">
              <span>&times; </span>
            </button>
        </template>
        <template v-slot:content>
          <label for="username">New Username:</label>
          <br>
          <input type="text" v-model="selectedUser.username">
          <br>
          <label for="password">New Password:</label>
          <br>
          <input type="password" v-model="selectedUser.password">
          <br><br>
          <button class="btn btn-warning" @click="updateUser">Update</button>
        </template>
      </PopupModal>

        <button class="btn btn-danger" @click="resetTb">Reset Table</button>
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
            <td><button @click="editUser(user)" class="btn btn-warning">Edit</button></td>
        </tr>
        </tbody>
    </table>
    </div>
</template>

<script>
    import axios from '../axiosConfig';
    import PopupModal from './PopupModal.vue';
    
    export default{

        created(){
            this.fetchStudents();
        },
        data(){
            return{
                isModal: false,
                users: [],
                selectedUser: {
                  id: '',
                  username: '',
                  password: ''
                }
            }
        },
        components: {
          PopupModal
        },

        methods: {
            // functions that call laravel api
            fetchStudents() {
                axios.get('/api/viewUser').then(response => {
                    this.users = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
            },

            resetTb() {
                axios.delete('/api/deleteAllUser')
                    .catch(error => {
                        console.error(error);
                    });
            },
            // local functions
            editUser(user){
              this.selectedUser.id = user.id;
              this.selectedUser.username = user.username;
              this.isModal = true;
            },
            closeModal(){
              this.isModal = false;
            },

        },

        mounted(){

        window.Echo.channel('channel-user_tb_data').listen('user_tb_data',(e) => {
            this.users = e.result;
        });

        },


        
    }
</script>