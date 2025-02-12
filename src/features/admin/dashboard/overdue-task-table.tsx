import { DashboardOverDueTask } from "./overdue-task";

interface OverdueTaskTableProp {
    tasks: DashboardOverDueTask[];
}

function OverdueTaskTable({ tasks }: OverdueTaskTableProp) {
    return (
        <table className="overflow-x-auto">
            <thead>
                <tr>
                    <th>S.N</th>
                    <th>Task</th>
                    <th>To be completed by</th>
                    <th>Due since</th>
                </tr>
            </thead>
        </table>
    );
}

export default OverdueTaskTable;
