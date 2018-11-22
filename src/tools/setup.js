
export default {
    makeCompatible: setup => {
        if (setup.hasOwnProperty("kr-client-domain")) setup.clientDomain = setup["kr-client-domain"];
        if (setup.hasOwnProperty("kr-public-key")) setup.publicKey = setup["kr-public-key"];
        if (setup.hasOwnProperty("kr-theme")) setup.theme = setup["kr-theme"];
    },
    createSetupFromObject: params => {
        return {
            'kr-client-domain': params.clientUrl,
            'kr-public-key': params.publicKey,
            'kr-form-token': params.formToken,
            'kr-post-url-success': params["kr-post-url-success"],
            'kr-post-url-refused': params["kr-post-url-refused"],
        };
    }
};
