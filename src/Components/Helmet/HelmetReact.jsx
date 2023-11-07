import { Helmet } from "react-helmet";

const HelmetReact = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default HelmetReact;
