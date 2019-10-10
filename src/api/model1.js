import request from "@/utils/request1";
export function model1Req(data) {
  return request({
    url: data.url,
    method: 'get',
    data
  })
}
