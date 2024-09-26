import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";
import { useEffect, useState } from "react";
import axios from "axios";
const TabCategoris = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`);
      setJobs(data);
    };
    getData();
  }, []);
  return (
    <Tabs>
      <div className="px-6 py-10 mx-auto">
        <h1 className="text-center text-2xl font-semibold md:text-3xl">
          Category section
        </h1>
        <p className="max-w-3xl mx-auto my-6 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ipsam
          expedita, repellendus deserunt architecto, nemo sunt recusandae
          repellat libero quam vel tempore, id quidem.
        </p>
        <div className="flex items-center justify-center">
          <TabList>
            <Tab>Web Development</Tab>
            <Tab>Graphics Design</Tab>
            <Tab>Digital Marketing</Tab>
          </TabList>
        </div>

        <TabPanel>
          <div className="grid  grid-cols-1 mt:8 xl:mt-16 md:grid-cols-3  gap-8">
            {jobs
              .filter((j) => j.category === "Web Development")
              .map((job) => (
                <JobCard key={job._id} job={job}></JobCard>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid  grid-cols-1 mt:8 xl:mt-16 md:grid-cols-3  gap-8">
            {jobs
              .filter((j) => j.category === "Graphics Design")
              .map((job) => (
                <JobCard key={job._id} job={job}></JobCard>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid  grid-cols-1 mt:8 xl:mt-16 md:grid-cols-3 gap-8">
            {jobs
              .filter((j) => j.category === "Digital Marketing")
              .map((job) => (
                <JobCard key={job._id} job={job}></JobCard>
              ))}
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default TabCategoris;
