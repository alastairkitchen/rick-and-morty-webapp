import * as React from 'react';
import { LayoutType } from '../types/index';
import Header from './header';

const Layout = ({ children, props }: LayoutType): React.ReactElement => {
	return (
		<div className="site-wrapper">
			<Header title={props?.title} />
			{children}
		</div>
	)
}


export default Layout;

