export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'centered',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'black',
    values: [
      {name: 'black', value: '#000'},
      {name: 'white', value: '#FFF'},
      {name: 'pink', value: '#F1337F'},
    ]
  }
}
