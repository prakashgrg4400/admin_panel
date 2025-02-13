import { useState } from "react";
import { formatDate, getRelativeTime } from "../../../utils/format-date";
import { DashboardOverDueTask } from "./overdue-task";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

interface OverdueTaskTableProp {
    tasks: DashboardOverDueTask[];
}

function OverdueTaskTable({ tasks }: OverdueTaskTableProp) {
    const [isOverdueTaskDrawerOpen, setOverdueTaskDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setOverdueTaskDrawerOpen(
            (isOverdueTaskDrawerOpen) => !isOverdueTaskDrawerOpen
        );
    };
    return (
        <>
            <table className="text-left">
                <thead>
                    <tr className="bg-[#F8FAFC] text-sm font-normal text-gray-600">
                        <th className="p-4">S.N</th>
                        <th className="p-4">Task</th>
                        <th className="p-4">To be completed by</th>
                        <th className="p-4">Due since</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => {
                        return (
                            <tr
                                key={task.id}
                                className="whitespace-nowrap text-base text-gray-600 cursor-pointer hover:bg-neutral-100"
                                onClick={() => {
                                    setOverdueTaskDrawerOpen(true);
                                }}
                            >
                                <td className="p-4">{index + 1}</td>
                                <td className="p-4">{task.name}</td>
                                <td className="p-4">
                                    {formatDate(task.endDate)}
                                </td>
                                <td className="p-4">
                                    {getRelativeTime({
                                        startDate: new Date(),
                                        endDate: task.endDate,
                                    })}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <Drawer
                open={isOverdueTaskDrawerOpen}
                onClose={toggleDrawer}
                direction="right"
                className="bg-red-400"
                size={"625px"}
            >
                <h1>Hello world</h1>
            </Drawer>
        </>
    );
}

export default OverdueTaskTable;
