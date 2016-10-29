const React = require('react');
import { Link } from 'react-router';

const SearchListItem = (props) => {
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
              onClick={props.addBookToQueue.bind(null, props.bookid)}
              id="addBookToQueueButton"
            >
              <span className="glyphicon glyphicon-plus">&nbsp;</span>
              +Queue
            </button>
          
            <button
              className="btn btn-primary"
              onClick={props.makeCurrentBook.bind(null, props.bookid)}
              id="addBookToCurrentButton"
            >
              <span className="glyphicon glyphicon-book">&nbsp;</span>
              Make Current
            </button>
          
            <button
              className="btn btn-primary"
              onClick={props.addBookToPastReads.bind(null, props.bookid)}
              id="addBookToPastReadsButton"
            >
              <span className="glyphicon glyphicon-book">&nbsp;</span>
              +Past Reads
            </button>
          
            <button
              className="btn btn-primary"
              onClick={props.addBookToFavorites.bind(null, props.bookid)}
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
