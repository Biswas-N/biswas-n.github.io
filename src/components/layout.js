import React from "react"

export default function Layout({ children }) {
  return (
    <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: "column"
      }}>
        {children}
      </div>
  )
}