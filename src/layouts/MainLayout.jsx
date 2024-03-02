import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import css from './MainLayout.module.css';

const MainLayout = () => {
  return (
    <div className={css.layoutContainer}>
      <Header />
      <div className={css.contentContainer}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
