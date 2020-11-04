const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            default: ""
        },

    },
    {
        timestamps: true
    }
);

const Category = mongoose.model("category", categorySchema);

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        price: {
            type: Number,
            required: true,
            default: 0
        },
        openstock: {
            type: Number,
            default: 0
        },
        currency: {
            type: String
        },
        category_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'category'
        }
    },
    {
        timestamps: true
    }
);

const Products = mongoose.model("products", productSchema);

categorySchema.pre('deleteOne', function (next) {
    const categoryId = this.getQuery()["_id"];
    mongoose.model("products").deleteMany({ 'category_id': personId }, function (err, result) {
        if (err) {
            console.log(`[error] ${err}`);
            next(err);
        } else {
            console.log('success');
            next();
        }
    });
});

module.exports = {
    Products,
    Category
} 