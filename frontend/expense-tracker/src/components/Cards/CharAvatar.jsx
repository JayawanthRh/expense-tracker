import { getInitials } from "../../utils/helper";
import PropTypes from "prop-types";

const CharAvatar = ({ fullName, width, height, style }) => {
  return (
    <div className={`${width || 'w-12'} ${height || 'h-12'} ${style || ''} flex items-center justify-center rounded-full text-gray-900 font-bold bg-gray-100 shadow-inner`}>
      {getInitials(fullName || "")}
    </div>
  );
};

CharAvatar.propTypes = {
  fullName: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.string,
};

export default CharAvatar;
