const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
const jsonTable = require('../database/jsonTable');

const categoriesModel = jsonTable('categories');
const productsModel = jsonTable('products');
const productImagesModel = jsonTable('productImages');

// const userRoute = require('../middlewares/userRoute'); //requiero el mw de usuario log

let productsTypes = [{ id: 1, name: 'Soquete' }, { id: 2, name: 'Media Larga' }, { id: 3, name: 'Bucanera' }];
let productsSize = [{ id: 1, name: 'Pequeño' }, { id: 2, name: 'Mediano' }, { id: 3, name: 'Grande' }];

let priceWithDiscount = (price, discount) => discount > 0 ? Math.round(price * ((100 - discount) / 100)) : price;

let populate = products => products.map(p => populateProduct(p));
let populateProduct = product => {
    // Add price with discount
    product.offerPrice = priceWithDiscount(product.price, product.discount);
    // Populate images
    product.images = productImagesModel.findAll('prodId', product.id);
    // Populate categories
    product.categories = product.categories.map(catId => categoriesModel.findByPK(catId));
    // Populate types
    product.type = productsTypes.find(type => product.type == type.id);
    // Populate size
    product.size = productsSize.find(size => product.size == size.id);
    return product;
};

let parseCategories = categories => {
    if(!categories) {
        categories = [];
    } else if(categories && typeof(categories) == 'string') {
        // we get single checkbox like string, but we want save an array of categories
        categories = [parseInt(categories)];
    } else {
        categories = categories.map(category => parseInt(category))
    }
    return categories;
}

let deleteImages = id => {
    let images = productImagesModel.findAll('prodId', id);
    if (images && images.length) {
        images.forEach(image => {
            const imagePath = path.join(__dirname, '../public/images/products/' + image.name);
            fs.existsSync(imagePath) ? fs.unlinkSync(imagePath) : '';
            productImagesModel.delete(image.id);
        });
    }
}

let categoryMatch = categoryName => categoriesModel.findByFields(['name'], categoryName);

let findProductsByRelatedCategory = (categories, type) => {
    let filteredByType = categories.filter(category => category.type == type);
    if(filteredByType.length) {
        return filteredByType[0].related.
        map(catId => categoriesModel.findByPK(catId)).
        map(category => productsModel.findByMultivalueField('categories', category.id)).
        flat(1);
    }
    return [];
}

module.exports = {
    find: (req, res) => {
        let filter = {};
        let results;
        let category = categoryMatch(req.params.category);
        // Search by category
        if(category && category.length) {
            results = productsModel.findByMultivalueField('categories', category[0].id);
            filter.category = category[0].id;
        }
        // Search by keywords
        let query = req.query.query;
        if(!results){
            results = productsModel.findByFields(['name', 'description'], query);
            if(!results || results.length == 0) {
                results = productsModel.all();
            }
            let size = req.query.size;
            if(size) { 
                results = results.filter(product => product.size == size);
                filter.size = size;
            }
            let type = req.query.type;
            if(type) {
                results = results.filter(product => product.type == type);
                filter.type = type;
            }
        }
        // Populate
        if(results && results.length) {
            populate(results);
        };
        // Categories
        let categories = categoriesModel.all();
        res.render('products/find', { results, query, filter, productsTypes, productsSize, categories });
    },
    list: (req, res) => {
        let products = productsModel.all();
        populate(products);
        res.render('products/list', { products, productsTypes, productsSize });
    },
    detail: (req,res) => {
        let product = productsModel.findByPK(req.params.id);
        populateProduct(product);
        res.render('products/detail', { product });
    },
    show: (req,res) => {
        let product = productsModel.findByPK(req.params.id);
        populateProduct(product);
        let related = findProductsByRelatedCategory(product.categories, 'personaje');
        populate(related);
        res.render('products/show', { product, related, productsSize});
    },
    create: (req,res) => {
        let categories = categoriesModel.all();
        res.render('products/create-form', { productsTypes, productsSize, categories });
    },
    store: (req,res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let product = {
                name: req.body.name,
                price: parseFloat(req.body.price),
                discount: parseFloat(req.body.discount),
                description: req.body.description,
                size: parseInt(req.body.size),
                type: parseInt(req.body.type),
                categories: parseCategories(req.body.categories)
            }
            let id = productsModel.create(product);
            req.files.forEach(file => {
                let productImage = { prodId: id, name: file.filename };
                productImagesModel.create(productImage);
            });
            res.redirect('/products/' + id);
        } else {
            let categories = categoriesModel.all();
            res.render('products/create-form', { errors: errors.mapped(), product: req.body, productsTypes,productsSize, categories });
        }
    },
    edit: (req,res) => {
        let categories = categoriesModel.all();
        let product = productsModel.findByPK(req.params.id);
        let productImages = productImagesModel.findAll('prodId', req.params.id);
        res.render('products/edit-form', { product, productImages, productsTypes, productsSize, categories });
    },
    update: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()){
            let product = {
                id: parseInt(req.params.id),
                name: req.body.name,
                price: parseFloat(req.body.price),
                discount: req.body.discount,
                description: req.body.description,
                size: parseInt(req.body.size),
                type: parseInt(req.body.type),
                categories: parseCategories(req.body.categories)
            };
            let id = productsModel.update(product);
            // Eliminar imágenes actuales
            if(req.body.removeCurrentImages) {
                deleteImages(id);
            }
            // Guardar nuevas imágenes
            req.files.forEach(file => productImagesModel.create({ prodId: id, name: file.filename }));
            res.redirect('/products/' + id);
        } else {
            let productImages = productImagesModel.findAll('prodId', req.params.id);
            let categories = categoriesModel.all();
            req.body.id = req.params.id;
            req.body.image = req.file ? req.file.filename : req.body.currentImage;
            res.render('products/edit-form', { errors: errors.mapped(), product: req.body, productsTypes,productsSize, productImages, categories });
        }
    },
    destroy: (req, res) => {
        let id = req.params.id;
        // remove image
        deleteImages(id);
        // remove product
        productsModel.delete(id);
        res.redirect('/products');
    },
    cart: (req,res) => {
        console.log('Not implemented yet');
        let category = categoryMatch('destacados');
        let featured = productsModel.findByMultivalueField('categories', category[0].id);
        populate(featured);
        res.render('products/cart', { featured });
    },
};