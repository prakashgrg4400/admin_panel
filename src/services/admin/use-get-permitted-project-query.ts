import { useQuery } from "@tanstack/react-query";
import http from "../../lib/http";
import { toast } from "react-toastify";

async function getPermittedProjectApi() {
    try {
        const response = await http("/admin/project/permitted");
        return response;
    } catch (error) {
        console.log("error ==> ", error);
        toast.error("Something went wrong");

        return;
    }
}
function useGetPermittedProjectQuery() {
    return useQuery({
        queryKey: ["projects"],
        queryFn: () => getPermittedProjectApi(),
        refetchOnWindowFocus: false,
    });
}

export default useGetPermittedProjectQuery;
