import {useAppDispatch, useAppSelector} from "../../features/hooks";
import {closeModal} from "../../features/modalSlice";

interface ModalProps {
	children: React.ReactNode;
	current: string;
}
const Modal = (props: ModalProps) => {
	const dispatch = useAppDispatch();
	const {current, modalOpen} = useAppSelector((state) => state.modal);

	const closeModalCheck = (e: React.MouseEvent<Element>) => {
		if ((e.target as HTMLElement).getAttribute("class") === "modal") {
			dispatch(closeModal());
		}
		console.log("heya!");
		console.log("currentT", e.currentTarget);
		console.log("Targt", e.target);
		e.stopPropagation();
	};
	// console.log(current, "current");
	// console.log(modalOpen);
	// console.log("props", props.current);
	return modalOpen && current === props.current ? (
		<div
			onClick={closeModalCheck}
			className="modal"
		>
			<div className="modal_body">{props.children}</div>
		</div>
	) : null;
};

export default Modal;
