import { useParams } from "react-router-dom"
import { getContact } from "../../services/service"
import { useEffect, useState } from "react"
import SpinnerPage from "../../Spinner"
import ContactDatagrid from "./ContactDatagrid"

const ContactView = () =>{
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

    return (
        <div className="text-center mt-2">
            {
                state?<SpinnerPage/>:(
                    <>
                        <img className="rounded-2 mt-3" width={'400px'} height={'400px'}  src={contact.image}/>
                        <section className="m-5">
                            <ContactDatagrid contact={contact}  />
                        </section>
                    </>
                    
                )
            }
            
        </div>
    )
}
export default ContactView