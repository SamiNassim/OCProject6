import { useEffect, useState } from "react"
import { useParams } from "react-router"
import "./Property.scss";
import Tag from "../../components/Tag/Tag";
import Collapse from "../../components/Collapse/Collapse";
import Carousel from "../../components/Carousel/Carousel";
import Rating from "../../components/Rating/Rating";

function Property() {

    const [propertyData, setPropertyData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { id } = useParams();

    useEffect(() => {
        fetch("../../logements.json")
            .then((response) => response.json()
                .then((data) => {
                    const property = data.find(property => property.id === id);
                    console.log(property);
                    setPropertyData(property)
                    setIsLoading(true);
                })
                .catch((error) => console.log(error))
            )
    }, [])

    console.log(propertyData)


    console.log(id);

    if (isLoading)

        return (
            <div className="property__div" >
                <Carousel slides={propertyData.pictures} />
                <div className="informations">
                    <div className="info__div">
                        <div className="title__div">
                            <h1 className="property__name">{propertyData.title}</h1>
                            <h2 className="property__location">{propertyData.location}</h2>
                            <div className="tags">
                                {propertyData.tags.map((property) => (<Tag tagname={property} />))}
                            </div>
                        </div>
                    </div>
                    <div className="host__group">
                        <div className="host__div">
                            <h2 className="host__name">{propertyData.host.name}</h2>
                            <img className="host__img" src={propertyData.host.picture} alt="Propriétaire" />
                        </div>
                        <div className="rating">
                            <Rating rating={propertyData.rating} />
                        </div>
                    </div>
                </div>
                <div className="collapses">
                    <Collapse title="Description" text={propertyData.description} id="desc" iddiv="desc-open" />
                    <Collapse title="Équipements" text={propertyData.equipments.map(equipments => <li className="equipments">{equipments}</li>)} id="equip" iddiv="equip-open" />
                </div>
            </div>
        )

}

export default Property;