# react-activity-rings
**Apple-inspired Activity Rings for React.**  

![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@jonasdoesthings/react-activity-rings?color=%2384cc16&style=flat-square)
![NPM](https://img.shields.io/npm/l/@jonasdoesthings/react-activity-rings?color=%2384cc16&style=flat-square)


![demo banner gif](.assets/activityrings_banner.gif)

## Installation
using npm:  
`npm install @jonasdoesthings/react-activity-rings`  
using yarn:  
`yarn add @jonasdoesthings/react-activity-rings`  

## Examples
Storybook Demo: https://k4ds3.github.io/react-activity-rings/

```tsx
import {ActivityRings} from "@jonasdoesthings/react-activity-rings";

// Basic example with no custom settings
<ActivityRings rings={[
  {filledPercentage: 0.5, color: '#fa0e5a'},
  {filledPercentage: 0.75, color: '#afff02'},
  {filledPercentage: 0.25, color: '#00fff8'},
]} />
```
```tsx
// Example with custom settings
<ActivityRings 
  rings={[
    {filledPercentage: 0.1, color: 'rgb(255, 0, 0)'},
    {filledPercentage: 1, color: '#FF0000'},
    {filledPercentage: 0.5, color: '#00fff8'},
  ]} 
  options={{
    initialRadius: 20,
    animationDurationMillis: 1500,
    containerHeight: '10vh',
  }} 
/>
```

More usage-examples can be found under [./src/components/ActivityRings.stories.tsx](./src/components/ActivityRings.stories.tsx).

## API
### ActivityRings
| Property | Type                         | Required | Description                                          |
|----------|------------------------------|----------|------------------------------------------------------|
| rings    | ActivityRing[]               | yes      | An array of ActivityRing objects containing the data |
| options  | ActivityRingContainerOptions | no       | An object containing general settings                |

### ActivityRing
| Property         | Type   | Required | Description                                                      |
|------------------|--------|----------|------------------------------------------------------------------|
| filledPercentage | number | yes      | A float between 0 and 1 representing the progress in percent     |
| color            | string | yes      | A css-compatible color string i.e. `#FF00FF` or `rgb(0, 255, 0)` |

### ActivityRingContainerOptions
| Property                | Type   | Default     | Description                                                                                                              |
|-------------------------|--------|-------------|--------------------------------------------------------------------------------------------------------------------------|
| containerHeight         | string | 100%        | A css-compatible height value of the container                                                                           |
| containerWidth          | string | 100%        | A css-compatible width value of the container                                                                            |
| paddingBetweenRings     | number | 0.75        | The padding between each of the rings                                                                                    |
| initialRadius           | number | 30          | The radius of the innermost ring                                                                                         |
| animationDurationMillis | number | 1000        | The duration of the initial animation in milliseconds                                                                    |
| animationTimingFunction | string | ease-in-out | A [css-compatible animation timing function](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function) |
| backgroundOpacity       | number | 0.4         | A float between 0 and 1 representing the opacity of the background-ring color in percent                                 |

(All fields are optional)

## License
The project is licensed under the MIT license.    
Check the [LICENSE](./LICENSE) file, for the full legal-notice.
