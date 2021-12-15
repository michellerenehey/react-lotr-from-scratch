import './Main.css';
import ring from '../../ring.gif';

export default function Main() {
  return (
    <div className="main">
      <div className="mainText" style={{ backgroundImage: `url(${ring})` }}>
        <p>One Ring to rule them all, One Ring to find them,</p>
        <p>One Ring to bring them all, and in the darkness bind them.</p>
      </div>
    </div>
  );
}
