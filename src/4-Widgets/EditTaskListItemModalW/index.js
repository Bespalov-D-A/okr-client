import SelectTaskTypeF from "../../5-Features/filters/SelectTaskTypeF";
import EditTaskListItemModalContent from "../../5-Features/modals/Content/EditTaskListItemModalContent";
import EditTaskListItemModal from "../../5-Features/modals/EditTaskListItemModal";

const EditTaskListItemModalW = () => {
	return (
		<EditTaskListItemModal
			component={() => (
				<EditTaskListItemModalContent
					SelectTypeTaskF={(selectTaskType, setSelectedTaskType) => (
						<></>
 /*           <SelectTaskTypeF*/
							/*selectedTaskType={selectTaskType}*/
							/*setSelectedTaskType={setSelectedTaskType}*/
						/*/>*/
					)}
				/>
			)}
		/>
	);
};

export default EditTaskListItemModalW;
