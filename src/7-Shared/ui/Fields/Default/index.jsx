import TextField from "@mui/material/TextField";

const DefaultField = (props) => {
	const {
		name,
		value,
		onChange,
		setFieldTouched,
		errors,
		touched,
		required,
		fieldtype,
		label = "Введите значение",
		variant = "standard",
	} = props;

	return (
		<TextField
			id={name}
			name={name}
			value={value}
			onChange={onChange}
			required={required}
			variant={variant}
			type={fieldtype}
			label={label}
			onBlur={()=>setFieldTouched(name)}
			error={errors[name] && touched}
			helperText={errors[name] && touched ? errors[name] : null}
		/>
	);
};
export default DefaultField;
