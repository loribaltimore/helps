import { MainContext } from '../components/MainContext';
import { useContext } from 'react';
import GetStarted from '../Landing/components/GetStarted';
import Welcome from '../Landing/components/Welcome';
import getSession from '../functions/getSession';

function Landing(props) {
    let { currentUser, setCurrentUser, setFlash } = useContext(MainContext);

  return (
      
    <div>
      <Welcome />
           <GetStarted />
        </div>
    )
};


export default Landing;
