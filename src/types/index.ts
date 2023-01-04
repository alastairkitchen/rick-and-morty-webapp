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