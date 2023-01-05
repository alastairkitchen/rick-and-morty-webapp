import { totalmem } from 'os';
import * as React from 'react';
import { LayoutProps } from '../types/index';
import Header from './header';
import Hero from './hero';

const Layout = ({ children, title, imageUrl, }: LayoutProps): React.ReactElement => {
	return (
		<>
			<Header />
			<Hero imageUrl={imageUrl} />
			<section>
				<div className="site-content__row">
					<div className="site-content__container">
						<h1 className="h1">{title}</h1>
					</div>
				</div>
				{children}
			</section>
		</>
	)
}


export default Layout;

