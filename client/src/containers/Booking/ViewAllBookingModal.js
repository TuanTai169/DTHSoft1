import React, { useEffect, useState, useMemo } from "react"
import { Modal, Button, Table, Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"

import { getAllRoom } from "./../../redux/actions/roomAction"
import BookingItem from "./BookingItem"

import TableHeader from "../../components/Common/table/TableHeader"
import PaginationComponent from "../../components/Common/Pagination/PaginationComponent"
import Search from "./../../components/Common/Search/Search"
import FullLoading from "../../components/Common/FullLoading/FullLoading"

const ViewAllBookingModal = (props) => {
  const { show, handlerModalClose } = props
  const [totalItems, setTotalItems] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [limit, setLimit] = useState(6)
  const [sorting, setSorting] = useState({ field: "", order: "" })
  const [search, setSearch] = useState("")
  const dispatch = useDispatch()

  // GET ALL BOOKING
  const bookings = useSelector((state) => state.bookingReducer.bookings)
  const isBookingLoading = useSelector(
    (state) => state.bookingReducer.isBookingLoading
  )
  const receipts = useSelector((state) => state.receiptReducer.receipts)

  useEffect(() => dispatch(getAllRoom()), [dispatch, bookings, receipts])

  //Header table
  const headers = [
    { name: "No#", field: "id", sortable: false },
    { name: "ID", field: "code", sortable: true },
    { name: "Customer", field: "customer", sortable: false },
    { name: "Rooms", field: "rooms", sortable: true },
    { name: "Check in", field: "check-in", sortable: false },
    { name: "Check out", field: "check-out", sortable: false },
    { name: "Status", field: "status", sortable: false },
    { name: "Action", field: "action", sortable: false },
  ]

  const currentData = useMemo(() => {
    let computedBookings = [...bookings].sort((a, b) =>
      a.createdAt < b.createdAt ? 1 : -1
    )

    if (search) {
      computedBookings = computedBookings.filter((booking) =>
        booking.customer.name.toLowerCase().includes(search.toLowerCase())
      )
    }

    setTotalItems(computedBookings.length)

    //Sorting comments
    if (sorting.field) {
      computedBookings.sort((a, b) => {
        if (a[sorting.field] < b[sorting.field]) {
          return sorting.order === "ascending" ? -1 : 1
        }
        if (a[sorting.field] > b[sorting.field]) {
          return sorting.order === "ascending" ? 1 : -1
        }
        return 0
      })
    }
    //Current Page slice
    const indexOfLastNews = currentPage * limit
    const indexOfFirstNews = indexOfLastNews - limit
    return computedBookings.slice(indexOfFirstNews, indexOfLastNews)
  }, [bookings, currentPage, limit, sorting, search])

  return (
    <>
      {isBookingLoading ? (
        <FullLoading />
      ) : (
        <Modal
          show={show}
          onHide={handlerModalClose}
          animation={false}
          dialogClassName="modal-80w"
        >
          <Modal.Header closeButton>
            <Modal.Title>LIST BOOKING</Modal.Title>
            <div
              className="page__search"
              style={{ marginLeft: "60%", marginTop: "12px" }}
            >
              <Search
                onSearch={(value) => {
                  setSearch(value)
                  setCurrentPage(1)
                }}
              />
            </div>
          </Modal.Header>
          <Modal.Body>
            <Table striped>
              <TableHeader
                headers={headers}
                onSorting={(field, order) => setSorting({ field, order })}
              />
              <tbody>
                {Array.isArray(currentData) && currentData.length ? (
                  currentData.map((booking, index) => (
                    <tr key={booking._id}>
                      <td>{index + 1 + (currentPage - 1) * limit}</td>
                      <BookingItem booking={booking} />
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6}>No Booking</td>
                  </tr>
                )}
              </tbody>
            </Table>
            <div className="page__footer">
              <div className="page__select">
                <Form.Select
                  name="limit"
                  defaultValue={limit}
                  onChange={(e) => setLimit(e.target.value)}
                >
                  <option value="6">6</option>
                  <option value="8">8</option>
                  <option value="10">10</option>
                </Form.Select>
              </div>
              <div className="page__pagination">
                <PaginationComponent
                  total={totalItems}
                  itemsPerPage={limit}
                  onPageChange={(page) => setCurrentPage(page)}
                  currentPage={currentPage}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handlerModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  )
}

export default ViewAllBookingModal
