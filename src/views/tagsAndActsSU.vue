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
                <!--This button will add_tag the tag into the array tags-->
                 <b-button variant="outline-secondary" v-on:click="add_tag" @click="tag_tblcr">Add</b-button>
                </b-input-group-append>
              </b-input-group>
              <div id="example-1">

              </div>
              <b-input-group prepend="Activity" class="mts-3">
                <b-form-input v-model="activity.act_name" placeholder="Activity name" type="text"></b-form-input>
                <b-form-input v-model="activity.start_date" placeholder="mm/yyyy" type="text"></b-form-input>
                <b-form-input v-model="activity.fund_range" placeholder="$5k - $10k" type="text"></b-form-input>
                <b-input-group-append>
                  <b-button variant="outline-secondary" v-on:click="add_act" @click="act_tblcr">Add</b-button>
                </b-input-group-append>
              </b-input-group>
              <div id="example-2">

              </div>
              <b-button variant="warning" class="mt-4" v-on:click="submit">Submit</b-button>
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
                count: 0,
                activity: {
                    act_name: '',
                    start_date: '',
                    fund_range: ''
                },
                activities: []
            };
        },
        methods: {
            add_tag: function() {
                this.tags.push(this.newtag);
            },
            add_act: function() {
                this.activities.push([this.activity.act_name, this.activity.start_date, this.activity.fund_range]);
            },
            tag_tblcr: function() {
                var mytable = "<div><table cellpadding=\"0\" cellspacing=\"0\"><tbody><tr>";

                mytable += "</tr><tr>";
                mytable += "<td>[" + this.tags[this.count] + "]</td>";
                this.count++;
                mytable += "</tr></tbody></table></div>";

                document.getElementById("example-1").innerHTML += mytable;
            },
            act_tblcr: function() {
                var mytable = "<div><table cellpadding=\"0\" cellspacing=\"0\"><tbody><tr>";

                mytable += "</tr><tr>";
                mytable += "<td>"+this.count+"."+"[" + this.activity.act_name + "]"+"["+this.activity.start_date+"]"+"["+this.activity.fund_range+"]"+"</td>";
                mytable += "</tr></tbody></table></div>";

                document.getElementById("example-2").innerHTML += mytable;
            },
            //function to remove specific tag
            rem_tag: function(index){
                this.tags.splice(index, 1);
            },
            rem_act: function(index) {
                this.activities.splice(index, 1);
            },
            submit: function() {
                const data_json = JSON.stringify({
                    activities: this.activities,
                    tags: this.tags
                });
                console.log(data_json);
                // this.$http.post('http://localhost:5000/Feather/professor/signup/actandtags', data_json, {
                //     headers: {
                //         "Content-type": "application/json"
                //     }
                // })
                //     .then(response => {
                //         console.log(response);
                //     })
                //     .catch(error => {
                //         console.log(`error: ${error}`);
                //     });
            }
        }
    }
</script>

<style scoped>
  h4 {
    color: white;
  }
  .white-card {
    width: 450px;
    background: #337137;
  }
</style>
