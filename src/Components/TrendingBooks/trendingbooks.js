import React from 'react'
import './trendingbooks.css'
import './../../util/book'
import { fetchContent, getTrendingBooksProperty } from './../../util/book';


class Trending extends React.Component{
    constructor(props){
        super(props)
        this.getBooksLimit = 7;
        this.trendingUrl = "https://openlibrary.org/subjects/fantasy.json";
        this.state = {
            "imagelist": [],
        }
    }

    componentDidMount() {
        this.fetchImage();
        console.log("mounted");
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
                <div className="Trending-books-individual" key={id + "div"}>
                    <img className="trending-images" key={id} src={imageURL} onClick={() => window.open(bookURL)} />  
                    <p className="bookName" key={bookName} onClick={() => window.open(bookURL)}>
                        {bookName}
                    </p>
                </div>
            )
        })

        return bookItems;
    }

    render() { 
        return (
            <div className="Trending">
                <div>
                    <h2 id="Trending-heading">Trending Books</h2>
                </div>
                <div className="Trending-books">
                    {this.state.imagelist}
                </div>
            </div>
        )
    }
}

export default Trending;