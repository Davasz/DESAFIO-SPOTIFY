import axios from 'axios'
import dotenv from 'dotenv';

dotenv.config()

const getToken = async () => {
    const body = new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: '7f8086af9a1d445e8f267a629e4753f5',
        client_secret: '84fe23d2d4b240a7860e768e607a060b'
    });
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }

    const responseToken = await axios.post('https://accounts.spotify.com/api/token', body, { headers })
        .then(response => response.data.access_token)


    localStorage.setItem('token', responseToken)
    return responseToken
}

const isTokenValid = async () => {
    const token = localStorage.getItem('token')

    try {
        await axios.get('https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return true
    } catch (error) {
        return false
    }

}

const verifyToken = async () => {
    const token = localStorage.getItem('token')
    if (!token) {
        return await getToken()
    } else if(await isTokenValid()) {
        localStorage.removeItem('token')
        return await getToken()
    }
     
}

export default verifyToken