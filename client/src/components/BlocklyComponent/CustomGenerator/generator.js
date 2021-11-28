import * as Blockly from 'blockly/core';
import 'blockly/javascript';

Blockly.JavaScript['includes_general'] = function (block) {
  var code = `#include <stdlib.h>\n#include <stdio.h>\n#include <string.h>\n#include <time.h>\n`;
  return code;
};

Blockly.JavaScript['includes_mpi'] = function (block) {
  var code = '#include <mpi.h>\n';
  return code;
};

Blockly.JavaScript['includes_openmp'] = function (block) {
  var code = '#include <omp.h>\n';
  return code;
};

Blockly.JavaScript['main'] = function (block) {
  var statements_main = Blockly.JavaScript.statementToCode(block, 'main');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  code += 'int main() {\n';
  code += statements_main + '  return 0; \n} \n ';
  return code;
};

Blockly.JavaScript['defines_chunksize'] = function (block) {
  var value_defines_chunksize = Blockly.JavaScript.valueToCode(
    block,
    'defines_chunksize',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `#define CHUNKSIZE ${value_defines_chunksize}\n`;
  return code;
};

Blockly.JavaScript['defines_n'] = function (block) {
  var value_define_n = Blockly.JavaScript.valueToCode(
    block,
    'define_n',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `#define N ${value_define_n}\n`;
  return code;
};

Blockly.JavaScript['mpi_start'] = function (block) {
  var value_comm_rank = Blockly.JavaScript.valueToCode(
    block,
    'comm_rank',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var value_comm_size = Blockly.JavaScript.valueToCode(
    block,
    'comm_size',
    Blockly.JavaScript.ORDER_ATOMIC,
  );

  console.log(value_comm_rank);
  value_comm_rank = value_comm_rank.replace('(', '');
  value_comm_rank = value_comm_rank.replace(')', '');

  value_comm_size = value_comm_size.replace('(', '');
  value_comm_size = value_comm_size.replace(')', '');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  code += `int ${value_comm_rank}, ${value_comm_size};\n\n`;
  code += 'MPI_STATUS status;\n';
  code += 'MPI_INIT(&argc, &argv);\n';
  code += `MPI_Comm_rank(MPI_COMM_WORLD, &${value_comm_rank})\n`;
  code += `MPI_Comm_size(MPI_COMM_WORLD, &${value_comm_size})\n\n`;
  return code;
};

Blockly.JavaScript['variables'] = function (block) {
  var dropdown_variables = block.getFieldValue('variables');

  console.log(dropdown_variables);

  // TODO: Assemble JavaScript into code variable.
  // TODO: Change ORDER_NONE to the correct strength.
  return [dropdown_variables, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['def_variable'] = function (block) {
  var dropdown_variables = block.getFieldValue('variables');
  var value_variable_dropdown = Blockly.JavaScript.valueToCode(
    block,
    'variable_dropdown',
    Blockly.JavaScript.ORDER_ATOMIC,
  );

  value_variable_dropdown = value_variable_dropdown.replace('(', '');
  value_variable_dropdown = value_variable_dropdown.replace(')', '');
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_variables} ${value_variable_dropdown};\n`;
  return code;
};

Blockly.JavaScript['comparasion_ifelse'] = function (block) {
  var value_input_value_one = Blockly.JavaScript.valueToCode(
    block,
    'input_value_one',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var dropdown_operators = block.getFieldValue('operators');
  var value_input_value_two = Blockly.JavaScript.valueToCode(
    block,
    'input_value_two',
    Blockly.JavaScript.ORDER_ATOMIC,
  );

  value_input_value_one = value_input_value_one.replace('(', '');
  value_input_value_one = value_input_value_one.replace(')', '');

  value_input_value_two = value_input_value_two.replace('(', '');
  value_input_value_two = value_input_value_two.replace(')', '');

  console.log(dropdown_operators);

  // TODO: Assemble JavaScript into code variable.
  var code = `${value_input_value_one} ${dropdown_operators} ${value_input_value_two}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['logic_operators_c'] = function (block) {
  var value_input_one = Blockly.JavaScript.valueToCode(
    block,
    'input_one',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var dropdown_logic = block.getFieldValue('logic');
  var value_input_two = Blockly.JavaScript.valueToCode(
    block,
    'input_two',
    Blockly.JavaScript.ORDER_ATOMIC,
  );

  value_input_one = value_input_one.replace('(', '');
  value_input_one = value_input_one.replace(')', '');

  value_input_two = value_input_two.replace('(', '');
  value_input_two = value_input_two.replace(')', '');
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_input_one} ${dropdown_logic} ${value_input_two}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['for_block_increment'] = function (block) {
  var value_input_one = Blockly.JavaScript.valueToCode(
    block,
    'input_one',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var dropdown_operator = block.getFieldValue('operator');
  var value_input_two = Blockly.JavaScript.valueToCode(
    block,
    'input_two',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var statements_for_content = Blockly.JavaScript.statementToCode(
    block,
    'for_content',
  );

  value_input_one = value_input_one.replace('(', '');
  value_input_one = value_input_one.replace(')', '');

  value_input_two = value_input_two.replace('(', '');
  value_input_two = value_input_two.replace(')', '');

  statements_for_content = statements_for_content.replace('(', '');
  statements_for_content = statements_for_content.replace(')', '');
  // TODO: Assemble JavaScript into code variable.

  var length = value_input_one.length;
  var valueInputOneEddited = value_input_one.slice(length - 1, length);
  var code = '';
  code += `for(${value_input_one}; ${valueInputOneEddited} ${dropdown_operator} ${value_input_two}; ${value_input_one}++) {\n`;
  code += `${statements_for_content}\n`;
  code += `}\n`;
  return code;
};

Blockly.JavaScript['for_block_decrement'] = function (block) {
  var value_input_one = Blockly.JavaScript.valueToCode(
    block,
    'input_one',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var dropdown_operator = block.getFieldValue('operator');
  var value_input_two = Blockly.JavaScript.valueToCode(
    block,
    'input_two',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var statements_for_content = Blockly.JavaScript.statementToCode(
    block,
    'for_content',
  );

  value_input_one = value_input_one.replace('(', '');
  value_input_one = value_input_one.replace(')', '');

  value_input_two = value_input_two.replace('(', '');
  value_input_two = value_input_two.replace(')', '');

  statements_for_content = statements_for_content.replace('(', '');
  statements_for_content = statements_for_content.replace(')', '');
  // TODO: Assemble JavaScript into code variable.

  var length = value_input_one.length;
  var valueInputOneEddited = value_input_one.slice(length - 1, length);
  var code = '';
  code += `for(${value_input_one}; ${valueInputOneEddited} ${dropdown_operator} ${value_input_two}; ${value_input_one}--) {\n`;
  code += `${statements_for_content}\n`;
  code += `}\n`;
  return code;
};

Blockly.JavaScript['printf'] = function (block) {
  var value_input_one = Blockly.JavaScript.valueToCode(
    block,
    'input_one',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var value_input_two = Blockly.JavaScript.valueToCode(
    block,
    'input_two',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var value_input_three = Blockly.JavaScript.valueToCode(
    block,
    'input_three',
    Blockly.JavaScript.ORDER_ATOMIC,
  );

  let call_input_two;
  let call_input_three;

  value_input_one = value_input_one.replace('(', '');
  value_input_one = value_input_one.replace(')', '');
  value_input_one = value_input_one.replace("'", '');

  if (value_input_two) {
    value_input_two = value_input_two.replace('(', '');
    value_input_two = value_input_two.replace(')', '');
    if (typeof value_input_two === 'string') {
      call_input_two = '%s';
    }
    call_input_two = '%d';
  }

  if (value_input_three) {
    value_input_three = value_input_three.replace('(', '');
    value_input_three = value_input_three.replace(')', '');
    if (typeof value_input_three === 'string') {
      call_input_three = '%s';
    }
    call_input_three = '%d';
  }

  // TODO: Assemble JavaScript into code variable.
  var code = `printf("${value_input_one}: ${call_input_two} ${call_input_three}", ${value_input_two}, ${value_input_three})\n`;
  return code;
};

Blockly.JavaScript['mpi_end'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'MPI_Finalize ();\n';
  return code;
};

Blockly.JavaScript['custom_varint'] = function (block) {
  var dropdown_type = block.getFieldValue('type');
  var value_variable_name = Blockly.JavaScript.valueToCode(
    block,
    'variable_name',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var value_variable_value = Blockly.JavaScript.valueToCode(
    block,
    'variable_value',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  value_variable_name = value_variable_name.replace('(', '');
  value_variable_name = value_variable_name.replace(')', '');
  value_variable_name = value_variable_name.replace('"', '');
  value_variable_name = value_variable_name.replace("'", '');
  value_variable_name = value_variable_name.replace("'", '');
  value_variable_name = value_variable_name.replace('_5B', '[');
  value_variable_name = value_variable_name.replace('_5D', ']');

  var code = '';
  if (value_variable_value) {
    value_variable_value = value_variable_value.replace('"', '');
    console.log(dropdown_type);
    switch (dropdown_type.toString()) {
      case 'decimal':
        value_variable_value = parseFloat(value_variable_value);
        break;
      case 'float':
        value_variable_value = parseFloat(value_variable_value);
        break;
      default:
        value_variable_value = parseInt(value_variable_value);
        break;
    }

    console.log(dropdown_type);
    code = `${dropdown_type} ${value_variable_name} = ${value_variable_value};\n`;
    return code;
  }

  // TODO: Assemble JavaScript into code variable.
  code = `${dropdown_type} ${value_variable_name};\n`;
  return code;
};

Blockly.JavaScript['mpi_send_int'] = function (block) {
  var value_params_1 = Blockly.JavaScript.valueToCode(
    block,
    'params_1',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var value_params_2 = Blockly.JavaScript.valueToCode(
    block,
    'params_2',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var value_params_3 = Blockly.JavaScript.valueToCode(
    block,
    'params_3',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var value_params_4 = Blockly.JavaScript.valueToCode(
    block,
    'params_4',
    Blockly.JavaScript.ORDER_ATOMIC,
  );

  value_params_1 = value_params_1.replace('(', '');
  value_params_1 = value_params_1.replace(')', '');

  value_params_2 = value_params_2.replace('(', '');
  value_params_2 = value_params_2.replace(')', '');

  value_params_3 = value_params_3.replace('(', '');
  value_params_3 = value_params_3.replace(')', '');

  value_params_4 = value_params_4.replace('(', '');
  value_params_4 = value_params_4.replace(')', '');

  if (typeof value_params_2 === 'string') {
    value_params_2 = `strlen(${value_params_2})+1`;
  }

  if (typeof value_params_3 === 'string') {
    value_params_3 = `strlen(${value_params_3})`;
  }

  // IF VARIABLE === STRING => STRILEN(VALUE)
  // TODO: Assemble JavaScript into code variable.
  var code = `MPI_SEND(&${value_params_1}, ${value_params_2}, MPI_INT, ${value_params_3}, ${value_params_4}, MPI_COMM_WORLD);\n`;
  return code;
};

Blockly.JavaScript['mpi_send_char'] = function (block) {
  var value_params_1 = Blockly.JavaScript.valueToCode(
    block,
    'params_1',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var value_params_2 = Blockly.JavaScript.valueToCode(
    block,
    'params_2',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var value_params_3 = Blockly.JavaScript.valueToCode(
    block,
    'params_3',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var value_params_4 = Blockly.JavaScript.valueToCode(
    block,
    'params_4',
    Blockly.JavaScript.ORDER_ATOMIC,
  );

  value_params_1 = value_params_1.replace('(', '');
  value_params_1 = value_params_1.replace(')', '');

  value_params_2 = value_params_2.replace('(', '');
  value_params_2 = value_params_2.replace(')', '');

  value_params_3 = value_params_3.replace('(', '');
  value_params_3 = value_params_3.replace(')', '');

  value_params_4 = value_params_4.replace('(', '');
  value_params_4 = value_params_4.replace(')', '');

  if (typeof value_params_2 === 'string') {
    value_params_2 = `strlen(${value_params_2})+1`;
  }

  if (typeof value_params_3 === 'string') {
    value_params_3 = `strlen(${value_params_3})`;
  }

  // IF VARIABLE === STRING => STRILEN(VALUE)
  // TODO: Assemble JavaScript into code variable.
  var code = `MPI_SEND(&${value_params_1}, ${value_params_2}, MPI_CHAR, ${value_params_3}, ${value_params_4}, MPI_COMM_WORLD);\n`;
  return code;
};

Blockly.JavaScript['mpi_recv_int'] = function (block) {
  var value_params_1 = Blockly.JavaScript.valueToCode(
    block,
    'params_1',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var value_params_2 = Blockly.JavaScript.valueToCode(
    block,
    'params_2',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var value_params_3 = Blockly.JavaScript.valueToCode(
    block,
    'params_3',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var value_params_4 = Blockly.JavaScript.valueToCode(
    block,
    'params_4',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var value_params_5 = Blockly.JavaScript.valueToCode(
    block,
    'params_5',
    Blockly.JavaScript.ORDER_ATOMIC,
  );

  value_params_1 = value_params_1.replace('(', '');
  value_params_1 = value_params_1.replace(')', '');

  value_params_2 = value_params_2.replace('(', '');
  value_params_2 = value_params_2.replace(')', '');

  value_params_3 = value_params_3.replace('(', '');
  value_params_3 = value_params_3.replace(')', '');

  value_params_4 = value_params_4.replace('(', '');
  value_params_4 = value_params_4.replace(')', '');

  value_params_5 = value_params_5.replace('(', '');
  value_params_5 = value_params_5.replace(')', '');

  if (typeof value_params_2 === 'string') {
    value_params_2 = `strlen(${value_params_2})+1`;
  }

  if (typeof value_params_3 === 'string') {
    value_params_3 = `strlen(${value_params_3})`;
  }

  // IF VARIABLE === STRING => STRILEN(VALUE)
  // TODO: Assemble JavaScript into code variable.
  var code = `MPI_RECV(&${value_params_1}, ${value_params_2}, MPI_INT, ${value_params_3}, ${value_params_4}, MPI_COMM_WORLD, &${value_params_5});\n`;
  return code;
};

Blockly.JavaScript['mpi_recv_char'] = function (block) {
  var value_params_1 = Blockly.JavaScript.valueToCode(
    block,
    'params_1',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var value_params_2 = Blockly.JavaScript.valueToCode(
    block,
    'params_2',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var value_params_3 = Blockly.JavaScript.valueToCode(
    block,
    'params_3',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var value_params_4 = Blockly.JavaScript.valueToCode(
    block,
    'params_4',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var value_params_5 = Blockly.JavaScript.valueToCode(
    block,
    'params_5',
    Blockly.JavaScript.ORDER_ATOMIC,
  );

  value_params_1 = value_params_1.replace('(', '');
  value_params_1 = value_params_1.replace(')', '');

  value_params_2 = value_params_2.replace('(', '');
  value_params_2 = value_params_2.replace(')', '');

  value_params_3 = value_params_3.replace('(', '');
  value_params_3 = value_params_3.replace(')', '');

  value_params_4 = value_params_4.replace('(', '');
  value_params_4 = value_params_4.replace(')', '');

  value_params_5 = value_params_5.replace('(', '');
  value_params_5 = value_params_5.replace(')', '');

  if (typeof value_params_2 === 'string') {
    value_params_2 = `strlen(${value_params_2})+1`;
  }

  if (typeof value_params_3 === 'string') {
    value_params_3 = `strlen(${value_params_3})`;
  }

  // IF VARIABLE === STRING => STRILEN(VALUE)
  // TODO: Assemble JavaScript into code variable.
  var code = `MPI_RECV(&${value_params_1}, ${value_params_2}, MPI_CHAR, ${value_params_3}, ${value_params_4}, MPI_COMM_WORLD, &${value_params_5});\n`;
  return code;
};

Blockly.JavaScript['omp_get_wtime'] = function (block) {
  var statements_omp_get_wtime = Blockly.JavaScript.statementToCode(
    block,
    'omp_get_wtime',
  );
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  code += 'int tInit, tEnd;\n';
  code += 'tInit = omp_get_wtime();\n';
  code += `${statements_omp_get_wtime} \n`;
  code += 'tFinal = omp_get_wtime();\n';
  code += 'printf("Execution time: %f seconds", tEnd - tInit);\n';
  return code;
};

Blockly.JavaScript['long_int_n_n'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '(long int) N*';
  return code;
};

Blockly.JavaScript['custom_varString'] = function (block) {
  var dropdown_type = block.getFieldValue('type');
  var value_variable_name = Blockly.JavaScript.valueToCode(
    block,
    'variable_name',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var value_variable_value = Blockly.JavaScript.valueToCode(
    block,
    'variable_value',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  value_variable_name = value_variable_name.replace('(', '');
  value_variable_name = value_variable_name.replace(')', '');
  value_variable_name = value_variable_name.replace('"', '');
  value_variable_name = value_variable_name.replace("'", '');
  value_variable_name = value_variable_name.replace("'", '');
  value_variable_name = value_variable_name.replace('_5B', '[');
  value_variable_name = value_variable_name.replace('_5D', ']');

  value_variable_value = value_variable_value.replace('(', '');
  value_variable_value = value_variable_value.replace(')', '');
  value_variable_value = value_variable_value.replace("'", '');
  value_variable_value = value_variable_value.replace("'", '');

  var code = '';
  console.log(dropdown_type);
  code = `${dropdown_type} ${value_variable_name} = ${value_variable_value};\n`;
  return code;
};

Blockly.JavaScript['printf_full_custom'] = function (block) {
  var value_full_custom_printf = Blockly.JavaScript.valueToCode(
    block,
    'full_custom_printf',
    Blockly.JavaScript.ORDER_ATOMIC,
  );

  value_full_custom_printf = value_full_custom_printf.replace('(', '');
  value_full_custom_printf = value_full_custom_printf.replace(')', '');
  value_full_custom_printf = value_full_custom_printf.replace("'", '');
  value_full_custom_printf = value_full_custom_printf.replace("'", '');
  // TODO: Assemble JavaScript into code variable.
  var code = `printf(${value_full_custom_printf});\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['pragma'] = function (block) {
  var dropdown_type_1 = block.getFieldValue('type_1');
  var value_param1 = Blockly.JavaScript.valueToCode(
    block,
    'param1',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var value_param2 = Blockly.JavaScript.valueToCode(
    block,
    'param2',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var dropdown_type_2 = block.getFieldValue('type_2');
  var value_param3 = Blockly.JavaScript.valueToCode(
    block,
    'param3',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var value_param4 = Blockly.JavaScript.valueToCode(
    block,
    'param4',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var value_param5 = Blockly.JavaScript.valueToCode(
    block,
    'param5',
    Blockly.JavaScript.ORDER_ATOMIC,
  );
  var statements_pragma_statement = Blockly.JavaScript.statementToCode(
    block,
    'pragma_statement',
  );
  if (dropdown_type_1) {
    dropdown_type_1 = ` ${dropdown_type_1}`;
  }
  if (dropdown_type_2) {
    dropdown_type_2 = ` ${dropdown_type_2}`;
  }
  let response = '';
  let response_2 = '';
  if (value_param1) {
    value_param1 = value_param1.replace('(', '');
    value_param1 = value_param1.replace(')', '');
    value_param1 = value_param1.replace('"', '');
    value_param1 = value_param1.replace("'", '');
    value_param1 = value_param1.replace("'", '');
    value_param1 = value_param1.replace('_5B', '[');
    value_param1 = value_param1.replace('_5D', ']');
    response = ` (${value_param1})`;
  }

  if (value_param2) {
    value_param2 = value_param2.replace('(', '');
    value_param2 = value_param2.replace(')', '');
    value_param2 = value_param2.replace('"', '');
    value_param2 = value_param2.replace("'", '');
    value_param2 = value_param2.replace("'", '');
    value_param2 = value_param2.replace('_5B', '[');
    value_param2 = value_param2.replace('_5D', ']');
    response = ` (${value_param1}, ${value_param2})`;
  }

  if (value_param3) {
    value_param3 = value_param3.replace('(', '');
    value_param3 = value_param3.replace(')', '');
    value_param3 = value_param3.replace('"', '');
    value_param3 = value_param3.replace("'", '');
    value_param3 = value_param3.replace("'", '');
    value_param3 = value_param3.replace('_5B', '[');
    value_param3 = value_param3.replace('_5D', ']');
    response_2 = ` (${value_param3})`;
  }

  if (value_param4) {
    value_param4 = value_param4.replace('(', '');
    value_param4 = value_param4.replace(')', '');
    value_param4 = value_param4.replace('"', '');
    value_param4 = value_param4.replace("'", '');
    value_param4 = value_param4.replace("'", '');
    value_param4 = value_param4.replace('_5B', '[');
    value_param4 = value_param4.replace('_5D', ']');
    response_2 = ` (${value_param3}, ${value_param4})`;
  }

  if (value_param5) {
    value_param5 = value_param5.replace('(', '');
    value_param5 = value_param5.replace(')', '');
    value_param5 = value_param5.replace('"', '');
    value_param5 = value_param5.replace("'", '');
    value_param5 = value_param5.replace("'", '');
    value_param5 = value_param5.replace('_5B', '[');
    value_param5 = value_param5.replace('_5D', ']');
    response_2 = ` (${value_param3}, ${value_param4}, ${value_param5})`;
  }
  // TODO: Assemble JavaScript into code variable.
  var code = `#pragma omp parallel${dropdown_type_1}${response}${dropdown_type_2}${response_2}\n{\n`;
  code += `${statements_pragma_statement}\n}`;
  console.log(code.length);
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// TODO: Assemble JavaScript into code variable.
