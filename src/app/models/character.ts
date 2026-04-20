export interface Wand {
  wood?: string;
  core?: string;
  length?: number | null;
}

export interface Character {
  id: string;
  name: string;
  house: string;
  image: string;
  actor: string;
  species: string;
  wizard: boolean;
  ancestry: string;
  wand?: Wand;
}