import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from "../pages/auth/admin-login";
function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/login/admin" element={<AdminLogin />} />
                    <Route
                        path="/admin/dashboard"
                        element={<h1>Welcome to the admin dashboard</h1>}
                    />
                    <Route path="*" element={<h1>hello</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Router;
