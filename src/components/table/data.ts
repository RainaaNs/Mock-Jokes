// src/components/data.ts
export interface JokeRow {
  title: string;
  content: string; // Changed back to content
  likes: number;
  dislikes: number;
}

export const jokeData: JokeRow[] = [
  { title: 'Why don’t skeletons fight each other?', content: 'They don’t have the guts.', likes: 450, dislikes: 200 },
  { title: 'What do you call cheese that isn’t yours?', content: 'Nacho cheese.', likes: 450, dislikes: 200 },
  { title: 'Why couldn’t the bicycle stand up by itself?', content: 'It was two-tired.', likes: 450, dislikes: 200 },
  // Add more jokes as needed
];
