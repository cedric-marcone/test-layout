import * as React from "react";
import Layout from "./layout";
import type * as Type from "./types";

type Props = {
  dialog: boolean;
};

export default function Merchants({ dialog }: Props) {
  const [data, setData] = React.useState<Type.Data>();

  React.useEffect(() => {
    const runEffect = async () => {
      const data = await fetchMerchants();
      setData(data);
    };
    runEffect();
  }, []);

  if (!data) {
    return null;
  }

  return <Layout data={data} dialog={dialog} />;
}

async function fetchMerchants() {
  const response = await fetch("/mock/lodging.json");
  return response.json() as Promise<Type.Data>;
}
