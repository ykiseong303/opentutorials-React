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
      // 웹 페이지의 상태를 나타내는 state, welcome state와 연결
      mode:'read',
      welcome:{title:'Welcome', desc:'Hello, React!'},
      // subject라는 이름의 property (state상에서 존재)
      subject:{title:'WEB', sub:'world wide web!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is ...'},
        {id:2, title:'CSS', desc:'CSS is ...'},
        {id:3, title:'JavaScript', desc:'JavaScript is ...'}

      ]
    }
  }
  render() {
    // 웹 페이지의 status를 확인하고 그에 따른 동적 화면 출력
    var _title, _desc = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;

    }
    return (
      // 컴포넌트의 props 값들을 state로 바꾸고 
      // state의 값을 해당 컴포넌트로 전달하는 방식 적용
      <div className="App">
        {/* <Subject 
          // App(상위 컴포넌트)의 state를 가져옴
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject> */}
        <header>
          {/* [ 이벤트 설치 ] */}
          {/* 1. 클릭발생시 이름없는 함수 호출 링크를 클릭했을 때 실행됨 
              2. 그냥 onClick지정시 페이지가 리로드 됨(리로드 없이 역동적인 
              앱을 만드는 것이 리액트의 장점)
              3. a 태그 클릭시 href의 링크로 이동을 못하도록 막아야함 */}
          {/* onClick으로 이벤트가 실행될 때 함수의 첫번째 매개변수로 
          event라는 객체를 주입하기로 약속되어있음
          event 객체의 preventDefault()함수를 사용해서
          해당 태그의 기본적인 동작을 못하도록 제어 */}
          {/* event가 실행됬을 때 호출되는 함수안에서는 this의 값이 컴포넌트 자신이 아니라
          아무값도 지정되어있지 않음 
          >> 함수가 끝난 직후에 .bind(this) 사용 */}
          <h1><a href="/" onClick={ function(e){
            e.preventDefault();
            // state의 값을 변경하고 컴포넌트에 알림
            // 이미 컴포넌트가 생성이 끝난 후에 동적으로 state의 값을 바꿀때 사용
            // 변경하고자 하는 값을 객체의 형태로 전달
            this.setState({
              mode : 'welcome'
            });
          }.bind(this)}
          >{this.state.subject.title} </a></h1>
          {this.state.subject.sub}
        </header>
        <TOC 
          // TOC 컴포넌트에 data라는 이름의 props전달
          data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}  ></Content>
      </div>
    );
  }
}

export default App;
