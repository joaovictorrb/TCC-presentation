import React from 'react';
import ReactCodeSnippet from 'react-code-snippet';
import Button from '../../Forms/Button';

import BlocklyComponent, { Block } from '../../BlocklyComponent';

import BlocklyJS from 'blockly/javascript';
import '../../BlocklyComponent/CustomBlocks/customBlocks';
import '../../BlocklyComponent/CustomGenerator/generator';

class Playground extends React.Component {
  constructor(props) {
    super(props);
    this.simpleWorkspace = React.createRef();
    this.state = { codeGenerated: '' };
  }

  generateCode = () => {
    var code = BlocklyJS.workspaceToCode(
      this.simpleWorkspace.current.workspace,
    );
    this.setState({ codeGenerated: code });
  };

  render() {
    return (
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 100vh 1fr',
          gridTemplateRows: '1f 1fr 1fr 1fr',
          margin: '0 20%',
          padding: '0 2rem',
        }}
      >
        <h1
          style={{
            gridColumn: '2',
            gridRow: '1',
            textAlign: 'center',
            fontSize: '2rem',
            padding: '2.5rem 0 1rem 0',
            borderBottom: '2px solid #13437e',
          }}
        >
          Playground Blockly
        </h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gridColumn: '2',
            gridRow: '2',
            paddingTop: '1rem',
          }}
        >
          <Button onClick={this.generateCode}>Convert</Button>
        </div>
        <div
          style={{
            gridColumn: '2',
            gridRow: '3',
            paddingTop: '1rem',
            height: '50vh',
          }}
        >
          <BlocklyComponent
            ref={this.simpleWorkspace}
            readOnly={false}
            trashcan={true}
            media={'media/'}
            move={{
              scrollbars: true,
              drag: true,
              wheel: true,
            }}
            initialXml={`
              <xml xmlns="http://www.w3.org/1999/xhtml">
              <block type="controls_ifelse" x="0" y="0"></block>
              </xml>
            `}
          >
            <Block type="includes_openmp" />
            <Block type="includes_mpi" />
            <Block type="includes_general" />
            <Block type="defines_chunksize" />
            <Block type="defines_n" />
            <Block type="mpi_start" />
            <Block type="main" />
            <Block type="variables" />
            <Block type="def_variable" />
            <Block type="controls_ifelse" />
            <Block type="comparasion_ifelse" />
            <Block type="logic_operators_c" />
            <Block type="logic_negate" />
            <Block type="logic_boolean" />
            <Block type="math_number" />
            <Block type="for_block_increment" />
            <Block type="for_block_decrement" />
            <Block type="printf" />
            <Block type="mpi_send_int" />
            <Block type="mpi_send_char" />
            <Block type="mpi_recv_int" />
            <Block type="mpi_recv_char" />
            <Block type="mpi_end" />
            <Block type="custom_varint" />
            <Block type="omp_get_wtime" />
            <Block type="custom_varString" />
            <Block type="printf_full_custom" />
            <Block type="pragma" />
            {/*  <Block type="math_arithmetic" /> */}
            <Block type="text" />
            {/* <Block type="text_print" /> */}
          </BlocklyComponent>
        </div>
        <div style={{ gridColumn: '2', gridRow: '4', paddingBottom: '3rem' }}>
          <ReactCodeSnippet lang="c" code={this.state.codeGenerated} />
        </div>
      </section>
    );
  }
}

export default Playground;
