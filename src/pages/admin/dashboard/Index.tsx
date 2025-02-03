import DashboardHeader from "../../../features/admin/dashboard/header";
import useGetPermittedProjectQuery from "../../../services/admin/use-get-permitted-project-query";

function Index() {
    const { data: projects } = useGetPermittedProjectQuery();
    console.log(projects);
    return (
        <main>
            <DashboardHeader />
        </main>
    );
}

export default Index;
