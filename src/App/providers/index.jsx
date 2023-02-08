import compose from "compose-function"
import {withMuiStyled} from "./mui/WithStyled"

export const withProviders = compose(withMuiStyled)
