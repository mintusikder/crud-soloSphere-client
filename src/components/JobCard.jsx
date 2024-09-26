
const JobCard = ({job}) => {
    const {job_title, category,description} = job || {}
    return (
        <div className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
        <div className="flex items-center justify-between">
            <span className="text-sm font-light text-gray-800 dark:text-gray-400">Courses and MOOCs</span>
            <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">{category}</span>
        </div>
    
        <div>
            <h1 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white">{job_title}</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              {description}
            </p>
        </div>
    
        <div>
            <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
                <span>Visit on:</span>
                <a className="mx-2 text-blue-600 cursor-pointer dark:text-blue-400 hover:underline" tabIndex="0" role="link">edx.org</a>
                <span>or</span>
                <a className="mx-2 text-blue-600 cursor-pointer dark:text-blue-400 hover:underline" tabIndex="0" role="link">classcentral.com</a>
            </div>
    
           
        </div>
    </div>
    
    );
};

export default JobCard;