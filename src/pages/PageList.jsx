import { useState, useEffect } from 'react';
import CommonHeader from '../components/CommonHeader';
import CommonTitle from '../components/CommonTitle';
import PartList from '../components/PartList';
import PartDescription from '../components/PartDescription';
import CommonFooter from '../components/CommonFooter';
import CommonToTopButton from '../components/CommonToTopButton';

const thisPageTitle = '登録曲一覧';
const thisPageDescriptions = [
  {
    title: '登録データがありません',
    text: '画面右上の「Create」ボタンから、曲を登録してください。'
  },
  {
    title: 'データの保存先について',
    text: '本アプリのデータは、ご利用中のブラウザに保存されます。\n・ブラウザが持っている機能「IndexedDB」を使用しています。\n・データの管理（削除やバックアップ等）は各自でお願いします。'
  },
];

const PageList = () => {
  const [dbData, setDbData] = useState([]);
  const selectAll = () => {
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
      const request = gotObjectStore.getAll();

      request.onsuccess = function () {
        setDbData(request.result);
      };

      request.onerror = function () {
        console.log('リクエスト失敗');
      };
    };
  };

  const onClickDelete = (event) => {
    const confirmDelete = confirm('削除してよろしいですか？');

    if (confirmDelete) {
      const deleteId = Number(event.target.dataset.id);

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
        const request = gotObjectStore.delete(deleteId);

        request.onsuccess = function () {
          selectAll();
        };

        request.onerror = function () {
          console.log('リクエスト失敗');
        };
      };
    };
  };

  useEffect(() => {
    selectAll();
  }, []);

  return (
    <>
      <CommonHeader />
      <main>
        <CommonTitle thisPageTitle={thisPageTitle} />
        {dbData.length !== 0 ?
          <PartList dbData={dbData} onClickDelete={onClickDelete} />
          :
          <>
            {thisPageDescriptions.map((data, index) =>
              <PartDescription thisPageDescription={data} key={index} />
            )}
          </>
        }
      </main>
      <CommonFooter />
      <CommonToTopButton />
    </>
  );
};

export default PageList;