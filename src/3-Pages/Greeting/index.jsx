import Container from "@mui/material/Container";
import React from "react";
import AuthModalW from "../../4-Widgets/AuthModalW";
import GreetingW from "../../4-Widgets/GreetingW";
import GreetingModalContent from "../../5-Features/modals/Content/GreetingModal";
import GreetingModal from "../../5-Features/modals/GreetingModal";
import Alert from "../../5-Features/ui/Alert";
import s from "./index.module.scss";

const Greeting = () => {
	return (
		<div className={s.wrap}>
			<Alert />
			<GreetingModal component={GreetingModalContent}/>
			<AuthModalW/>
			<Container maxWidth="xl" className={s.container}>
				<GreetingW/>
			</Container>
		</div>
	);
};

export default Greeting;
