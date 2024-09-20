import axios from "axios";

export interface Joke {
    joke: string;
    id: number;
}

export const fetchSingleJoke = async (): Promise<Joke> => {
    try {
        const response = await axios.get<Joke>('https://v2.jokeapi.dev/joke/Any?type=single');
        return response.data;
    }   
    catch (error) {
        console.error('Error fetching single joke', error);
        throw error;
    }
};