import CustomPieChart from "../Charts/CustomPieChart";
import PropTypes from "prop-types";

const FinanceOverview = ({ totalBalance, totalIncome, totalExpense }) => {
  const COLORS = ["#875CF5", "#FA2C37", "#FF6900"];

  const balanceData = [
    { name: "Total Balance", amount: totalBalance },
    { name: "Total Expenses", amount: totalExpense },
    { name: "Total Income", amount: totalIncome },
  ];

  return (
    <div className="card">
      <div className="flex items-center justify-between ">
        <h5 className="text-lg font-bold text-gray-900">Financial Overview</h5>
      </div>

      <CustomPieChart
        data={balanceData}
        label="Total Balance"
        totalAmount={`$${totalBalance}`}
        colors={COLORS}
        showTextAnchor
      />
    </div>
  );
};

FinanceOverview.propTypes = {
  totalBalance: PropTypes.number,
  totalIncome: PropTypes.number,
  totalExpense: PropTypes.number,
};

export default FinanceOverview;
