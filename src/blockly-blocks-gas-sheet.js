// activate()
// Activates this sheet.
Blockly.Blocks['gas_sheet_activate'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"))
            .appendField("シートをアクティブ");
        this.appendValueInput("Sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(Blockly.COLOR.GAS.SHEET);
        this.setTooltip('このシートを有効にします。シート自体は変更されず、アクティブシートの親の概念のみが変更されます。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#activate()');
    }
};
Blockly.JavaScript['gas_sheet_activate'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.activate()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------------------------------------------------------------
// appendRow(rowContents)
// Appends a row to the spreadsheet.
Blockly.Blocks['gas_sheet_appendrow'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"))
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.ROWS, 15, 15, "*"))
            .appendField("行を追加");
        this.appendValueInput("SHEET")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.appendValueInput("ROWCONTENT")
            .setCheck("Array")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("データ")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.ARR, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(Blockly.COLOR.GAS.ROWINDEX);
        this.setTooltip('スプレッドシートに行を追加します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#appendRow(Object)');
    }
};
Blockly.JavaScript['gas_sheet_appendrow'] = function(block) {
    var value_rowcontent = Blockly.JavaScript.valueToCode(block, 'ROWCONTENT', Blockly.JavaScript.ORDER_NONE);
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'SHEET', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.appendRow(' + value_rowcontent + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------------------------------------------------------------
// autoResizeColumn()
// Sets the width of the given column to fit its contents
Blockly.Blocks['gas_sheet_autoresizecolumn'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"))
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.COLS, 15, 15, "*"))
            .appendField("幅を自動調整");
        this.appendValueInput("SHEET")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.appendValueInput("COLUMN")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("列番号")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(Blockly.COLOR.GAS.SHEET);
        this.setTooltip('指定された列の幅を内容に合わせて設定します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#autoResizeColumn(Integer)');
    }
};
Blockly.JavaScript['gas_sheet_autoresizecolumn'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'SHEET', Blockly.JavaScript.ORDER_NONE);
    var value_column = Blockly.JavaScript.valueToCode(block, 'COLUMN', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.autoResizeColumn(' + value_column + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
clear() Sheet   Clears the sheet of content and formatting information.
clear(options)  Sheet   Clears the sheet of contents and/or format, as specified with the given advanced options.
clearContents() Sheet   Clears the sheet of contents, while preserving formatting information.
clearFormats()  Sheet   Clears the sheet of formatting, while preserving contents.
clearNotes()    Sheet   Clears the sheet of all notes.
*/

// ----------------------------------------------------------------
// copyTo(spreadsheet)
// Copies the sheet to a given spreadsheet, which can be the same spreadsheet as the source.
Blockly.Blocks['gas_sheet_copyto'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"))
            .appendField("シート複製");
        this.appendValueInput("Sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("複製元シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.appendValueInput("spreadsheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("複製先スプレッドシート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SS, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(Blockly.COLOR.GAS.SHEET);
        this.setTooltip('シートを特定のスプレッドシートにコピーします。スプレッドシートはソースと同じスプレッドシートにすることができます。コピーした用紙の名前は「元の名前のコピー」となります。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#copyTo(Spreadsheet)');
    }
};
Blockly.JavaScript['gas_sheet_copyto'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'spreadsheet', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.copyTo(' + value_spreadsheet + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------------------------------------------------------------
// deleteColumn(columnPosition)
// Deletes the column at the given column position.
Blockly.Blocks['gas_sheet_deletecolumn'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"))
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.COLS, 15, 15, "*"))
            .appendField("列削除");
        this.appendValueInput("SHEET")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.appendValueInput("COLUMN")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("列番号")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(Blockly.COLOR.GAS.COLINDEX);
        this.setTooltip('指定された列位置の列を削除します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#deleteColumn(Integer)');
    }
};
Blockly.JavaScript['gas_sheet_deletecolumn'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'SHEET', Blockly.JavaScript.ORDER_NONE);
    var value_column = Blockly.JavaScript.valueToCode(block, 'COLUMN', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.deleteColumn(' + value_column + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------------------------------------------------------------
// deleteColumns(columnPosition, howMany)
// Deletes a number of columns starting at the given column position.
Blockly.Blocks['gas_sheet_deletecolumns'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.COLS, 15, 15, "*"))
            .appendField("列削除");
        this.appendValueInput("SHEET")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.appendValueInput("COLUMN")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("列番号")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.appendValueInput("HOWMANY")
            .setCheck("Number")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("列数")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.COLOR.GAS.COLINDEX);
        this.setTooltip('指定された列の位置から始まるいくつかの列を削除します');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#deleteColumns(Integer,Integer)');
    }
};
Blockly.JavaScript['gas_sheet_deletecolumns'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'SHEET', Blockly.JavaScript.ORDER_NONE);
    var value_column = Blockly.JavaScript.valueToCode(block, 'COLUMN', Blockly.JavaScript.ORDER_NONE);
    var value_howmany = Blockly.JavaScript.valueToCode(block, 'HOWMANY', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.deleteColumns(' + value_column + ', ' + value_howmany + ');\n';
    return code;
};

