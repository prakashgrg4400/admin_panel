import { Report } from "./today-report";

type TodayReportTableProp = {
    report?: Report;
};
function TodayReportTable({ report }: TodayReportTableProp) {
    return (
        <table className="w-full text-left mt-2">
            <thead>
                <tr className="text-neutral-500">
                    <th>S.N</th>
                    <th>Report ID</th>
                    <th>Site Engineer</th>
                    <th>Site</th>
                </tr>
            </thead>
            <tbody>
                {report?.items.map((item, index) => {
                    return (
                        <>
                            <tr className="text-neutral-800 text-sm">
                                <td>{index + 1}</td>
                                <td>#{item.id}</td>
                                <td>{item?.reportedBy?.name ?? "-"}</td>
                                <td>{item?.project?.name ?? "-"}</td>
                            </tr>
                        </>
                    );
                })}
            </tbody>
        </table>
    );
}

export default TodayReportTable;
