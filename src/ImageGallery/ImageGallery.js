import { Component } from 'react';
import styles from './ImageGallery.module.css';
import apiSearchService from '../apiSearchService';
import ImageGalleryItem from '../ImageGalleryItem';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class ImageGallery extends Component{
    state = {
        searchQueryResult: null,
        error: null,
        status: Status.IDLE
    }

    componentDidUpdate(prevProps, prevState) {
    const prevSearchQuery = prevProps.searchQuery;
    const nextSearchQuery = this.props.searchQuery;

    if (prevSearchQuery !== nextSearchQuery) {
      this.setState({ status: Status.PENDING });

        apiSearchService
          .fetchSearchQuery(nextSearchQuery)
          .then(searchQueryResult => this.setState({ searchQueryResult, status: Status.RESOLVED }))
          .catch(error => this.setState({ error, status: Status.REJECTED }));
    }
    };


    render() {
        const { searchQueryResult, status } = this.state;
    if (status === 'idle') {
      return <div></div>;
    }

    if (status === 'pending') {
      return <div></div>;
    }

    if (status === 'rejected') {
      return <div></div> ;
    }

    if (status === 'resolved') {
        return (
            <ul className={styles.ImageGallery}>
                {searchQueryResult.hits.map(img => (
                    <ImageGalleryItem img={img}/>
                    // <li key={img.id} className="ImageGalleryItem">
                    //     <img src={img.webformatURL} alt="" className="ImageGalleryItem-image" />
                    // </li>
                ))}
            </ul>

        );
    }

    }
}

export default ImageGallery;
