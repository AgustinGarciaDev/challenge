import { useEffect, useState } from "react"
import { toast } from "react-toastify"

const CardStudent = (props) => {
    const { city, email, firstName, lastName, pic, skill, grades, tags } = props.student
    const [average, setAverage] = useState(0)
    const [visible, setVisible] = useState(false)
    const [tag, setTag] = useState('')

    useEffect(() => {
        averageStudent()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const averageStudent = () => {
        const gradesConvert = grades.reduce((a, b) => {
            return parseInt(a) + parseInt(b)
        })
        setAverage((gradesConvert / grades.length))
    }

    const changeInput = (e) => {
        setTag(e.target.value)
    }
    const addTag = (e) => {
        if (e.key === 'Enter') {
            if (tag.trim().charAt(0) === '' || tag === '') {
                toast.error('I couldn not enter an empty tag', { toastId: 'error' });
                e.preventDefault()
            } else {
                setTag('')
                tags.push(tag)
                toast.success('Tag added successfully', { toastId: 'success' });
                e.preventDefault()
            }
        }

    }

    return (
        <>
            <div className='containerStudent'>
                <div>
                    <div className='avatar' style={{ backgroundImage: `url('${pic}')` }} ></div>
                </div>
                <div className='containerDataAvatar'>
                    <div className='containerTitleAndButton'>
                        <h3 >{`${firstName} ${lastName}`}</h3>
                        <button onClick={() => { setVisible(!visible) }}>
                            {visible
                                ? <i className="fas fa-minus"></i>
                                : <i className="fas fa-plus"></i>
                            }
                        </button>
                    </div>
                    <ul>
                        <li>Email: {email}</li>
                        <li>City: {city}</li>
                        <li>Skill: {skill}</li>
                        <li>Average: {average}%</li>
                    </ul>
                    {visible &&
                        <div className='average'>
                            <ul >
                                {grades.map((grade, index) => <li key={index}>test {index + 1}: {grade}%</li>)}
                            </ul>
                        </div>
                    }
                    <div>
                        <div className='average '>
                            <ul className='tagList'>
                                {tags.map((tag, index) => <li key={index}>{tag}</li>)}
                            </ul>
                        </div>
                        <form >
                            <label>
                                <input className='inputTag' placeholder='add tag' onChange={changeInput} value={tag} onKeyPress={addTag} type="text" />
                            </label>
                        </form>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default CardStudent