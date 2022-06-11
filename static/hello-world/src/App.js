import React, { useEffect, useState } from 'react';
// import { invoke } from '@forge/bridge';
import Home from './component/Home';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // invoke('getText', { example: 'my-invoke-variable' }).then(setData);
  }, []);

  return (
    <div>
     <Home/>
    </div>
  );
}

export default App;
