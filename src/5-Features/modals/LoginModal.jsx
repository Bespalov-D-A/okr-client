import {useLoginModal} from "../../6-Entities/modals"
import ModalUI from "../../7-Shared/ui/Modal"

const RegistrationModal = ({component}) => {
	const openLoginModal = useLoginModal(state => state.open)
	const setOpenLoginModal = useLoginModal(state=> state.setOpen)

	return <ModalUI
				btnTitle="Вход"
				title='Авторизация'
				JSXcomponent={component}
				open={openLoginModal}
				handleClose={() => setOpenLoginModal(false)}
				callback={() => setOpenLoginModal(false)}
			/>
}

export default RegistrationModal
