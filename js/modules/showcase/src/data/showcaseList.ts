const showcaseList: Array<ShowcaseItem> = [
    {
        path: '../../Display/ClickInBox/ClickInBox.component',
        id: "sh1",
        name: "Flash from Click",
        description: `As a part of the Recovering Grandeur website, this animation
        creates a node inside of the parent element at the point of
        contact (the click, using the event data generated) for several
        seconds then unmounts as soon as the animation is complete. The
        effect of this animation is to have an element respond to a
        click. For example, a button may flash from wherever it was
        clicked. The shape, length and color can be customized under the
        controls. The purpose of this animation in Recovering Grandeur
        is to highlight the disconnect between purposeful actions and
        ones done in imitation of someone else's actions (such as highly
        corporate, PR-related, or ones made by Machine Learning models
        with no human oversight) without any of the insight or
        meaningfulness of the original. The animation occurs on the
        entire HTML body instead of within a host element, which renders
        the effect purposeless.`,
        meta: ["click", "box", "interaction", "flash", "contain", "recovering", "grandeur", "delusions", "form", "2021"]
    },
    {
        path: '../../Display/ConcentricCircles/ConcentricCircles.component',
        id: "sh2",
        name: "Mouseover Canvas",
        description: `This widget is an HTML canvas that, upon the mouse heading over,
        shows a fan out of concentric circles radiating from the nearet
        corner. The canvas has three important elements: a starting
        color, and ending color and a number of circles. An average
        offset color is determined for every circle, forming a
        low-definition gradient (depending on the number of circles).
        Another property is the radius delta, how much larger the radius
        of each circle is relative to the last. It effectively controls
        the speed of the animation. As to why this exists, I tried to
        think of the most gaudy, useless, over-the-top animation and
        implemented this. What's the point? It's what the machines of
        Recovering Grandeur think that humans will like. bright,
        flashing lights, right?`,
        meta: ["circle", "circles", "mouseover", "canvas", "color", "colors", "recovering", "grandeurr", "delusion", "form", "2021"]
    }
];

export default showcaseList;