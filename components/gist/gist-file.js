import React from 'react';
import axios from 'axios'
import hljs from 'highlightjs'
import '../../static/css/github.min.css';

export default class GistFile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: false
		}
		this.defaultProps = {
			file: {},
			maxFileSize: 3500
		}
	}

	_loadRawContents(url) {
		return axios(url).then(resp => resp.data);
	}

	componentWillMount() {
		let {file} = this.props;
		let {size} = file;
		let maxFileSize = this.defaultProps.maxFileSize;
		if (size < maxFileSize) {
			this._loadRawContents(file.raw_url).then((text) => {
				file.content = text
				this.setState({file: file})
			})
		} else {
			console.warn('Not fetching file due to size', size, maxFileSize);
		}
	}

	componentDidUpdate() {
		hljs.highlightBlock(this.codeBlock);
	}

	handleClick(e) {
		this.setState((prevState, state) => {
			return {
				collapsed: !prevState.collapsed
			}
		})
	}

	render() {
		const file = this.props.file;
		return (
			<div className="card gist gist__file" id={file.filename}>
				<header className="card-header gist__filename p-2 d-flex justify-content-between align-items-center" onClick={(e) => this.handleClick(e)}>
					<a href={`#${file.filename}`}>
						<i className="fa fa-file-code-o"></i>
						{file.filename}</a>
					<a href={file.raw_url} className="btn  btn-outline-secondary btn-sm" target="_blank">Raw</a>
				</header>
				<section className="card-block p-0">
					<pre className='gist__code'><code className={file.language}  ref={(code) => { this.codeBlock = code; }}>{file.content}</code></pre>
				</section>
			</div>
		)
	}
}
