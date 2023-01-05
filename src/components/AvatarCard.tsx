import { Character, Gender, MortalityStatus } from '../types/index';
import GenderIcon from './genderIcon';
import MortalityIcon from './mortalityIcon';



function AvatarCard(props: Character) {
	return (
		<article className="avatar-card">
			<div>
				<img className="avatar-card__image" alt={props.name} src={props.image} />
			</div>
			<div className="avatar-card__content">
				<div className="avatar-card__content-inner">
					<h4>{props.name}</h4>
					{props.species && <p>{props.species} </p>}
					{props.gender && <p>{props.gender} <GenderIcon gender={props.gender.toLowerCase() as Gender} /></p>}
					{props.status && <p>{props.status}  <MortalityIcon mortalityStatus={props.status.toLowerCase() as MortalityStatus} /></p>}
				</div>
			</div>
		</article>
	);
}

export default AvatarCard;

