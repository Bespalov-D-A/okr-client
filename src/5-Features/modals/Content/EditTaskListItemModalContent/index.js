import { useEditTaskListItemModal} from "../../../../6-Entities/modals"

const EditTaskListItemModalContent = ({SelectTaskTypeF}) => {
	const setThisModalOpen = useEditTaskListItemModal(state => state.setOpen)
	return <div>{SelectTaskTypeF(setThisModalOpen)}</div>
}

export default EditTaskListItemModalContent
