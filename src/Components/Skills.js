import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import javascript from '../img/js-logo.png'
import react from '../img/react.svg'
import python from '../img/python.png'
const Skills = () => {
    const imageCard = () => {
        return {
             width: "80%", height: '20rem',
         
            borderRadius: "10px ",
             margin: "2rem", 
             marginTop: ".9rem",
             marginBottom:"0rem",
             minWidth:"180px",
        }
    }
    const skillStyle = () =>{
        return{
            marginTop:"1rem"
        }
    }
    const cardStyle = () => {
        return {
            minWidth:"380px",
            border: '1px solid black', width: "35%",
            marginLeft:"1rem",
             height: '25rem'
            , boxShadow: '5px -5px 5px ',
             borderRadius: "25px ", margin: "2rem",
            display: 'flex',
            flexWrap: "wrap",
            flexDirection: "column",
            textAlign:"center",
      
            

        }

    }
    return (

        <div style={{ 
            marginTop:"1rem",
            display: "flex", flexWrap: 'wrap' }}>
            <div style={cardStyle()}>
                <img src={javascript} alt="" style={imageCard()} />
                <h4 style={skillStyle()}>Javascipt</h4>
            </div>
            <div style={cardStyle()}>
                <img src={react} alt="" style={imageCard()} />
                <h4 style={skillStyle()}>React</h4>
            </div>
            <div style={cardStyle()}>
                <img src={python} alt="" style={imageCard()} />
                <h4>Python 3</h4>
            </div>


        </div>


    )
}

export default Skills

{/* 
    <Container>
    
    <Row className="justify-content-md-center">
<Col xs={12} sm={4} md={4} className="p-4 m-4" >
            
            <Card style={{ width: '28rem',height:"25rem" }}>
                <Card.Img
                style={{ width: '20rem',backgroundColor:'black',height:"20rem" }}
                 variant="top" src={javascript} />
                <Card.Body>
                    <Card.Title style={{color:'black'}}>Javascript</Card.Title>


                </Card.Body>
            </Card>
            </Col>
            <Col xs={12} sm={4} md={4} className="p-3 m-4">
           <Card style={{ width: '28rem',height:"25rem" }}>
                <Card.Img
                style={{ width: '20rem',height:"20rem" }}
                variant="top"
                src={reactFavicon}/>
                <Card.Body>
                    <Card.Title style={{color:'black'}}>React</Card.Title>


                </Card.Body>
            </Card>
           </Col>
           <Col>
           <Card style={{ width: '28rem' }}>
                <Card.Img variant="bottom" />
                <Card.Body>
                    <Card.Title>Redux</Card.Title>


                </Card.Body>
            </Card>
           </Col>
            </Row> 
              </Container>
            */}