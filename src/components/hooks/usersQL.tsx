import { useQuery, useMutation } from "@apollo/client";
import {
  DASHBOARD_OVERVIEW,
  GET_JOKES_QUERY,
  UPDATE_JOKE_MUTATION,
  GET_USERS_QUERY,
  ADD_JOKE_MUTATION,
  DELETE_JOKE_MUTATION,
} from "../../api/gql";

export interface Joke {
  id: string;
  content: string;
  title: string;
  likes: number;
  dislikes: number;
}

export interface Overviewstats {
  getTotalUsers: number;
  getAverageLikes: number;
  getTotalLikes: number;
  getTotalJokes: number;
  getTotalDislikes: number;
  getAverageDislikes: number;
}

export interface Users {
  username: string;
  likedJokes: number;
  dislikedJokes: number;
  id: string;
}

export const useFetchJokes = () => {
  const { loading, error, data, refetch } = useQuery<{
    getReturnedJokes: Joke[];
  }>(GET_JOKES_QUERY);
  const jokes = (data?.getReturnedJokes || []).filter((val) => {
    return Boolean(val);
  });

  return {
    jokes: jokes,
    loading,
    error: error?.message || null,
    refetch,
  };
};

export const useAddJoke = (title: string, content: string) => {
  const [addJoke, { loading, error }] = useMutation(ADD_JOKE_MUTATION);

  const addNewJoke = async () => {
    try {
      const { data } = await addJoke({ variables: { title, content } });
      return data.addJoke;
    } catch (err) {
      console.error(err);
      throw new Error(error?.message || "Failed to add joke");
    }
  };
  return { addNewJoke, loading, error };
};

export const useUpdateJoke = (
  jokeId: string,
  title: string,
  content: string
) => {
  const [updateJoke, { loading, error }] = useMutation(UPDATE_JOKE_MUTATION);

  const updateExistingJoke = async () => {
    try {
      const { data } = await updateJoke({
        variables: { jokeId, title, content },
      });
      return data.updateJoke;
    } catch (err) {
      console.error(err);
      throw new Error(error?.message || "Failed to update joke");
    }
  };
  return { updateExistingJoke, loading, error };
};

export const useDeleteJoke = (jokeId: any) => {
  const [deleteJoke, { loading, error }] = useMutation(DELETE_JOKE_MUTATION);

  const removeJoke = async () => {
    if (!jokeId) {
      console.error("Cannot delete joke: No joke ID provided");
      return; // Or throw an error
    }
    try {
      console.log("Deleting joke with ID:", jokeId);

      const thing = await deleteJoke({
        variables: { jokeId },
      });
      console.log(thing);
      // return data.deleteJoke;
    } catch (err) {
      console.error(err);
      throw new Error(error?.message || "Failed to delete joke");
    }
  };
  return { removeJoke, loading, error };
};

export const useStatistics = () => {
  const { loading, error, data } = useQuery<Overviewstats>(DASHBOARD_OVERVIEW);
  console.log("stats", data);
  return {
    statistics: data || null,
    loading,
    error: error?.message || null,
  };
};

export const useUsersInfo = () => {
  const { loading, error, data, refetch } = useQuery<{ users: Users[] }>(
    GET_USERS_QUERY
  );

  console.log(data);
  return {
    users: data?.users || [],
    loading,
    error: error?.message || null,
    refetch,
  };
};
