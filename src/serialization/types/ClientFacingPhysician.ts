/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const ClientFacingPhysician: core.serialization.ObjectSchema<
    serializers.ClientFacingPhysician.Raw,
    Vital.ClientFacingPhysician
> = core.serialization.object({
    firstName: core.serialization.property("first_name", core.serialization.string()),
    lastName: core.serialization.property("last_name", core.serialization.string()),
    npi: core.serialization.string(),
});

export declare namespace ClientFacingPhysician {
    interface Raw {
        first_name: string;
        last_name: string;
        npi: string;
    }
}