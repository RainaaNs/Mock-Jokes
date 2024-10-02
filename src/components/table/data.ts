// src/components/data.ts
export interface JokeRow {
  title: string;
  content: string; // Changed back to content
  likes: number;
  dislikes: number;
}

export interface usersRow {
  username: string;
  likes: number;
  dislikes: number;
}

export const jokeData: JokeRow[] = [
  { title: 'Why don’t skeletons fight each other?', content: 'They don’t have the guts.', likes: 450, dislikes: 200 },
  { title: 'What do you call cheese that isn’t yours?', content: 'Nacho cheese.', likes: 450, dislikes: 200 },
  { title: 'Why couldn’t the bicycle stand up by itself?', content: 'It was two-tired.', likes: 450, dislikes: 200 },
];


export const userData: usersRow[] = [
  { username: 'User1', likes: 450, dislikes: 200 }, // Updated field names
  { username: 'User2', likes: 450, dislikes: 200 },
  { username: 'User3', likes: 450, dislikes: 200 },
];