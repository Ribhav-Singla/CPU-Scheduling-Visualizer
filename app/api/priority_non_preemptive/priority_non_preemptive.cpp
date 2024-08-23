// Lower the number higher the priority

#include<iostream>
#include<vector>
#include<algorithm>
#include<queue>
#include<climits>
#include<iomanip>
using namespace std;

class Process{
    public:
        int process_id;
        int arrival_time;
        int burst_time;
        int priority;
        int completion_time = 0;
        int turnaround_time = 0;
        int waiting_time = 0;

        Process(int process_id=-1,int arrival_time=0,int burst_time=0,int priority=0){
            this->process_id = process_id;
            this->arrival_time = arrival_time;
            this->burst_time = burst_time;
            this->priority = priority;
        }
        void set_completion_time(int completion_time){
            this->completion_time = completion_time;
        } 
        void set_turnaround_time(int turnaround_time){
            this->turnaround_time = turnaround_time;
        } 
        void set_waiting_time(int waiting_time){
            this->waiting_time = waiting_time;
        }
        int get_completion_time(){
            return completion_time;
        }
        int get_turnaround_time(){
            return turnaround_time;
        }
        int get_waiting_time(){
            return waiting_time;
        }
};

bool cmp(Process& p1, Process& p2){
    if(p1.arrival_time == p2.arrival_time){
        if(p1.priority == p2.priority){
            return p1.burst_time < p2.burst_time;
        } else{
            return p1.priority < p2.priority;
        }
    } else{
        return p1.arrival_time < p2.arrival_time;
    }
}

int main(){
    
    int n;
    cin>>n;
    vector<Process> processes(n);

    for(int i=0;i<n;++i){
        int arrival_time;
        int burst_time;
        int priority;
        cin>>arrival_time>>burst_time>>priority;
        processes[i] = Process(i,arrival_time,burst_time,priority);
    }

    // sort the processes on the basis of arrival time 
    sort(processes.begin(),processes.end(),cmp); 

    // computing the completion_time, turnaround_time and waiting_time of each process on the basis of priority
    int completion_time = processes[0].arrival_time;
    int index = 0;
    int remaining = n;

    while(remaining){
        int arrival_time = processes[index].arrival_time;
        int burst_time = processes[index].burst_time;
        int priority = processes[index].priority;

        completion_time = completion_time + burst_time;
        int turnaround_time = completion_time - arrival_time;
        int waiting_time = turnaround_time - burst_time;
        processes[index].set_completion_time(completion_time);
        processes[index].set_turnaround_time(turnaround_time);
        processes[index].set_waiting_time(waiting_time);
        remaining =  remaining - 1;

        // finding the next process having the highest priority and arrival_time less than equal to completion_time
        int min_index = -1;
        int min_priority = INT_MAX;
        for(int i=index+1;i<n;++i){
            if(processes[i].arrival_time <= completion_time && processes[i].priority < min_priority){
                min_priority = processes[i].priority;
                min_index = i;
            }
        }
        if(min_index == -1){
            index = index+1;
            completion_time = index < n ? processes[index].arrival_time : 0;
        } else{
            index = min_index;
        }
    }
    

    // computing the average turnaround_time and waiting_time
    int total_turnaround_time = 0;
    int total_waiting_time = 0;
    for(int i=0;i<n;++i){
        total_turnaround_time = total_turnaround_time + processes[i].turnaround_time;
        total_waiting_time = total_waiting_time + processes[i].waiting_time;
    }

    // Output as JSON
    cout << "[";
    for(int i = 0; i < n; ++i) {
        cout << "{";
        cout << "\"process_id\":" << processes[i].process_id << ",";
        cout << "\"arrival_time\":" << processes[i].arrival_time << ",";
        cout << "\"burst_time\":" << processes[i].burst_time << ",";
        cout << "\"priority\":" << processes[i].priority << ",";
        cout << "\"completion_time\":" << processes[i].completion_time << ",";
        cout << "\"turnaround_time\":" << processes[i].turnaround_time << ",";
        cout << "\"waiting_time\":" << processes[i].waiting_time;
        cout << "}";
        if (i < n - 1) cout << ",";
    }
    cout << "]";

    return 0;
}