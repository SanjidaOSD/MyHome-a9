import { Helmet } from "react-helmet";
import { FcLikePlaceholder } from "react-icons/fc";

const Welcome = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Welcome</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h3 className=" flex gap-3 text-3xl font-bold text-center justify-center mt-16 h-2/4"><FcLikePlaceholder className="h-[50px] w-[50px]"></FcLikePlaceholder>Welcome to Our Home Family<FcLikePlaceholder className="h-[50px] w-[50px]"></FcLikePlaceholder></h3>
        </div>
    );
};

export default Welcome;