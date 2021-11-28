import React from 'react';
import ReactCodeSnippet from 'react-code-snippet';
import styles from './Documentation.module.css';
import {
  firstExampleOpenMP,
  secondExampleOpenMP,
  thirdExampleOpenMP,
  fourthExampleMPI,
  fifthExampleMPI,
} from './Examples';

const Documentation = () => {
  return (
    <section className={styles.container}>
      <div className={styles.containerBody}>
        <h1>Documentation</h1>
        <div className={styles.content}>
          <h2>OpenMP-5.1</h2>
          <h3>
            Import (C): <strong>#include {'<omp.h>'}</strong>
          </h3>
          <h3>Parallel Construct</h3>
          <p>
            <strong>#pragma omp parallel [clause[ [,]clause] ... ]</strong>
            <br />
            <li>
              Structured-blockCreates a team of OpenMP threads that execute the
              region.
            </li>
          </p>
          <br />
          <h4>Clauses</h4>
          <ul>
            <li>default (data-sharing-attribute)</li>
            <li>private (list)</li>
            <li>firstprivate (list)</li>
            <li>shared (list)</li>
            <li>copyin (list)</li>
            <li>
              reduction ([reduction-modifier, ] reduction-identifier : list)
            </li>
            <li>
              proc_bind (primary | master (deprecated) | close | spread)
              allocate ([allocator : ]list)
            </li>
            <li>if ([ parallel : ] scalar-expression)</li>
            <li>num_threads (integer-expression)</li>
          </ul>

          <ReactCodeSnippet lang="c" code={firstExampleOpenMP} />
          <h5>
            Example 1 - This initial example has the #pragma omp parallel
            directive inserted in the code, indicating parallelism in execution.
            A threads to be created is defined by the OpenMP itself.
          </h5>

          <h3>Worksharing-loop construct</h3>
          <p>
            <strong>#pragma omp for [clause[ [,]clause] ... ]</strong>
            <br />
            <li>
              Specifies that the iterations of associated loops will be executed
              in parallel by threads in the team
            </li>
          </p>
          <br />
          <h4>Clauses</h4>
          <ul>
            <li>lastprivate ([lastprivate-modifier: ] list)</li>
            <li>private (list)</li>
            <li>firstprivate (list)</li>
            <li>linear (list[ : linear-step])</li>
            <li>schedule ([modifier [, modifier] : ] kind [, chunk_size])</li>
            <li>
              reduction ([reduction-modifier, ] reduction-identifier : list)
            </li>
            <li>
              collapse (n) ordered [(n)] allocate ([allocator : ]list) order ([
              order-modifier : ] concurrent)
            </li>
            <li>nowait</li>
          </ul>
          <h3>Thread team routines</h3>
          <p>
            <strong>omp_set_num_threads (int num_threads)</strong>
            <br />
            <li>
              Affects the number of threads used for subsequent parallel
              constructs not specifying a num_threads clause, by setting the
              value of the first element of the nthreads-var ICV of the current
              task to num_threads.
            </li>
          </p>
          <p>
            <strong>omp_get_num_threads (void)</strong>
            <br />
            <li>
              Returns the number of threads in the current team. The binding
              region for an omp_get_num_threads region is the innermost
              enclosing parallel region. If called from the sequential part of a
              program, this routine returns 1.
            </li>
          </p>

          <ReactCodeSnippet lang="c" code={secondExampleOpenMP} />
          <h5>
            Example 2 - In this example, in the parallel region of the code,
            thread zero gets the total amount of threads running the application
            and shows this amount on the screen.
          </h5>
          <h3>Timing routines</h3>
          <p>
            <strong>omp_get_wtime</strong>
            <br />
            <li>
              Timing routines support a portable wall clock timer. These record
              elapsed time per-thread and are not guaranteed to be globally
              consistent across all the threads participating in an application
            </li>
          </p>

          <ReactCodeSnippet lang="c" code={thirdExampleOpenMP} />
          <h5>
            Example 3 - In this example, we have the dynamic allocation of a
            matrix of order N x N and its initialization in parallel, with the
            OpenMP directives.
          </h5>

          <br />
          <h2>MPI</h2>

          <h3>
            Import (C): <strong>#include {'<mpi.h>'}</strong>
          </h3>

          <h3>MPI Data Types</h3>
          <table>
            <thead>
              <tr>
                <th>DataType</th>
                <th>MPI</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>char</td>
                <td>MPI_CHAR</td>
              </tr>
              <tr>
                <td>int</td>
                <td>MPI_INT</td>
              </tr>
              <tr>
                <td>float</td>
                <td>MPI_FLOAT</td>
              </tr>
              <tr>
                <td>double</td>
                <td>MPI_DOUBLE</td>
              </tr>
            </tbody>
          </table>

          <h3>Setup and Tear Down</h3>

          <p>
            <strong>MPI_Init(&argc, &argv); </strong>
            <br />
            <li>
              Starts up the MPI runtime environment at the beginning of a run
            </li>
          </p>

          <p>
            <strong>MPI_Finalize();</strong>
            <br />
            <li>Shuts down the MPI runtime environment at the end of a run.</li>
          </p>

          <h3>Gathering Information</h3>

          <p>
            <strong>MPI_Comm_rank (MPI_COMM_WORLD, &my_rank);</strong> <br />
            <li>
              Gets the process ID that the current process uses, which is
              between 0 and Np-1 inclusive (typically called just after
              MPI_Init).
            </li>
          </p>

          <p>
            <strong>MPI_Comm_size (MPI_COMM_WORLD, &num_procs);</strong>
            <br />
            <li>
              Gets the number of processes in a run, Np (typically called just
              after MPI_Init).
            </li>
          </p>

          <ReactCodeSnippet lang="c" code={fourthExampleMPI} />
          <h5>
            Example 4 - In this code, the basic MPI primitives are used: library
            initialization: MPI_Init; obtaining the process identifier number:
            MPI_Comm_rank; obtaining the total number of processes participating
            in the application: MPI_Comm_size; terminating the use of the
            library, in the program: MPI_Finalize;
          </h5>

          <p>
            <strong>MPI_Get_processor_name (&name, &result_length)</strong>
            <br />
            <li>
              Is not often used in real code. We used it to prove to ourselves
              that "Hello, World!" was running on different machines. It returns
              the name of the machine that the code is running on.
            </li>
          </p>

          <h3>Communication (Message Passing)</h3>
          <p>
            <strong>
              MPI_Send (message, strlen(message)+1, MPI_CHAR, destination, tag,
              MPI_COMM_WORLD);
            </strong>
            <br />
            <li>
              Sends a message from the current process to some other process
              (the destination).
            </li>
          </p>
          <p>
            <strong>
              MPI_Recv (message, max_message_length+1, MPI_CHAR, source, tag,
              MPI_COMM_WORLD, &status)
            </strong>
            <br />
            <li>
              Receives a message on the current process from some other process
              (the source).
            </li>
          </p>
          <ReactCodeSnippet lang="c" code={fifthExampleMPI} />
          <h5>
            Example 5 - In this activity, two processes will establish
            communication, in this case Process One will send a numeric value to
            Process Zero. This example only works for two processes in the
            application.
          </h5>
          <p>
            <strong>
              MPI_Bcast(array, length, MPI_INTEGER, source, MPI_COMM_WORLD);
            </strong>
            <br />
            <li>Broadcasts a message from one process to all of the others.</li>
          </p>
          <p>
            <strong>
              MPI_Reduce(&value, &value_sum, count, MPI_INT, MPI_SUM, server,
              MPI_COMM_WORLD);
            </strong>
            <br />
            <li>
              Performs a reduction (e.g., sum, maximum) of a variable on all
              processes, sending the result to a single process.
            </li>
          </p>
          <p>
            <strong>
              MPI_Allreduce(&value, &value_sum, count, MPI_INT, MPI_SUM,
              MPI_COMM_WORLD);
            </strong>
            <br />
            <li>
              Performs a reduction of a variable on all processes, and sends
              result to all processes (and therefore takes longer)
            </li>
          </p>
        </div>

        <div className={styles.source}>
          <h2>References</h2>
          <p>
            (1) OpenMP 5.1 -
            <a href="https://www.openmp.org/wp-content/uploads/OpenMPRefCard-5.1-web.pdf">
              https://www.openmp.org/wp-content/uploads/OpenMPRefCard-5.1-web.pdf
            </a>
          </p>
          <p>
            (2) MPI -
            <a href="https://wtpc.github.io/clases/2018/mpicheatsheet.pdf">
              https://wtpc.github.io/clases/2018/mpicheatsheet.pdf
            </a>
          </p>
          <p>
            (3) MPI -
            <a href="https://www.mpi-forum.org/docs/mpi-4.0/mpi40-report.pdf">
              https://www.mpi-forum.org/docs/mpi-4.0/mpi40-report.pdf
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Documentation;
