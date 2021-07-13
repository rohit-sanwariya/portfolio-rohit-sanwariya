import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer = () => {
  const fontAwesome = () => {
    return {
      backgroundColor: "#fff",
      color: "#333",
    }
  }
  const containerFooter = () => {
    return {
      display: "flex",
      flexDirection: "column",
      marginLeft: "5.5rem",

    }
  }
  return (

    <div style={{ ...containerFooter() }} >
      <div style={{ marginLeft: "0",display:"flex" }}>
        <div style={{paddingLeft:"1rem",flex:2}}><a href="https://www.instagram.com/rohitsanvariya?r=nametag">
          <FontAwesomeIcon style={fontAwesome()} icon={faInstagram} size="3x" />
        </a></div>
        <div style={{paddingLeft:"1rem",flex:2}}><a href="https://www.linkedin.com/in/rohit-sanwariya/">
          <FontAwesomeIcon style={fontAwesome()} icon={faLinkedin} size="3x" />
        </a></div>
       <div style={{paddingLeft:"1rem",flex:2}}> <a href="https://www.facebook.com/rohit.sanvriya">
          <FontAwesomeIcon style={fontAwesome()} icon={faFacebook} href="" size="3x" />     </a></div>
        <div style={{paddingLeft:"1rem",flex:2}}><a href="https://twitter.com/Rsanvariya?s=08">
          <FontAwesomeIcon style={fontAwesome()} icon={faTwitter} size="3x" />
        </a></div>




      </div>
      <div style={{
          marginLeft: "-3em",
          marginTop:"2rem",
          textJustify:"center",
          textAlign:'center'
      }}
      >
        <a href="mailto:rohitsanwariya1995@gmail.com"> <FontAwesomeIcon style={fontAwesome()} icon={faEnvelope} size="1x" /> Email Us</a>
      </div>
      <div style={{
          marginLeft: "-3em",
          marginTop:"2rem",
          textJustify:"center",
          textAlign:'center'
      }}>
        Copyright &copy; Rohit Sanwariya
      </div>
    </div>

  );
};

export default Footer;

// <Container className="w-100 pt-4">


// <Row>
//   <Col  className="m-2"md={4} xs={3}>
//     <a href="https://www.instagram.com/rohitsanvariya?r=nametag">
//       <FontAwesomeIcon style={fontAwesome()} icon={faInstagram} size="3x" />
//     </a></Col>
//     <Col  md={4} xs={3}>
//     <a href="https://www.linkedin.com/in/rohit-sanwariya/">
//       <FontAwesomeIcon style={fontAwesome()} icon={faLinkedin} size="3x" />
//     </a></Col>
//     <Col  md={6} xs={3}>
//     <a href="https://www.facebook.com/rohit.sanvriya">
//       <FontAwesomeIcon style={fontAwesome()} icon={faFacebook} href="" size="3x" />
//     </a>
//   </Col>
//   <Col  md={6} xs={3}>
//     <a href="https://twitter.com/Rsanvariya?s=08">
//       <FontAwesomeIcon style={fontAwesome()} icon={faTwitter} size="3x" />
//     </a></Col>


// </Row>
// <Row>
//   <Col className="text-center p-3">
//     <a href="mailto:rohitsanwariya1995@gmail.com"> <FontAwesomeIcon style={fontAwesome()} icon={faEnvelope} size="1x" /> Email Us</a>

//   </Col>
// </Row>
// <Row>
//   <Col className='text-center p-3'>
//     Copyright &copy; Rohit Sanwariya
//   </Col>
// </Row>



// </Container>