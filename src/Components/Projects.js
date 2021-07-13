import React from 'react'


const Projects = () => {
    
    const linkProject =()=>{
        return {
            textDecoration:"none",
            color:"black",

           padding: "5.5rem"
        }
    }

    const cardProject = () =>{
        return {

            margin: "1rem",
            width: "25rem",
            height: "14rem",
            textAlign: "center",
            border:"2px solid #efefef",
            boxShadow:"5px 10px 5px ",
            borderRadius:"1rem",
            flex:2
        }
    }


    return (


        <div style={{ display: "flex", }}>
            <div className="card" style={cardProject()}>
                <a style={linkProject()}
                    href="https://overconfident-recess.tictactoe_rohit.surge.sh/" >
                    Tic Tac Toe
                </a>
            </div>


            <div className="card"
                style={cardProject()}
            >
                <a style={linkProject()} href="https://rohit-sanwariya.github.io/react-box-officeapp/#/" >
                    Box Office App
                </a>
            </div>
        </div>





    )
}

export default Projects
