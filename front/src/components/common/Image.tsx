interface ImageProps {
    src: string;
    width?: string;
}

const Image = ({ src, width }: ImageProps) => {
    return (
        <div className="flex items-center h-3/4">
            <img src={src} className={`max-h-fit max-w-${width}`} />
            ;
        </div>
    );
};

export default Image;
