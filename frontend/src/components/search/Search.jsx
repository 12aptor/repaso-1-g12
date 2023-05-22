import PropTypes from "prop-types";
import style from "./Search.module.css";

export const Search = ({ setJobs, completeJobs }) => {
  const handleInputChange = (event) => {
    const { value } = event.target;
    const filteredJobs = completeJobs.filter((job) =>
      job.title.toLowerCase().includes(value.toLowerCase())
    );
    setJobs(filteredJobs);
  };

  return (
    <div className={style.search}>
      <picture className={style.picture}>
        <img
          src="/search.png"
          alt="Search Icon"
          className={style.icon}
          loading="lazy"
        />
      </picture>
      <input
        type="text"
        className={style.input}
        onChange={handleInputChange}
        placeholder="Search jobs"
      />
    </div>
  );
};

Search.propTypes = {
  completeJobs: PropTypes.array.isRequired,
  setJobs: PropTypes.func.isRequired,
};
