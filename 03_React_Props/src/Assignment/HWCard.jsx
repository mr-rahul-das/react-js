import HWButton from "./HWButton";

function HWCard(props) {
    let { img, name, skill } = props.developer;

    return (
        <div className="card shadow m-3">
            <div className="card-header">
                <img className="img-fluid" src={img} alt="#" />
            </div>
            <div className="card-body">
                <h4>Name: <i>{name}</i></h4>
                <h5>Skills: <i>{skill}</i></h5>
                <p style={{ textAlign: "justify" }}>
                    <b>About: </b>
                    Lorem, Saepe asperiores corrupti velit distinctio ratione, tenetur amet aspernatur!
                    Id tenetur illo corrupti sequi molestias et fuga, nesciunt sint qui voluptates totam eligendi delectus quisquam similique, quia vitae.

                </p>
            </div>
            <div className="card-footer text-center">
                <HWButton name="Inspect" color={"btn-primary"} />
            </div>
        </div>
    );
}
export default HWCard;