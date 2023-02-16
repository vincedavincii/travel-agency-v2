import {Link} from "react-router-dom";

import Footer from "../footer/Footer";
import Header from "../headers/Header";

interface PageContainerProps {
	heading: string;
	pageHeading: string;
	message: string;
	children?: React.ReactNode;
}
const PageContainer = ({
	heading,
	pageHeading,
	message,
	children,
}: PageContainerProps) => {
	return (
		<>
			<Header heading={heading} />
			<div className="page">
				<div className="container">
					<div className="row">
						<div className="col-6 animation">{children}</div>
						<div className="col-6">
							<div className="page__info">
								<h2 className="heading headingAnimation">{heading}</h2>
								<h1 className="page__info__heading animation">{pageHeading}</h1>
								<p className="page__info__msg animation">{message}</p>
								<div className="page__info__link animation">
									<Link
										to="/"
										className="btn-dark"
									>
										go back
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};
export default PageContainer;
