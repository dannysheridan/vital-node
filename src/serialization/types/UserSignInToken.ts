/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const UserSignInToken: core.serialization.ObjectSchema<serializers.UserSignInToken.Raw, Vital.UserSignInToken> =
    core.serialization.object({
        publicKey: core.serialization.property("public_key", core.serialization.string()),
        userToken: core.serialization.property("user_token", core.serialization.string()),
    });

export declare namespace UserSignInToken {
    interface Raw {
        public_key: string;
        user_token: string;
    }
}
