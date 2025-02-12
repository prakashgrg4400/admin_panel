import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RootState } from "../../../redux/store";
import { IUserState } from "../../../redux/slices/user-slice";
import { Link } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";

function Index({ className }: { className: string }) {
    const { pathname } = useLocation();
    const { user } = useSelector<RootState, IUserState>((state) => state.user);
    console.log(user);

    return (
        <aside className={`${className} flex flex-col gap-4 p-5 h-screen `}>
            <Link to="/admin/dashboard">
                <img
                    src="https://img.freepik.com/premium-vector/skycraper-construction-logo-illustration-design_221955-129.jpg?semt=ais_hybrid"
                    className="bg-[#FAFAFA] w-[150px] mx-auto pt-1"
                    alt=""
                />
            </Link>

            {user?.company?.name ? (
                <div>
                    <p className="text-left pl-4 text-[#334155] font-semibold text-xl">
                        {user.company.name}
                    </p>
                </div>
            ) : (
                ""
            )}
            <Link to={"/admin/dashboard"}>
                <div
                    className={`flex pl-4 items-center gap-2 ${
                        pathname === "/admin/dashboard"
                            ? "bg-blue-50 text-blue-500 p-2 rounded-lg"
                            : "text-gray-500"
                    }`}
                >
                    <LuLayoutDashboard className="text-2xl" />
                    <p className="text-xl">Dashboard</p>
                </div>
            </Link>
        </aside>
    );
}

export default Index;
