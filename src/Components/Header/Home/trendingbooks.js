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

function getBookNames(books, limit) {
    let bookNames = []
    if (books) {
        for (let index = 0; index <= limit; index++) {
            bookNames.push(books.works[index].title)
        }
    }

    return bookNames
}

function getBookImages(books, limit) {
    let keys = []

    if (books) {
        for (let index = 0; index <= limit; index++) {
            keys.push(books.works[index].cover_edition_key)
        }

        return keys
    }
}

class Trending extends React.Component{
    constructor(props){
        super(props)
        this.getBooksLimit = 7;
        this.trendingUrl = "https://openlibrary.org/trending/daily.json";
        this.bookUrl = "https://openlibrary.org/api/books?"
        this.state = {
            "imagelist": [],
        }
    }

    componentDidMount() {
        this.fetchImage()
    }

    fetchImage = async () => {
        let fetchedJSON = await fetchTrending(this.trendingUrl);
        console.log("fetching", fetchedJSON);

        let images = getBookImages(fetchedJSON, this.getBooksLimit);
        let bookNames = getBookNames(fetchedJSON, this.getBooksLimit);

        this.setState({
            "imagelist": this.getItems(images, bookNames)
        }, () => {
            console.log(this.state.imagelist)
        })
    }

    getItems = (bookImages, bookNames) => {
        let index = -1;
        let test = bookImages.map((key) => {
            index += 1;
            let imageURL = "https://covers.openlibrary.org/b" + `/olid` + `/${key}` + `-M` + ".jpg";
            return (
                <div className="trending-generated-items">
                    <img className="trending-images" key={key} alt={bookNames.at(index)} height="350px" width="180px" src={imageURL} onClick="" />
                    <p className="bookName" onClick="">
                        {bookNames.at(index)}
                    </p>
                </div>
            )
        })
        return test;
    }
    


    render() { 
        return (
            <div className="Trending-books">
                {this.state.imagelist}
            </div>
        )
    }
}


export default Trending;