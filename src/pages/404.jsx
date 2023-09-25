import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="flex justify-center min-h-screen items-center flex-col">
            <h1>Oops!</h1>
            <p>maaf mang, Salah halaman pian. nang ini error</p>
            <p>{error.statusText || error.message}</p>
        </div>
    );
};

export default ErrorPage;