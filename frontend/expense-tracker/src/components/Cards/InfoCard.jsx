import PropTypes from 'prop-types';

const InfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-6 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl shadow-black/10 border border-white/20 hover:scale-105 hover:shadow-purple-500/30 transition-all duration-300">
      <div className={`w-16 h-16 flex items-center justify-center text-[28px] text-white ${color} rounded-2xl drop-shadow-2xl shadow-xl`}>
        {icon}
      </div>
      <div>
        <h6 className="text-sm text-gray-600 font-medium mb-2">{label}</h6>
        <span className="text-[24px] font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">${value}</span>
      </div>
    </div>
  );
};

InfoCard.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  color: PropTypes.string.isRequired,
};

export default InfoCard;
