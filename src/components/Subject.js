import React, { Component } from 'react';

//컴포넌트를 만들때는 return 문안에 반드시 하나의 최상위 태그로 시작해야함
class Subject extends Component{
    render(){
      return(
        <header>
          <h1>{this.props.title}</h1>
          {this.props.sub}
        </header>
      );
    }
  }

export default Subject;