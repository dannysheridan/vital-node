/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const UserSuccessResponse: core.serialization.ObjectSchema<
    serializers.UserSuccessResponse.Raw,
    Vital.UserSuccessResponse
> = core.serialization.object({
    success: core.serialization.boolean(),
});

export declare namespace UserSuccessResponse {
    interface Raw {
        success: boolean;
    }
}