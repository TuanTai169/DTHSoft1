import React, { useState, useEffect } from "react"
import { Modal, Button, Form, Row, Col, FloatingLabel } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import moment from "moment"
import DatePicker from "react-datepicker"

import { convertStringToDate } from "../../utils/convertDateTime"
import CustomerForm from "../FormBooking/CustomerForm"
import RoomForm from "../FormBooking/RoomForm"
import ServiceForm from "./../FormBooking/ServiceForm"
import { checkOut } from "../../redux/actions/receiptAction"
import PayPalModal from "./PayPalModal"
import FullLoading from "./../../components/Common/FullLoading/FullLoading"
import { updateBooking } from "./../../redux/actions/bookingAction"
import { numberValidation } from "../../utils/validation"
import { totalRoomCharge } from "./../../utils/calculateRoomPrice"

const CheckOutModal = (props) => {
  const { show, handlerModalClose, handlerParentModalClose, booking } = props

  const isLoading = useSelector(
    (state) => state.receiptReducer.isReceiptLoading
  )

  const {
    _id,
    code,
    customer,
    rooms,
    checkInDate,
    deposit,
    discount,
    services,
    roomCharge,
    serviceCharge,
    VAT,
    totalPrice,
    status,
  } = booking[0]

  const [newCheckOut, setNewCheckOut] = useState(new Date().setHours(12, 0))

  const [editBooking, setEditBooking] = useState({
    _id: _id,
    rooms: rooms.map((room) => room._id),
    customer: customer._id,
    checkInDate: moment(checkInDate).format("YYYY-MM-DD HH:mm"),
    checkOutDate: moment(newCheckOut).format("YYYY-MM-DD HH:mm"),
    services: services,
    deposit: deposit,
    discount: discount,
    status: status,
  })

  const [sumPrice, setSumPrice] = useState(totalPrice)
  const [roomPrice, setRoomPrice] = useState(roomCharge)
  const [servicePrice, setServicePrice] = useState(serviceCharge)

  const dispatch = useDispatch()
  const [receipt, setReceipt] = useState({
    booking: _id,
    paidOut: "0",
    refund: 0,
    modeOfPayment: "CASH",
  })
  const [isPaypal, setIsPaypal] = useState(false)

  useEffect(() => {
    const { checkInDate, checkOutDate, deposit, discount } = editBooking

    const calculatorPrice = () => {
      const RoomCharge = totalRoomCharge(rooms, checkInDate, checkOutDate)

      setRoomPrice(Math.round(RoomCharge))
      const sumServicesPrice = services
        .map((item) => item.price)
        .reduce((prev, curr) => prev + curr, 0)

      setServicePrice(sumServicesPrice)
      const VAT = 10
      return (
        (RoomCharge + sumServicesPrice) * (1 + VAT / 100 - discount / 100) -
        deposit
      ).toFixed()
    }

    setSumPrice(calculatorPrice)
  }, [editBooking, rooms, services])

  const checkInDateConvert = convertStringToDate(checkInDate)

  const onChangePaidOut = (e) => {
    setReceipt({
      ...receipt,
      paidOut: e.target.value,
      refund: e.target.value > sumPrice ? e.target.value - sumPrice : 0,
    })
  }

  const onSubmitCheckOut = () => {
    if (numberValidation(receipt.paidOut)) {
      dispatch(updateBooking(editBooking))
      const newReceipt = {
        ...receipt,
        paidOut: parseInt(receipt.paidOut),
      }
      setTimeout(() => dispatch(checkOut(newReceipt)), 3000)
      resetData()
    }
  }
  const resetData = () => {
    setReceipt({
      booking: _id,
      paidOut: "0",
      refund: 0,
      modeOfPayment: "CASH",
    })
    handlerModalClose()
    handlerParentModalClose()
  }

  const { paidOut, refund, modeOfPayment } = receipt

  return (
    <>
      {isLoading ? (
        <FullLoading />
      ) : (
        <Modal
          show={show}
          onHide={handlerModalClose}
          animation={false}
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>{code}</Modal.Title>
            <div style={{ marginLeft: "30%", fontSize: "20px" }}>
              Total Price (USD):{" "}
              <strong style={{ color: "red", fontSize: "20px" }}>
                {sumPrice > 0 ? sumPrice : 0}
              </strong>
            </div>
          </Modal.Header>
          <Form>
            <Modal.Body>
              <Row className="mb-3" style={{ borderBottom: "1px solid #bbb" }}>
                <Col>
                  <FloatingLabel
                    controlId="floatingCheckIn"
                    label="Check in "
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      value={checkInDateConvert}
                      disabled
                    />
                  </FloatingLabel>
                </Col>
                <Form.Group as={Col} controlId="formGridCheckOut">
                  <Form.Label>Check out</Form.Label>
                  <DatePicker
                    selected={newCheckOut}
                    onChange={(date) => {
                      setNewCheckOut(date)
                      setEditBooking({
                        ...editBooking,
                        checkOutDate: moment(date).format("YYYY-MM-DD HH:mm"),
                      })
                    }}
                    selectsEnd
                    startDate={new Date(checkInDate)}
                    endDate={newCheckOut}
                    minDate={new Date(checkInDate)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    dateFormat="dd/MM/yyyy HH:mm"
                  />
                </Form.Group>

                <Col>
                  <FloatingLabel
                    controlId="floatingDiscount"
                    label="Discount (%)"
                    className="mb-3"
                  >
                    <Form.Control type="number" value={discount} disabled />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel
                    controlId="floatingDeposit"
                    label="Deposit (USD)"
                    className="mb-3"
                  >
                    <Form.Control type="text" value={deposit} disabled />
                  </FloatingLabel>
                </Col>
              </Row>
              <Row style={{ borderBottom: "1px solid #bbb" }}>
                <Col>
                  <FloatingLabel
                    controlId="floatingPaidOut"
                    label="Paid (USD) "
                    className="mb-3"
                  >
                    <Form.Control
                      type="number"
                      value={paidOut}
                      onChange={onChangePaidOut}
                    />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel
                    controlId="floatingRefund"
                    label="Refund (USD) "
                    className="mb-3"
                  >
                    <Form.Control type="text" value={refund} readOnly />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel
                    controlId="floatingVAT"
                    label="VAT(%) "
                    className="mb-3"
                  >
                    <Form.Control type="text" value={VAT} readOnly />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel
                    controlId="floatingModeOfPayment"
                    label="Mode Of Payment"
                    className="mb-3"
                  >
                    <Form.Select
                      name="modeOfPayment"
                      value={modeOfPayment}
                      onChange={(e) =>
                        setReceipt({
                          ...receipt,
                          modeOfPayment: e.target.value,
                        })
                      }
                      required
                    >
                      <option>--</option>
                      <option value="CASH">CASH</option>
                      <option value="PAYPAL">PAYPAL</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>
              </Row>
              <Row className="mb-3" style={{ borderBottom: "1px solid #bbb" }}>
                <Form.Group controlId="formGridCustomer">
                  <h5>Customer</h5>
                  <CustomerForm customer={customer} />
                </Form.Group>
              </Row>
              <Row className="mb-3" style={{ borderBottom: "1px solid #bbb" }}>
                <Form.Group controlId="formGridRoom">
                  <div className="form-label">
                    <h5>Room</h5>
                    <p>
                      Price (USD):{" "}
                      <strong style={{ color: "red" }}>{roomPrice}</strong>
                    </p>
                  </div>
                  <RoomForm rooms={rooms} />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridService">
                  <div className="form-label">
                    <h5>Service</h5>
                    <p>
                      Price (USD):{" "}
                      <strong style={{ color: "red" }}>{servicePrice}</strong>
                    </p>
                  </div>
                  <ServiceForm services={services} />
                </Form.Group>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              {modeOfPayment === "PAYPAL" && (
                <Button onClick={() => setIsPaypal(true)}>PayPal</Button>
              )}
              <PayPalModal
                open={isPaypal}
                closeModal={() => setIsPaypal(false)}
                receipt={receipt}
                closeAllModal={resetData}
              />
              <Button variant="danger" onClick={onSubmitCheckOut}>
                Save
              </Button>
              <Button variant="secondary" onClick={handlerModalClose}>
                Close
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      )}
    </>
  )
}

export default CheckOutModal
