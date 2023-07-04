import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">

            <main className="public__main">
                <div className="inner_wrapper">
                    <h1>JayAuto <span className="nowrap">Repairs!</span></h1>
                    <p>Staff Portal</p>
                    <br />
                    <p>Owner: Joshua Adah Ogbole</p>
                </div>
            </main>
            <footer>
                <Link to="/login" className='btn-login '>Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public