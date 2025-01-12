import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from "../pages/auth/admin-login";
function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/admin/login" element={<AdminLogin />} />
                    <Route path="*" element={<h1>hello</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Router;
