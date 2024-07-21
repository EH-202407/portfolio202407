import { useState } from 'react';
import CommonHeader from '../components/CommonHeader';
import CommonTitle from '../components/CommonTitle';
import PartCreate from '../components/PartCreate';
import PartDescription from '../components/PartDescription';
import CommonFooter from '../components/CommonFooter';
import CommonToTopButton from '../components/CommonToTopButton';

const thisPageTitle = '新規登録';
const thisPageDescriptions = [
  {
    title: 'コード譜の入力方法',
    text: '以下のかたちで入力してください。\n　[コード]歌詞（改行）\n\n《入力例》\n[C]春が来た\n[C]春が来た\n[Am][C]どこに来\n[Dm][G7]た\n[C]山に来た\n[F][D7]里に来た\n[G7]野にも来\n[C]た'
  },
  {
    title: '歌詞の入力方法',
    text: '以下のかたちで入力してください。\n　歌詞（改行）\n\n《入力例》\n春が来た　春が来た\nどこに来た\n山に来た　里に来た\n野にも来た'
  },
];

const PageCreate = () => {
  const [userInputArtist, setUserInputArtist] = useState('');
  const [userInputTitle, setUserInputTitle] = useState('');
  const [userInputChord, setUserInputChord] = useState('');
  const [userInputLyric, setUserInputLyric] = useState('');

  const onSubmitClick = (event) => {
    event.preventDefault();

    const openRequest = indexedDB.open('dbMyMusicalScores', 1);

    openRequest.onupgradeneeded = function () {
      const db = openRequest.result;
      const myObjectStore = db.createObjectStore('myObjectStore', { keyPath: 'id', autoIncrement: true });
      myObjectStore.createIndex('myIndex', ['artist', 'title'], { unique: true });
    };

    openRequest.onerror = function () {
      console.error('データベースopen失敗');
    };

    openRequest.onsuccess = function () {
      const db = openRequest.result;
      const transaction = db.transaction('myObjectStore', 'readwrite');
      const gotObjectStore = transaction.objectStore('myObjectStore');
      const userData = {
        artist: userInputArtist,
        title: userInputTitle,
        chord: userInputChord,
        lyric: userInputLyric,
      };
      const request = gotObjectStore.add(userData);

      request.onsuccess = function () {
        setUserInputArtist('');
        setUserInputTitle('');
        setUserInputChord('');
        setUserInputLyric('');
      };

      request.onerror = function () {
        console.log('リクエスト失敗');
      };
    };
  };

  return (
    <>
      <CommonHeader />
      <main>
        <CommonTitle thisPageTitle={thisPageTitle} />
        <PartCreate
          userInputArtist={userInputArtist}
          setUserInputArtist={setUserInputArtist}
          userInputTitle={userInputTitle}
          setUserInputTitle={setUserInputTitle}
          userInputChord={userInputChord}
          setUserInputChord={setUserInputChord}
          userInputLyric={userInputLyric}
          setUserInputLyric={setUserInputLyric}
          onSubmitClick={onSubmitClick}
        />
        {thisPageDescriptions.map((data, index) =>
          <PartDescription thisPageDescription={data} key={index} />
        )}
      </main>
      <CommonFooter />
      <CommonToTopButton />
    </>
  );
};

export default PageCreate;