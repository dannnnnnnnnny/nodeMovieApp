import React from 'react'
import { Col } from 'antd';

function GridCards(props) {
    console.log(props)
    return (
        // 전체 가로 크기 24, 4개가 나오게 하려면 하나당 6
        <Col lg={6} md={8} xs={24}>
            <div style={{position: 'relative'}}>
                <a href={`/movie/${props.movieId}`} >
                    <img src={props.image} alt={props.movieName}/>
                </a>
            </div>  
        </Col>
    )
}

export default GridCards
