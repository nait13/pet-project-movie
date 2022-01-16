import styled from 'styled-components';

const  Components = {
    Wrapper: styled.div`
    border:1px solid pink;
    box-shadow: 3px 3px 4px rgba(0,0,0,0.2);
    padding:20px;
    margin:200px;
    text-align:center;
    background:pink;
    color: #2d2d2d;
    `
}

const ErrorCard = ({errorMessage}) => {
    return (
        <Components.Wrapper>
            {errorMessage}
        </Components.Wrapper>

    );

};

export function withError (Wrapped) {
    return ({errorMessage,...props}) => {
        return errorMessage ? <ErrorCard errorMessage = {errorMessage}/>
        : <Wrapped {...props}/>
    };

}




// import {useEffect, useState} from 'react';
// import {useParams} from 'react-router-dom';
// import preloaderSrc from '../../images/loader.gif';
// import {User} from '../User/User';
// import {withError} from '../../hoc/withError';

// const HandledUser = withError(User);

// export const UserPage = (props) => {
//     const {userId} = useParams();
//     const [userData, setUserData] = useState(null);
//     const [errorMessage, setErrorMessage] = useState('');
//     const [isLoading, setIsLoading] = useState(false);

//     useEffect(() => {
//         setIsLoading(true);
//         fetch(`https://reqres.in/api/users/${userId}`)
//         .then((res) => {
//             if (res.status >= 400 && res.status < 600) {
//                 throw new Error('Failed fetching data');
//             }
//             return res.json();
//         })
//         .then(({data}) => setUserData(data))
//         .catch(({message}) => setErrorMessage(message))
//         .finally(() =>  setIsLoading(false))
//     }, []);

//     return (
//         <>
//         {!isLoading 
//          ? <HandledUser {...userData} errorMsg={errorMessage}/>
//          : <img src={preloaderSrc}/> }
//         </>
//     )
// };