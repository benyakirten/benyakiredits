type ColorTheme = {
    theme?: 'dark' | 'light';
}

type HoverModalProps = GenericChild & ColorTheme & {
    direction?: 'left' | 'right';
}

type DescriptionProps = {
    description: string;
    meta: Array<string>;
}