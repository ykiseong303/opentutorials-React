import React, { Component } from 'react';

class CreateContent extends Component{
    render(){
      return(
        <article>
              <h2>Create</h2>
              {/* action은 데이터를 전송할 위치  */}
              {/* submit버튼을 클릭하면 해당 태그 (여기서는 form)에서 onSubmit 이벤트가 실행되도록 약속되어 있음 */}
              <form action="/create_process" method="post"
                onSubmit={function(e){
                  // submit버튼 클릭시 액션 링크가 가르키는 곳으로 페이지 전환이 일어나는데
                  // 이것을 막기위함  
                  e.preventDefault();
                  alert('submit!!!');
                }.bind(this)}
              >
                {/* placeholder는 입력된 값이 없을때 창에서 보여주는 값 */}
                <p><input type = "text" name = "title" placeholder="title"></input></p>
                <p><textarea name="desc" placeholder="description"></textarea></p>
                <p><input type="submit"></input></p>
              </form>
        </article>
      );
    }
  }

export default CreateContent;