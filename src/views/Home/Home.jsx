import s from './Home.module.css';

export default function Home({ children }) {
  return (
    <>
      <div className={s.container}>
        {children}
      </div>
    </>
  );
}
