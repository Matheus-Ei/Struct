interface HeaderProps {
    title: string;
    description: string;
}

const Header = ({ title, description }: HeaderProps) => {
    return (
        <div className="flex flex-col items-center justify-center w-full mb-8 text-center">
            <h1 className="font-bold text-lg text-center">{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default Header;
