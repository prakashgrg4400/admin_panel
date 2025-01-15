import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import useAdminLoginMutation from "../../services/auth/use-admin-login-mutation";
import { ViewIcon, ViewOffIcon } from "hugeicons-react";
import * as yup from "yup";
import { useState } from "react";

interface IFormInput {
    email: string;
    password: string;
    isRememberMe?: boolean;
}

const schema = yup
    .object({
        email: yup
            .string()
            .email("Email must valid")
            .required("Email is required"),
        password: yup.string().required("Password is required"),
        isRememberMe: yup.boolean(),
    })
    .required();

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>({
        resolver: yupResolver(schema),
    });

    const [showPassword , setShowPassword] = useState(false);

    const { mutate : login , isPending } = useAdminLoginMutation();

    // console.log(errors);
    // console.log(isPending);
    const handleForm: SubmitHandler<IFormInput> = (data) => {
        // console.log(data);
        login(data);
    };

    return (
        <div className="my-4">
            <form
                action=""
                className="flex flex-col gap-4"
                onSubmit={handleSubmit(handleForm)}
            >
                <fieldset>
                    <div className="flex flex-col gap-2 ">
                        <label htmlFor="">Email</label>
                        <input
                            className="border-2 outline-none rounded-md py-[5px] px-[5px] text-sm    "
                            type="email"
                            id="email"
                            {...register("email")}
                        />
                        {errors.email && (
                            <p className="text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                </fieldset>
                <fieldset>
                    <div className="flex flex-col gap-2 ">
                        <label htmlFor="">Password</label>
                        <div className="relative border-2 rounded-md">
                            <input
                                className=" outline-none  py-[5px] px-[5px] text-sm w-[90%]  "
                                type={`${showPassword ? "text" : "password"}`}
                                id="password"
                                {...register("password")}
                            />
                            <div onClick={()=>{setShowPassword(curr=>!curr)}} className="absolute right-0 top-1/2 -translate-y-1/2 w-8 cursor-pointer ">
                                {showPassword ? <ViewOffIcon/> : <ViewIcon/>}
                            </div>
                        </div>
                        {errors.password && (
                            <p className="text-red-500">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                </fieldset>
                <fieldset>
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="isRememberMe"
                            {...register("isRememberMe")}
                        />
                        <label htmlFor="">Rememeber me</label>
                    </div>
                </fieldset>
                <button
                    type="submit"
                    disabled = {isPending}
                    className="bg-blue-500 text-white py-4 font-semibold rounded-[100px] "
                >
                    Login {isPending && "..."}
                </button>
            </form>
        </div>
    );
}

export default Login;
