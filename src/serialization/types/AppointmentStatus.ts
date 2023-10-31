/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const AppointmentStatus: core.serialization.Schema<serializers.AppointmentStatus.Raw, Vital.AppointmentStatus> =
    core.serialization.enum_(["confirmed", "pending", "in_progress", "completed", "cancelled"]);

export declare namespace AppointmentStatus {
    type Raw = "confirmed" | "pending" | "in_progress" | "completed" | "cancelled";
}