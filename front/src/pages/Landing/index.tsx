// Local
import PriceEmulation from "./PriceEmulation";
import Customization from "./Customization";
import Header from "./Header";

const Integration = () => {
    return (
        <div className="flex flex-col items-center w-screen h-screen">
            <Header />

            <div className="flex flex-col w-3/4 items-start justify-start gap-14 mt-10">
                <Customization />
                <PriceEmulation />
            </div>
        </div>
    );
};

export default Integration;
