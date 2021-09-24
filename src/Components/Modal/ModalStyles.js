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
    /* @media(min-width: 1024px){
    }
    @media(min-width: 768px){
        width: 500px; 
        height: 460px; 
        background-color: rgba(0, 0, 0, .8);
        z-index: 10;
        position: fixed;
        top: 18%;
        display: flex; 
        align-items: center;
        justify-content: space-around;
        border-radius: 15px;
    } */
   /* @media(min-width: 425px){
        width: 25%;  
    } */
`;

export const Poster = styled.div`

    height: 465px;
    width: 285px;
    /* @media(min-width: 1024px){
    }
    @media(min-width: 768px){
        width: 200px; 
        height: 400px; 
    } */
    /*@media(min-width: 425px){
        width: 25%;  
    } */
`;

export const Content = styled.div`
    align-self: flex-end;
    width: 246px;
    height: 465px;  
    
    /* @media(min-width: 1024px){ 
    }
    @media(min-width: 768px){
        width: 200px; 
        height: 400px; 
    } */
   /* @media(min-width: 425px){
        width: 25%;  
    } */
`;

export const Title = styled.h4`
    color: rgb(217, 217, 217);
    font-size: 15px;  
    
    /* @media(min-width: 1024px){
    }
    @media(min-width: 768px){
        font-size: 12px;  
    } */
    /*@media(min-width: 425px){
        font-size: 10px;  
    } */
`;

export const Info = styled.h4`
    color: rgb(217, 217, 217);
    font-size: 12px;  
    
    /* @media(min-width: 1024px){
    }
    @media(min-width: 768px){
        font-size: 9px;  
    } */
    /*@media(min-width: 425px){
        font-size: 7px;  
    } */
    `;

export const Img = styled.img`
    
    /* @media(min-width: 1024px){
        height: 402px;
        width: 284;  
    }
    @media(min-width: 768px){
        height: 350px;
        width: 204px;  
    } */
    /*@media(min-width: 425px){
        height: 300px;  
    } */
`;

export const Button = styled.button`
    /* align-self: flex-end; */
    background-color: red;
    height: 30px;
    padding: 5px;
    font-weight: 700;
    font-size: 15px;
    cursor: pointer;
    
    /* @media(min-width: 1024px){  
    }
    @media(min-width: 768px){
        background-color: red;
        height: 25px;
        padding: 5px;
        font-weight: 600;
        font-size: 12px;  
    }  */
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
    /* justify-content: space-evenly; */
    /* border: 3px solid rgba(140, 140, 140, 0.18); */
    /* background-color:rgba(0, 0, 0, .8);  */
    /* border-radius: 15px;  */
    /* box-shadow: 9px 3px 18px 0 rgba( 77, 77, 77, 0.37 ), -9px -3px 18px 0 rgba( 77, 77, 77, 0.37 ); */
    /* box-shadow: 9px 3px 18px 0 rgba( 138, 138, 138, 0.37 ), -9px -3px 18px 0 rgba( 138, 138, 138, 0.37 ); */
    /* @media(min-width: 1024px){ */
        
         
    /* } */
    /* @media(min-width: 768px){
        top: 10vh;
        width: 700px;
        height: 500px;
        margin:9px 0;  
    }
    @media(min-width: 425px){
        top: 10vh;
        width: 700px;
        height: 500px;
        margin:5px 0;  
    } */
    
`;