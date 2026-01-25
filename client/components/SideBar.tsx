import React from 'react';
import { Menu } from 'lucide-react';

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
    width: '240px',
    fontWeight: 'bold',
    boxShadow: '5px 3px 3px rgba(0, 0, 0, 0.1)',
    borderRadius: '4px',};

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
    width: '240px', 
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center',
    gap: "10px", fontWeight: 'bold',
    boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.1)',
    borderRadius: '4px',
  }

  return (
    <div style={{ position: 'fixed', padding: '20px', width: '270px', fontFamily: 'Arial, sans-serif', backgroundColor: 'white'}}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
        <Menu style={{width: "30px", height: "30px"}}/>
        <h1 style={{fontSize: '40px', marginBottom: '20px'}}>Hourly Data</h1>
      </div>



      <div style={{marginLeft: '40px'}}>
        <h3 style={{marginTop: '0px'}}>Subjects:</h3>
        <div className="flex flex-row items-center pb-[8px]">
          <div style={{...boxSize, backgroundColor: "#535353"}} className="box"></div>
          <span style={{marginLeft: '12px', fontSize: '18px'}}>Sleep</span>
        </div>
        <div className="flex flex-row items-center pb-[8px]">
          <div style={{...boxSize, backgroundColor: "#aef6ff"}} className="box"></div>
          <span style={{marginLeft: '12px', fontSize: '18px'}}>Social</span>
        </div>
        <div className="flex flex-row items-center pb-[8px]">
          <div style={{...boxSize, backgroundColor: "#4444a5"}} className="box"></div>
          <span style={{marginLeft: '12px', fontSize: '18px'}}>University</span>
        </div>
        <div className="flex flex-row items-center pb-[8px]">
          <div style={{...boxSize, backgroundColor: "#2a05ff"}} className="box"></div>
          <span style={{marginLeft: '12px', fontSize: '18px'}}>Computer Science</span>
        </div>
        <div className="flex flex-row items-center pb-[8px]">
          <div style={{...boxSize, backgroundColor: "#fc0000"}} className="box"></div>
          <span style={{marginLeft: '12px', fontSize: '18px'}}>Art</span>
        </div>
        <div className="flex flex-row items-center pb-[8px]">
          <div style={{...boxSize, backgroundColor: "#14db02"}} className="box"></div>
          <span style={{marginLeft: '12px', fontSize: '18px'}}>Exercise</span>
        </div>
        <div className="flex flex-row items-center pb-[8px]">
          <div style={{...boxSize, backgroundColor: "#a97d3b"}} className="box"></div>
          <span style={{marginLeft: '12px', fontSize: '18px'}}>Organization</span>
        </div>
      </div>

      <div style={{marginLeft: '20px'}}>
        <div style={addSubject}>
          + Add Subject
        </div>
        <div style={buttonDiv}>
          <img src="/graph.png" style={{width: "30px", paddingLeft: "45px"}}/>
          <p>View Analytics</p>
        </div>
        <div style={buttonDiv}>
          <img src="/routine.png" style={{width: "30px", paddingLeft: "47px"}}/>
          <p>Edit Routine</p>
        </div>
        <div style={buttonDiv}>
          <img src="/event.png" style={{width: "30px", paddingLeft: "50px"}}/>
          <p>Add Event</p>
        </div>
      </div>
    </div>
  )
}