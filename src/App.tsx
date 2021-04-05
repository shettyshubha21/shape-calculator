import React from 'react';
import './App.css';
import Details from './components/organisms/Details';
import Header from './components/organisms/Header';
import Steps from './components/organisms/Steps';
import VerticalBanner from './components/organisms/VerticalBanner';
import styles from './components/templates/default/default.module.scss';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.comp}>
        <Details />
        <Steps />
        <VerticalBanner />
      </div>
    </div>
  );
}

export default App;
