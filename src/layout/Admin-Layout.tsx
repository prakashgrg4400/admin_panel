import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { IUserState } from "../redux/slices/user-slice";
import { RootState } from "../redux/store";
import Sidebar from "../features/admin/sidebar/Index";

function AdminLayout({ children }: { children: React.ReactNode }) {
    const { pathname } = useLocation();

    const { loginStatus } = useSelector<RootState, IUserState>(
        (state) => state.user
    );

    if (!loginStatus) {
        return <Navigate to={"/login/admin"} />;
    }

    if ((loginStatus && pathname === "/") || pathname === "/admin") {
        return <Navigate to={"/admin/dashboard"} />;
    }

    console.log(pathname);
    return (
        <div className="flex bg-neutral-50 relative ">
            <Sidebar className="sticky bg-[#FFFFFF] w-[256px] h-screen top-0 shadow-xl  " />
            <div className="bg-[#F1F5F9] w-[calc(100vw-256px)]  left-[calc(260px)] fixed overflow-y-auto h-screen p-6 md:p-12 ">
                {children}
            </div>
        </div>
    );
}

export default AdminLayout;
