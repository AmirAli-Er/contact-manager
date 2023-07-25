import { useEffect, useMemo, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ContactForm from './ContactForm';
import { useNavigate } from 'react-router-dom';
import { addConatct, getCategories } from '../../services/service';
import { ContactValidation } from '../../validation/ContactValidation';
import _ from 'lodash'
const AddContact = ({lgShow, setLgShow, setReload}) =>{
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
    
    const SubmitForm = async(value)=>{
        
        try{
            
            const {status:STATUS, data:DATA} = await addConatct(value)
            
            if (STATUS===201){
                setLgShow(false)
                
            }
        }catch(err){
            console.log(err.message)
        }
        
        setReload((i)=>{return i+1})
        setValidated(true)
    }
    const [validated, setValidated] = useState(false)
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
                <ContactForm contact={contact} formHandler={SubmitForm} category={category} />
            </Modal.Body>
        </Modal>
        </>
)}
export default AddContact