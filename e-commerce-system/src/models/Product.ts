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
    dimensions:  Dimension;
    warrantyInfo: string;
    shippingInfo: string;
    availabilityStatus: string;
    reviews: Review[]; 
    returnPolicy: string;
    minOrderQuantity:  number;
    _meta: Meta;
    thumbnail: string;
    images: string[];
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