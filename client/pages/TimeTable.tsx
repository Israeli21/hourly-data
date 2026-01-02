import { useState } from 'react';

function TimeTable() {
  return (
    <section className="grid gap-9 py-5 w-80% bg-white
        @media (min-width: 1251px) {grid-template-columns: repeat(4, 1fr)}
        @media (max-width: 12500px) {grid-templage-columns: 1fr 1fr}">
      <div className="grid {grid-template-columns: repeat(24, 1fr)} gap-[5px] m-5 mt-[10px] ml-0">

      </div>
    </section>
  )
}

export default TimeTable;