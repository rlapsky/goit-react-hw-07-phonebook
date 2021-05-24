import React from 'react';
import { connect } from 'react-redux';
import operations from '../../redux/operations';
import selectors from "../../redux/selectors"

const ContactList = ({contacts, deleteContact}) => {
    return (
        <ul>
            {contacts.map(({id, name, number}) =>
                <li key={id}>
                    <p>{name}:{number}</p>
                    <button id={id} onClick={()=>deleteContact(id)}>Delete</button>
                </li>)}
        </ul>
    );
}


 


const mapStateToProps = ( state) => ({
    
    contacts: selectors.getFilterContact(state)

  
})  

const mapDispatchToProps = dispatch=>({
    deleteContact: id => dispatch(operations.delContact(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);