// ----------------------------------------------------------------
// deleteRow(rowPosition)
// Deletes the row at the given row position.
Blockly.Blocks['gas_sheet_deleterow'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"))
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.ROWS, 15, 15, "*"))
            .appendField("行削除");
        this.appendValueInput("SHEET")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.appendValueInput("rowPosition")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("行番号")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(Blockly.COLOR.GAS.ROWINDEX);
        this.setTooltip('指定された行位置の行を削除します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#deleteRow(Integer)');
    }
};
Blockly.JavaScript['gas_sheet_deleterow'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'SHEET', Blockly.JavaScript.ORDER_NONE);
    var value_rowposition = Blockly.JavaScript.valueToCode(block, 'rowPosition', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.deleteRow(' + value_rowposition + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------------------------------------------------------------
// deleteRows(rowPosition, howMany)
// Deletes a number of rows starting at the given row position.
Blockly.Blocks['gas_sheet_deleterows'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.ROWS, 15, 15, "*"))
            .appendField("行削除");
        this.appendValueInput("SHEET")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.appendValueInput("rowPosition")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("行番号")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.appendValueInput("HOWMANY")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("行数")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.COLOR.GAS.ROWINDEX);
        this.setTooltip('指定された行位置から始まるいくつかの行を削除します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#deleteRows(Integer,Integer)');
    }
};
Blockly.JavaScript['gas_sheet_deleterows'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'SHEET', Blockly.JavaScript.ORDER_NONE);
    var value_rowposition = Blockly.JavaScript.valueToCode(block, 'rowPosition', Blockly.JavaScript.ORDER_NONE);
    var value_howmany = Blockly.JavaScript.valueToCode(block, 'HOWMANY', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.deleteRows(' + value_rowposition + ', ' + value_howmany + ');\n';
    return code;
};

