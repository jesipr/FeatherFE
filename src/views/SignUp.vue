<template>
  <div class="signup">
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
              <b-input-group prepend="First Name" class="mt-3">
                <b-form-input v-model="userInput.firstName" placeholder="First Name" type="text"></b-form-input>
              </b-input-group>
              <b-input-group prepend="Last Name" class="mt-3">
                <b-form-input v-model="userInput.lastName" placeholder="Last Name" type="text"></b-form-input>
              </b-input-group>
              <b-input-group prepend="Position" class="mt-3">
                <b-form-input v-model="userInput.postion" placeholder="Position" type="text"></b-form-input>
              </b-input-group>
              <template>
                <b-button @click="$bvModal.show('modal-scoped')">Open Modal</b-button>

                <b-modal id="modal-scoped">
                  <template v-slot:modal-header="{ close }">
                    <!-- Emulate built in modal header close button action -->
                    <b-button size="sm" variant="outline-danger" @click="close()">
                      Close Modal
                    </b-button>
                    <h5>Modal Header</h5>
                  </template>
                  <template v-slot:default="{ hide }">
                    <p>Modal Body with button</p>
                    <b-button @click="hide()">Search</b-button>
                   <!-- search bar -->
                    <template>
                      <!-- object value -->
                      <model-select :options="options"
                                    v-model="item"
                                    placeholder="select item">
                      </model-select>

                      <!-- string value -->
                      <model-select :options="options2"
                                    v-model="item2"
                                    placeholder="select item2">
                      </model-select>
                    </template>
                  </template>
                  <template v-slot:modal-footer="{ cancel }">
                    <b-button size="sm" variant="danger" @click="cancel()">
                      Cancel
                    </b-button>
                  </template>
                </b-modal>
              </template>
              <b-input-group prepend="Company" class="mt-3">
                <b-form-input v-model="userInput.compName" placeholder="Company Name" type="text"></b-form-input>
              </b-input-group>
              <b-button v-on:click="login" variant="warning" class="mt-4">Sign Up</b-button>
            </b-form-group>
          </b-form>
        </b-container>
      </div>
    </b-container>
  </div>
</template>

<script>
    import { ModelSelect } from 'vue-search-select'
    export default {
        data() {
            return {
                options: [
                    { value: '1', text: 'aa' + ' - ' + '1' },
                    { value: '2', text: 'ab' + ' - ' + '2' },
                    { value: '3', text: 'bc' + ' - ' + '3' },
                    { value: '4', text: 'cd' + ' - ' + '4' },
                    { value: '5', text: 'de' + ' - ' + '5' }
                ],
                item: {
                    value: '',
                    text: ''
                },
                options2: [
                    { value: '1', text: 'aa' + ' - ' + '1' },
                    { value: '2', text: 'ab' + ' - ' + '2' },
                    { value: '3', text: 'bc' + ' - ' + '3' },
                    { value: '4', text: 'cd' + ' - ' + '4' },
                    { value: '5', text: 'de' + ' - ' + '5' }
                ],
                item2: '',
                userInput: {
                    email: '',
                    pw: '',
                    firstName: '',
                    lastName: '',
                    postion: '',
                    compName: '',
                },
            };
        },
        methods: {
            login: function (event) {
                if (this.userInput.email === '' || this.userInput.pw === '' || this.userInput.compName === '' || this.userInput.lastName === ''
                || this.userInput.firstName === '' || this.userInput.postion === '') {
                    alert('MALO MALO');
                } else {
                this.$http.post('http://localhost:5000/Feather/signin/' + this.userInput.email + '/' + this.userInput.pw, {

                    }).then(function (data) {
                        console.log(data);
                    });
                }
            },
            reset () {
                this.item = {}
            },
            selectFromParentComponent1 () {
                // select option from parent component
                this.item = this.options[0]
            },
            reset2 () {
                this.item2 = ''
            },
            selectFromParentComponent2 () {
                // select option from parent component
                this.item2 = this.options2[0].value
            },
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
