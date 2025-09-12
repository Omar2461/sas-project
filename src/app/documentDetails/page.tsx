import Breadcrumb from "./Breadcrumb";
import DocumentDetails from "./DocumentDetails";
import Activity from "./Activity";
import Comment from "./Comment";

export default function Page() {
  return (
    <div className="container mx-auto px-10 md:px-28 py-20">
      <Breadcrumb />
      <DocumentDetails />
      <Activity />
      <Comment />
    </div>
  );
}
