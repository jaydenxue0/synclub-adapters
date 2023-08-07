const { get } = require("../helper/http")
let _res

async function getData() {
  if (!_res) _res = get("https://www.synclub.io/staas/v1/public/staking/synclub/tvl")
  return _res
}

async function bscTvl() {
  const res = await getData()
  return {
    "binancecoin": res.bnb.nativeStaked
  }
}

module.exports = {
  timetravel: false,
  methodology: 'We aggregated the assets staked across synclub staking protocols',
  bsc: {
    tvl: bscTvl
  }
}

