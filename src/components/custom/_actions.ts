import { httpClient } from '@/lib/axios/http-client'

const getAllUsers = async() => {
    return await httpClient.get('/users')
}

export default getAllUsers
