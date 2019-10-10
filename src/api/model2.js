import request from "@/utils/request2";
export function model2Req(data) {
  return request({
    url: data.url,
    method: 'get',
    data
  })
}
