const confirmAdPlan = async (req, res) => {
  console.log(req.body);
  const { column, plan, pointsPerDay } = req.body;
  try {
    let adplanId;
    if (!column || !plan) {
      return res.status(401).send({ error: "Missing required fields" });
    } else {
      // get the user id from token
      const userId = req.user._id;
      // find the adplan in database based on column and plan name
      const foundAdPlan = await AdPlans.findOne({
        userId: userId,
        column: column,
        planName: plan,
      });
      if (!foundAdPlan) {
        return res.status(402).send({ error: "No such adplan" });
      } else {
        // update the adplan status to confirmed
        adplanId = foundAdPlan._id;
        const updatedAdPlan = await AdPlans.updateOne(
          { _id: adplanId },
          { $set: { isConfirmed: true } }
        );
        // create a new adplan object with all details
        const newAdPlanObj = {
          _id: adplanId,
          userId: userId,
          column: column,
          planName: plan,
          isConfirmed: true,
          pointsPerDay: pointsPerDay,
        };
        // save this adplan into the history collection
        const savedHistory = await History.create(newAdPlanObj);
        // send back the response
        return res
          .status(200)
          .send({
            message: "Ad Plan Confirmed Successfully",
            data: updatedAdPlan,
          });
        return res
          .status(200)
          .send({ message: `Successfully created ${adplanId}` });
      }
    }
  } catch (err) {
    console.log("Error", err);
    return res.status(500).send({ error: err });
  }

  res.status(201).send("Confirmed");
};

export default { confirmAdPlan };
