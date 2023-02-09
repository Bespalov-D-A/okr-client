import compose from "compose-function"
import {withMuiStyled} from "./mui/WithStyled"

//композируем все необходимые для приложения провайдеры
export const withProviders = compose(withMuiStyled)
