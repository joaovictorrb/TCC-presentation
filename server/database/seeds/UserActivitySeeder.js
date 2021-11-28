"use strict";

const Database = use("Database");

class UserActivitySeeder {
  async run() {
    await Database.table("user_activity").insert({
      userId: 2,
      activityId: 1,
      code: `#include <mpi.h>
#include <stdio.h>
#include <string.h>

int main(int argc, char* argv[]){
  int p, id, source=0, dest, tag=1, x, y;
  char message[100];
  MPI_Status status;
  
  MPI_Init (&argc, &argv);
  MPI_Comm_rank(MPI_COMM_WORLD, &id);
  MPI_Comm_size(MPI_COMM_WORLD,&p);
  if (id == 0){
    x = 12345;
    for(dest = 1; dest < p; dest++)
    MPI_Send(&x, 1, MPI_INT, dest, tag, MPI_COMM_WORLD);
  } else {
    MPI_Recv(&y, 1, MPI_INT, source, tag, MPI_COMM_WORLD, &status);
    printf("Processo %d: recebeu y = %d do processo 0\n", id, y);
  }
  MPI_Finalize ();
  return 0;
}`,
      reviewDescription: "",
      wasRevised: 0,
    });
    await Database.table("user_activity").insert({
      userId: 3,
      activityId: 2,
      code: `#include <mpi.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <time.h>

int main(int argc, char* argv[]){
  int p, id, source=0, dest, tag=1, x[50], y[50], i;	
  char message[100];
  MPI_Status status;

  MPI_Init (&argc, &argv);
  MPI_Comm_rank(MPI_COMM_WORLD, &id);
  MPI_Comm_size(MPI_COMM_WORLD,&p);

  srand(time(NULL));
        
  if (id == 0){
    for(i = 0; i < 50; i++)
    x[i] = rand()%50;
    for(dest = 1; dest < p; dest++){
      MPI_Send(x, 50, MPI_INT, dest, tag, MPI_COMM_WORLD);
    }
  } else {
    MPI_Recv(y, 50, MPI_INT, source, tag, MPI_COMM_WORLD, &status);
    for(i = 0; i < 50; i++) {
      printf("Processo %d: recebeu y[%d] = %d\n", id, i, y[i]);
    }
  }
  MPI_Finalize ();
  return 0;
}`,
      reviewDescription: "",
      wasRevised: 0,
    });
    await Database.table("user_activity").insert({
      userId: 3,
      activityId: 3,
      code: `#include <mpi.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <time.h>
int main(int argc, char* argv[]){int p, id, origem, tag=1, i, x, y;		
  MPI_Status status;
      
  MPI_Init (&argc, &argv);
  MPI_Comm_rank(MPI_COMM_WORLD, &id);
  MPI_Comm_size(MPI_COMM_WORLD,&p);
  srand(time(NULL));
  if (id != 0){
     x = rand()%100 * id;
     MPI_Send(&x, 1, MPI_INT, 0, tag, MPI_COMM_WORLD);
  } else {
    for(origem = 1; origem < p; origem++){
      MPI_Recv(&y, 1, MPI_INT, origem, tag, MPI_COMM_WORLD, &status);
      printf("Processo 0: recebeu o valor %d do P%d\n", y, origem);
    }
  }
    MPI_Finalize ();
    return 0;
  }
`,
      reviewDescription: "The overall code looks great!",
      wasRevised: 1,
    });
  }
}

module.exports = UserActivitySeeder;
