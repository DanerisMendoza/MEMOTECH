<template>
    <div>
        <h1>Register Here</h1>
        <input type="text" placeholder="username" ref="username">
        <input type="password" placeholder="password" ref="password">
        <button @click="submit" class="btn btn-success">Submit</button>
    </div>
</template>

<script>
    import axios from '../axiosConfig';

    export default {
        methods: {
            submit() {
                const data = {
                    username: this.$refs.username.value,
                    password: this.$refs.password.value
                };

                axios.post('/api/createUser', data)
                    .then(response => {
                        // Handle success response
                        console.log('Insert Success!');
                    })
                    .catch(error => {
                        // Handle error response
                        console.error(error);
                    });
            },
        }
    }
</script>