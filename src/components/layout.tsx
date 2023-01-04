import { totalmem } from 'os';
import * as React from 'react';
import { LayoutProps } from '../types/index';
import Header from './header';
import Hero from './hero';

const Layout = ({ children, title, imageUrl }: LayoutProps): React.ReactElement => {
	return (
		<div className="site-wrapper">
			<Header />
			<Hero imageUrl={imageUrl} />
			<section className="site-content">
				<h1 className="h1">{title}</h1>
				{children}
			</section>
		</div>
	)
}


export default Layout;

