import { Link } from 'react-router-dom';

const CommonHeader = () => {
  return (
    <div id="common_header">
      <div id="common_header_wrap">
        <h1 id="common_header_title">my musical scores</h1>
        <div id="common_header_navi">
          <Link to="/" className="navi_link">List</Link>
          <Link to="/create" className="navi_link">Create</Link>
          <Link to="/about" className="navi_link">About</Link>
        </div>
      </div>
    </div>
  );
};

export default CommonHeader;