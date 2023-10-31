/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const ClientFacingTestKitOrderDetails: core.serialization.ObjectSchema<
    serializers.ClientFacingTestKitOrderDetails.Raw,
    Vital.ClientFacingTestKitOrderDetails
> = core.serialization.object({
    data: core.serialization.lazyObject(async () => (await import("..")).ClientFacingTestkitOrder).optional(),
});

export declare namespace ClientFacingTestKitOrderDetails {
    interface Raw {
        data?: serializers.ClientFacingTestkitOrder.Raw | null;
    }
}