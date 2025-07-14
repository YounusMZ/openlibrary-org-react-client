import './book.css'
import {useState, useEffect } from 'react'

async function fetchContent(url) {
    return fetch(url, {
        method: 'GET',
        mode: 'cors', 
    })
        .then(res => res.json())
        .then(data => data)
}

function getBookProperty(books, startlimit, endlimit, property) {
    let bookProperty = [];
    if (books) {
        for (let index = startlimit; index <= endlimit; index++) {
            if (books.docs[index][property]) { 
                bookProperty.push(books.docs[index][property]);
            }
        }
    }

    return bookProperty
}


function Book(props) {
    const [fetchResult, setFetched] = useState();
    const [result, setResult] = useState();
    const [pageNumber, setPageNumber] = useState(0);


    const backClicked = () => {
        if ((pageNumber - 8) >= 0) {
            setPageNumber(pageNumber - 8);
        }
    }

    const nextClicked = () => {
        if (fetchResult != null) {
            if ((pageNumber + 8) < fetchResult.docs.length)
                setPageNumber(pageNumber + 8);
        }
    }

    useEffect(() => {
        const currentBook = props.currentBook;
        const bookAPIAccess = new URL("https://openlibrary.org/search.json?");
        const currentBookSplit = currentBook.replace(" ", "+");
        const bookAPIAccessParams = new URLSearchParams(bookAPIAccess.search)

        bookAPIAccessParams.set("title", currentBookSplit)
        bookAPIAccess.search = bookAPIAccessParams;


        const getItems = (bookImages, bookNames) => {
            let test = bookImages.map((id, index) => {
                let bookName = bookNames.at(index);
                let imageURL = `https://covers.openlibrary.org/b/olid/${id}-M.jpg`;
                let bookURL = `https://openlibrary.org/works/${id}/${bookName}`;
                return (
                    <div className="Trending-books-individual" key={id + "div"}>
                        <img key={id} className="trending-images" alt={bookName} src={imageURL} onClick={() => window.open(bookURL)} />
                        <p className="bookName" onClick={() => window.open(bookURL)}>
                            {bookName}
                        </p>
                    </div>
                )
            })

            return test;
        }

        const fetchBook = async (url) => {
            let fetched = await fetchContent(url);
            let bookNames = getBookProperty(fetched, pageNumber, pageNumber + 7, 'title');
            let bookImages = getBookProperty(fetched, pageNumber, pageNumber + 7, 'cover_edition_key');
            let combined = getItems(bookImages, bookNames);

            setResult(combined);
            setFetched(fetched)
        }

        fetchBook(bookAPIAccess);
    }, [props, pageNumber])


    return (
        <div>
            <div className="pageButtons-div">
                <button className="pageButtons" onClick={() => { backClicked() }}>Back</button>
                <button className="pageButtons" onClick={() => { nextClicked() }}>Next</button>
            </div>
            <div className="Trending-books" >
                {result}
            </div>
        </div>
    )
}

export default Book