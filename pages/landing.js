import { MainContext } from '../components/MainContext';
import { useContext } from 'react';

function Landing(props) {
    let { test } = useContext(MainContext);

    return (
        <div>
          Hola Mis Amigos
        </div>
    )
};

export default Landing;