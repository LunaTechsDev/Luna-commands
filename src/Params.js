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