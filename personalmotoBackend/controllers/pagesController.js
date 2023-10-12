import AdModel from "../models/AdModule.js";

const statistics = async (req, res) => {
  const userData = req.userData;
  res.send(userData);
  console.log("working stats");
};

const createadpage = async (req, res) => {
  if (!req.userData) {
    return res.status(401).json("not logged in for ad");
  }
  const {
    productType,
    damaged,
    imported,
    vin,
    mileage,
    registration,
    registrationDate,
    showRegistrationCheck,
    productionYear,
    vehicleBrand,
    vehicleModel,
    fuelType,
    power,
    capacity,
    doors,
    gearBox,
    version,
    bodyType,
    color,
    ytVideo,
    title,
    description,
    netPrice,
    price,
    currency,
    sellerName,
    postalCode,
    telephone,
    freeVerificationCheck,
    images,
  } = req.body;
  res.send("data-submit-for-ad");
};
export default { statistics, createadpage };
