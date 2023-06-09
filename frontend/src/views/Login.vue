<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">Login</div>
            <div class="card-body">
                <div class="form-group">
                  <label for="username">Username</label>
                  <input type="text" class="form-control" ref="username"  required>
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" class="form-control" ref="password" required>
                </div>
                <button type="submit" class="btn btn-primary" @click="login">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
    <script>
    import axios from '../axiosConfig';

    export default {

        methods: {

            login() {
                const data = {
                    username: this.$refs.username.value,
                    password: this.$refs.password.value
                };

                axios.post('/api/loginUser',  data )
                .then(response => {
                    // Handle successful login
                    const result = response.data;
                    if(result != 'success'){
                      alert(result);
                    }
                    else{
                      localStorage.setItem('username',data.username);
                      this.$router.push('/Index');
                      alert('valid');
                    }
                })
                .catch(error => {
                    // Handle login error
                    console.error('Error:', error.response);
                });
            },
        },
    };
    </script>
  
    <style scoped>
    .container {
        margin-top: 100px;
    }
    </style>
  