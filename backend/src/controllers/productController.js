import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc Fetch all products
// @route GET /api/products
// @access Public

export const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 10; //test 2
  const page = Number(req.query.pageNumber) || 1;
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const count = await Product.countDocuments({ ...keyword });
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  return res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

// @desc Fetch single product
// @route GET/api/products/:id
// @access Public
export const getProductsById = asyncHandler(async (req, res) => {
  const productExists = await Product.findById(req.params.id);
  if (productExists) res.status(200).json({ productExists });
  else res.status(404).json({ message: "Product not found" });
});

// @desc Delete single product
// @route DELETE/api/products/:id
// @access Private/Admin
export const deleteProduct = asyncHandler(async (req, res) => {
  const productExists = await Product.findById(req.params.id);
  if (productExists) {
    await Product.deleteOne({ _id: productExists._id });
    res.status(200).json({ message: "Product removed" });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});
// @desc Create a product
// @route GET/api/products
// @access Private/Admin
export const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Sample name",
    price: 0,
    user: req.user._id,
    image: "image/sample.jpg",
    brand: "Sample brand",
    category: "Sample category",
    countInStock: 0,
    numReviews: 0,
    description: "Sample description",
  });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// @desc Update a product
// @route PUT /api/products/:id
// @access Private/Admin
export const updateProduct = asyncHandler(async (req, res) => {
  console.log("yo de nuevo ,,, ");
  const productExists = await Product.findById(req.params.id);
  console.log(productExists);
  if (productExists) {
    productExists.name = "Sample name Updated Funca";
    productExists.price = 0;
    productExists.user = req.user._id;
    productExists.image = "image/sample.jpg";
    productExists.brand = "Sample brand Updated";
    productExists.category = "Sample category Updated";
    productExists.countInStock = 0;
    productExists.numReviews = 0;
    productExists.description = "Sample description Updated";
    await productExists.save();

    res.status(200).json(productExists);
  } else res.status(404).json({ message: "Product not found" });
});

// @desc Creat new review
// @route POST /api/products/:id/reviews
// @access Private
export const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;
  const product = await Product.findById(req.params.id);
  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );
    if (alreadyReviewed) {
      res.status(400);
      throw new Error("Product already reviewed");
    }
    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };
    product.reviews.push(review);
    product.numReviews = product.reviews.length;
    product.ratings =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;
    await product.save();
    res.status(201).json({ message: "Review added" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});
//@desc Get top rated products
//@route GET /api/products/top
//@access Public
export const getTopProducts = asyncHandler(async (req, res) => {
  const productsTop = await Product.find().sort({ ratings: "desc" }).limit(3);
  res.status(200).json(productsTop);
});
