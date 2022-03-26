import Header from '../../components/Header';
import MyTeam from '../../components/Team/MyTeam';
import './index.css'

const Teams = () => {
    return ( 
        <div className="team-container">
            <Header title='create new team' href='/create'/>
            <div className='main-team'>
                <MyTeam className='bar'/>
                <MyTeam className='bar'/>
                <MyTeam className='bar'/>
            </div>
        </div>
     );
}
 
export default Teams;