import React from 'react';
import { Menu } from 'lucide-react';

export default function SideBar() {

  return (
    <div style={{ position: 'fixed', padding: '20px', width: '270px', fontFamily: 'Arial, sans-serif', backgroundColor: 'white'}}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
        <Menu style={{width: "30px", height: "30px"}}/>
        <h1 style={{fontSize: '40px', marginBottom: '20px'}}>Hourly Data</h1>
      </div>

      <div style={{marginLeft: '40px'}}>
        <h3 style={{marginTop: '0px'}}>Subjects:</h3>
        <div className="flex flex-row items-center pb-[8px]">
          <div className="w-[18px] h-[18px] border-[3px] border-black bg-[#535353]"></div>
          <span style={{marginLeft: '12px', fontSize: '18px'}}>Sleep</span>
        </div>
        <div className="flex flex-row items-center pb-[8px]">
          <div className="w-[18px] h-[18px] border-[3px] border-black bg-[#aef6ff]"></div>
          <span style={{marginLeft: '12px', fontSize: '18px'}}>Social</span>
        </div>
        <div className="flex flex-row items-center pb-[8px]">
          <div className="w-[18px] h-[18px] border-[3px] border-black bg-[#4444a5]"></div>
          <span style={{marginLeft: '12px', fontSize: '18px'}}>University</span>
        </div>
        <div className="flex flex-row items-center pb-[8px]">
          <div className="w-[18px] h-[18px] border-[3px] border-black bg-[#2a05ff]"></div>
          <span style={{marginLeft: '12px', fontSize: '18px'}}>Computer Science</span>
        </div>
        <div className="flex flex-row items-center pb-[8px]">
          <div className="w-[18px] h-[18px] border-[3px] border-black bg-[#fc0000]"></div>
          <span style={{marginLeft: '12px', fontSize: '18px'}}>Art</span>
        </div>
        <div className="flex flex-row items-center pb-[8px]">
          <div className="w-[18px] h-[18px] border-[3px] border-black bg-[#14db02]"></div>
          <span style={{marginLeft: '12px', fontSize: '18px'}}>Exercise</span>
        </div>
        <div className="flex flex-row items-center pb-[8px]">
          <div className="w-[18px] h-[18px] border-[3px] border-black bg-[#a97d3b]"></div>
          <span style={{marginLeft: '12px', fontSize: '18px'}}>Organization</span>
        </div>
      </div>

      <div style={{marginLeft: '20px'}}>
        <div className="border border-[2px] border-solid border-[#777777] p-[10px] text-center cursor-pointer mt-[12px] w-[240px] font-bold shadow-[5px_3px_3px_rgba(0,0,0,0.1)] rounded-[4px] hover:bg-gray-100">
          + Add Subject
        </div>
        <div className="border border-[2px] border-solid border-[#777777] p-[10px] text-center cursor-pointer mt-[12px] w-[240px] font-bold shadow-[5px_3px_3px_rgba(0,0,0,0.1)] rounded-[4px] hover:bg-gray-100">
          <img src="/graph.png" style={{width: "30px", paddingLeft: "45px"}}/>
          <p>View Analytics</p>
        </div>
        <div className="border border-[2px] border-solid border-[#777777] p-[10px] text-center cursor-pointer mt-[12px] w-[240px] font-bold shadow-[5px_3px_3px_rgba(0,0,0,0.1)] rounded-[4px] hover:bg-gray-100">
          <img src="/routine.png" style={{width: "30px", paddingLeft: "47px"}}/>
          <p>Edit Routine</p>
        </div>
        <div className="border border-[2px] border-solid border-[#777777] p-[10px] text-center cursor-pointer mt-[12px] w-[240px] font-bold shadow-[5px_3px_3px_rgba(0,0,0,0.1)] rounded-[4px] hover:bg-gray-100">
          <img src="/event.png" style={{width: "30px", paddingLeft: "50px"}}/>
          <p>Add Event</p>
        </div>
      </div>
    </div>
  )
}