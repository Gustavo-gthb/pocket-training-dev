import { pagarmeAPI } from "..";
import { Customers, Reponse } from "./types";

interface Props {
  data: Partial<Customers>
}

export const pagarmeCreateCustomers = async ({ data }: Props) => {
  const response = await pagarmeAPI.post('/customers', data);
  return response.data as Reponse;
}
