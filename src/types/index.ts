export interface Character {
  name: string;
  image: string;
}

export type Status = "alive" | "dead" | "unknown";
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
}
