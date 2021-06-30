import { useEffect, useReducer, useState } from "react"
import { connect } from "react-redux"
import CardStudent from "../Components/CardStudent"
import studentsActions from "../redux/actions/studentsActions"
import InputForm from '../Components/InputForm'

const Home = (props) => {

    const { getStudents, listStudents } = props
    const [inputDate, setInputDate] = useReducer(
        (state, newState) => ({ ...state, ...newState }), {
        name: '',
        tag: '',
    })
    const [listStudentCopy, setListStudentCopy] = useState([])

    useEffect(() => {
        if (listStudents.length === 0) {
            getStudents()
        } else {
            setListStudentCopy(listStudents)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listStudents])

    useEffect(() => {
        filterData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputDate])

    const filterData = () => {
        let valueName = inputDate.name.toLowerCase().trim()
        let valueTag = inputDate.tag.trim().toLowerCase()
        let result = []
        if (inputDate.name !== '' && inputDate.tag !== '') {
            result = listStudents.filter(student => {
                return (student.lastName.trim().toLowerCase().indexOf(valueName) === 0 || student.firstName.trim().toLowerCase().indexOf(valueName) === 0) &&
                    student.tags.find(tag => tag.trim().toLowerCase().indexOf(valueTag) === 0)
            })
        } else if (inputDate.tag !== '') {
            result = listStudents.filter(student => {
                return student.tags.find(tag => tag.trim().toLowerCase().indexOf(valueTag) === 0)
            })

        } else if (inputDate.name !== '') {
            result = listStudents.filter(student => {
                return student.lastName.trim().toLowerCase().indexOf(valueName) === 0 || student.firstName.trim().toLowerCase().indexOf(valueName) === 0
            })
        } else if (inputDate.name === '' && inputDate.tag === '') {
            return setListStudentCopy(listStudents)
        }
        setListStudentCopy(result)
    }


    const handleInput = (e) => {
        const { name, value } = e.target
        setInputDate({ [name]: value })
    }

    return (

        <main className='container'>
            <div className='containerCards'>
                <InputForm
                    inputDate={inputDate}
                    handleInput={handleInput}
                />
                <div>
                    {
                        listStudents.length === 0
                            ? <div className='centerElement'><h1>loading</h1></div>
                            : listStudentCopy.length === 0
                                ? <div className="centerElement">
                                    <h2>Search not found. Try again</h2>
                                    <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_iojp9xve.json" style={{ width: "20vw" }} speed="0.7" loop autoplay></lottie-player>
                                </div>
                                : listStudentCopy.map(student => {
                                    return <CardStudent key={student.id} student={student} />
                                })
                    }

                </div>
            </div>
        </main>
    )
}

const mapStateToProps = (state) => {
    return {
        listStudents: state.students.listStudents,
    }
}

const mapDispatchToProps = {
    getStudents: studentsActions.getStudents,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)