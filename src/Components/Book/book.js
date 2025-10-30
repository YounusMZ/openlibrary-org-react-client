import './book.css';
import {useState, useEffect } from 'react';
import { getBookProperty, fetchContent } from './../../util/book';
import { useLocation } from 'react-router';


function Book() {
    const [fetchResult, setFetched] = useState();
    const [result, setResult] = useState();
    const [pageNumber, setPageNumber] = useState(0);
    const bookName = useLocation().state?.bookName;

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
        const currentBook = bookName ? bookName : "testing";
        const bookAPIAccess = new URL("https://openlibrary.org/search.json?");
        const currentBookSplit = currentBook.replace(" ", "+");
        const bookAPIAccessParams = new URLSearchParams(bookAPIAccess.search);

        bookAPIAccessParams.set("title", currentBookSplit);
        bookAPIAccess.search = bookAPIAccessParams;


        const getItems = (bookImages, bookNames) => {
            let test = bookImages.map((id, index) => {
                let bookName = bookNames.at(index);
                let imageURL = `https://covers.openlibrary.org/b/olid/${id}-M.jpg`;
                let bookURL = `https://openlibrary.org/works/${id}/${bookName}`;
                return (
                    <div className="books-individual" key={id + "div"} data-testid="book-grid">
                        <a href={bookURL} style={{textDecoration: 'none'}}>
                            <img key={id} className="images" src={imageURL} />
                            <p className="bookName">
                                {bookName}
                            </p>
                        </a>
                    </div>
                )
            })

            return test;
        }

        const fetchBook = async (url) => {
            let fetched = await fetchContent(url);;
            let bookNames = getBookProperty(fetched, pageNumber, pageNumber + 7, 'title');
            let bookImages = getBookProperty(fetched, pageNumber, pageNumber + 7, 'cover_edition_key');
            let combined = getItems(bookImages, bookNames);

            setResult(combined);
            setFetched(fetched);
        }
        
        fetchBook(bookAPIAccess);
    }, [pageNumber])


    return (
        <div className="top-book-container">
            <div className="pageButtons-div">
                <button className="pageButtons" onClick={() => { backClicked() }}>Back</button>
                <button className="pageButtons" onClick={() => { nextClicked() }}>Next</button>
            </div>
            <div className="books" >
                {result}
            </div>
        </div>
    )
}

export default Book;