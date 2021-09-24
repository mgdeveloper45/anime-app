import React, { useEffect, useState } from 'react'
import YouTube from "react-youtube";
import { categoriesPage } from '../../utils/utils';
import { Img, Button, Blur, CatContainer, Category,  CatModal,Content, Info, Poster, Title, Video } from './CatStyles';


const CategoryPage = ({searchValue}) => {
    const [searchTerm, setSearchTerm] = useState([]);
    const [trailer, setTrailer] = useState("");

    useEffect(() => {
        (async() => {
            const data = await categoriesPage(searchValue);
            console.log(data)
            let attr = data.map((items) => ({
                Id: items.id,
                description: items.attributes.description,
                title: items.attributes.canonicalTitle,
                rating: items.attributes.ageRating,
                poster: items.attributes.posterImage.medium,
                video: items.attributes?.youtubeVideoId
            }
            ))
            setSearchTerm(attr);
        })();
    }, [searchValue]);

    const opts = {
		playerVars: {
			autoplay: 1,
		},
	};
    return (
        <CatContainer >
            {searchTerm.map((item, idx)=>(
                <Category  style={{cursor: "pointer"}} onClick={() => 
                    setTrailer(item.video)} key={idx}>
                    <Poster>
                        <Title>{item.title}</Title>
                        <Img src={item.poster}/>
                    </Poster>
                    <Content>
                        <Info>Rating: {item.rating}</Info>
                        <Info>Description:</Info>
                        <Info>{item.description}</Info>
                    </Content> 
                </Category>
            ))}
            {trailer &&(
                <CatModal>
                    <Video>
                        <YouTube videoId={trailer} opts={opts}/>
                        <Button onClick={()=> setTrailer("")}>X</Button> 
                    </Video>
                      <Blur></Blur> 
                </CatModal>
                
                
            )}
        </CatContainer>
    )
}

export default CategoryPage
