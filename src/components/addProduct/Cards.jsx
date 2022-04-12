import React from 'react'

export default function Cards() {
  return (
      <>
        <div className='card-container'>
            <input type="checkbox" className='delete-checkbox' />
            <div className='card-content'>
                <p>JVC200123</p>
                <p>Acme DISC</p>
                <p>1.00 $</p>
                <p>Size: 700 MB</p>
            </div>
        </div>
      </>
  )
}
