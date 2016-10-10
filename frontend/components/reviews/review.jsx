import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const Review = ({ currentUserReview, otherUserReviews }) => {

  const reviewList = () => {
    const allReviews = otherUserReviews.map((review) => {
      if (review.body) {
        return(
          <div key={review.id} className='details-desc'>
            <StarRatingComponent
              name='rating'
              className='rating'
              starCount={5}
              editing={false}
              value={review.rating} />
            <p>{review.body}</p>
          </div>
        );
      } else {
        return <div></div>;
      }
    });

    if (currentUserReview[0]) {
      allReviews.unshift(
        <div key={currentUserReview[0].id} className='details-desc'>
          <StarRatingComponent
            name='rating'
            className='rating'
            starCount={5}
            editing={false}
            value={currentUserReview[0].rating} />
          <p>{currentUserReview[0].body}</p>
        </div>
      );
    }
    return allReviews;
  };

  return(
    <div className='reviews'>
      <h1 className='details-header'>Member Reviews</h1>
      {reviewList()}
    </div>
  );
};

export default Review;
