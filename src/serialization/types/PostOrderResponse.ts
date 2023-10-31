/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const PostOrderResponse: core.serialization.ObjectSchema<
    serializers.PostOrderResponse.Raw,
    Vital.PostOrderResponse
> = core.serialization.object({
    order: core.serialization.lazyObject(async () => (await import("..")).ClientFacingOrder),
    status: core.serialization.string(),
    message: core.serialization.string(),
});

export declare namespace PostOrderResponse {
    interface Raw {
        order: serializers.ClientFacingOrder.Raw;
        status: string;
        message: string;
    }
}