import { useEffect, useMemo, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ContactForm from './ContactForm';
import { useNavigate } from 'react-router-dom';
import { addConatct, getCategories } from '../../services/service';
import { ContactValidation } from '../../validation/ContactValidation';

const AddContact = ({lgShow, setLgShow, setReload}) =>{
    const [category, setCategory] = useState([])
    const [error, setError] = useState([])
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
    function createContact(e){
        setContact({
            ...contact,[e.target.name]:e.target.value
        })
        
    }
    const SubmitForm = async(e)=>{
        e.preventDefault()
        try{
            const userSchema = await ContactValidation.validate(contact, {abortEarly:false})
            const {status:STATUS, data:DATA} = await addConatct(contact)
            
            if (STATUS===201){
                setLgShow(false)
                setContact({
                    sub:'',
                    email:'',
                    phoneNumber:'',
                    address:'',
                    job:'',
                    image:'',
                    category:''
                })
            }
        }catch(err){
            setError(err.inner)
        }
        setReload((i)=>{return i+1})

    }
    
    return (
        <>
        <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
                اضافه کردن مخاطب
            </Modal.Title>
            </Modal.Header>
            <Modal.Body className='bg-light'>
                <ContactForm error={error} contact={contact} formHandler={SubmitForm} createContact={createContact} category={category} />
            </Modal.Body>
        </Modal>
        </>
)}
export default AddContact