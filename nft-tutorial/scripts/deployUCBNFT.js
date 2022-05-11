
const hre = require("hardhat");

async function main() {
  const UCBNFT = await hre.ethers.getContractFactory("UCBNFT");
  const ucbNFT = await UCBNFT.deploy();

  await ucbNFT.deployed();

  console.log("UCBNFT deployed to:", ucbNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
