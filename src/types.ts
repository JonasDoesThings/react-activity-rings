export interface ActivityRingContainerOptions {
    containerHeight?: string;
    containerWidth?: string;
    paddingBetweenRings?: number;
    initialRadius?: number;
    animationDurationMillis?: number;
}

export interface ActivityRing {
    // a float between 0-1 representing the filled-ness in percent
    filledPercentage: number;
    color: string;
}
