/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const RawSleep: core.serialization.ObjectSchema<serializers.RawSleep.Raw, Vital.RawSleep> =
    core.serialization.object({
        sleep: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).SleepV2InDb)),
    });

export declare namespace RawSleep {
    interface Raw {
        sleep: serializers.SleepV2InDb.Raw[];
    }
}