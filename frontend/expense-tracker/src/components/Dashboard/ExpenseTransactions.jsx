import moment from "moment";
import { LuArrowRight } from "react-icons/lu";
import TransactionInfoCard from "../Cards/TransactionInfoCard";
import PropTypes from "prop-types";

const ExpenseTransactions = ({transactions, onSeeMore}) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between ">
        <h5 className="text-lg font-bold text-gray-900">Expenses</h5>

        <button className="card-btn font-bold text-indigo-700" onClick={onSeeMore}>
          See All <LuArrowRight className="text-base" />
        </button>
      </div>

      <div className="mt-6">
        {transactions?.slice(0,5)?.map((expense) => (
          <TransactionInfoCard
            key={expense._id}
            title={expense.category}
            icon={expense.icon}
            date={moment(expense.date).format("Do MMM YYYY")}
            amount={expense.amount}
            type="expense"
            hideDeleteBtn
          />
        ))}
      </div>
    </div>
  );
};

ExpenseTransactions.propTypes = {
  transactions: PropTypes.array,
  onSeeMore: PropTypes.func.isRequired,
};

export default ExpenseTransactions;
