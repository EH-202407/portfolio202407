import CommonHeader from '../components/CommonHeader';
import CommonFooter from '../components/CommonFooter';
import CommonToTopButton from '../components/CommonToTopButton';

const PageNotFound = () => {
  return (
    <>
      <CommonHeader />
      <main>
        <h1>404 NotFound</h1>
        <p>ページが見つかりませんでした。</p>
      </main>
      <CommonFooter />
      <CommonToTopButton />
    </>
  );
};

export default PageNotFound;