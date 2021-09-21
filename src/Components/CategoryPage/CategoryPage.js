import React, { useEffect, useState } from 'react'
import { categoriesPage } from '../../utils/utils';
import { Container, Img, Title, Glass } from '../../Styles/Styles';

const CategoryPage = ({searchValue}) => {
    const [searchTerm, setSearchTerm] = useState([]);

    useEffect(() => {
        (async() => {
            const data = await categoriesPage(searchValue);
            // setSearchTerm(data);
            console.log(data);
            let attr = data.map((items) => ({
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
    }, [searchValue]);
    
    return (

        <Container display='flex' alItm='center' direction='column'>
            {searchTerm.map((item, idx)=>(
                <Container width='60%'mrgn='10px 0' fillOpacity='100%'
                    display="flex" alItm='center'jstCnt='space-evenly'key={idx}
                    bg='rgba( 255, 255, 255, 0.25 )' bckdrpFil='blur( 4px )'
                    radius='15px' webBF='blur( 4px )'
                    bdr='1px solid rgba( 255, 255, 255, 0.18 )'
                    boxShad='6px 8px 12px 0 rgba( 31, 38, 135, 0.37 )'>
                    <Container>
                        <Title size='15px'>{item.title}</Title>
                        <Img src={item.poster}/>
                    </Container>
                    <Container alSlf='flex-end' width='40%'>
                        <Title size='18px'>Rating: {item.rating}</Title>
                        <Title size='18px'>Description:</Title>
                        <Title size='18px'>{item.description}</Title>
                    </Container>      
                </Container>
               
            ))}
        </Container>
    )
}

export default CategoryPage
