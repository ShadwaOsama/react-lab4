export const addToFavorites = (movie) => {
    return {
      type: 'ADD',
      payload: movie
    };
  };
  
  export const removeFromFavorites = (movie) => {
    return {
      type: 'REMOVE',
      payload: movie
    };
  };
  