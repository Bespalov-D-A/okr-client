import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom';

const Main = () => {
	const navigate = useNavigate();

	useEffect(() => {
		//Если юзер не авторизован
		if(true) navigate('/greetings')
	}, [])

	return <div>main</div>
}

export default Main
