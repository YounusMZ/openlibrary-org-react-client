import React from 'react'
import './trendingbooks.css'

async function fetchTrending(url) {
    console.log("started")
    return fetch(url, {
            method: 'GET',
            mode: 'cors',
    })
        .then(res => res.json())
        .then((data) => {
            console.log("ended")
            return data;
        }
        )
}


function getBookProperty(books, limit, property) {
    let bookNames = [];
    if (books) {
        for (let index = 0; index <= limit; index++) {
            bookNames.push(books.works[index][property]);
        }
    }

    return bookNames
}

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
        let fetchedJSON = await fetchTrending(this.trendingUrl);

        let bookNames = getBookProperty(fetchedJSON, this.getBooksLimit, 'title');
        let bookId = getBookProperty(fetchedJSON, this.getBooksLimit, 'cover_edition_key');

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
                    <img className="trending-images" key={id} alt={bookName} src={imageURL} onClick={() => window.open(bookURL)} />  
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
            <div>
                <div className="Trending">
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