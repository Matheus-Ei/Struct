import Emoji from "components/Emoji";

interface HeaderProps {
    name?: string;
    emoji?: number | null;
    description?: string;
}

const Header = ({ name, emoji, description }: HeaderProps) => {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex gap-6 items-center justify-center">
                {emoji ? (
                    <Emoji symbol={emoji} style={{ fontSize: "2rem" }} />
                ) : (
                    <p style={{ fontSize: "2rem" }}>&#x2753;</p>
                )}
                <h1 className="font-bold text-2xl w-fit">{name}</h1>
            </div>

            <p className="text-lg">{description}</p>
        </div>
    );
};

export default Header;
