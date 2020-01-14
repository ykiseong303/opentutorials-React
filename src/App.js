import React, { Component } from 'react';
// 현재 디렉토리 아래에 componenet 디렉토리의 TOC.js 파일 import
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';






class App extends Component {

  // 어떠한 컴포넌트가 실행될 때 render()보다 먼저 실행되고 
  // 컴포넌트를 초기화 시켜주는 것 : constructor
  constructor(props){
    super(props);
    // App 컴포넌트가 내부적으로 사용할 상태는 여기서 지정한 state
    this.state={
      // subject라는 이름의 property (state상에서 존재)
      subject:{title:'WEB', sub:'world wide web!!'},
      con:{id:1},
      contents:[
        {id:1, title:'HTML', desc:'HTML is ...'},
        {id:2, title:'CSS', desc:'CSS is ...'},
        {id:3, title:'JavaScript', desc:'JavaScript is ...'}

      ]
    }
  }
  render() {
    return (
      // 컴포넌트의 props 값들을 state로 바꾸고 
      // state의 값을 해당 컴포넌트로 전달하는 방식 적용
      <div className="App">
        <Subject 
          // App(상위 컴포넌트)의 state를 가져옴
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject>
        <TOC 
          // TOC 컴포넌트에 data라는 이름의 props전달
          data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is Hyper Text Markup Language."></Content>
      </div>
    );
  }
}

export default App;
