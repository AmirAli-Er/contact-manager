import { useEffect, useState } from "react"
import { editConatct, getCategories, getContact } from "../../services/service"
import ContactForm from "./ContactForm"
import { useNavigate, useParams } from "react-router-dom"

const EditContact = ({ loading, setStatus, setReload }) =>{
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
    const editFormHandler = async( e ) => {
        e.preventDefault()
        try{
            console.log(`our contact=> ${contact}`)
            const {status:STATUS} = await editConatct(userId, contact)
            nav('/')
            
        }catch(err){
            console.log(err.message)
        }
        setReload((i)=>{console.log(i);return i+1})
    }
    const createContact = (e) => {
        setContact({
            ...contact,[e.target.name]:e.target.value
        })
    }
    return(
        <>
            <ContactForm createContact={createContact} editForm formHandler={editFormHandler} navigateAddress={'/'} color={'whitesmoke'} contact={contact} category={category}/>
        </>
    )
}
export default EditContact
// const formFields = [
    //     {
    //         label:'',
    //         name,
    //         value,
    //         changed,
    //         type,
    //         placeholder,
    //     }
    // ]