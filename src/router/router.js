import {createRouter, createWebHistory} from "vue-router";


//=====================
// Pages
//=====================
import Login from '../components/pages/auth/AdminLogin'
import Register from '../components/pages/auth/AdminRegister'
import Layout from '../components/pages/layout/AdminLayout';
import Dashboard from '../components/pages/dashboard/AdminDashboard'
import TaskList from "@/components/pages/task/TaskList";
import TaskManage from "@/components/pages/task/TaskManage";

const ROOT_URL = "/admin";
const routes = [

    // Authentication
    {path: ROOT_URL + '/auth/login', name: 'Login', component: Login},
    {path: ROOT_URL + '/auth/register', name: 'Register', component: Register},

    // Dashboard Panel Layout
    {
        path: ROOT_URL + '/', name: 'Layout', component: Layout,
        children: [
            // Dashboard
            {path: ROOT_URL + '/', name: 'Dashboard', component: Dashboard},

            // Task
            {path: ROOT_URL + '/task', name: 'Task', component: TaskList},
            {path: ROOT_URL + '/task/:id', name: 'TaskManage', component: TaskManage},
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;

