import {useState} from "react";
import {useAppDispatch} from "../features/hooks";
import {openModal} from "../features/modalSlice";

interface LoginProps {
	currentModal: string;
}
const Login = (props: LoginProps) => {
	const dispatch = useAppDispatch();
	const [state, setState] = useState({
		email: "",
		password: "",
	});

	const loginHandler = (e: React.MouseEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	return (
		<form onSubmit={loginHandler}>
			<div className="modal_heading">
				<h3>Login</h3>
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
					placeholder="Enter password"
					onChange={(e) => setState({...state, password: e.target.value})}
					value={state.password}
				/>
			</div>
			<div className="group flex space-between y-center">
				<input
					type="submit"
					name=""
					className="btn-dark"
					value="Login"
				/>
				<span onClick={() => dispatch(openModal(props.currentModal))}>
					Create new account{" "}
				</span>
			</div>
		</form>
	);
};

export default Login;
