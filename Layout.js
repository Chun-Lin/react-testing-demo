import React from 'react'

export default ({ children }) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: 'white',
    }}>
    {children}
  </div>
)

// export default WhiteLayout