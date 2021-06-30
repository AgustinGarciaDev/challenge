const Filter = ({ handleInput, inputDate }) => {



    return (
        <form className='containerForms'>
            <label>
                <input
                    className='inputForm'
                    name='name'
                    id='name'
                    value={inputDate.name}
                    onChange={(e) => { handleInput(e) }}
                    placeholder='Search by name'
                    type='text'
                />
            </label>
            <label>
                <input
                    id='tag'
                    className='inputForm'
                    name='tag'
                    value={inputDate.tag}
                    onChange={(e) => { handleInput(e) }}
                    placeholder='Search by tag'
                    type='text'
                />
            </label>
        </form>
    )

}

export default Filter