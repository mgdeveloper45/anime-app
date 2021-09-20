import React, { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";
import { searchAnime } from "../../utils/utils";

const Search = ({onSearchSubmit}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [singleAnime, setSingleAnime] = useState({});
    const [show, setShow] = useState(false);
    // useEffect(() => {
    //     (async() => {
    //         const data = await searchAnime(searchTerm);
    //         setSingleAnime(data);
    //         // console.log(data);
    //     })();
    // }, [searchTerm]);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        }
    }
      
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearchSubmit(searchTerm);
        setSearchTerm("");
    }
	return (
		<div>
			<form onSubmit={handleSubmit}>
                <input type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
                <select name="" id="">
                    <option value="">Search By</option>
                    <option value="">Title</option>
                    <option value="">Category</option>
                </select>
			</form>
			{/* <h1>{singleAnime?.canonicalTitle}</h1>
			<img src={singleAnime.posterImage?.small} alt="" onClick={()=>setShow(!show)} />
			{show && (
				<YouTube videoId={singleAnime?.youtubeVideoId} opts={opts} />
			)} */}
		</div>
	);
};

export default Search;
