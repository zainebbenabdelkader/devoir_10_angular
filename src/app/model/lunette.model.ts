import { Style } from './style.model';  // Assuming 'Style' is the new class name

export class Lunette {
    idLunette?: number;
    nomLunette?: string;
    prixLunette?: number;
    dateCreation?: Date;
    style!: Style;  // Changed 'marque' to 'style' and the type to 'Style'
    email!: string;
}
