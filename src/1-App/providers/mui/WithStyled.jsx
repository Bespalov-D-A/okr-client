import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { theme } from "../../mui/WithTheme";

//импортируем кастомизированную тему, оборачиваем ей приложение
//Оборачиваем приложение StyledEngine что бы css был выше mui cssInJs
export const withMuiStyled = (YourReactComponent) => () =>
	(
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>{YourReactComponent}</ThemeProvider>
		</StyledEngineProvider>
	);
