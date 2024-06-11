import PropTypes from 'prop-types'

export default function Advice({ advice }) {
  return <h3 className="text-blue-900 text-xl font-semibold my-8">{advice}</h3>
}

Advice.propTypes = {
  advice: PropTypes.string
}
