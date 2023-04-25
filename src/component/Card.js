import React from "react";

const Card = ({ item }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {item.map((Val) => {
            return (
              <div
                className="col-md-3 col-sm-6 card my-3 py-3 border-0"
                key={Val.id}
              >
                <div className="card-img-top text-center">
                  <img src={Val.img} alt={Val.title}  style={{ width: "00px", height: "300px" }} className="photo w-75" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;