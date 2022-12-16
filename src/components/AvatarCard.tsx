import { Character } from '../types/index';

function AvatarCard(props: Character) {
	return (
		<div className="avatar-card">
			<div>
				<img alt={props.name} src={props.image} />
			</div>
			<div>
				<p>{props.name}</p>
				{props.species && <p>{props.species}</p>}
				{props.gender && <p>{props.gender}</p>}
				{props.status && <p>{props.status}</p>}
				{/* {props.origin?.name && <p>{props.origin.name}</p>} */}
			</div>
		</div>
	);
}

export default AvatarCard;

