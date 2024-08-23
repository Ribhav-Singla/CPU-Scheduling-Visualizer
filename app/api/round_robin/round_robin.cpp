#include<iostream>
#include<vector>
#include<queue>
#include<algorithm>
#include <iomanip>
using namespace std;

class Process{
    public:
        int process_id;
        int arrival_time;
        int burst_time;
        int remaining_time;
        int completion_time = 0;
        int turnaround_time = 0;
        int waiting_time = 0;

        Process(int process_id=-1,int arrival_time=0,int burst_time=0){
            this->process_id = process_id;
            this->arrival_time = arrival_time;
            this->burst_time = burst_time;
            this->remaining_time = burst_time;
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
        return p1.burst_time < p2.burst_time;
    } else{
        return p1.arrival_time < p2.arrival_time;
    }
}

int main(){

    // Time Quantum
    int time_quantum;
    cin >> time_quantum;

    int n;
    cin>>n;
    vector<Process> processes(n);

    for(int i=0;i<n;++i){
        int arrival_time;
        int burst_time;
        cin>>arrival_time>>burst_time;
        processes[i] = Process(i,arrival_time,burst_time);
    }

    // sort the processes on the basis of arrival time 
    sort(processes.begin(),processes.end(),cmp); 

    // Initail time is zero
    int time = 0;
    // Pointer for process insertion till time
    int j = 1;
    // queue for process scheduling
    queue<int> q;
    // inserting the first Process into the queue
    q.push(0);

    while(!q.empty()){
        // get the process index from the queue
        int idx = q.front();
        q.pop();
        Process &curr = processes[idx];
        
        if(curr.remaining_time > time_quantum){
            time = time + time_quantum;
            curr.remaining_time = curr.remaining_time - time_quantum;
        }else{
            time = time + curr.remaining_time;
            curr.remaining_time = 0;
        }

        // Pushing those processes which have arrived till time
        for(; j< processes.size() and processes[j].arrival_time <= time ;++j){
            q.push(j);
        }

        // if the process is completely finished
        if(curr.remaining_time == 0){
            curr.set_completion_time(time);
            curr.set_turnaround_time(curr.completion_time - curr.arrival_time);
            curr.set_waiting_time(curr.turnaround_time - curr.burst_time);
        }else{
            q.push(idx);
        }
    }

    // computing the average turnaround_time and waiting_time
    int total_turnaround_time = 0;
    int total_waiting_time = 0;
    for(int i=0;i<n;++i){
        total_turnaround_time = total_turnaround_time + processes[i].get_turnaround_time();
        total_waiting_time = total_waiting_time + processes[i].get_waiting_time();
    }

    // Output as JSON
    cout << "[";
    for(int i = 0; i < n; ++i) {
        cout << "{";
        cout << "\"process_id\":" << processes[i].process_id << ",";
        cout << "\"arrival_time\":" << processes[i].arrival_time << ",";
        cout << "\"burst_time\":" << processes[i].burst_time << ",";
        cout << "\"completion_time\":" << processes[i].completion_time << ",";
        cout << "\"turnaround_time\":" << processes[i].turnaround_time << ",";
        cout << "\"waiting_time\":" << processes[i].waiting_time;
        cout << "}";
        if (i < n - 1) cout << ",";
    }
    cout << "]";

    return 0;
}
