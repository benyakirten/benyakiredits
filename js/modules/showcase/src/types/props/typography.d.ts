type TitleProps = ElementChild & {
    type: 'h1' | 'lead' | 'section';
}

type SubtitleProps = StringChild & {
    theme?: 'dark' | 'light';
}