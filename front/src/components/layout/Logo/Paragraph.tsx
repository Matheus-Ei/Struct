import Text from "../../common/Text";

interface ParagraphProps {
    theme: any;
    text?: string;
}

const Paragraph = ({ text, theme }: ParagraphProps) => {
    const paragraph = text ? (
        <Text text={text} color={theme.middle} containerWidth={75} size={1} />
    ) : null;

    return paragraph;
};

export default Paragraph;
