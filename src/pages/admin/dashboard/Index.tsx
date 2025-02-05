import DashboardHeader from "../../../features/admin/dashboard/header";
import DashboardReceivablePayable from "../../../features/admin/dashboard/receivable-payable";
import useGetDashboardQuery from "../../../services/admin/use-get-dashboard-query";
import useGetPermittedProjectQuery from "../../../services/admin/use-get-permitted-project-query";

function Index() {
    const { data: projects } = useGetPermittedProjectQuery();
    console.log(projects);

    const { data: dashboard, isLoading: isDashboardLoading } =
        useGetDashboardQuery();
    return (
        <main>
            <DashboardHeader />
            <DashboardReceivablePayable
                receivables={dashboard?.receivables}
                payables={dashboard?.payables}
                isLoading={isDashboardLoading}
            />
        </main>
    );
}

export default Index;
