/**
 * Created by tiantan on 2016/6/1.
 */
import React from "react";
import ReactDOM from "react-dom";
const Slider=React.createClass({
    propsTypes:{
      control:React.PropTypes.bool,
      paper:React.PropTypes.bool,
      interval:React.PropTypes.number,
      autoPlay:React.PropTypes.bool,
      action:React.PropTypes.func,
      activeIndex:React.PropTypes.number,
      defaultActiveIndex:React.PropTypes.number,
      direction:React.PropTypes.oneOf(['prev','next']),
      prevIcon:React.PropTypes.node,
      nextIcon:React.PropTypes.node
    },
    getDefaultProps(){
      return{
        control:true,
        paper:true,
        interval:500,
        autoPlay:true,
        prevIcon:<span className="prevIcon">left</span>,
        nextIcon: <span className="nextIcon">right</span>
      }
    },
  getInitialState(){
    return{
      activeIndex:this.props.defaultActiveIndex===null?0:this.props.defaultActiveIndex,
      previousActiveIndex:null,
      direction:null
    }
  },
  componentWillReceiveProps(nextProps){
    var activeIndex=this.getActiveIndex();
    if(nextProps.activeIndex!=null && nextProps.activeIndex!=activeIndex){
      clearTimeout(this.timeout);
      this.setState({
        previousActiveIndex:activeIndex,
        direction:nextProps.direction!=null? nextProps.direction:this.getDirection(activeIndex,nextProps.activeIndex)
      })
    }
  },
  componentDidMount(){
    this.props.autoplay&&this.waitForNext();
  },
  componentWillUnmount(){
    clearTimeout(this.timeout);
  },
  getDirection(previousIndex,index){
    if(previousIndex==index){
      return
    }
    return previousIndex>index?'prev':'next'
  },
  getActiveIndex(){
    return this.props.activeIndex!=null? this.props.activeIndex:this.state.activeIndex;
  },
  handleSelect(index,direction,e){
    e && e.preventDefault();
    clearTimeout(this.timeout);
    let previousActiveIndex=this.getActiveIndex();
     direction=direction||this.getDirection(previousActiveIndex,index);//根据先前index和当下index确定方向
    if(this.props.action){
      this.props.action(index,direction);//更换页面时调用的函数，传入index direction
    }
    if(this.props.activeIndex===null && index!=previousActiveIndex){
      this.setState({
        activeIndex:index,
        previousActiveIndex:previousActiveIndex,
        direction:direction
      })
    }
  },
  next(e){//下一个
    e && e.preventDefault();
    let index=this.getActiveIndex()+1;
    let count=React.Children.count(this.props.children);
    if(index>count-1){
      index=0
    }
    this.handleSelect(index,'next');
  },
  prev(e){ //上一个
    e && e.preventDefault();
    let index=this.getActiveIndex()-1;
    let count=React.Children.count(this.props.children);
    if(index<0){
      index=count-1;
    }
    this.handleSelect(index,'prev')
  },
  waitForNext(){
    if(this.props.interval){
      this.timeout=setTimeout(this.next,this.props.interval);
    }
  },
  renderControl(){
    return this.props.control ? <div className="controllerSpan">
      {this.props.prevIcon}
      {this.props.nextIcon}
    </div>:null
  },
  renderPaper(){
    if(this.props.paper){
      let child=React.Children.map(this.props.children,(child,i)=>{
        let classname=(i===this.getActiveIndex())?"ImageCircle":null;
        return <li className={classname} key={i}>
          {i}
        </li>
      });
      return(
        <ol className="olClassName">
          {child}
        </ol>
      )
    }
  },
  renderItem(child,index){
    let activeIndex=this.getActiveIndex();
    let isActive=(index===activeIndex);
    let isPreviousActive=this.state.previousActiveIndex===index;
    let props = {
      active: isActive,
      key: child.key ? child.key : index,
      index: index,
      animateOut: isPreviousActive,
      animateIn: isActive && this.state.previousActiveIndex != null,
      direction: this.state.direction,
      onAnimateOutEnd: isPreviousActive ? this.handleItemAnimateOutEnd : null
    };
    return React.cloneElement(child,props);
  },
  render() {
    let {
      className,
      children,
      props
      } = this.props;
    return (
      <div
        {...props}
        className="sliderOuterBox"
        >
        <ul className="sliderUl">
          {React.Children.map(children, this.renderItem)}
        </ul>
        {this.renderControl()}
        {this.renderPaper()}
      </div>
    );
  }
});
Slider.item=React.createClass({
  propsTypes:{
    direction:React.PropTypes.oneOf(['prev','next']),
    active:React.PropTypes.bool,
    animateIn:React.PropTypes.bool,
    animateOut:React.PropTypes.bool,
    index:React.PropTypes.bool
  },
  getInitialState(){
    return{
      direction:null
    }
  },
  getDefaultProps(){
    return{
      animateIn:true
    }
  },
  componentWillReceiveProps(nextProps){
    if(this.props.active!=nextProps.active){
      this.setState({
        direction:null
      })
    }
  },
  componentDidUpdate(prevProps){
    if(this.props.active!=prevProps.active){
      setTimeout(this.startAnimation,20);
    }
  },
  startAnimation(){
    this.setState({
      direction:this.props.direction==="prev"?"right":"left"
    })
  },
  render(){
    let {
        className,
        active,
        animateIn,
        animateOut,
        direction
      }=this.props;
    let classname= function (active,animateIn,animateOut) {
      if(active){
        return animateIn===true?"imgSliderIn":"imgSliderOut"
      }else{
        return animateOut===false?"imgSliderOut":"imgSliderIn"
      }
    };
    return (<li className={classname(active,animateIn,animateOut)}>
      {this.props.children}
    </li>)
  }
});

export default Slider;
