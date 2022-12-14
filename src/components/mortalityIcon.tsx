import { MortalityIconProps, MortalityStatus } from '../types/index';
import { ReactComponent as MagnifyingGlassIcon } from '../icons/heart-pulse.svg';
import { ReactComponent as SkullIcon } from '../icons/skull.svg';

function MortalityIcon(props: MortalityIconProps<MortalityStatus>) {

	return (
		<>
			{props.mortalityStatus === 'alive' && (<MagnifyingGlassIcon className='svg svg--size' />)}
			{props.mortalityStatus === 'dead' && (<SkullIcon className='svg svg--size' />)}
		</>
	);
}

export default MortalityIcon;

