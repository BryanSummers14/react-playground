import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleSideNav } from '../../actions/index';

class SideNav extends Component {
  handleToggle = () => {
  		this.props.navToggle(!this.props.open);
  }

	render() {
		return (
				<Drawer open={this.props.open}>
        		<br/>
        		<br/>
        		<br/>
        		<List>
          			<Link to="/">
          				<ListItem onTouchTap={this.handleToggle} primaryText="Posts" leftIcon={<ContentInbox />} />
          			</Link>
          			<Link to="/about">
          				<ListItem onTouchTap={this.handleToggle} primaryText="About" leftIcon={<ActionGrade />} />
          			</Link>
          			<ListItem onTouchTap={this.handleClose} primaryText="Sent mail" leftIcon={<ContentSend />} />
          			<ListItem onTouchTap={this.handleClose} primaryText="Drafts" leftIcon={<ContentDrafts />} />
          			<ListItem onTouchTap={this.handleClose} primaryText="Inbox" leftIcon={<ContentInbox />} />
        		</List>
        		</Drawer>
		);
	}
}

function mapStateToProps({sideNav}) {
  return {
    open: sideNav
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({navToggle: toggleSideNav}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);
