import {Link} from "react-router-dom";
import {useAppSelector} from "../../features/hooks";

const Nav = () => {
	const navToggle = useAppSelector((state) => state.nav.toggle);

	return (
		<>
			{navToggle ? <div className="navLayer"></div> : ""}

			<div className={navToggle ? "nav nav_open" : "nav nav_close"}>
				<div className="nav_content">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</div>
			</div>
		</>
	);
};
export default Nav;
