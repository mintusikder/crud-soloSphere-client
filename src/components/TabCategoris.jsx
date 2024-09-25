import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const TabCategoris = () => {
  return (
    <Tabs>
      <div className="px-6 py-10 mx-auto">
        <h1 className="text-center text-2xl font-semibold md:text-3xl">
            Category section
        </h1>
        <p className="max-w-3xl mx-auto my-6 text-center">
     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ipsam expedita, repellendus deserunt architecto, nemo sunt recusandae repellat libero quam vel tempore, id quidem.
        </p>
        <div className="flex items-center justify-center">
          <TabList>
            <Tab>Web</Tab>
            <Tab>Graphics</Tab>
            <Tab>Digital</Tab>
          </TabList>
        </div>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default TabCategoris;
