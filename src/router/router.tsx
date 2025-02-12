import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import AdminLogin from "../pages/auth/admin-login";
import authRoutes from "./routes/auth-routes";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import adminRoutes from "./routes/admin-routes";
import { Suspense } from "react";
import AdminLayout from "../layout/Admin-Layout";
function Router() {
    const loginStatus = useSelector<RootState>(
        (states) => states.user.loginStatus
    );
    return (
        <BrowserRouter>
            <Routes>
                {!loginStatus
                    ? authRoutes.map((authRoute) => (
                          <Route
                              key={authRoute.id}
                              path={authRoute.path}
                              element={<authRoute.component />}
                          />
                      ))
                    : adminRoutes.map((route) => (
                          <Route
                              key={route.id}
                              path={route.path}
                              element={
                                  <AdminLayout>
                                      <Suspense fallback={<h2>Loading...</h2>}>
                                          <route.component />{" "}
                                      </Suspense>
                                  </AdminLayout>
                              }
                          />
                      ))}
                <Route path="/" element={<Navigate to={"/login/admin"} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
