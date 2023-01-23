export interface ActivityRingContainerOptions {
    // value of the css height property of the rings-container, defaults to 100%
    containerHeight?: string;
    // value of the css width property of the rings-container, defaults to 100%
    containerWidth?: string;
    // the padding between the single rings
    paddingBetweenRings?: number;
    // the radius of the innermost ring
    initialRadius?: number;
    // the duration of the appearance animation in milliseconds
    animationDurationMillis?: number;
    // the opacity of the ring background
    backgroundOpacity?: number;
}

export interface ActivityRing {
    // a float between 0-1 representing the filled-ness in percent
    filledPercentage: number;
    // a css-property compatible color string of the ring i.e. "#FF0000" or "rgb(255, 0, 0)"
    color: string;
}
