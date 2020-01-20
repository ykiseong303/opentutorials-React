import React, { Component } from 'react';

//컴포넌트를 만들때는 return 문안에 반드시 하나의 최상위 태그로 시작해야함
class Control extends Component{
    render(){
      return(
        // 클릭시 모드 변경을 위한 구문
        <ul>
          <a href="/create" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('create');
          }.bind(this)}><li>create</li></a>
          <a href="/update" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('update');
          }.bind(this)}><li>update</li></a>
          <li><input type="button" value="delete" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('delete');
          }.bind(this)}></input></li>
        </ul>
      );
    }
  }

export default Control;