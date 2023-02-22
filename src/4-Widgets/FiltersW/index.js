import Filters from "../../5-Features/filters/Filters";
import SelectTaskCompletedF from "../../5-Features/filters/SelectTaskCompletedF";
import SelectTaskTypeF from "../../5-Features/filters/SelectTaskTypeF";

const FiltersW = () => {
	return (
		<Filters>
			<SelectTaskTypeF />
			<SelectTaskCompletedF />
		</Filters>
	);
};

export default FiltersW;
