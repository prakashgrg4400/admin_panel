import DashboardHeader from "../../../features/admin/dashboard/header";
import OverDueTask from "../../../features/admin/dashboard/overdue-task";
import DashboardReceivablePayable from "../../../features/admin/dashboard/receivable-payable";
import TodayReport from "../../../features/admin/dashboard/today-report";
import useGetDashboardQuery from "../../../services/admin/use-get-dashboard-query";
import useGetPermittedProjectQuery from "../../../services/admin/use-get-permitted-project-query";

function Index() {
    const { data: projects } = useGetPermittedProjectQuery();
    console.log(projects);

    const { data: dashboard, isLoading: isDashboardLoading } =
        useGetDashboardQuery();
    console.log(
        "Dashboard ==> ",
        dashboard,
        "loading ===> ",
        isDashboardLoading
    );
    return (
        <main>
            <DashboardHeader />
            <DashboardReceivablePayable
                receivables={dashboard?.receivables}
                payables={dashboard?.payables}
                isLoading={isDashboardLoading}
            />
            <div className="mt-4 grid grid-cols-2 space-x-6">
                <TodayReport
                    isLoading={isDashboardLoading}
                    report={dashboard?.report}
                />
                <OverDueTask
                    tasks={dashboard?.task}
                    isLoading={isDashboardLoading}
                />
            </div>
        </main>
    );
}

export default Index;
