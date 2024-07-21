import CommonHeader from '../components/CommonHeader';
import CommonTitle from '../components/CommonTitle';
import PartDescription from '../components/PartDescription';
import CommonFooter from '../components/CommonFooter';
import CommonToTopButton from '../components/CommonToTopButton';

const thisPageTitle = 'このアプリについて';
const thisPageDescriptions = [
  {
    title: '制作の動機',
    text: 'ウクレレを始めた家族のために、パソコンで楽譜を表示できるWebアプリを作りました。\n著作権等の問題があるため、楽曲データはブラウザ（使用者の手元）に保存するようにしました。'
  },
  {
    title: '開発環境・言語など',
    text: '・OS：macOS\n・エディタ：Visual Studio Code\n・ブラウザ：Safar、Google Chrome\n\n・開発言語：HTML/CSS、JavaScript\n・フレームワーク：React+Vite\n・データベース：IndexedDB'
  },
  {
    title: '今後追加予定の機能',
    text: '・一覧画面：全件削除ボタン\n・詳細画面：編集画面に移動するボタン\n・入力値のバリデーション'
  },
];

const PageAbout = () => {
  return (
    <>
      <CommonHeader />
      <main>
        <CommonTitle thisPageTitle={thisPageTitle} />
        {thisPageDescriptions.map((data, index) =>
          <PartDescription thisPageDescription={data} key={index} />
        )}
      </main>
      <CommonFooter />
      <CommonToTopButton />
    </>
  );
};

export default PageAbout;