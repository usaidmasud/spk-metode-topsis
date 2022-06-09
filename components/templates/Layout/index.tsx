import { useRouter } from "next/router";
import React from "react";
import Layout2 from "./Layout2";
interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = (props) => {
  const router = useRouter();
  const [navOpen, setNavOpen] = React.useState<boolean>(false);

  return (
    <Layout2>
      {props.children}
    </Layout2>
  );
};

export default Layout;
