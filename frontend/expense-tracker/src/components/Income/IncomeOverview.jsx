import { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";
import CustomBarChart from "../Charts/CustomBarChart";
import { prepareIncomeBarChartData } from "../../utils/helper";
import PropTypes from "prop-types";

const IncomeOverview = ({ transactions, onAddIncome }) => {

  const [chartData, setChartData] = useState([])

  useEffect(() => {
     const result = prepareIncomeBarChartData(transactions);
     setChartData(result);
  
      return () => {};
    }, [transactions]);

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <div className="">
          <h5 className="text-lg font-bold text-gray-900">Income Overview</h5>
          <p className="text-xs text-gray-900 font-bold mt-0.5">
            Track your earnings over time and analyze your income trends.
          </p>
        </div>

        <button className="add-btn" onClick={onAddIncome}>
          <LuPlus className="text-lg" />
          Add Income
        </button>
      </div>

      <div className="mt-10">
        <CustomBarChart data={chartData} />
      </div>
    </div>
  );
};

IncomeOverview.propTypes = {
  transactions: PropTypes.array,
  onAddIncome: PropTypes.func.isRequired,
};

export default IncomeOverview;
