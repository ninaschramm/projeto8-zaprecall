import logo from './logo.svg';
import './css/reset.css';
import './css/styles.css';
import Init from './Init';
import QuestionList from './QuestionList'

import React, { ReactDOM } from 'react';


function App() {
  const [isInit, setIsInit] = React.useState(false);

  return (
    <>
      <div className='layout'>
        {isInit ? <QuestionList /> : <Init isInit={isInit} setIsInit={setIsInit}/>}
      </div>

      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </>
  );
}

export default App;
