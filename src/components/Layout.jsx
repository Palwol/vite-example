import {PlusIcon, XIcon} from '@/assets';
import {navigationList} from '@/static/navigationList';
import styles from '@/styles/Layout.module.css';
import {isOdd} from '@/utils/isOdd';
import {Link} from 'react-router-dom';

const Layout = ({children}) => {
  return (
    <>
      <header>
        <div className={styles.banner}>{`DJMax\nStore`}</div>
        <nav>
          <ul>
            {navigationList.map((nav, index) => (
              <Link key={nav.name} to={nav.url}>
                <li>
                  {isOdd(index) ? (
                    <PlusIcon width={25} height={25} />
                  ) : (
                    <XIcon width={25} height={25} />
                  )}
                  {nav.name}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
