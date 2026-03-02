import { View } from "@lib/view";
import { GooglePayButton } from "@components/google-pay";

export class CartPage extends View<"div"> {
    constructor() {
        super("div", { className: "cart-page" });
    }

    render(): DocumentFragment {
        const totalPrice = "84995.00"; 

        return this.tpl`
            <section class="cart-container">
                <h1>عربة التسوق</h1>
                
                <div class="cart-details">
                    <p>منتج: Dodge Challenger SRT Demon</p>
                    <p>السعر: $${totalPrice}</p>
                </div>

                <div class="checkout-actions">
                    <p>اتمام الدفع عبر Google Pay:</p>
                    ${new GooglePayButton(totalPrice)}
                </div>
            </section>
        `;
    }
}