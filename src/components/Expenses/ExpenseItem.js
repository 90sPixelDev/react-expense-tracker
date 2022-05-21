import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import PropTypes from 'prop-types';

const ExpenseItem = (props) => {
	const [title, setTitle] = useState(props.title);

	const classes = {
		expenseParent:
			'w-[90%] group bg-red-50 sm:hover:bg-red-100 sm:hover:scale-105 sm:hover:shadow-red-900 shadow-lg transition-all ease-in-out p-5 rounded-full font-OpenSans m-auto',
		spacing: 'flex items-center justify-between',
		flexLayout: 'inline-flex w-100',
		expenseTitle:
			'text-gray-700 group-hover:text-black font-bold text-[4vw] xsm:text-xl sm:text-2xl my-auto p-3',
		expenseAmt:
			'bg-red-300 w-[150px] text-center p-3 rounded-3xl border-2 border-red-600',
		expenseAmtText: 'text-[4vw] xsm:text-xl',
	};

	const changeTitleHandler = (props) => {
		const arr = [
			'a',
			'b',
			'c',
			'd',
			'e',
			'f',
			'g',
			'h',
			'i',
			'j',
			'k',
			'l',
			'm',
			'n',
			'o',
			'p',
			'q',
			'r',
			's',
			't',
			'u',
			'v',
			'w',
			'x',
			'y',
			'z',
		];

		let randomLetters = '';
		for (let i = 0; i < 6; i++) {
			randomLetters += arr[Math.floor(Math.random() * 26)];
			setTitle(randomLetters);
		}
	};

	return (
		<li className={classes.expenseParent}>
			<div className={classes.spacing}>
				<div className={classes.flexLayout}>
					<ExpenseDate date={props.date} />
					<button
						className={classes.expenseTitle}
						onClick={changeTitleHandler}
					>
						{title}
					</button>
				</div>
				<div className={classes.expenseAmt}>
					<p className={classes.expenseAmtText}>
						${props.amount}
					</p>
				</div>
			</div>
		</li>
	);
};

ExpenseItem.propTypes = {
	title: PropTypes.string,
	date: PropTypes.instanceOf(Date),
	amount: PropTypes.number,
};

export default ExpenseItem;
