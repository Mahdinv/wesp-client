import type { ActionFunctionArgs } from "react-router-dom";
import qs from "qs";

export async function action({ request }: ActionFunctionArgs) {
  const fd = await request.text();
  const data = qs.parse(fd);
  console.log(data);
}
