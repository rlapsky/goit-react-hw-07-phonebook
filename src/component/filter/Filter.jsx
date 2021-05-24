import React from 'react'
import { connect } from 'react-redux'
import actions from '../../redux/actions'
import contactSelectors from "../../redux/selectors"


 function Filter({filterHandler,filter}) {
    return (
        <label>find
        <input
            value = {filter}
            onChange={filterHandler} />
        </label>
    )
}

const mapStateToProps = (state) => ({
    value: contactSelectors.filterValue(state)
})

const mapDispatchToProps = dispatch => ({
    filterHandler: (e) => dispatch(actions.filterContact(e.target.value))
    
})



export default connect(mapStateToProps,mapDispatchToProps )(Filter) 