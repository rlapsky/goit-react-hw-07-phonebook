import axios from "axios";
import actions from "../redux/actions";

axios.defaults.baseURL = "http://localhost:4040";

const fetchContacts = () => async (dispatch) => {
  dispatch(actions.fetchContactRequest());
  try {
    const { data } = await axios.get("/contacts");
    console.log(data);
    dispatch(actions.fetchContactSuccess(data));
  } catch (error) {
    dispatch(actions.fetchContactError(error));
  }
};

const addContact =
  ({ name, number }) =>
  (dispatch) => {
    const contact = { name, number };

    dispatch(actions.addContactRequest());

    axios
      .post("/contacts", contact)
      .then(({ data }) => dispatch(actions.addContactSuccess(data)))
      .catch((error) => dispatch(actions.addContactError(error)));
  };

const delContact = (contactId) => (dispatch) => {
  dispatch(actions.delContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(actions.delContactSuccess(contactId)))
    .catch((error) => dispatch(actions.delContactError(error)));
};

export default { addContact, delContact, fetchContacts };
