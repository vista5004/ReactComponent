/**
 * Created by tiantan on 2016/6/3.
 */
require('styles/App.css');
require('normalize.css/normalize.css');

import React from 'react';
import ReactDOM from 'react-dom';
const Span=React.createClass({
  propsTypes:{
    classn:React.PropTypes.string
  },
  getDefaultProps(){
    return{

    }
  },
  render(){
    let{
      classn
      }=this.props;
    return <div className="spanStyle">
      <h2>23423</h2>
    </div>
  }
});

export default Span;
