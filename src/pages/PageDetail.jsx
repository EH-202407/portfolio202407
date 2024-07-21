import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CommonHeader from '../components/CommonHeader';
import CommonTitle from '../components/CommonTitle';
import PartLyric from '../components/PartLyric';
import PartChord from '../components/PartChord';
import CommonFooter from '../components/CommonFooter';
import CommonToTopButton from '../components/CommonToTopButton';

const PageDetail = () => {
  const [thisPageTitle, setThisPageTitle] = useState('');
  const [songLyric, setSongLyric] = useState('');
  const [songChord, setSongChord] = useState('');

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const gotId = queryParams.get('id');

  useEffect(() => {
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
      const request = gotObjectStore.get(Number(gotId));

      request.onsuccess = function () {
        setThisPageTitle(`${request.result.artist} / ${request.result.title}`);
        setSongLyric(request.result.lyric);
        setSongChord(request.result.chord);
      };

      request.onerror = function () {
        console.log('リクエスト失敗');
      };
    };
  }, []);

  return (
    <>
      <CommonHeader />
      <main>
        <CommonTitle thisPageTitle={thisPageTitle} />
        <PartChord songChord={songChord} />
        <PartLyric songLyric={songLyric} />
      </main>
      <CommonFooter />
      <CommonToTopButton />
    </>
  );
};

export default PageDetail;