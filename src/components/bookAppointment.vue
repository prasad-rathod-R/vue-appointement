<template>
  <div class="div-css">
    <form @submit.prevent="appointment">
      <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/">Log Out</router-link> |
  </div>
      <table class="for-table-booking">
        <thead style="color: #313634">
          Book Appointment And Save Time
        </thead>
        <tr>
          <td><label>Enter Your Full Name</label></td>
          <td>
            <input
              type="text"
              placeholder="Enter Full name"
              v-model="name"
              name="name"
              pattern="[A-Za-z ]{4,32}"
              required
            />
          </td>
          <p class="for-error-message">{{ nerror }}</p>
        </tr>
        <tr>
          <td><label>Enter Your Mobile Number</label></td>
          <td>
            <input
              type="text"
              placeholder="Enter Mobile Number"
              v-model="contact"
              name="contact"
              pattern="[0-9]{10}"
              required
            />
          </td>

          <p class="for-error-message">{{ cerror }}</p>
        </tr>
        <tr>
          <td><label>Select Appointment Date</label></td>
          <td>
            <input type="date" :min="minDate" v-model="date" required />
          </td>
          <p class="for-error-message">{{ derror }}</p>
        </tr>

        <tr>
          <td></td>
          <td>
            <button>Book Appointment</button>
          </td>
        </tr>

        <br />
        <tr>
          <td>
            <router-link to="/viewAppointments" class="for-router-view-booking"
              >View All Bookings</router-link
            >
          </td>
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
      name: "",
      contact: "",
      date: "",
      minDate: new Date().toISOString().substring(0, 10),
      nerror: "",
      cerror: "",
      derror: "",
      serror: [],
    };
  },
  methods: {
    appointment() {
      if (this.name && this.contact && this.date) {
        console.log("bookAppoitement");
        this.bookAppointement();
      }
      this.nerror = " ";
      if (!this.name) {
        this.nerror.push("name is required");
      }
      this.cerror = " ";
      if (!this.contact) {
        this.cerror.push("contact number is required ");
      }
      /* if(!this.contact.length!=10)
      this.serror.push("Check Your Contact Number") */

      this.derror = " ";
      if (!this.date) {
        this.derror.push("Select Appointement");
      }
      console.warn("error", this.error);
    },
    async bookAppointement() {
      let result = await axios.post("http://localhost:8080/bookAppointement", {
        name: this.name,
        contact: this.contact,
        date: this.date,
      });
      console.warn(result);

      if (result.status == 200) {
        localStorage.setItem("appointements", JSON.stringify(result.data));
        this.$router.push({ name: "bookingConfirmation" });
      }
    },
  },
};
</script>

<style>
.for-table-booking {
  margin-left: 35% !important;
  padding: 34px;
  background-color: rgb(219, 219, 231);
  margin-top: 7%;
  color: rgb(66, 60, 148);
  font-family: Comic Sans MS, Comic Sans, cursive;
  font-weight: 900;
  margin-left: 20%;
  position: absolute;
}
.btn-logout {
  margin: 0;
  margin-left: 3%;
  padding: 10px 20px;
  background-color: #1c56c2;
  color: white;
}
.for-router-view-booking {
  margin: 0;
  margin-left: 12%;
  color: white;
  padding: 10px 20px;
  background-color: #1c56c2;
}
</style>