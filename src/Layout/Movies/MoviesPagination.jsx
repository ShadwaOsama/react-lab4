import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
const MoviesPagination = ({ updateMovies }) => {
  const [page, setPage] = useState(1);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };


  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    updateMovies(page);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div>
      <Button
        variant="primary"
        onClick={handlePrevPage}
        disabled={page === 1}
        style={{ color: "white" }}
      >
        Prev
      </Button>{" "}
      <Button
        variant="secondary"
        onClick={handleNextPage}
        style={{ color: "white" }}
      >
        Next
      </Button>{" "}
    </div>
  );
};

export default MoviesPagination;
