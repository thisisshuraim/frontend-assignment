import "./DataNotAvailable.css";

const DataNotAvailable = ({ onCheckAgain }) => {
  return (
    <div className="no-data-container">
			<div className="no-data-icon">📊</div>
			<h2 className="no-data-title">No Data Available</h2>
			<p className="no-data-description">It seems there's no information to display at the moment. Check back later or try refreshing.</p>
			<button className="no-data-action" onClick={onCheckAgain}>Refresh Data</button>
    </div>
  )
}

export default DataNotAvailable;