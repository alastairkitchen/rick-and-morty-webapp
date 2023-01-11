import { GenderIconProps, Gender } from '../types/index';
import { ReactComponent as MaleIcon } from '../icons/male-sign.svg';
import { ReactComponent as FemaleIcon } from '../icons/female-sign.svg';

function GenderIcon(props: GenderIconProps<Gender>) {

	return (
		<>
			{props.gender === 'male' && (<MaleIcon className='svg svg--size' />)}
			{props.gender === 'female' && (<FemaleIcon className='svg svg--size' />)}
		</>
	);
}

export default GenderIcon;

