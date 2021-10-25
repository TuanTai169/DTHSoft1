import React from "react"
import { useSelector } from "react-redux"
import Table from "react-bootstrap/esm/Table"

function ServiceItem() {
  const services = useSelector((state) => state.serviceReducer.services)
  const renderList = services.map((service) => {
    const { _id, name, price } = service
    return (
      <tr key={_id}>
        <td></td>
        <td>{name}</td>
        <td>{price}</td>
      </tr>
    )
  })
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>EDIT</th>
          <th>DELETE</th>
        </tr>
      </thead>
      <tbody>{renderList}</tbody>
    </Table>
  )
}

export default ServiceItem
