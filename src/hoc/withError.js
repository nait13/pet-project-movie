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