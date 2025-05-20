interface DetailedName {
    manufacturer: string;
    model: string;
}

interface DetailedPrice {
    base: number;
    gst: number;
}

// Generic interface
interface IProduct<NameType, PriceType> {
    name: NameType;
    price: PriceType;
}

// type SimpleProduct = IProduct<string, number>;

// const pen: SimpleProduct = {
const pen: IProduct<string, number> = {
    name: "Pen",
    price: 50,
};

const pencil: IProduct<DetailedName, number> = {
    name: {
        manufacturer: "Faber Castell",
        model: "HB",
    },
    price: 10,
};

const eraser: IProduct<DetailedName, DetailedPrice> = {
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