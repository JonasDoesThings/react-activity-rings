/// <reference types="react" />
import type { ActivityRing, ActivityRingContainerOptions } from '../types';
interface ActivityRingsProps {
    rings: ActivityRing[];
    options?: ActivityRingContainerOptions;
}
export default function ActivityRings(props: ActivityRingsProps): JSX.Element;
export {};
