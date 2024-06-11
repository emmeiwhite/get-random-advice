import PropTypes from 'prop-types'

export default function Error({ error }) {
  return <h3 className="text-red-900 text-xl font-semibold my-8">{error}</h3>
}

Error.propTypes = {
  error: PropTypes.string
}
