import s from './index.module.scss'

const Filters = ({children}) => {
	return <div className={s.filters}>{children}</div>
}

export default Filters
