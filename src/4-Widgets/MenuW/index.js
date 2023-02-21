import ExitBtn from "../../5-Features/menuComponents/ExitBtn";
import Menu from "../../5-Features/menuComponents/Menu";
import ProfileBlock from "../../5-Features/menuComponents/ProfileBlock";

const MenuW = () => {
	return (
		<Menu ExitBtn={() => <ExitBtn />}>
			<ProfileBlock />
		</Menu>
	);
};

export default MenuW;
