import React from 'react';
import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery'


class App extends Component {
    state = {
        searchQuery: '',

    };

    handleFormSubmit = searchQuery => {
        this.setState({ searchQuery });
    };

    render() {
        return (
            <div>
                < Searchbar onSubmit={this.handleFormSubmit} />
                < ImageGallery searchQuery={this.state.searchQuery}/>
            </div>

        )
    };
}




export default App;
