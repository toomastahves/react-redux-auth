import React from 'react';
import style from '../../style.css';

export const Menu = () => {
  return (
    <div className={style.menu}>
      <a className={style.menuItem} href='#home'>{'Home'}</a>
      <a className={style.menuItem} href='#pets'>{'Pets'}</a>
      <a className={style.menuItem} href='#users'>{'Users'}</a>
    </div>
  );
};

export default Menu;
