import React, { Component } from 'react';
import axios from 'axios';

import Post from '../common/post';
import '../css/home.css';

class HomePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: [],
		};
	}

	componentDidMount() {
	 axios.get('https://dev.briantsummers.com/wp-json/wp/v2/posts')
      .then(res => {
        const posts = res.data;
        posts.reverse();
        this.setState({ posts });
     });
	}

	render() {
		return (
			<article>
				<h1>HomePage</h1>
				<section className="recent-posts">
				{this.state.posts.map((itemPost) => {
					return <Post key={itemPost.slug} postSrc={itemPost} />
				})}
				</section>
			</article>
		)
	}
}

export default HomePage;