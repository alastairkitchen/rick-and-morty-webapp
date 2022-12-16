import { HeaderType } from '../types/index';

function Layout(props: HeaderType) {
	return (
		<div>
			<header className="App-header">
				<img alt="rick and morty" src="https://via.placeholder.com/1800x400"></img>
			</header>
			<h1>{props.title}</h1>
		</div>
	);
}

export default Layout;

