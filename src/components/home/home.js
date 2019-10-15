import React from 'react';
import './home.css';
import Login from '../login/login'

function Home() {
	const sysName = "zxq的管理系统"
  return (
  	<header className="App-header">
      <Login systemName={sysName} />
    </header>  
  );
}


export default Home;
