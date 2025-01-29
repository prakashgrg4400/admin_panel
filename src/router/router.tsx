import { BrowserRouter, Route, Routes } from "react-router-dom";
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
        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/login/admin" element={<AdminLogin />} />
        //         <Route
        //             path="/admin/dashboard"
        //             element={<h1>Welcome to the admin dashboard</h1>}
        //         />
        //         <Route path="*" element={<h1>hello</h1>} />
        //     </Routes>
        // </BrowserRouter>
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
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
