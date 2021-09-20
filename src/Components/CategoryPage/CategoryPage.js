import React, { useEffect, useState } from 'react'
// import { categoriesPage } from '../../utils/utils';
import { Container, Img, Title, Glass } from '../../Styles/Styles';

const CategoryPage = (props) => {
    const [searchTerm, setSearchTerm] = useState([]);

    useEffect(() => {
        (async() => {
            // const data = await categoriesPage("action");
            // setSearchTerm(data);
            // console.log(data);
            let attr = props.category.map((items) => ({
                Id: items.id,
                description: items.attributes.description,
                title: items.attributes.canonicalTitle,
                rating: items.attributes.ageRating,
                poster: items.attributes.posterImage.medium,
                video: items.attributes.youtubeVideoId
            }
            ))
            setSearchTerm(attr);
            // console.log(searchTerm)
        })();
    }, []);
    
    return (

        <Container display='flex' alItm='center' direction='column'>
            {searchTerm.map((item, idx)=>(
                <Container width='60%'mrgn='10px 0' fillOpacity='100%'
                    display="flex" alItm='center'jstCnt='space-evenly'key={idx}
                    bgColor='rgba(26, 26, 26, 0.25)' bckdrpFil='blur( 4px )'
                    radius='15px' webBF='blur( 4px )'
                    bdr='3px solid rgba(140, 140, 140, 0.18)'
                    boxShad='3px 3px 12px 0 rgba( 51, 51, 51, 0.37 )'>
                    <Container>
                        <Title color='rgb(217, 217, 217)'size='15px'>{item.title}</Title>
                        <Img src={item.poster}/>
                    </Container>
                    <Container alSlf='flex-end' width='40%'>
                        <Title color='rgb(217, 217, 217)'size='18px'>Rating: {item.rating}</Title>
                        <Title color='rgb(217, 217, 217)'size='18px'>Description:</Title>
                        <Title color='rgb(217, 217, 217)'size='18px'>{item.description}</Title>
                    </Container>      
                </Container>
               
            ))}
        </Container>
    )
}

export default CategoryPage
