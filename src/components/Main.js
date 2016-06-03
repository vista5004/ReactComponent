require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

const Alert=React.createClass({
  propTypes:{
    className:React.PropTypes.string,
    active:React.PropTypes.bool,
    onClick:React.PropTypes.func
  },
  getDefaultProps(){
    return{
      className:"style",
      active:true
    }
  },
  getInitialState(){
    return{
      active:this.props.active,
      content:"test",
      tittle:"123123123"
    }
  },
  handleClick(){
    this.setState({tittle:"asdfasdfasdf"});
    this.props.active=!this.props.active;
  },
  render(){
    const {
      active,
      onClick,
      props
      }=this.props;
    return <div {...props} className={this.props.active?"active":"unactive"} >
      <a href="#" tittle={this.state.tittle}>123132123</a>
    </div>
  }

});
export default Alert;
