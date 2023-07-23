import { Button, Col, Row, Container } from "react-bootstrap"
import ContactCard from "./ContactCard"
import SpinnerPage from "../../Spinner"
import { Link, Outlet } from "react-router-dom"
import { useContext } from "react"
import ContactContext from "../../context/ContactContext"

const ContactSection = ({setLgShow})=>{
    const {filteredUser, getContact, loading} = useContext(ContactContext)
    return(
        <>
            <div className="d-grid ">
                
                <Button onClick={()=>setLgShow(true)}  className="mx-5 mt-3" variant="primary" size="md">
                    +
                </Button>
                
                {
                    loading ? <SpinnerPage/> :(
                        <section className="mx-5 mt-3">
                            <Container fluid='1rem'>
                                <Row xs='1' sm='2' md='3' lg='4'  >
                                {
                                    filteredUser.length!=0  ?
                                    filteredUser.map(item=><Col className='mt-5'><ContactCard  id={item.id} sub={item.sub} phoneNumber={item.phoneNumber} email={item.email} address={item.address} image={item.image} /></Col>):
                                    getContact.map(item=><Col className='mt-5'><ContactCard   id={item.id} sub={item.sub} phoneNumber={item.phoneNumber} email={item.email} address={item.address} image={item.image} /></Col>)
                                }
                                </Row>
                            </Container>
                        </section>
                    )
                }
            
            </div>
        </>
    )
}
export default ContactSection