import AdsModel from "../models/AdsModel.js";
import PointsModel from "../models/PointsModel.js";
import UserAdsModel from "../models/UserAdsModel.js";
import cron from "node-cron";
const currentDate = new Date();

// Calculate the end date of the plan
// const endDate = new Date(currentDate.setDate(currentDate.getDate() + 7));

// Schedule a cron job to run at midnight
const AdPlanAndPointsCron = cron.schedule("15 21 * * *", async () => {
  console.log("cron running");
  // Get all active ads
  const activeAds = await AdsModel.find({ status: "Active" });
  console.log(activeAds);
  // For each active ad, find the particular user and get its points from PointsModel
  for (const ad of activeAds) {
    console.log("run");
    const foundUser = await PointsModel.findOne({ userId: ad.userId });
    console.log(foundUser);
    const currentPoints = foundUser.points;

    // Check if the current points are less than the points per day
    if (currentPoints < ad.pointsPerDay) {
      // Change the status to pending
      await AdsModel.updateOne(
        { _id: ad._id },
        { $set: { status: "Pending" } }
      );
      // Update the status in the UserAdsModel
      await UserAdsModel.updateOne(
        {
          userId: ad.userId,
          "ads.adId": ad._id,
        },
        {
          $set: {
            "ads.$.status": "Pending",
          },
        }
      );
    } else {
      // Update the points after deducting the points per day
      const newPointsBalance = currentPoints - ad.pointsPerDay;
      await PointsModel.updateOne(
        { userId: ad.userId },
        { $set: { points: newPointsBalance } }
      );
    }

    // Check if the adPlan has stopped
    if (ad.planEndDate <= currentDate) {
      // Change the status back to pending
      await AdsModel.updateOne(
        { _id: ad._id },
        { $set: { status: "Pending" } }
      );
      // Update the status in the UserAdsModel
      await UserAdsModel.updateOne(
        {
          userId: ad.userId,
          "ads.adId": ad._id,
        },
        {
          $set: {
            "ads.$.status": "Pending",
          },
        }
      );
      // Stop the cron job for that ad
      cron.stopJob("cron-job-" + ad._id);
    }
  }
});

export default { AdPlanAndPointsCron };
