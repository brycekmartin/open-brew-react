export interface IBreweryDataItem {
    id: number;
    name: string;
    breweryType: string;
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    longitude: number;
    latitude: number;
    phone: string;
    websiteUrl: string;
}


export interface IBreweryDataList {
    breweries: IBreweryDataItem[];
}

