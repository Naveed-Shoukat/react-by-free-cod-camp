import Footer from './components/Footer';
import Header from './components/Header';
import MainContents from './components/MainContents';

export default function App() {
  return (
    <div>
      <Header />
      <div className="main-container">
        <MainContents />
        <Footer />
      </div>
    </div>
  );
}
