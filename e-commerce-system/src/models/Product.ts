interface dimension {
    width: number;
    height: number;
    depth: string;
}

interface review {
    rating: number;
    comment: string;
    date: Date;
    reviewerName: string;
    reviewerEmail: string;
}

interface meta {
    createdAt: Date;
    updatedAt: Date;
    barcode: string;
    qrCode: string;
}

interface Product {
    id: number ;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions:  dimension;
    warrantyInfo: string;
    shippingInfo: string;
    availabilityStatus: string;
    reviews: review[]; 
    returnPolicy: string;
    minOrderQuantity:  number;
    _meta: meta;
    thumbnail: string;
    images: string[];
   
    constructor(
        id: number, title: string, description: string,
        category: string, price: number, discountPercentage: number,
        rating: number, stock: number, tags: string[], 
        brand: string, sku: string, weight: number,
        dimensions: dimension, warrantyInfo: string, shippingInfo: string,
        availabilityStatus: string, reviews: review[], returnPolicy: string,
        minOrderQuantity: number, _meta: meta,thumbnail: string, images: string[]
    ){
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.rating = rating;
        this.stock = stock;
        this.tags = tags;
        this.brand = brand;
        this.sku = sku;
        this.weight = weight;
        this.dimensions = dimensions;
        this.warrantyInfo = warrantyInfo;
        this.shippingInfo = shippingInfo;
        this.availabilityStatus = availabilityStatus;
        this.reviews = reviews;
        this.returnPolicy = returnPolicy;
        this.minOrderQuantity = minOrderQuantity;
        this._meta = _meta;
        this.thumbnail = thumbnail;
        this.images = images;
    }
}