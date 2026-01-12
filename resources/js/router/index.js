import { createRouter, createWebHistory } from "vue-router";
import IndexPage from "../Pages/Index.vue";
import LoginPage from "../Pages/Login.vue";
import SignUpPage from "../Pages/SignUp.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: IndexPage,
        },
        {
            path: "/login",
            component: LoginPage,
        },
        {
            path: "/signup",
            component: SignUpPage,
        },
    ],
});

export default router;
