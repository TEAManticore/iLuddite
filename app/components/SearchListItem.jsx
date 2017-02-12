const React = require('react');
import { Link } from 'react-router';

const SearchListItem = (props) => {

  const hideButton = (e) => {
    let toHide = e.target
    console.log(toHide)
    toHide.classList.add("hide-button")
  }

  return (
    <li className="search-list-item list-group-item">
      <div className="row">
        <div className="col-md-2">
          <Link to={`/books/${props.bookid}`}>
            <img src={props.image} alt={props.title}/>
          </Link>
        </div>
        <div className="col-md-7">
          <Link to={`/books/${props.bookid}`}>
            <h4>{`${props.title.substr(0, 50)}`}<br /><small>by {`${props.author.substr(0, 65)}`}</small></h4>
          </Link>
          <p>{props.summary}</p>
        </div>
        <div className="col-md-3">
          
            <button
              className="btn btn-primary"
              onClick={(e) => { props.addBookToQueue.call(null, props.bookid); hideButton(e) }}
              id="addBookToQueueButton"
            >
              <span className="glyphicon glyphicon-plus">&nbsp;</span>
              +Queue
            </button>
          
            <button
              className="btn btn-primary"
              onClick={(e) => { props.makeCurrentBook.call(null, props.bookid); hideButton(e) }}
              id="addBookToCurrentButton"
            >
              <span className="glyphicon glyphicon-book">&nbsp;</span>
              Make Current
            </button>
          
            <button
              className="btn btn-primary"
              onClick={(e) => { props.addBookToPastReads.call(null, props.bookid); hideButton(e) }}
              id="addBookToPastReadsButton"
            >
              <span className="glyphicon glyphicon-book">&nbsp;</span>
              +Past Reads
            </button>
          
            <button
              className="btn btn-primary"
              onClick={(e) => { props.addBookToFavorites.call(null, props.bookid); hideButton(e) }}
              id="addBookToFavoritesButton"
            >
              <span className="glyphicon glyphicon-book">&nbsp;</span>
              +Favorites
            </button>
         
        </div>
      </div>
    </li>
  )
}

SearchListItem.defaultProps = {
  image: '../public/assets/default-img.jpg',
  title: 'Unknown Title',
  author: 'Unknown Author',
}

module.exports = SearchListItem;
