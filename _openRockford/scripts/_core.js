/*
	===========================

		openRockford

	===========================
*/

var print = function (text) {
	java.lang.System.out.print(
		"[_openRockford] " + text
	);

	return {
		_: print
	};
};

try {
	console.log(cxzc);
} catch(e) {
	print("===============================================").
		_("").
		_("[ " + e.name + " ]" + e.message).
		_("Error in " + e.fileName + "[ " + e.lineNumber + ":" + e.columnNumber + " ]").
		_("").
		_("===============================================");
}
