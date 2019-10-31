<template>
  <div class="signin">
    <b-container fluid class="text-center">
      <div class="mx-auto white-card rounded shadow mt-5">
        <h4>Welcome to ILP</h4>
        <b-container>
          <b-form @submit.stop.prevent="login">
            <b-form-group>
              <b-form-input
                id="email-input"
                placeholder="Email"
                name="email-input"
                v-model="$v.form.email.$model"
                :state="$v.form.email.$dirty ? !$v.form.email.$error : null"
                aria-describedby="email-input-feedback"
              ></b-form-input>
              <b-form-invalid-feedback id="email-input-feedback">Please enter a valid email</b-form-invalid-feedback>
            </b-form-group>
            <b-form-group>
              <b-form-input
                id="password-input"
                placeholder="Password"
                name="password-input"
                v-model="$v.form.password.$model"
              ></b-form-input>
              
            </b-form-group>
            <b-button type="submit">Log In</b-button>
          </b-form>
        </b-container>
      </div>
    </b-container>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      form: {
        email: null,
        password: null
      }
    };
  },
  validations: {
    form: {
      email: {
        email,
        required
      },
      password: {
        required
      }
    }
  },
  methods: {
    login() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      let signIn_data = {
        email: this.form.email,
        password: this.form.password
      };

      console.log(signIn_data);

      this.$store.dispatch("auth/login", signIn_data).then(() => {
        console.log("Success");
      });
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans:400,700|Leckerli+One|Open+Sans:400,400i,600,600i,700,700i&display=swap');
.container{
  padding: 0 2rem;
}
.btn {
  background: #fad54e;
  color: inherit;
}
h4 {
  font-family: "Josefin Sans", sans-serif;
  color: white;
}
.white-card {
  width: 450px;
  background: #026670;
}
</style>
