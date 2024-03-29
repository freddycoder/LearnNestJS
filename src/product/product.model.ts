import { ApiProperty } from "@nestjs/swagger/dist/decorators";

export class Product {  
    constructor(
        id: string,
        title: string,
        description: string,
        price: number
    ) {
        this.id = id
        this.title = title
        this.description = description
        this.price = price
    }

    @ApiProperty()
    id: string

    @ApiProperty()
    title: string

    @ApiProperty()
    description: string

    @ApiProperty()
    price: number
}