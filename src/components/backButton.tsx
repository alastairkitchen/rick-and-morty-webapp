import { Link } from 'react-router-dom'
import { ReactComponent as ChevronLeftIcon } from '../icons/chevron-left.svg';
import { BackButtonProps } from '../types/index';

function BackButton({ url, text }: BackButtonProps) {
	return (
		<div className="pagination">
			<Link className="button pagination__button" to={url}> <ChevronLeftIcon className="svg svg--size-portrait pagination-left__icon" />{text ? text : 'Back'}</Link>
		</div>
	);
}

export default BackButton;

