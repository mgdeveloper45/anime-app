import  styled  from 'styled-components';

export const CatContainer = styled.div` 
    display:flex; 
    align-items: center; 
    flex-direction: column;
`;

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60%vh;
    width: 60%vw;
    z-index: 1;
`;

export const Category = styled.div`
    display: flex; 
    align-items: center;
    justify-content: space-evenly;
    width: 60%;
    margin:10px 0;
    fill-opacity: 100%;
    background-color:rgba(64, 64, 64, 0.25); 
    backdrop-filter: blur( 4px );
    border-radius: 15px; 
    -webkit-backdrop-filter: blur( 4px );
    border: 3px solid rgba(140, 140, 140, 0.18);
    box-shadow: 9px 3px 18px 0 rgba( 77, 77, 77, 0.37 ), -9px -3px 18px 0 rgba( 77, 77, 77, 0.37 );
`;

export const Title = styled.h4`
    color: rgb(217, 217, 217);
    size: 15px;
`;

export const Img = styled.img``;

export const Content = styled.div`
    align-self: flex-end;
    width: 40%;
`;
export const Poster = styled.div``;

export const Info = styled.h4`
    color: rgb(217, 217, 217);
    size: 18px;
`;