import React, { useEffect, useState } from 'react';

function Unmount() {
  const [count, setCount] = useState(0);
  const [Data, setData] = useState(20);

  console.log('Fcycle');
  
  useEffect(() => {
      console.log('Mounting');
      
    }, []);

    
  useEffect(() => {
      console.log('Update');

      return()=>{
        console.log('unmount');
      }
    }, [count]);
    
    

  return (
    <div>
        {console.log('render')}
      <h1>Count: {count}</h1>
      <h1>Data: {Data}</h1>
      <button onClick={() => setCount(count + 1)}>Click Here Count</button><br /><br />
      <button onClick={() => setData(Data + 1)}>Click Here Data</button><br /><br />
    </div>
  );
}

export default Unmount;
