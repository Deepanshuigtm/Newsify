import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css'; // Import the CSS module

export default function Headers({blur}) {
  return (
    <div className={`${styles['header-container']} ${blur ? 'doblur' : ''}`}>
      <div className={styles['logo-style']}>
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          width="46px"
          height="46px"
          viewBox="0 0 46 46"
          enableBackground="new 0 0 46 46"
          space="preserve"
        >
          <path fill="#fff" d="M22.953,0A23,23,0,1,0,45.909,23,22.978,22.978,0,0,0,22.953,0Zm0,43A20,20,0,1,1,42.915,23,19.981,19.981,0,0,1,22.953,43Zm5.055-16.727L24.83,16.009h-3.5l-3.178,10.24-2.529-10.24H11.99L16.162,32H19.75l3.286-10.6L26.3,32h3.523L34,16.009h-3.5Z"></path>
        </svg>
        <div>
          <NavLink to="/"><h2>Newsify</h2></NavLink>
        </div>
      </div>
      <div className={styles['sub-header']}>
        <NavLink to="/">Home</NavLink>
        <div><NavLink to="activity">Activity</NavLink></div>
        <div>Todays Pick</div>
        <div><NavLink to="bookmark">Bookmark</NavLink></div>
      </div>
      <div>
        <button className={styles['btn-contact']}>Contact me</button>
      </div>
    </div>
  );
}
