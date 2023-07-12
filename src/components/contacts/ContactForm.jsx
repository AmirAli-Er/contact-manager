import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { addConatct, getCategories } from "../../services/service"
import { useEffect, useState } from "react"


const ContactForm = ({formHandler, contact, createContact, category, formFields, navigateAddress, color, editForm})=>{
    const navigate = useNavigate()
    console.log(contact)
    return (
        <>
            {
                formFields? null:
                <Form onSubmit={(e)=>formHandler(e)} style={{ color:color?color:null }}>
                    
                    <Container>
                        <Row>
                            <Col>
                            
                                <Form.Group className="mb-3" >
                                    <Form.Label>نام کامل</Form.Label>
                                    <Form.Control name="sub" value={contact.sub} onChange={(ev)=>createContact(ev)} type="text" placeholder="نام مورد نظر..."  />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" >
                                    <Form.Label> ایمیل</Form.Label>
                                    <Form.Control value={contact.email} onChange={(ev)=>createContact(ev)} name="email" type="email" placeholder="example@gmail.com"  />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" >
                                    <Form.Label>تلفن</Form.Label>
                                    <Form.Control value={contact.phoneNumber} onChange={(ev)=>createContact(ev)} name="phoneNumber" type="text" placeholder="09XXXXXXXX"  />
                                </Form.Group>
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={9} lg={9} >
                                <Form.Group className="mb-3" >
                                    <Form.Label>آدرس</Form.Label>
                                    <Form.Control value={contact.address} onChange={(ev)=>createContact(ev)} name="address" type="text" placeholder="آدرس مورد نظر..."  />
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} md={3} lg={3} >
                                <Form.Group className="mb-3" >
                                    <Form.Label>شغل</Form.Label>
                                    <Form.Control value={contact.job} onChange={(ev)=>createContact(ev)} name="job" type="text" placeholder="شغل مورد نظر..."  />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={7} lg={7} >
                                <Form.Group  >
                                    <Form.Label>تصویر مخاطب</Form.Label>
                                    {/* <Form.Control value={contact.image} onChange={(ev)=>createContact(ev)} name="image" type="file" /> */}
                                    <Form.Control value={contact.image} onChange={(ev)=>createContact(ev)} name="image" type="text"/>
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} md={5} lg={5} >
                                <Form.Group>
                                    <Form.Label>دسته بندی</Form.Label>
                                    <Form.Select value={contact.category} onChange={(ev)=>createContact(ev)} name="category" aria-label="Default select example">
                                    <option  value={''}></option>
                                        {
                                            category.map(item=><option key={item.id} value={item.id}>{item.title}</option>)
                                        }
                                    </Form.Select>
                                </Form.Group>
                                
                            </Col>
                        </Row>
                        </Container>
                        <div className="text-center mt-3">
                            {
                                editForm?
                                <Button  type="submit" variant="warning">
                                    ویرایش و ذخیره
                                </Button>:
                                <Button type="submit" variant="primary">
                                    +
                                </Button>
                            }
                        </div>
                        
            </Form>
            }
        </>
        
        )
}
export default ContactForm