import React from 'react';
import { Col, Divider, Row, Table } from 'antd';
import { Form } from "react-bootstrap"
import { useSelector } from 'react-redux';
import { convertStringToDate } from "../../utils/convertDateTime"


export const ComponentToPrint = React.forwardRef((props, ref) => {
  
  const { receipt } = props
  const cashier = useSelector(state => state.auth.user.name);


  // Service
  const sidebar = (
    <ul>
      {receipt.booking.services.map((services) =>
        <li key={services._id}>      
        </li>
      )}
    </ul>
  );
  const content = receipt.booking.services.map((services) =>
    <div key={services._id}>
      <table>
            <tr>    
              <th><h6>{services.name}: </h6></th>         
              <td><h6>{services.price}</h6></td>             
            </tr>
        </table>
    </div> 
  );

  //Room

  const RoomContent = receipt.booking.rooms.map((rooms) =>
    <div style={{ textAlign: "center", }} key={rooms._id}>
      <table>
            <tr>
                  <th><h6 style= {{marginRight: "20px"}}>RoomNumber </h6></th> 
                  <th><h6 style= {{marginRight: "20px"}}>Rooms Price </h6></th>  
                  <th><h6 style= {{marginRight: "20px"}}>Check In </h6></th> 
                  <th><h6 style= {{marginRight: "20px"}} >Check Out </h6></th>                
              </tr>
              <tr>
                  <td>{rooms.roomNumber}</td>  
                  <td>{rooms.price}</td>
                  <td>{convertStringToDate(receipt.booking.checkInDate)}</td>
                  <td>{convertStringToDate(receipt.booking.checkOutDate)}</td>
              </tr>
        </table>
    </div> 
  );

  const today = new Date();
  const dateTime = convertStringToDate(today)
  

  return (
    <>
    <div ref={ref}> 
      <Row className="mb-3" style={{ borderBottom: "1px solid #bbb" }}>
          <Col>
          <div style={{ textAlign: "center", fontSize: "20px" }}>           
              <h5>DTHSOFT</h5>
            </div>
            <div style={{ textAlign: "center", fontSize: "13px" }}>           
              <strong>1. Vo Van Ngan, Linh Chieu, Thu Duc City, Ho Chi Minh City, Viet Nam</strong>
            </div>
          </Col>
        </Row>

      <Row className="mb-3" >
        <Col>
        <div style={{ textAlign: "center", fontSize: "20px" }}>           
            <h5>CASH RECEIPT</h5>
          </div>
        </Col>
      </Row>

      <Row className="mb-3" style={{ borderBottom: "1px solid #bbb" }}>
        <Col>
        <table>
            <tr>
              <th><h6>Cash ID: </h6></th>
              <td><h6>{receipt._id}</h6></td>             
            </tr>                                  
            <tr>
              <th><h6>Cashier: </h6></th>
              <td><h6>{cashier}</h6></td>
            </tr>
            <tr>
              <th><h6>Date: </h6></th>
              <td><h6>{dateTime}</h6></td>
            </tr>
          </table>
        </Col>      
      </Row>

      
      <Row className="mb-3" style={{ borderBottom: "1px solid #bbb" }}>
              <Form.Group controlId="formGridRoom">

              <div className="form-label">
                  <h5>Room</h5>                              
                </div>         
                <div>                                                    
                    {RoomContent}
                </div>  
                <p>
                    <strong>Amount (USD):{" "}</strong> 
                    <strong style={{ color: "red" }}>
                      {receipt.booking.roomCharge}
                    </strong>
                  </p>
              </Form.Group>
            </Row>

      <Row className="mb-3" style={{ borderBottom: "1px solid #bbb" }}>
              <Form.Group as={Col} controlId="formGridService">
                <div className="form-label">
                  <h5>Service</h5>                              
                </div>         
                <div>
                    {sidebar}                   
                    {content}
                </div>  
                <p>
                    <strong>Amount (USD):{" "}</strong> 
                    <strong style={{ color: "red" }}>
                      {receipt.booking.serviceCharge}
                    </strong>
                  </p>
              </Form.Group>
            </Row>


      <Row className="mb-3" style={{ borderBottom: "1px solid #bbb" }}>
        <Col >
        <table>
            <tr>
              <th><h6>Total Price: </h6></th>
              <td><h6 style={{ color: "red" }}>{receipt.booking.totalPrice}</h6></td>             
            </tr>                                  
            <tr>
              <th><h6>Discount: </h6></th>
              <td><h6>{receipt.booking.discount}</h6></td>
            </tr>
            <tr>
              <th><h6>Pay: </h6></th>
              <td><h6 style={{ color: "red" }}>{receipt.booking.totalPrice}</h6></td>
            </tr>
          </table>
          <div style={{ textAlign: "center", fontSize: "13px" }}>           
              <strong>(Above prices are inclusive 10% of value added tax)</strong>
          </div>
        </Col>      
      </Row>

      <Row className="mb-3" style={{ borderBottom: "1px solid #bbb" }}>
        <Col >
        <table>
            <tr>
              <th><h6>Cash: </h6></th>
              <td><h6>{receipt.paidOut}</h6></td>             
            </tr>                                  
            <tr>
              <th><h6>Refund: </h6></th>
              <td><h6>{receipt.refund}</h6></td>
            </tr>
          </table>
        </Col>      
      </Row>

      <Row className="mb-3" style={{ borderBottom: "1px solid #bbb" }}>
        <Col span={8}>
          <div style={{ textAlign: "center", fontSize: "13px" }}>           
              <strong>Complaint or Suggestions: 1800 1010</strong>     
          </div>

          <div style={{ textAlign: "center", fontSize: "13px" }}>           
            <strong>Note: DTH only issues invoices within the day, please contact the staff for support.</strong>     
          </div>

          <div style={{ textAlign: "center", fontSize: "13px" }}>           
            <strong>Thank you. See you again</strong>     
          </div>
          

          
        </Col>      
      </Row>
        
    </div>
    </>
  );
});