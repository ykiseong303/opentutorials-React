import React, { Component } from 'react';
// 현재 디렉토리 아래에 componenet 디렉토리의 TOC.js 파일 import
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';






class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!!"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is Hyper Text Markup Language."></Content>
      </div>
    );
  }
}

export default App;
