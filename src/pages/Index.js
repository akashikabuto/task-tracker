import IndexBar from "../components/IndexBar";
import IndexBody from "../components/IndexBody";
import '../css/indexPage.css';

function Index() {
  return (
    <div className="index-container" >
      <IndexBar />
      <IndexBody />
    </div>
  );
}

export default Index;