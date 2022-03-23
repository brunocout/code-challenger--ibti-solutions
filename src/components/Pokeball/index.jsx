import './index.css'
import SvgIcon from '../SvgIcon';

const Pokeball = ({ pokemon }) => {
    return ( 
        <div className="pokeball">
            <img src={pokemon} />
            <SvgIcon color="white"/>
        </div>
     );
}
 
export default Pokeball;