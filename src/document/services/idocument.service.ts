import { DocumentIdModel } from "../document.id.model";
import { DocumentMetadataModel } from "../document.metadata.model";
import { PutDocumentModel } from "../put.document.model";

export interface IDocumentService {
    getDocuments(): DocumentMetadataModel[]
    downloadDocument(id: string): Buffer
    putDocument(document: PutDocumentModel): DocumentIdModel
    deleteDocument(id: string): void
}

export const IDocumentService = Symbol("IDocumentService");