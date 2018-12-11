import React, { Component } from 'react';
import './App.css';
import { post } from 'axios'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: []
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }

  onFormSubmit(e) {
    e.preventDefault()
    this.fileUpload(this.state.file).then((response) => {

      // console.log(response);
      // console.log(this.state.file[0])
      // console.log(this.state.file[1])

    })
  }

  onChange(e) {
    this.setState({ file: e.target.files })

    console.log(e.target.files)
    console.log(e.target.files[0])
    console.log(e.target.files[1])
  }

  fileUpload(file) {
    const url = '/uploaddufichier';
    const formData = new FormData();
    formData.append('monfichier', file[0]);
    formData.append('monfichier', file[1]);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    return post(url, formData, config).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });
  }


  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" name="monfichier" accept='image/png' size='3000000' onChange={this.onChange} multiple />
        <button type="submit">Upload</button>
      </form>
    )
  }

}

export default App;
