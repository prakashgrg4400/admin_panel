function Login() {
    return (
        <div className="my-4">
            <form action="" className="flex flex-col gap-4">
                <fieldset>
                    <div className="flex flex-col gap-2 ">
                        <label htmlFor="">Email</label>
                        <input
                            className="border-2 outline-none rounded-md py-[5px] px-[5px] text-sm    "
                            type="email"
                            name=""
                            id=""
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="flex flex-col gap-2 ">
                        <label htmlFor="">Password</label>
                        <div className="relative border-2 rounded-md">
                            <input
                                className=" outline-none  py-[5px] px-[5px] text-sm w-[90%]  "
                                type="password"
                                name=""
                                id=""
                            />
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 cursor-pointer ">
                                <span>icon</span>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Rememeber me</label>
                    </div>
                </fieldset>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-4 font-semibold rounded-[100px] "
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
