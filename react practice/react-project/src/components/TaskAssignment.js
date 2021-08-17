import React from 'react';
import { useState } from 'react';

const TaskAssignment = ({ addTaskLog }) => {
	const [TaskDesc, setTaskDesc] = useState();
	const [Name, setName] = useState();
	const [TaskDate, setDate] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();
		addTaskLog([TaskDesc, Name, TaskDate]);
	};

	return (
		<div>
			<form>
				<div className='col-md-4'>
					<label>Task Description</label>
					<input
						className='form-control'
						type='text'
						onChange={(e) => setTaskDesc(e.target.value)}
					/>
				</div>

				<div className='col-md-4'>
					<label>Assigned to:</label>
					<input
						className='form-control'
						type='text'
						onChange={(e) => setName(e.target.value)}
					/>
				</div>

				<div className='col-md-4'>
					<label>Date</label>
					<input
						className='form-control'
						type='date'
						onChange={(e) => setDate(e.target.value)}
					/>
                </div>
                
				<input
					className='btn-success'
					type='button'
					name='submit'
					value='Add Task'
					onClick={handleSubmit}
				/>
			</form>
			<br />
		</div>
	);
};

export default TaskAssignment;
