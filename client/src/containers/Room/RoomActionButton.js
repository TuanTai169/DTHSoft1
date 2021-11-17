import React, { useState } from "react"
import { ButtonToolbar, Button } from "react-bootstrap"
import { changeStatusRoom } from "../../redux/actions/roomAction"
import { useDispatch } from "react-redux"
import BookingModal from "../Booking/BookingModal"
import CheckInModal from "../Booking/CheckInModal"
import ViewAllRoomModal from "./ViewAllRoomModal"
import { changeBookingToCheckIn } from "../../redux/actions/bookingAction"
import DialogChange from "../../components/Dialog/DialogChange"

const RoomActionButton = (props) => {
  const dispatch = useDispatch()

  const { room, handlerModalClose, getBookingId } = props
  const [isOpenBooking, setIsOpenBooking] = useState(false)
  const [isOpenCheckIn, setIsOpenCheckIn] = useState(false)
  const [isOpenViewRoom, setIsOpenViewRoom] = useState(false)
  const [conformDialog, setConformDialog] = useState({
    isOpenDialog: false,
    title: "",
    message: "",
  })

  const handlerCloseBookingModal = () => setIsOpenBooking(false)
  const handlerCloseCheckInModal = () => setIsOpenCheckIn(false)
  const handlerCloseViewRoomModal = () => setIsOpenViewRoom(false)

  const { status, _id } = room

  const changeStatus = (id, status) => {
    dispatch(changeStatusRoom(id, status))
    handlerModalClose()
  }
  const changeFromBookingToCheckIn = () => {
    dispatch(changeBookingToCheckIn(getBookingId))
    handlerModalClose()
  }
  return (
    <>
      <ButtonToolbar>
        {/* CHECK OUT */}
        {status !== "FIXING" && status !== "OCCUPIED" && status !== "BOOKING" && (
          <Button
            variant="secondary"
            style={{ marginLeft: "4px" }}
            onClick={() => changeStatus(_id, "fix")}
          >
            <i className="bx bxs-edit"></i>
            <span>&ensp;Fixing</span>
          </Button>
        )}
        {/* READY */}
        {(status === "CLEANING" || status === "FIXING") && (
          <Button
            variant="success"
            style={{ marginLeft: "4px" }}
            onClick={() => changeStatus(_id, "ready")}
          >
            <i className="bx bxs-check-circle"></i>
            <span>&ensp;Ready</span>
          </Button>
        )}
        {/* CHANGE ROOM */}
        {status === "OCCUPIED" && (
          <Button
            variant="warning"
            style={{ marginLeft: "4px", color: "#fff" }}
            onClick={() => setIsOpenViewRoom(true)}
          >
            <i className="bx bx-transfer-alt"></i>
            <span>&ensp; Change Room</span>
          </Button>
        )}
        {/* BOOKING */}
        {status === "READY" && (
          <Button
            variant="info"
            style={{ marginLeft: "4px", color: "#fff" }}
            onClick={() => setIsOpenBooking(true)}
          >
            <i className="bx bxs-user-x"></i>
            <span>&ensp;Booking</span>
          </Button>
        )}
        {status === "READY" && (
          <Button
            variant="primary"
            style={{ marginLeft: "4px" }}
            onClick={() => setIsOpenCheckIn(true)}
          >
            <i className="bx bxs-user-check"></i>
            <span>&ensp;Check in</span>
          </Button>
        )}

        {status === "BOOKING" && (
          <Button
            variant="primary"
            style={{ marginLeft: "4px" }}
            onClick={() =>
              setConformDialog({
                isOpenDialog: true,
                title: "Change to Check in",
                message: "Are you sure change to check in from  this booking?",
                onConform: () => changeFromBookingToCheckIn(),
              })
            }
          >
            <i className="bx bxs-user-check"></i>
            <span>&ensp;Check in</span>
          </Button>
        )}
        {/* CHECK OUT */}
        {status === "OCCUPIED" && (
          <Button variant="danger" style={{ marginLeft: "4px" }}>
            <i className="bx bxs-magic-wand"></i>
            <span>&ensp;Check out</span>
          </Button>
        )}
        <BookingModal
          show={isOpenBooking}
          handlerModalClose={handlerCloseBookingModal}
          currentRoom={room}
          handlerParentModalClose={handlerModalClose}
        />
        <CheckInModal
          show={isOpenCheckIn}
          handlerModalClose={handlerCloseCheckInModal}
          currentRoom={room}
          handlerParentModalClose={handlerModalClose}
        />
        <ViewAllRoomModal
          show={isOpenViewRoom}
          handlerModalClose={handlerCloseViewRoomModal}
          roomChoose={room}
          getBookingId={getBookingId}
          handlerParentModalClose={handlerModalClose}
        />
        <DialogChange
          conformDialog={conformDialog}
          setConformDialog={setConformDialog}
        />
      </ButtonToolbar>
    </>
  )
}

export default RoomActionButton
