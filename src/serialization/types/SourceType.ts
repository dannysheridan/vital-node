/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const SourceType: core.serialization.Schema<serializers.SourceType.Raw, Vital.SourceType> =
    core.serialization.enum_(["app", "ble", "device", "lab", "provider"]);

export declare namespace SourceType {
    type Raw = "app" | "ble" | "device" | "lab" | "provider";
}