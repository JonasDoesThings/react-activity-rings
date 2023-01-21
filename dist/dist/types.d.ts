export interface ActivityRingContainerOptions {
    containerHeight?: string;
    containerWidth?: string;
    paddingBetweenRings?: number;
    initialRadius?: number;
    animationDurationMillis?: number;
}
export interface ActivityRing {
    filledPercentage: number;
    color: string;
}
