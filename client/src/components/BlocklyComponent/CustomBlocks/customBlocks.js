import * as Blockly from 'blockly/core';

var includeOmp = {
  type: 'includes_openmp',
  message0: 'include openmp',
  previousStatement: null,
  nextStatement: null,
  colour: 150,
  tooltip: '',
  helpUrl: '',
};
Blockly.Blocks['includes_openmp'] = {
  init: function () {
    this.jsonInit(includeOmp);
  },
};

var includeMpi = {
  type: 'includes_mpi',
  message0: 'include mpi',
  previousStatement: null,
  nextStatement: null,
  colour: 150,
  tooltip: '',
  helpUrl: '',
};
Blockly.Blocks['includes_mpi'] = {
  init: function () {
    this.jsonInit(includeMpi);
  },
};

var includeNecessaryLibs = {
  type: 'includes_general',
  message0: 'includes',
  previousStatement: null,
  nextStatement: null,
  colour: 150,
  tooltip: '',
  helpUrl: '',
};
Blockly.Blocks['includes_general'] = {
  init: function () {
    this.jsonInit(includeNecessaryLibs);
  },
};

var main = {
  type: 'main',
  message0: 'main %1',
  args0: [
    {
      type: 'input_statement',
      name: 'main',
    },
  ],
  previousStatement: null,
  colour: 100,
  tooltip: '',
  helpUrl: '',
};
Blockly.Blocks['main'] = {
  init: function () {
    this.jsonInit(main);
  },
};

