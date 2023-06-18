import styles from './Account.module.scss'
/* data */
import { accountContent } from '../../data/accountData'
/* components */
import { AccountCard } from '../../components/AccountCard/AccountCard'
/* react */
import { useState } from 'react'
/* redux */
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, updateUser } from '../../features/userSlice'
/* services */
import { updateUserProfile } from '../../services/api'

export function Account() {
  const user = useSelector(selectUser) // useSelector() is used to access the user object from the redux store

  const dispatch = useDispatch() // useDispatch() is used to dispatch an action to the redux store

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [showEditName, setShowEditName] = useState(false)

  /* handles the form submission to update the user's first and last name */
  const handleSubmit = async (e) => {
    e.preventDefault()
    // call the updateUserProfile() function from the API that sends a PUT request to update the user's first and last name
    const response = await updateUserProfile(firstName, lastName, user.token)
    // if the API call is successful, dispatch the updateUser action to the redux store
    if (response) {
      // updates the user state in the redux store using the updateUser action
      dispatch(updateUser({ firstName, lastName }))
      // close the modal after saving
      setShowEditName(!showEditName)
      // if the API call is not successful, display an alert
    } else {
      alert('Veuillez remplir un champ valide')
    }
  }

  return (
    <main className={`${styles.main} ${styles.bg_dark}`}>
      {!showEditName ? (
        <div className={styles.header}>
          <h1>
            Welcome back
            <br />
            {user.firstName} {user.lastName}
          </h1>

          <button
            className={styles.edit_button}
            onClick={() => setShowEditName(!showEditName)}
          >
            Edit Name
          </button>
        </div>
      ) : (
        <div className={styles.header}>
          <h1>Welcome back</h1>
          <form className={styles.edit__modal} onSubmit={handleSubmit}>
            <div className={styles.edit__modal__content}>
              <input
                type="text"
                placeholder={user.firstName}
                className={styles.edit__modal__content__input}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder={user.lastName}
                className={styles.edit__modal__content__input}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className={styles.edit__modal__buttons}>
              <button
                type="submit"
                className={styles.edit__modal__buttons__btn}
              >
                Save
              </button>
              <button
                className={styles.edit__modal__buttons__btn}
                onClick={() => setShowEditName(!showEditName)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <h2 className={styles.sr_only}>Accounts</h2>

      {accountContent.map((account, index) => (
        <AccountCard key={index} {...account} />
      ))}
    </main>
  )
}
