import { MainContext } from '../components/MainContext';
import { useContext, useEffect } from 'react';
import GetStarted from '../Landing/components/GetStarted';
import Welcome from '../Landing/components/Welcome';
import Header from '../Landing/components/Header';
import InfoPanels from '../Landing/components/InfoPanels';
import InfoCycle from '../Landing/components/InfoCycle';

function Landing({queue}) {
  let { currentUser, setCurrentUser, setFlash, setDonators } = useContext(MainContext);
  
  useEffect(() => {
    queue !== undefined ?
      setDonators(queue) : ''
  }, []);

  return (
    <div style={{marginBottom: '5%'}}>
      <Header />
      <InfoPanels />
      <InfoCycle />
        </div>
    )
};

Landing.getInitialProps = async (ctxt) => {
  let { req, query } = ctxt;
  let { queue } = query;
  return { queue };
};

export default Landing;
