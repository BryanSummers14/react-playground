import React, { Component } from 'react';
import {Card, CardMedia, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import '../css/post.css'

class Post extends Component {
	render() {
		return (
			<Card className="card-post">
    			<CardTitle title={this.props.postSrc.title.rendered} />
    				<CardMedia
      					overlay={<CardTitle title={this.props.postSrc.title.rendered} />}>
      				<img alt='' src={this.props.postSrc.better_featured_image ? this.props.postSrc.better_featured_image.media_details.sizes.medium.source_url : 'http://bento.cdn.pbs.org/hostedbento-prod/filer_public/_bento_media/img/no-image-available.jpg'} />
    			</CardMedia>*/
    			<CardText dangerouslySetInnerHTML={{__html: this.props.postSrc.content.rendered}}>
    			</CardText>
    			<CardActions>
      				<FlatButton label="Action1" />
      				<FlatButton label="Action2" />
    			</CardActions>
  			</Card>
		);
	}
}

export default Post;