interface ImageProps {
    src: string;
}

const Image = ({ src }: ImageProps) => {
    return <img src={src} />;
};

export default Image;
