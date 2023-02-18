import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";

const Bar = ({children}) => {
	return (
		<AppBar position="fixed">
			<Container maxWidth="xl">
				<Toolbar>
					{children}
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Bar;
