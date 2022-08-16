<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/about">Log Out</router-link> |
  </div>
  
  <div>
    <center>
      <h1>Appointements</h1>
      <bookAppointment />
    </center>
  </div>
   <div>
     <button @click="viewAppointments">View Appointments</button> |
      <button>
        <router-link to="/bookAppointment">Back To Booking</router-link>
      </button>
  </div>
  <div>
    <table id="firstTable">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>contact</th>
          <th>appointmentDate</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in viewAppointements" :key="row.id">
          <td>{{ row.id }}</td>
          <td>{{ row.name }}</td>
          <td>{{ row.contact }}</td>
          <td>{{ row.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "ViewAppointements",
  data() {
    return {
      viewAppointements: [],
    };
  },
  methods: {
    viewAppointments() {
      console.log("entered function");
      fetch(" http://localhost:8080/showAllAppointements")
        .then((response) => response.json())
        .then((data) => {
          this.viewAppointements = data;
          console.table(data);
        });
    },
    logOut() {
      localStorage.clear();
alert("Sign out Sccessfull Please Login Again")
      this.$router.push("/signIn");
    },
  },
};
</script>


<style type="text/css">
ul {
  list-style: none;
}
li {
  display: inline;
}
#firstTable {
  width: 100%;
}
#firstTable td {
  padding: 5px;
  text-align: center;
  border: solid black 1px;
}
</style>