import React from 'react';
import WeekHours from '../components/WeekHours';

export default function TimeTable() {
  return (
    <section className="grid gap-9 py-5 w-80% bg-white
        @media (min-width: 1251px) {grid-template-columns: repeat(4, 1fr)}
        @media (max-width: 12500px) {grid-templage-columns: 1fr 1fr}">
      
        <p>Day Hours Here</p>
   
      <WeekHours />
    </section>
  )
}