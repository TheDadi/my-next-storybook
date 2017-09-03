import React from 'react'
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/github';



export default class GistFileInput extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			index: 0,
			file: {
				filename: 'default.js',
				ext: 'js',
				content: `'use strict';
const myName = 'Jonnie';
const sayHello = (name) =>{
	console.log('Hello ' + name);
};`
			}
		};
		console.log('GistFileInput', props);
		this._handleClickDelete = this._handleClickDelete.bind(this);
		this._handleChange = this._handleChange.bind(this);
		this._handleIndentChange = this._handleIndentChange.bind(this);
		this._handleFilenameChange = this._handleFilenameChange.bind(this);
	}


	/**
	 * _handleClickDelete - Handle removing file
	 *
	 * @param  {type} e description
	 * @return {type}   description
	 */
	_handleClickDelete(e) {
		console.log('_handleClickDelete', e, this.props.key);
		if (this.props.onDelete) {
			this.props.onDelete(this.state.file);
		}
	}


	/* Handle updating the state content */
	_handleChange(e) {
		var state = this.state;
		state.file.content = e;
		this.setState(state)
		console.log('_handleChange', e)
	}

	//Handle chaning the tab mode
	_handleIndentChange(e){
		console.log('_handleIndentChange', e)
		console.warn('Change indent to', e.target.value)
	}

	//Handle changing filename and updateing the language based on extension.
	_handleFilenameChange(e){
		console.log('_handleFilenameChange', e.target.value)
		if(!e.target.value){
			return;
		}
		this.setState({
			file: {
				filename: e.target.value,
				content: '',
				ext: (`${e.target.value}`).split('.').pop()
			}
		})
	}

	render() {
		const file = this.props.file;

		console.log('render', file);
		return (
			<div>
				<div className="gist__file-toolbar d-flex p-2 justify-content-between">
					<div>
						<div className="input-group">
							<input type="text"
								onBlur={this._handleFilenameChange}
								className="form-control"
								defaultValue={file.filename}
							placeholder="Filename including extension..." />
							<span className="input-group-btn">
								<button className="btn btn-outline-danger btn-delete-gist-file"
									type="button"
									title="Delete File"
									onClick={(e) => this._handleClickDelete(e)}>
									<i className="fa fa-trash-o"></i>
									Delete
								</button>
							</span>
						</div>
					</div>
					<div className="hidden-sm-down">
						<div className="gist__file-actions d-flex">
							<select className="form-control select-sm js-code-indent-mode mr-2" onChange={this._handleIndentChange}>
								<optgroup label="Indent mode">
									<option value="space">Spaces</option>
									<option value="tab">Tabs</option>
								</optgroup>
							</select>
							<select className="form-control select-sm js-code-indent-width mr-2">
								<optgroup label="Indent size">
									<option value="2">2</option>
									<option value="4">4</option>
									<option value="8">8</option>
								</optgroup>
							</select>
							<select className="form-control select-sm js-code-wrap-mode">
								<optgroup label="Line wrap mode">
									<option value="off">No wrap</option>
									<option value="on">Soft wrap</option>
								</optgroup>
							</select>
						</div>
					</div>
				</div>
				<div className="gist__file-code">
					<AceEditor
						value={this.state.file.content}
						height= '15rem'
						width='100%'
						setOptions={{
							enableBasicAutocompletion: false,
							enableLiveAutocompletion: false,
							tabSize: 4,
							fontSize: 12,
							showGutter: true
						}}
						mode="javascript"
						theme="github"
						onChange={this._handleChange}
						name="UNIQUE_ID_OF_DIV"
						editorProps={{$blockScrolling: true}}
								/>
						</div>
			</div>
		)
	}
}
