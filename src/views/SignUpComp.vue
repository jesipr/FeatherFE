<template>
  <div class="signupcomp">
    <b-container fluid class="text-center">
      <div class="mx-auto white-card rounded shadow mt-5">
        <h4>Welcome to ILP</h4>
        <b-container>
          <b-form @submit.stop.prevent="signupComp">
            <b-form-group>
              <b-input-group prepend="Email" class="mts-3">
                <b-form-input placeholder="Email"
                              v-model="$v.form.email.$model"
                              :state="$v.form.email.$dirty ? !$v.form.email.$error : null"
                              aria-describedby="email-input-feedback"
                ></b-form-input>
                <b-form-invalid-feedback id="email-input-feedback">Please enter a valid email</b-form-invalid-feedback>
              </b-input-group>
              <b-input-group prepend="Password" class="mt-3">
                <b-form-input placeholder="Password"
                              v-model="$v.form.password.$model"
                              :state="$v.form.password.$dirty ? !$v.form.password.$error : null"
                              aria-describedby="password-input-feedback"
                ></b-form-input>
                <b-form-invalid-feedback id="password-input-feedback">Please enter a valid password</b-form-invalid-feedback>
              </b-input-group>
              <b-input-group prepend="First Name" class="mt-3">
                <b-form-input placeholder="First Name"
                              v-model="$v.form.firstName.$model"
                              :state="$v.form.firstName.$dirty ? !$v.form.firstName.$error : null"
                              aria-describedby="firstName-input-feedback"
                ></b-form-input>
                <b-form-invalid-feedback id="firstName-input-feedback">Please enter your first name</b-form-invalid-feedback>
              </b-input-group>
              <b-input-group prepend="Last Name" class="mt-3">
                <b-form-input placeholder="Last Name"
                              v-model="$v.form.lastName.$model"
                              :state="$v.form.lastName.$dirty ? !$v.form.lastName.$error : null"
                              aria-describedby="lastName-input-feedback"
                ></b-form-input>
                <b-form-invalid-feedback id="lastName-input-feedback">Please enter your last name</b-form-invalid-feedback>
              </b-input-group>
              <b-input-group prepend="Position" class="mt-3">
                <b-form-input placeholder="Position"
                              v-model="$v.form.position.$model"
                              :state="$v.form.position.$dirty ? !$v.form.position.$error : null"
                              aria-describedby="position-input-feedback"
                ></b-form-input>
                <b-form-invalid-feedback id="position-input-feedback">Please enter your position</b-form-invalid-feedback>
              </b-input-group>
              <!--Modal button to search company-->
              <template>
                <b-button @click="$bvModal.show('modal-scoped')">Search for Company</b-button>
                <b-modal id="modal-scoped">
                  <template v-slot:modal-header="{ close }">
                    <h5>Search for your company.</h5>
                  </template>
                  <template v-slot:default="{ hide }">
                   <!-- search bar -->
                    <template>
                      <!-- object value -->
                      <model-select :options="options"
                                    v-model="form.compName"
                                    placeholder="select item">
                      </model-select>
                    </template>
                  </template>
                  <template v-slot:modal-footer="{ cancel, ok }">
                    <b-button size="sm" variant="success" @click="ok()">
                      Submit
                    </b-button>
                    <b-button size="sm" variant="danger" @click="cancel()">
                      Cancel
                    </b-button>
                  </template>
                </b-modal>
              </template>
              <b-input-group prepend="Company" class="mt-3">
                <b-form-input placeholder="Company Name" type="text"
                              v-model="$v.form.compName.$model"
                              :state="$v.form.compName.$dirty ? !$v.form.compName.$error : null"
                              aria-describedby="company-input-feedback"
                ></b-form-input>
                <b-form-invalid-feedback id="company-input-feedback">Please enter your company's official name</b-form-invalid-feedback>
              </b-input-group>
              <b-button v-on:click="signupComp" variant="warning" class="mt-4">Sign Up</b-button>
            </b-form-group>
          </b-form>
        </b-container>
      </div>
    </b-container>
  </div>
</template>

<script>
    import { validationMixin } from "vuelidate"
    import { required, minLength, email } from "vuelidate/lib/validators"
  //import { ModelSelect } from 'vue-search-select'

  export default {
      mixins: [validationMixin],
      data() {
          return {
              //value sets the value of the option chosen, text is the displayed text of the option
              options: [
                  { value: 'Orion', text: 'Orion' },
                  { value: 'Santander', text: 'Santander' },
                  { value: 'Asus', text: 'Asus' },
                  { value: 'Square Enix', text: 'Square Enix' },
                  { value: 'Dell', text: 'Dell' }
              ],
              form: {
                  email: '',
                  password: '',
                  firstName: '',
                  lastName: '',
                  position: '',
                  compName: '',
              },
          };
      },
      validations: {
          form: {
              email: {
                  required,
                  email
              },
              password: {
                  required
              },
              firstName: {
                  required
              },
              lastName: {
                  required
              },
              position: {
                  required
              },
              compName: {
                  required
              }
          },
        },
        methods: {
            signupComp: function (event) {
                this.$v.form.$touch();
                if (this.$v.form.$anyError) {
                    return;
                } else {
                this.$http.post('http://localhost:5000/Feather/company/signup/', {

                    }).then(function (data) {
                        console.log(data);
                    });
                }
            },
        },
        components: {
            //ModelSelect
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
    background: #337137;
  }
</style>
