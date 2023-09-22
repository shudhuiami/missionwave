import {createRouter, createWebHistory} from "vue-router";


//=====================
// Pages
//=====================
import Login from '../components/pages/auth/AdminLogin'
import Layout from '../components/pages/layout/AdminLayout';
import Dashboard from '../components/pages/dashboard/AdminDashboard'

const ROOT_URL = "/admin";
const routes = [

    // Authentication
    {path: ROOT_URL + '/auth/login', name: 'Login', component: Login},

    // Dashboard Panel Layout
    {
        path: ROOT_URL + '/', name: 'Layout', component: Layout,
        children: [
            // Dashboard
            {path: ROOT_URL + '/', name: 'Dashboard', component: Dashboard},
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;

