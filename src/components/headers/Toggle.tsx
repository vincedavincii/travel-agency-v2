import {useAppDispatch, useAppSelector} from "../../features/hooks";
import {setToggle} from "../../features/navSlice";

const Toggle = () => {
	const dispatch = useAppDispatch();
	const navToggle = useAppSelector((state) => state.nav.toggle);

	return (
		<div
			className={navToggle ? "toggle-close" : "toggle-open"}
			onClick={() => dispatch(setToggle())}
		>
			<span></span>
			<span></span>
			<span></span>
		</div>
	);
};
export default Toggle;
