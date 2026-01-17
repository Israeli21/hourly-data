import React from 'react';

export default function SideBar() {
  const boxSize = { 
    width: '18px', 
    height: '18px', 
    border: '3px solid #000000'};

  const addSubject = {
    border: '2px', 
    borderStyle: 'solid', 
    borderColor: '#777777', 
    padding: '10px', 
    textAlign: 'center', 
    cursor: 'pointer', 
    marginTop: '12px', 
    width: '170px'};

  const subjectDiv = {
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingBottom: '8px'
  };
  
  const buttonDiv = {
    border: '2px', 
    borderStyle: 'solid', 
    borderColor: '#777777', 
    padding: '10px',
    textAlign: 'center', 
    cursor: 'pointer', 
    marginTop: '12px', 
    width: '170px', 
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center',
    gap: "5px"
  }

  return (
    <div>
      <h1>Hourly Data</h1>
      <h3>Subjects:</h3>
      <div style={subjectDiv}>
        <div style={{...boxSize, backgroundColor: "#535353"}} className="box"></div>
        <span style={{marginLeft: '12px', fontSize: '18px'}}>Sleep</span>
      </div>
      <div style={subjectDiv}>
        <div style={{...boxSize, backgroundColor: "#aef6ff"}} className="box"></div>
        <span style={{marginLeft: '12px', fontSize: '18px'}}>Social</span>
      </div>
      <div style={subjectDiv}>
        <div style={{...boxSize, backgroundColor: "#4444a5"}} className="box"></div>
        <span style={{marginLeft: '12px', fontSize: '18px'}}>University</span>
      </div>
      <div style={subjectDiv}>
        <div style={{...boxSize, backgroundColor: "#2a05ff"}} className="box"></div>
        <span style={{marginLeft: '12px', fontSize: '18px'}}>Computer Science</span>
      </div>
      <div style={subjectDiv}>
        <div style={{...boxSize, backgroundColor: "#fc0000"}} className="box"></div>
        <span style={{marginLeft: '12px', fontSize: '18px'}}>Art</span>
      </div>
      <div style={subjectDiv}>
        <div style={{...boxSize, backgroundColor: "#14db02"}} className="box"></div>
        <span style={{marginLeft: '12px', fontSize: '18px'}}>Exercise</span>
      </div>
      <div style={subjectDiv}>
        <div style={{...boxSize, backgroundColor: "#a97d3b"}} className="box"></div>
        <span style={{marginLeft: '12px', fontSize: '18px'}}>Organization</span>
      </div>

      <div style={addSubject}>
        + Add Subject
      </div>
      <div style={buttonDiv}>
        <img src="/graph.png" style={{width: "30px", paddingLeft: "20px"}}/>
        <p>View Analytics</p>
      </div>
      <div style={buttonDiv}>
        <img src="/event.png" style={{width: "30px", paddingLeft: "20px"}}/>
        <p>Add Event</p>
      </div>
    </div>
  )
}