"use strict";

const Database = use("Database");

class ActivitySeeder {
  async run() {
    await Database.table("activities").insert({
      title: "A process zero sends a scalar to all other processes",
      description:
        "A communication situation often found in applications is that a process sends a numeric value (scalar) to all other processes participating in the application. In this example, the process with identifier zero sends a scalar to all other processes with a total number of processes greater than or equal to two.",
      type: "MPI",
      level: "Normal",
    });
    await Database.table("activities").insert({
      title: "Point-to-Point Communication 1",
      description:
        "In point-to-point communication, a process may need to send a set of data, all of the same type, which characterizes a vector, to all other processes participating in the application. In this exercise, the Process with identifier zero sends a numeric vector to all other processes",
      type: "MPI",
      level: "Normal",
    });
    await Database.table("activities").insert({
      title: "Point-to-Point Communication 2",
      description:
        "In this activity, also based on point-to-point communication, we will have the opposite situation of exercise 1. Here, all processes participating in the communication send a numerical value to process zero. ",
      type: "MPI",
      level: "Normal",
    });
    await Database.table("activities").insert({
      title: "All participating processes send to process zero",
      description:
        "In this activity, all processes participating in the communication send a numeric vector to process zero. What differs from the previous activity is the amount of data transmitted.",
      type: "MPI",
      level: "Normal",
    });
    // openMP

    await Database.table("activities").insert({
      title: "Two vectors of size N and display their values on the screen.",
      description:
        "Develop a parallel program to initialize two vectors, of size N, and display their values on the screen, along with the thread identifier of the application.",
      type: "OpenMP",
      level: "Normal",
    });

    await Database.table("activities").insert({
      title: "Get the total execution time of the application.",
      description:
        "Develop a program with one parallel region of execution, with eight threads. Then create a second parallel region in the code, with only two threads. In both regions, each thread will show its identifier number on the screen.",
      type: "OpenMP",
      level: "Easy",
    });
  }
}

module.exports = ActivitySeeder;
