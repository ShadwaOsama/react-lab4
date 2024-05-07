import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./MovieDetails.css";
import useFetch from '../../hooks/useFetch';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const apiKey = "0a446717d28fb073fabb202aa1ca6bd8";
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
      .then((response) => {
        setMovieDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      });
  }, [movieId]);

  function handleBack() {
    navigate(-1);
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <button className="btn btn-danger mb-3" onClick={() => handleBack()}>
            Back
          </button>
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <div className="card shadow">
              <img
                className="card-img-top"
                src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                alt={movieDetails.name}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h3 className="card-title">{movieDetails.title}</h3>
                <p className="card-text">{movieDetails.overview}</p>
                <div className="row">
                  <div className="col">
                    <p className="card-text">
                      <span className="ss">Vote Average:</span>{" "}
                      {movieDetails.vote_average}
                    </p>
                    <p className="card-text">
                      <span className="ss">Vote Count:</span>{" "}
                      {movieDetails.vote_count}
                    </p>
                    <p className="card-text">
                      <span className="ss">Popularity:</span>{" "}
                      {movieDetails.popularity}
                    </p>
                  </div>
                  <div className="col">
                    <button className="btn btn-success text-light w-100 my-3">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          <useFetch />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
