interface DetailedName {
    manufacturer: string;
    model: string;
}

interface DetailedPrice {
    base: number;
    gst: number;
}

interface IProduct {
    name: string;
    price: number;
}

interface IProductDetailedName {
    name: DetailedName;
    price: number;
}

interface IProductDetailedPrice {
    name: string;
    price: DetailedPrice;
}

interface IProductDetailedNameDetailedPrice {
    name: DetailedName;
    price: DetailedPrice;
}

const pen: IProduct = {
    name: "Pen",
    price: 50,
};

const pencil: IProductDetailedName = {
    name: {
        manufacturer: "Faber Castell",
        model: "HB",
    },
    price: 10,
};

const eraser: IProductDetailedNameDetailedPrice = {
    name: {
        manufacturer: 'Apsara',
        model: 'Dust free'
    },
    price: {
        base: 8,
        gst: 2
    }
}

export {}