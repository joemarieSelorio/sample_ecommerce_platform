# sample_ecommerce_platform

APIs for the sample ecommerce platform


## Installation

- [Git](https://git-scm.com/downloads)
- [Node 14.x.x](https://nodejs.org)
- [NPM 6.x.x](https://nodejs.org)
- [MongoDB 4.2.x](https://docs.mongodb.com/manual/administration/install-community/)


### Steps

- Manual

	- Clone repository - SSH or HTTPS

		```
		https://github.com/joemarieSelorio/sample_ecommerce_platform_web.git
		```

	- Access application directory

		```
		cd sample_ecommerce_platform
		```

	- Copy the sample config and update as necessary

		```
		cp sample.env .env
		```

		```
		vim .env
		```
- Running the application

	- Run the application manually
		- Install dependencies

			```
			npm install
			```
	- Start

			Recommended:

			```
			npm start
			```

			Bypass checks, file watching and auto-generation:

			```
			node app.js
			```
- Check if application is running

	```
	curl http://<HOST>:<PORT>/
	```
- Run tests
	Unit tests:

	```
	npm run test
	```
## Documentation
- [API](docs/api)
- [Postman Collection](docs/postman)
## License
