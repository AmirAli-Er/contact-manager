import { useContext, useEffect, useMemo, useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useFormik } from 'formik'
import { ContactValidation } from "../../validation/ContactValidation"
import { addConatct } from "../../services/service"
import ContactContext from "../../context/ContactContext"


const ContactForm = ({formHandler, contact, category, formFields, navigateAddress, color, editForm})=>{
    const {loading, setReload} = useContext(ContactContext)
   
    const formik = useFormik({
        initialValues:{
            sub:`${contact.sub}`,
            email:`${contact.email}`,
            phoneNumber:`${contact.phoneNumber}`,
            job:`${contact.job}`,
            category:`${contact.category}`,
            address:`${contact.address}`,
            image:`${contact.image}`,
        },
        validationSchema:ContactValidation,
        onSubmit: (value)=>{
            formHandler(value)
        }
    })
    console.log(contact)
    return (
        <>
            {
                formFields? null:
                <Form 
                noValidate 
                onSubmit={formik.handleSubmit} 
                style={{ color:color?color:null }}>
                    
                    <Container>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" >
                                    <Form.Label>نام کامل</Form.Label>
                                    <Form.Control onBlur={formik.handleBlur} required id="sub" name="sub" value={formik.values.sub} onChange={formik.handleChange} type="text" placeholder="نام مورد نظر..."  />
                                    
                                    {
                                        formik.touched.sub && formik.errors.sub
                                    }
                                    
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" >
                                    <Form.Label> ایمیل</Form.Label>
                                    <Form.Control onBlur={formik.handleBlur} id="email"  required value={formik.values.email} onChange={formik.handleChange} name="email" type="email" placeholder="example@gmail.com"  />
                                    
                                    {
                                        formik.touched.email && formik.errors.email
                                    }
                                    
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" >
                                    <Form.Label>تلفن</Form.Label>
                                    <Form.Control onBlur={formik.handleBlur} id="phoneNumber"  required value={formik.values.phoneNumber} onChange={formik.handleChange} name="phoneNumber" type="text" placeholder="09XXXXXXXXX"  />
                                    
                                    {
                                        formik.touched.phoneNumber && formik.errors.phoneNumber
                                    }
                                    
                                </Form.Group>
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={9} lg={9} >
                                <Form.Group className="mb-3" >
                                    <Form.Label>آدرس</Form.Label>
                                    <Form.Control onBlur={formik.handleBlur} id="address"  required value={formik.values.address} onChange={formik.handleChange} name="address" type="text" placeholder="آدرس مورد نظر..."  />
                                    
                                    {
                                            formik.touched.address && formik.errors.address
                                    }
                                    
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} md={3} lg={3} >
                                <Form.Group className="mb-3" >
                                    <Form.Label>شغل</Form.Label>
                                    <Form.Control onBlur={formik.handleBlur} id="job"  required value={formik.values.job} onChange={formik.handleChange} name="job" type="text" placeholder="شغل مورد نظر..."  />
                                    
                                    {
                                        formik.touched.job && formik.errors.job
                                    }
                                    
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={7} lg={7} >
                                <Form.Group  >
                                    <Form.Label>تصویر مخاطب</Form.Label>
                                    {/* <Form.Control value={contact.image} onChange={(ev)=>createContact(ev)} name="image" type="file" /> */}
                                    <Form.Control onBlur={formik.handleBlur} id="image"  required value={formik.values.image} onChange={formik.handleChange} name="image" type='url'/>
                                    
                                    {
                                        formik.touched.image && formik.errors.image
                                    }
                                    
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} md={5} lg={5} >
                                <Form.Group>
                                    <Form.Label>دسته بندی</Form.Label>
                                    <Form.Select onBlur={formik.handleBlur} id="category"  required value={formik.values.category} onChange={formik.handleChange} name="category" >
                                    <option  value={''}></option>
                                        {
                                            category.map(item=><option key={item.id} value={item.id}>{item.title}</option>)
                                        }
                                    </Form.Select>
                                    
                                    {
                                        formik.touched.category && formik.errors.category
                                    }
                                    
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