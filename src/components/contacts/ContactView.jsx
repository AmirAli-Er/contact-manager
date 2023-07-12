import { useParams } from "react-router-dom"
import { getContact } from "../../services/service"
import { useEffect, useState } from "react"
import SpinnerPage from "../../Spinner"
import ContactDatagrid from "./ContactDatagrid"

const ContactView = ({loading, setStatus}) =>{
    const { userId } = useParams()
    const [state, setState]= useState(false)
    const [contact, setContact] = useState({})
    useEffect(()=>{
        const get_contact = async()=>{ 
                try{
                    setState(true)
                    const {data} = await getContact(userId)
                    setContact(data)
                    setState(false)
                }catch(er){
                    console.log(er.message)
                }
            }
        get_contact()
        
    },[])
    console.log(contact.image)
    
    
    return (
        <div className="text-center mt-2">
            {
                state?<SpinnerPage/>:(
                    <>
                        <img className="rounded-2" width={'50%'} src={contact.image}/>
                        <section className="m-5">
                            <ContactDatagrid contact={contact} setState={setState} />
                        </section>
                    </>
                    
                )
            }
            
        </div>
    )
}
export default ContactView