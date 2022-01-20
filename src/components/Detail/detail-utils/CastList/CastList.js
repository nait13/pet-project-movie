import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router';
import apiConfig from '../../../../api/apiConfig';
import notImg from '../../../../assets/img/posterNot.jpg'
import './CastList.scss'

const CastList = (props) => {
    const {category} = useParams();
    const [casts,setCasts] = useState(null);

    useEffect(() => {
        let cleanupFunction = false;
        const fetchData = async () => {
          try {
            const response = await fetch(`https://api.themoviedb.org/3/${category}/${props.id}/credits?api_key=${apiConfig.apiKey}&language=en-US`)
            const result = await response.json();
            console.log('CAST',result)
            // непосредственное обновление состояния при условии, что компонент не размонтирован
            if(!cleanupFunction) setCasts(result.cast.slice(0,6));
          } catch (e) {
            console.error(e.message)
          }
        };
        fetchData();
        // функция очистки useEffect
        return () => cleanupFunction = true;
      }, [props.id]);

      console.log(casts)

      
    return (
        <div className='casts'>
            {casts?.map((item)=> (
                <div className='casts-item' key={item.credit_id}>
                    <div className="casts-item-img" style={{backgroundImage: `url(${item.profile_path ? apiConfig.w300Imag(item.profile_path):notImg })`}}></div>
                    <p className='casts-item-name'>{item.name}</p>
                </div>
                ))
            }
        </div>
    )
}

export default CastList
