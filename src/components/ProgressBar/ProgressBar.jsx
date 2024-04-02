import PropTypes from 'prop-types';
import './ProgressBar.scss';

const ProgressBar = ({progress}) => {

  return (
    <div className="container">
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{width: `${progress}%`, backgroundColor : 'lightsteelblue'}}></div>
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired
};

export default ProgressBar; 