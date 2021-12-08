import React from "react"
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
    <div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Font Awesome */}
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        {/* Bootstrap core CSS */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" />
        {/* Material Design */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.5.15/css/mdb.min.css" rel="stylesheet" />
        <div className="container mt-5 align-items-center">
          <div className="row align-items-center">
            <div className="col-md-3 text-center">
              <img src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/241708409_1867018356810482_9197290271135334065_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=czzWEr0T3l4AX-0mTSb&_nc_ht=scontent.fsgn5-8.fna&oh=80ff762adc29d8ca92cd5a928595373c&oe=61B4C0E2" alt="" className="img-fluid rounded-circle" style={{width: '20vh'}} srcSet />
              <br /><br />
              <h4><b>Nguyen Tuan Tai</b></h4>
              <h4><b>18110193</b></h4>
              <p className="text-muted">DH SPKT TPHCM</p>
              <p className="text-muted">FullStack in Project</p>
              
            </div>

            
            <div className="col-md-9 col-12">
              <h3 style={{fontWeight: 250, color: '#3c4043'}} className="display-5"><b>DTH SOFT-FULLSTACK</b></h3>
              <h4><b>This is my Profile</b></h4>
              <a href="https://www.facebook.com/anhhuy.vo.180/" className="btn btn-pink m-0 btn-md"><i className="fa fa-check" aria-hidden="true" />&nbsp; My Website</a>
              <br /><br /><br />
              <h5><b>Technical Skills</b></h5>
              <p>ReactJS, Angular, NodeJS,NextJS,C#,Java,Python</p>
              <p>MongoDB, SQLServer, MySQL, FireBase, Oracle,PostgreSQL</p>
              <p>AI, Machine Learning, Deep Learning</p>
              <h5><b>Follow Me</b></h5>
                <Link to="#" > <i className="fa fa-facebook fa-2x" aria-hidden="true" style={{color: '#2E2E2E'}} /> </Link> 
                <Link to="#" > <i className="fa fa-github fa-2x" aria-hidden="true" style={{color: '#2E2E2E'}} /> </Link>
                <Link to="#" > <i className="fa fa-youtube fa-2x" aria-hidden="true" style={{color: '#2E2E2E'}} /> </Link>         
                <br />
              </div>

            
          </div>
        </div>

        <div className="container mt-5 align-items-center">
          <div className="row align-items-center">
            <div className="col-md-3 text-center">
              <img src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.6435-9/35634062_880504432155500_939163512020664320_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=JUeMl-29YLcAX8EU0ak&_nc_ht=scontent.fsgn5-11.fna&oh=06dcd40909188b8c442d76d0cd8c28bd&oe=61D6EF68" alt="" className="img-fluid rounded-circle" style={{width: '20vh'}} srcSet />
              <br /><br />
              <h4><b>Vo Anh Huy</b></h4>
              <h4><b>18110124</b></h4>
              <p className="text-muted">DH SPKT TPHCM</p>
              <p className="text-muted">FrontEnd in Project</p>
              </div>

            
            <div className="col-md-9 col-12">
              <h3 style={{fontWeight: 250, color: '#3c4043'}} className="display-5"><b>DTHSOFT-FE</b></h3>
              <h4><b>This is my Profile</b></h4>
              <a href="https://www.facebook.com/anhhuy.vo.180/" className="btn btn-pink m-0 btn-md"><i className="fa fa-check" aria-hidden="true" />&nbsp; My Website</a>
              <br /><br /><br />
              <h5><b>Technical Skills</b></h5>
              <p>ReactJS, Html, Css, Javacript</p>
              <br />
              <div>
                <h5><b>Follow Me</b></h5>
                <Link to="#" > <i className="fa fa-facebook fa-2x" aria-hidden="true" style={{color: '#2E2E2E'}} /> </Link> 
                <Link to="#" > <i className="fa fa-github fa-2x" aria-hidden="true" style={{color: '#2E2E2E'}} /> </Link>
                <Link to="#" > <i className="fa fa-youtube fa-2x" aria-hidden="true" style={{color: '#2E2E2E'}} /> </Link>
                </div>
                <br />     
                <p>Source: <b><a href="https://github.com/TuanTai169/DTHSoft1" style={{color: '#3c4043'}} target="_blank" rel="noreferrer">DTH SOFT</a></b></p>                      
            </div>     
            
          </div>
          
        </div>
        
      </div>
      
    </>


    
  )
}

export default About
