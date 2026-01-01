import { DAYS, MONTHS } from "./constants";
import { DateInterface } from "./types";

export default function Calendar({ date }: DateInterface) {

    const currentDate: string[] = date.split('/').reverse();

    function getDetails() {
        const date = new Date(Number(currentDate[0]), Number(currentDate[1]), Number(currentDate[2]));
        date.setDate(1);
        date.setMonth(date.getMonth() + 1);
        date.setDate(0);
        return [date.getDay() - 1, date.getDate(), date.getMonth(), date.getFullYear()]
    }

    getDetails()

    return (
        <div className="calendar">
            <div>{MONTHS[getDetails()[2] - 1]} {getDetails()[3] }</div>
            <div className="row">{DAYS.map((day) => {
                return <div className="day">{day.slice(0, 2)}</div>;
            })}
            </div>
            <div className="row">
                {Array.from({ length: getDetails()[0] }, (_, index) => index).map((date) => {
                    return <div className="day"></div>
                })}
                {Array.from({ length: getDetails()[1] }, (_, index) => index + 1).map((date) => {
                    return <div className={`day ${Number(currentDate[2]) === date ? 'selected' : ''}`}>{date}</div>
                })}
            </div>
        </div>
    )
}