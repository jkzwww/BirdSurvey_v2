<?xml version="1.0" encoding="UTF-8" ?>
<Package name="BirdSurvey" format_version="4">
    <Manifest src="manifest.xml" />
    <BehaviorDescriptions>
        <BehaviorDescription name="behavior" src="behavior_1" xar="behavior.xar" />
    </BehaviorDescriptions>
    <Dialogs />
    <Resources>
        <File name="main" src="html/javascripts/main.js" />
        <File name="main.min" src="html/javascripts/main.min.js" />
        <File name="polyfill" src="html/javascripts/polyfill.js" />
        <File name="polyfill.min" src="html/javascripts/polyfill.min.js" />
        <File name="Raleway-Black" src="html/styles/fonts/Raleway-Black.ttf" />
        <File name="Raleway-Regular" src="html/styles/fonts/Raleway-Regular.ttf" />
        <File name="main" src="html/styles/main.css" />
        <File name="index" src="html/index.html" />
        <File name="icon" src="icon.png" />
        <File name="service" src="service.py" />
        <File name="Monash_Logo" src="html/Monash_Logo.jpg" />
        <File name="calc" src="html/javascripts/calc.js" />
        <File name="surv_func" src="html/javascripts/surv_func.js" />
        <File name="draftaes" src="html/styles/draftaes.css" />
        <File name="bird_stats_vis" src="html/styles/images/bird_stats_vis.jpg" />
        <File name="bo2" src="html/styles/images/bo2.png" />
        <File name="bo_pusheen" src="html/styles/images/bo_pusheen.png" />
        <File name="cockatoo" src="html/styles/images/cockatoo.jpg" />
        <File name="currawong" src="html/styles/images/currawong.jpg" />
        <File name="galah" src="html/styles/images/galah.jpg" />
        <File name="honeyeater" src="html/styles/images/honeyeater.jpg" />
        <File name="ibis" src="html/styles/images/ibis.jpg" />
        <File name="kookaburras" src="html/styles/images/kookaburras.jpg" />
        <File name="lorikeet" src="html/styles/images/lorikeet.jpg" />
        <File name="magpie" src="html/styles/images/magpie.jpg" />
        <File name="miner" src="html/styles/images/miner.jpg" />
        <File name="sparrow" src="html/styles/images/sparrow.jpg" />
        <File name="wattlebird" src="html/styles/images/wattlebird.jpg" />
        <File name="ybBird" src="html/styles/images/ybBird.png" />
        <File name="loading_birds" src="html/loading_birds.jpg" />
    </Resources>
    <Topics />
    <IgnoredPaths />
    <Translations auto-fill="en_US">
        <Translation name="translation_en_US" src="translations/translation_en_US.ts" language="en_US" />
    </Translations>
    <service name="service" autorun="true" execStart="./python service.py" />
    <executableFiles>
        <file path="python" />
    </executableFiles>
    <qipython name="service" />
</Package>
