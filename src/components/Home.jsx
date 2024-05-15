import {navigationList} from '@/static/navigationList';
import styles from '@/styles/Home.module.css';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <>
      <header>
        <div className={styles.banner}>{`DJMax\nStore`}</div>
        <nav>
          <ul>
            {navigationList.map((nav) => (
              <Link key={nav.name} to={nav.url}>
                <li>
                  <img src={nav.img} width={25} height={25} />
                  {nav.name}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </header>
      <main></main>
    </>
  );
};

export default Home;
