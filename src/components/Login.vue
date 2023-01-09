<template>
  <div class="vue-tempalte">
    <div class="vertical-center">
      <div class="inner-block">
        <h3>Sign In</h3>
        <div class="form-group">
          <label>Email address</label>
          <input type="email" class="form-control form-control-lg" v-model="msg" />
        </div>
        <!-- control login or not -->
        <!-- <router-link
          v-if='login' to="/creditLoan"
        > -->
        <button type="submit" class="btn btn-dark btn-lg btn-block" v-on:click="handleClick">
          Sign In
        </button>
        <!-- <p class="forgot-password text-right mt-2 mb-4">
          <router-link to="/forgot-password">Forgot password ?</router-link>
        </p> -->
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router';
import axios from 'axios';

  export default {
      data() {
          return {
              msg:"",
          }
      },
      methods: {
          handleClick: function(){
              axios({
                  method: 'post',
                  url: "https://ts6-scsb.apps.openshift.jvsf.p2.openshiftapps.com/user/login",
                  data: {
                      email: this.msg,
                  }
              })
              .then((res) => {
                  console.log(res.data);
                  if (res.data.apiResponseStatus.message == "Success") {
                    sessionStorage.setItem('account', res.data.returnData.email);
                    this.$router.push('/home')
                    // this.login === true;
                  } else {
                    console.log('False ya')
                    alert("Please re-enter your IBM email");
                  }
                  // console.log("Current login status" + this.login);
              })
              .catch(error => {
                console.log(error.response);
                alert("Please re-enter your IBM email");
                location.reload();
              });
              console.log(this.msg);
          },
      },
      mounted () {
        if (sessionStorage.getItem('account')) {
          alert("Already sign in!");
          this.$router.push('/home');
        }
        console.log('mounted');
      },
  }
</script>
