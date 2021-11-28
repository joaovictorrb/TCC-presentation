export const firstExampleOpenMP = `#include <stdio.h>
#include <omp.h>
  
int main(void) {
  #pragma omp parallel
  printf("Hello, world.");
  return 0;
}`;

export const secondExampleOpenMP = `#include <stdio.h>
#include <omp.h>

int main (){
  int nthreads, id;
  //Start a parallel region
  #pragma omp parallel private(id) {
    
    // Fetch thread ID
    id = omp_get_thread_num();
    printf("Hello from thread = %d", id);
    // In this case, only thread Zero executes
    if (id == 0) {
      // Total number of threads
      nthreads = omp_get_num_threads();
      printf("Amount of threads = %d", nthreads);
    }
  } //End of the parallel region
  
  //Sequential execution
  printf("End");
  
  return 0;
}`;

export const thirdExampleOpenMP = `#include <omp.h>
#include <stdio.h>
#include <stdlib.h>

#define CHUNKSIZE 20
#define N 50000

int main (){
  long int i, j, chunk = CHUNKSIZE, id, tam;
  float *a;
  double tInit, tEnd;
  tam = (long int) N * N;
  tInit = omp_get_wtime();
  a = (float *) malloc( tam * sizeof(float));
  
  // #pragma omp parallel private(n) shared(a, chunk) {
  // id = omp_get_thread_num();
  // #pragma omp for schedule(dynamic,chunk) nowait
  for (i=0; i < N; i++){
    for(j=0; j < N; j++){
      //   printf("%f", (float)(n * N));
      //   printf("%f", (float)(N - (n - 1))); 
      *(a + (i*N+j)) = i*j;
      //   printf("a[%d] = %.2f", n, a[n-1]);
    }
  }
  // }

  tEnd = omp_get_wtime();
  printf("Execution time: %f seconds", tEnd - tInit);
  free(a);
  
  return 0;
}

`;

export const fourthExampleMPI = `// Example of the use of the basic MPI primitives.
#include <stdio.h>
#include <mpi.h>

int main(int argc, char* argv[]){
  int p, id;
  MPI_Init (&argc, &argv);
  MPI_Comm_rank(MPI_COMM_WORLD, &id);
  MPI_Comm_size(MPI_COMM_WORLD,&p);
  printf("- Hello World!!!, from %d", id);
  MPI_Finalize ();
  return 0;
}
`;

export const fifthExampleMPI = `#include <mpi.h>
#include <stdio.h>
#include <stdlib.h>
int  main(int argc, char* argv[]){
  int p, id, origin, destiny, tag=1;
  float k;
  MPI_Status status;
  MPI_Init (&argc, &argv);
  MPI_Comm_rank(MPI_COMM_WORLD, &id);
  MPI_Comm_size(MPI_COMM_WORLD,&p);

  printf("Point-to-point example!");

  if (p == 2){
    // If the process quantity is 2, then communication between P0 and P1 is possible.
    
    if (id == 1){
      printf("Process 1 is sending a scalar to Process 0");
      destiny = 0;
      k = rand()%1000;
      MPI_Send(&k, 1, MPI_FLOAT, destiny, tag, MPI_COMM_WORLD);
    } else{
      origin = 1;
      MPI_Recv(&k, 1, MPI_FLOAT, origin, tag, MPI_COMM_WORLD, &status);
      printf("Process 0 informs that it has received the value %f from Process %d", k, origin);
    }
  }else{
    if(id == 0) printf("The process quantity for execution must be equal to 2.");
  }
  MPI_Finalize ();
  return 0;
}`;
