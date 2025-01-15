import { useMutation } from "@tanstack/react-query";
import http from "../../lib/http";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../redux/slices/user-slice";

interface IFormInput {
    email: string;
    password: string;
    isRememberMe?: boolean;
}

async function func(data: IFormInput) {
    const response = await http.post(`/admin/auth/login`, data);
    console.log(response);
    return { ...response.data, isRememberMe: data.isRememberMe };
}

function useAdminLoginMutation() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return useMutation({
        mutationFn: func,
        onSuccess: (data) => {
            console.log("data => ", data);
            dispatch(
                setLogin({
                    token: data?.data.tokens.bearerToken,
                    userData: {
                        ...data?.data.admin,
                        company: data?.data?.company,
                    },
                    isRememberMe: data.isRememberMe,
                })
            );
            navigate("/admin/dashboard");
        },
        onError: (err) => {
            console.log("Error from admin mutations :- ", err);
        },
    });
}

export default useAdminLoginMutation;
