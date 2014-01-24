/**
 * @fileoverview Blocks for Drools workbench drl editor
 * @author carlosm182@gmail.com
 */
'use strict';

Blockly.Blocks['when'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendStatementInput("when")
        .setCheck("condition")
        .appendField("When");
    this.appendStatementInput("then")
        .setCheck("action")
        .appendField("Then");
    this.setTooltip('');
  }
};

Blockly.Blocks['condition'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(20);
    this.appendStatementInput("type")
        .setCheck("type")
        .appendField(new Blockly.FieldDropdown([["Person", "1"], ["Account", "2"]]), "available_types");
    this.setPreviousStatement(true, "condition");
    this.setNextStatement(true, "condition");
    this.setTooltip('');
  }
};

Blockly.Blocks['field_condition'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(65);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Age", "1"], ["Gender", "2"]]), "field")
        .appendField(new Blockly.FieldDropdown([["<", "1"], ["<=", "2"], [">", "3"]]), "operator")
        .appendField(new Blockly.FieldTextInput("0"), "value");
    this.setPreviousStatement(true, "field_condition");
    this.setNextStatement(true, "field_condition");
    this.setTooltip('');
  }
};