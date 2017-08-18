import { BaseEntity } from './../../shared';

export class CartItems implements BaseEntity {
    constructor(
        public id?: number,
        public cart?: BaseEntity,
        public product?: BaseEntity,
    ) {
    }
}
