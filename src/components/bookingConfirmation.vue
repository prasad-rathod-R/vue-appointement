<template>
<div class="about-page-div">
  <center>
<img src="@/assets/giphy-rt.gif" style="height:340px">
  <p>Apppointement Booked Sucessfully</p></center>
  <button><router-link to="/viewAppointments"
              >View All Bookings</router-link></button></div>
</template>

<script>
export default {

}
</script>

<style>
.about-page-div{margin-top: 10%;text-align: center;}
.about-page-div-two{color:rgb(157, 19, 255)}
#nav {
  padding: 13px;
  text-align: end;
  background-color: #3a45dd;
  width: 100%;
  color: white; 
  top:0%;
  font-family: Comic Sans MS, Comic Sans, cursive;
  font-weight: 900;
  position:fixed;
  
}
</style>