// ----------------------------------------------------------------
// getActiveCell()
// Returns the active cell in this sheet.
Blockly.Blocks['gas_sheet_getactivecell'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"))
            .appendField("範囲取得");
        this.appendDummyInput()
            .appendField("アクティブなセル");
        this.appendValueInput("Sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.RANGE);
        this.setColour(Blockly.COLOR.GAS.RANGE);
        this.setTooltip('シート内のアクティブなセルを返します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#getActiveCell()');
    }
};
Blockly.JavaScript['gas_sheet_getactivecell'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.getActiveCell()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------------------------------------------------------------
// getActiveRange()
// Returns the active range for the active sheet.
Blockly.Blocks['gas_sheet_getactiverange'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"))
            .appendField("アクティブ範囲取得");
        this.appendValueInput("Sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.RANGE);
        this.setColour(Blockly.COLOR.GAS.RANGE);
        this.setTooltip('アクティブシートのアクティブ範囲を返します。現在アクティブと見なされているセルの範囲を返します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#getActiveRange()');
    }
};
Blockly.JavaScript['gas_sheet_getactiverange'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.getActiveRange()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
getCharts() EmbeddedChart[] Returns an array of charts on this sheet.
getColumnWidth(columnPosition)  Integer Gets the width in pixels of the given column.
*/

// ----------------------------------------------------------------
// getDataRange()
// Returns a Range corresponding to the dimensions in which data is present.
Blockly.Blocks['gas_sheet_getdatarange'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"))
            .appendField("データが存在する範囲を取得");
        this.appendValueInput("Sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.RANGE);
        this.setColour(Blockly.COLOR.GAS.RANGE);
        this.setTooltip('データが存在する次元に対応するRangeを返します');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#getDataRange()');
    }
};
Blockly.JavaScript['gas_sheet_getdatarange'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.getDataRange()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
getFrozenColumns()  Integer Returns the number of frozen columns.
getFrozenRows() Integer Returns the number of frozen rows.
*/

// ----------------------------------------------------------------
// getIndex()
// Gets the position of the sheet in its parent spreadsheet.
Blockly.Blocks['gas_sheet_getindex'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"))
            .appendField("シートの位置");
        this.appendValueInput("Sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, "Number");
        this.setColour(Blockly.COLOR.GAS.SHEET);
        this.setTooltip('スプレッドシート内のシートの位置を取得します。 1で始まります。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#getIndex()');
    }
};
Blockly.JavaScript['gas_sheet_getindex'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.getIndex()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------------------------------------------------------------
// getLastColumn()
// Returns the position of the last column that has content.
Blockly.Blocks['gas_sheet_getlastcolumn'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.COLS, 15, 15, "*"))
            .appendField("最後の列位置");
        this.appendValueInput("Sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, "Number");
        this.setColour(Blockly.COLOR.GAS.COLINDEX);
        this.setTooltip('最後の列の位置を返します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#getLastColumn()');
    }
};
Blockly.JavaScript['gas_sheet_getlastcolumn'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.getLastColumn()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------------------------------------------------------------
// getLastRow()
// Returns the position of the last row that has content.
Blockly.Blocks['gas_sheet_getlastrow'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.ROWS, 15, 15, "*"))
            .appendField("最後の行位置");
        this.appendValueInput("Sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, "Number");
        this.setColour(Blockly.COLOR.GAS.ROWINDEX);
        this.setTooltip('最後の行の位置を返します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#getLastRow()');
    }
};
Blockly.JavaScript['gas_sheet_getlastrow'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.getLastRow()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
/*
getMaxColumns() Integer Returns the current number of columns in the sheet, regardless of content.
getMaxRows()    Integer Returns the current number of rows in the sheet, regardless of content.
*/

// ----------------------------------------------------------------
// getName()
// Returns the name of the sheet.
Blockly.Blocks['gas_sheet_getname'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.STR, 15, 15, "*"))
            .appendField("シート名");
        this.appendValueInput("Sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, "String");
        this.setColour(Blockly.COLOR.GAS.SHEET);
        this.setTooltip('シートの名前を返します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#getName()');
    }
};
Blockly.JavaScript['gas_sheet_getname'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.getName()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
getNamedRanges()    NamedRange[]    Gets all the named ranges in this sheet.
getParent() Spreadsheet Returns the Spreadsheet that contains this sheet.
getProtections(type)    Protection[]    Gets an array of objects representing all protected ranges in the sheet, or a single-element array representing the protection on the sheet itself.
*/

// ----------------------------------------------------------------
// getRange(row, column)
// Returns the range with the top left cell at the given coordinates.
Blockly.Blocks['gas_sheet_getrange'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"))
            .appendField("範囲取得");
        this.appendValueInput("Sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.appendValueInput("row")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("行番号")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.appendValueInput("column")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("列番号")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.appendValueInput("numrows")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.OP, 15, 15, "*"))
            .appendField("行数")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.appendValueInput("numcols")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.OP, 15, 15, "*"))
            .appendField("列数")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.RANGE);
        this.setColour(Blockly.COLOR.GAS.RANGE);
        this.setTooltip('指定された座標にある範囲を返します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#getRange(Integer,Integer)');
    }
};
Blockly.JavaScript['gas_sheet_getrange'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var value_row = Blockly.JavaScript.valueToCode(block, 'row', Blockly.JavaScript.ORDER_NONE);
    var value_column = Blockly.JavaScript.valueToCode(block, 'column', Blockly.JavaScript.ORDER_NONE);
    var value_numrows = Blockly.JavaScript.valueToCode(block, 'numrows', Blockly.JavaScript.ORDER_NONE);
    var value_numcols = Blockly.JavaScript.valueToCode(block, 'numcols', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.getRange(' + value_row + ',' + value_column + ')';
    if (value_numrows && !value_numcols) {
        code = value_sheet + '.getRange(' + value_row + ',' + value_column + ',' + value_numrows + ')';
    } else if (value_numrows && value_numcols) {
        code = value_sheet + '.getRange(' + value_row + ',' + value_column + ',' + value_numrows + ',' + value_numcols + ')';
    }
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------------------------------------------------------------
// getRange(a1Notation)
// Returns the range as specified in A1 notation or R1C1 notation.
Blockly.Blocks['gas_sheet_getrange_a1notation'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"))
            .appendField("範囲取得");
        this.appendValueInput("Sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.appendValueInput("a1Notation")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("A1表記/R1C1表記")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.STR, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.RANGE);
        this.setColour(Blockly.COLOR.GAS.RANGE);
        this.setTooltip('A1表記またはR1C1表記で指定された範囲を返します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#getRange(String)');
    }
};
Blockly.JavaScript['gas_sheet_getrange_a1notation'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var value_a1notation = Blockly.JavaScript.valueToCode(block, 'a1Notation', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.getRange(' + value_a1notation + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
/*
getRowHeight(rowPosition)   Integer Gets the height in pixels of the given row.
*/

// ----------------------------------------------------------------
// getSheetId()
// Returns the ID of the sheet represented by this object.
Blockly.Blocks['gas_sheet_getsheetid'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"))
            .appendField("シートID取得");
        this.appendValueInput("Sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, "Number");
        this.setColour(Blockly.COLOR.GAS.SHEET);
        this.setTooltip('シートのIDを返します。スプレッドシートに固有のシートのIDです。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#getSheetId()');
    }
};
Blockly.JavaScript['gas_sheet_getsheetid'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.getSheetId()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------------------------------------------------------------
// getSheetName()
// Returns the sheet name.
Blockly.Blocks['gas_sheet_getsheetname'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.STR, 15, 15, "*"))
            .appendField("シート名");
        this.appendValueInput("Sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, "String");
        this.setColour(Blockly.COLOR.GAS.SHEET);
        this.setTooltip('シート名を返します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#getSheetName()');
    }
};
Blockly.JavaScript['gas_sheet_getsheetname'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.getSheetName()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------------------------------------------------------------
// getSheetValues(startRow, startColumn, numRows, numColumns)
//Returns the rectangular grid of values for this range starting at the given coordinates.
Blockly.Blocks['gas_sheet_getsheetvalues'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.ARR, 15, 15, "*"))
            .appendField("データ");
        this.appendValueInput("Sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.appendValueInput("startRow")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("行番号")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.appendValueInput("startColumn")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("列番号")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.appendValueInput("numRows")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("行数")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.appendValueInput("numColumns")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("列数")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, "Array");
        this.setColour(Blockly.COLOR.GAS.ROWCOL);
        this.setTooltip('指定された座標から始まるこの範囲の矩形グリッド値を返します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#getSheetValues(Integer,Integer,Integer,Integer)');
    }
};
Blockly.JavaScript['gas_sheet_getsheetvalues'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var value_startrow = Blockly.JavaScript.valueToCode(block, 'startRow', Blockly.JavaScript.ORDER_NONE);
    var value_startcolumn = Blockly.JavaScript.valueToCode(block, 'startColumn', Blockly.JavaScript.ORDER_NONE);
    var value_numrows = Blockly.JavaScript.valueToCode(block, 'numRows', Blockly.JavaScript.ORDER_NONE);
    var value_numcolumns = Blockly.JavaScript.valueToCode(block, 'numColumns', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.getSheetValues(' + value_startrow + ', ' + value_startcolumn + ', ' + value_numrows + ', ' + value_numcolumns + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
getTabColor()   String  Gets the sheet tab color, or null if the sheet tab has no color.
hideColumn(column)  void    Hides the columns in the given range.
hideColumns(columnIndex)    void    Hides the column at the given index.
hideColumns(columnIndex, numColumns)    void    Hides one or more consecutive columns starting at the given index.
hideRow(row)    void    Hides the rows in the given range.
hideRows(rowIndex)  void    Hides the row at the given index.
hideRows(rowIndex, numRows) void    Hides one or more consecutive rows starting at the given index.
hideSheet() Sheet   Hides this sheet.
insertChart(chart)  void    Adds a new chart to this sheet.
*/

// ----------------------------------------------------------------
// insertColumnAfter(afterPosition) 
// Inserts a column after the given column position.
Blockly.Blocks['gas_sheet_insertcolumnafter'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.COLS, 15, 15, "*"))
            .appendField("後に列挿入");
        this.appendValueInput("Sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.appendValueInput("afterPosition")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("列番号")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(Blockly.COLOR.GAS.COLINDEX);
        this.setTooltip('指定された列の位置の後に列を挿入します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#insertColumnAfter(Integer)');
    }
};
Blockly.JavaScript['gas_sheet_insertcolumnafter'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var value_afterposition = Blockly.JavaScript.valueToCode(block, 'afterPosition', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.insertColumnAfter(' + value_afterposition + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------------------------------------------------------------
// insertColumnBefore(beforePosition)
// Inserts a column before the given column position.
Blockly.Blocks['gas_sheet_insertcolumnbefore'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.COLS, 15, 15, "*"))
            .appendField("前に列挿入");
        this.appendValueInput("Sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.appendValueInput("beforePosition")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("列番号")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(Blockly.COLOR.GAS.COLINDEX);
        this.setTooltip('指定された列の位置の前に列を挿入します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#insertColumnBefore(Integer)');
    }
};
Blockly.JavaScript['gas_sheet_insertcolumnbefore'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var value_beforePosition = Blockly.JavaScript.valueToCode(block, 'beforePosition', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.insertColumnBefore(' + value_beforePosition + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------------------------------------------------------------
// insertColumns(columnIndex)
// Inserts a blank column in a sheet at the specified location.
Blockly.Blocks['gas_sheet_insertcolumns_columnindex'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.COLS, 15, 15, "*"))
            .appendField("列挿入");
        this.appendValueInput("Sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.appendValueInput("columnIndex")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("列番号")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.appendValueInput("numColumns")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.OP, 15, 15, "*"))
            .appendField("列数")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.COLOR.GAS.COLINDEX);
        this.setTooltip('シートの指定された場所に空白の列を挿入します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#insertColumns(Integer)');
    }
};
Blockly.JavaScript['gas_sheet_insertcolumns_columnindex'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var value_columnIndex = Blockly.JavaScript.valueToCode(block, 'columnIndex', Blockly.JavaScript.ORDER_NONE);
    var value_numColumns = Blockly.JavaScript.valueToCode(block, 'numColumns', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.insertColumns(' + value_columnIndex + '):\n';
    if (value_numColumns) {
        code = value_sheet + '.insertColumns(' + value_columnIndex + ',' + value_numColumns + '):\n';
    }
    return code;
};

// ----------------------------------------------------------------
// insertColumnsAfter(afterPosition, howMany)
// Inserts a number of columns after the given column position.
Blockly.Blocks['gas_sheet_insertcolumnsafter_afterposition_howmany'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.COLS, 15, 15, "*"))
            .appendField("後に列挿入");
        this.appendValueInput("Sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.appendValueInput("afterPosition")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("列番号")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.appendValueInput("howMany")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.OP, 15, 15, "*"))
            .appendField("列数")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, "Sheet");
        this.setColour(Blockly.COLOR.GAS.COLINDEX);
        this.setTooltip('指定された列の位置の後にいくつかの列を挿入します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#insertColumnsAfter(Integer,Integer)');
    }
};
Blockly.JavaScript['gas_sheet_insertcolumnsafter_afterposition_howmany'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var value_afterposition = Blockly.JavaScript.valueToCode(block, 'afterPosition', Blockly.JavaScript.ORDER_NONE);
    var value_howmany = Blockly.JavaScript.valueToCode(block, 'howMany', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.insertColumnsAfter(' + value_afterposition + ', ' + value_howmany + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------------------------------------------------------------
// insertColumnsBefore(beforePosition, howMany)
// Inserts a number of columns before the given column position.
Blockly.Blocks['gas_sheet_insertcolumnsbefore_beforeposition_howmany'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.COLS, 15, 15, "*"))
            .appendField("前に列挿入");
        this.appendValueInput("Sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.appendValueInput("beforePosition")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("列番号")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.appendValueInput("howMany")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.OP, 15, 15, "*"))
            .appendField("列数")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, "Sheet");
        this.setColour(Blockly.COLOR.GAS.COLINDEX);
        this.setTooltip('指定された列の位置の前にいくつかの列を挿入します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#insertColumnsBefore(Integer,Integer)');
    }
};
Blockly.JavaScript['gas_sheet_insertcolumnsbefore_beforeposition_howmany'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var value_beforePosition = Blockly.JavaScript.valueToCode(block, 'beforePosition', Blockly.JavaScript.ORDER_NONE);
    var value_howmany = Blockly.JavaScript.valueToCode(block, 'howMany', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.insertColumnsBefore(' + value_beforePosition + ', ' + value_howmany + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
insertImage(blob, column, row)  void    Inserts a Blob as an image in the document at a given row and column.
insertImage(blob, column, row, offsetX, offsetY)    void    Inserts a Blob as an image in the document at a given row and column, with a pixel offset.
insertImage(url, column, row)   void    Inserts an image in the document at a given row and column.
insertImage(url, column, row, offsetX, offsetY) void    Inserts an image in the document at a given row and column, with a pixel offset.
*/

// ----------------------------------------------------------------
// insertRowAfter(afterPosition)
// Inserts a row after the given row position.
Blockly.Blocks['gas_sheet_insertrowafter'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.ROWS, 15, 15, "*"))
            .appendField("後に行を挿入");
        this.appendValueInput("Sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.appendValueInput("afterPosition")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("行番号")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(Blockly.COLOR.GAS.ROWINDEX);
        this.setTooltip('指定された行の位置の後に行を挿入します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#insertRowAfter(Integer)');
    }
};
Blockly.JavaScript['gas_sheet_insertrowafter'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var value_afterposition = Blockly.JavaScript.valueToCode(block, 'afterPosition', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.insertRowAfter(' + value_afterposition + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------------------------------------------------------------
// insertRowBefore(beforePosition)
// Inserts a row before the given row position.
Blockly.Blocks['gas_sheet_insertrowbefore'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.ROWS, 15, 15, "*"))
            .appendField("前に行を挿入");
        this.appendValueInput("Sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.appendValueInput("beforePosition")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("行番号")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(Blockly.COLOR.GAS.ROWINDEX);
        this.setTooltip('指定された行の位置の前に行を挿入します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#insertRowBefore(Integer)');
    }
};
Blockly.JavaScript['gas_sheet_insertrowbefore'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var value_beforePosition = Blockly.JavaScript.valueToCode(block, 'beforePosition', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.insertRowBefore(' + value_beforePosition + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------------------------------------------------------------
// insertRows(rowIndex)
// Inserts a blank row in a sheet at the specified location.
Blockly.Blocks['gas_sheet_insertrows_rowindex'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.ROWS, 15, 15, "*"))
            .appendField("行を挿入");
        this.appendValueInput("Sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.appendValueInput("rowIndex")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("行番号")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.appendValueInput("howMany")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.OP, 15, 15, "*"))
            .appendField("行数")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.COLOR.GAS.ROWINDEX);
        this.setTooltip('指定された場所のシートに空の行を挿入します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#insertRows(Integer)');
    }
};
Blockly.JavaScript['gas_sheet_insertrows_rowindex'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var value_rowindex = Blockly.JavaScript.valueToCode(block, 'rowIndex', Blockly.JavaScript.ORDER_NONE);
    var value_howMany = Blockly.JavaScript.valueToCode(block, 'howMany', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.insertRows(' + value_rowindex + ');\n';
    if (value_howMany) {
        code = value_sheet + '.insertRows(' + value_rowindex + ',' + value_howMany + ');\n';
    }
    return code;
};

// ----------------------------------------------------------------
// insertRowsAfter(afterPosition, howMany)
// Inserts a number of rows after the given row position.
Blockly.Blocks['gas_sheet_insertrowsafter_afterposition_howmany'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.ROWS, 15, 15, "*"))
            .appendField("後に行を追加");
        this.appendValueInput("Sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.appendValueInput("afterPosition")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("行番号")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.appendValueInput("howMany")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("行数")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(Blockly.COLOR.GAS.ROWINDEX);
        this.setTooltip('指定された行の位置の後ろにいくつかの行を挿入します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#insertRowsAfter(Integer,Integer)');
    }
};
Blockly.JavaScript['gas_sheet_insertrowsafter_afterposition_howmany'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var value_afterposition = Blockly.JavaScript.valueToCode(block, 'afterPosition', Blockly.JavaScript.ORDER_NONE);
    var value_howmany = Blockly.JavaScript.valueToCode(block, 'howMany', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.insertRowsAfter(' + value_afterposition + ', ' + value_howmany + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------------------------------------------------------------
// insertRowsBefore(beforePosition, howMany)
// Inserts a number of rows before the given row position.
Blockly.Blocks['gas_sheet_insertrowsbefore_beforeposition_howmany'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.ROWS, 15, 15, "*"))
            .appendField("前に行を追加");
        this.appendValueInput("Sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.appendValueInput("beforePosition")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("行番号")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.appendValueInput("howMany")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("行数")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(Blockly.COLOR.GAS.ROWINDEX);
        this.setTooltip('指定された行の位置の前にいくつかの行を挿入します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#insertRowsBefore(Integer,Integer)');
    }
};
Blockly.JavaScript['gas_sheet_insertrowsbefore_beforeposition_howmany'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var value_beforePosition = Blockly.JavaScript.valueToCode(block, 'beforePosition', Blockly.JavaScript.ORDER_NONE);
    var value_howmany = Blockly.JavaScript.valueToCode(block, 'howMany', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.insertRowsBefore(' + value_beforePosition + ', ' + value_howmany + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
/*
isSheetHidden() Boolean Returns true if the sheet is currently hidden.
newChart()  EmbeddedChartBuilder    Returns a builder to create a new chart for this sheet.
protect()   Protection  Creates an object that can protect the sheet from being edited except by users who have permission.
removeChart(chart)  void    Removes a chart from the parent sheet.
*/

// ----------------------------------------------------------------
// setActiveRange(range)
// Sets the active range for the active sheet.
Blockly.Blocks['gas_sheet_setactiverange'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"))
            .appendField("範囲を選択");
        this.appendValueInput("Sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.appendValueInput("Range")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"))
            .appendField("範囲");
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.RANGE);
        this.setColour(Blockly.COLOR.GAS.RANGE);
        this.setTooltip('アクティブシートのアクティブ範囲を設定します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#setActiveRange(Range)');
    }
};
Blockly.JavaScript['gas_sheet_setactiverange'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var value_range = Blockly.JavaScript.valueToCode(block, 'Range', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.setActiveRange(' + value_range + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------------------------------------------------------------
// setActiveSelection(range)
// Sets the active selection region for this sheet.
Blockly.Blocks['gas_sheet_setactiveselection'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"))
            .appendField("範囲を選択");
        this.appendValueInput("Sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.appendValueInput("Range")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"))
            .appendField("範囲");
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.RANGE);
        this.setColour(Blockly.COLOR.GAS.RANGE);
        this.setTooltip('このシートのアクティブな選択範囲を設定します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#setActiveSelection(Range)');
    }
};
Blockly.JavaScript['gas_sheet_setactiveselection'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var value_range = Blockly.JavaScript.valueToCode(block, 'Range', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.setActiveSelection(' + value_range + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------------------------------------------------------------
// setActiveSelection(a1Notation)
// Sets the active selection, as specified in A1 notation or R1C1 notation.
Blockly.Blocks['gas_sheet_setactiveselection_a1notation'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"))
            .appendField("範囲を選択");
        this.appendValueInput("Sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.appendValueInput("a1Notation")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("A1表記/R1C1表記")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.STR, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.RANGE);
        this.setColour(Blockly.COLOR.GAS.RANGE);
        this.setTooltip('A1表記またはR1C1表記で指定されたアクティブな選択を設定します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#setActiveSelection(String)');
    }
};
Blockly.JavaScript['gas_sheet_setactiveselection_a1notation'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var value_a1Notation = Blockly.JavaScript.valueToCode(block, 'a1Notation', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.setActiveSelection(' + value_a1Notation + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------------------------------------------------------------
// setColumnWidth(columnPosition, width)
// Sets the width of the given column in pixels.
Blockly.Blocks['gas_sheet_setclumnwidth'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.COLS, 15, 15, "*"))
            .appendField("列幅をセット");
        this.appendValueInput("Sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.appendValueInput("columnPosition")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("列位置")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.appendValueInput("width")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("幅")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(Blockly.COLOR.GAS.COLINDEX);
        this.setTooltip('指定された列の幅をピクセル単位で設定します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#setColumnWidth(Integer,Integer)');
    }
};
Blockly.JavaScript['gas_sheet_setclumnwidth'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var value_columnPosition = Blockly.JavaScript.valueToCode(block, 'columnPosition', Blockly.JavaScript.ORDER_NONE);
    var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.setColumnWidth(' + value_columnPosition + ', ' + value_width + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
/*
setFrozenColumns(columns)   void    Freezes the given number of columns.
setFrozenRows(rows) void    Freezes the given number of rows.
*/

// ----------------------------------------------------------------
// setName(name)
// Sets the sheet name.
Blockly.Blocks['gas_sheet_setname'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"))
            .appendField("名前をセット");
        this.appendValueInput("Sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.appendValueInput("name")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("名前")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.STR, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(Blockly.COLOR.GAS.SHEET);
        this.setTooltip('シート名を設定します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#setName(String)');
    }
};
Blockly.JavaScript['gas_sheet_setname'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.setName(' + value_name + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


// setRowHeight(rowPosition, height)   Sheet   Sets the row height of the given row in pixels.
Blockly.Blocks['gas_sheet_setrowheight'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.COLS, 15, 15, "*"))
            .appendField("列幅をセット");
        this.appendValueInput("Sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.appendValueInput("rowPosition")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("列位置")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.appendValueInput("height")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("幅")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(Blockly.COLOR.GAS.ROWINDEX);
        this.setTooltip('指定された行の行の高さをピクセル単位で設定します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#setRowHeight(Integer,Integer)');
    }
};
Blockly.JavaScript['gas_sheet_setrowheight'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var value_rowPosition = Blockly.JavaScript.valueToCode(block, 'rowPosition', Blockly.JavaScript.ORDER_NONE);
    var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.setRowHeight(' + value_rowPosition + ', ' + value_height + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
setTabColor(color)  Sheet   Sets the sheet tab color.
showColumns(columnIndex)    void    Unhides the column at the given index.
showColumns(columnIndex, numColumns)    void    Unhides one or more consecutive columns starting at the given index.
showRows(rowIndex)  void    Unhides the row at the given index.
showRows(rowIndex, numRows) void    Unhides one or more consecutive rows starting at the given index.
*/

// ----------------------------------------------------------------
// showSheet()
// Makes the sheet visible.
Blockly.Blocks['gas_sheet_showsheet'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"))
            .appendField("シートを表示する");
        this.appendValueInput("Sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SHEET, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(Blockly.COLOR.GAS.SHEET);
        this.setTooltip('シートを可視にします。シートがすでに表示されている場合は効果がありません。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#showSheet()');
    }
};
Blockly.JavaScript['gas_sheet_showsheet'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.showSheet()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
/*
sort(columnPosition)    Sheet   Sorts a sheet by column, ascending.
sort(columnPosition, ascending) Sheet   Sorts a sheet by column.
unhideColumn(column)    void    Unhides the column in the given range.
unhideRow(row)  void    Unhides the row in the given range.
updateChart(chart)  void    Updates the chart on this sheet.
 **/
