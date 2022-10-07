const initialState = [
    {
        id : 0,
        name:"Divu",
        number:987654321,
        email:"divu@gm.com"
    },
    {
        id:1,
        name:"koladara",    
        number:1234567890,
        email:"div@gm.com"
    },
];

const ContactReducer = (state=initialState,action) =>{
    switch(action.type){
    case "ADD_CONTACT":  
    state = [...state,action.payload]
    return state;

    case "EDIT_CONTACT":
    const edit_state= state.map(contact=>contact.id === action.payload ? action.payload : contact);
    state = edit_state;
    return state;

    case "DELETE_CONTACT":
    const deleteitem =state.filter((contact) =>contact.id !== action.payload && contact);
    state=deleteitem;
    return state;

        default: return state;
    }
};

export default ContactReducer;

