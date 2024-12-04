import React from 'react';
import {ActivityRings} from '../index';
import type {Meta, StoryObj} from '@storybook/react';
import type {ActivityRing} from '../types';

const meta: Meta<typeof ActivityRings> = {
  title: 'Example/ActivityRings',
  component: ActivityRings,
};
export default meta;

type Story = StoryObj<typeof ActivityRings>;
const Template: Story = {
  render: (args) => <ActivityRings rings={args.rings} options={args.options} />,
};

export const SimpleThreeRings: Story = {
  ...Template,
  args: {
    rings: [
      {filledPercentage: 0.5, color: '#fa0e5a'},
      {filledPercentage: 0.75, color: '#afff02'},
      {filledPercentage: 0.25, color: '#00fff8'},
    ],
    options: {
      containerHeight: '75vh',
    },
  },
};

export const SimpleTwoRings: Story = {
  ...Template,
  args: {
    rings: [
      {filledPercentage: 0.5, color: '#fa0e5a'},
      {filledPercentage: 0.75, color: '#afff02'},
    ],
    options: {
      containerHeight: '75vh',
      backgroundOpacity: 0.3,
    },
  },
};

export const SimpleALotOfRings: Story = {
  ...Template,
  args: {
    rings: [
      {filledPercentage: 0.5, color: '#fa0e5a'},
      {filledPercentage: 0.75, color: '#afff02'},
      {filledPercentage: 0.25, color: '#00fff8'},
      {filledPercentage: 0.1, color: '#b91c1c'},
      {filledPercentage: 1, color: '#00FF00'},
      {filledPercentage: 0.5, color: '#0284c7'},
      {filledPercentage: 0.25, color: '#f123ff'},
      {filledPercentage: 0.1, color: '#FF0000'},
      {filledPercentage: 0.75, color: '#0000FF'},
    ],
    options: {
      containerHeight: '75vh',
    },
  },
};

export const CustomizedThreeRings: Story = {
  args: {
    rings: [
      {filledPercentage: 0.5, color: '#fa0e5a'},
      {filledPercentage: 0.75, color: '#afff02'},
      {filledPercentage: 0.25, color: '#00fff8'},
    ],
    options: {
      containerHeight: '75vh',
      animationTimingFunction: 'cubic-bezier(.47,1.64,.36,-0.19)',
      animationDurationMillis: 2000,
      backgroundOpacity: 0.2,
    },
  },
};

export const CustomBackgroundColor: Story = {
  parameters: {
    backgrounds: {
      default: 'Gray',
    },
  },
  args: {
    rings: [
      {filledPercentage: 0.5, color: '#dd0e39', backgroundColor: '#f3f3f4'},
      {filledPercentage: 0.75, color: '#03897c', backgroundColor: '#f3f3f4'},
      {filledPercentage: 0.25, color: '#0586aa', backgroundColor: '#f3f3f4'},
    ],
    options: {
      containerHeight: '75vh',
      backgroundOpacity: 1,
    },
  },
};

export const CustomRingWidth: Story = {
  ...Template,
  args: {
    rings: [
      {filledPercentage: 0.5, color: '#fa0e5a', ringWidth: 3},
      {filledPercentage: 0.75, color: '#afff02', ringWidth: 12},
      {filledPercentage: 0.25, color: '#00fff8', ringWidth: 3},
    ],
    options: {
      containerHeight: '75vh',
    },
  },
};

export const Gallery = () => {
  return (
    <>
      <ActivityRings rings={[
        {filledPercentage: 0.5, color: '#fa0e5a'},
        {filledPercentage: 0.75, color: '#afff02'},
        {filledPercentage: 0.25, color: '#00fff8'},
      ]} options={{containerWidth: '10vw'}} />
      <ActivityRings rings={[
        {filledPercentage: 0.6, color: '#F1337F'},
        {filledPercentage: 0.65, color: '#00FFF8'},
      ]} options={{containerWidth: '10vw'}} />
      <ActivityRings rings={[
        {filledPercentage: 0.15, color: '#00FF00'},
        {filledPercentage: 0.66, color: '#0284c7'},
        {filledPercentage: 1, color: '#f123ff'},
        {filledPercentage: 0.25, color: '#FF0000'},
      ]} options={{containerWidth: '10vw'}} />
      <ActivityRings rings={[
        {filledPercentage: 0.6, color: '#F00'},
        {filledPercentage: 0.65, color: '#0F0'},
        {filledPercentage: 0.7, color: '#00F'},
      ]} options={{containerWidth: '10vw'}} />
    </>
  );
};

export const RandomGallery = () => {
  const generateRingData = (amount: number) => {
    return Array<ActivityRing>(amount).fill({filledPercentage: 0, color: ''}).map(() => ({filledPercentage: Math.min(Math.random()+0.1, 1), color: `rgb(${Math.random()*254}, ${Math.random()*254}, ${Math.random()*254})`}));
  };

  return (
    <>
      <ActivityRings rings={generateRingData(Math.ceil(Math.random()*4+2))} options={{containerWidth: '10vw'}} />
      <ActivityRings rings={generateRingData(Math.ceil(Math.random()*4+2))} options={{containerWidth: '10vw'}} />
      <ActivityRings rings={generateRingData(Math.ceil(Math.random()*4+2))} options={{containerWidth: '10vw'}} />
      <ActivityRings rings={generateRingData(Math.ceil(Math.random()*4+2))} options={{containerWidth: '10vw'}} />
    </>
  );
};
