import { useQuery } from "@tanstack/react-query";
import http from "../../lib/http";
import { toast } from "react-toastify";

async function getDashboardAPI() {
    try {
        const response = await http("/owner/company/dashboard");
        console.log("Dashboard ==> ", response);
        return response.data.data;
    } catch (error) {
        console.log("Error from useGetDashboardQuery ==> ", error);
        toast.error("Opps something went wrong ffrom useGetDashboardQuery");
    }
}
function useGetDashboardQuery() {
    return useQuery({
        queryKey: ["dashboard"],
        queryFn: () => getDashboardAPI(),
        refetchOnWindowFocus: false,
    });
}

export default useGetDashboardQuery;
