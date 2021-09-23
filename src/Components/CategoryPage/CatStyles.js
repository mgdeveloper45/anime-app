import  styled  from 'styled-components';

export const CatContainer = styled.div` 
    display:flex; 
    align-items: center;
    justify-content: center; 
    flex-direction: column;
   
`;

export const Modal = styled.div`
    position: fixed;
    top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48vh;
    width: 50vw;
    z-index: 1;
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.7);
    border: 3px solid rgba(140, 140, 140, 0.18);
    box-shadow: 9px 3px 18px 0 rgba( 77, 77, 77, 0.37 ), -9px -3px 18px 0 rgba( 77, 77, 77, 0.37 );
   
`;
export const Button = styled.button`
    size: 40px;
    background-color: red;
    border-radius: 50px;
    border: 3px solid rgba(140, 140, 140, 0.18);
`;

export const Video = styled.div`
`;

export const Category = styled.div`
    display: flex; 
    align-items: center;
    justify-content: space-evenly;
    width: 60%;
    margin:15px 0;
    fill-opacity: 100%;
    background-color:rgba(64, 64, 64, 0.5); 
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