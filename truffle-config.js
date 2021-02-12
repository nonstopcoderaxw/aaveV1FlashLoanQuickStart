module.exports = {
	// See <http://truffleframework.com/docs/advanced/configuration> to customize your Truffle configuration!
	// contracts_build_directory: path.join(__dirname, "client/src/contracts"),
	networks: {
	  development: {
	    host: "127.0.0.1",
	    port: 8545,
	    gasPrice: 36000000000,
	    network_id: "*",
	    skipDryRun: true
	  }
	},
	compilers: {
		solc: {
			version: "0.6.12",
			docker: false,
			optimizer: {
	    	enabled: true,
	    	runs: 9999999
  		}
		},
	}
}
