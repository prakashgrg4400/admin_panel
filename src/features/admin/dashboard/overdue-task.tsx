import CardHeader from "./card-header";
import OverdueTaskTable from "./overdue-task-table";
import { Project } from "./today-report";

interface Milestone {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    weightage: number;
    startDate: Date;
    endDate: Date;
    totalTasks: number;
    totalCompletedTasks: number;
    totalPercentCompleteSum: number;
    deletedAt: null;
    project: Project;
}

interface QualityCheck {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    hasChecked: boolean;
    checkedAt: null;
}

export interface DashboardOverDueTask {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    percentComplete: number;
    description: string;
    startDate: Date;
    endDate: Date;
    milestone: Milestone;
    qualityChecks: QualityCheck[];
}

interface OverDueTask {
    tasks: DashboardOverDueTask[];
    isLoading: boolean;
}
function OverDueTask({ tasks, isLoading }: OverDueTask) {
    const hasTask = tasks && tasks.length > 0;
    return (
        <div className="bg-white rounded-2xl p-4 overflow-x-auto ">
            <CardHeader
                title={`Overdue Tasks (${hasTask ? tasks.length : 0})`}
                description={`List of all overdue tasks from all projects.`}
            />
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <OverdueTaskTable tasks={tasks} />
            )}
        </div>
    );
}

export default OverDueTask;
