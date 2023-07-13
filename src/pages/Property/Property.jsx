import { useEffect, useState } from "react"
import { useParams } from "react-router"
import "./Property.scss";
import Tag from "../../components/Tag/Tag";
import Collapse from "../../components/Collapse/Collapse";

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
                <div className="carrousel"></div>
                <div className="info__div">
                    <div className="title__div">
                        <h1 className="property__name">{propertyData.title}</h1>
                        <h2 className="property__location">{propertyData.location}</h2>
                        <div className="tags">
                            {propertyData.tags.map((property) => (<Tag tagname={property} />))}
                        </div>
                    </div>
                    <div className="host__div">
                        <h2 className="host__name">{propertyData.host.name}</h2><img className="host__img" src={propertyData.host.picture} alt="Propriétaire" />
                    </div>
                    <div className="rating"></div>
                </div>
                <div className="collapses">
                    <Collapse title="Description" text={propertyData.description} id={id} />
                    <Collapse title="Équipements" text={propertyData.equipments} id={id} />
                </div>


            </div>
        )

}

export default Property;