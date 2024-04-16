import { Helmet } from "react-helmet";

const NotFound = () => {
    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>User Not Found</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <div className="text-center">
            <h1 className="text-[200px] md:text-[400px] font-bold">
                404
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold">
                NOT FOUND
            </h2>
            
        </div>
        </div>
    );
};

export default NotFound;