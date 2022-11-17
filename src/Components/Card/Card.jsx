function Card(obj) {
  console.log(obj);
  return (
    <div className="card">
      <img width={"100%"} height={"50%"} src={obj.obj.image} alt="photo" />
      <h4>{obj.obj.name}</h4>

      <div className="cardPrice">
        <b>{obj.obj.position}</b>
      </div>
    </div>
  );
}

export default Card;
