import Container from "@mui/material/Container";
import React from "react";
import GreetingWidget from "../../Widgets/Greeting";
import s from "./index.module.scss";

const Greeting = () => {
	return (
		<div className={s.wrap}>
			<Container maxWidth="xl" className={s.container}>
				<GreetingWidget />
			</Container>
		</div>
	);
};

export default Greeting;
