import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { toggleSideNav } from './actions/index';
import Main from './components/main';
import SideNav from './components/common/side-nav';

class App extends Component {
  handleToggle = () => {
    this.props.toggleSideNav(!this.props.open);
  }

  render() {
    return (
      <div className="App">
        <AppBar title="Micah Wood Fan Page" onLeftIconButtonTouchTap={this.handleToggle}/>
        <SideNav navToggle={this.handleToggle} open={this.props.open} />
        <Main />
      </div>
    );
  }
}

function mapStateToProps({sideNav}) {
  return {
    open: sideNav
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleSideNav }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
