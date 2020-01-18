// react라는 라이브러리에서 Component라는 클래스를 import
import React, { Component } from 'react';

// TOC : Table Of Content
class TOC extends Component{

    render() {
        // App 컴포넌트로부터 전달받은 props
        var data = this.props.data;
        var i = 0;
        // 반복시킬 태그를 담는 리스트
        var list = [];
        while(i < data.length) {
            // 엘리먼트를 자동적으로 생성하는 경우 key라는 항목을 가지고 있어야함
            list.push(<li key={data[i].id}>
              <a 
                href={"./content/"+data[i].id+'.html'}
                onClick={function(e){
                  e.preventDefault();
                  data-id = data.id;
                  this.props.onChangePage();
                }.bind(this)}
                >{data[i].title}
            </a></li>)
            i = i+1;
        }
        return(
        <nav>
              <ul>
                  {list}
              </ul>
        </nav>
      );
    }
  }

// TOC라는 클래스를 외부에서 사용할 수 있게함
export default TOC;
