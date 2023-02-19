import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateTimeForm = ({ startDate, setStartDate }) => {
	return (
		<div>
			<DatePicker
				selected={startDate}
				onChange={(date) => setStartDate(date)}
			/>
		</div>
	);
};

export default DateTimeForm;
