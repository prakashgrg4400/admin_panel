import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export function formatDate(date: Date) {
    return dayjs(date).format("MMM DD , YYYY");
}

export function getRelativeTime({
    startDate,
    endDate,
}: {
    startDate: Date;
    endDate: Date;
}) {
    return dayjs(endDate).from(startDate);
}
