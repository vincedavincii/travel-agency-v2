import {useState} from "react";
const ContactForm = () => {
	const [state, setState] = useState({
		name: "",
		email: "",
		message: "",
	});
	const submitContact = (e: React.MouseEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(state);
		setState({
			name: "",
			email: "",
			message: "",
		});
	};
	return (
		<form onSubmit={submitContact}>
			<div className="group">
				<h3 className="page__contact__heading">Contact form</h3>
			</div>
			<div className="group">
				<input
					type="text"
					name=""
					className="group_control"
					placeholder="Your name eg. smith"
					value={state.name}
					onChange={(e) => setState({...state, name: e.target.value})}
				/>
			</div>
			<div className="group">
				<input
					type="email"
					name=""
					className="group_control"
					placeholder="Your email eg. smith@email.com"
					value={state.email}
					onChange={(e) => setState({...state, email: e.target.value})}
				/>
			</div>
			<div className="group">
				<textarea
					cols={12}
					rows={12}
					className="group__textarea"
					placeholder="Write your message eg. I have troubles"
					onChange={(e) => setState({...state, message: e.target.value})}
					value={state.message}
				></textarea>
			</div>
			<div className="group">
				<input
					type="submit"
					value="send email &rarr;"
					className="btn-dark"
				/>
			</div>
		</form>
	);
};
export default ContactForm;
