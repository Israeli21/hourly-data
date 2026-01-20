import React from 'react';
import dayjs from 'dayjs';

export default function WeekHours() {

  const days = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const startDate = dayjs('2026-01-17');

  const today = dayjs();
  const deliveryDate = today.format('DD');

  const daysSinceStart = today.diff(startDate, "day");      // Total days passed since start
  const weeksSinceStart = Math.floor(daysSinceStart / 7);   // How many full weeks have passed
  const currentWeekStart = startDate.add(weeksSinceStart * 7, "day");
  
  const boxStyle = {
    width: '100px',
    height: '30px',
    border: '1px solid #333',
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    flexShrink: 0,
  };

  const dayLabel = {
    fontSize: '18px', 
    fontWeight: 'bold', 
    marginBottom: '10px', 
    justifyContent: 'center', 
    alignItems: 'center', 
    display: 'flex'
  }
  
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'row', paddingLeft: '330px' }}>
      {days.map((day, dayIndex) => (
        <div key={dayIndex} style={{ marginBottom: '30px'}}>
          <h3 style={dayLabel}>{day}</h3>
          <h3 style={dayLabel}>{currentWeekStart.add(dayIndex, "day").format('MMM DD')}</h3>
          <div style={{ display: 'flex', gap: '28px'}}>
            <div style={{ gap: '4px', flexWrap: 'nowrap', overflowX: 'auto' }}>
              {Array.from({ length: 24 }, (_, hourIndex) => (
                <div 
                  key={hourIndex} 
                  style={boxStyle}
                  className="box"
                  title={`${day} - ${hourIndex}:00`}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#93c5fd'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                >
                  <span style={{ fontSize: '12px' }}>{hourIndex}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}