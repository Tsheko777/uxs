import { Header } from "../components/landing/header"

export const Home = () => {
    const date = new Date();
    return (
        <div className='container-fluid'>
            <div className='row bg'>
                <Header />
                <div className='col-lg-10 mx-auto'>
                    <p>&copy; UXSHORTENER {date.getFullYear()}</p>
                </div>
            </div>

        </div>
    )
}