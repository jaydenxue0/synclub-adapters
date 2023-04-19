const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000"

const chains = {
  "ethereum": {
    reserveFactory: "0xe23d0839DC1aA2b92cBb2919A675DA8A981145E6",
    pairFactory: "0x403aD1530de516A99e23dF1B5df926DF4A5e6b8F",
    WOW: "0x3405A1bd46B85c5C029483FbECf2F3E611026e45",
    xWOW: "0x34be73a499137A1De3866a0fAa148Bb30aba8946",
    WOWLP: "0xE659cbac388c8FED117308003a05a9a138cbfA1f"
  },
  "bsc": {
    reserveFactory: "0x334ebaD4d6EC7Cf028022Ef8d923f674007BcEa7",
    pairFactory: "0xb58D4c6E7481DABeB47c96B57bf06Df9C26698a0",
    WOW: "0x4DA996C5Fe84755C80e108cf96Fe705174c5e36A",
    xWOW: "0x3b94B8e62c1CF0795eC6427AAbC23B269B35cfF8",
    WOWLP: "0x73cAbBe6E05290A09B9432eb765521941C870E4D"
  },
  "polygon": {
    reserveFactory: "0xb58D4c6E7481DABeB47c96B57bf06Df9C26698a0",
    pairFactory: "0x4a9Ec8f202518a2423D4e1FB2c2CEB8559153860",
    WOW: "0x855D4248672a1fCE482165e8DBE1207b94b1968a",
    xWOW: "0xe876F5e5236fFbB5285A475211Ca052bA8A56293",
    WOWLP: "0x7600Cc75fa9045986EFE0BdDEe8e18621a8dD49E"
  },
  "heco": {
    reserveFactory: "0x518C21A2Edc710b0c627DBbCb0Af34531Dd1724a",
    pairFactory: "0x86fEA7A7c7f2503cdDb4Ad0E4e7977E8bDcb1872",
    WOW: "0xeFAeeE334F0Fd1712f9a8cc375f427D9Cdd40d73",
    xWOW: "0x72c0A253C84ADa1b1379b2A66ce51862d9bf159B",
    WOWLP: "0x5E5f16A910B7b44f4F8090798BaADEfBC1388253"
  },
  "avax": {
    reserveFactory: "0x09D7C0C4cb531331beeD7fDcFD7B44200EB01e1f",
    pairFactory: "0xdf3dCd9B545Fb6FE096D07Ef962B6393CB649dFa",
    WOW: "0xA384Bc7Cdc0A93e686da9E7B8C0807cD040F4E0b",
    xWOW: "0x55fACcEa65e56f74684E88aECEd980EBf32Ffd95",
    WOWLP: "0x5085678755446F839B1B575cB3d1b6bA85C65760"
  },
  "iotex": {
    reserveFactory: "0xa0d680dbe9965b77FD42015646Bc2C0F5F461Aa3",
    pairFactory: "0xA95f470fb554eC18e68AA1B2562A99b0079601C9",
    WOW: "0xD67de0e0a0Fd7b15dC8348Bb9BE742F3c5850454",
    xWOW: "0x3E67b7c3026721C2E5E8Df9bcaAD06c36141B072",
    WOWLP: "0x8AcC588B08F5A839e6F3db17597986cFd92e20b4"
  },
  "metis": {
    reserveFactory: "0x9Bb0aF14983c837C5c5d8c8AC95B57c148AC2137",
    pairFactory: "0xa98fd60318a1253fa2BCa68CE46fE3D48c8EA602",
    WOW: "0x5CE34d9abe4bF239cbc08B89287c87f4CD6d80B7",
    xWOW: "0x3B642654c6a2C1ECe1d33cBF0EDBfDD970AEC35f",
    WOWLP: "0x1f9A2b3b05e1c43Ec6aaeF2fb727e43C4b956e30"
  },
  "kava": {
    reserveFactory: "0xa98fd60318a1253fa2BCa68CE46fE3D48c8EA602",
    pairFactory: "0xA53230B6B6e7f4FDD0f65Af954F891A77351baBF",
    WOW: "0x527805F51C448155DfBDee04bD950036A52a21f0",
    xWOW: "0x3B642654c6a2C1ECe1d33cBF0EDBfDD970AEC35f",
    WOWLP: "0x0000000000000000000000000000000000000000"
  }
};

module.exports = {
  ADDRESS_ZERO,
  chains
}