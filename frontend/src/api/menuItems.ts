import api from "./client";

const urlPrefix = "/api/admin";

export type MenuItemUpdate = {
  name?: string;
  description?: string;
  price?: number;
};

export const fetchItems = (token: string, clientId: number) =>
  api.get(`${urlPrefix}/${token}/items`, {
    params: { client_id: clientId },
  });

export const updateItem = (token: string, id: number, data: MenuItemUpdate) =>
  api.patch(`${urlPrefix}/${token}/items/${id}`, data);

export const deleteItem = (token: string, id: number) =>
  api.delete(`${urlPrefix}/${token}/items/${id}`);
