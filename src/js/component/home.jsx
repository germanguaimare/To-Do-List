import React, { useState, useEffect, Fragment } from "react";

const Home = () => {
	const [toDo, setToDo] = useState([]);
	const [newTask, setNewTask] = useState("");
	const footerRender = () => {
		if (toDo.length == 0) {
			return <p>You completed all your tasks</p>;
		} else {
			return <p>You have {toDo.length} tasks to complete</p>;
		}
	};

	useEffect(() => {
		//	console.log(toDo);
	});

	const addTask = () => {
		if (newTask !== "") {
			setToDo([...toDo, newTask]);
			setNewTask("");
		} else {
			alert("Please type your task");
		}
	};

	const misTareas = toDo.map((task, index) => {
		let i = 0;
		let x = i + index;
		return (
			<div key={index}>
				<li className="list-group-item bg-warning">
					{task} <span id="hidden">{x}</span>
					<span>
						<i
							onClick={() => {
								setToDo(
									toDo.filter((toDo, x) => {
										return index != x;
									})
								);
							}}
							className="far fa-check-square"></i>
					</span>
				</li>
			</div>
		);
	});

	return (
		<Fragment>
			<div className="container d-flex justify-content-center mt-5">
				<div
					className="card text-white bg-warning"
					style={{ width: "26rem", height: "26rem" }}>
					<div className="card-header text-center">
						<strong>To Do List</strong>
					</div>

					<ul className="list-group list-group-flush">
						<li className="list-group-item bg-warning">
							<input
								type="text"
								id="myInput"
								value={newTask}
								onKeyDown={e => {
									if (e.key === "Enter") {
										addTask();
									}
								}}
								onChange={e => {
									setNewTask(e.target.value);
								}}
								placeholder="Please add your task"
							/>
							<span>
								<i
									onClick={addTask}
									className="fas fa-plus"></i>
							</span>
						</li>
						{misTareas}
					</ul>
					<div id="footer" className="card-footer">
						{footerRender()}
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Home;
