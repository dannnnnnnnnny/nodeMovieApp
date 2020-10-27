import React, { useEffect, useState } from 'react'
import { FaCode } from "react-icons/fa";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../Config";
import MainImage from './Sections/MainImage';

function LandingPage() {

    const [movies, setMovies] = useState([]);

    // 가장 유명한 영화 사진을 메인으로
    const [mainMovieImage, setMainMovieImage] = useState(null);

    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`;

        fetch(endpoint)
        .then(response => response.json())
        .then(response => {

            console.log(response);
            setMovies([response.results])
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
                    title={mainMovieImage.original_title}
                    text={mainMovieImage.overview}    
                />
            }

            <div style={{ width: '85%', margin: '1rem auto'}}>

                <h2>Movies by latest</h2>
                <hr />

                {/* Movie Grid Cards */}

            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>

            </div>

        </div>
    )
}

export default LandingPage
