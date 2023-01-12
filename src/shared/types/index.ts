export interface Character {
  id: number
  image: string
  name: string
  species: string
  status?: string
  gender: string
}

export type Status = {
  status: 'Alive' | 'Dead' | 'unknown'
}

export enum Species {
  Alie = 'Alien',
  Human = 'Human',
  Unknown = 'Unknown',
  Poopybutthole = 'Poopybutthole'
}
