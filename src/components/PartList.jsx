import { Link } from 'react-router-dom';

const PartList = (props) => {
  return (
    <div id="part_list" className="components">
      <div id="tableHeaderRow" className="tableRow">
        <div className="tableColId">ID</div>
        <div className="tableColArtistAndTitle">アーティスト / タイトル</div>
      </div>
      {props.dbData.map((data, index) =>
        <div className="tableSongRow tableRow" key={index}>
          <div className="tableColId">{data.id}</div>
          <div className="tableColSong">
            <div className="tableColArtistAndTitle">{data.artist} / {data.title}</div>
            <div className="tableColButton">
              <Link className="actionButton" to={{ pathname: "/detail", search: `?id=${data.id}` }}>Detail</Link>
              <Link className="actionButton" to={{ pathname: "/update", search: `?id=${data.id}` }}>Update</Link>
              <span className="actionButton" data-id={data.id} onClick={props.onClickDelete}>Delete</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PartList;