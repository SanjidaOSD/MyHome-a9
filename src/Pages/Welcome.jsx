import { FcLikePlaceholder } from "react-icons/fc";

const Welcome = () => {
    return (
        <div>
            <h3 className=" flex gap-3 text-3xl font-bold text-center justify-center mt-16"><FcLikePlaceholder className="h-[50px] w-[50px]"></FcLikePlaceholder>Welcome to Our Home Family<FcLikePlaceholder  className="h-[50px] w-[50px]"></FcLikePlaceholder></h3>
       <p>View Our Gallery</p>
        </div>
    );
};

export default Welcome;