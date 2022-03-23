import Header from '../../components/Header';
import MyTeam from '../../components/MyTeam';
import Pokedex from '../../components/Pokedex';
import cbutton from '../../assets/svg/cbutton-op.svg'
import dbutton from '../../assets/svg/dbutton-op.svg'
import './index.css'

const Create = () => {
    return ( 
        <div className="create-container">
            <Header title='teams' href='/'/>
            <div className='main-create'>
                <MyTeam/>
                <div className='button-container'>
                    <button><img src={cbutton} width={50}/></button>
                    <button><img src={dbutton} width={50}/></button>
                </div>
                <Pokedex />
            </div>
        </div>
     );
}
 
export default Create;