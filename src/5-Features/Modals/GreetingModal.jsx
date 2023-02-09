import {useModalStore} from "../../6-Entities/modals"
import ModalUI from "../../7-Shared/ui/Modal"

const GreetingModal = ({component}) => {
	const openGreetingModal = useModalStore(state => state.open)
	const setOpenGreetingModal = useModalStore(state=> state.setOpen)

	return <ModalUI
				btnTitle="Далее"
				title='Пребывайте в гармонии ощущая порядок'
				JSXcomponent={component}
				open={openGreetingModal}
				handleClose={() => setOpenGreetingModal(false)}
				callback={() =>setOpenGreetingModal(false)}
			/>
}

export default GreetingModal
