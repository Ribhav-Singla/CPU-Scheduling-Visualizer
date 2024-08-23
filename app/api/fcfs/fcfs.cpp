#include<iostream>
#include<vector>
#include<algorithm>
#include<iomanip>
using namespace std;

class Process{
public:
    int process_id;
    int arrival_time;
    int burst_time;
    int completion_time = 0;
    int turnaround_time = 0;
    int waiting_time = 0;

    Process(int process_id=-1,int arrival_time=0,int burst_time=0){
        this->process_id = process_id;
        this->arrival_time = arrival_time;
        this->burst_time = burst_time;
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
};

bool cmp(Process& p1, Process& p2){
    if(p1.arrival_time == p2.arrival_time){
        return p1.burst_time < p2.burst_time;
    } else{
        return p1.arrival_time < p2.arrival_time;
    }
}

int main(){

    int n;
    cin >> n;
    vector<Process> processes(n);

    for(int i=0;i<n;++i){
        int arrival_time;
        int burst_time;
        cin >> arrival_time >> burst_time;
        processes[i] = Process(i,arrival_time,burst_time);
    }

    sort(processes.begin(),processes.end(),cmp); 

    int completion_time = processes[0].arrival_time;

    for(int i=0;i<n;++i){
        int arrival_time = processes[i].arrival_time;
        int burst_time = processes[i].burst_time;
        if(arrival_time > completion_time){
            completion_time = arrival_time;
        }
        completion_time = completion_time + burst_time;
        int turnaround_time = completion_time - arrival_time;
        int waiting_time = turnaround_time - burst_time;
        processes[i].set_completion_time(completion_time);
        processes[i].set_turnaround_time(turnaround_time);
        processes[i].set_waiting_time(waiting_time);
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
