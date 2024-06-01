import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import stripe from "stripe";
import cookieParser from 'cookie-parser';

// Import routes
import userRoutes from "./routes/user.routes.js";
import reviewsRoutes from "./routes/reviews.route.js";
import ordersRoutes from "./routes/orders.route.js";
import deliveriesRoutes from "./routes/deliveries.route.js";
import menuRoutes from "./routes/menu.route.js";
import paymentsRoutes from "./routes/payments.route.js";
import dealsRoutes from "./routes/deal.route.js";
import "./db/dbconnect.db.js";

// Load environment variables
dotenv.config();

// Initialize Stripe with secret key
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripeInstance = new stripe(stripeSecretKey);

// Create Express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cookieParser());
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use('/public', express.static('public'));

// Routes
app.use("/deals", dealsRoutes);
app.use("/review", reviewsRoutes);
app.use("/orders", ordersRoutes);
app.use("/payments", paymentsRoutes);
app.use("/menu", menuRoutes);
app.use("/delivery", deliveriesRoutes);
app.use("/user", userRoutes);

// Create payment endpoint for both card and bank payments
app.post('/createpayment', async (req, res) => {
    const { amount, method, token } = req.body;
    try {
        if (method === 'debitcard') {
            // Use the token to create a charge
            const charge = await stripeInstance.charges.create({
                amount: amount,
                currency: 'usd',
                source: token, // Use the token as the payment source
                description: method,
            });

            res.status(200).send({ charge });
        } else if (method === 'bank') {
            // Create a Payment Intent for bank payment
            const paymentIntent = await stripeInstance.paymentIntents.create({
                amount: amount,
                currency: 'usd',
                payment_method_types: ['ach_credit_transfer'],
            });

            res.status(200).send({ client_secret: paymentIntent.client_secret });
        } else {
            throw new Error('Invalid payment method');
        }
    } catch (error) {
        console.error('Error creating payment:', error.message);
        res.status(500).send({ error: error.message });
    }
});

// Create endpoint to confirm payment from bank account
app.post('/confirmPaymentFromBank', async (req, res) => {
    const { paymentIntentId } = req.body;
    try {
        // Confirm the Payment Intent
        const paymentIntent = await stripeInstance.paymentIntents.confirm(
            paymentIntentId
        );
        res.status(200).send({ paymentIntent });
    } catch (error) {
        console.error('Error confirming payment:', error.message);
        res.status(500).send({ error: error.message });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
