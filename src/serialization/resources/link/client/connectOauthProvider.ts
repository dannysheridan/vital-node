/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<
    serializers.link.connectOauthProvider.Response.Raw,
    Record<string, unknown>
> = core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace Response {
    type Raw = Record<string, unknown>;
}
