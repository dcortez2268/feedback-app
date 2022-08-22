import PropTypes from 'prop-types'

function FeedbackStats({ feedback }) {
  let average = feedback.reduce((a, b) => a + b.rating, 0) / feedback.length
  //sets average to 1 decimal place, gets rid of decimal if it is zero
  average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4> Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
}

export default FeedbackStats
