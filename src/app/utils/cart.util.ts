import { CartItem } from './../models/cart-item.model';
import { Cart } from '../models/cart-model';

export class CartUtil {
    public static get(): Cart {
        // Recuperar os dados do localStorage
        const data = localStorage.getItem('petshopcart');
        
        // Caso não haja dados, retorna um novo carrinho
        if (!data)
            return new Cart();

        // Caso haja dados, retornar o carrinho
        return JSON.parse(data);
    }

    public static add(id: string, product: string, quantity: number, price: number, image: string){
        // Obter o carrinho
        let cart = this.get();

        // Gerar um novo item
        const item = new CartItem(id, product, quantity, price, image);
        
        // Adicionar ao carrinho
        cart.items.push(item);

        // Salvar no localStorage
        localStorage.setItem('petshopcart', JSON.stringify(cart));
    }

    public static update(cart: Cart) {
        // Salvar no localStorage
        localStorage.setItem('petshopcart', JSON.stringify(cart));
    }

    public static clear() {
        localStorage.removeItem('petshopcart');
    }
}