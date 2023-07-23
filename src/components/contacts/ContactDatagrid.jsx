import { useEffect, useState } from "react"
import { Button, ListGroup } from "react-bootstrap"
import { getCategory } from "../../services/service"
import { Link } from "react-router-dom"

const ContactDatagrid = ({ contact }) =>{
    const [category, setCat] = useState('')
    useEffect(()=>{
        const getCat = async()=>{
            try{
                const {data:DATA} = await getCategory(contact.category) 
                setCat(DATA)
            }catch(err){
                console.log(err.message)
            }
        }
        getCat()
    })
    
    return(
        <>
            <ListGroup >
                <ListGroup.Item variant="dark"> نام: {contact.sub}</ListGroup.Item>
                <ListGroup.Item variant="dark"> ایمیل: {contact.email}</ListGroup.Item>
                <ListGroup.Item variant="dark"> تلفن: {contact.phoneNumber}</ListGroup.Item>
                <ListGroup.Item variant="dark"> آدرس: {contact.address}</ListGroup.Item>
                <ListGroup.Item variant="dark"> کار: {contact.job}</ListGroup.Item>
                <ListGroup.Item variant="dark"> دسته بندی: {category.title}</ListGroup.Item>
            </ListGroup>
            <Link to={'/'} className='mt-3 d-grid text-decoration-none'>
                <Button variant="secondary">بازگشت به صفحه اصلی</Button>
            </Link>
            
        </>
    )
}

export default ContactDatagrid