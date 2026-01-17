import React from 'react';

import WeekHours from '../components/WeekHours';
import SideBar from '../components/SideBar';

export default function TimeTable() {
  return (
    <section className="">
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <SideBar />
          <WeekHours />
        </div>
    </section>
  )
}