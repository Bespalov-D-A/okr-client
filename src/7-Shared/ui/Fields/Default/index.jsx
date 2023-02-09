import TextField from "@mui/material/TextField";

const DefaultField = (props) => {
	//error - текст ошибки или false
	const { id, label = 'Введите значение', variant = 'standard', defaultValue, error } = props;

	return (
		<TextField
			id={id}
			label={label}
			variant={variant}
			error={error}
			defaultValue={defaultValue}
			helperText={error}
		/>
	);
};

export default DefaultField;
