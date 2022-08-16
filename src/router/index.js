import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue';
import bookingConfirmation from '../components/bookingConfirmation.vue'
import signIn from '../components/signIn.vue'
import signUp from '../components/signUp.vue'
import contactUs from '../components/Home.vue'
import viewAppointments from '../components/viewAppointments.vue'
import bookAppointment from '../components/bookAppointment.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/signIn',
        name: 'signIn',
        component: signIn
    },
    {
        path: '/signUp',
        name: 'signUp',
        component: signUp
    },
    {
        path: '/contactUs',
        name: 'contactUs',
        component: contactUs
    },
    {
        name: "bookAppointment",
        component: bookAppointment,
        path: "/bookAppointment",
        meta: { auth: true },
        beforeEnter(to, from, next) {
            let currentUser = JSON.parse(window.localStorage.getItem('user'));
            console.log(currentUser)
            if (currentUser != undefined) {
                next();
            } else {
                next("/signIn");
            }
        }

    },
    {
        name: "bookingConfirmation",
        component: bookingConfirmation,
        path: "/bookingConfirmation",
        meta: { auth: true },
        beforeEnter(to, from, next) {
            let currentUser = JSON.parse(window.localStorage.getItem('user'));
            console.log(currentUser)
            if (currentUser != undefined) {
                next();
            } else {
                next("/signIn");
            }
        }

    },
    {
        name: "viewAppointments",
        component: viewAppointments,
        path: "/viewAppointments",
        beforeEnter(to, from, next) {
            let currentUser = JSON.parse(window.localStorage.getItem('user'));
            console.log(currentUser)
            if (currentUser != undefined) {
                next();
            } else {
                next("/signIn");
            }
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router