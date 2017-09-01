import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('Nav', module)
  .add('default', () => (
    <div>This is the default nav</div>
  ))
  .add('with active item', () => (
    <div>This is the nav with active item</div>
  ));
