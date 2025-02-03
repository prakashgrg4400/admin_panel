import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { IUserState } from "../../../redux/slices/user-slice";
import { CiMail } from "react-icons/ci";

function DashboardHeader() {
    const { user } = useSelector<RootState, IUserState>((state) => state.user);
    return (
        <div className="space-y-4 ">
            <h2 className="text-3xl font-bold">
                Welcome back, {user?.company?.name}
            </h2>
            <div className="inline-flex items-center bg-white gap-2 p-2 rounded-md ">
                <CiMail className="inline" />
                <span className="">{user?.email}</span>
            </div>
        </div>
    );
}

export default DashboardHeader;
