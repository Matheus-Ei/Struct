import Emoji from "components/Emoji";

interface HeaderProps {
    name?: string;
    emoji?: string | null;
    description?: string;
}

const Header = ({ name, emoji, description }: HeaderProps) => {
    return (
        <div className="flex flex-col items-start gap-4 mb-6">
            <div className="flex gap-6 items-center">
                <Emoji symbol={emoji} style={{ fontSize: "3rem" }} />

                <h1 className="font-bold text-4xl w-fit">{name}</h1>
            </div>

            <p className="text-lg">{description}</p>
        </div>
    );
};

export default Header;
