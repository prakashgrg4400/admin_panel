import React, { lazy } from "react";

// const AdminLogin: React.FC = import("../../pages/auth/admin-login");
const AdminLogin: React.FC = lazy(() => import("../../pages/auth/admin-login"));

// const AdminLogin: React.FC = lazy(() => import("@pages/auth/admin-login"));
interface IAuthRoutes {
    id: string;
    path: string;
    component: React.FC;
    meta: {
        superAdminLayout?: false;
        adminLayout?: false;
        privateRoute: false;
    };
}

const authRoutes: IAuthRoutes[] = [
    {
        id: "login",
        path: "/login/admin",
        component: AdminLogin,
        meta: {
            privateRoute: false,
        },
    },
];

export default authRoutes;
