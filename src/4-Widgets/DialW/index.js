import Dial from "../../7-Shared/ui/Dial";
import DialActions from "../../5-Features/DialActions";

const DialW = () => {
	return (
		<div style={{ marginBottom: 24 }}>
			<DialActions parent={(actions)=><Dial>{actions}</Dial>}/> 
		</div>
	);
};

export default DialW;
