/**
 * Created by tiantan on 2016/5/31.
 */
import React from 'react';
import ReactDOM from 'react-dom';
const Button=React.createClass({
  propsTypes:{
    component:React.PropTypes.node,
    classn:React.PropTypes.string,
    href:React.PropTypes.string,
    active:React.PropTypes.bool,
    disabled:React.PropTypes.bool,
    target:React.PropTypes.string
  },
  getDefaultProps(){
    return{
      active:true
    }
  },
  getInitialState(){
    return{

    }
  },
  renderAnchor(classes){
    let{
        href,
        component:Component,
        children,
        props
      }=this.props;
    Component=Component||'a';
    href=href||'#';
    return <Component {...props} href={href} className={classes}>
      {children}
    </Component>
  },
  renderButton(classes) {
    let {
      component: Component,
      children,
      props,
      } = this.props;
    Component = Component || 'button';

    return (
      <Component{...props} className={classes}>
        {children}
      </Component>
    );
  },
  render() {
    let {
      href,
      target,
      classn,
      } = this.props;
    let renderType = href || target ? 'renderAnchor' : 'renderButton';

    return this[renderType]( classn);
  }

})
export default Button;


