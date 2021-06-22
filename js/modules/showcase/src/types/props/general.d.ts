type StringChild = {
    children: string;
};

type ElementChild = {
    children: JSX.Element | React.FC;
}

type GenericChild = {
    children: string | JSX.Element;
}

type OnClickChild = {
    onClick: () => void
};