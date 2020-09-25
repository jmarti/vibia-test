const getStartPoints = async () => {
    const startPoints = await fetch(
        `${process.env.REACT_APP_API_URL}/sr-products/sticks/startPoints`
    );

    return startPoints.json();
};

const stickService = {
    getStartPoints
};

export default stickService