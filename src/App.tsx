import React, { useState } from 'react'

function App() {

  return (
    <div style={containerStyle}>
      <div style={feedBox}>
        <div style={feedNews}>
          <p>NEWS</p>
        </div>
        <div style={feedNews}>
          <p>NEWS</p>
        </div>
        <div style={feedNews}>
          <p>NEWS</p>
        </div>
        <div style={feedNews}>
          <p>NEWS</p>
        </div>
      </div>
      <div style={feedBox}>
        <div style={feedNews}>
          <p>NEWS</p>
        </div>
        <div style={feedNews}>
          <p>NEWS</p>
        </div>
        <div style={feedNews}>
          <p>NEWS</p>
        </div>
        <div style={feedNews}>
          <p>NEWS</p>
        </div>
      </div>
      <div style={feedBox}>
        <div style={feedNews}>
          <p>NEWS</p>
        </div>
        <div style={feedNews}>
          <p>NEWS</p>
        </div>
        <div style={feedNews}>
          <p>NEWS</p>
        </div>
        <div style={feedNews}>
          <p>NEWS</p>
        </div>
      </div>
      <div style={feedBox}>
        <div style={feedNews}>
          <p>NEWS</p>
        </div>
        <div style={feedNews}>
          <p>NEWS</p>
        </div>
        <div style={feedNews}>
          <p>NEWS</p>
        </div>
        <div style={feedNews}>
          <p>NEWS</p>
        </div>
      </div>
      <div style={feedBox}>
        <div style={feedNews}>
          <p>NEWS</p>
        </div>
        <div style={feedNews}>
          <p>NEWS</p>
        </div>
        <div style={feedNews}>
          <p>NEWS</p>
        </div>
        <div style={feedNews}>
          <p>NEWS</p>
        </div>
      </div>
      <div style={feedBox}>
        <div style={feedNews}>
          <p>NEWS</p>
        </div>
        <div style={feedNews}>
          <p>NEWS</p>
        </div>
        <div style={feedNews}>
          <p>NEWS</p>
        </div>
        <div style={feedNews}>
          <p>NEWS</p>
        </div>
      </div>
      <div style={feedBox}>
        <div style={feedNews}>
          <p>NEWS</p>
        </div>
        <div style={feedNews}>
          <p>NEWS</p>
        </div>
        <div style={feedNews}>
          <p>NEWS</p>
        </div>
        <div style={feedNews}>
          <p>NEWS</p>
        </div>
      </div>
      <div style={feedBox}>
        <div style={feedNews}>
          <p>NEWS</p>
        </div>
        <div style={feedNews}>
          <p>NEWS</p>
        </div>
        <div style={feedNews}>
          <p>NEWS</p>
        </div>
      </div>
      
    </div>
  )
}

let containerStyle: React.CSSProperties = {
  display: "flex",
  height: "100vh",
  backgroundColor: "lightblue",
  gap: "10px",
  padding: "10px",
  overflowX: "auto"
}

let feedBox: React.CSSProperties = {
  height: "100%",
  minWidth: "200px",
  backgroundColor: "lightcoral",
  padding: "5px",
  gap: "5px",
  borderRadius: "5px",

  display: "flex",
  flexDirection: "column",
  overflowY:"auto"
}

let feedNews: React.CSSProperties = {
  minHeight: "100px",
  backgroundColor: "lightgray",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "5px"
}

export default App
