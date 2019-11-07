<template>
  <div class='ui basic content center aligned segment'>
    <b-button class='ui basic button icon' v-on:click="openForm" v-show="!isCreating">
      <i class='plus icon'>+</i>
    </b-button>
    <div class="mx-auto white-card rounded shadow mt-5" v-show="isCreating">
      <div class='content'>
        <div class='ui form'>
          <b-input-group prepend="Activity" class="mts-3">
            <b-form-input v-model="title" placeholder="Activity title" type="text"></b-form-input>
            <b-form-input v-model="timeStart" placeholder="mm/yyyy" type="text"></b-form-input>
            <b-form-input v-model="fundRange" placeholder="$5k - $10k" type="text"></b-form-input>
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
                timeStart: '',
                fundRange: '',
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
                if (this.title.length > 0 && this.timeStart.length > 0 && this.fundRange.length > 0) {
                    const title = this.title;
                    const timeStart = this.timeStart;
                    const fundRange = this.fundRange;
                    this.$emit('create-activity', {
                        title,
                        timeStart,
                        fundRange,
                    });
                    this.title = '';
                    this.timeStart = '';
                    this.fundRange = '';
                    this.isCreating = false;
                }
            },
        },
    }
</script>

<style scoped>

</style>
