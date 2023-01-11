import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import { debounce } from '../utilities/debounce';

function Header() {

	const headerRef = useRef<HTMLElement>(null);
	const debouncedApplyActive = debounce(applyHeaderActive, 100);

	useEffect(() => {
		document.addEventListener("scroll", debouncedApplyActive);

		return () => {
			document.removeEventListener("scroll", debouncedApplyActive)
		};
	}, [])

	function applyHeaderActive() {
		if (headerRef.current === null)
			return

		// TODO refactor for better performance, add as ref
		const siteRootEl = document.querySelector('.site-root');

		if (window.scrollY > 196 && !siteRootEl?.classList.contains('header--active')) {
			siteRootEl?.classList.add('header--active');
			return
		}

		if (window.scrollY < 196 && siteRootEl?.classList.contains('header--active')) {
			siteRootEl?.classList.remove('header--active');

			return
		}
	}

	return (
		<>
			<header className="header" ref={headerRef}>
				<div className="header__inner-wrapper">
					<div className="header__inner">
						<div>
							<Link to='/'><img className="header__image" alt="rick and morty" src="/rick-and-morty-silhouette.jpg"></img></Link>
						</div>
						<nav>
							<ul className="navigation">
								<li><Link to='/' className="navigation__anchor">Home</Link></li>
								<li><Link to='/characters' className="navigation__anchor">Characters</Link></li>
								<li><Link to='/episodes' className="navigation__anchor">Episodes</Link></li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;

