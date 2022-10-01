import React from 'react';
import { Link } from 'react-router-dom';


class Main_page extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imageURL: '',
        };

        this.handleUploadImage = this.handleUploadImage.bind(this);
    }

    handleUploadImage(ev) {
        ev.preventDefault();

        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        data.append('filename', this.fileName.value);

        fetch('http://localhost:8000/upload', {
            method: 'POST',
            body: data,
        }).then((response) => {
            response.json().then((body) => {
                this.setState({ imageURL: `http://localhost:8000/${body.file}` });
            });
        });
    }

    render() {
        return (
            <div className=''>
                <div className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800'>
                    <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                        <h1>Instructions: </h1>
                        <ul>
                            <li>1. Delete the first few rows till the table headers.</li>
                            <li>2. Delete Money In and Money Out rows</li>
                        </ul>
                    </span>
                </div>

                <form onSubmit={this.handleUploadImage} className='h-screen flex flex-col items-center justify-center'>
                    <div className='text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
                        <input ref={(ref) => { this.uploadInput = ref; }} type="file" className='' />
                    </div>
                    <div className=''>
                        <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" className='p-4 w-full ' variant=""/>
                    </div>
                    <br />
                    <div>
                        <Link to="/overall">
                            <button className='text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Upload</button>
                        </Link>
                    </div>
                    {/* <img src={this.state} alt="img" /> */}
                </form>
            </div>
        );
    }
}

export default Main_page;