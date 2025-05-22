type Category = "frontend" | "backend" | "devops" | "database" | "mobile" | "language";

interface ILocation {
    address: string,
    city: string,
    state: string
}

interface IModes {
    inPerson: boolean,
    online: boolean
}

interface IWorkshop {
    name: string,
    category: Category,
    description: string,
    startDate: string,
    endDate: string,
    time: string,
    location: ILocation,
    modes: IModes,
    imageUrl: string,
    id: number
}

export type {
    IWorkshop as default,
    Category,
    ILocation,
    IModes
}