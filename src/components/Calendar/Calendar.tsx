import { DAYS, MONTHS } from "./constants";
import { DateInterface } from "./types";

export default function Calendar({ date }: DateInterface) {

    const currentDate: string[] = date.split('/').reverse();

    function getDays() {
        const date = new Date(Number(currentDate[0]), Number(currentDate[1]), Number(currentDate[2]));
        console.log(date)
        date.setDate(1);
        console.log(date)
        date.setMonth(date.getMonth() + 1);
        date.setDate(0);
        console.log(date, [date.getDay(), date.getDate(), date.getMonth()])
        return [date.getDay() - 1, date.getDate(), date.getMonth(), date.getFullYear()]
    }

    getDays()

    return (
        <div className="calendar">
            <div>{MONTHS[getDays()[2] - 1]} {getDays()[3] }</div>
            <div className="row">{DAYS.map((day) => {
                return <div className="day">{day.slice(0, 2)}</div>;
            })}
            </div>
            <div className="row">
                {Array.from({ length: getDays()[0] }, (_, index) => index).map((date) => {
                    return <div className="day"></div>
                })}
                {Array.from({ length: getDays()[1] }, (_, index) => index + 1).map((date) => {
                    return <div className={`day ${Number(currentDate[2]) === date ? 'selected' : ''}`}>{date}</div>
                })}
            </div>
        </div>
    )
}