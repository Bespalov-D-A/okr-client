import LogoBlock from "../../7-Shared/components/LogoBlock";
import Bar from "../../7-Shared/ui/Bar";
import BurgerBtn from "../../7-Shared/ui/MenuBtn";
import s from "./index.module.scss";

const BarW = () => {
	return (
		<Bar>
			<div className={s.wrap}>
				<LogoBlock
					imgStyle={{ width: 40, fill: "#fff" }}
					style={{ flexFlow: "row nowrap" }}
					fontStyle={{ color: "#fff", paddingLeft: 12 }}
				/>
				<BurgerBtn
					style={{ padding: 12 }}
					icoStyle={{ fontSize: 40 }}
					callback={() => {}}
				/>
			</div>
		</Bar>
	);
};

export default BarW;
