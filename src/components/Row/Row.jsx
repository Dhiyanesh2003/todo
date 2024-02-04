import React from 'react'

const Row = ({ name, index, onAdd, onSub, first, row, onEdit }) => {

    const handleChange = (e, colName) => {
        console.log(index)
        if (e.target.value) {
            onEdit(index, colName, e.target.value)
        }
        else {
            onEdit(index, colName, 0)
        }
    }

    return (
        <tr>
            <td>{name}</td>
            <td>
                <select name="project" id="project">
                    <option value="Project">Project</option>
                </select>
            </td>
            <td>
                <select name="Task" id="Task">
                    <option value="Task">Task</option>
                </select>
            </td>
            <td>
                <input
                    type="text" 
                    name="comment" 
                    value={row.comment}
                    onChange={(e) => handleChange(e, 'comment')}
                />
            </td>
            <td>
                <input
                    type="number"
                    name="mon"
                    value={row.mon === 0 ? '':row.mon}
                    onChange={(e) => handleChange(e, 'mon')}
                />
            </td>
            <td>
                <input
                    type="number"
                    name="tue"
                    value={row.tue === 0 ? '':row.tue}
                    onChange={(e) => handleChange(e, 'tue')}
                />
            </td>
            <td>
                <input
                    type="number"
                    name="wed"
                    value={row.wed === 0 ? '':row.wed}
                    onChange={(e) => handleChange(e, 'wed')}
                />
            </td>
            <td>
                <input
                    type="number"
                    name="thu"
                    value={row.thu === 0 ? '':row.thu}
                    onChange={(e) => handleChange(e, 'thu')}
                />
            </td>
            <td>
                <input
                    type="number"
                    name="fri"
                    value={row.fri === 0 ? '':row.fri}
                    onChange={(e) => handleChange(e, 'fri')}
                />
            </td>
            <td>
                <input
                    type="number"
                    name="sat"
                    value={row.sat === 0 ? '':row.sat}
                    onChange={(e) => handleChange(e, 'sat')}
                />
            </td>
            <td>
                <input
                    type="number"
                    name="sun"
                    value={row.sun === 0 ? '':row.sun}
                    onChange={(e) => handleChange(e, 'sun')}
                />
            </td>
            <td className='center'>{parseFloat(row.mon) + parseFloat(row.tue) + parseFloat(row.wed) + parseFloat(row.thu) + parseFloat(row.fri) + parseFloat(row.sat) + parseFloat(row.sun)}</td>
            <td className='flex-start mt-2'>
                <i onClick={onAdd} class='bx bx-plus'></i>
                {
                    first ? (
                        <i style={{ color: "white" }} class='bx bx-minus'></i>
                    ) : (
                        <i onClick={() => onSub(index)} class='bx bx-minus'></i>
                    )
                }
            </td>
        </tr>
    )
}

export default Row