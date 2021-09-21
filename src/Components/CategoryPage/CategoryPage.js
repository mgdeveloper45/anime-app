import React, { useEffect, useState } from 'react'
import YouTube from "react-youtube";
// import { useHistory } from "react-router-dom";
import { categoriesPage } from '../../utils/utils';
import { Img, Title, Content, Category, Info, Modal, Poster,CatContainer } from './CatStyles';


const CategoryPage = ({searchValue}) => {
    const [searchTerm, setSearchTerm] = useState([]);
    const [trailer, setTrailer] = useState("");

    // const history = useHistory();
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
                video: items.attributes?.youtubeVideoId
            }
            ))
            setSearchTerm(attr);
            // history.push("/category");
            // console.log(searchTerm)
        })();
    }, [searchValue]);
    

    const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};
    return (

        <CatContainer >
            {searchTerm.map((item, idx)=>(
                <Category onClick={trailer =>
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
            <Modal>
               {trailer && <YouTube videoId={trailer} opts={opts} />}
            </Modal>
        </CatContainer>
    )
}

export default CategoryPage
