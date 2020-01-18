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
      // 현재 선택된 컨텐츠의 id
      // 향후 contents객체있는 id값과 비교
      selected_content_id:1,
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
      var i = 0;
      while(i<this.state.contents.length){
        // 현재 순번에 해당되는 컨텐츠
        var data = this.state.contents[i];
        // 선택한 컨텐츠의 id와 컨텐츠 목록의 id를 순회하며 비교
        if(data.id === this.state.selected_content_id) {
          // 일치하는 항목이 있다면 현재 순번의 값으로 지정 
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i+1;
      }
    }
    return (
      // 컴포넌트의 props 값들을 state로 바꾸고 
      // state의 값을 해당 컴포넌트로 전달하는 방식 적용
      <div className="App">
        <Subject 
          // App(상위 컴포넌트)의 state를 가져옴
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          // 이벤트 발생시 사용을 위한 사용자 지정함수
          onChangePage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}>
          {/* 이벤트에 설치한 사용자 함수를 호출하고자함 */}
        </Subject> 
        <TOC 
          // 사용자 지정(이벤트)함수 선언
          onChangePage={function(id){
            // state를 변경할 때는 인자로 객체의 형태를 사용해야함
            this.setState(
              {
                mode:'read',
                selected_content_id:Number(id),
              }
              );
          }.bind(this)}
          data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}  ></Content>
      </div>
    );
  }
}

export default App;
