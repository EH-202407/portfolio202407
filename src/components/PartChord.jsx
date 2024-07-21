const PartChord = (props) => {
  const splitSongChord = props.songChord.split('\n');
  
  return (
    <div id="part_chord" className="components">
      <h3>コード譜</h3>
      {
        splitSongChord[0] !== ''
        ?
        <div id="part_chord_blocks">
          {
            splitSongChord.map((data, index) =>
              <div className="part_chord_block" key={index}>
                <div className="part_chord_block_lyric">{data.slice(data.lastIndexOf(']') + 1)}</div>
                <div className="part_chord_block_chord">{data.slice(0, data.lastIndexOf(']') + 1)}</div>
              </div>
            )
          }
        </div>
        :
        <p>登録されていません</p>
      }
    </div>
  );
};

export default PartChord;