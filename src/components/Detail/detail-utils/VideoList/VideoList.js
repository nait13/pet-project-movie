import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import apiConfig from '../../../../api/apiConfig';



const VideoList = props => {

    const {category} = useParams();

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        let cleanupFunction = false;
        const fetchData = async () => {
          try {
            const response = await fetch(`https://api.themoviedb.org/3/${category}/${props.id}/videos?api_key=${apiConfig.apiKey}&language=en-US`)
            const result = await response.json();
            console.log('VIDEO',result)
            // непосредственное обновление состояния при условии, что компонент не размонтирован
            if(!cleanupFunction) setVideos(result.results.slice(0,3));
          } catch (e) {
            console.error(e.message)
          }
        };
        fetchData();
        // функция очистки useEffect
        return () => cleanupFunction = true;
      }, [props.id]);
    return (
        <>
            {
                videos.map((item, i) => (
                    <Video key={i} item={item}/>
                ))
            }
        </>
    );
}

const Video = props => {

    const item = props.item;

    const iframeRef = useRef(null);

    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    }, []);

    return (
        <div className="video">
            <div className="video__title">
                <h2>{item.name}</h2>
            </div>
            <iframe
                src={`https://www.youtube.com/embed/${item.key}`}
                ref={iframeRef}
                width="100%"
                title="video"
            ></iframe>
        </div>
    )
}

export default VideoList;
