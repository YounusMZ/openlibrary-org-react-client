export async function fetchContent(url) {
    return fetch(url, {
        method: 'GET',
        mode: 'cors', 
    })
        .then(res => res.json())
        .then(data => data)
    }

export function getBookProperty(books, startlimit, endlimit, property) {
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

export function getTrendingBooksProperty(books, limit, property) {
    let bookNames = [];
    if (books) {
        for (let index = 0; index <= limit; index++) {
            bookNames.push(books.works[index][property]);
        }
    }
    return bookNames
}