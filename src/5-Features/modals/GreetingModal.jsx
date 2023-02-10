import {useGreetingModal} from "../../6-Entities/modals"
import ModalUI from "../../7-Shared/ui/Modal"

const GreetingModal = ({component}) => {
	const openGreetingModal = useGreetingModal(state => state.open)
	const setOpenGreetingModal = useGreetingModal(state=> state.setOpen)

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
