import style from "./Header.module.css";

export const Header = () => {
  return (
    <header className={style.header}>
      <span className={style.developer}>DEVELOPER</span>
      <h1 className={style.title}>Top Web Developers Jobs</h1>
      <p className={style.description}>Find your dream job today!</p>
    </header>
  );
};
