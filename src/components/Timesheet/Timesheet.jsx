import React, { useEffect, useState, useRef } from "react";
import "./Timesheet.css";
import Row from "../Row/Row";

const Timesheet = ({ nav, open }) => {
	const [showNav, setShowNav] = useState(nav);
  const [navStyle, setNavStyle] = useState({});
  
  const isInitial = useRef(true)

	const openNav = () => {
		open();
	};

	useEffect(() => {
		setShowNav(nav);
		if (nav) {
			const addStyle = {
				marginLeft: "186px",
			};
			setNavStyle((prevD) => ({ ...prevD, ...addStyle }));
		} else {
			const addStyle = {
				marginLeft: "0px",
			};
			setNavStyle((prevD) => ({ ...prevD, ...addStyle }));
		}
	}, [nav]);

	const first = true;
	const notFirst = false;

	const [myData, setMyData] = useState([
		{ comment: "", mon: 0, tue: 0, wed: 0, thu: 0, fri: 0, sat: 0, sun: 0 },
	]);

	const [total, setTotal] = useState({
		mon: 0,
		tue: 0,
		wed: 0,
		thu: 0,
		fri: 0,
		sat: 0,
		sun: 0,
	});

	const onEdit = (key, col, val) => {
		const updateData = [...myData];
		updateData[key][col] = val;
		setMyData(updateData);
	};

	useEffect(() => {
		const monSum = myData.reduce(
			(acc, row) => acc + (parseFloat(row.mon) || 0),
			0
		);
		setTotal((prevD) => ({ ...prevD, ["mon"]: monSum }));

		const tueSum = myData.reduce(
			(acc, row) => acc + (parseFloat(row.tue) || 0),
			0
		);
		setTotal((prevD) => ({ ...prevD, ["tue"]: tueSum }));

		const wedSum = myData.reduce(
			(acc, row) => acc + (parseFloat(row.wed) || 0),
			0
		);
		setTotal((prevD) => ({ ...prevD, ["wed"]: wedSum }));

		const thuSum = myData.reduce(
			(acc, row) => acc + (parseFloat(row.thu) || 0),
			0
		);
		setTotal((prevD) => ({ ...prevD, ["thu"]: thuSum }));

		const friSum = myData.reduce(
			(acc, row) => acc + (parseFloat(row.fri) || 0),
			0
		);
		setTotal((prevD) => ({ ...prevD, ["fri"]: friSum }));

		const satSum = myData.reduce(
			(acc, row) => acc + (parseFloat(row.sat) || 0),
			0
		);
		setTotal((prevD) => ({ ...prevD, ["sat"]: satSum }));

		const sunSum = myData.reduce(
			(acc, row) => acc + (parseFloat(row.sun) || 0),
			0
		);
		setTotal((prevD) => ({ ...prevD, ["sun"]: sunSum }));
	}, [myData]);

	const onAdd = () => {
		setMyData((prevD) => [
			...prevD,
			{
				comment: "",
				mon: 0,
				tue: 0,
				wed: 0,
				thu: 0,
				fri: 0,
				sat: 0,
				sun: 0,
			},
		]);
	};

	const onSub = (index) => {
		const updatedD = [...myData];
		updatedD.splice(index, 1);
		setMyData(updatedD);
	};

	useEffect(() => {
		const data = localStorage.getItem("myData");
		if (data) {
			setMyData(JSON.parse(data));
		}
	}, []);

	useEffect(() => {
		if (isInitial.current) {
			isInitial.current = false;
			return;
		}
		localStorage.setItem("myData", JSON.stringify(myData));
	}, [myData]);

	return (
		<div
			className="timesheet"
			style={navStyle}
		>
			<div className="head flex-start">
				{!showNav ? (
					<i
						onClick={openNav}
						className="bx bx-menu"
					></i>
				) : null}
				<h1>Timesheet</h1>
			</div>
			<div className="top-desc flex-between">
				<p>Total Hours: 0.0</p>
				<div className="date-range flex-start">
					<i class="bx bx-chevron-left"></i>
					<p>29 Jan 2024 - 04 Feb 2024</p>
					<i class="bx bx-chevron-right"></i>
				</div>
			</div>
			<div className="table-head">Timesheet</div>
			<div className="table-main">
				<table>
					<thead>
						<tr id="row1">
							<th>Project Type</th>
							<th>Project Name</th>
							<th>Task</th>
							<th>Comment</th>
							<th>
								Mon <br /> 29
							</th>
							<th>
								Tue <br /> 30
							</th>
							<th>
								Wed <br /> 31
							</th>
							<th>
								Thu <br /> 01
							</th>
							<th>
								Fri <br /> 03
							</th>
							<th>
								Sat <br /> 04
							</th>
							<th>
								Sun <br /> 05
							</th>
							<th>Total</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{myData.map((row, index) =>
							index === 0 ? (
								<Row
									onEdit={onEdit}
									row={row}
									name="BAU Activity"
									onSub={onSub}
									onAdd={onAdd}
									index={index}
									first={first}
								/>
							) : (
								<Row
									onEdit={onEdit}
									row={row}
									index={index}
									onSub={onSub}
									onAdd={onAdd}
									first={notFirst}
								/>
							)
						)}
						<tr>
							<td>Total Hours</td>
							<td></td>
							<td></td>
							<td></td>
							<td
								className={`center ${
									total.mon > 8 ? "red" : ""
								} `}
							>
								{total.mon}
							</td>
							<td
								className={`center ${
									total.tue > 8 ? "red" : ""
								} `}
							>
								{total.tue}
							</td>
							<td
								className={`center ${
									total.wed > 8 ? "red" : ""
								} `}
							>
								{total.wed}
							</td>
							<td
								className={`center ${
									total.thu > 8 ? "red" : ""
								} `}
							>
								{total.thu}
							</td>
							<td
								className={`center ${
									total.fri > 8 ? "red" : ""
								} `}
							>
								{total.fri}
							</td>
							<td
								className={`center ${
									total.sat > 8 ? "red" : ""
								} `}
							>
								{total.sat}
							</td>
							<td
								className={`center ${
									total.sun > 8 ? "red" : ""
								} `}
							>
								{total.sun}
							</td>
							<td className="center">
								{parseFloat(total.mon) +
									parseFloat(total.tue) +
									parseFloat(total.wed) +
									parseFloat(total.thu) +
									parseFloat(total.fri) +
									parseFloat(total.sat) +
									parseFloat(total.sun)}
							</td>
							<td></td>
						</tr>
						<tr>
							<td className="small">Machine Hours</td>
						</tr>
						<tr>
							<td className="small">Break Hours</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="save-submit">
				<button>SAVE</button>
				<button>
					SUBMIT{" "}
					<i
						id="arrow"
						className="bx bx-right-arrow-alt"
					></i>
				</button>
			</div>
		</div>
	);
};

export default Timesheet;
