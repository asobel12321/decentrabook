const SportsBetting = artifacts.require("SportsBetting");

contract("SportsBetting", accounts => {
    let instance;

    beforeEach(async () => {
        instance = await SportsBetting.deployed();
    });

    it("should allow a user to create a bet", async () => {
        await instance.createBet({ from: accounts[0], value: web3.utils.toWei("1", "ether") });
        const betCount = await instance.getBetCount();
        assert.equal(betCount.toNumber(), 1, "bet was not created");
    });

    // More tests here...
});
