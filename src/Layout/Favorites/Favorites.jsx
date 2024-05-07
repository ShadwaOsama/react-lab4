import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites } from "../../store/cartAction";
import { Card, Button } from "react-bootstrap";

const Favorites = () => {
  const favoriteMovies = useSelector((state) => state.addToCart.totalMovie);
  const dispatch = useDispatch();

  useEffect(() => {
  }, [favoriteMovies]);

  const handleRemove = (movie) => {
    dispatch(removeFromFavorites(movie));
  };

  return (
    <div className="container">
      <h2 className="text-center mb-5" style={{ fontSize: "2.5rem", color: "#f00", textDecoration: "underline" }}>
        Favorite Movies
      </h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {favoriteMovies && favoriteMovies.length > 0 ? (
          favoriteMovies.map((movie) => (
            <div className="col" key={movie.id}>
              <Card className="h-100 shadow">
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} style={{ height: "300px", objectFit: "cover" }} />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text style={{ minHeight: "100px" }}>{movie.overview}</Card.Text>
                  </div>
                  <Button variant="success" className="w-100 my-3" onClick={() => handleRemove(movie)}>Remove from Favorites</Button>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <p>No favorite movies yet!</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
