import './Artists.css';
import {ArtistsData} from './Details.js';

function Artists(){
    return(
        <div className="artists-area">
            <div className="heading-artists">
                ARTISTS
            </div>
            <div className="artists">
                {
                ArtistsData.map((props) => {
                    return(
                        <div className="flex-boxes">
                        <img src={props.image} alt="hello"/>
                        <h3>{props.name}</h3>
                        <p className="desc-para">{props.description}</p>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Artists;