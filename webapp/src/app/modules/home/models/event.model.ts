export interface Event {
    id: number;
    name: string,
    description: string,
    image: string,
    country: string;
    city: string;
    timezone: string,
    startDate: Date,
    endDate: Date
}