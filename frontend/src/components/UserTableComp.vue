<template>
    <div>
      <PopupModal>
        <template v-slot:title>
          <h2>EDIT USER</h2>
        </template>
        <template v-slot:content>
          <label for="username">Enter New Username(Optional):</label>
          <br>
          <input type="text" v-model="selectedUser.username">
          <br>
          <label for="password">Enter New or Current Password(Required):</label>
          <br>
          <input type="password" ref="password">
          <br><br>
          <button class="btn btn-warning" @click="updateUserInfo">Update</button>
        </template>
      </PopupModal>

        <button class="btn btn-danger" @click="resetTb">Reset Table</button>
        <table class="table table-bordered table-striped">
        <thead>
        <tr>
            <th>user_id</th>
            <th>username</th>
            <th>Password</th>
            <th>created_at</th>
            <th>updated_at</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in users" :key="user.id">
            <td>{{ user.user_id }}</td>
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
            this.channel = new BroadcastChannel('modalTrigger');
        },
        data(){
            return{
                users: [],
                selectedUser: {
                  user_id: '',
                  username: '',
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
              this.channel.postMessage('modalTrigger');
              this.selectedUser.user_id = user.user_id;
              this.selectedUser.username = user.username;
              this.isModal = true;
            },
            updateUserInfo(){
              if(this.$refs.password.value == ''){
                alert('Password is Required');
                return;
              }

              axios.put('/api/updateUserByUser_id',{
                user_id:this.selectedUser.user_id,
                username:this.selectedUser.username,
                password:this.$refs.password.value
              }).then(response => {
                  if(response.data == 'success'){
                    alert('update success!');
                  }
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