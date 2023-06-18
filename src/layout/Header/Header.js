import styles from './Header.module.scss'
import logo from '../../assets/images/argentBankLogo.png'
import { NavLink } from 'react-router-dom'
/* icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
/* redux */
import { useSelector, useDispatch } from 'react-redux'
import { logout, selectUser } from '../../features/userSlice'

export function Header() {
  const user = useSelector(selectUser)
  // useSelector() is used to access the user object from the redux store
  // JSON.parse() is used to convert the stringified user object back to an object so that we can access the user's first name
  const dispatch = useDispatch() // useDispatch() is used to dispatch an action to the redux store

  /**
   * userLogout() is a function that dispatches the logout action to the redux store when the user clicks the Sign Out link
   */
  const userLogout = () => {
    dispatch(logout())
  }

  return (
    <header className={styles.header}>
      <nav className={styles.main_nav}>
        <NavLink className={styles.main_nav_logo} to="/">
          <img
            className={styles.main_nav_logo_image}
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className={styles.sr_only}>Argent Bank</h1>
        </NavLink>
        <div>
          {/* If the user is logged in, display the user's first name and a Sign Out link. If the user is not logged in, display a Sign In link */}
          {user ? (
            <div className={styles.main_nav_wrapper}>
              <NavLink to="/account" className={styles.main_nav_item}>
                <FontAwesomeIcon icon={faCircleUser} />{' '}
                {user.firstName.charAt(0).toUpperCase() +
                  user.firstName.slice(1)}
              </NavLink>
              <NavLink
                to="/"
                className={styles.main_nav_item}
                onClick={userLogout}
              >
                <FontAwesomeIcon icon={faRightFromBracket} /> Sign Out
              </NavLink>
            </div>
          ) : (
            <NavLink className={styles.main_nav_item} to="/login">
              <FontAwesomeIcon icon={faCircleUser} />
              Sign In
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  )
}
