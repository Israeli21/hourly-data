import React from 'react';

export default function WeekHours() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  const boxStyle = {
    width: '60px',
    height: '22px',
    border: '2px solid #333',
    backgroundColor: '#e5e7eb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    flexShrink: 0
  };
  
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'row'}}>
      {days.map((day, dayIndex) => (
        <div key={dayIndex} style={{ marginBottom: '30px'}}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{day}</h3>
          <div style={{ display: 'flex', gap: '28px'}}>
            <div style={{ gap: '4px', flexWrap: 'nowrap', overflowX: 'auto' }}>
              {Array.from({ length: 24 }, (_, hourIndex) => (
                <div 
                  key={hourIndex} 
                  style={boxStyle}
                  className="box"
                  title={`${day} - ${hourIndex}:00`}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#93c5fd'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#e5e7eb'}
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