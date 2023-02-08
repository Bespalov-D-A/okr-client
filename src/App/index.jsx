import {RouterProvider} from "react-router-dom"
import {withProviders} from "./providers"
import {router} from "./providers/router/WithRouter"
import './styles/index.scss'
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';

const App = () => {
	return <RouterProvider router={router} />
}

export default withProviders(App)
