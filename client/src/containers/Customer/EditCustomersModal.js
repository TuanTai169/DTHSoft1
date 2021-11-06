import React, { useEffect, useState } from "react"
import { Form, Modal, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { updateCustomer } from "../../redux/actions/customersAction"

function EditCustomersModal(props) {

    const { show, handlerModalClose, customer } = props
    const dispatch = useDispatch()
  
    const [editCustomers, setEditCustomers] = useState(customer)

    //console.log('abc',editCustomers)
  
    useEffect(() => setEditCustomers(customer), [customer])
    const onChangeNewForm = (event) =>
      setEditCustomers({
        ...editCustomers,
        [event.target.name]: event.target.value,
      })
  
    const handleSubmit = (e) => {
      e.preventDefault()
      resetAddPostData()
      dispatch(updateCustomer(editCustomers))
      console.log('editcuss',editCustomers)
    }
  
    const resetAddPostData = () => {
      handlerModalClose()
      setEditCustomers(customer)
    }
    const { name,email, phone, gender, address,cmnd, birthDate, note} = editCustomers

    return (
        <div>
            <Modal show={show} onHide={resetAddPostData} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Customers</Modal.Title>
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

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Email"
                name="email"
                value={email || ""}
                onChange={onChangeNewForm}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone"
                name="phone"
                value={phone || ""}
                onChange={onChangeNewForm}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                name="address"
                value={address || ""}
                onChange={onChangeNewForm}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCmnd">
              <Form.Label>ID Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="ID Number"
                name="cmnd"
                value={cmnd || ""}
                onChange={onChangeNewForm}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                type="text"
                placeholder="Gender"
                name="gender"
                value={gender || ""}
                onChange={onChangeNewForm}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicBirthDate">
              <Form.Label>BirthDate</Form.Label>
              <Form.Control
                type="date"
                placeholder="BirthDate"
                name="birthDate"
                value={birthDate || ""}
                onChange={onChangeNewForm}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicNote">
              <Form.Label>Note</Form.Label>
              <Form.Control
                type="text"
                placeholder="Note"
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
        </div>
    )
}

export default EditCustomersModal
