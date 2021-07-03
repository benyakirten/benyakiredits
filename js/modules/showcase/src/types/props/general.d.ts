type ColorTheme = {
    theme?: 'dark' | 'light';
}

type HoverModalProps = GenericChild & ColorTheme & {
    direction?: 'left' | 'right';
}

type ColorBoxProps = {
    width: number;
    height: number;
    color: string;
    text?: string;
}

type ListProps = {
    title: string;
}