const React = require('react');
const axios = require('../axios');
import { browserHistory } from 'react-router';


var Review = ({currReviews, handleSubmit, handleChange, incRating, rating, text}) => {
  return (
    <div className="reviewContainer">
      <div className="makeReview col-md-12">
        <h3>Quick! Your Thoughts?</h3>
        <form>
          <input className="reviewForm" onChange={(e) => handleChange(e)}
           value={text} placeholder="(type here)" />
          <div className="rateField">
            <input className= "thumbBtn" type="image" onClick={(e) => incRating(e)}
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Symbol_thumbs_up_white.svg/371px-Symbol_thumbs_up_white.svg.png" /> 
            <div className="rateText">{rating} out of 5 Thumbs Up</div>
          </div>
          <button className="reviewBtn btn btn-info" onClick={(e) => handleSubmit(e)}>ADD REVIEW</button>
        </form>
      </div>
      <div className="readReview col-md-12">
        <h3>What Your Friends Thought:</h3>
          <div className="reviewFeed"> 
          { 
            currReviews.map((rev, i) => 
              <div className="oneRev" key={i}>
                <img className="revImage" src={rev.image} />
                <div className="revRatings">{
                  [...Array(rev.rating)].map(r => 
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Symbol_thumbs_up_white.svg/371px-Symbol_thumbs_up_white.svg.png"/>
                  )
                }</div>
                <h5 className="revText">{rev.content}</h5>
              </div>
            )
          }
          </div>
      </div>
    </div>
  )
}

module.exports = Review;
