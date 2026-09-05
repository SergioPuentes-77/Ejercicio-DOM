// src/app/models/character.model.ts
export interface CharacterResponse {
  count: number;
  next: string | null;
  prev: string | null;
  pages: number;
  results: Character[];
}

export interface Character {
  id: number;
  name: string;
  age: number | null;
  birthdate: string | null;
  gender: string;
  occupation: string;
  portrait_path: string;
  phrases: string[];
  status: string; // "Alive" | "Deceased"
}