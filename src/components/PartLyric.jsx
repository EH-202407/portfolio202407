const PartLyric = (props) => {
  return(
    <div id="part_lyric" className="components">
      <h3>歌詞</h3>
      {props.songLyric !== '' ? <pre>{props.songLyric}</pre> : <p>登録されていません</p>}
    </div>
  );
};

export default PartLyric;