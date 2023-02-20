import TextField from "@mui/material/TextField";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import "react-datepicker/dist/react-datepicker.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import Typography from "@mui/material/Typography";
import s from "./index.module.scss";

const DateTimeForm = ({ listTime, setListTime, listDate, setListDate }) => {
	return (
		<div>
			<Typography className={s.title} component="p">
				Когда должен быть выполнен этот лист?
			</Typography>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<MobileDatePicker
					label="Выберите дату"
					value={listDate}
					onChange={(newValue) => {
						setListDate(newValue);
					}}
					renderInput={(params) => (
						<TextField {...params} style={{ marginRight: 12 }} />
					)}
				/>
				<MobileTimePicker
					label="Выберите время"
					ampm={false}
					value={listTime}
					onChange={(newValue) => {
						setListTime(newValue);
					}}
					renderInput={(params) => <TextField {...params} />}
				/>
			</LocalizationProvider>
		</div>
	);
};

export default DateTimeForm;
