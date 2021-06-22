interface IItemWithId {
    id: string | number;
    [key: string]: any;
}

type CSSHex = {
    r: string;
    g: string;
    b: string;
}

type RGBNumber = {
    r: number;
    g: number;
    b: number;
};

type Coords = {
    x: number;
    y: number;
}

type Corners = {
    topLeft: Coords;
    topRight: Coords;
    bottomRight: Coords;
    bottomLeft: Coords;
}

type CoordsWithId = Coords & {
    id: number;
}

type LazyComponent = React.LazyExoticComponent<React.FC<{}>> | undefined;

type LazyComponentContainer = {
    [key: string]: React.LazyExoticComponent<React.ComponentType<any>>;
}