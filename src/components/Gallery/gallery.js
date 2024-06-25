import './gallery.css';
import '../../fonts/Font.css';

function Gallery() {
  return (
    <div className='body'>
      <div className='container'>
        <div className="gallery">
          <div className="list"><img src={process.env.PUBLIC_URL + "/img/다운로드.jpg"} alt='미니언즈1'></img>
          </div>
          <div className="list"><img src={process.env.PUBLIC_URL + "/img/미니언즈2.jpg"}alt="미니언즈2"></img>
          </div>
          <div className="list"><img src={process.env.PUBLIC_URL + "/img/미니언즈3.jpg"} alt="미니언즈3"></img>
          </div>
          <div className="list"><img src={process.env.PUBLIC_URL + "/img/미니언즈4.jpg"} alt="미니언즈4"></img>
          </div>
          <div className="list"><img src={process.env.PUBLIC_URL + "/img/미니언즈5.jpg"} alt="미니언즈5"></img>
          </div>
          <div className="list"><img src={process.env.PUBLIC_URL + "/img/미니언즈6.jpg"} alt="미니언즈6"></img>
          </div>
          <div className="list"><img src={process.env.PUBLIC_URL + "/img/미니언즈7.jpg"} alt="미니언즈7"></img>
          </div>
          <div className="list"><img src={process.env.PUBLIC_URL + "/img/미니언즈8.jpg"} alt="미니언즈8"></img>
          </div>
        </div>

      </div>


    </div>
  );
}

export default Gallery;
