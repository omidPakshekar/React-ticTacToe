import React from "react";
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const BigScreen = styled(Button)({

    color: 'black',
    height:"130px",
    paddingleft:"35vw",
    width:"150px",
    boxShadow: '0 3px 5px 2px rgba(50, 50, 50, .7)',
    marginRight: "10px",
    marginTop: "10px",
    background: 'gray',
    borderRadius: 5,
    border: 0,
    fontSize:"100px",
    paddingBottom: "10px",
    marginBottom: "10px"
});

const SmallScreen = styled(Button)({
    width:"150px",
    background: 'gray',
    borderRadius: 5,
    color: 'black',
    height:"150px",
    border: 0,
    boxShadow: '0 3px 5px 2px rgba(50, 50, 50, .7)',
    marginTop: "10px",
    fontSize:"80px",
    paddingleft:"35px",
    marginRight: "10px",
    
});


function IsResponsive(props , matches){
    
    if(!matches){
        return(<BigScreen className="fontstyle" onClick={props.onClick}> {props.value} </BigScreen>)
    }else{
        return(<SmallScreen className="fontstyle" onClick={props.onClick}> {props.value} </SmallScreen>) 
    }
}

function Square(props){
    const matches = useMediaQuery('(max-width:900px)');
    return (
        IsResponsive(props , matches)
    );
}
 
export default Square;

