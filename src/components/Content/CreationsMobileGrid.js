import CuriosityImg from "../../assets/mobile/image-curiosity.jpg";
import DeepEarthImg from "../../assets/mobile/image-deep-earth.jpg";
import FisheyeImg from "../../assets/mobile/image-fisheye.jpg";
import FromAboveImg from "../../assets/mobile/image-from-above.jpg";
import GridImg from "../../assets/mobile/image-grid.jpg";
import NightArcadeImg from "../../assets/mobile/image-night-arcade.jpg";
import PocketBorealisImg from "../../assets/mobile/image-pocket-borealis.jpg";
import SoccerTeamImg from "../../assets/mobile/image-soccer-team.jpg";

import "../../styles/CreationsMobileGrid.css";

const images = [
    {
        title: "DEEP EARTH",
        class: "earth",
        img: DeepEarthImg
    },
    {
        title: "NIGHT ARCADE",
        class: "arcade",
        img: NightArcadeImg
    },
    {
        title: "SOCCER TEAM VR",
        class: "soccer",
        img: SoccerTeamImg
    },
    {
        title: "THE GRID",
        class: "grid",
        img: GridImg
    },
    {
        title: "FROM UP ABOVE VR",
        class: "from-above",
        img: FromAboveImg
    },
    {
        title: "POCKET BOREALIS",
        class: "borealis",
        img: PocketBorealisImg
    },
    {
        title: "THE CURIOSITY",
        class: "curiosity",
        img: CuriosityImg
    },
    {
        title: "MAKE IT FISHEYE",
        class: "fisheye",
        img: FisheyeImg
    }
]

const CreationsMobileGrid = () => {
    return (
        <div className="lp-creations-mobile-grid">
            {
                images.map((item, idx) => {
                    return (
                        <button 
                            key={idx}
                            className={`lp-creations-mobile-grid-btn ${item.class}-btn`}
                        >
                            {/* <img 
                                className={`grid-item-img ${item.title}-img`}
                                src={item.img}
                                alt={`${item.title} img`}
                            /> */}
                            <p className={`grid-btn-title ${item.class}-title`}>{item.title}</p>
                        </button>
                    )
                })
            }
        </div>
    );
}

export default CreationsMobileGrid;