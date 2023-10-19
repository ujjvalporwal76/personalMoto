import mongoose from "mongoose";

const UserAdsSchema = new mongoose.Schema({
  email: String,
  userId: mongoose.Schema.Types.ObjectId,
  ads: [
    {
      productType: String,
      damaged: String,
      imported: String,
      vin: String,
      mileage: String,
      registration: String,
      registrationDate: String,
      showRegistrationCheck: String,
      productionYear: String,
      vehicleBrand: String,
      vehicleModel: String,
      fuelType: String,
      power: String,
      capacity: String,
      doors: String,
      gearBox: String,
      version: String,
      bodyType: String,
      color: String,
      ytVideo: String,
      title: String,
      description: String,
      netPrice: String,
      price: String,
      currency: String,
      sellerName: String,
      postalCode: String,
      telephone: String,
      freeVerificationCheck: String,
      images: Array,
    },
  ],
});

UserAdsSchema.set("timestamps", true);
const UserAdsModel = new mongoose.model("userad", UserAdsSchema);

export default UserAdsModel;
