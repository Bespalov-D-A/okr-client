import {  useEffect, useRef, useState } from "react";
import { useLoginModal } from "../../../6-Entities/modals";
import ReCaptcha from "../../../7-Shared/lib/ReCAPTCHA";
import SkeletonComp from "../../../7-Shared/lib/Skeleton";
import s from './index.module.scss'

const CaptchaForAuth = () => {
	//Делаем кнопку автризации активной/не активной при
	//нажатии или снятии флажка с капчи
	//При закрытии модалки так же произойдет деактивация кнопки
	const authBtnDisabled = useLoginModal((state) => state.authBtnDisabled);
	const setAuthBtnDisabled = useLoginModal((state) => state.setAuthBtnDisabled);
	const captchaRef = useRef(null);
	const [isLoad, setIsLoad] = useState(false)

	useEffect(()=> {
		const fakeLoad = setTimeout(()=> setIsLoad(true), 1000)
		return ()=> clearTimeout(fakeLoad)
	},[])

	return (
		<div className={s.captcha}>
			<SkeletonComp componentIsReady={isLoad}>
			<ReCaptcha
				innerRef={captchaRef}
				handleChange={() => setAuthBtnDisabled(!authBtnDisabled)}
			/>
			</SkeletonComp>
		</div>
	);
};

export default CaptchaForAuth;
