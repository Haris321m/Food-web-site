import axios from "axios";

async function fetchDeals() {
    try {
        const response = await axios.get("http://localhost:3000/deals/getalldeal");
        return response.data; // Ensure you return the data property
    } catch (error) {
        throw new Error(error.message); // Throw error to handle it in the component
    }
}

export default fetchDeals;
