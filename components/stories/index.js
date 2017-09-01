import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import '../../static/css/bootstrap.min.css';
import '../../static/css/github.min.css';
import '../../static/css/main.css';


// TODO: Components
import GistListItem from '../gist-list-item';
import GistStats from '../gist-stats';
import GistDetail from '../gist-detail';
import GistForm from '../gist-form';
import GistFileInput from '../gist-file-input';
import GistUser from '../gist-user';

// TODO: Mocks
const mockGist = require('./mock-gist');
const mockFile = mockGist.files[Object.keys(mockGist.files)[0]];

// TODO: Stories
storiesOf('Button', module).add('with text', () => (
	<button onClick={action('clicked')}>Hello Button</button>
)).add('with some emoji', () => (
	<button onClick={action('clicked')}>😀 😎 👍 💯</button>
));


storiesOf('Gist / List Item', module).add('with content', () => (<GistListItem gist={mockGist} compact='true'/>));
storiesOf('Gist / Detail', module).add('default', () => (<GistDetail gist={mockGist}/>));
//storiesOf('Gist / Form', module).add('default', () => (<GistForm gist={mockGist}/>));
storiesOf('Gist / File Input', module).add('default', () => (<GistFileInput file={mockFile}/>));
//storiesOf('Gist / Stats', module).add('default', () => (<GistStats gist={mockGist}/>));
//storiesOf('Gist / User', module).add('default', () => (<GistUser gist={mockGist}/>));
