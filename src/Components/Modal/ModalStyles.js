import  styled  from 'styled-components';

export const Container = styled.div` 
    display:flex; 
    align-items: center;
    justify-content: center; 
    flex-direction: column;
`;

export const ModalT = styled.div`
    width: 614px;
    height: 558px;
    background-color: rgba(0, 0, 0, .8);
    z-index: 10;
    position: fixed;
    top: 25%;
    display: flex; 
    align-items: center;
    justify-content: space-around;
    border-radius: 15px;
`;

export const Poster = styled.div`
    height: 465px;
    width: 285px;
`;

export const Content = styled.div`
    align-self: flex-end;
    width: 246px;
    height: 465px;  
    
`;

export const Title = styled.h4`
    color: rgb(217, 217, 217);
    font-size: 15px;  
    
    
`;

export const Info = styled.h4`
    color: rgb(217, 217, 217);
    font-size: 12px;  
    
    `;

export const Img = styled.img`
    
`;

export const Button = styled.button`
    /* align-self: flex-end; */
    background-color: red;
    height: 30px;
    padding: 5px;
    font-weight: 700;
    font-size: 15px;
    cursor: pointer;
    
`;
export const Blur = styled.div`
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    display: flex; 
    align-items: center;
    
`;