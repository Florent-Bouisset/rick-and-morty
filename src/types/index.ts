export type Status = "alive" | "dead" | "unknown";
export interface Character {
  id: number;
  name: string;
  image: string;
  status: Status;
  gender: string;
  species: string;
  location: {
    name: string;
  };
}

export interface CharacterFilterParams {
  name: string;
  status: Status;
}

export interface ResultInfo {
  count: number;
  pages: number;
  prev: string | null;
  next: string | null;
}
export interface StoreState {
  characters: Character[];
  info: ResultInfo;
  currentCharacter: Character | null;
}
