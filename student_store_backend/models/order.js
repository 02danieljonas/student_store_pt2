const db = require("../db");
const { BadRequestError, NotFoundError } = require("../utils/errors");

class Order {
    static async listOrdersForUser() {
        //return all orders that the authenticated user has created
    }
    static async createOrder() {
        //take a user's order and store it in the database
    }

    static async createOrder({order, user}) {
        //take a user's order and store it in the database
        const requiredFields = ["customer_id"];
        requiredFields.forEach((property) => {
            if (!credentials.hasOwnProperty(property)) {
                throw new BadRequestError(
                    `Requiews field - ${property} -  missing in request body.`
                );
            }
        });
        const results = await db.query(
            `
            INSERT INTO order (customer_id)
            VALUES ((SELECT id FROM users WHERE EMAIL = $1))
            returning id, created_at
            
            `, [user.email]
        )
    }
}

module.exports = Order;
