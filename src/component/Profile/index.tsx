import React from "react";
import style from "./index.module.scss";

interface Props {
  name: string;
  img: string;
}

const Profile = (props: Props) => {
  return (
    <div className={style.UserBlock}>
      <div>
        <img src={props.img} alt={props.name} />
      </div>
      <div>
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default React.memo(Profile);
