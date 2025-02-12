import CardHeader from "./card-header";
import TodayReportTable from "./today-report-table";
import noReport from "../../../assets/admin/dashboard/no-report.svg";

export interface Project {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    location: string;
    hasCompleted: boolean;
    deletedAll: null;
}

export interface ReportedBy {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    hasInviteAccepted: boolean;
    email: string;
    isSuperAdmin: boolean;
    isOwnerOfCompany: boolean;
    contactNumber: number;
    profilePicture: string;
    personnelOfCompanyid: number;
    salaryPerDay: number;
    notificationToken: null;
}

export interface ReportItem {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    reportedDate: Date;
    weather: string;
    tomorrowTask: string;
    materialUsed: string;
    machineUsed: string;
    issue: string;
    safety: string;
    project: Project;
    reportedBy: ReportedBy;
}

export interface Report {
    items: ReportItem[];
    hasNextPage: boolean;
    currentPage: number;
    limits: number;
    totalItems: number;
    totalPages: number;
}

type TodayReport = {
    isLoading: boolean;
    report?: Report;
};

function TodayReport({ isLoading, report }: TodayReport) {
    const hasReport = report && report?.items.length > 0;
    return (
        <div className="bg-white p-4 rounded-xl ">
            <CardHeader
                title={`Todays Report (${report ? report.items.length : ""})`}
                description={`List of all reports from site engineers for today only`}
            />
            {isLoading ? (
                "Table is Loading(Skeletion Table)...."
            ) : hasReport ? (
                <TodayReportTable report={report} />
            ) : (
                <NoReport />
            )}
        </div>
    );
}

function NoReport() {
    return (
        <div className="flex items-center justify-center p-6">
            <div className="flex flex-col items-center">
                <img src={noReport} alt="" />
                <p>No Report</p>
            </div>
        </div>
    );
}

export default TodayReport;
