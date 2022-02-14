import { Result, Button } from "antd";

export default function NotFound500() {
  useEffect(() => {
    setTimeout(() => {
      Router.push("/");
    }, 5000);
  }, []);

  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={
        <Button onClick={() => Router.push("/")} type="primary">
          Retour a la Maison :)
        </Button>
      }
    />
  );
}
