import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { getAllService } from "../../redux/actions/serviceAction"
import ServiceItem from "./ServiceItem"

function Services() {
  const services = useSelector((state) => state.serviceReducer.services)

  console.log(services)

  useEffect(() => {
    getAllService()
  }, [])
  console.log("Services:", services)

  return (
    <div className="services-list">
      <ServiceItem />
    </div>
  )
}

export default Services
