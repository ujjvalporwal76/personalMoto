import AdsModel from "../models/AdsModule.js";
import UserAdsModel from "../models/UserAdsModule.js";
import UserModel from "../models/UserModule.js";

const statistics = async (req, res) => {
  const userData = req.userData;
  res.send(userData);
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
  } = req.body;
  const images = req.images;
  console.log(req.body);
  console.log(req.images);
  try {
    const userExist = await UserModel.findOne({ _id: req.userId });

    if (userExist) {
      // console.log(userExist._id);
      // console.log(req.userId);

      const newAd = new AdsModel({
        userId: req.userData._id,
        email: req.userData.email,
        adtype: "type1",
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
      });

      await newAd.save();

      const userAdExist = await UserAdsModel.findOne({
        userId: userExist._id,
        email: userExist.email,
      });
      // console.log(userAdExist);
      if (userAdExist) {
        // Check to make sure that the userAdExist variable is not null.
        if (userAdExist.ads) {
          userAdExist.ads.push({
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
          });
        }

        await userAdExist.save();
        res.status(201).json({ message: "submitted in existed ad" });
      } else {
        const newUserAd = new UserAdsModel({
          userId: req.userData._id,
          email: req.userData.email,
          ads: [
            {
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
            },
          ],
        });

        await newUserAd.save();
        res.status(201).json("New ad created");
      }
    } else {
      throw "User not found";
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export default { statistics, createadpage };
