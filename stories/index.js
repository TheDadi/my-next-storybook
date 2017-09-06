import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import '../components/styles';


// TODO: Components
import Gists from '../components/gists/index';
import GistBanner from '../components/gist/gist-banner';
import GistListItem from '../components/gist';
import GistDetail from '../components/gist/gist-detail';
import GistForm from '../components/gist/gist-form';


// TODO: Mocks
const mockGist = require('./mock-gist');
const mockGists = require('./mock-gists.json');
const mockFile = mockGist.files[Object.keys(mockGist.files)[0]];


// TODO: Stories
storiesOf('Button', module).add('with text', () => (
	<button onClick={action('clicked')}>Hello Button</button>
)).add('with some emoji', () => (
	<button onClick={action('clicked')}>😀 😎 👍 💯</button>
));

storiesOf('Gists', module).add('default', () => (<Gists gists={mockGists}/>));
storiesOf('Gist / Banner', module).add('default', () => (<GistBanner/>));
storiesOf('Gist / List Item', module).add('with content', () => (<GistListItem gist={mockGist}/>));
storiesOf('Gist / Detail', module).add('default', () => (<GistDetail gist={mockGist}/>));
storiesOf('Gist / Form', module).add('default', () => (<GistForm gist={mockGist}/>));
