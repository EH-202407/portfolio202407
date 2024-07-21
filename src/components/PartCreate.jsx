const PartCreate = (props) => {
  return (
    <div id="part_create" className="components">
      <form id='input_song_data' onSubmit={props.onSubmitClick}>

        <div className="input_parts">
          <label className='input_label' htmlFor="artist">アーティスト</label>
          <input
            className='input_inputarea'
            type="text" id="artist" name="artist" placeholder=" 入力必須" required
            value={props.userInputArtist}
            onChange={e => props.setUserInputArtist(e.target.value)}
          />
        </div>
        <div className="input_parts">
          <label className='input_label' htmlFor="title">タイトル</label>
          <input
            className='input_inputarea'
            type="text" id="title" name="title" placeholder=" 入力必須" required
            value={props.userInputTitle}
            onChange={e => props.setUserInputTitle(e.target.value)}
          />
        </div>
        <div className="input_parts">
          <label className='input_label' htmlFor="chord">コード譜</label>
          <textarea
            className='input_inputarea'
            id="chord" name="chord" cols="50" rows="10"
            placeholder=' 任意入力'
            value={props.userInputChord}
            onChange={e => props.setUserInputChord(e.target.value)}
          ></textarea>
        </div>
        <div className="input_parts">
          <label className='input_label' htmlFor="lyric">歌詞</label>
          <textarea
            className='input_inputarea'
            id="lyric" name="lyric" cols="50" rows="10"
            placeholder=' 任意入力'
            value={props.userInputLyric}
            onChange={e => props.setUserInputLyric(e.target.value)}
          ></textarea>
        </div>
        <div className="input_parts">
          <button type="submit" id='submit_button'>保存</button>
        </div>
      </form>
    </div>
  );
};

export default PartCreate;