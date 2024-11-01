interface InformationsProps {
    title: string | undefined;
    description: string | undefined;
}

const Informations = ({ title, description }: InformationsProps) => {
    return (
        <>
            <div>
                <h3 className="text-xl">Title</h3>
                <h1 className="text-3xl font-bold">{title}</h1>
            </div>
            <div>
                <h3 className="text-xl w-5/6">Description</h3>
                <p className="text-lg w-5/6">{description}</p>
            </div>
        </>
    );
};

export default Informations;
