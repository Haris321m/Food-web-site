import axios from 'axios';

export const sendPaymentDetails = async (paymentDetails) => {
    try {
        const response = await axios.post('http://localhost:3000/createpayment', paymentDetails);
        return response;
    } catch (error) {
        throw new Error(error.response.data.message || 'Failed to send payment details');
    }
};

export default sendPaymentDetails;