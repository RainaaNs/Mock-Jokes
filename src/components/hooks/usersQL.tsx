import { useQuery, useMutation } from "@apollo/client";
import {
  DASHBOARD_OVERVIEW,
  DELETE_JOKE_MUTATION,
  GET_JOKES_QUERY,
  UPDATE_JOKE_MUTATION,
} from "../../api/gql";
import { ADD_JOKE_MUTATION } from "../../api/gql";

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

export const useFetchJokes = () => {
  const { loading, error, data, refetch } = useQuery<{
    getReturnedJokes: Joke[];
  }>(GET_JOKES_QUERY);

  console.log(data);
  return {
    jokes: data?.getReturnedJokes || [],
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

export const useDeleteJoke = (id: string) => {
  const [deleteJoke, { loading, error }] = useMutation(DELETE_JOKE_MUTATION);

  const removeJoke = async () => {
    try {
      const { data } = await deleteJoke({ variables: { id } });
      return data.deleteJoke;
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


