import Layout from "./Layout";
import faker from "faker";

  const config = {
      title: "components/Layout"
  }

  export default config
  const PLACEHOLDER_TEXT =`
  
  `

  const Default = ()=>{
      return <Layout>{faker.lorem.paragraphs(5)}</Layout>
  }

export {
    Default
};