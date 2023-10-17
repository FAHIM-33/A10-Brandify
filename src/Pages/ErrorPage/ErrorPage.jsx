import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
        <h1 className="md:text-6xl text-4xl text-center mt-20 text-amber-400">Oops...</h1>
        <h1 className="text text-3xl md:text-5xl text-center mt-8">Page not found</h1>
        <h1 className="text-5xl text-center mt-8">Error <span className="text-red-600">404</span></h1>
        <Link className="border-2 border-low rounded-lg mx-auto block w-fit mt-8 text-2xl" to="/"><button className="p-3 md:p-6">Go Home</button></Link>
    </div>
    );
};

export default ErrorPage;