import { Link } from "react-router-dom";
import pageNot from '../../assets/img/pageNotfound.gif'
import './PageNotFound.scss'

export const PageNotFound = () => {
    return (
        <div className="wrapper-pageNotFound" style={{backgroundImage: `url(${pageNot})`}}>
            <div style={{ textAlign: "center", color: 'white', paddingTop: '100px', height: '65vh' }}>
                <h3 style={{ fontSize: '30px', margin: '30px' }}>Упссс....Страница не найдена </h3>
                <Link className="linkNotFound" to="/">HOME</Link>
            </div>
        </div>
    )
}