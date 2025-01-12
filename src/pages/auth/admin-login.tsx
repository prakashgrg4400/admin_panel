import Login from "../../components/auth/login";

function AdminLogin() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center  ">
            <div className="my-4">
                <h1>Logo</h1>
            </div>
            <div className="min-h-[300px] rounded-[20px] p-8 min-w-[500px] shadow-[0px_0px_8px_5px_#F1F1F1] ">
                <h2 className="text-center text-3xl text-gray-700 font-semibold">
                    Sign in to eNirman
                </h2>
                <p className="text-center text-gray-400 my-4 ">
                    Enter the details below and login
                </p>
                <Login />
                <div className="flex justify-between ">
                    <a href="" className="font-semibold text-blue-600">
                        Sign in as SuperAdmin
                    </a>
                    <a href="" className="text-red-500">
                        forgot password
                    </a>
                </div>
            </div>
        </section>
    );
}

export default AdminLogin;
