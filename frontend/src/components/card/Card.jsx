import style from "./Card.module.css";
import PropTypes from "prop-types";

export const Card = ({ job }) => {
  return (
    <div className={style.card}>
      <div className={style.photo}>
        <picture className={style.picture}>
          <img
            src={job.company.logo}
            alt="Jobs Image"
            className={style.image}
          />
        </picture>
      </div>
      <div className={style.detail}>
        <h2 className={style.title}>{job.title}</h2>
        <ul className={style.extra}>
          <li>{job.company.name}</li>
          <li>{job.type}</li>
          <li>50-100 employees</li>
          <li>{job.salary}</li>
        </ul>
        <div className={style.country}>
          <button className={style.button}>
            <img src={job.location.logo} alt="" className={style.icon} />
            {job.location.city}
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  job: PropTypes.object.isRequired,
};
