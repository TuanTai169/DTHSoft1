import React from 'react'
import { Form, Modal, Button } from "react-bootstrap"

function DetailCustomersModel(props) {

    const { show, handlerModalClose, customer } = props

    const { name ,email, phone, gender, address,cmnd, birthDate, note,isActive,
       updatedAt,updateBy,  } = customer

    return (
        <>
      <Modal show={show} onHide={handlerModalClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>View Customers</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                value={name || ""}
                disabled
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicBirth">
              <Form.Label>Birth Date</Form.Label>
              <Form.Control
                type="text"
                placeholder="Birth Date"
                name="birthDate"
                value={birthDate || ""}
                disabled
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
                disabled
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCmnd">
              <Form.Label>ID Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Id Number"
                name="cmnd"
                value={cmnd || ""}
                disabled
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Adress"
                name="adress"
                value={address || ""}
                disabled
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone Number"
                name="phone"
                value={phone || ""}
                disabled
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
                disabled
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicisActive">
              <Form.Label>Active</Form.Label>
              <Form.Control
                type="text"
                placeholder="0"
                name="isActive"
                value={isActive || ""}
                disabled
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicupdateBy">
              <Form.Label>Update By</Form.Label>
              <Form.Control
                type="text"
                placeholder="0"
                name="updateBy"
                value={updateBy || ""}
                disabled
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicupdatedAt">
              <Form.Label>Updated At</Form.Label>
              <Form.Control
                type="text"
                placeholder="0"
                name="updatedAt"
                value={updatedAt || ""}
                disabled
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicnote">
              <Form.Label>Note</Form.Label>
              <Form.Control
                type="text"
                placeholder="note"
                name="note"
                value={note || ""}
                disabled
                required
              />
            </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handlerModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
    )
}

export default DetailCustomersModel