var definesChunksize = {
  type: 'defines_chunksize',
  message0: 'CHUNKSIZE %1',
  args0: [
    {
      type: 'input_value',
      name: 'defines_chunksize',
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 180,
  tooltip: '',
  helpUrl: '',
};
Blockly.Blocks['defines_chunksize'] = {
  init: function () {
    this.jsonInit(definesChunksize);
  },
};

var definesN = {
  type: 'defines_n',
  message0: 'N %1',
  args0: [
    {
      type: 'input_value',
      name: 'define_n',
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 180,
  tooltip: '',
  helpUrl: '',
};
Blockly.Blocks['defines_n'] = {
  init: function () {
    this.jsonInit(definesN);
  },
};

var mpiStart = {
  type: 'mpi_start',
  message0: 'mpi_start %1 %2 %3',
  args0: [
    {
      type: 'input_dummy',
    },
    {
      type: 'input_value',
      name: 'comm_rank',
    },
    {
      type: 'input_value',
      name: 'comm_size',
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 10,
  tooltip: '',
  helpUrl: '',
};
Blockly.Blocks['mpi_start'] = {
  init: function () {
    this.jsonInit(mpiStart);
  },
};

var variables = {
  type: 'variables',
  message0: 'predef inputs %1',
  args0: [
    {
      type: 'field_dropdown',
      name: 'variables',
      options: [
        ['', ''],
        ['tam', 'tam'],
        ['status', 'status'],
        ['p', 'p'],
        ['id', 'id'],
        ['source', 'source'],
        ['source = 0', 'source = 0'],
        ['dest', 'dest'],
        ['dest = 1', 'dest = 0'],
        ['i', 'i'],
        ['j', 'j'],
        ['i=0', 'i=0'],
        ['j=0', 'j=0'],
        ['x', 'x'],
        ['y', 'y'],
        ['tag=1', 'tag=1'],
        ['tag', 'tag'],
        ['message', 'message'],
        ['t = 0', 't = 0'],
        ['t = 1', 't = 1'],
        ['t', 't'],
        ['z = 0', 'z = 0'],
        ['z = 1', 'z = 1'],
        ['z', 'z'],
        ['tInit', 'tInit'],
        ['tEnd', 'tEnd'],
        ['a', 'a'],
        ['b', 'b'],
        ['c', 'c'],
        ['d', 'd'],
        ['CHUNKSIZE', 'CHUNKSIZE'],
        ['N*N', 'N plus N'],
      ],
    },
  ],
  output: null,
  colour: 230,
  tooltip: '',
  helpUrl: '',
};
Blockly.Blocks['variables'] = {
  init: function () {
    this.jsonInit(variables);
  },
};

var defVariables = {
  type: 'def_variable',
  message0: 'Var def %1 %2',
  args0: [
    {
      type: 'field_dropdown',
      name: 'variables',
      options: [
        ['', ''],
        ['char', 'char'],
        ['int', 'int'],
      ],
    },
    {
      type: 'input_value',
      name: 'variable_dropdown',
    },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: 230,
  tooltip: '',
  helpUrl: '',
};
Blockly.Blocks['def_variable'] = {
  init: function () {
    this.jsonInit(defVariables);
  },
};

var comparasionIfElse = {
  type: 'comparasion_ifelse',
  message0: '%1 %2 %3',
  args0: [
    {
      type: 'input_value',
      name: 'input_value_one',
    },
    {
      type: 'field_dropdown',
      name: 'operators',
      options: [
        ['=', '='],
        ['!=', '!='],
        ['>', '>'],
        ['<', '<'],
        ['==', '=='],
        ['=>', '=>'],
        ['<=', '<='],
      ],
    },
    {
      type: 'input_value',
      name: 'input_value_two',
    },
  ],
  inputsInline: true,
  output: null,
  colour: 230,
  tooltip: '',
  helpUrl: '',
};
Blockly.Blocks['comparasion_ifelse'] = {
  init: function () {
    this.jsonInit(comparasionIfElse);
  },
};

var logicOperatorsC = {
  type: 'logic_operators_c',
  message0: '%1 %2 %3',
  args0: [
    {
      type: 'input_value',
      name: 'input_one',
    },
    {
      type: 'field_dropdown',
      name: 'logic',
      options: [
        ['or', 'or'],
        ['and', 'and'],
      ],
    },
    {
      type: 'input_value',
      name: 'input_two',
    },
  ],
  inputsInline: true,
  output: null,
  colour: 230,
  tooltip: '',
  helpUrl: '',
};
Blockly.Blocks['logic_operators_c'] = {
  init: function () {
    this.jsonInit(logicOperatorsC);
  },
};

var forBlockIncrement = {
  type: 'for_block_increment',
  message0: 'For++ %1 %2 %3 %4',
  args0: [
    {
      type: 'input_value',
      name: 'input_one',
    },
    {
      type: 'field_dropdown',
      name: 'operator',
      options: [
        ['=', '='],
        ['>', '>'],
        ['<', '<'],
        ['=>', '=>'],
        ['<=', '<='],
      ],
    },
    {
      type: 'input_value',
      name: 'input_two',
    },
    {
      type: 'input_statement',
      name: 'for_content',
    },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: 230,
  tooltip: '',
  helpUrl: '',
};
Blockly.Blocks['for_block_increment'] = {
  init: function () {
    this.jsonInit(forBlockIncrement);
  },
};

var forBlockDecrement = {
  type: 'for_block_decrement',
  message0: 'For-- %1 %2 %3 %4',
  args0: [
    {
      type: 'input_value',
      name: 'input_one',
    },
    {
      type: 'field_dropdown',
      name: 'operator',
      options: [
        ['=', '='],
        ['>', '>'],
        ['<', '<'],
        ['=>', '=>'],
        ['<=', '<='],
      ],
    },
    {
      type: 'input_value',
      name: 'input_two',
    },
    {
      type: 'input_statement',
      name: 'for_content',
    },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: 230,
  tooltip: '',
  helpUrl: '',
};
Blockly.Blocks['for_block_decrement'] = {
  init: function () {
    this.jsonInit(forBlockDecrement);
  },
};

var printf = {
  type: 'printf',
  message0: 'printf %1 text %2 var %3 var %4',
  args0: [
    {
      type: 'input_dummy',
    },
    {
      type: 'input_value',
      name: 'input_one',
    },
    {
      type: 'input_value',
      name: 'input_two',
    },
    {
      type: 'input_value',
      name: 'input_three',
    },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: 230,
  tooltip: '',
  helpUrl: '',
};
Blockly.Blocks['printf'] = {
  init: function () {
    this.jsonInit(printf);
  },
};

var mpiEnd = {
  type: 'mpi_end',
  message0: 'MPI_END',
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: 10,
  tooltip: '',
  helpUrl: '',
};
Blockly.Blocks['mpi_end'] = {
  init: function () {
    this.jsonInit(mpiEnd);
  },
};

var customNumericVar = {
  type: 'custom_varint',
  message0: 'Var %1 %2 name %3 value if needed %4',
  args0: [
    {
      type: 'field_dropdown',
      name: 'type',
      options: [
        ['', ''],
        ['int', 'int'],
        ['float', 'float'],
        ['decimal', 'decimal'],
      ],
    },
    {
      type: 'input_dummy',
    },
    {
      type: 'input_value',
      name: 'variable_name',
    },
    {
      type: 'input_value',
      name: 'variable_value',
    },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: 230,
  tooltip: '',
  helpUrl: '',
};
Blockly.Blocks['custom_varint'] = {
  init: function () {
    this.jsonInit(customNumericVar);
  },
};

var customStringVar = {
  type: 'custom_varString',
  message0: 'VarString %1 %2 name %3 value if needed %4',
  args0: [
    {
      type: 'field_dropdown',
      name: 'type',
      options: [
        ['', ''],
        ['chat', 'char'],
      ],
    },
    {
      type: 'input_dummy',
    },
    {
      type: 'input_value',
      name: 'variable_name',
    },
    {
      type: 'input_value',
      name: 'variable_value',
    },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: 230,
  tooltip: '',
  helpUrl: '',
};
Blockly.Blocks['custom_varString'] = {
  init: function () {
    this.jsonInit(customStringVar);
  },
};

var mpiSendInt = {
  type: 'mpi_send_int',
  message0: 'MPI_SEND_INT ( %1, %2, %3 %4, %5 );',
  args0: [
    {
      type: 'input_value',
      name: 'params_1',
    },
    {
      type: 'input_value',
      name: 'params_2',
    },
    {
      type: 'input_dummy',
    },
    {
      type: 'input_value',
      name: 'params_3',
    },
    {
      type: 'input_value',
      name: 'params_4',
    },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: 10,
  tooltip: '',
  helpUrl: '',
};
Blockly.Blocks['mpi_send_int'] = {
  init: function () {
    this.jsonInit(mpiSendInt);
  },
};

var mpiSendChar = {
  type: 'mpi_send_char',
  message0: 'MPI_SEND_CHAR ( %1, %2, %3 %4, %5 );',
  args0: [
    {
      type: 'input_value',
      name: 'params_1',
    },
    {
      type: 'input_value',
      name: 'params_2',
    },
    {
      type: 'input_dummy',
    },
    {
      type: 'input_value',
      name: 'params_3',
    },
    {
      type: 'input_value',
      name: 'params_4',
    },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: 10,
  tooltip: '',
  helpUrl: '',
};
Blockly.Blocks['mpi_send_char'] = {
  init: function () {
    this.jsonInit(mpiSendChar);
  },
};

var mpiRecvInt = {
  type: 'mpi_recv_int',
  message0: 'MPI_RECV_INT ( %1 ,  %2 , %3 ,  %4 ,  %5 )',
  args0: [
    {
      type: 'input_value',
      name: 'params_1',
    },
    {
      type: 'input_value',
      name: 'params_2',
    },
    {
      type: 'input_value',
      name: 'params_3',
    },
    {
      type: 'input_value',
      name: 'params_4',
    },
    {
      type: 'input_value',
      name: 'params_5',
    },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: 10,
  tooltip: '',
  helpUrl: '',
};
Blockly.Blocks['mpi_recv_int'] = {
  init: function () {
    this.jsonInit(mpiRecvInt);
  },
};

var mpiRecvChar = {
  type: 'mpi_recv_char',
  message0: 'MPI_RECV_CHAR ( %1 ,  %2 , %3 ,  %4 ,  %5 )',
  args0: [
    {
      type: 'input_value',
      name: 'params_1',
    },
    {
      type: 'input_value',
      name: 'params_2',
    },
    {
      type: 'input_value',
      name: 'params_3',
    },
    {
      type: 'input_value',
      name: 'params_4',
    },
    {
      type: 'input_value',
      name: 'params_5',
    },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: 10,
  tooltip: '',
  helpUrl: '',
};
Blockly.Blocks['mpi_recv_char'] = {
  init: function () {
    this.jsonInit(mpiRecvChar);
  },
};

var timer = {
  type: 'omp_get_wtime',
  message0: 'OpenMP Timer %1',
  args0: [
    {
      type: 'input_statement',
      name: 'omp_get_wtime',
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 135,
  tooltip: '',
  helpUrl: '',
};
Blockly.Blocks['omp_get_wtime'] = {
  init: function () {
    this.jsonInit(timer);
  },
};

var printfFullCustom = {
  type: 'printf_full_custom',
  message0: 'printf %1',
  args0: [
    {
      type: 'input_value',
      name: 'full_custom_printf',
    },
  ],
  inputsInline: true,
  output: null,
  colour: 300,
  tooltip: '',
  helpUrl: '',
};
Blockly.Blocks['printf_full_custom'] = {
  init: function () {
    this.jsonInit(printfFullCustom);
  },
};

var pragmaOmp = {
  type: 'pragma',
  message0: 'Pragma omp parallel %1 %2 %3 %4 %5 %6 %7 %8 %9 %10',
  args0: [
    {
      type: 'field_dropdown',
      name: 'type_1',
      options: [
        ['', ''],
        ['private', 'private'],
      ],
    },
    {
      type: 'input_dummy',
    },
    {
      type: 'input_value',
      name: 'param1',
    },
    {
      type: 'input_value',
      name: 'param2',
    },
    {
      type: 'field_dropdown',
      name: 'type_2',
      options: [
        ['', ''],
        ['shared', 'shared'],
        ['num_threads', 'num_threads'],
      ],
    },
    {
      type: 'input_dummy',
    },
    {
      type: 'input_value',
      name: 'param3',
    },
    {
      type: 'input_value',
      name: 'param4',
    },
    {
      type: 'input_value',
      name: 'param5',
    },
    {
      type: 'input_statement',
      name: 'pragma_statement',
    },
  ],
  inputsInline: true,
  output: null,
  colour: 240,
  tooltip: '',
  helpUrl: '',
};
Blockly.Blocks['pragma'] = {
  init: function () {
    this.jsonInit(pragmaOmp);
  },
};
