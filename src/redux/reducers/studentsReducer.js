const inicialState = {
    listStudents: [],
    studentsDuplicate: [],
}
const studentsReducer = (state = inicialState, action) => {

    switch (action.type) {
        case 'LOAD_STUDENT':
            return {
                ...state,
                listStudents: action.payload,
                studentsDuplicate: action.payload
            }
        default:
            return state
    }
}

export default studentsReducer