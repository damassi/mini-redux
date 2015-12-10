import React, { PropTypes } from 'react'
import debounce from 'lodash.debounce'
import search, { MIN_INPUT_LENGTH } from 'actions/search'
import connect from 'components/utils/connect'
import LoadIndicator from 'components/LoadIndicator'

const SearchInput = ({ dispatch, loading, query }) => {

  const _dispatch = debounce((value) =>
    dispatch(search(value)), 300)

  const handleChange = (event) => {
    const {
      value
    } = event.currentTarget

    _dispatch(value)
  }

  const textStatusColor = query.length < MIN_INPUT_LENGTH
    ? '#999'
    : '#333'

  return (
    <div>
      { loading &&
        <LoadIndicator /> }

      <input
        placeholder='Search'
        type='text'
        defaultValue={query}
        onChange={handleChange}
        style={{
          ...styles.input,
          color: textStatusColor
        }}
      />

    </div>
  )
}

SearchInput.propTypes = {
  query: PropTypes.string.isRequired,
  loading: PropTypes.bool
}

export default connect(SearchInput, (state) => ({
  loading: state.loading,
  query: state.query
}))

const styles = {
  input: {
    border: 0,
    borderBottom: '1px solid #ccc',
    borderColor: '#e3e3e3',
    display: 'block',
    fontSize: '18px',
    margin: '30px',
    outline: 0,
    width: '30%'
  }
}
