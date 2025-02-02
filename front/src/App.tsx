// Libraries
import { useEffect } from 'react';

// Local
import Navigator from 'modules/Navigator';
import Theme from 'modules/Theme';

function App() {
  useEffect(() => {
    Theme.set();
  }, []);

  const navigate = new Navigator();
  return navigate.setup();
}

export default App;
