import React, { useState, useEffect } from 'react';
import Expenses from '../Expenses/Expenses';
import NewExpense from '../NewExpense/NewExpense';
import PropTypes from 'prop-types';
import Stats from '../stats/Stats';
import { db } from '../../firebase.config';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import Loading from '../animations/Loading';
import { funcsContext } from '../Context/FuncContext';

const Authorized = (props) => {
	const [expenses, setExpenses] = useState([{}]);
	const userCollectionRef = collection(db, props.userValue.uid);
	const [update, setUpdate] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const refreshExpenses = () => {
		setUpdate((prevState) => !prevState);
	};

	const getExpenses = async () => {
		const data = await getDocs(userCollectionRef);
		!data
			? console.log('No Data Found.')
			: setExpenses(
					data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
			  );
		setTimeout(() => setIsLoading(false), 1000);
	};

	const deleteExpense = async (expID) => {
		await deleteDoc(doc(userCollectionRef, expID));
		refreshExpenses();
	};

	useEffect(() => {
		getExpenses();
	}, [, update]);

	return (
		<funcsContext.Provider
			value={{ funcRefresh: refreshExpenses, funcDel: deleteExpense }}
		>
			<NewExpense
				onAddExpense={refreshExpenses}
				user={props.userValue}
			/>
			{isLoading && <Loading color={'gray'} size={56} />}
			{!isLoading && <Stats data={expenses}></Stats>}
			{!isLoading && <Expenses items={expenses} />}
		</funcsContext.Provider>
	);
};

Authorized.propTypes = {
	expenses: PropTypes.object,
	onUpdateData: PropTypes.func,
	userValue: PropTypes.object,
};

export default Authorized;
