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

class Product {
    id: number ;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercantage: number;
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
}