import React from 'react'

const Alert = (props) => {
  return (
    <>
        <div className={`alert alert-${props.alert.type} alert-dismissable `} style={{height : "50px"}}>
            <p className=''>{props.alert.message}</p>
            
        </div>
    </>
  )
}

export default Alert