<template>
  <div class="tags">
    <b-container fluid class="text-center">
      <div v-show="!isEditing">
        <div>
          <b-container class="bv-example-row">
            <b-row>
              <b-card no-body class="colum-1">
                <span>
                  {{tag.title}}
                  <b-button append variant="danger" size="sm" v-on:click="deleteTag(tag)" squared>
                    <i class="trash icon">X</i>
                  </b-button>
                </span>
              </b-card>
<!--                <b-button class="right floated trash icon" v-on:click="deleteTag(tag)" pill>-->
<!--                  <i class="trash icon">X</i>-->
<!--                </b-button>-->
            </b-row>
          </b-container>
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
            deleteTag(tag) {
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
  .colum-1 {
    background-color: white;
  }
</style>
