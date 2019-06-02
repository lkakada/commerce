const Product = require('mongoose').model('Product');
const { Http } = require('@status/codes');

module.exports = {
	index(req, res) {
        Product.find({})
            .then(products => res.json(products))
            .catch(error => res.status(Http.InternalServerError).json(error))
    },
    create(req, res) {
	    Product.create(req.body)
	      	.then(product => res.json(product))
	      	.catch(error => {
	        	const errors = Object.keys(error.errors).map(key => error.errors[key].message);
	        	res.status(Http.UnprocessableEntity).json(errors);
	      	})
	 },
	 show(req, res) {
	    const {product_id} = req.params;
	    Product.findById(product_id)
	      	.then(product => res.json(product))
	      	.catch(error => res.status(Http.InternalServerError).json(error))
	},
	destroy(req, res) {
	    const {product_id} = req.params;
	    Product.findByIdAndRemove(product_id)
	      	.then(removedProduct => res.json(removedProduct))
	      	.catch(error => res.status(Http.ResetContent).json(error))
	},
	update(req, res) {
	    const {product_id} = req.params;
	    Product.findByIdAndUpdate(product_id, req.body, {new: true})
	      	.then(updatedProduct => res.json(updatedProduct))
	      	.catch(error => {
	        	const errors = Object.keys(error.errors).map(key => error.errors[key].message);
	     		res.status(Http.UnprocessableEntity).json(errors);
	      	})
	}
}