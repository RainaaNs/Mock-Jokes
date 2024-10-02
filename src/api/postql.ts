export const createJoke = async (joke: { title: string; content: string }) => {
    const response = await fetch('YOUR_GRAPHQL_API_URL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          mutation CreateJoke($joke: JokeInput!) {
            createJoke(joke: $joke) {
              content
              id
              title
            }
          }
        `,
        variables: { joke },
      }),
    });
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    const data = await response.json();
    return data.data.createJoke;
  };