'use client'
import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";


const Spinner = ({loading}) => {
    const override = {
        display : 'block',
        margin : '100px auto',
    }
  return (
<ClipLoader
        color='#3b82f6'
        loading={loading}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
      />
  )
}

export default Spinner