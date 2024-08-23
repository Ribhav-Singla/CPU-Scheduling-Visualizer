#include<iostream>
#include<vector>
#include<algorithm>
#include<climits>
#include<iomanip>
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

    // remaining process whose burst_time not equal to zero
    int remaining_process = n;
    int completion_time = processes[0].arrival_time;
    int index = 0; // starting with the first process

    while(remaining_process){
        // maintaining a flag to check if the process finished or not
        bool flag = false;

        completion_time = completion_time + 1;
        processes[index].remaining_time--;
        // decrease the remaining processes if burst_time is zero
        if(processes[index].remaining_time == 0){
            processes[index].completion_time = completion_time;
            processes[index].turnaround_time = processes[index].completion_time - processes[index].arrival_time;
            processes[index].waiting_time = processes[index].turnaround_time - processes[index].burst_time;
            remaining_process--;
            flag = true;
        }

        // if flag then select the process having minimum burst_time out of all the processes having arrival_time less than or equal to completion_time
        if(flag){
            int min_remain = INT_MAX;
            int min_index = -1;
            for(int i=0;i<n;++i){
                if(processes[i].remaining_time and processes[i].arrival_time <= completion_time and processes[i].remaining_time < min_remain){
                    min_remain = processes[i].remaining_time;
                    min_index = i;
                }
            }
            // if min_index is equal to -1 it means CPU is in ideal state and select the new process
            if(min_index == -1){
                while(index < n and processes[index].remaining_time == 0){
                    index++;
                }
            } else{
                index = min_index;
            }
        } else{
            for(int i=0;i<n;++i){
                if(processes[i].remaining_time and processes[i].arrival_time <= completion_time and processes[i].remaining_time < processes[index].remaining_time){
                    index = i;
                }
            }
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
        cout << "\"completion_time\":" << processes[i].completion_time << ",";
        cout << "\"turnaround_time\":" << processes[i].turnaround_time << ",";
        cout << "\"waiting_time\":" << processes[i].waiting_time;
        cout << "}";
        if (i < n - 1) cout << ",";
    }
    cout << "]";

    return 0;
}