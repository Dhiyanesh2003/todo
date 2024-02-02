import React, { useEffect, useState } from 'react'
import './Timesheet.css'
import Row from '../Row/Row'

const Timesheet = ({ nav, open }) => {
  const [showNav, setShowNav] = useState(nav)
  const [navStyle, setNavStyle] = useState({})

  const openNav = () => {
    open()
  }

  useEffect(() => {
    setShowNav(nav)
    if (nav) {
      const addStyle = {
        marginLeft: "186px"
      }
      setNavStyle((prevD) => ({ ...prevD, ...addStyle }))
    }
    else {
      const addStyle = {
        marginLeft: "0px"
      }
      setNavStyle((prevD) => ({ ...prevD, ...addStyle }))
    }
  }, [nav])

  const first = true;
  const notFirst = false;

  const [count, setCount] = useState(1)

  const [myData, setMyData] = useState([
    { comment: '', mon: 0, tue: 0, wed: 0, thu: 0, fri: 0, sat: 0, sun: 0 }
  ])

  const [total, setTotal] = useState({
    mon: 0,
    tue: 0,
    wed: 0,
    thu: 0,
    fri: 0,
    sat: 0,
    sun: 0
  })

  const onEdit = (key, col, val) => {
    const updateData = [...myData]
    updateData[key][col] = val
    setMyData(updateData)
  }

  useEffect(() => {
    const monSum = myData.reduce((acc, row) => acc + (parseInt(row.mon) || 0), 0)
    setTotal((prevD) => ({ ...prevD, ["mon"]: monSum }))

    const tueSum = myData.reduce((acc, row) => acc + (parseInt(row.tue) || 0), 0)
    setTotal((prevD) => ({ ...prevD, ["tue"]: tueSum }))

    const wedSum = myData.reduce((acc, row) => acc + (parseInt(row.wed) || 0), 0)
    setTotal((prevD) => ({ ...prevD, ["wed"]: wedSum }))

    const thuSum = myData.reduce((acc, row) => acc + (parseInt(row.thu) || 0), 0)
    setTotal((prevD) => ({ ...prevD, ["thu"]: thuSum }))

    const friSum = myData.reduce((acc, row) => acc + (parseInt(row.fri) || 0), 0)
    setTotal((prevD) => ({ ...prevD, ["fri"]: friSum }))

    const satSum = myData.reduce((acc, row) => acc + (parseInt(row.sat) || 0), 0)
    setTotal((prevD) => ({ ...prevD, ["sat"]: satSum }))

    const sunSum = myData.reduce((acc, row) => acc + (parseInt(row.sun) || 0), 0)
    setTotal((prevD) => ({ ...prevD, ["sun"]: sunSum }))

  }, [myData])

  const onAdd = () => {
    setCount(count + 1)
  }

  const onSub = () => {
    setCount(count - 1)
  }

  return (
    <div className='timesheet' style={navStyle}>
      <div className="head flex-start">
        {
          !showNav ? (
            <i onClick={openNav} className='bx bx-menu'></i>
          ) : null
        }
        <h1>Timesheet</h1>
      </div>
      <div className="top-desc flex-between">
        <p>Total Hours: 0.0</p>
        <div className="date-range flex-start">
          <i class='bx bx-chevron-left'></i>
          <p>29 Jan 2024 - 04 Feb 2024</p>
          <i class='bx bx-chevron-right'></i>
        </div>
      </div>
      <div className="table-head">
        Timesheet
      </div>
      <div className="table-main">
        <table>
          <thead>
            <tr id='row1'>
              <th>Project Type</th>
              <th>Project Name</th>
              <th>Task</th>
              <th>Comment</th>
              <th>Mon <br /> 29</th>
              <th>Tue <br /> 30</th>
              <th>Wed <br /> 31</th>
              <th>Thu <br /> 01</th>
              <th>Fri <br /> 03</th>
              <th>Sat <br /> 04</th>
              <th>Sun <br /> 05</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              myData.map((row, index) => (
                index == 0 ? (
                  <Row
                    onEdit={onEdit}
                    row={row}
                    name="BAU Activity"
                    onSub={onSub}
                    onAdd={onAdd}
                    index={index}
                    first={first} />
                ) : (
                  <Row
                    onEdit={onEdit}
                    row={row}
                    index={index}
                    onSub={onSub}
                    onAdd={onAdd}
                    first={notFirst} />
                )
              ))
            }
            <tr>
              <td>
                Total Hours
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td className={`center ${ total.mon > 8 ? 'red' : '' } `}>
                {total.mon}
              </td>
              <td className={`center ${ total.tue > 8 ? 'red' : '' } `}>
                {total.tue}
              </td>
              <td className={`center ${ total.wed > 8 ? 'red' : '' } `}>
                {total.wed}
              </td>
              <td className={`center ${ total.thu > 8 ? 'red' : '' } `}>
                {total.thu}
              </td>
              <td className={`center ${ total.fri > 8 ? 'red' : '' } `}>
                {total.fri}
              </td>
              <td className={`center ${ total.sat > 8 ? 'red' : '' } `}>
                {total.sat}
              </td>
              <td className={`center ${ total.sun > 8 ? 'red' : '' } `}>
                {total.sun}
              </td>
              <td className='center'>{parseInt(total.mon) + parseInt(total.tue) + parseInt(total.wed) + parseInt(total.thu) + parseInt(total.fri) + parseInt(total.sat) + parseInt(total.sun)}</td>
              <td></td>
            </tr>
            <tr>
              <td className='small'>Machine Hours</td>
            </tr>
            <tr>
              <td className='small'>Break Hours</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="save-submit">
        <button>SAVE</button>
        <button>SUBMIT <i id="arrow" className='bx bx-right-arrow-alt'></i></button>
      </div>
    </div>
  )
}

export default Timesheet