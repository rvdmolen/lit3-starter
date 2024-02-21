import { html } from 'lit';
import '../src/app-test.js';

export default {
  title: 'AppTest',
  component: 'app-test',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <app-test
      style="--app-test-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </app-test>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
