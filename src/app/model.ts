export class Category {
    id: number;
    name: string;
}

export class Note {
    id: number;
    title: string;
    content: string;
    date: Date;
    valid: boolean;
    category: JSON;

}