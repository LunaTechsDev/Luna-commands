// Generated by Haxe 4.1.3
/*:
@author LunaTechs - Kino
@plugindesc This plugin allows you alias commands and script calls for use within your game via a simple plugin command. <LunaCommands>.

@target MV MZ


@param templateStrings
@text Template Strings
@desc The template strings that you can draw within the
text window.
@type struct<Template>[]

@param templateJSStrings
@text Template JavaScript Strings
@desc The template JavaScripts you can embed within
the chatter window.
@type struct<JSTemplate>[]


@help
This plugin allows you to have a press start button before the title screen information.

MIT License
Copyright (c) 2020 LunaTechsDev
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE
*/



/*~struct~JSScript:
* @param name
* @text Identifier
* @desc The identifier used for the JS template.
* @default Script1
*
* @param code
* @text Code
* @type note
* @desc The code for the code template.
* @default `${$gameActors.actor(1).name}`;
*/

/*~struct~PluginCommand:
* @param name
* @text Name
* @desc The name of the audio SE file
*
*
*/
;(function ($hx_exports, $global) { "use strict";
class EReg {
	constructor(r,opt) {
		this.r = new RegExp(r,opt.split("u").join(""));
	}
	match(s) {
		if(this.r.global) {
			this.r.lastIndex = 0;
		}
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
}
class Lambda {
	static iter(it,f) {
		let x = $getIterator(it);
		while(x.hasNext()) {
			let x1 = x.next();
			f(x1);
		}
	}
}
class Main {
	static main() {
		let _g = [];
		let _g1 = 0;
		let _g2 = _$LTGlobals_$.$plugins;
		while(_g1 < _g2.length) {
			let v = _g2[_g1];
			++_g1;
			if(new EReg("<LunaCommands>","ig").match(v.description)) {
				_g.push(v);
			}
		}
		let params = _g[0].parameters;
		Main.LCParams = { scripts : JsonEx.parse(params["scripts"]).map(function(el) {
			return JsonEx.parse(el);
		}), commands : JsonEx.parse(params["commands"]).map(function(el) {
			return JsonEx.parse(el);
		})};
		Lambda.iter(Main.LCParams.scripts,function(script) {
			Main.scriptMap.h[script.name] = script;
		});
		Lambda.iter(Main.LCParams.commands,function(command) {
			Main.commandMap.h[command.name] = command;
		});
	}
}
class haxe_ds_StringMap {
	constructor() {
		this.h = Object.create(null);
	}
}
class haxe_iterators_ArrayIterator {
	constructor(array) {
		this.current = 0;
		this.array = array;
	}
	hasNext() {
		return this.current < this.array.length;
	}
	next() {
		return this.array[this.current++];
	}
}
class _$LTGlobals_$ {
}
function $getIterator(o) { if( o instanceof Array ) return new haxe_iterators_ArrayIterator(o); else return o.iterator(); }
Main.commandMap = new haxe_ds_StringMap();
Main.scriptMap = new haxe_ds_StringMap();
Main.main();
})(typeof exports != "undefined" ? exports : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this, {});

//# sourceMappingURL=Luna_Commands.js.map