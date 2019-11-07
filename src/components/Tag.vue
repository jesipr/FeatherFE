<template>
  <div class="tags">
    <b-container fluid class="text-center">
      <div class="white-card rounded shadow mt-5" v-show="!isEditing">
        <div>
          <b-container class="bv-example-row">
            <b-row>
              <b-col>{{tag.title}}</b-col>
            </b-row>
          </b-container>
        </div>
        <div>
          <b-button class="right floated edit icon" v-on:click="showForm">
            <i class="edit icon">Edit</i>
          </b-button>
          <b-button class="right floated trash icon" v-on:click="deleteAct(tag)">
            <i class="trash icon">Trash</i>
          </b-button>
        </div>
      </div>
    </b-container>
    <div class="content" v-show="isEditing">
      <b-input-group prepend="Tag" class="mts-3">
        <b-form-input v-model="tag.title" placeholder="Area of interest" type="text"></b-form-input>
        <b-input-group-append>
          <b-button variant="outline-secondary" v-on:click="hideForm">Close X</b-button>
        </b-input-group-append>
      </b-input-group>
    </div>
  </div>
</template>

<script>
    export default {
        props: ['tag'],
        data() {
            return {
                isEditing: false,
            };
        },
        methods: {
            deleteAct(tag) {
                this.$emit('delete-tag', tag);
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
