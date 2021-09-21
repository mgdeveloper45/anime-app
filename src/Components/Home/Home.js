import React from 'react'
import { Container } from '../../Styles/Styles';
import Row from '../Row/Row'

const Home = () => {
    return (
			<Container display="flex" direction="column" alItm="center">
				<Row title="Trending" />
				<Row title="Action" />
				<Row title="Comedy" />
				<Row title="Cyberpunk" />
				<Row title="Josei" />
				<Row title="Psychological" />
				<Row title="Isekai" />
				<Row title="Supernatural" />
				<Row title="Drama" />
			</Container>
		);
}

export default Home
