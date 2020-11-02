import React, { useEffect, useState } from 'react'
import { FaCode } from "react-icons/fa";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../Config";
import MainImage from './Sections/MainImage';
import axios from "axios";
import { Row } from "antd";
import GridCards from "../commons/GridCards";

function LandingPage() {

    const [movies, setMovies] = useState([]);

    // 가장 유명한 영화 사진을 메인으로
    const [mainMovieImage, setMainMovieImage] = useState(null);

    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`;

        fetch(endpoint)
        .then(response => response.json())
        .then(response => {

            // console.log(response.results);
            setMovies(...response.results)
            setMainMovieImage(response.results[0])
        })
        
    }, [])

    

    return (
        <div style={{ width: '100%', margin: '0'}}>
            
            {/* Main Image */}
            {/* 
            mainMovieImage를 setState 하기 전에 불러오기 때문에 에러가 나는데
            && 를 해주면 '있으면 해라' 라는 뜻으로 에러가 발생하지 않음.    
            */}
            {mainMovieImage &&
                <MainImage 
                    image={`${IMAGE_BASE_URL}w1280${mainMovieImage.backdrop_path}`}
                    title={mainMovieImage.title}
                    text={mainMovieImage.overview}    
                />
            }

            <div style={{ width: '82%', margin: '1rem auto'}}>

                <h2>Movies by latest</h2>
                <hr />

                {/* Movie Grid Cards */}
                {/* Row: gutter를 주면 각 card 사이에 여백이 생김 */}
                <Row gutter={[16, 16]}> 
                    {movies.map((movie, index) => (
                        <React.Fragment key={index}>
                            <GridCards 
                                image={movie.poster_path ?
                                    `${IMAGE_BASE_URL}w300${movie.poster_path}` : null}
                                movieId={movie.id}
                                movieName={movie.original_title}
                            />
                        </React.Fragment>
                    ))}
                    
                </Row>
                



            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {/* <button onClick={loadMoreItems}> Load More </button> */}
            </div>

        </div>
    )
}

export default LandingPage
