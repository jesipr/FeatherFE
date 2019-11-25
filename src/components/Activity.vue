<template>
  <div class="tagsandacts">
    <b-container fluid class="text-center">
      <div v-show="!isEditing">
        <div>
          <b-card no-body class="colum-1">
            <b-container class="bv-example-row">
              <b-row>
                <b-col>{{activity.actname}}</b-col>
                <b-col>{{activity.actdate}}</b-col>
                <b-col>{{activity.fundrange}}</b-col>
                <b-button class="right floated edit icon" size="sm" v-on:click="showForm" pill>
                  <i class="edit icon">Edit</i>
                </b-button>
                <b-button class="right floated trash icon" size="sm" variant="danger" v-on:click="deleteAct(activity)" pill>
                  <i class="trash icon">X</i>
                </b-button>
              </b-row>
              <b-row>
                {{activity.description}}
              </b-row>
            </b-container>
          </b-card>
        </div>
      </div>
    </b-container>
    <div class="content" v-show="isEditing">
      <b-input-group prepend="Activity" class="mts-3">
        <b-form-input v-model="activity.actname" placeholder="Activity title" type="text"></b-form-input>
        <b-form-input v-model="activity.actdate" placeholder="mm/yyyy" type="text"></b-form-input>
        <b-form-input v-model="activity.fundrange" placeholder="$5k - $10k" type="text"></b-form-input>
        <template>
          <b-form-textarea v-model="activity.description" type="text"></b-form-textarea>
        </template>
        <b-input-group-append>
          <b-button variant="secondary" v-on:click="hideForm">Save</b-button>
        </b-input-group-append>
      </b-input-group>
    </div>
  </div>
</template>

<script>
    export default {
        props: ['activity'],
        data() {
            return {
                isEditing: false,
            };
        },
        methods: {
            deleteAct(activity) {
                this.$emit('delete-activity', activity);
            },
            showForm() {
                this.isEditing = true;
            },
            hideForm() {
                this.isEditing = false;
            },
        },
    };
</script>

<style scoped>

</style>
