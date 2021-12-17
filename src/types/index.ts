export interface Character {
  name: string;
  image: string;
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
