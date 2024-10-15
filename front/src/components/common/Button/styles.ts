export const getStyle = (theme: any, isClicked: boolean) => {
    const style = isClicked
        ? {
              borderColor: theme.secondary,
              backgroundColor: theme.primary,
          }
        : { borderColor: theme.primary, backgroundColor: theme.secondary };

    return style;
};
