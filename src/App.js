import React, { Component } from 'react';
// 현재 디렉토리 아래에 componenet 디렉토리의 TOC.js 파일 import
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import Subject from "./components/Subject";
import Control from "./components/Control";
import './App.css';






class App extends Component {

  // 어떠한 컴포넌트가 실행될 때 render()보다 먼저 실행되고 
  // 컴포넌트를 초기화 시켜주는 것 : constructor
  constructor(props){
    super(props);
    // ui에 영향을 주지 않는 값이므로 state에 두지 않음
    this.max_content_id = 3;
    // App 컴포넌트가 내부적으로 사용할 상태는 여기서 지정한 state
    this.state={
      // 웹 페이지의 상태를 나타내는 state, welcome state와 연결
      mode:'welcome',
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
  
  getContent(){
    // 웹 페이지의 status를 확인하고 그에 따른 동적 화면 출력
    var _title, _desc, _article = null;
    
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}  ></ReadContent>
    } else if (this.state.mode === 'read') {
      var _content = this.getReadContent();
      // 모드가 웰컴이나 read일 경우 ReadContent 컴포넌트 호출
       _article = <ReadContent title={_content.title} desc={_content.desc}  ></ReadContent>
    } else if(this.state.mode ==='create') {
      // onSubmit이라는 이벤트 설치
      _article = <CreateContent onSubmit={function(_title, _desc){
        this.max_content_id = this.max_content_id + 1;
        // state에 값을 추가할때는 push보다는 concat을 사용 (원래의 값이 변하지 않게 하기 위해)
        var _contents = this.state.contents.concat({
          id : this.max_content_id,
          title : _title,
          desc : _desc
        });
        console.log(_contents.length, _contents.length)
        this.setState({
          contents : _contents,
          mode : 'read',
          selected_content_id : this.max_content_id
        })}.bind(this)}></CreateContent>

        // 배열을 복제후 붙여넣기를 통해 원본 데이터의 손실을 막는 방법 
        // 객체의 경우에는 Object.assign({},a); a 객체를 복제
        // var newContents = Array.from(this.state.contents);
        // newContents.push({
        //   id:this.max_content_id,
        //   title:_title,
        //   desc:_desc
        // });
        // this.setState({
        //   contents : newContents
        // })
        
    } else if (this.state.mode === 'update') {
      var _content = this.getReadContent();
      _article = <UpdateContent data = {_content}
      onSubmit = {function(_id, _title, _desc){
        var _contents = Array.from(this.state.contents);
        var i = 0;
        while(i<_contents.length) {
          if(_contents[i].id === _id) {
            _contents[i] = {id:_id, title : _title, desc : _desc}
          }
          this.setState({
            contents : _contents, 
            mode : 'read'
          })
          i = i + 1;
        }
      }.bind(this)}></UpdateContent>
    }
    return _article;
  }
  getReadContent(){
    // 선택한 목록의 내용을 리턴함(selected_id 포함)
    var i = 0;
      while(i<this.state.contents.length){
        // 현재 순번에 해당되는 컨텐츠
        var data = this.state.contents[i];
        // 선택한 컨텐츠의 id와 컨텐츠 목록의 id를 순회하며 비교
        if(data.id === this.state.selected_content_id) {
          // 일치하는 항목이 있다면 현재 순번의 값으로 지정 
          return data;
          break;
        }
        i = i+1;
      }
  }
  render() {
    console.log('max : ' + this.max_content_id)
    console.log(`
    -----------------
    App => render
    `)
    


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
        <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          });
          if(_mode === 'delete'){
            if(window.confirm('really?')){
              var _contents = Array.from(this.state.contents);
              var i = 0;
              while(i < _contents.length){
                if(_contents[i].id === this.state.selected_content_id){
                  _contents.splice(i,1);
                  this.max_content_id = this.max_content_id - 1
                  break;
                }
                i = i + 1;
              }
              this.setState({
                mode:'welcome',
                contents:_contents,
              });
              alert('deleted!');
            }
          } else {
            this.setState({
              mode:_mode
            });
          }

        }.bind(this)}></Control>
        {/* 모드 변경에 따른 컴포넌트 지정을 위한 변수 */}
        {this.getContent()}
        
      </div>
    );
  }
}


export default App;
