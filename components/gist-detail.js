import React from 'react'
//import {Link} from '../routes'

const Link = ({children}) => (<span>{children}</span>);

//import Partials from 'components/partials'
import GistStats from './gist-stats'
const getEmbedUrl = (gist) =>{
  return `<script src='https://gist.github.com/${gist.owner.login}/${gist.id}.js'></script>`
}

/*
const GistFile = ({file}) => {
  console.log('render', file);
  return (
    <div className='gist__file my-2'>
      <div className='gist__filename p-3'>
        <a href={file.raw_url} title={file.filename} target='_blank'>
          {file.filename}
        </a>
      </div>
      <div className='gist__code p-2'>
        <pre><code>{file.content}</code></pre>
      </div>
    </div>
  )
}
*/
import GistUser from './gist-user';
import GistFile from './gist-file';

export default class GistDetail extends React.Component {
  componentDidMount(){
    console.log('componentDidMount', this);
  }
  componentWillUpdate(){
    let gist = this.props.gist;
    //log('componentWillUpdate', this);
    let script = document.createElement('script');
    //script.setAttribute('src', `https://gist.github.com/${gist.owner.login}/${gist.id}.js`);
    //this.gistFiles.appendChild(script);
  }
  render(){
    const props = this.props
    const gist = this.props.gist
    const files = []
    if(!gist){
      return (<div></div>)
    }
    //log('render', this, gist);
    for(let key in gist.files){
      files.push(gist.files[key])
    }
    const firstFile = files[0];

    return (<div>
      <div className='gist gist--detail m-2'>
        <div className='d-flex justify-content-between gist__user'>
          <GistUser gist={gist}/>
          <GistStats gist={gist}/>

          <div className='gist__actions'>
            <button className='btn btn-sm btn-outline-secondary mr-2'>
              <i className='fa fa-pencil'></i>
            Edit</button>
            <button className='btn btn-sm btn-outline-danger mr-2'>
              <i className='fa fa-trash'></i>
              Delete
            </button>
            <button className='btn btn-sm btn-outline-secondary mr-2'>
              <i className='fa fa-star'></i>
              Star
            </button>
          </div>
        </div>
        <div className="gist__files"
          ref={(el) => { this.gistFiles = el; }} >
        </div>
        {/* repeat each file*/}
        {files && files.map((obj, index) =>
          <GistFile key={index.toString()} file={obj} />
        )}
      </div>
    </div>)
  }
}
