#!/bin/bash

# Input the number of processes
echo -n "Enter the number of processes: "
read n

# Declare arrays to store process details
declare -a process_id
declare -a arrival_time
declare -a burst_time
declare -a start_time
declare -a end_time
declare -a turnaround_time
declare -a waiting_time

# Input process details
for ((i = 0; i < n; i++)); do
  echo "Enter details for process $((i+1)):"

  echo -n "Process ID: "
  read process_id[$i]

  echo -n "Arrival Time: "
  read arrival_time[$i]

  echo -n "Burst Time: "
  read burst_time[$i]
done

# Sort processes by arrival time (using bubble sort for simplicity)
for ((i = 0; i < n-1; i++)); do
  for ((j = 0; j < n-i-1; j++)); do
    if ((arrival_time[j] > arrival_time[j+1])); then
      # Swap arrival_time
      temp=${arrival_time[j]}
      arrival_time[j]=${arrival_time[j+1]}
      arrival_time[j+1]=$temp

      # Swap burst_time
      temp=${burst_time[j]}
      burst_time[j]=${burst_time[j+1]}
      burst_time[j+1]=$temp

      # Swap process_id
      temp=${process_id[j]}
      process_id[j]=${process_id[j+1]}
      process_id[j+1]=$temp
    fi
  done
done

# Calculate start time, end time, turnaround time, and waiting time
current_time=0
for ((i = 0; i < n; i++)); do
  # Start time is the current time or arrival time (whichever is later)
  if ((current_time < arrival_time[i])); then
    current_time=${arrival_time[i]}
  fi
  start_time[$i]=$current_time

  # End time = start time + burst time
  end_time[$i]=$((current_time + burst_time[i]))

  # Turnaround time = end time - arrival time
  turnaround_time[$i]=$((end_time[i] - arrival_time[i]))

  # Waiting time = turnaround time - burst time
  waiting_time[$i]=$((turnaround_time[i] - burst_time[i]))

  # Update the current time to the end time of the current process
  current_time=${end_time[i]}
done

# Display the results
echo -e "\nScheduling Results (FCFS):"
echo -e "PID\tArrival\tBurst\tStart\tEnd\tTAT\tWT"
for ((i = 0; i < n; i++)); do
  echo -e "${process_id[i]}\t${arrival_time[i]}\t${burst_time[i]}\t${start_time[i]}\t${end_time[i]}\t${turnaround_time[i]}\t${waiting_time[i]}"
done







