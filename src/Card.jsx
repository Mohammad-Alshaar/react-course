import pic from "./assets/50724738_353495111911565_7300496233334833152_o.jpg";
function Card() {
  return (
    <div className="card">
      <img src={pic} alt="" className="card-img" width={150} />
      <h2 className="title-img">Muhammad Al-shaar</h2>
      <p className="desc-img">Software developer</p>
    </div>
  );
}
export default Card;
