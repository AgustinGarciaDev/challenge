import axios from 'axios';
import { toast } from 'react-toastify';

const studentsActions = {

    getStudents: () => {

        return async (dispatch, getState) => {
            try {
                const response = await axios.get('https://api.hatchways.io/assessment/students')
                const dataModicate = [...response.data.students]
                dataModicate.map(item => item['tags'] = [])
                dispatch({ type: 'LOAD_STUDENT', payload: dataModicate })
            } catch (error) {
                toast.error('Failed to connect to server', { toastId: 'error' });
            }
        }
    },

}

export default studentsActions