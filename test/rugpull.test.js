const RugPull = artifacts.require("RugPull")

require('chai')
	.use(require('chai-as-promised'))
	.should()

contract('RugPull', (accounts) => {

	let rugPull
	let owner = accounts[0]

	before(async () => {
		rugPull = await RugPull.new({from: owner})
	})

	describe('RugPull', async () => {
		it('has a name', async () => {
			const name = await rugPull.name()
			assert.equal(name, 'Rug Pull')
		})

		it('results in right balance', async () => {
			const balance = await rugPull.balanceOf(owner)
			assert.equal(balance, 10**27)
		})

		it('allows transfer', async () => {
			let transferAmount = 10**18
			await rugPull.transfer(accounts[1], transferAmount, {from:owner})
			const balanceOwner = await rugPull.balanceOf(owner)
			const balanceOther = await rugPull.balanceOf(accounts[1])



			// assert.equal(balanceOther.toString(), transferAmount.toString())
			// assert.equal(balanceOwner, (10**9 - 1) * 10**18)
		})

	})
})