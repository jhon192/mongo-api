import { Router } from "express";
import * as ScheduleCtrl from "../controllers/schedule.controller";

const router = Router();

router.get("/", ScheduleCtrl.getSchedule);

router.get("/:id", ScheduleCtrl.getScheduleForID);

router.post("/", ScheduleCtrl.postSchedule);

router.put("/:id", ScheduleCtrl.putSchedule);

router.delete("/:id", ScheduleCtrl.deleteSchedule);

export default router;
