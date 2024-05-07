import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import MoviesPagination from "./MoviesPagination";
import { useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../store/cartAction";
import { getAllMovies } from "../../store/slices/MoviesSlice";


export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const handleClick = (e, movie) => {
    if (e.target.classList.contains("far")) {
      dispatch(addToFavorites(movie));
      e.target.classList.remove("far");
      e.target.classList.add("fas");
    } else if (e.target.classList.contains("fas")) {
      dispatch(removeFromFavorites(movie));
      e.target.classList.remove("fas");
      e.target.classList.add("far");
    }
  };

  function BorderExample() {
    return <Spinner animation="border" />;
  }

  const updateMovies = (page) => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=c28eebf7bb39963adf0c89adbead022a&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const apiKey = "0a446717d28fb073fabb202aa1ca6bd8";
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`, {})
      .then((response) => {
        setMovies(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);
 
  return (
    <div className="container">
      <h2 className="text-center mb-5" style={{ fontSize: "2.5rem", color: "#f00"}}>
        My Movies
      </h2>
      {loading ? (
        <div className="text-center">{BorderExample()}</div>
      ) : (
        <div className="d-flex flex-wrap justify-content-between">
          {movies.map((movie) => (
            <div className="card mb-3" key={movie.id} style={{ width: "250px" }}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt={movie.title} style={{ height: "400px", objectFit: "cover" }} />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text" style={{ minHeight: "100px" }}>{movie.overview}</p>
                </div>
                <div>
                  <Link to={`/movies/${movie.id}`} className="btn btn-primary w-100 my-2">View Details</Link>
                  <i className="far fa-star" style={{ fontSize: "20px", cursor: "pointer", alignSelf: "center" }} onClick={(e) => handleClick(e, movie)}></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="d-flex align-items-center justify-content-around m-4 ">
        <MoviesPagination updateMovies={updateMovies} />
      </div>
    </div>
  );
}
