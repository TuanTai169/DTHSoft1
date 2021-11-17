import React, { useState } from "react";
import { Form, Modal, FloatingLabel, Button, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/actions/userAction";

const AddUserModal = (props) => {
  const { show, handlerModalClose } = props;
  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    roles: "",
  });

  const onChangeNewForm = (event) =>
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    resetAddPostData();
    dispatch(addUser(newUser));
  };

  const resetAddPostData = () => {
    setNewUser({
      name: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      image: "",
      roles: "",
    });
    handlerModalClose();
  };

  const { name, email, password, phone, address, roles, image } = newUser;

  return (
    <>
      <Modal show={show} onHide={resetAddPostData} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                value={name || ""}
                onChange={onChangeNewForm}
                required
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingEmail"
              label="Email"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="email"
                name="email"
                value={email || ""}
                onChange={onChangeNewForm}
                required
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Password"
                name="password"
                value={password || ""}
                onChange={onChangeNewForm}
                required
              />
            </FloatingLabel>

            <Row>
              <Col>
                <FloatingLabel
                  controlId="floatingPhone"
                  label="Phone"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    name="phone"
                    value={phone || ""}
                    onChange={onChangeNewForm}
                    required
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col>
                <FloatingLabel
                  controlId="floatingRoles"
                  label="Roles"
                  className="mb-3"
                >
                  <Form.Select
                    name="roles"
                    value={roles || ""}
                    onChange={onChangeNewForm}
                    required
                  >
                    <option>--</option>
                    <option value="ADMIN">ADMIN</option>
                    <option value="MANAGER">MANAGER</option>
                    <option value="EMPLOYEE">EMPLOYEE</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
            </Row>

            <FloatingLabel
              controlId="floatingImage"
              label="Image"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                name="image"
                placeholder="Image"
                value={image || ""}
                onChange={onChangeNewForm}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingAddress"
              label="Address"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                name="address"
                placeholder="Address"
                value={address || ""}
                onChange={onChangeNewForm}
                required
              />
            </FloatingLabel>
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
  );
};

export default AddUserModal;
