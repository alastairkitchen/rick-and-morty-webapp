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

		if (window.scrollY > 100 && !headerRef.current.classList.contains('header--active')) {
			headerRef.current.classList.add('header--active');
			return
		}

		if (window.scrollY < 100 && headerRef.current.classList.contains('header--active')) {
			headerRef.current.classList.remove('header--active');
		}
	}

	return (
		<>
			<header className="header" ref={headerRef}>
				<div className="header__inner-wrapper">
					<div className="header__inner">
						<Link to='/'><img className="header__image" alt="rick and morty" src="/rick-and-morty-silhouette.jpg"></img></Link>
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

