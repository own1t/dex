// const Dai = artifacts.require("mocks/Dai.sol");
// const Bat = artifacts.require("mocks/Bat.sol");
// const Rep = artifacts.require("mocks/Rep.sol");
// const Zrx = artifacts.require("mocks/Zrx.sol");
const Dex = artifacts.require("Dex.sol");

// Rinkeby

const [DAI, WETH, BAT, REP, WBTC, ZRX, WEENUS, XEENUS] = [
  "DAI",
  "WETH",
  "BAT",
  "REP",
  "WBTC",
  "ZRX",
  "WEENUS",
  "XEENUS",
].map((ticker) => web3.utils.fromAscii(ticker));

const daiAddress = "0x5592EC0cfb4dbc12D3aB100b257153436a1f0FEa";
const wethAddress = "0xc778417e063141139fce010982780140aa0cd5ab";
const batAddress = "0xbF7A7169562078c96f0eC1A8aFD6aE50f12e5A99";
const repAddress = "0x6e894660985207feb7cf89Faf048998c71E8EE89";
const wbtcAddress = "0x577D296678535e4903D59A4C929B718e1D575e0A";
const zrxAddress = "0xddea378A6dDC8AfeC82C36E9b0078826bf9e68B6";

const weenusAddress = "0xaFF4481D10270F50f203E0763e2597776068CBc5";
const xeenusAddress = "0x022E292b44B5a146F2e8ee36Ff44D3dd863C915c";

module.exports = async function (deployer) {
  await deployer.deploy(Dex);

  const DEX = await Dex.deployed();

  await DEX.addToken(DAI, daiAddress);

  await Promise.all([
    DEX.addToken(WETH, wethAddress),
    DEX.addToken(BAT, batAddress),
    DEX.addToken(REP, repAddress),
    DEX.addToken(WBTC, wbtcAddress),
    DEX.addToken(ZRX, zrxAddress),
    DEX.addToken(WEENUS, weenusAddress),
    DEX.addToken(XEENUS, xeenusAddress),
  ]);
};

// Local Development

// const [DAI, BAT, REP, ZRX] = ["DAI", "BAT", "REP", "ZRX"].map((ticker) =>
//   web3.utils.fromAscii(ticker)
// );

// module.exports = async function (deployer, _network, accounts) {
//   const [trader1, trader2, trader3, trader4, _] = accounts;

//   await Promise.all(
//     [Dai, Bat, Rep, Zrx, Dex].map((contract) => deployer.deploy(contract))
//   );

//   const [dai, bat, rep, zrx, dex] = await Promise.all(
//     [Dai, Bat, Rep, Zrx, Dex].map((contract) => contract.deployed())
//   );

//   await Promise.all([
//     dex.addToken(DAI, dai.address),
//     dex.addToken(BAT, bat.address),
//     dex.addToken(REP, rep.address),
//     dex.addToken(ZRX, zrx.address),
//   ]);

//   const amount = web3.utils.toWei("100000");

//   const seedTokenBalance = async (token, trader) => {
//     await token.faucet(trader, amount);
//     await token.approve(dex.address, amount, { from: trader });
//     const ticker = await token.name();
//     await dex.deposit(amount, web3.utils.fromAscii(ticker), { from: trader });
//   };

//   await Promise.all(
//     [dai, bat, rep, zrx].map((token) => seedTokenBalance(token, trader1))
//   );

//   await Promise.all(
//     [dai, bat, rep, zrx].map((token) => seedTokenBalance(token, trader2))
//   );

//   await Promise.all(
//     [dai, bat, rep, zrx].map((token) => seedTokenBalance(token, trader3))
//   );

//   await Promise.all(
//     [dai, bat, rep, zrx].map((token) => seedTokenBalance(token, trader4))
//   );
// };
