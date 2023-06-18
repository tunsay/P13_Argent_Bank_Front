import axios from 'axios'

//This fuinction check the right email and password. RETURN the token if success
export async function signIn(email, password) {
  try {
    const response = await axios.post(
      'http://localhost:3001/api/v1/user/login',
      {
        email,
        password,
      }
    )
    return response.data.body.token
  } catch (error) {
    console.log(error)
  }
}

//This function get user profile with parameters the token. RETURN user information
export async function getUserProfile(token) {
  console.log(token)
  try {
    const response = await axios.post(
      'http://localhost:3001/api/v1/user/profile',
      {
        token,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return response.data.body
  } catch (error) {
    console.log(error)
  }
}

//this function update user profile firstname and lastname return the updated user profile
export async function updateUserProfile(firstName, lastName, token) {
  try {
    const response = await axios.put(
      'http://localhost:3001/api/v1/user/profile',
      {
        firstName: firstName,
        lastName: lastName,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return response.data.body
  } catch (error) {
    console.log(error)
  }
}
