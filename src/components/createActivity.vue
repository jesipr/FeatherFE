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
            <template>
              <b-form-select v-model="fundRange" :options="options"></b-form-select>
            </template>
          </b-input-group>
          <template>
            <b-form-textarea size="sm" v-model="description" placeholder="Description"></b-form-textarea>
          </template>
          <div class='ui two button attached buttons'>
            <b-button variant="secondary" v-on:click="sendForm()">
              Create
            </b-button>
            <b-button variant="primary" v-on:click="closeForm">
              Cancel
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import { ModelSelect } from 'vue-search-select';
    export default {
        components: {
            ModelSelect
        },
        data() {
            return {
                title: '',
                timeStart: '',
                fundRange: '',
                description: '',
                isCreating: false,
                options: [
                    { value: '-$5k', text: '-$5k' },
                    { value: '$5k - $10k', text: '$5k - $10k' },
                    { value: '+$10k', text: '+$10k' },
                    { value: '', text: 'Select'}
                ],
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
