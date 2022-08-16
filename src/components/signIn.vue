<template>
  <p v-if="error.length">
    <center><b>Please correct the errors</b></center>
  </p>
  <div>
    <form @submit.prevent="login">
      <table class="for-table">
        <span class="for-span"><th>Sign In</th></span>
        <tr>
          <td><label>Enter email</label></td>
          <td>
            <input
              type="email"
              placeplaceholder="enter email"
              v-model="email"
              required
            />
          </td>
          <td>
            <p class="for-error-message">{{ eerror }}</p>
          </td>
        </tr>

        <tr>
          <td><label>Enter password</label></td>
          <td>
            <input
              type="password"
              placeplaceholder="password"
              v-model="password"
              required 
            />
          </td>
          <td>
            <p class="for-error-message">{{ perror }}</p>
          </td>
        </tr>
        <br />
        <tr>
          <td><router-link to="/signUp" class="router-link">New User</router-link></td>
          <!-- <td><button class="btn-signIn">Sign In</button><br /></td> -->
            <td><button class="btn-signIn">Sign In</button><br /></td>
          
        </tr>
      </table>
    </form>
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
      password: "",
      eerror: "",
      perror: "",
    };
  },
  methods: {
    login() {
      if (this.email && this.password) {
        console.log("login function called ");
        this.signIn();
      }
      this.eerror = " ";
      if (!this.email) {
        this.eerror.push("email is required");
      }
      this.perror = " ";
      if (!this.password) {
        this.perror.push("password required");
      }
      console.warn("error", this.error); 
    },
    async signIn() {
      let result = await axios.post(
        `http://localhost:8080/users/login`,{email: this.email, password :this.password}).then(function (response)
         {return response}).catch(function (error) {console.log(error);});
      if (result.status == 200) {
        console.log(result.data);
        if (
          result.data == "SUCCESS"
        ) 
        
        {
         window.localStorage.setItem("user",JSON.stringify(result.data[0]))
         this.$router.push({ name: "bookAppointment" });
        } 
        else{
          alert("Wrong Credentials ")
          }
      }
    },
  },
};
</script>

<style>
.for-table {
  margin-left: 30% !important;
  padding: 60px;
  background-color: rgb(219, 219, 231);
  margin-top: 7%;
  color: rgb(66, 60, 148);
  font-family: Comic Sans MS, Comic Sans, cursive;
  font-weight: 900;
  margin-left: 20%;
  position: absolute;

}
.for-table td{
  padding:20px;
}


.btn-signIn{
  color: white;
  margin-left:30px;
  background-color: #1c56c2;
}
.for-span {
  color: white;
  margin-left: 60%;
  font-size: 25px;
  color: rgb(12, 48, 209);
}
.router-link {
  margin: 0;
  position: absolute;
  top: 75%;
  margin-left: 28%;
}
.for-error-message {
  color: rgba(243, 28, 12, 0.925);
  font: italic;
}
</style>