import axios from "axios";


async function ApiDeleteService(url, id) {
    try {
        await axios.delete(url + `/delete/${id}`)
    } catch (error) {
        console.log(error)
    }
}

export default ApiDeleteService;