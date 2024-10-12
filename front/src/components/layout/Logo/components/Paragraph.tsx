import Text from "../../../common/Text";

interface ParagraphProps {
    theme: any;
    text?: string;
}

const Paragraph = ({ text, theme }: ParagraphProps) => {
    const paragraph = text ? (
        <Text text={text} color={theme.middle} size={1.2} containerWidth={75} />
    ) : null;

    return paragraph;
};

export default Paragraph;
