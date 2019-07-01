import React from 'react';
const axios = require("axios");


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            file: null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        //console.log(e.target.files);
        //console.log(e.target.files[0]);
        let file = e.target.files;
        this.setState({file:file});

       
    }

    onFormSubmit(e){
        //console.log(e);
        console.log(this.state.file);
        e.preventDefault();
        
        const formData = new FormData();
        for(const file of this.state.file){

        formData.append('myImage',file);}
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("http://localhost:3001/upload",formData,config)
        
            .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
        });
     
    }


    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <h1>File Upload</h1>
                <input type="file" multiple  name="myImage" onChange= {this.onChange}/>
                <button type="submit">Upload</button>
            </form>
        );
    }
}

   


export default App;
