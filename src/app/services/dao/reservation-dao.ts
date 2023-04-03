import { Reservation } from "src/app/models/reservation";
import { BaseDao } from "./base-dao";

export abstract class ReservationDao extends BaseDao<Reservation> {
}
