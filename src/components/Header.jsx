import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor
  }

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2><span className='crossed-out'>Feedback</span> Feedyourcat UI</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#e56b6f'
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string
}

export default Header
