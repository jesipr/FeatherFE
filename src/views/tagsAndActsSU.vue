<template>
  <div class="tagsandacts">
    <b-container fluid class="text-center">
      <div class="mx-auto white-card rounded shadow mt-5">
        <h4>Write your areas of interests and activities that you lead.</h4>
        <b-container>
          <b-form @submit.stop.prevent="">
            <b-form-group>
              <b-input-group prepend="Area of Interest" class="mts-3">
                <b-form-input v-model="newtag" placeholder="Area of interest" type="text"></b-form-input>
                <b-input-group-append>
                <!--This button will add the tag into the array tags-->
                 <b-button variant="outline-secondary" v-on:click="add">Add</b-button>
                </b-input-group-append>
              </b-input-group>
              <ul id="example-1">
                <li>
                  {{ tags }}
                </li>
              </ul>
              <b-button variant="warning" class="mt-4">Sign Up</b-button>
            </b-form-group>
          </b-form>
        </b-container>
      </div>
    </b-container>
  </div>
</template>

<script>
    export default {
        name: "tagsAndActsSU",
        data() {
            return {
                tags: [],
                newtag: '',
            };
        },
        methods: {
            add: function() {
                this.tags.push(this.newtag);
            },
        }
    }
</script>

<style scoped>

</style>
