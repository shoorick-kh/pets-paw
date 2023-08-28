// import { NavLink } from 'react-router-dom';
import s from './AppBar.module.css';

export default function AppBar() {
  return (
    <div className={s.section_menu}>
      <header className={s.header}>
        <a href="/" className={s.logo_group}>
          {' '}
        </a>
      </header>
      <div>
        <h1>Hi!👋</h1>
        <h2>Welcome to MacPaw Bootcamp 2023</h2>
        <p>Lets start using The Cat API</p>
      </div>
      <div>
        <ul className={s.menu}>
          <li>
            <button className={s.button_menu}>Voting</button>
          </li>
          <li>
            <button className={s.button_menu}>Breeds</button>
          </li>
          <li>
            <button className={s.button_menu}>Gallery</button>
          </li>
        </ul>
        {/* <NavLink to="/voting">Voting</NavLink> */}
        {/* <NavLink to="/breeds">Breeds</NavLink> */}
        {/* <NavLink to="gallery">Gallery</NavLink> */}
      </div>
    </div>
  );
}
