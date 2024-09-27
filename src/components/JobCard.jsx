import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const {
    _id,
    job_title,
    category,
    deadline,
    description,
    min_price,
    max_price,
    buyer_email,
  } = job || {};
  return (
    <Link
      to={`/jobs/${_id}`}
      className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800"
    >
      <div className="flex items-center justify-between">
        <span className=" font-light text-gray-800 dark:text-gray-400">
        Deadline: {deadline}
        </span>
        <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">
          {category}
        </span>
      </div>

      <div>
        <h1 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white">
          {job_title}
        </h1>
        <p title={description} className="mt-2 text-gray-600 dark:text-gray-300">
          {description.substring(0,70)}
        </p>
        <p className="mt-2 text-sm font-bold text-gray-600 dark:text-gray-300">
          Price: ${min_price} - ${max_price}
        </p>
      </div>

      
    </Link>
  );
};

export default JobCard;
