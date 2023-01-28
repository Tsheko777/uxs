import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    return (
        <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center text- dark' id="error-page">
            <div>
                <h1 className='text-dark text-center'> Oops!</h1 >
                <p className='text-dark'>Sorry, an unexpected error has occurred.</p>
                <p className='text-dark'>{error}</p>
            </div>

        </div>
    );
}