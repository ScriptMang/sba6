interface Dimension {
    width: number;
    height: number;
    depth: string;
}

interface Review {
    rating: number;
    comment: string;
    date: Date;
    reviewerName: string;
    reviewerEmail: string;
}

interface Meta {
    createdAt: Date;
    updatedAt: Date;
    barcode: string;
    qrCode: string;
}

class Product {
    id: number; title: string; description: string;
    category: string; price: number; discountPercentage: number;
    rating: number; stock: number; tags: string[];
    brand: string; sku: string; weight: number;
    dimensions:  Dimension; warrantyInfo: string; shippingInfo: string;
    availabilityStatus: string; reviews: Review[];  returnPolicy: string;
    minOrderQuantity:  number; _meta: Meta; thumbnail: string;
    images: string[];

    constructor(
        id: number, title: string, description: string,
        category: string, price: number, discountPercentage: number,
        rating: number, stock: number, tags: string[],
        brand: string, sku: string, weight: number,
        dimensions:  Dimension, warrantyInfo: string, shippingInfo: string,
        availabilityStatus: string, reviews: Review[], returnPolicy: string,
        minOrderQuantity:  number, _meta: Meta, thumbnail: string,
        images: string[]
    ){
        this.id = id; this.title = title; this.description = description;
        this.category = category; this.price = price; this.discountPercentage = discountPercentage;
        this.rating = rating; this.stock = stock; this.tags = tags;
        this.brand = brand; this.sku = sku; this.weight = weight;
        this.dimensions = dimensions; this.warrantyInfo = warrantyInfo; this.shippingInfo = shippingInfo;
        this.availabilityStatus = availabilityStatus; this.reviews = reviews; this.returnPolicy = returnPolicy;
        this.minOrderQuantity = minOrderQuantity; this._meta = _meta; this.thumbnail = thumbnail;
        this.images = images;
    }
     
    displayDetails(): void{
        this.list.forEach(elem => {
            console.log(elem)
        });
    }
}


class Products{
    list: Product[];
    total: number;
    skip: number;
    limit: number;

    constructor(list: Product[], total: number, skip: number, limit: number){
        this.list = list;
        this.total = total;
        this.skip = skip;
        this.limit = limit;
    }

    displayDetails(): void{
        this.list.forEach(elem => {
            console.log(elem)
        });
        console.log("total: " + this.total);
        console.log("skip: " + this.skip);
        console.log("limit: " + this.total);
    }
}