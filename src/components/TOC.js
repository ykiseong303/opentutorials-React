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
                // 이 값은 검사의 a태그 엘리먼트의 항목에서 확인이 가능함
                // props의 값을 a태그의 data-id라는 속성명으로 정의함
                // 각 태그별로 data-id와 그에 맞는 id값을 가지고 있음

                // 따라서 a태그에 접근을 할 수 있으면 id값을 가져올 수 있음
                // 현재순번의 data[i]임을 유의
                data-id = {data[i].id}
                onClick={function(e){
                  // onClick발생시 지정되는 익명함수의 인자인 
                  // e객체에는 target이라는 속성이 있는데
                  // 클릭이 발생한 태그, 여기서는 a를 가리킴
                  // 즉, e.target의 dataset으로 접근이 가능함
                  // 왜인지는 모르겠는데 data-의 시작은 dataset으로 찾으면됨
                  e.preventDefault();
                  this.props.onChangePage(e.target.dataset.id);
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
