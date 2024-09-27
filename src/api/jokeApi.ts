export interface Joke {
  content: string;
  title: string;
  id: number;
  users_who_liked?: [number];
  users_who_disliked?: [number];
}

export const fetchJokes = async (): Promise<Joke[]> => {
 try {
    const response = await fetch(
      "https://jokes-backend-11nq.onrender.com/joke?amount=10"
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching jokes", error);
    throw error;
  }
};
