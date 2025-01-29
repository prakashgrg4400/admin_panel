import { lazy } from "react";

const dashboard = lazy(() => import("../../pages/admin/dashboard/Index"));

interface IAdminRoutes {
    id: string;
    path: string;
    component: React.FC;
    meta?: {
        privateRoute?: boolean;
        adminLayout?: boolean;
    };
}

const adminRoutes: IAdminRoutes[] = [
    {
        id: "dashboard",
        path: "/admin/dashboard",
        component: dashboard,
        meta: {
            privateRoute: true,
            adminLayout: true,
        },
    },
];

export default adminRoutes;
