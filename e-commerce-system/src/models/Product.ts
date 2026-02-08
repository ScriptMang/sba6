interface dimension {
    width: number;
    height: number;
    depth: string;
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
    dimensions:  dimension; // need a dimension interface type object
    warrantyInfo: string;
    shippingInfo: string;
    availabilityStatus: string;
    reviews: string[]; // need a review interface type object
    returnPolicy: string;
    minOrderQuantity:  number;
    meta: object; // need a meta interface type object
    thumbnail: string;
    images: string[];
}