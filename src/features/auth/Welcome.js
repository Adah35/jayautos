import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import useTitle from '../../hooks/useTitle'

const Welcome = () => {

    const { username, isManager, isAdmin } = useAuth()

    useTitle(`JayAutos: ${username}`)


    const content = (
        <section className="welcome container">



            <h1>Welcome {username}!</h1>
            <div className='inner_wrapper'>

                <div className='box'><p><Link to="/dash/notes">View techNotes</Link></p></div>

                <div className='box'><p><Link to="/dash/notes/new">Add New techNote</Link></p></div>

                {(isManager || isAdmin) && <div className='box'><p><Link to="/dash/users">View User Settings</Link></p></div>}

                {(isManager || isAdmin) && <div className='box'><p><Link to="/dash/users/new">Add New User</Link></p></div>}

            </div>
        </section>
    )

    return content
}
export default Welcome