import axios from "axios";

const URL = 'http://localhost:9595/'

export const getContacts = ()=>{
    const url_contact = `${URL}contacts`
    return axios.get(url_contact)
}

export const getCategories = ()=>{
    const url_contact = `${URL}category`
    return axios.get(url_contact)
}
export const getCategory = (categoryId)=>{
    const url_contact = `${URL}category/${categoryId}`
    return axios.get(url_contact)
}

export const getContact = (userId)=>{
    const url_contact = `${URL}contacts/${userId}`
    return axios.get(url_contact)
}

export const editConatct = (contactId, contact)=>{
    const url_contact = `${URL}contacts/${contactId}/`
    const data = axios.put(url_contact, contact)
    return data
}

export const deleteConatct = (contactId)=>{
    const url_contact = `${URL}contacts/${contactId}`
    const data = axios.delete(url_contact)
}

export const addConatct = (contact)=>{
    const url_contact = `${URL}contacts`
    return axios.post(url_contact, contact)
}

