import styles from './Login.module.scss'
/* icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
/* react */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
/* redux */
import { useDispatch } from 'react-redux'
/* services */
import { login } from '../../features/userSlice'
import { getUserProfile, signIn } from '../../services/api'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch() // useDispatch() is used to dispatch an action to the redux store
  const navigate = useNavigate() // useNavigate() is used to navigate to a different page

  /* handleSubmit() is a function that handles the form submission */
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // call the signIn function from the API that sends a POST request to sign in the user
      const response = await signIn(email, password)
      // if the API call is successful, call getUserProfile() to get the TOKEN for access the user's profile
      console.log(response)
      if (response) {
        // Get user profile thanks to the token of getuserprofile
        const userProfile = await getUserProfile(response)
        console.log(userProfile)
        // if the API call is successful, dispatch the login action to the redux store
        if (userProfile) {
          dispatch(
            // updates the user state in the redux store using the login action
            login({
              token: response,
              firstName: userProfile.firstName,
              lastName: userProfile.lastName,
            })
          )
        }
        // if the API success navigate to the account page
        navigate('/account')
        // if the login is not successful display an alert
      } else {
        alert('Invalid login or password')
      }
    } catch ({ response }) {
      console.log(response)
    }
  }

  return (
    <main className={`${styles.main} ${styles.bg_dark}`}>
      <section className={styles.sign_in_content}>
        <FontAwesomeIcon icon={faUserCircle} className={styles.sign_in_icon} />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.input_wrapper}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.input_wrapper}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={styles.input_remember}>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className={styles.sign_in_button}>
            Sign In
          </button>
        </form>
      </section>
    </main>
  )
}
