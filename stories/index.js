import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
//import { withInfo } from '@storybook/addon-info';

import '../static/css/bootstrap.min.css';
import '../static/css/github.min.css';
import '../static/css/main.css';


// TODO: Components
import Gists from '../components/gists';
import GistBanner from '../components/gist-banner';
import GistListItem from '../components/gist/gist-list-item';
import GistDetail from '../components/gist/gist-detail';
import GistForm from '../components/gist/gist-form';

//import GistStats from '../gist-stats';
//import GistFileInput from '../gist-file-input';
//import GistUser from '../gist-user';

// TODO: Mocks

const mockGist = require('./mock-gist');
const mockGists = [ mockGist ];
const mockFile = mockGist.files[Object.keys(mockGist.files)[0]];

// TODO: Stories
storiesOf('Button', module).add('with text', () => (
	<button onClick={action('clicked')}>Hello Button</button>
)).add('with some emoji', () => (
	<button onClick={action('clicked')}>😀 😎 👍 💯</button>
));

/*
storiesOf('Gist / List Item', module)
  .add('simple info',
    withInfo('Simple gist list item.')(() =>
      <GistListItem gist={mockGist}/>
    )
  )
*/
storiesOf('Gists', module).add('default', () => (<Gists gists={mockGists}/>));
storiesOf('Gist / Banner', module).add('default', () => (<GistBanner/>));
storiesOf('Gist / List Item', module).add('with content', () => (<GistListItem gist={mockGist}/>));
storiesOf('Gist / Detail', module).add('default', () => (<GistDetail gist={mockGist}/>));
storiesOf('Gist / Form', module).add('default', () => (<GistForm gist={mockGist}/>));
//storiesOf('Gist / File Input', module).add('default', () => (<GistFileInput file={mockFile}/>));
//storiesOf('Gist / Stats', module).add('default', () => (<GistStats gist={mockGist}/>));
//storiesOf('Gist / User', module).add('default', () => (<GistUser gist={mockGist}/>));
