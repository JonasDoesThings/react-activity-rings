import React from 'react';
import type {ActivityRing, ActivityRingContainerOptions} from '../types';
import * as styles from './ActivityRings.module.css';

interface ActivityRingsProps {
    rings: ActivityRing[];
    options?: ActivityRingContainerOptions;
}

const defaultOptions: ActivityRingContainerOptions = {
  containerHeight: '100%',
  containerWidth: '100%',
  paddingBetweenRings: 0.75,
  initialRadius: 30,
  animationDurationMillis: 1000,
  animationTimingFunction: 'ease-in-out',
  backgroundOpacity: 0.4,
};

export default function ActivityRings(props: ActivityRingsProps) {
  const options = Object.assign({}, defaultOptions, props.options) as Required<ActivityRingContainerOptions>;

  const totalRingRadius = props.rings.reduce((totalWidth, ring) =>
    totalWidth + (ring.ringWidth ?? 12) + options.paddingBetweenRings,
  0);
  const viewBoxSize = 2 * (options.initialRadius + totalRingRadius);

  // pre-calculate the sum of all more-inner rings for the rings, so we can size the more outer rings correctly
  const summedUpRingWidths = props.rings.map((sum => ring => sum += (ring.ringWidth ?? 12))(0));

  return (
    <svg viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} height={options.containerHeight} width={options.containerWidth}>
      <g>
        {props.rings.map((ring, index) => (
          <InnerActivityRing
            key={index}
            index={index}
            ring={ring}
            options={options}
            summedUpRingWidthsBefore={index === 0 ? 0 : summedUpRingWidths[index-1]}
          />
        ))}
      </g>
    </svg>
  );
}

interface InnerActivityRingProps {
  // the index of the ring, where 0 is the innermost
  index: number;
  // the ActivityRing properties object
  ring: ActivityRing;
  // the ActivityRingContainer options object
  options: Required<ActivityRingContainerOptions>;
  // the summed up ring widths of all before rings, used for sizing the ring correctly in respect to the other more inner-rings
  summedUpRingWidthsBefore: number;
}

function InnerActivityRing(props: InnerActivityRingProps) {
  const ringWidth = props.ring.ringWidth ?? 12;
  const radius = props.options.initialRadius + props.summedUpRingWidthsBefore + ringWidth/2 + (props.index * props.options.paddingBetweenRings);
  const dashArrayPart = (Math.min(0.999, props.ring.filledPercentage)) * (2*radius*Math.PI);

  return (
    <>
      <circle cx='50%' cy='50%' r={radius} stroke={props.ring.backgroundColor ?? props.ring.color} strokeOpacity={props.options.backgroundOpacity} strokeWidth={12} className={styles.innerActivityRingBackground} />
      <circle cx='50%' cy='50%' r={radius} strokeDasharray={`${dashArrayPart} ${'9'.repeat(props.index+4)}`} stroke={props.ring.color} strokeWidth={12} style={{animationDuration: `${props.options.animationDurationMillis}ms`, animationTimingFunction: props.options.animationTimingFunction}} className={styles.innerActivityRing} />
      <circle cx='50%' cy='50%' r={radius} stroke={props.ring.backgroundColor ?? props.ring.color} strokeOpacity={props.options.backgroundOpacity} strokeWidth={ringWidth} className={styles.innerActivityRingBackground} />
      <circle cx='50%' cy='50%' r={radius} strokeDasharray={`${dashArrayPart} ${'9'.repeat(props.index+4)}`} stroke={props.ring.color} strokeWidth={ringWidth} style={{animationDuration: `${props.options.animationDurationMillis}ms`, animationTimingFunction: props.options.animationTimingFunction}} className={styles.innerActivityRing} />
    </>
  );
}
