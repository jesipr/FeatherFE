 <template>
  <div class="profile">
    <div v-show="!loading">
      <b-jumbotron class="header-info">
        <b-row no-gutter>
          <b-col class md="5">
            <h1 class="display-3">{{companyData.firstname}} {{companyData.lastname}}</h1>
          </b-col>
          <b-col class="profile-info" md="7">
            <div class="profile-position">
              <h4>
                <font-awesome-icon icon="suitcase" />Position
              </h4>
              <p>
                <span>{{companyData.empposition}}</span>
                at
                <span>{{companyData.companyname}}</span>
              </p>
            </div>
            <div class="area-of-interest">
              <div class="mt-2">
                <h4>Areas of Interest</h4>
              </div>
              <div class="badges mt-1">
                <div>
                  <b-badge v-for="area in companyData.areasinterest">{{area}}</b-badge>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-jumbotron>

      <b-container>
        <b-row no-gutter class="mt-5">
          <div class="activities-header">
            <h3>Activities</h3>
          </div>
          <div class="badges mt-1 mb-4">
            <div>
              <b-badge
                v-for="activity in companyData.activities"
                :key="activity.actid"
                variant="secondary"
              >{{activity.actname}}</b-badge>
            </div>
          </div>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";

export default {
  data() {
    return {
      companyData: {
        firstname: null,
        lastname: null,
        empposition: null,
        companyname: null,
        areasinterest: [],
        activities: []
      },
      loading: true,
    };
  },
  methods: {
    init() {
      //Populate Profile Information at start
      var userid = this.$route.params.id;
      var token = localStorage.getItem("token");
      axios({
        url: "http://localhost:5000/Feather/getprofilebyuserid/" + userid,
        method: "get"
      })
        .then(response => {
          if (response.data.company) {
            console.log(response);
            this.companyData.firstname = response.data.firstname;
            this.companyData.lastname = response.data.lastname;
            this.companyData.empposition = response.data.empposition;
            this.companyData.companyname = response.data.company;
            this.companyData.areasinterest = response.data.tags;
            this.companyData.activities = response.data.activities;
          } else {
            //populate professor variables
          }
          this.loading = false;
        })
        .catch(error => {
          console.log(`error: ${error}`);
        });
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.init();
      next();
    });
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Hind+Madurai:700|Josefin+Sans:400,700|Leckerli+One|Open+Sans:400,400i,600,600i,700,700i&display=swap");
.svg-inline--fa {
  margin-right: 0.3rem;
}
p {
  font-family: "Open Sans", sans-serif;
}
h2 {
  font-family: "Josefin Sans", sans-serif;
  font-size: 4rem;
  font-weight: bold;
}
.header-info {
  text-align: left;
}
.profile-position,
.area-of-interest {
  padding-left: 10px;
}
.profile-info {
  text-align: left;
  border-left: 1px solid #a8b2beb2;
  padding-left: 0;
}
.profile-info p {
  font-weight: 600;
  margin-bottom: 0;
}
.profile-info h4 {
  font-weight: 400;
  margin-bottom: 0.2rem;
  color: #a8b2be;
  font-size: 14px;
}
.profile-position {
  border-bottom: 1px solid #a8b2beb2;
  padding-bottom: 10px;
}
.header-info h1 {
  font-family: "Josefin Sans", sans-serif;
}
.jumbotron {
  padding: 2rem 2.5rem;
  background-color: #313e50;
  border-radius: 0;
  color: white;
}
.badges {
  text-align: left;
}
.badge {
  font-size: 12px;
  margin-right: 1rem;
}
.activities-header {
}
.activities-header h3 {
  font-family: "Open Sans", sans-serif;
  margin-bottom: 0;
  font-weight: bold;
  text-align: left;
  margin-bottom: 0;
}
</style>
