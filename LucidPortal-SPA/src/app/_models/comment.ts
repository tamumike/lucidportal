export interface Comment {
    id: number;
    producer: string;
    content: string;
    createdBy: string;
    created: Date;
    lastEdited?: Date;
    editedBy?: string;
}
