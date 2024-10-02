import { gql } from "@apollo/client";

export const GET_JOKES_QUERY = gql`
  query GetReturnedJokes {
    getReturnedJokes {
      content
      dislikes
      id
      likes
      title
    }
  }
`;

export const ADD_JOKE_MUTATION = gql`
  mutation CreateJoke($joke: JokeInput!) {
    createJoke(joke: $joke) {
      content
      id
      title
    }
  }
`;

export const UPDATE_JOKE_MUTATION = gql`
  mutation UpdateJoke($jokeId: Int!, $joke: UpdatedJokeInput!) {
    updateJoke(jokeId: $jokeId, joke: $joke) {
      content
      title
    }
  }
`;

export const DELETE_JOKE_MUTATION = gql`
  mutation DeleteJoke($id: ID!) {
    deleteJoke(id: $id) {
      title
      content
    }
  }
`;

export const DASHBOARD_OVERVIEW = gql`
  query Query {
    getTotalUsers
    getAverageLikes
    getTotalLikes
    getTotalJokes
    getTotalDislikes
    getAverageDislikes
  }
`;
