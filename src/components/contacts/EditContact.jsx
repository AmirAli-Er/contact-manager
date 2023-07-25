import { useEffect, useState } from "react"
import { editConatct, getCategories, getContact } from "../../services/service"
import ContactForm from "./ContactForm"
import { useNavigate, useParams } from "react-router-dom"
import { ContactValidation } from "../../validation/ContactValidation"
import SpinnerPage from "../../Spinner"

const EditContact = ({ setStatus, setReload, loading }) =>{
    const { userId } = useParams()
    const nav = useNavigate()
    const [category, setCategory] = useState([])
    const [contact, setContact] = useState({
        sub:'',
        email:'',
        phoneNumber:'',
        address:'',
        job:'',
        image:'',
        category:''
    })
    useEffect(()=>{
        const fetch = async()=>{
            try{
                const {data} = await getCategories()
                setCategory(data)
            }catch(error){
                console.log(error.message)
            }
            
        }
        fetch()
    }, [])
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                setStatus(true)
                const {data} = await getContact(userId)
                setContact(data)
                setStatus(false)
            }catch(err){
                console.log(err.message)
            }
        }
        fetchData()
        
    },[])
    const editFormHandler = async( value ) => {
        try{
            const {status:STATUS} = await editConatct(userId, value)
            nav('/')
            
        }catch(err){
            console.log(err.message)
        }
        setReload((i)=>{console.log(i);return i+1})
    }
    return(
        <>
        {
            loading?
            <SpinnerPage/>:
            <ContactForm  editForm formHandler={editFormHandler} color={'whitesmoke'} contact={contact} category={category}/>
        }
            
        </>
    )
}
export default EditContact
