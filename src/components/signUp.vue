<template>
  <div>
  <!-- <div class="for-div"><img src="@/assets/home-slide3.png" style="height:340px"></div> -->
  <div>
    <form @submit.prevent="signUp">
      <table class="for-table-signUp">
     <h1>Sign Up</h1>
     <tr>
          <td><label>Enter email</label></td>
          <td>
            <input type="email" placeholder="enter email" v-model="email" />
            
          </td>
          <p class="for-error-message">{{ eerror }}</p>
        </tr>
        <tr>
          <td><label>Enter name </label></td>
          <td>
            <input type="text" placeholder="enter name" v-model="name" pattern="[A-Za-z ]{4,32}"/>
          </td>
          <p class="for-error-message">{{ nerror }}</p>
        </tr>
        <tr>
          <td><label>Enter password</label></td>
          <td>
            <input
              type="password"
              placeholder="password"
  
              v-model="password"
            />
          </td>
          <p class="for-error-message">{{ perror }}</p>
        </tr>
        <tr>
        <td><button  class="btn-signup">Register</button></td><br><br>
         
        </tr>
        <br><br><br><br>
        <tr><td>
           <router-link to="/signIn" class="router-link"
              >Existing User</router-link></td>
        </tr>
      </table>
    </form>
  </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      error: [],
      email: "",
      name: "",
      password: "",
      eerror: "",
      nerror:"",
      perror: ""
    };
  },
  methods: {
    signUp() {
      if (this.email && this.name && this.password ) {
          console.log("exxxppws dgdg")
        this.signup()
      }
      this.eerror = " ";
      if (this.email.length == 0) {
        this.eerror="email is required";
      }
      this.nerror = " ";
      if (this.name.length == 0) {
        this.nerror="name is required";
      }
      
      this.perror = " ";
      if (this.password.length == 0) {
        this.perror="password is required";
      }
      console.warn("error", this.error);
      
    },

     async signup() {
    let result = await axios.post("http://localhost:8080/signup", {
      name: this.name,
      password: this.password,
      email: this.email,
    });
    console.warn(result);

    if (result.status == 200) {
      localStorage.setItem("user", JSON.stringify(result.data));
      this.$router.push({ name: "signIn" });
    }

},
  }}
</script>

<style>
.for-table-signUp {
 margin-left:35% !important;
 padding: 34px;
  background-color: rgb(219, 219, 231);
  margin-top: 7%;
color: rgb(66, 60, 148);
  font-family: Comic Sans MS, Comic Sans, cursive;
  font-weight: 900;
  margin-left: 20%;
  position: absolute;
}
.for-table-signUp td{
  padding:15px;
}
.btn-signup {
  margin: 0;
  position: absolute;
  margin-left: 45%;
  background-color: rgba(255, 255, 255, 0.87);
}
.router-link{margin-left:67%;}
.for-div{margin-top: 7%;margin-left:25% !important; height:340px}
span{
color: rgb(70, 70, 150);
}
</style>