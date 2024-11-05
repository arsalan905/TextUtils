import React from 'react'

function Alert(props) {

    const capitalize = (word)=>{
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

  return (  
     props.alert && 
     <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong >{capitalize(props.alert.type)} </strong>: {props.alert.msg}   
    </div>    
  )
}

export default Alert