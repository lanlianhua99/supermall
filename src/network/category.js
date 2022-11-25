import { request } from "./request";

export function getCategoryList() {
  return request({
    url: "https://api-hmugo-web.itheima.net/api/public/v1/home/floordata"
  });
}

