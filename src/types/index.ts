export interface LayoutType {
	children?: React.ReactNode,
	props?: HeaderType
}

export interface HeaderType {
	title?: string
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