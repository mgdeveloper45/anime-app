import  styled  from 'styled-components';

export const CatContainer = styled.div` 
    display:flex; 
    align-items: center;
    justify-content: center; 
    flex-direction: column;
    
`;

export const Blur = styled.div`
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    display: flex; 
    align-items: center;
    /* justify-content: space-evenly; */
    /* border: 3px solid rgba(140, 140, 140, 0.18); */
`;

export const CatModal = styled.div`
    position: fixed;
    top: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48vh;
    width: 50vw;
    z-index: 100;
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.7);
    border: 3px solid rgba(255, 255, 255, 0.18);
    /* box-shadow: 9px 3px 18px 0 rgba( 77, 77, 77, 0.37 ), -9px -3px 18px 0 rgba( 77, 77, 77, 0.37 ); */
   
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
    opacity: .8;
    background-color:rgba(11, 11, 11, 1); 
    backdrop-filter: blur( 4px );
    border-radius: 15px; 
    -webkit-backdrop-filter: blur( 4px );
    border: 3px solid rgba(140, 140, 140, 0.18);
    box-shadow: 9px 3px 18px 0 rgba( 138, 138, 138, 0.37 ), -9px -3px 18px 0 rgba( 138, 138, 138, 0.37 );
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