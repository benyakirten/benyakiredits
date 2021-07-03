type DescriptionProps = {
    description: string;
    meta: Array<string>;
}

type ButtonProps = {
    onClick: () => void;
}

type GridProps = {
    children: React.ReactNode;
    gridColumnGap: number;
    gridRowGap: number;
    itemWidth?: number;
}