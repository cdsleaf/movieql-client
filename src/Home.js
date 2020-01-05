import React from "react";
import styled from "styled-components";
import { useQuery } from '@apollo/react-hooks';
import { HOME_PAGE } from "./queries";
import Movie from "./Movie";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
`;

function Home() {
  const { loading, error, data} = useQuery(HOME_PAGE);

  if(loading) return <p>Loading...</p>;
  if(error) return <p>Error</p>;
  
  return (
    <Container>
      {data.movies.map(movie => (
        <Movie 
          id={movie.id}
          key={movie.id}
          poster={movie.medium_cover_image}
          title={movie.title}
          rating={movie.rating}
        />
      ))}
    </Container>
  )
} 
export default Home;