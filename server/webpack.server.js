module.exports = {
	//building a nodeJS bundle
	target: 'node',
	//root file of application
	entry: './src/index.js',
	//where to put the bundle
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
	},
	//run babel on every file
	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: [
						'react',
						'stage-0',
						[
							'env',
							{
								targets: {
									browsers: ['last 2 versions'],
								},
							},
						],
					],
				},
			},
		],
	},
};
