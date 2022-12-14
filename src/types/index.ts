/* Types */
export type Gender = "male" | "female" | "not-specified";
export type MortalityStatus = "alive" | "dead" | "unknown";


/* Interfaces */
export interface LayoutProps {
	children?: React.ReactNode,
	title?: string,
	imageUrl?: string,
}

export interface HeaderProps {
}

export interface HeroProps {
	imageUrl?: string
}

export interface Character {
	image: string,
	name: string,
	status: string,
	species: string,
	gender: string,
	origin: Origin,
	episode: []
}

export interface Origin {
	name: string,
	url?: string
}

export interface GenderIconProps<Gender> {
	gender: Gender
}

export interface MortalityIconProps<MortalityStatus> {
	mortalityStatus: MortalityStatus
}

export interface ImageNavItem {
	title: string,
	url: string
}

export interface ImageNavProps {
	id: string,
	items: null | ImageNavItem[]
}
export interface BackButtonProps {
	url: string,
	text?: string
}