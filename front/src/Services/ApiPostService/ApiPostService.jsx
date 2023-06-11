import axios from "axios"

async function ApiPostService(url, item) {
  try {
    let response = await axios.post(url + '/save', item)

  } catch (error) {
    console.log(error)
  }
}

export default ApiPostService