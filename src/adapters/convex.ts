import { FeeAdapter } from "../utils/adapters.type";
import { ETHEREUM } from "@defillama/adapters/volumes/helper/chains";
import { request, gql } from "graphql-request";
import type { ChainEndpoints } from "@defillama/adapters/volumes/dexVolume.type"
import { Chain } from "../utils/constants";
import { getTimestampAtStartOfDayUTC } from "../utils/date";
import BigNumber from "bignumber.js";

const endpoints = {
  [ETHEREUM]:
    "https://api.thegraph.com/subgraphs/name/mukulmeena/convex",
};

const graph = (graphUrls: ChainEndpoints) => {
  return (chain: Chain) => {
    return async (timestamp: number) => {
        const dateId = Math.floor(getTimestampAtStartOfDayUTC(timestamp) / 86400)
        console.log(dateId)

        const graphQuery = gql
        `{
          financialsDailySnapshot(id: ${dateId}) {
              dailyTotalRevenueUSD
              dailyProtocolSideRevenueUSD
          }
        }`;
  
        const graphRes = await request(graphUrls[chain], graphQuery);
  
        const dailyFee = new BigNumber(graphRes.financialsDailySnapshot.dailyTotalRevenueUSD);
        const dailyRev = new BigNumber(graphRes.financialsDailySnapshot.dailyProtocolSideRevenueUSD);
  
      return {
        timestamp,
        totalFees: "0",
        dailyFees: dailyFee.toString(),
        totalRevenue: "0",
        dailyRevenue: dailyRev.toString(),
      };
    }
  }
};

const adapter: FeeAdapter = {
  fees: {
    [ETHEREUM]: {
      fetch: graph(endpoints)(ETHEREUM),
      start: 1621224000,
    }
  }
}

export default adapter;