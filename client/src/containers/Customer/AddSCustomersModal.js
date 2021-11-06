import React, { useState } from "react"
import { Form, Modal, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { addCustomers } from "../../redux/actions/customersAction"



const AddCustomersModal = (props) => {
    const { show, handlerModalClose } = props
    const dispatch = useDispatch()
  
    const [newCustomers, setNewCustomers] = useState({
      name: "",
      email: '',
      phone: '',
      address: '',
      cmnd: '',
      gender: '',
      birthDate: '',
      note: ''
    })

    const onChangeNewForm = (event) =>
    setNewCustomers({ ...newCustomers, [event.target.name]: event.target.value })

    const handleSubmit = (e) => {
        e.preventDefault()
        resetAddPostData()
        dispatch(addCustomers(newCustomers))
      }

      const resetAddPostData = () => {
        setNewCustomers({ name: "",
        email: '',
        phone: '',
        address: '',
        cmnd: '',
        gender: '',
        birthDate: '',
        note: '' })
        handlerModalClose()
      }

      const { name,email,phone,address,cmnd, gender, birthDate,note} = newCustomers

      return (
        <>
          <Modal show={show} onHide={resetAddPostData} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Add Customers</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
              <Modal.Body>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name || ""}
                    onChange={onChangeNewForm}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicemail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="email"
                    name="email"
                    value={email || ""}
                    onChange={onChangeNewForm}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicphone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="phone"
                    name="phone"
                    value={phone || ""}
                    onChange={onChangeNewForm}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicaddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="address"
                    name="address"
                    value={address || ""}
                    onChange={onChangeNewForm}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasiccmnd">
                  <Form.Label>ID Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="cmnd"
                    name="cmnd"
                    value={cmnd || ""}
                    onChange={onChangeNewForm}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicgender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select name='gender' value={gender || ''} onChange={onChangeNewForm} required>
                      <option>Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>                      
                    </Form.Select>
                </Form.Group>
                    
                <Form.Group className="mb-3" controlId="formBasicbirthDate">
                  <Form.Label>Birth Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="birthDate"
                    name="birthDate"
                    value={birthDate || ""}
                    onChange={onChangeNewForm}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicnote">
                  <Form.Label>Birth Date</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="note"
                    name="note"
                    value={note || ""}
                    onChange={onChangeNewForm}
                    required
                  />
                </Form.Group>
               
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" type="submit">
                  Save
                </Button>
                <Button variant="danger" onClick={resetAddPostData}>
                  Close
                </Button>
              </Modal.Footer>
            </Form>
          </Modal>
        </>
      )
    }
    
    export default AddCustomersModal
