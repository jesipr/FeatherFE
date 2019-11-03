<template>
  <div class="signupprof">
    <b-container fluid class="text-center">
      <div class="mx-auto white-card rounded shadow mt-5">
        <h4>Welcome to ILP</h4>
        <b-container>
          <b-form @submit.stop.prevent="signupProf">
            <b-form-group>
              <b-input-group prepend="Email" class="mts-3">
                <b-form-input placeholder="Email"
                              v-model="$v.userInput.email.$model"
                              :state="$v.userInput.email.$dirty ? !$v.userInput.email.$error : null"
                              aria-describedby="email-input-feedback"
                ></b-form-input>
                <b-form-invalid-feedback id="email-input-feedback">Please enter your email</b-form-invalid-feedback>
              </b-input-group>
              <b-input-group prepend="Password" class="mt-3">
                <b-form-input placeholder="Password"
                              v-model="$v.userInput.password.$model"
                              :state="$v.userInput.password.$dirty ? !$v.userInput.password.$error : null"
                              aria-describedby="password-input-feedback"
                ></b-form-input>
                <b-form-invalid-feedback id="password-input-feedback">Please enter your password</b-form-invalid-feedback>
              </b-input-group>
              <template>
                <b-button @click="$bvModal.show('modal-name')">Search for Department</b-button>
                <!--NEED TO SHOW RESULT OF SEARCH-->
                <b-modal id="modal-name">
                  <template v-slot:modal-header="{ close }">
                    <h5>Search for your name.</h5>
                  </template>
                  <template v-slot:default="{ hide }">
                    <b-input-group>
                      <b-form-input type="text" placeholder="First Name" v-model="name_data.firstname"></b-form-input>
                      <b-form-input type="text" placeholder="Last Name" v-model="name_data.lastname"></b-form-input>
                      <b-input-group-append>
                        <b-button variant="outline-secondary" @click="searchName">Search</b-button>
                      </b-input-group-append>
                    </b-input-group>
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
              <b-input-group prepend="First Name" class="mt-3">
                <b-form-input placeholder="First Name"
                              v-model="$v.userInput.firstName.$model"
                              :state="$v.userInput.firstName.$dirty ? !$v.userInput.firstName.$error : null"
                              aria-describedby="firstName-input-feedback"
                ></b-form-input>
                <b-form-invalid-feedback id="firstName-input-feedback">Please enter your First Name</b-form-invalid-feedback>
              </b-input-group>
              <b-input-group prepend="Last Name" class="mt-3">
                <b-form-input placeholder="Last Name"
                              v-model="$v.userInput.lastName.$model"
                              :state="$v.userInput.lastName.$dirty ? !$v.userInput.lastName.$error : null"
                              aria-describedby="lastName-input-feedback"
                ></b-form-input>
                <b-form-invalid-feedback id="lastName-input-feedback">Please enter your last Name</b-form-invalid-feedback>
              </b-input-group>
              <!--Modal button to search for department-->
              <template>
                <b-button @click="$bvModal.show('modal-scoped')">Search for Department</b-button>
                <b-modal id="modal-scoped">
                  <template v-slot:modal-header="{ close }">
                    <h5>Search for your Department.</h5>
                  </template>
                  <template v-slot:default="{ hide }">
                    <!-- search bar -->
                    <template>
                      <!-- object value -->
                      <model-select :options="options"
                                    v-model="userInput.department"
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
              <b-input-group prepend="Department" class="mt-3">
                <b-form-input placeholder="First Name"
                              v-model="$v.userInput.department.$model"
                              :state="$v.userInput.department.$dirty ? !$v.userInput.department.$error : null"
                              aria-describedby="department-input-feedback"
                ></b-form-input>
                <b-form-invalid-feedback id="department-input-feedback">Please enter your department</b-form-invalid-feedback>
              </b-input-group>
              <b-button class="mt-4" :active='$route.name =="tagsandacts"' to="/add-actsandtags">Add Area of Interests and Activities</b-button>
              <b-button v-on:click="signupProf" variant="warning" class="mt-4">Sign Up</b-button>
            </b-form-group>
          </b-form>
        </b-container>
      </div>
    </b-container>
  </div>
</template>

<script>
    /* eslint-disable */
    import { ModelSelect } from 'vue-search-select'
    import { validationMixin } from "vuelidate"
    import { required, minLength, email } from "vuelidate/lib/validators"
    export default {
        mixins: [validationMixin],
        data() {
            return {
                //value sets the value of the option chosen, text is the displayed text of the option
                options: [
                    { value: 'ICOM', text: 'ICOM' },
                    { value: 'INEL', text: 'INEL' },
                    { value: 'CIIC', text: 'CIIC' },
                    { value: 'INSO', text: 'INSO' },
                    { value: 'INQU', text: 'INQU' }
                ],
                item: {
                    value: '',
                    text: ''
                },
                userInput: {
                    email: '',
                    pw: '',
                    firstName: '',
                    lastName: '',
                    department: '',

                },
                validations: {
                    userInput: {
                        email: {
                            required
                        },
                        pw: {
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
                //for name search
                name_data:{
                    firstname: '',
                    lastname: '',
                },
            };
        },
        methods: {
            signupProf: function (event) {
                if (this.userInput.email === '' || this.userInput.pw === '' || this.userInput.department === '' || this.userInput.lastName === ''
                    || this.userInput.firstName === '' ) {
                    alert('MALO MALO');
                } else {
                    this.$http.post('http://localhost:5000/Feather/company/signup/', {

                    }).then(function (data) {
                        console.log(data);
                    });
                }
            },
            searchName: function() {
                const data_json = JSON.stringify({
                    firstname: this.name_data.firstname,
                    lastname: this.name_data.lastname
                });
                this.$http.get('http://localhost:5000/Feather/professor/signup/findname', data_json, {
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
                        console.log(`error: ${error}`);
                    });
            }
        },
        components: {
            ModelSelect
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
