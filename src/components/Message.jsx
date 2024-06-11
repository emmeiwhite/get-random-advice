import PropTypes from 'prop-types'

export default function Message({ count }) {
  return (
    <div className="message">
      <p className="text-gray-700 text-lg">Total advices read: {count}</p>
    </div>
  )
}

Message.propTypes = {
  count: PropTypes.number.isRequired
}
