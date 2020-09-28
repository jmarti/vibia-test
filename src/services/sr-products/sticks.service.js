import { handleResponse } from "utils/handleResponse";

const getStartPoints = async () => {
    const response = await fetch(
        `${process.env.REACT_APP_API_URL}/sr-products/sticks/startPoints`
    );

    return handleResponse(response);
};

const stickService = {
    getStartPoints
};

export default stickService