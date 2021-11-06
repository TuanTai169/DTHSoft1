import React, { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllCustomers } from "../../redux/actions/customersAction"
import CustomersTable from "./CustomersTable"
import Pagination from "../../components/Common/Pagination/Pagination"
import AddCustomersModal from "./AddSCustomersModal"
import { Button, ButtonToolbar, Spinner } from "react-bootstrap"

function Customers() {

  const [currentPage, setCurrentPage] = useState(1)
  const [isOpen, setIsOpen] = useState(false)

  //GET LIST CUS
  const customers = useSelector((state) => state.customersReducer.customers)
  const isLoading = useSelector((state) => state.customersReducer.customersLoading)
  const role = useSelector((state) => state.auth.user.roles)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCustomers())
  }, [dispatch])

  const totalItems = customers.length
  const limit = 6
  const totalPages = Math.ceil(totalItems / limit)

  const currentData = customers.slice(
    (currentPage - 1) * limit,
    (currentPage - 1) * limit + limit
  )

  const handlerModalClose = () => setIsOpen(false)
  const onChangedPage = useCallback(
    (event, page) => {
      event.preventDefault()
      setCurrentPage(page)
    },
    [setCurrentPage]
  )


  return (
    <div>
      <>
      {isLoading === false ? (
        <div className="spinner-container">
          <Spinner animation="border" variant="info" />
        </div>
      ) : (
        <div className="page">
          <div className="page__header">
            <div className="page__title">
              <h3>Customers</h3>
            </div>
            <div className="page__action">
              <ButtonToolbar>
                <Button
                  variant="success"
                  className={role === "EMPLOYEE" ? "disabled" : ""}
                  onClick={() => setIsOpen(true)}
                >
                  Add Cusomers
                </Button>
                <AddCustomersModal
                  show={isOpen}
                  handlerModalClose={handlerModalClose}
                />
              </ButtonToolbar>
            </div>
          </div>
          <div className="page__body">
            <CustomersTable role={role} customers={currentData} />
          </div>
          <div className="page__footer">
            <Pagination
              totalPages={totalPages}
              pageNeighbours={2}
              onChangedPage={onChangedPage}
              currentPage={currentPage}
            />
          </div>
        </div>
      )}
    </>
    </div>
  )
}

export default Customers
