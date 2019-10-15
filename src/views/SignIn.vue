<template>
  <div class="signin">
    <b-container fluid class="text-center">
      <div class="mx-auto white-card rounded shadow mt-5">
        <h4>Welcome to ILP</h4>
        <b-container>
          <b-form>
            <b-form-group>
              <b-input-group prepend="Email" class="mts-3">
                <b-form-input v-model="userInput.email" placeholder="Email" type="email"></b-form-input>
              </b-input-group>
              <b-input-group prepend="Password" class="mt-3">
                <b-form-input v-model="userInput.pw" placeholder="Password" type="password"></b-form-input>
              </b-input-group>
              <b-button v-on:click="login" variant="warning" class="mt-4">Log In</b-button>
            </b-form-group>
          </b-form>
        </b-container>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInput: {
        email: '',
        pw: '',
      },
    };
  },
  methods: {
    login: function (event) {
      if (this.userInput.email === '' || this.userInput.pw === '') {
        alert('MALO MALO');
      } else {
        this.$http.post('http://localhost:5000/Feather/signin/' + this.userInput.email + '/' + this.userInput.pw, {

        }).then(function (data) {
          console.log(data);
        });
      }
    },
  },
};
</script>

<style scoped>
.btn {
  background: #fad54e;
  color: inherit;
}
h4 {
  color: white;
}
.white-card {
  width: 450px;
  background: #026670;
}
</style>
