import {Link} from "react-router-dom";
import {BsChevronRight} from "react-icons/bs";

interface FooterLinksProps {
	external?: boolean;
	links: {id: number; name: string; route: string}[];
}
const ShowFooterLinks = ({links, external}: FooterLinksProps) => {
	return (
		<div>
			{links.map((link) => (
				<ul
					className="footer__ul animation"
					key={link.id}
				>
					<li className="footer__ul__li">
						{external ? (
							<>
								<BsChevronRight size={12} />
								<a
									href={link.route}
									target="_blank"
								>
									{link.name}
								</a>
							</>
						) : (
							<>
								<BsChevronRight size={12} />
								<Link
									to={
										link.hasOwnProperty("route")
											? link.route
											: `/details/${link.id}`
									}
								>
									{link.name}
								</Link>
							</>
						)}
					</li>
				</ul>
			))}
		</div>
	);
};
export default ShowFooterLinks;
