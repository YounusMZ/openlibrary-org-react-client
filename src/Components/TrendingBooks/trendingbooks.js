import React from 'react'
import './trendingbooks.css'
import './../../util/book'
import { fetchContent, getTrendingBooksProperty } from './../../util/book'


class Trending extends React.Component{
    constructor(props){
        super(props);
        this.getBooksLimit = 7;
        this.trendingUrl = "https://openlibrary.org/subjects/fantasy.json";
        this.state = {
            "imagelist": [],
        };
    }

    componentDidMount() {
        this.fetchImage();
    }

    fetchImage = async () => {
        let fetchedJSON = await fetchContent(this.trendingUrl);

        let bookNames = getTrendingBooksProperty(fetchedJSON, this.getBooksLimit, 'title');
        let bookId = getTrendingBooksProperty(fetchedJSON, this.getBooksLimit, 'cover_edition_key');

        this.setState({
            "imagelist": this.getItems(bookId, bookNames)
        })
    }


    getItems = (bookId, bookNames) => {
        let bookItems = bookId.map((id, index) => {
            let bookName = bookNames.at(index);
            let imageURL = `https://covers.openlibrary.org/b/olid/${id}-M.jpg`;
            let bookURL = `https://openlibrary.org/works/${id}/${bookName}`;
            return (
                <div className="books-individual" key={id + "div"} data-testid="book-grid">
                    <a href={bookURL} style={{textDecoration : 'none'}}>
                        <img className="images" key={id} src={imageURL} />  
                        <p className="bookName" key={bookName} >
                            {bookName}
                        </p>
                    </a>
                </div>
            )
        })

        return bookItems;
    }

    render() { 
        return (
            <div className="book-list-container">
                <div>
                    <h2 id="book-list-heading">Trending Books</h2>
                </div>
                <div className="books">
                    {this.state.imagelist}
                </div>
            </div>
        )
    }
}

export default Trending;