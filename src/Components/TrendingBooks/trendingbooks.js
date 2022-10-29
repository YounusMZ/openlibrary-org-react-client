import React from 'react'
import './trendingbooks.css'

async function fetchTrending(url) {
    return fetch(url, {
            method: 'GET',
            mode: 'cors',
    })
        .then(res => res.json())
        .then(data => data)
}


function getBookProperty(books, limit, property) {
    let bookNames = []
    if (books) {
        for (let index = 0; index <= limit; index++) {
            bookNames.push(books.works[index][property])
        }
    }

    return bookNames
}

class Trending extends React.Component{
    constructor(props){
        super(props)
        this.getBooksLimit = 7;
        this.trendingUrl = "https://openlibrary.org/trending/daily.json";
        this.state = {
            "imagelist": [],
        }
    }

    componentDidMount() {
        this.fetchImage()
    }

    fetchImage = async () => {
        let fetchedJSON = await fetchTrending(this.trendingUrl);

        let bookNames = getBookProperty(fetchedJSON, this.getBooksLimit, 'title');
        let images = getBookProperty(fetchedJSON, this.getBooksLimit, 'cover_edition_key');

        this.setState({
            "imagelist": this.getItems(images, bookNames)
        })
    }

    getItems = (bookImages, bookNames) => {
        let index = -1;
        let test = bookImages.map((key) => {
            index += 1;
            let bookName = bookNames.at(index);
            let imageURL = `https://covers.openlibrary.org/b/olid/${key}-M.jpg`;
            let bookURL = `https://openlibrary.org/works/${key}/${bookName}`;
            return (
                <div key={key + "div"}>
                    <img className="trending-images" key={key} alt={bookName} src={imageURL} onClick={() => window.open(bookURL)} onMouseEnter={() => this.props.bookInfoClick(bookName, imageURL)} />  
                    <p className="bookName" key={bookNames.at(index)} onClick={() => window.open(bookURL)}>
                        {bookName}
                    </p>
                </div>
            )
        })

        return test;
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