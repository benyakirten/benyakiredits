import { capitalize } from "@Util/strings";

export const shapeNames: Array<AnimationShape> = ['circle', 'square', 'star', 'cross', 'rhombus', 'frame', 'arrow', 'trapezoid', 'random']
export const shapeAsOptions: Array<SelectOption> = shapeNames.map(shape => (
    { value: shape, display: capitalize(shape) }
));


const shapes: IShape = {
    circle: "circle(50% at 50% 50%)",
    square: "polygon(25% 25%, 75% 25%, 75% 75%, 25% 75%)" ,
    star: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
    cross: "polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)",
    rhombus: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
    frame: "polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)",
    arrow: "polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)",
    trapezoid: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
    random: "random"
}

export default shapes;