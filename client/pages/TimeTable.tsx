import React from 'react';

import WeekHours from '../components/WeekHours';
import SideBar from '../components/SideBar';

export default function TimeTable() {
  return (
    <section>
        <div className="flex flex-row">
          <SideBar />
          <WeekHours />
        </div>
    </section>
  )
}