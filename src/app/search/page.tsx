import SearchBar from "./SearchBar";
import NavTabs from "./NavTabs";
import TabContent from "./TabContent";
import Header from "@/components/landingPage/Header/Header";
import { dummyData } from "./dummyData";

export default function Page() {
  // const elements = dummyData.map(function(element){
  //     return(
  //         <SearchBar
  //                 key = {element.id}
  //                 title = {element.title}
  //         />
  //     )
  // })

  return (
    <>
      {/* <Header/> */}
      <div className="container mx-auto md:px-28 py-20">
        <SearchBar />
        <NavTabs />
        <TabContent />
      </div>
      {/* {elements} */}
    </>
  );
}
