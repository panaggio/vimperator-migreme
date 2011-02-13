// PLUGIN_INFO//{{{
var PLUGIN_INFO =
<VimperatorPlugin>
    <name>{NAME}</name>
    <description>migre.me from Vimperator - Based on Is.gd by Carl Sverre</description>
    <author mail="panaggio.ricardo@gmail.com" homepage="http://panaggio.net/">Ricardo Panaggio</author>
    <version>0.0.0</version>
    <minVersion>2.0pre</minVersion>
    <maxVersion>2.3.1</maxVersion>
    <detail><![CDATA[

== COMMANDS ==
migreme [URL]:
    echo and copy URL
        
== LIBRARY ==
plugins.migreme.getMigreMe(url):
    return MigreMeURL

    ]]></detail>
</VimperatorPlugin>;
//}}}

(function() {
    const MigreMeAPI = 'http://migre.me/api.txt?url=';

    commands.add(['migreme'], 'echo and copy migre.me URL',
        function(args) util.copyToClipboard(tiny.getMigreMe(args.length==0 ? buffer.URL : args.string), true),
        { argCount: '?', }
    );

    var tiny = plugins.migreme = {
        getMigreMe: function(url)
            util.httpGet(MigreMeAPI+encodeURIComponent(url)).responseText,
    };
})();
// vim: fdm=marker sw=4 ts=4 et:
