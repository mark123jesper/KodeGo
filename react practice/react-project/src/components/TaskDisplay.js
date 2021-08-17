import React from 'react';

const TaskDisplay = (props) => {
	return (
		<div>
			<table className="table">
				<tr>
					<th>Task Description</th>
					<th>Name</th>
					<th>Task Date</th>
				</tr>
                
				{props.list.map(v => (
					<tr>
						<td>{v[0]}</td>
						<td>{v[1]}</td>
						<td>{v[2]}</td>
					</tr>
                ))}
			</table>
		</div>
	)
};

export default TaskDisplay;
