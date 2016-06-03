import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
//import Button from './components/Button';
//import Box from './components/Box';
//import Slider from './components/Slider';
import LunBo from './components/Lunbo';

import Span from  './components/Span'
// Render the main component into the dom
//ReactDOM.render(<App />, document.getElementById('app'));
//ReactDOM.render(<Button classn={"success"} target={"a"}/>,document.getElementById('app'));
//ReactDOM.render(<Button classn={"fail"}  target={'a'} href={'http://www.baidu.com'} />,document.getElementById('app'))
//ReactDOM.render(<Box.child classname="headerstyle" >123</Box.child>,document.getElementById('app'))
/*const sliderIntance = (
  <Slider
    >
    <Slider.Item>
      <img
        src="http://s.amazeui.org/media/i/demos/bing-1.jpg" />
    </Slider.Item>
    <Slider.Item><img
      src="http://s.amazeui.org/media/i/demos/bing-2.jpg" /></Slider.Item>
    <Slider.Item>
      <img
        src="http://s.amazeui.org/media/i/demos/bing-3.jpg" /></Slider.Item>
    <Slider.Item>
      <img
        src="http://s.amazeui.org/media/i/demos/bing-4.jpg" /></Slider.Item>
  </Slider>
);
const group=React.createClass({
  render(){
    return <div>
      {sliderIntance}
    </div>
  }
});*/

//ReactDOM.render(<Slider></Slider>,document.getElementById('app'));
//ReactDOM.render(<Box header="this header"  classOuterBox="boxContent">123123</Box>,document.getElementById('app1'));

//ReactDOM.render(<Span />,document.getElementById('app1'));
ReactDOM.render(<LunBo interval={100} number={4} boxStyle="content" interval={4000}  >
  <li className="boxStyleLi"><img src="http://s.amazeui.org/media/i/demos/bing-1.jpg" alt=""/></li>
  <li className="boxStyleLi"><img src="http://s.amazeui.org/media/i/demos/bing-2.jpg" alt=""/></li>
  <li className="boxStyleLi"><img src="http://s.amazeui.org/media/i/demos/bing-3.jpg" alt=""/></li>
  <li className="boxStyleLi"><img src="http://s.amazeui.org/media/i/demos/bing-4.jpg" alt=""/></li>
</LunBo> ,document.getElementById('app'));

