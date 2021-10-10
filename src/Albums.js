import './Albums.css';
import { AlbumsData } from './AlbumsDetails';

function Albums(){
    return(
        <div className="albums-area" id="#albums">
            <div className="albums-heading">
                ALBUMS
            </div>
            <div className="albums">
                {
                AlbumsData.map((props) => {
                    return(
                        <div className="flex-boxes-again">
                        <img src={props.image} alt="hello"/>
                        <h4>{props.name}</h4>
                        <p className="desc-para-albums">{props.artist}</p>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Albums;