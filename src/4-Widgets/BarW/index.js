import LogoBlock from "../../7-Shared/components/LogoBlock"
import Bar from "../../7-Shared/ui/Bar"

const BarW = () => {
	return <Bar >
		<LogoBlock imgStyle={{width: 40, fill: '#fff'}} style={{flexFlow: 'row nowrap'}} fontStyle={{color: '#fff', paddingLeft: 12}}/>
		</Bar>
}

export default BarW
