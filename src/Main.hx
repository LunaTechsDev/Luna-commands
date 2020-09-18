import rm.core.JsonEx;
import rm.Globals;

using Lambda;
using core.StringExtensions;
using core.NumberExtensions;

typedef JSScript = {
  var name: String;
  var code: String;
}

typedef PluginCommand = {
  var name: String;
}

typedef LCParams = {
  var scripts: Array<JSScript>;
  var commands: Array<PluginCommand>;
}

class Main {
  public static var LCParams: LCParams;
  public static var commandMap: Map<String, PluginCommand> = new Map<String, PluginCommand>();
  public static var scriptMap: Map<String, JSScript> = new Map<String, JSScript>();

  public static function main() {
    var params = Globals.Plugins.filter((plugin) -> ~/<LunaCommands>/ig.match(plugin.description))[0].parameters;
    LCParams = {
      scripts: untyped JsonEx.parse(params['scripts']).map((el) -> JsonEx.parse(el)),
      commands: untyped JsonEx.parse(params['commands']).map((el) -> JsonEx.parse(el))
    }
    LCParams.scripts.iter((script) -> {
      scriptMap.set(script.name, script);
    });
    LCParams.commands.iter((command) -> {
      // Params
      commandMap.set(command.name, command);
    });
  }

  public static function runScript(name: String) {}

  public static function runCommand(name: String) {}
}
