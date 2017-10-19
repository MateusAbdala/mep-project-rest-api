export default {

    mongo: {
     	default: {
    		port: 27017
    	},
    	development: {
				db: 'mepProjectdev',
				host: 'localhost'
    	},
    	production: {
				db: 'mepProject',
				host: 'localhost'
    	}
    }

}