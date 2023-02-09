import Container from "@mui/material/Container";
import React from "react";
import GreetingWidget from "../../4-Widgets/Greeting";
import GreetingModalContent from "../../5-Features/Modals/Content/GreetingModal";
import GreetingModal from "../../5-Features/Modals/GreetingModal";
import s from "./index.module.scss";

const Greeting = () => {
	return (
		<div className={s.wrap}>
			<GreetingModal component={GreetingModalContent}/>
			<Container maxWidth="xl" className={s.container}>
				<GreetingWidget />
			</Container>
		</div>
	);
};

export default Greeting;
