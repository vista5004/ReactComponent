/**
 * Created by tiantan on 2016/5/31.
 */
import React from 'react';
import ReactDOM from 'react-dom';

const BOX=React.createClass({
  propsTypes:{
    tittle:React.PropTypes.string,
    header:React.PropTypes.string,
    body:React.PropTypes.string,
    footer:React.PropTypes.string,
    classOuterBox:React.PropTypes.string,
    classTittle:React.PropTypes.string,
    classInnerBox:React.PropTypes.string
  },
  getDefaultProps(){
    return{
      classn:'box'
    }
  },
  getInitialState(){
    return{

    }
  },
  renderTittle(tittle){
    let{
        classTittle
      }=this.props;
    return <h2 className={classTittle}>{tittle}</h2>
  },
  renderContent(element,role){
    let{
        classBox
      }=this.props;
    return <BOX.child role={role} className={classBox}>{element}</BOX.child>
  },
  render(){
    let{
      tittle,
      header,
      body,
      footer,
      classOuterBox,
      classTittle,
      classInnerBox,
      props,
      children
      }=this.props;
    return <div className={classOuterBox} {...props}>
      {tittle?this.renderContent(this.renderTittle(tittle)):this.renderContent(header)}
        <div classNmae={classInnerBox}>
          {children}
        </div>
      {this.renderContent(footer,'footer')}
    </div>
  }
});
BOX.child=React.createClass({
  propsTypes:{
    cover:React.PropTypes.string,
    element:React.PropTypes.string,
    role:React.PropTypes.string
  },
  getDefault(){
    return{
      role:'header'
    }
  },
  render(){
    let {
        role,
        classname,
        cover,
        props
      }=this.props;

    if(cover){
    var style={
        backgroundImage:'url('+cover+')',
      }
    }
    return <span {...props} className={role?role+"style":classname}  style={style}>
      {this.props.children}
    </span>
  }
});
export default BOX;

