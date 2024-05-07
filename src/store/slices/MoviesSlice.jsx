import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk for fetching all movies
export const getAllMovies = createAsyncThunk("movies/getAll", async () => {
  const res = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY"
  );
  return res.data.results;
});

// Thunk for getting movie details by ID
export const getMovieByID = createAsyncThunk(
  "movies/getById",
  async (movieId) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=YOUR_API_KEY`
    );
    return res.data;
  }
);

// Thunk for implementing pagination
export const pagination = createAsyncThunk(
  "movies/pagination",
  async (currentPage) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&page=${currentPage}`
    );
    return res.data.results;
  }
);

// Create movies slice
const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    movieDetails: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.loading = false;
      })
      .addCase(getAllMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getMovieByID.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMovieByID.fulfilled, (state, action) => {
        state.movieDetails = action.payload;
        state.loading = false;
      })
      .addCase(getMovieByID.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(pagination.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(pagination.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.loading = false;
      })
      .addCase(pagination.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
