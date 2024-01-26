import { HttpResponse, delay, http } from "msw";
import { API_BASE_URL } from "../../utils/api/api";


export const handlers = [
  http.get(API_BASE_URL, async () => {
    await delay(150)
    return HttpResponse.json({
      "data": [
          {
              "date": "2023-03-09",
              "confirmed": 17042722,
              "deaths": 101492,
              "recovered": 0,
              "confirmed_diff": 0,
              "deaths_diff": 0,
              "recovered_diff": 0,
              "last_update": "2023-01-30 23:20:55",
              "active": 16941230,
              "active_diff": 0,
              "fatality_rate": 0.006,
              "region": {
                  "iso": "TUR",
                  "name": "Turkey",
                  "province": "",
                  "lat": "38.9637",
                  "long": "35.2433",
                  "cities": []
              }
          }
      ]
  })
  })
]

// const server = setupServer(...handlers)
