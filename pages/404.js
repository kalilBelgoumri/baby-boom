import { Result, Button } from "antd";
import Router from "next/router";
import { useEffect } from "react";
export default function NotFound() {
  useEffect(() => {
    setTimeout(() => {
      Router.push("/");
    }, 5000);
  }, []);

  return (
    <Result
      status="404"
      title="404"
      subTitle="Déoslé la page n'existe pas."
      extra={
        <Button onClick={() => Router.push("/")} type="primary">
          Retour a la Maison
        </Button>
      }
    />
  );
}
