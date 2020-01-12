// react라는 라이브러리에서 Component라는 클래스를 import
import React, { Component } from 'react';

// TOC : Table Of Content
class TOC extends Component{
    render() {
      return(
        <nav>
              <ul>
                  <li><a href="1.html">HTML</a></li>
                  <li><a href="2.html">CSS</a></li>
                  <li><a href="3.html">JavaScript</a></li>
              </ul>
        </nav>
      );
    }
  }

// TOC라는 클래스를 외부에서 사용할 수 있게함
export default TOC;