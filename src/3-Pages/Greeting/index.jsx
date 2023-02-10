import Container from "@mui/material/Container";
import React from "react";
import AuthModalWidget from "../../4-Widgets/AuthModalWidget";
import GreetingWidget from "../../4-Widgets/Greeting";
import GreetingModalContent from "../../5-Features/modals/Content/GreetingModal";
import GreetingModal from "../../5-Features/modals/GreetingModal";
import s from "./index.module.scss";

const Greeting = () => {
	return (
		<div className={s.wrap}>
			<GreetingModal component={GreetingModalContent}/>
			<AuthModalWidget/>
			<Container maxWidth="xl" className={s.container}>
				<GreetingWidget />
			</Container>
		</div>
	);
};

export default Greeting;
