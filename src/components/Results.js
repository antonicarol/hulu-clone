import React, { useState, useEffect } from 'react'
import './css/Results.css'
import VideoCard from './VideoCard'
import axios from '../db/axios';
import requests from '../db/requests';
import FlipMove from 'react-flip-move';


function Results({selectedOption}) {
    const[movies,setMovies] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const response = await axios.get(selectedOption)
            console.log(response)
            setMovies(response.data.results);
            return response;
        }

        fetchData();
    }, [selectedOption])

    return (
        <div className="results">
            <FlipMove> 
                {movies.map(movie =>{
               return  <VideoCard key={movie.id} movie={movie} />
            })}
            </FlipMove>

           
            
        </div>
    )
}

export default Results
