import {useState} from "react";
import {useAppDispatch} from "../features/hooks";
import {openModal} from "../features/modalSlice";

interface RegisterProps {
	currentModal: string;
}
const Register = (props: RegisterProps) => {
	const dispatch = useAppDispatch();
	const [state, setState] = useState({
		name: "",
		email: "",
		password: "",
	});

	const registerHandler = (e: React.MouseEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={registerHandler}>
			<div className="modal_heading">
				<h3>Create new account</h3>
			</div>
			<div className="group">
				<input
					type="text"
					name=""
					className="group_control"
					placeholder="Enter name"
					onChange={(e) => setState({...state, name: e.target.value})}
					value={state.name}
				/>
			</div>
			<div className="group">
				<input
					type="email"
					name=""
					className="group_control"
					placeholder="Enter email"
					onChange={(e) => setState({...state, email: e.target.value})}
					value={state.email}
				/>
			</div>
			<div className="group">
				<input
					type="password"
					name=""
					className="group_control"
					placeholder="Create password"
					onChange={(e) => setState({...state, password: e.target.value})}
					value={state.password}
				/>
			</div>
			<div className="group flex space-between y-center">
				<input
					type="submit"
					name=""
					className="btn-dark"
					value="Register"
				/>
				<span onClick={() => dispatch(openModal(props.currentModal))}>
					Already have an account?
				</span>
			</div>
		</form>
	);
};

export default Register;
