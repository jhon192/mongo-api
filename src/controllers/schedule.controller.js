import Schedule from "../model/Schedule";

export const getSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.find();
    res.json(schedule);
  } catch (error) {
    res.status(500).json({
      message: "something goes wrong"
    })
  }
};

export const postSchedule = async (req, res) => {
  const { name, lastname, phone_number } = req.body;
  const newData = new Schedule({
    name: name,
    lastname: lastname,
    phone_number: phone_number,
  });

  const schedule_saved = await newData.save();
  res.json(schedule_saved);
};

export const getScheduleForID = async (req, res) => {
  const schedule = await Schedule.findById(req.params.id);
  res.json(schedule);
};

export const deleteSchedule = async (req, res) => {
  await Schedule.findByIdAndDelete(req.params.id);
  res.json({ message: "schedule were deleted" });
};

export const putSchedule = async (req, res) => {
  await Schedule.findOneAndUpdate(req.params.id, req.body);
  res.json({ message: "schedule were updated" });
};
