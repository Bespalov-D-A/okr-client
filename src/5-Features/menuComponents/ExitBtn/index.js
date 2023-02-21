import Button from "@mui/material/Button"
import s from './index.module.scss'

const ExitBtn = () => {
	const handleClick = () => {

	}

return   <Button onClick={handleClick} className={s.btn} variant="outlined" color="secondary">
            Выйти из аккаунта
          </Button>

}

export default ExitBtn
