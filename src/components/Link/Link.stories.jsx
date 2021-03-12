import Link from "./Link";

const config = {
  title: "components/Link",
};

export default config;

const Default = () => {
  return <Link>Click Me!</Link>;
};

const Disabled= () => {
    return <Link disabled>Click Me!</Link>;
  };

export { Default, Disabled };
