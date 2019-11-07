<template>
  <div class='ui basic content center aligned segment'>
    <b-button class='ui basic button icon' v-on:click="openForm" v-show="!isCreating">
      <i class='plus icon'>+</i>
    </b-button>
    <div class="mt-5" v-show="isCreating">
      <div class='content'>
        <div class='ui form'>
          <b-input-group prepend="Area of interest" class="mts-3">
            <b-form-input v-model="title" placeholder="Area of interest" type="text"></b-form-input>
          </b-input-group>
          <div class='ui two button attached buttons'>
            <button class='ui basic blue button' v-on:click="sendForm()">
              Create
            </button>
            <button class='ui basic red button' v-on:click="closeForm">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '',
                isCreating: false,
            };
        },
        methods: {
            openForm() {
                this.isCreating = true;
            },
            closeForm() {
                this.isCreating = false;
            },
            sendForm() {
                if (this.title.length > 0) {
                    const title = this.title;
                    this.$emit('create-activity', {
                        title,
                    });
                    this.title = '';
                    this.isCreating = false;
                }
            },
        },
    }
</script>

<style scoped>

</style>
