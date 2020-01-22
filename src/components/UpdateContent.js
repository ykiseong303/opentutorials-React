import React, { Component } from 'react';

/*
  props : data(title, desc)
*/

/*
  form에 대한 리액트 문법을 공부할 필요가 있음
*/
class UpdateContent extends Component{
    // update기능은 받아온 props의 값을 가변시킬 수 있어야 하므로 state화 시켜야 함
    constructor(props) {
      super(props);
      this.state = {
        id : this.props.data.id,
        title : this.props.data.title,
        desc : this.props.data.desc,
      }
      this.inputFormHandler = this.inputFormHandler.bind(this);
    }
    inputFormHandler(e){
      // setState 리펙토링
      // 현재 이벤트가 발생하는 태그를 알아내야함
      this.setState({
        [e.target.name]:e.target.value,
      })
    }
    render(){
      console.log('UpdateContent => render')
      
      return(
        <article>
              <h2>Update</h2>
              {/* action은 데이터를 전송할 위치  */}
              {/* submit버튼을 클릭하면 해당 태그 (여기서는 form)에서 onSubmit 이벤트가 실행되도록 약속되어 있음 */}
              {/* form태그에서 사용된 onSubmit과 props로 전달받은 onSubmit 이벤트를 구분해야하는데, 
              form태그에서 사용된 것은 HTML 태그의 문법과 같음 */}
              <form action="/create_process" method="post"
                onSubmit={function(e){
                  // submit버튼 클릭시 액션 링크가 가르키는 곳으로 페이지 전환이 일어나는데
                  // 이것을 막기위함  
                  e.preventDefault();
                  this.props.onSubmit(
                    this.state.id,
                    this.state.title,
                    this.state.desc,
                    );
                }.bind(this)}
              >
                <input type='hidden' name ='id' value={this.props.data.id}></input>
                {/* placeholder는 입력된 값이 없을때 창에서 보여주는 값 */}
                <p>
                  {/* input 태그안에 type, name, value 등의 속성을 지정하는 것(개발자도구에서 확인가능) */}
                  <input 
                    type = "text" 
                    name = "title" 
                    placeholder="title"
                    // props의 값은 read-only이므로 아래처럼 하면 변경이 안됨
                    value = {this.state.title}
                    // state의 값을 바꿔야지만 props가 read-only가 아닌 상태가 됨
                    // JSX의 attribute인 onChange() 사용해야함
                    onChange = {this.inputFormHandler}>
                  </input>
                </p>
                <p>
                  <textarea 
                    name="desc" 
                    placeholder="description"
                    // 이 HTML의 문법은 원래 HTML문법이 아님, react의 유사 HTML이므로 지정한 문법을 사용해야함
                    // textarea 태그는 value를 사용해야함
                    value = {this.state.desc}
                    onChange = {this.inputFormHandler}>
                  </textarea>
                </p>
                <p><input type="submit"></input></p>
              </form>
        </article>
      );
    }
  }

export default UpdateContent;